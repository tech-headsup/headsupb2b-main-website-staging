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

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

const PILL = {
  green: "bg-[#e6f7ec] text-[#1a7f37]",
  amber: "bg-[#fdf3dd] text-[#8a6300]",
  red: "bg-[#fdeaea] text-[#c0392b]",
};
const VALUE_TONE = {
  positive: "text-[#4ade80]",
  negative: "text-[#ff9b6a]",
  neutral: "text-white",
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarProjectFinancingContractors() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical =
    "https://www.headsupb2b.com/research/solar-project-financing-contractors";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("solarFinancing.heroStats", { returnObjects: true }) || [];
  const HERO_TAGS = t("solarFinancing.heroTags", { returnObjects: true }) || [];
  const TOC = t("solarFinancing.toc", { returnObjects: true }) || [];
  const GAP_ROWS = t("solarFinancing.gapCard.rows", { returnObjects: true }) || [];
  const OPTION_HEADERS = t("solarFinancing.optionHeaders", { returnObjects: true }) || [];
  const OPTIONS = t("solarFinancing.options", { returnObjects: true }) || [];
  const CASH_ROWS = t("solarFinancing.cashCard.rows", { returnObjects: true }) || [];
  const WINDOW_HEADERS = t("solarFinancing.windowHeaders", { returnObjects: true }) || [];
  const WINDOW_ROWS = t("solarFinancing.windowRows", { returnObjects: true }) || [];
  const STEPS = t("solarFinancing.steps", { returnObjects: true }) || [];
  const QUALIFY = t("solarFinancing.qualify.items", { returnObjects: true }) || [];
  const LIMIT_HEADERS = t("solarFinancing.limitHeaders", { returnObjects: true }) || [];
  const LIMIT_ROWS = t("solarFinancing.limitRows", { returnObjects: true }) || [];
  const WIN_WAYS = t("solarFinancing.winWays.items", { returnObjects: true }) || [];
  const TAKEAWAYS = t("solarFinancing.takeaways", { returnObjects: true }) || [];
  const FAQS = t("solarFinancing.faqs", { returnObjects: true }) || [];
  const SOURCES = t("solarFinancing.sources.items", { returnObjects: true }) || [];
  const CTA_FEATURES = t("solarFinancing.cta.features", { returnObjects: true }) || [];
  const KEYWORDS = t("solarFinancing.keywords", { returnObjects: true }) || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("solarFinancing.meta.seoTitle")}
        description={t("solarFinancing.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("solarFinancing.meta.ogTitle"),
          description: t("solarFinancing.meta.ogDescription"),
          site_name: "Headsup B2B",
          images: [
            {
              url: "https://www.headsupb2b.com/solar-project-financing-contractors.webp",
              width: 1500,
              height: 750,
              alt: t("solarFinancing.meta.ogTitle"),
            },
          ],
        }}
      />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#2e1f4d] px-5 t:px-12 pt-16 pb-20">
        <div
          className="absolute -top-24 -left-16 w-[460px] h-[460px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-24 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.30) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2.5 mb-6 flex-wrap">
            <span className="bg-headupb2b text-white text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase">
              {t("solarFinancing.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarFinancing.hero.published")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarFinancing.hero.readTime")}</span>
          </div>
          <h1
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}
          >
            {t("solarFinancing.hero.title1")} <br className="hidden t:block" />
            {t("solarFinancing.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("solarFinancing.hero.subtitle")}
          </p>

          <div className="grid grid-cols-1 mm:grid-cols-2 l:grid-cols-4 gap-3 mt-9">
            {HERO_STATS.map((s) => (
              <div key={s.num} className="bg-white/95 rounded-2xl p-5 text-center">
                <div className="text-2xl t:text-[28px] font-black text-headupb2b leading-none mb-2">
                  {s.num}
                </div>
                <div className="text-[12px] text-gray-600 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-headupb2b/90 border border-white/10 px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {HERO_TAGS.map((c) => (
              <span key={c} className="text-[11px] t:text-[12px] font-bold uppercase tracking-[1.2px] text-white">
                {c}
              </span>
            ))}
          </div>

          <p className="text-[12px] text-white/45 mt-6">{t("solarFinancing.hero.sourceLine")}</p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">
        <Callout label={t("solarFinancing.whoFor.label")}>{t("solarFinancing.whoFor.body")}</Callout>

        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            {t("solarFinancing.tocLabel")}
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

        <p className={para}>{t("solarFinancing.intro.p1")}</p>
        <p className={para}>{t("solarFinancing.intro.p2")}</p>

        {/* 1 — THE PROBLEM */}
        <SectionHeading kicker={t("solarFinancing.sections.s1.kicker")}>
          {t("solarFinancing.sections.s1.title")}
        </SectionHeading>
        <p className={para}>{t("solarFinancing.s1p1")}</p>

        <div className="bg-[#fff5f2] border border-[#f9d5c7] rounded-2xl p-6 t:p-7 my-7">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-[#c0392b] mb-2">
            {t("solarFinancing.gapCard.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-4">
            {t("solarFinancing.gapCard.title")}
          </h3>
          <div className="space-y-2 mb-4">
            {GAP_ROWS.map((r) => (
              <p key={r.k} className="text-[15px] text-gray-700 leading-relaxed">
                <strong className="text-[#1a1330]">{r.k}</strong> {r.v}
              </p>
            ))}
          </div>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            {t("solarFinancing.gapCard.note")}
          </p>
        </div>

        <p className={para}>{t("solarFinancing.s1p2")}</p>

        {/* 2 — WHY IT COSTS BIDS */}
        <SectionHeading kicker={t("solarFinancing.sections.s2.kicker")}>
          {t("solarFinancing.sections.s2.title")}
        </SectionHeading>
        <p className={para} {...HTML(t("solarFinancing.s2p1"))} />
        <p className={para}>{t("solarFinancing.s2p2")}</p>

        <div className="bg-purple border-l-4 border-headupb2b rounded-r-xl p-6 my-8">
          <p className="text-[19px] t:text-xl font-bold text-[#1a1330] leading-snug italic">
            {t("solarFinancing.pullQuote.text")}
          </p>
          <p className="text-[13px] text-gray-500 mt-3">
            {t("solarFinancing.pullQuote.attribution")}
          </p>
        </div>

        {/* 3 — OPTIONS COMPARED */}
        <SectionHeading kicker={t("solarFinancing.sections.s3.kicker")}>
          {t("solarFinancing.sections.s3.title")}
        </SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[760px] border-collapse text-[14px]">
            <thead>
              <tr>
                {OPTION_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {OPTIONS.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top whitespace-nowrap">
                    {row.limit}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top whitespace-nowrap">
                    {row.rate}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 align-top">
                    <span
                      className={`inline-block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        PILL[row.collateralTone] || PILL.amber
                      }`}
                    >
                      {row.collateral}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-snug">
                    {row.best}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">{t("solarFinancing.optionNote")}</p>
        </div>

        {/* Mid CTA */}
        <div className="relative overflow-hidden bg-headupb2b rounded-2xl px-7 t:px-9 py-8 my-9">
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <h3 className="text-xl t:text-2xl font-black text-white mb-2.5">
              {t("solarFinancing.midCta.title")}
            </h3>
            <p className="text-white/75 text-[15px] leading-relaxed mb-6 max-w-[620px]">
              {t("solarFinancing.midCta.desc")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-7 py-3 rounded-lg text-[15px] font-bold hover:bg-gray-100 transition-colors"
            >
              {t("solarFinancing.midCta.btnText")}
            </button>
          </div>
        </div>

        {/* 4 — CASH FLOW MODEL */}
        <SectionHeading kicker={t("solarFinancing.sections.s4.kicker")}>
          {t("solarFinancing.sections.s4.title")}
        </SectionHeading>
        <div className="relative overflow-hidden bg-[#2e1f4d] rounded-2xl px-7 t:px-9 py-8 my-7">
          <div
            className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <div className="text-xs font-bold tracking-[1.5px] uppercase text-white/60 mb-2">
              {t("solarFinancing.cashCard.label")}
            </div>
            <h3 className="text-lg font-bold text-white mb-5">
              {t("solarFinancing.cashCard.title")}
            </h3>
            {CASH_ROWS.map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-baseline gap-5 py-3 border-b border-white/10"
              >
                <span className="text-[14px] t:text-[15px] text-white/75 leading-snug">
                  {row.label}
                </span>
                <span
                  className={`text-[15px] font-black whitespace-nowrap ${
                    VALUE_TONE[row.tone] || VALUE_TONE.neutral
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-baseline gap-5 pt-5">
              <span className="text-[15px] font-bold text-white leading-snug">
                {t("solarFinancing.cashCard.totalLabel")}
              </span>
              <span className="text-[19px] font-black text-[#4ade80] whitespace-nowrap">
                {t("solarFinancing.cashCard.totalValue")}
              </span>
            </div>
            <p className="text-[12px] text-white/45 mt-5 leading-relaxed">
              {t("solarFinancing.cashCard.note")}
            </p>
          </div>
        </div>
        <p className={para}>{t("solarFinancing.s4p1")}</p>

        {/* 5 — WHY 60 DAYS */}
        <SectionHeading kicker={t("solarFinancing.sections.s5.kicker")}>
          {t("solarFinancing.sections.s5.title")}
        </SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[680px] border-collapse text-[14px]">
            <thead>
              <tr>
                {WINDOW_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {WINDOW_ROWS.map((row, i) => (
                <tr key={i} className={row.highlight ? "bg-[#f3faf5]" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.option}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top whitespace-nowrap">
                    {row.credit}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold align-top leading-snug">
                    {row.cost}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-snug">
                    {row.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">{t("solarFinancing.windowNote")}</p>
        </div>

        {/* 6 — HOW IT WORKS */}
        <SectionHeading kicker={t("solarFinancing.sections.s6.kicker")}>
          {t("solarFinancing.sections.s6.title")}
        </SectionHeading>
        <p className={para}>{t("solarFinancing.s6p1")}</p>
        <div className="space-y-3 my-7">
          {STEPS.map((s, i) => (
            <div key={s.title} className="flex gap-4 p-5 rounded-2xl bg-[#faf9fd] border border-gray-200">
              <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-black text-[15px] flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[#1a1330] text-[15px] mb-1.5">{s.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 7 — QUALIFY */}
        <SectionHeading kicker={t("solarFinancing.sections.s7.kicker")}>
          {t("solarFinancing.sections.s7.title")}
        </SectionHeading>
        <div className="bg-purple border-l-4 border-headupb2b rounded-r-xl p-6 my-7">
          <div className="text-xs font-bold tracking-[1px] uppercase text-headupb2b mb-2">
            {t("solarFinancing.qualify.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-3">
            {t("solarFinancing.qualify.title")}
          </h3>
          <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-gray-700 leading-relaxed">
            {QUALIFY.map((q, i) => (
              <li key={i} {...HTML(q)} />
            ))}
          </ul>
        </div>

        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[600px] border-collapse text-[14px]">
            <thead>
              <tr>
                {LIMIT_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LIMIT_ROWS.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.profile}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold align-top whitespace-nowrap">
                    {row.limit}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-snug">
                    {row.req}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-[#f3faf5] p-6 t:p-7 my-8">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-[#1a7f37] mb-2">
            {t("solarFinancing.winWays.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-4">
            {t("solarFinancing.winWays.title")}
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-[15px] text-gray-700 leading-relaxed">
            {WIN_WAYS.map((w, i) => (
              <li key={i} {...HTML(w)} />
            ))}
          </ul>
        </div>

        {/* 8 — KEY TAKEAWAYS */}
        <SectionHeading kicker={t("solarFinancing.sections.s8.kicker")}>
          {t("solarFinancing.sections.s8.title")}
        </SectionHeading>
        <div className="space-y-3 my-7">
          {TAKEAWAYS.map((k, i) => (
            <div key={k.title} className="flex gap-4 p-5 rounded-2xl bg-[#faf9fd] border border-gray-200">
              <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-black text-[15px] flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[#1a1330] text-[15px] mb-1.5">{k.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{k.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <SectionHeading kicker={t("solarFinancing.sections.faq.kicker")}>
          {t("solarFinancing.sections.faq.title")}
        </SectionHeading>
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

        {/* Sources */}
        <Callout label={t("solarFinancing.sources.title")}>
          <ol className="list-decimal pl-5 space-y-2">
            {SOURCES.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </Callout>

        {/* ── FINAL CTA ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-white/70 border border-white/25 rounded-full px-3.5 py-1 mb-5">
              {t("solarFinancing.cta.kicker")}
            </span>
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("solarFinancing.cta.heading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[560px] mx-auto mb-7">
              {t("solarFinancing.cta.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
              {CTA_FEATURES.map((f) => (
                <span key={f} className="text-[13px] text-white/70 flex items-center gap-2">
                  <span className="font-black text-white">✓</span> {f}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {t("solarFinancing.cta.button")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">{t("solarFinancing.cta.footer")}</p>
          </div>
        </div>

        {/* ── ARTICLE FOOTER ── */}
        <p className="text-[13px] text-gray-500 mt-12">{t("solarFinancing.footer.publishedLine")}</p>

        {/* ── RELATED KEYWORDS ── */}
        <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
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
          title={t("solarFinancing.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
