import { useTranslation } from "react-i18next";
import CallSVG from "@/assets/images/svg/CallSVG";
import ChatSVG from "@/assets/images/svg/ChatSVG";
import GetInstantQuoteSVG from "@/assets/images/svg/GetInstantQuoteSVG";

export default function CTABanner({ onGetQuote }) {
  const { t } = useTranslation();
  return (
    <div className="-mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-28 mb-12 md:mb-16">
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
    <div
      className="rounded-2xl flex flex-col items-center justify-center text-center p-4 sm:p-8 py-10 sm:py-14 md:py-16"
      style={{ background: "#4A3772" }}
    >
      <h2
        className="text-xl sm:text-2xl md:text-[36px] font-bold text-white mb-6 md:mb-8 leading-snug"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {t("home.cta.heading")}
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <button
          className="w-full sm:w-auto rounded-full px-8 py-3 font-bold text-sm sm:text-base text-[#1a1a2e] border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          style={{ background: "#80EBF7", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(128,235,247,0.35)" }}
          onClick={onGetQuote}
        >
          <span className="inline-block w-[18px] h-[18px] shrink-0">
            <GetInstantQuoteSVG color="#1a1a2e" />
          </span>
          {t("home.cta.getQuote")}
        </button>
        <button
          className="w-full sm:w-auto rounded-full px-8 py-3 font-bold text-sm sm:text-base text-[#111] bg-white border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 inline-flex items-center justify-center gap-2"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          onClick={() => { window.location.href = "tel:+919911902943"; }}
        >
          <span className="inline-block w-5 h-5 shrink-0">
            <CallSVG color="#111" />
          </span>
          {t("home.cta.talkTeam")}
        </button>
        <button
          className="w-full sm:w-auto rounded-full px-8 py-3 font-bold text-sm sm:text-base text-[#4A3772] border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          style={{ background: "#80EBF7", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(128,235,247,0.35)" }}
          onClick={() => { window.open("https://wa.me/+918595736388", "_blank", "noopener,noreferrer"); }}
        >
          <span className="inline-block w-[22px] h-[22px] shrink-0">
            <ChatSVG color="#4A3772" />
          </span>
          {t("home.cta.chatwithus")}
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}
