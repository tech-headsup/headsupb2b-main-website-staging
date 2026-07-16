export default function CtaCardsSection({ onOpenSellModal, onOpenQuoteModal }) {
  return (
    <section className="section section-no-top">
      <div className="container">
        <div className="cta-cards cta-single">
          <div className="cta-card cta-buyer">
            <span className="cta-tag">FOR BUYERS</span>
            <h3>Ready to source smarter?</h3>
            <p>Get expert-backed pricing, verified supply and reliable delivery.</p>
            <div className="cta-btns">
              <button
                type="button"
                className="cta-btn cta-btn-mint"
                onClick={onOpenQuoteModal}
              >
                Get a Quote
              </button>
              <button
                type="button"
                className="cta-btn cta-btn-outline"
                onClick={onOpenSellModal}
              >
                Upload BOM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
