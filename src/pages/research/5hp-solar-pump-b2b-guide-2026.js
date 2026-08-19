"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   SMALL PRESENTATIONAL COMPONENTS
───────────────────────────────────────────── */
function SectionHeading({ kicker, children }) {
  return (
    <div className="mt-14 mb-5">
      <div className="w-12 h-1 bg-headupb2b rounded-full mb-4" />
      {kicker && (
        <span className="text-xs font-semibold tracking-[1.5px] uppercase text-headupb2b">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl t:text-[28px] font-extrabold text-[#1a1330] leading-tight mt-1">
        {children}
      </h2>
    </div>
  );
}

function Callout({ label, title, children }) {
  return (
    <div className="bg-purple border-l-4 border-headupb2b rounded-r-xl p-6 my-8">
      {label && (
        <div className="text-xs font-bold tracking-[1px] uppercase text-headupb2b mb-2">
          {label}
        </div>
      )}
      {title && <h3 className="text-base font-bold text-[#1a1330] mb-2">{title}</h3>}
      <div className="text-[15px] text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">
      {children}
    </th>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function FiveHpSolarPumpGuide() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/5hp-solar-pump-b2b-guide-2026";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("fiveHpSolarPump.heroStats", { returnObjects: true }) || [];
  const TOC = t("fiveHpSolarPump.toc", { returnObjects: true }) || [];
  const POPULAR_ROWS = t("fiveHpSolarPump.popularRows", { returnObjects: true }) || [];
  const SPEC_ROWS = t("fiveHpSolarPump.specRows", { returnObjects: true }) || [];
  const PRICE_ROWS = t("fiveHpSolarPump.priceRows", { returnObjects: true }) || [];
  const USE_CASES = t("fiveHpSolarPump.useCases", { returnObjects: true }) || [];
  const SUBSURFACE_ROWS = t("fiveHpSolarPump.subsurfaceRows", { returnObjects: true }) || [];
  const MOTOR_ROWS = t("fiveHpSolarPump.motorRows", { returnObjects: true }) || [];
  const SOURCING_STEPS = t("fiveHpSolarPump.sourcingSteps", { returnObjects: true }) || [];
  const KEYWORDS = t("fiveHpSolarPump.keywords", { returnObjects: true }) || [];
  const FAQS = t("fiveHpSolarPump.faqs", { returnObjects: true }) || [];
  const POPULAR_HEADERS = t("fiveHpSolarPump.popularHeaders", { returnObjects: true }) || [];
  const PRICE_HEADERS = t("fiveHpSolarPump.priceHeaders", { returnObjects: true }) || [];
  const SUBSURFACE_HEADERS = t("fiveHpSolarPump.subsurfaceHeaders", { returnObjects: true }) || [];
  const MOTOR_HEADERS = t("fiveHpSolarPump.motorHeaders", { returnObjects: true }) || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("fiveHpSolarPump.meta.seoTitle")}
        description={t("fiveHpSolarPump.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("fiveHpSolarPump.meta.ogTitle"),
          description: t("fiveHpSolarPump.meta.ogDescription"),
          site_name: "Headsup B2B",
        }}
      />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#2e1f4d] px-5 t:px-12 pt-16 pb-20">
        <div className="absolute -top-24 -left-16 w-[460px] h-[460px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.30) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2.5 mb-6 flex-wrap">
            <span className="bg-headupb2b text-white text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase">
              {t("fiveHpSolarPump.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("fiveHpSolarPump.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("fiveHpSolarPump.hero.updated")}</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            {t("fiveHpSolarPump.hero.title1")} <br className="hidden t:block" />
            {t("fiveHpSolarPump.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("fiveHpSolarPump.hero.subtitle")}
          </p>

          {/* Hero stats */}
          <div className="grid grid-cols-2 l:grid-cols-4 gap-3 mt-9">
            {HERO_STATS.map((s) => (
              <div key={s.num} className="bg-white/95 rounded-2xl p-5 text-center">
                <div className="text-2xl t:text-[28px] font-black text-headupb2b leading-none mb-2">
                  {s.num}
                </div>
                <div className="text-[12px] text-gray-600 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">

        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            {t("fiveHpSolarPump.tocLabel")}
          </div>
          <ol className="grid grid-cols-1 t:grid-cols-2 gap-x-8 gap-y-2.5">
            {TOC.map((item, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-gray-700 leading-snug">
                <span className="font-bold text-headupb2b shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 1 */}
        <SectionHeading kicker="01">{t("fiveHpSolarPump.sections.s1")}</SectionHeading>
        <p className={para}>{t("fiveHpSolarPump.s1p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {POPULAR_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {POPULAR_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top w-[32%]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2 */}
        <SectionHeading kicker="02">{t("fiveHpSolarPump.sections.s2")}</SectionHeading>
        <p className={para}>{t("fiveHpSolarPump.s2p1")}</p>
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b">
            {t("fiveHpSolarPump.specTableLabel")}
          </div>
          <span className="bg-headupb2b text-white text-[11px] font-bold px-3 py-1 rounded-full">
            {t("fiveHpSolarPump.mnreCompliantBadge")}
          </span>
        </div>
        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse text-[14px]">
            <tbody>
              {SPEC_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top w-[34%]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("fiveHpSolarPump.callout1.label")}>
          {t("fiveHpSolarPump.callout1.body")}
        </Callout>

        {/* 3 */}
        <SectionHeading kicker="03">{t("fiveHpSolarPump.sections.s3")}</SectionHeading>
        <p className={para}>{t("fiveHpSolarPump.s3p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {PRICE_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map((row, i) => (
                <tr key={row[0]} className={row[5] ? "bg-purple" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[5] ? "font-extrabold text-headupb2b" : "font-semibold text-[#1a1330]"}`}>{row[0]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[5] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[1]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[5] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[2]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[5] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[3]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top text-[13px] ${row[5] ? "font-bold text-headupb2b" : "text-gray-500"}`}>{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("fiveHpSolarPump.callout2.label")}>
          {t("fiveHpSolarPump.callout2.body")}
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">{t("fiveHpSolarPump.sections.s4")}</SectionHeading>
        <p className={para}>{t("fiveHpSolarPump.s4p1")}</p>
        <div className="grid grid-cols-1 mm:grid-cols-2 l:grid-cols-3 gap-4 my-7">
          {USE_CASES.map(([title, desc]) => (
            <div key={title} className="bg-purple rounded-2xl p-5 border border-[#e9e3f5]">
              <div className="w-8 h-1 bg-headupb2b rounded-full mb-3" />
              <h3 className="font-bold text-[15px] text-[#1a1330] mb-2 leading-snug">{title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* 5 */}
        <SectionHeading kicker="05">{t("fiveHpSolarPump.sections.s5")}</SectionHeading>
        <p className={para}>{t("fiveHpSolarPump.s5p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {SUBSURFACE_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SUBSURFACE_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">{t("fiveHpSolarPump.sections.s6")}</SectionHeading>
        <p className={para}>{t("fiveHpSolarPump.s6p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {MOTOR_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MOTOR_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("fiveHpSolarPump.callout3.label")}>
          {t("fiveHpSolarPump.callout3.body")}
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">{t("fiveHpSolarPump.sections.s7")}</SectionHeading>
        <p className={para}>{t("fiveHpSolarPump.s7p1")}</p>
        <div className="space-y-4 my-7">
          {SOURCING_STEPS.map(([title, desc], i) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-bold flex items-center justify-center text-[15px]">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[16px] text-[#1a1330] mb-1 leading-snug">{title}</h3>
                <p className="text-[15px] text-gray-700 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 8 */}
        <SectionHeading kicker="08">{t("fiveHpSolarPump.sections.s8")}</SectionHeading>
        <div className="space-y-3 my-7">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-gray-200 p-5 open:border-headupb2b">
              <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-[#1a1330] text-[15px]">
                {f.q}
                <span className="text-headupb2b text-xl leading-none shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-[14px] text-gray-600 leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>

        {/* ── FINAL CTA ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("fiveHpSolarPump.ctaHeading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              {t("fiveHpSolarPump.ctaSubtitle")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {t("fiveHpSolarPump.ctaButton")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              {t("fiveHpSolarPump.ctaFooter")}
            </p>
          </div>
        </div>

        {/* ── RELATED KEYWORDS ── */}
        <div className="mt-14 border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 mm:grid-cols-3 l:grid-cols-5">
            {KEYWORDS.map((k) => (
              <div
                key={k}
                className="px-6 py-5 text-[15px] text-gray-600 bg-[#f8f9fb] border-b border-r border-gray-200 flex items-center"
              >
                {k}
              </div>
            ))}
          </div>
        </div>
      </article>

      {showRequestConsultation && (
        <GetInTouch
          title={t("fiveHpSolarPump.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
