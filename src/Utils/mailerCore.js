// Shared mailer-service helper. Used by all /api/send*Mail.js handlers.

function parseList(s) {
  return String(s || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

export function pickRecipients({ contactNo }) {
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

export function safe(s) {
  return String(s ?? "").trim();
}

export function interpolate(template, vars) {
  return String(template || "").replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) =>
    vars[key] != null ? String(vars[key]) : ""
  );
}

export function buildMeta() {
  const now = new Date();
  return {
    submittedAt: now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }),
    year: now.getFullYear(),
  };
}

export function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
  );
}

const BASE_REQUIRED = ["MAILER_URL", "MAILER_CLIENT_ID", "MAILER_API_KEY"];

export function checkEnv(res, extraKeys = []) {
  for (const key of [...BASE_REQUIRED, ...extraKeys]) {
    if (!process.env[key]) {
      res
        .status(500)
        .json({ success: false, error: `Missing env: ${key}` });
      return false;
    }
  }
  return true;
}

export async function sendMailerEmail({ templateId, to, data, logTag = "mailer" }) {
  const payload = {
    template_id: templateId,
    to,
    data,
  };

  const url = `${process.env.MAILER_URL.replace(/\/$/, "")}/api/send-email`;

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
    console.error(`[${logTag}] mailer error`, upstream.status, text.slice(0, 500));
    const err = new Error(`Mailer ${upstream.status}`);
    err.details = json || text.slice(0, 500);
    err.status = upstream.status;
    throw err;
  }

  return json;
}
