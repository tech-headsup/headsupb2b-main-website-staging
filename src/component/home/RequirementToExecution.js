import { useTranslation } from "react-i18next";

const STEPS = [1, 2, 3, 4];

export default function RequirementToExecution() {
  const { t } = useTranslation();
  return (
    <div className="bg-white w-full pt-8 md:pt-12 pb-8 md:pb-12 px-6 md:px-12 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white border border-[#E5E5E5] rounded-2xl md:rounded-3xl px-6 py-10 md:px-14 md:py-16">
          <div className="text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111] mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t("services.how.heading")}
            </h2>
            <p
              className="text-sm sm:text-base text-[#555] mb-10 md:mb-14"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t("services.how.subtitle")}
            </p>
          </div>

          {/* Mobile */}
          <div className="md:hidden relative">
            <div
              className="absolute left-7 top-7 bottom-7 w-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, #5F4099 0%, rgba(95,64,153,0.15) 100%)",
                opacity: 0.4,
              }}
            />
            <div className="flex flex-col gap-8">
              {STEPS.map((n) => (
                <div key={n} className="flex items-start gap-4 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[#1a1a2e] text-xl font-extrabold flex-shrink-0"
                    style={{
                      background: "#80EBF7",
                      boxShadow: "0 4px 20px rgba(128,235,247,0.35)",
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {n}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <p
                      className="text-lg font-extrabold text-[#111] mb-1.5 leading-tight"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {t(`services.how.step${n}.title`)}
                    </p>
                    <p
                      className="text-sm text-[#555] leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {t(`services.how.step${n}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block relative">
            <div
              className="absolute top-8 left-[12%] right-[12%] h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(94,63,153,0.18), #80EBF7, rgba(94,63,153,0.18), transparent)",
              }}
            />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {STEPS.map((n) => (
                <div key={n} className="flex flex-col items-center text-center px-2">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-[#1a1a2e] text-2xl font-extrabold mb-5 flex-shrink-0"
                    style={{
                      background: "#80EBF7",
                      boxShadow: "0 8px 24px rgba(128,235,247,0.35)",
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {n}
                  </div>
                  <p
                    className="text-base lg:text-[17px] font-extrabold text-[#111] mb-2 leading-tight"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {t(`services.how.step${n}.title`)}
                  </p>
                  <p
                    className="text-sm text-[#555] leading-relaxed max-w-[220px]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t(`services.how.step${n}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
