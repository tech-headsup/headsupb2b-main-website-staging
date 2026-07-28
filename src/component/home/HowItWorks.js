const HIW_STEPS = [
  { n: 1, title: "Explore", desc: "Browse SKUs on our digital catalogue or website", desktopClass: "md:top-2" },
  { n: 2, title: "Customise", desc: "Get best prices, finance options & delivery timelines", desktopClass: "md:top-16" },
  { n: 3, title: "Enquire", desc: "Raise your requirement via RFQ or get on a sales call with our expert", desktopClass: "md:top-2" },
  { n: 4, title: "Procure", desc: "Confirm order, track live & receive assured delivery", desktopClass: "md:top-[4.5rem]" },
];

export default function HowItWorks({ onSubmit }) {
  return (
    <div className="bg-white w-full pt-12 md:pt-20 pb-12 md:pb-0 px-6 md:px-0">
    {/* <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8"> */}
      <h2
        className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center text-[#111] mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        How It Works
      </h2>

      <div className="relative w-full mt-10 mb-10 md:my-8">
        {/* ── Mobile timeline layout (< md) ── */}
        <div className="md:hidden relative">
          {/* Vertical connector line — aligned to circle center */}
          <div
            className="absolute left-7 top-7 bottom-7 w-px pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, #5F4099 0%, rgba(95,64,153,0.15) 100%)",
              opacity: 0.4,
            }}
          />
          <div className="flex flex-col gap-8">
            {HIW_STEPS.map((step) => (
              <div key={step.n} className="flex items-start gap-4 relative z-10">
                {/* Number circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0"
                  style={{
                    background: "#00d4f5",
                    boxShadow: "0 4px 20px rgba(0,212,245,0.4)",
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {step.n}
                </div>
                {/* Content */}
                <div className="flex-1 pt-1.5">
                  <p
                    className="text-xl font-extrabold text-[#111] mb-1.5 leading-tight"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-sm text-[#555] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop grid layout (md+) ── */}
        <div className="hidden md:block relative">
          {/* Wavy connector */}
          <svg
            className="absolute top-11 left-0 w-full h-20 pointer-events-none"
            viewBox="0 0 1434 105"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.419922 104.04C0.419922 104.04 109.22 -66.3599 368.42 30.0401C443.087 68.8734 627.22 125.84 766.42 43.04C813.253 22.7066 926.42 -26.96 1071.92 43.04C1217.42 113.04 1311.32 124.84 1432.92 30.0401"
              stroke="#5F4099"
            />
          </svg>

          <div className="grid grid-cols-4 gap-0 relative z-10">
            {HIW_STEPS.map((step) => (
              <div
                key={step.n}
                className={`flex flex-col items-center text-center px-4 relative ${step.desktopClass}`}
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-extrabold mb-4 sm:mb-5 flex-shrink-0"
                  style={{
                    background: "#00d4f5",
                    boxShadow: "0 4px 20px rgba(0,212,245,0.4)",
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {step.n}
                </div>
                <p
                  className="text-lg sm:text-[22px] font-extrabold text-[#111] mb-1.5 sm:mb-2 leading-tight"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {step.title}
                </p>
                <p
                  className="text-sm text-[#555] leading-relaxed max-w-[200px] sm:max-w-[180px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA button */}
      <div className="flex justify-center md:pb-0 mt-20">
        <button
          className="rounded-full px-7 sm:px-11 py-4 sm:py-[18px] font-bold text-sm sm:text-base text-white border-none cursor-pointer transition-all duration-200 hover:bg-[#5F4099] hover:-translate-y-0.5 w-full max-w-sm sm:w-auto"
          style={{
            background: "#4A3772",
            fontFamily: "'DM Sans', sans-serif",
          }}
          onClick={onSubmit}
        >
          Submit Your Requirement Today
        </button>
      </div>
    </div>
    // </div>
  );
}
