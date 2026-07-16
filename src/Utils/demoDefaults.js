export const DEMO_PHONE = "0123456789";

export const isDemoMode = () =>
  String(process.env.NEXT_PUBLIC_DEMO_CHECK || "").toLowerCase() === "true";

export const getDemoPhone = () => (isDemoMode() ? DEMO_PHONE : "");
