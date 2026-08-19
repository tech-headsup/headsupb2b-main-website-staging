import Image from "next/image";
import { useTranslation } from "react-i18next";

import IconInfrastructure from "@/assets/images/svg/who we serve/icon_Infrastructure & EPC.svg";
import IconWater from "@/assets/images/svg/who we serve/icon_Water, Drainage & Waste.svg";
import IconIndustrial from "@/assets/images/svg/who we serve/icon_Industrial & Manufacturing.svg";
import IconRenewable from "@/assets/images/svg/who we serve/icon_Renewable Energy & Power.svg";
import IconWarehousing from "@/assets/images/svg/who we serve/icon_Warehousing & Industrial Parks.svg";
import IconUrban from "@/assets/images/svg/who we serve/icon_Urban Development & Real Estate.svg";
import IconHeavy from "@/assets/images/svg/who we serve/icon_Heavy Utilities & Transmission.svg";

const WWS_TOP = [
  { key: "infrastructure", icon: IconInfrastructure },
  { key: "water", icon: IconWater },
  { key: "industrial", icon: IconIndustrial },
  { key: "renewable", icon: IconRenewable },
];

const WWS_BOTTOM = [
  { key: "warehousing", icon: IconWarehousing },
  { key: "urban", icon: IconUrban },
  { key: "heavy", icon: IconHeavy },
];

function WWSCard({ card }) {
  const { t } = useTranslation();
  const title = t(`home.whoWeServe.items.${card.key}.title`);
  const desc = t(`home.whoWeServe.items.${card.key}.desc`);
  return (
    <div className=" border border-[#e5e5e5] rounded-2xl p-5 sm:p-6 flex flex-col gap-3 bg-white transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8]">
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f0eef8] flex items-center justify-center flex-shrink-0">
        <Image src={card.icon} alt={title} width={150} height={150} style={{ objectFit: "contain" }} />
      </div>
      <p className="text-base sm:text-[17px] font-bold text-[#111] leading-snug" style={{ fontFamily: "'Manrope', sans-serif" }}>
        {title}
      </p>
      <p className="text-xs sm:text-sm text-[#666] leading-relaxed flex-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {desc}
      </p>
      <button
        onClick={() => { window.location.href = "tel:+919911902943"; }}
        className="w-fit rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 font-bold text-xs text-black border-none cursor-pointer transition-all duration-200 hover:bg-[#00b8d9] hover:-translate-y-px"
        style={{ background: "#80EBF7", fontFamily: "'DM Sans', sans-serif" }}
      >
        {t("common.talkToUs")}
      </button>
    </div>
  );
}

export default function WhoWeServe() {
  const { t } = useTranslation();
  return (
    <div className="bg-white max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 py-12 sm:py-16 md:py-20">
      <h2
        className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center text-[#111] mb-8 sm:mb-10 md:mb-12"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {t("home.whoWeServe.heading")}
      </h2>

      {/* Top row: 4 cards → 1 col → 2 col → 4 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-[1200px] mx-auto mb-4 sm:mb-5">
        {WWS_TOP.map((card) => <WWSCard key={card.key} card={card} />)}
      </div>

      {/* Bottom row: 3 cards → 1 col → 2 col → 3 col */}
      {/* On mobile all 7 cards flow as a single unified grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-[1200px] lg:max-w-[900px] mx-auto">
        {WWS_BOTTOM.map((card) => <WWSCard key={card.key} card={card} />)}
      </div>
    </div>
  );
}
