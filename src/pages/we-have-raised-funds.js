import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { NextSeo } from "next-seo";
import TeamImage from "../assets/funds/team.png";
import FounderImage from "../assets/funds/founder.jpg";
import SumitFounderHeadsup from "../assets/funds/SumitFounderHeadsup.jpg";

const ExternalLinkIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function MilestoneCard({
  amount,
  amountLabel,
  heading,
  para,
  images,
  pdfHref,
  ctaLabel,
  reverse = false,
}) {
  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch bg-white border border-[#e5e5e5] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="w-full h-full flex flex-col gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full flex-1 min-h-[220px] lg:min-h-0 rounded-xl overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col justify-center gap-5">
        <div className="inline-flex items-center gap-3 self-start bg-[#f4f1fa] border border-[#e0d6f0] rounded-full px-4 py-2">
          <span
            className="text-lg md:text-xl font-extrabold text-[#5E3F99]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {amount}
          </span>
          <span className="text-xs md:text-sm font-semibold text-[#4A3772] uppercase tracking-wider">
            {amountLabel}
          </span>
        </div>

        <h2
          className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#111] leading-snug"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {heading}
        </h2>

        <p className="text-sm md:text-base text-[#555] leading-relaxed text-justify">
          {para}
        </p>

        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#4A3772] hover:bg-[#5E3F99] text-white font-bold px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {ctaLabel}
          <ExternalLinkIcon />
        </a>
      </div>
    </article>
  );
}

export default function WeHaveRaisedFunds() {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo canonical="https://www.headsupb2b.com/we-have-raised-funds" />

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f4f1fa] to-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 pt-14 md:pt-20 pb-10 md:pb-14 text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111] mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t("raisedFundsPage.pageHeading")}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-[#555] max-w-2xl mx-auto">
            {t("raisedFundsPage.pageSubtitle")}
          </p>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 pb-14 md:pb-20 flex flex-col gap-10 md:gap-14">
          <MilestoneCard
            amount={t("raisedFundsPage.amount1")}
            amountLabel={t("raisedFundsPage.amount1Label")}
            heading={t("raisedFundsPage.heading1")}
            para={t("raisedFundsPage.para1")}
            images={[
              { src: SumitFounderHeadsup, alt: t("raisedFundsPage.founderImageAlt") },
            ]}
            pdfHref="/funds/debt-capital-1665-crore.pdf"
            ctaLabel={t("raisedFundsPage.readPressRelease")}
            reverse
          />

          <MilestoneCard
            amount={t("raisedFundsPage.amount2")}
            amountLabel={t("raisedFundsPage.amount2Label")}
            heading={t("raisedFundsPage.heading2")}
            para={t("raisedFundsPage.para2")}
            images={[
              { src: FounderImage, alt: t("raisedFundsPage.founderImageAlt") },
              { src: TeamImage, alt: t("raisedFundsPage.teamImageAlt") },
            ]}
            pdfHref="/funds/fund-raised.pdf"
            ctaLabel={t("raisedFundsPage.readPressRelease")}
            reverse
          />
        </div>
      </section>
    </>
  );
}
