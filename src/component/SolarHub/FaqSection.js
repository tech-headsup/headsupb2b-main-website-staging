import FAQs from "@/component/FAQ/FAQs";
import { SOLAR_FAQ } from "./data";

export default function FaqSection() {
  return (
    <section className="section section-tight-top" style={{ marginTop: -30, paddingBottom: 0 }}>
      <div className="faq-container">
        <div className="faq-gap faq-custom-head">
          <FAQs FAQData={SOLAR_FAQ} />
        </div>
      </div>
    </section>
  );
}
