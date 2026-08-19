import { useTranslation } from "react-i18next";

export default function CtaCardsSection({ onOpenSellModal, onOpenQuoteModal }) {
  const { t } = useTranslation();
  return (
    <section className="section section-no-top" style={{ paddingBottom: 40, marginTop: -24 }}>
      <div className="cta-container">
        <div className="cta-cards cta-single">
          <div className="cta-card cta-buyer">
            <span className="cta-tag">{t("solar.cta.tag")}</span>
            <h3>{t("solar.cta.heading")}</h3>
            <p>{t("solar.cta.subtitle")}</p>
            <div className="cta-btns">
              <button
                type="button"
                className="cta-btn cta-btn-mint"
                onClick={onOpenQuoteModal}
              >
                {t("solar.cta.getQuote")}
              </button>
              <button
                type="button"
                className="cta-btn cta-btn-outline"
                onClick={onOpenSellModal}
              >
                {t("solar.cta.uploadBom")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
