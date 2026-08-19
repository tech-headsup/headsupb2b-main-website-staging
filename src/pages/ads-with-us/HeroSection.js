import FloatingCard from "./FloatingCard";
import GenericForm from "./GenericForm";
import ModalPopUp from "./ModalPopUp";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

const HeroSection = ({ productOptions }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white -mx-10 -mt-10 mb-10">
    <section
      className="flex flex-col l:flex-row items-center gap-8 l:gap-12
                      max-w-[1280px] mx-auto
                      pt-16 pb-8 t:pt-[72px] t:pb-10 l:pt-[72px] l:pb-12 ll:pt-2
                      px-4 t:px-8 l:px-8
                      bg-white"
    >
      {/* Left Side */}
      <div className="w-full l:w-1/2 text-center l:text-left">
        <div
          className="font-montserrat text-headupb2b font-semibold
                      text-sm mm:text-base l:text-lg ll:text-xl
                      mb-2 mm:mb-3 l:mb-4"
        >
          {t("ads.hero.eyebrow")}
        </div>

        <h1
          className="font-montserrat text-[32px] mm:text-[36px] t:text-[52px] ll:text-[60px] mb-[22px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-1.5px",
          }}
        >
          {t("ads.hero.titlePart1")}
          <span className="text-headupb2b">{t("ads.hero.titleNumber")}</span>
          {t("ads.hero.titlePart2")}
          <span className="text-headupb2b">{t("ads.hero.titleHighlight")}</span>
          {t("ads.hero.titlePart3")}
        </h1>

        <p
          className="font-montserrat text-[#404040] font-medium leading-[1.65]
                    text-base
                    mb-3 mm:mb-4 l:mb-4"
        >
          <strong>{t("ads.hero.tagline")}</strong>
        </p>

        <p
          className="font-montserrat text-[#404040] leading-[1.65]
                    text-base
                    mb-6 mm:mb-7 l:mb-8 max-w-[580px] mx-auto l:mx-0"
        >
          <Trans i18nKey="ads.hero.description" components={{ strong: <strong /> }} />
        </p>
        <div className="flex flex-col ms:flex-row flex-wrap gap-3 ms:gap-4 justify-center l:justify-start">
          <button
            className="w-full ms:w-auto text-white py-3 px-6 rounded-2xl text-base l:text-lg font-medium border-none cursor-pointer transition-all duration-200 hover:bg-[#00b8d9] hover:-translate-y-px"
            style={{ background: "#00d4f5" }}
            onClick={() => setIsModalOpen(true)}
          >
            {t("ads.hero.showInterest")}
          </button>

          <a
            href="mailto:tanshi@headsupcorporation.com,raviranjan@headsupb2b.com"
            className="w-full ms:w-auto"
          >
            <button
              className="w-full ms:w-auto text-white py-3 px-6 rounded-2xl text-base l:text-lg font-medium border-none cursor-pointer transition-all duration-200 hover:bg-[#00b8d9] hover:-translate-y-px"
              style={{ background: "#00d4f5" }}
            >
              {t("ads.hero.talkExpert")}
            </button>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full l:w-1/2 mt-2 l:mt-0 max-w-md t:max-w-xl l:max-w-none mx-auto">
        <FloatingCard />
      </div>

      {/* Modal */}
      <div >
        <ModalPopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <GenericForm productOptions={productOptions} setIsModalOpen={setIsModalOpen} />
        </ModalPopUp>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
