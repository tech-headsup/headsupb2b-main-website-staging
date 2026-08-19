import { useTranslation } from "react-i18next";

const PILLS = ["verified", "pricing", "credit", "delivery"];

export default function HowItWorksSection() {
  const { t } = useTranslation();
  return (
    <section className="section section-no-top how-section" style={{ paddingBottom: 40 }}>
      <div className="how-container">
        <div className="how-wrap">
          <div className="sec-header">
            <h2>{t("solar.how.heading")}</h2>
            <p>
              {t("solar.how.subtitle")}
            </p>
          </div>
          <div className="steps-row">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="step-item">
                <div className="step-num">{n}</div>
                <h4>{t(`solar.how.step${n}.title`)}</h4>
                <p className="font-medium">
                  {t(`solar.how.step${n}.desc`)}
                </p>
              </div>
            ))}
          </div>
          <div className="how-pills">
            {PILLS.map((k) => (
              <span key={k} className="how-pill">
                <span className="how-pill-dot" />
                {t(`solar.how.pills.${k}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
