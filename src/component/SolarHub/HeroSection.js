"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

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
      className="relative w-full max-w-full mx-auto"
    >
      {/* Image container — same framed card as the services / advertise hero */}
      <div className="hero-image-card rounded-2xl shadow-xl relative overflow-hidden p-3 t:p-5 l:p-6 ll:p-8 w-full">
        <Image
          src="/solar-hub-banner.png"
          alt="Headsup B2B Solar Hub"
          width={1100}
          height={1100}
          priority
          className="w-full h-auto object-contain rounded-lg block"
        />
      </div>
    </motion.div>
  );
};

export default function HeroSection({ onOpenSellModal, onOpenQuoteModal }) {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">

            <h1>
              {t("solar.hero.headline1")}
              <span className="yellow-highlight"> {t("solar.hero.headline2")}</span>{" "}
              <span>{t("solar.hero.headline3")}</span>
            </h1>
            <p className="subtitle">
              {t("solar.hero.subtitle")}
            </p>
            <div className="hero-btns">
              <button type="button" className="btn-glow" onClick={onOpenQuoteModal}>
                {t("solar.hero.getQuote")}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button type="button" className="btn-outline" onClick={onOpenSellModal}>
                {t("solar.hero.uploadBom")}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <FloatingHeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
