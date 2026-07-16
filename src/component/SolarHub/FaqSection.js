import FAQs from "@/component/FAQ/FAQs";
import { SOLAR_FAQ } from "./data";

export default function FaqSection() {
  return (
    <section className="section section-tight-top" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="faq-gap faq-custom-head">
          <div className="faq-head">
            <h3 className="faq-heading">FAQs</h3>
          </div>
          <FAQs FAQData={SOLAR_FAQ} />
        </div>
      </div>
    </section>
  );
}
