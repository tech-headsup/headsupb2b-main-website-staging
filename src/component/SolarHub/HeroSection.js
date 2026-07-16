import Image from "next/image";

export default function HeroSection({ onOpenSellModal, onOpenQuoteModal }) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">

            <h1>
              Everything you need to source
              <br />
              <span className="gradient-text">solar for your project in one place.</span>
            </h1>
            <p className="subtitle">
              Products, project kits, expertise and credit — from India's infrastructure sourcing partner.
            </p>
            <div className="hero-btns">
              <button type="button" className="btn-glow" onClick={onOpenQuoteModal}>
                Get a Quote
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button type="button" className="btn-outline" onClick={onOpenSellModal}>
                Upload Your BOM
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/solar-hub-banner.png"
              alt="Headsup B2B Solar Hub"
              width={1100}
              height={1100}
              priority
              style={{ height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
