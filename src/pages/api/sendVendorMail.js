import {
  pickRecipients,
  safe,
  interpolate,
  buildMeta,
  setCorsHeaders,
  checkEnv,
  sendMailerEmail,
} from "@/Utils/mailerCore";

const LOG = "sendVendorMail";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method Not Allowed" });

  if (!checkEnv(res, ["MAILER_VENDOR_TEMPLATE_ID"])) return;

  const body =
    typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const businessName = safe(body.businessName);
  const contactPerson = safe(body.contactPerson);
  const contactNo = safe(body.contactNo);
  const email = safe(body.email);
  const city = safe(body.city);
  const serviceArea = safe(body.serviceArea);
  const vendorType = safe(body.vendorType);
  const serviceCategory = safe(body.serviceCategory);
  const teamSize = safe(body.teamSize);
  const experience = safe(body.experience);

  if (!businessName || !contactNo) {
    return res
      .status(400)
      .json({ success: false, error: "BusinessName and contactNo required" });
  }

  const { to, isTest, demoMode } = pickRecipients({ contactNo });
  if (!to.length)
    return res
      .status(500)
      .json({ success: false, error: "No recipients configured" });
  if (demoMode) console.log(`[${LOG}] DEMO_CHECK=true → ${to.join(",")}`);

  const meta = buildMeta();
  const subjectTemplate =
    process.env.MAILER_VENDOR_SUBJECT ||
    "[HeadsupB2B] Vendor Onboarding – {{businessName}} | {{contactPerson}}";
  const subject = interpolate(subjectTemplate, {
    businessName,
    contactPerson,
    contactNo,
  });

  try {
    const json = await sendMailerEmail({
      templateId: process.env.MAILER_VENDOR_TEMPLATE_ID,
      to,
      data: {
        businessName,
        contactPerson,
        contactNo,
        email,
        city,
        serviceArea,
        vendorType,
        serviceCategory,
        teamSize,
        experience,
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
