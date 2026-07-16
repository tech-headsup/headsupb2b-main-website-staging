// Website-lead confirmation/notification mailer.
// Called from forms AFTER addWebsiteLead succeeds.
// Uses MAILER_WEBSITE_LEAD_TEMPLATE_ID.

const REQUIRED_ENV = [
  "MAILER_URL",
  "MAILER_CLIENT_ID",
  "MAILER_API_KEY",
  "MAILER_WEBSITE_LEAD_TEMPLATE_ID",
];

function parseList(s) {
  return String(s || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function pickRecipients({ contactNo }) {
  const trigger = process.env.MAILER_TEST_TRIGGER_PHONE || "0123456789";
  const testList = parseList(process.env.MAILER_TEST_RECIPIENTS);
  const prodList = parseList(process.env.MAILER_RECIPIENTS);
  const demoMode = String(process.env.DEMO_CHECK || "").toLowerCase() === "true";
  const isTriggerMatch = String(contactNo || "").trim() === trigger;
  const isTest = demoMode || isTriggerMatch;
  return {
    to: isTest && testList.length ? testList : prodList,
    isTest,
    demoMode,
  };
}

function safe(s) {
  return String(s ?? "").trim();
}

function interpolate(template, vars) {
  return String(template || "").replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) =>
    vars[key] != null ? String(vars[key]) : ""
  );
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
  );

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method Not Allowed" });

  for (const key of REQUIRED_ENV) {
    if (!process.env[key]) {
      return res.status(500).json({ success: false, error: `Missing env: ${key}` });
    }
  }

  const body =
    typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const name = safe(body.name);
  const contactNo = safe(body.contactNo);
  const email = safe(body.email);
  const category = safe(body.category);
  const product = safe(body.product);
  const pincode = safe(body.pincode);
  const gstNumber = safe(body.gstNumber);
  const address = safe(body.address);
  const message = safe(body.message);
  const source = safe(body.source);
  const adsSource = safe(body.adsSource) || "Organic Lead";

  if (!name || !contactNo) {
    return res
      .status(400)
      .json({ success: false, error: "Name and contactNo required" });
  }

  const { to, isTest, demoMode } = pickRecipients({ contactNo });
  if (!to.length) {
    return res
      .status(500)
      .json({ success: false, error: "No recipients configured" });
  }
  if (demoMode) {
    console.log(
      "[sendWebsiteLeadMail] DEMO_CHECK=true — routing to test recipients:",
      to.join(",")
    );
  }

  const now = new Date();
  const submittedAt = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const year = now.getFullYear();

  const subjectTemplate =
    process.env.MAILER_WEBSITE_LEAD_SUBJECT ||
    "[HeadsupB2B] New Website Lead – {{name}} | {{contactNo}}";

  const renderedSubject = interpolate(subjectTemplate, {
    name,
    contactNo,
    email,
    category,
    product,
    pincode,
    gstNumber,
    adsSource,
  });

  const payload = {
    template_id: process.env.MAILER_WEBSITE_LEAD_TEMPLATE_ID,
    to,
    data: {
      name,
      contactNo,
      email,
      category,
      product,
      pincode,
      gstNumber,
      address,
      message,
      source,
      adsSource,
      submittedAt,
      year,
      subject: renderedSubject,
      fromName: process.env.MAILER_FROM_NAME || "HeadsupB2B Leads",
    },
  };

  const url = `${process.env.MAILER_URL.replace(/\/$/, "")}/api/send-email`;

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.MAILER_CLIENT_ID,
        "x-api-key": process.env.MAILER_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const text = await upstream.text();
    let json = null;
    try {
      json = JSON.parse(text);
    } catch {}

    if (!upstream.ok) {
      console.error(
        "[sendWebsiteLeadMail] mailer error",
        upstream.status,
        text.slice(0, 500)
      );
      return res.status(502).json({
        success: false,
        error: `Mailer ${upstream.status}`,
        details: json || text.slice(0, 500),
      });
    }

    return res.status(200).json({
      success: true,
      isTest,
      demoMode,
      recipientsCount: to.length,
      mailer: json,
    });
  } catch (err) {
    console.error("[sendWebsiteLeadMail] network error", err);
    return res
      .status(502)
      .json({ success: false, error: err.message || "Mailer unreachable" });
  }
}
