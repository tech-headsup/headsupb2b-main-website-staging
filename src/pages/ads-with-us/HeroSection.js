import FloatingCard from "./FloatingCard";
import GenericForm from "./GenericForm";
import ModalPopUp from "./ModalPopUp";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

const HeroSection = ({ productOptions }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white -mx-10 -mt-10 mb-10">
      {/* ── Soft grey-lavender wash — same radial stack as the services page hero ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(178, 169, 198, 0.18) 0%, transparent 60%)," +
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(94, 63, 153, 0.1) 0%, transparent 60%)," +
            "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(178, 169, 198, 0.1) 0%, transparent 60%)",
        }}
      />

      {/* ── Blurred orbs — same three as the services page hero ── */}
      <div className="ads-hero-orb ads-hero-orb-1" />
      <div className="ads-hero-orb ads-hero-orb-2" />
      <div className="ads-hero-orb ads-hero-orb-3" />

    <section
      className="relative z-10 flex flex-col l:flex-row items-center gap-8 l:gap-12
                      max-w-[1280px] mx-auto
                      pt-[110px] pb-10 l:pb-12
                      px-4 t:px-8 l:px-8"
    >
      {/* Left Side */}
      <div className="w-full l:w-[47%] text-center l:text-left">
        <h1
          className="font-montserrat text-[48px] max-[1100px]:text-[42px] max-[768px]:text-[36px] max-[480px]:text-[32px] mb-[22px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-1.2px",
            color: "#1a1a1a",
          }}
        >
          {t("ads.hero.titlePart1")}
          <span style={{ color: "#5e3f99" }}>{t("ads.hero.titleNumber")}</span>
          {t("ads.hero.titlePart2")}
          <span style={{ color: "#5e3f99" }}>{t("ads.hero.titleHighlight")}</span>
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
            className="w-full ms:w-auto text-[#1a1a2e] py-[13px] px-5 rounded-[10px] text-[14px] font-bold font-montserrat tracking-[0.3px] leading-[1.3] border-none cursor-pointer transition-all duration-200 hover:-translate-y-px"
            style={{ background: "#80EBF7" }}
            onClick={() => setIsModalOpen(true)}
          >
            {t("ads.hero.showInterest")}
          </button>

          <a
            href="mailto:tanshi@headsupcorporation.com,raviranjan@headsupb2b.com"
            className="w-full ms:w-auto"
          >
            <button
              className="w-full ms:w-auto text-[#1a1a2e] py-[13px] px-5 rounded-[10px] text-[14px] font-bold font-montserrat tracking-[0.3px] leading-[1.3] border-none cursor-pointer transition-all duration-200 hover:-translate-y-px"
              style={{ background: "#80EBF7" }}
            >
              {t("ads.hero.talkExpert")}
            </button>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full l:w-[53%] mt-2 l:mt-0 max-w-md t:max-w-xl l:max-w-none mx-auto flex items-center justify-center">
        <FloatingCard />
      </div>

      {/* Modal */}
      <div >
        <ModalPopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <GenericForm productOptions={productOptions} setIsModalOpen={setIsModalOpen} />
        </ModalPopUp>
      </div>
    </section>

      <style jsx global>{`
        .ads-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: ads-hero-float 20s ease-in-out infinite;
        }
        .ads-hero-orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(178, 169, 198, 0.18);
          top: 10%;
          left: -5%;
          animation-delay: 0s;
        }
        .ads-hero-orb-2 {
          width: 300px;
          height: 300px;
          background: rgba(94, 63, 153, 0.08);
          top: 60%;
          right: -5%;
          animation-delay: -7s;
        }
        .ads-hero-orb-3 {
          width: 250px;
          height: 250px;
          background: rgba(178, 169, 198, 0.14);
          bottom: 10%;
          left: 40%;
          animation-delay: -14s;
        }
        @keyframes ads-hero-float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 15px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
