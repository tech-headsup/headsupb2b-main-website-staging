import BundleCarousel from "@/component/Carousel/BundleCarousel";
import { useTranslation } from "react-i18next";

export default function SupportingBuildSection({ bundles }) {
  const { t } = useTranslation();
  if (!bundles || bundles.length === 0) return null;

  return (
    <>
      <div className="flex flex-col w-full items-center text-center supporting-container">
        <h2
          className="section_heading mt-0 pl-0 text-center text-3xl md:text-[40px] font-extrabold text-[#111]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {t("solar.supporting.heading")}
        </h2>
        <p className="w-full mt-3 mb-6 text-[#666] text-base md:text-lg text-center">
          {t("solar.supporting.subtitle")}
        </p>
      </div>
      <section className="section section-no-top pt-0" style={{ paddingBottom: 16 }}>
        <div className="supporting-container">
          <BundleCarousel bundles={bundles} equalSlides matchHeight />
        </div>
      </section>
    </>
  );
}
