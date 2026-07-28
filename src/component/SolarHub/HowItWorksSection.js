export default function HowItWorksSection() {
  return (
    <section className="section section-no-top how-section">
      <div className="how-container">
        <div className="how-wrap">
          <div className="sec-header">
            <h2>How It Works</h2>
            <p>
              From enquiry to delivery
            </p>
          </div>
          <div className="steps-row">
            <div className="step-item">
              <div className="step-num">1</div>
              <h4>Tell us what you need</h4>
              <p className="font-medium">
                Pick a kit, browse products, <br /> or upload your BOM.
              </p>
            </div>
            <div className="step-item">
              <div className="step-num">2</div>
              <h4>Get a quote</h4>
              <p className="font-medium">
                Expert-checked pricing, <br /> back to you fast.
              </p>
            </div>
            <div className="step-item">
              <div className="step-num">3</div>
              <h4>Confirm</h4>
              <p className="font-medium">
                Approve the quote and <br /> lock your material.
              </p>
            </div>
            <div className="step-item">
              <div className="step-num">4</div>
              <h4>Delivered</h4>
              <p className="font-medium">
                Pan-India delivery, <br /> scheduled to your site.
              </p>
            </div>
          </div>
          <div className="how-pills">
            {[
              "Verified suppliers",
              "Competitive pricing",
              "Credit up to 61 days*",
              "Pan-India delivery",
            ].map((label) => (
              <span key={label} className="how-pill">
                <span className="how-pill-dot" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
