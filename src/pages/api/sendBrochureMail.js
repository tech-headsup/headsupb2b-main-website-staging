import {
  pickRecipients,
  safe,
  interpolate,
  buildMeta,
  setCorsHeaders,
  checkEnv,
  sendMailerEmail,
} from "@/Utils/mailerCore";

const LOG = "sendBrochureMail";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method Not Allowed" });

  if (!checkEnv(res, ["MAILER_BROCHURE_TEMPLATE_ID"])) return;

  const body =
    typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const name = safe(body.name);
  const contactNo = safe(body.contactNo || body.contact);
  const categoryName = safe(body.categoryName);
  const cataloguePdfURL = safe(body.cataloguePdfURL);

  if (!name || !contactNo) {
    return res
      .status(400)
      .json({ success: false, error: "Name and contactNo required" });
  }

  const { to, isTest, demoMode } = pickRecipients({ contactNo });
  if (!to.length)
    return res
      .status(500)
      .json({ success: false, error: "No recipients configured" });
  if (demoMode) console.log(`[${LOG}] DEMO_CHECK=true → ${to.join(",")}`);

  const meta = buildMeta();
  const subjectTemplate =
    process.env.MAILER_BROCHURE_SUBJECT ||
    "[HeadsupB2B] Brochure Download – {{name}} | {{categoryName}}";
  const subject = interpolate(subjectTemplate, { name, contactNo, categoryName });

  try {
    const json = await sendMailerEmail({
      templateId: process.env.MAILER_BROCHURE_TEMPLATE_ID,
      to,
      data: {
        name,
        contactNo,
        categoryName,
        cataloguePdfURL,
        ...meta,
        subject,
        fromName: process.env.MAILER_FROM_NAME || "HeadsupB2B Leads",
      },
      logTag: LOG,
    });
    return res.status(200).json({
      success: true,
      isTest,
      demoMode,
      recipientsCount: to.length,
      mailer: json,
    });
  } catch (err) {
    return res
      .status(502)
      .json({ success: false, error: err.message, details: err.details });
  }
}
