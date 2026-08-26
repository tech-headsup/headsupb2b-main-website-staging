// NOTE: useRef/useState below are only needed by the commented-out background video.
// import { useRef, useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import CustomSearch from "@/component/Form/Search/CustomSearch";
// import PosterImage from "@/assets/images/Home-Banner-image-8.webp";
import HeroIllustration from "@/assets/images/home-hero-illustration.png";

const FloatingHeroImage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [-10, 10],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.start({
      rotate: 2,
      scale: 1.05,
      transition: { type: "spring", stiffness: 200 },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      rotate: 0,
      scale: 1,
      y: [-10, 10],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      },
    });
  };

  return (
    <motion.div
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[640px] lg:max-w-none"
    >
      {/* Image container — white card on the hero wash, like the services page */}
      <div className="bg-gradient-to-br from-purple-500/35 to-purple-600 rounded-2xl shadow-xl relative overflow-hidden
                    p-3 t:p-5 l:p-6 ll:p-8">
        <Image
          src={HeroIllustration}
          alt=""
          aria-hidden="true"
          priority
          sizes="(max-width: 1023px) 95vw, 54vw"
          quality={80}
          className="w-full h-auto object-contain rounded-lg block"
        />
      </div>
    </motion.div>
  );
};

export default function HeroSection({ onGetQuote, onUploadQuote }) {
  const { t } = useTranslation();

  // shared CTA padding — wider horizontally on tablet (768–1023)
  const PAD = "py-[clamp(10px,1.8vw,14px)] px-[clamp(22px,3.5vw,38px)] md:px-20 lg:px-[clamp(22px,3.5vw,38px)]";

  // ── Background video disabled ──
  // const videoRef = useRef(null);
  // const [videoLoaded, setVideoLoaded] = useState(false);
  // const [isDesktop, setIsDesktop] = useState(false);
  //
  // useEffect(() => {
  //   const mq = window.matchMedia("(min-width: 768px)");
  //   setIsDesktop(mq.matches);
  //   const handler = (e) => setIsDesktop(e.matches);
  //   mq.addEventListener("change", handler);
  //   return () => mq.removeEventListener("change", handler);
  // }, []);

  return (
    <section className="relative w-full mt-0 xl:mt-[-80px] overflow-hidden bg-white">
      {/* ── Poster image — was the LCP element behind the video ──
      <Image
        src={PosterImage}
        alt=""
        aria-hidden="true"
        priority
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 1600px"
        quality={65}
        placeholder="blur"
        className="w-full h-auto block bg-[#291570] ms:pt-80 t:pt-64 ll:pt-80"
        style={{
          opacity: videoLoaded && isDesktop ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      />
      */}

      {/* ── Background video — disabled ──
      {isDesktop && (
        <video
          ref={videoRef}
          src="/B2B website banner (online-video-cutter.com).webm"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setVideoLoaded(true)}
          className="block bg-[#291570]"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />
      )}
      */}

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
      <div className="home-hero-orb home-hero-orb-1" />
      <div className="home-hero-orb home-hero-orb-2" />
      <div className="home-hero-orb home-hero-orb-3" />

      {/* ── Content: text left, illustration right ── */}
      <div
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-8 pt-[72px] xl:pt-[clamp(150px,13vw,190px)] flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14"
        style={{ paddingBottom: "clamp(44px, 6vw, 88px)" }}
      >
        {/* ── Left column ── */}
        <div className="w-full lg:w-[48%] flex flex-col items-start">
          {/* Search bar */}
          <div className="w-full flex justify-start -ml-4 mb-4 sm:mb-5 md:mb-6">
            <CustomSearch variant="hero" onLight />
          </div>

          {/* Headline */}
          <h1
            className="text-left mb-[22px] text-[48px] max-[1100px]:text-[42px] max-[768px]:text-[36px] max-[480px]:text-[32px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-1.2px",
              color: "#1a1a1a",
              maxWidth: "min(92vw, 880px)",
            }}
          >
            {t("home.hero.headlinePart1")}{" "}
            <span style={{ color: "#5E3F99" }}>{t("home.hero.headlinePart2")}</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-left mb-3 sm:mb-4"
            style={{
              color: "#404040",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.82rem, 2vw, 1.2rem)",
              maxWidth: "min(88vw, 680px)",
              lineHeight: 1.65,
            }}
          >
            {t("home.hero.subheadline")}
          </p>

          {/* Trust badge */}
          <p
            className="text-left font-semibold mb-5 sm:mb-7 md:mb-8"
            style={{
              color: "#5e3f99",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.7rem, 1.5vw, 0.92rem)",
            }}
          >
            {t("home.hero.trustBadge")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-stretch sm:items-center">
            <button
              onClick={onGetQuote}
              className={`rounded-full font-bold text-[#1a1a2e] border-none cursor-pointer tracking-wide transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto ${PAD}`}
              style={{
                background: "#80EBF7",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.82rem, 1.6vw, 1rem)",
              }}
            >
              {t("home.hero.getQuote")}
            </button>
            <button
              onClick={onUploadQuote}
              className={`rounded-full font-bold text-[#4A3772] bg-white border-2 border-[#4A3772] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto ${PAD}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.82rem, 1.6vw, 1rem)",
              }}
            >
              {t("home.hero.uploadQuote")}
            </button>
          </div>
        </div>

        {/* ── Right column: illustration ── */}
        <div className="w-full lg:w-[52%] xl:w-[54%] flex items-center justify-center lg:justify-end">
          <FloatingHeroImage />
        </div>
      </div>
      <style jsx global>{`
        .home-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: home-hero-float 20s ease-in-out infinite;
        }
        .home-hero-orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(178, 169, 198, 0.18);
          top: 10%;
          left: -5%;
          animation-delay: 0s;
        }
        .home-hero-orb-2 {
          width: 300px;
          height: 300px;
          background: rgba(94, 63, 153, 0.08);
          top: 60%;
          right: -5%;
          animation-delay: -7s;
        }
        .home-hero-orb-3 {
          width: 250px;
          height: 250px;
          background: rgba(178, 169, 198, 0.14);
          bottom: 10%;
          left: 40%;
          animation-delay: -14s;
        }
        @keyframes home-hero-float {
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
    </section>
  );
}
