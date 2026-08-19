import FAQs from "@/component/FAQ/FAQs";
import { useTranslation } from "react-i18next";
import { SOLAR_FAQ } from "./data";

export default function FaqSection() {
  const { i18n } = useTranslation();
  const bundle = i18n.getResourceBundle(i18n.language, "translation");
  const faqData = bundle?.solarFaqs?.length ? bundle.solarFaqs : SOLAR_FAQ;
  return (
    <section className="section section-tight-top" style={{ marginTop: -30, paddingBottom: 0 }}>
      <div className="faq-container">
        <div className="faq-gap faq-custom-head">
          <FAQs FAQData={faqData} />
        </div>
      </div>
    </section>
  );
}
