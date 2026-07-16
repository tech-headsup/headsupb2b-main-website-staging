import Image from "next/image";
import BOQSvg from "@/assets/images/svg/who we are svg/BOQ and Requirement Mapped Delivery.svg";
import CompetitivePriceSvg from "@/assets/images/svg/who we are svg/Get the Most Competitive Prices.svg";
import CollateralSvg from "@/assets/images/svg/who we are svg/Up to 60 days* Collateral Free Credit.svg";
import VerifiedSvg from "@/assets/images/svg/who we are svg/Verified Suppliers & OEM Network.svg";

const WHY_ITEMS = [
  { title: "Get the Most Competitive Prices", icon: CompetitivePriceSvg },
  { title: "Verified Suppliers & OEM Network", icon: VerifiedSvg },
  { title: "BOQ and Requirement Mapped Delivery", icon: BOQSvg },
  { title: "Up to 60 days* Collateral Free Credit", icon: CollateralSvg },
];

export default function WhyHeadsupB2B({ onContactUs, heading = "Why Headsup B2B?" }) {
  return (
    <div className="bg-[#f4f4f4] px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
      <h2
        className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center text-[#111] mb-8 sm:mb-10"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {heading}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-[1200px] mx-auto mb-8 sm:mb-10">
        {WHY_ITEMS.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center gap-3 sm:gap-4 border border-[#e5e5e5] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8] cursor-default"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                style={{ objectFit: "contain", display: "block", margin: "0 auto" }}
              />
            </div>
            <span
              className="text-sm sm:text-base md:text-[17px] font-bold text-[#111] leading-snug w-full text-center"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="rounded-full px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-sm sm:text-base text-white border-none cursor-pointer transition-all duration-200 hover:bg-[#5F4099] hover:-translate-y-0.5 w-full max-w-xs sm:w-auto"
          style={{ background: "#4A3772", fontFamily: "'DM Sans', sans-serif" }}
          onClick={onContactUs}
        >
          Contact Us Today
        </button>
      </div>
    </div>
  );
}