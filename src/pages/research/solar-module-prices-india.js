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
const TONE = {
  green: "text-[#1a7f37]",
  amber: "text-[#a06a00]",
  red: "text-[#c0392b]",
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarModulePricesIndia() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical =
    "https://www.headsupb2b.com/research/solar-module-prices-india";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("solarModulePrices.heroStats", { returnObjects: true }) || [];
  const HERO_TAGS = t("solarModulePrices.heroTags", { returnObjects: true }) || [];
  const TOC = t("solarModulePrices.toc", { returnObjects: true }) || [];
  const PRICE_HEADERS = t("solarModulePrices.priceHeaders", { returnObjects: true }) || [];
  const PRICE_ROWS = t("solarModulePrices.priceRows", { returnObjects: true }) || [];
  const ALMM_ITEMS = t("solarModulePrices.almmCallout.items", { returnObjects: true }) || [];
  const DRIVERS = t("solarModulePrices.drivers", { returnObjects: true }) || [];
  const COST_ROWS = t("solarModulePrices.costCard.rows", { returnObjects: true }) || [];
  const STRATEGIES = t("solarModulePrices.strategies", { returnObjects: true }) || [];
  const OUTLOOK = t("solarModulePrices.outlook", { returnObjects: true }) || [];
  const MANUFACTURERS = t("solarModulePrices.manufacturers.items", { returnObjects: true }) || [];
  const AVOID = t("solarModulePrices.avoid.items", { returnObjects: true }) || [];
  const TAKEAWAYS = t("solarModulePrices.takeaways", { returnObjects: true }) || [];
  const FAQS = t("solarModulePrices.faqs", { returnObjects: true }) || [];
  const SOURCES = t("solarModulePrices.sources.items", { returnObjects: true }) || [];
  const CTA_FEATURES = t("solarModulePrices.cta.features", { returnObjects: true }) || [];
  const KEYWORDS = t("solarModulePrices.keywords", { returnObjects: true }) || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("solarModulePrices.meta.seoTitle")}
        description={t("solarModulePrices.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("solarModulePrices.meta.ogTitle"),
          description: t("solarModulePrices.meta.ogDescription"),
          site_name: "Headsup B2B",
          images: [
            {
              url: "https://www.headsupb2b.com/solar-module-prices-india.webp",
              width: 1500,
              height: 750,
              alt: t("solarModulePrices.meta.ogTitle"),
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
              {t("solarModulePrices.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarModulePrices.hero.published")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarModulePrices.hero.readTime")}</span>
          </div>
          <h1
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}
          >
            {t("solarModulePrices.hero.title1")} <br className="hidden t:block" />
            {t("solarModulePrices.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("solarModulePrices.hero.subtitle")}
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

          <p className="text-[12px] text-white/45 mt-6">{t("solarModulePrices.hero.sourceLine")}</p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">
        {/* Market alert */}
        <div className="bg-[#fdeaea] border-l-4 border-[#c0392b] rounded-r-xl p-6 mb-10">
          <div className="text-xs font-bold tracking-[1px] uppercase text-[#c0392b] mb-3">
            {t("solarModulePrices.marketAlert.label")}
          </div>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            {t("solarModulePrices.marketAlert.body")}
          </p>
        </div>

        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            {t("solarModulePrices.tocLabel")}
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

        <Callout label={t("solarModulePrices.whoFor.label")}>
          {t("solarModulePrices.whoFor.body")}
        </Callout>

        <p className={para}>{t("solarModulePrices.intro.p1")}</p>
        <p className={para}>{t("solarModulePrices.intro.p2")}</p>
        <p className={para}>{t("solarModulePrices.intro.p3")}</p>

        {/* 1 — CURRENT PRICES */}
        <SectionHeading kicker={t("solarModulePrices.sections.s1.kicker")}>
          {t("solarModulePrices.sections.s1.title")}
        </SectionHeading>
        <p className={para}>{t("solarModulePrices.s1p1")}</p>
        <div
          className="bg-[#fffaf0] border-l-4 border-[#d9a300] rounded-r-xl p-5 my-7 text-[15px] text-gray-700 leading-relaxed"
          {...HTML(t("solarModulePrices.priceNote"))}
        />

        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[720px] border-collapse text-[14px]">
            <thead>
              <tr>
                {PRICE_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 align-top">
                    <span
                      className={`inline-block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        PILL[row.almmTone] || PILL.amber
                      }`}
                    >
                      {row.almm}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-snug">
                    {row.level}
                  </td>
                  <td
                    className={`px-4 py-3 border-b border-gray-200 align-top font-bold leading-snug ${
                      TONE[row.trendTone] || TONE.amber
                    }`}
                  >
                    {row.trend}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 align-top">
                    <span
                      className={`inline-block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        PILL[row.availTone] || PILL.amber
                      }`}
                    >
                      {row.avail}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#fffaf0] border-l-4 border-[#d9a300] rounded-r-xl p-6 my-8">
          <div className="text-xs font-bold tracking-[1px] uppercase text-[#8a6300] mb-2">
            {t("solarModulePrices.almmCallout.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-3">
            {t("solarModulePrices.almmCallout.title")}
          </h3>
          <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-gray-700 leading-relaxed">
            {ALMM_ITEMS.map((it, i) => (
              <li key={i} {...HTML(it)} />
            ))}
          </ul>
        </div>

        {/* 2 — PRICE DRIVERS */}
        <SectionHeading kicker={t("solarModulePrices.sections.s2.kicker")}>
          {t("solarModulePrices.sections.s2.title")}
        </SectionHeading>
        <p className={para}>{t("solarModulePrices.s2p1")}</p>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {DRIVERS.map((d, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col"
              style={{ borderTop: `4px solid ${d.dir === "up" ? "#c0392b" : "#1a7f37"}` }}
            >
              <div className="px-5 pt-5">
                <div
                  className={`text-xs font-bold tracking-[1.5px] uppercase ${
                    d.dir === "up" ? "text-[#c0392b]" : "text-[#1a7f37]"
                  }`}
                >
                  {d.label}
                </div>
                <h3 className="text-lg font-extrabold text-[#1a1330] mt-2 leading-snug">{d.title}</h3>
              </div>
              <div className="px-5 pb-5 pt-2 flex-1 flex flex-col">
                <p className="text-[14px] text-gray-600 leading-relaxed flex-1">{d.body}</p>
                <p
                  className={`text-[13.5px] font-bold leading-snug mt-4 ${
                    d.dir === "up" ? "text-[#c0392b]" : "text-[#1a7f37]"
                  }`}
                >
                  {d.impactLabel} {d.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 — COST IMPACT */}
        <SectionHeading kicker={t("solarModulePrices.sections.s3.kicker")}>
          {t("solarModulePrices.sections.s3.title")}
        </SectionHeading>
        <div className="relative overflow-hidden bg-[#2e1f4d] rounded-2xl px-7 t:px-9 py-8 my-7">
          <div
            className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <div className="text-xs font-bold tracking-[1.5px] uppercase text-white/60 mb-2">
              {t("solarModulePrices.costCard.label")}
            </div>
            <h3 className="text-lg font-bold text-white mb-5">
              {t("solarModulePrices.costCard.title")}
            </h3>
            {COST_ROWS.map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-baseline gap-5 py-3 border-b border-white/10"
              >
                <span className="text-[14px] t:text-[15px] text-white/75 leading-snug">
                  {row.label}
                </span>
                <span
                  className={`text-[15px] font-black text-right ${
                    row.tone === "negative" ? "text-[#ff9b6a]" : "text-white"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-baseline gap-5 pt-5">
              <span className="text-[15px] font-bold text-white">
                {t("solarModulePrices.costCard.totalLabel")}
              </span>
              <span className="text-[17px] font-black text-[#ffc861] text-right">
                {t("solarModulePrices.costCard.totalValue")}
              </span>
            </div>
          </div>
        </div>
        <p className={para}>{t("solarModulePrices.s3p1")}</p>

        <div className="bg-purple border-l-4 border-headupb2b rounded-r-xl p-6 my-8">
          <p className="text-[19px] t:text-xl font-bold text-[#1a1330] leading-snug italic">
            &ldquo;{t("solarModulePrices.pullQuote.text")}&rdquo;
          </p>
          <p className="text-[13px] text-gray-500 mt-3">
            {t("solarModulePrices.pullQuote.attribution")}
          </p>
        </div>

        {/* Mid CTA */}
        <div className="relative overflow-hidden bg-headupb2b rounded-2xl px-7 t:px-9 py-8 my-9">
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <h3 className="text-xl t:text-2xl font-black text-white mb-2.5">
              {t("solarModulePrices.midCta.title")}
            </h3>
            <p className="text-white/75 text-[15px] leading-relaxed mb-6 max-w-[620px]">
              {t("solarModulePrices.midCta.desc")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-7 py-3 rounded-lg text-[15px] font-bold hover:bg-gray-100 transition-colors"
            >
              {t("solarModulePrices.midCta.btnText")}
            </button>
          </div>
        </div>

        {/* 4 — STRATEGIES */}
        <SectionHeading kicker={t("solarModulePrices.sections.s4.kicker")}>
          {t("solarModulePrices.sections.s4.title")}
        </SectionHeading>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {STRATEGIES.map((s) => (
            <div key={s.n} className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <div className="px-5 pt-5">
                <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b">
                  / {s.n}
                </div>
                <h3 className="text-lg font-extrabold text-[#1a1330] mt-2 leading-snug">{s.title}</h3>
              </div>
              <div className="px-5 pb-5 pt-2 flex-1 flex flex-col">
                <p className="text-[14px] text-gray-600 leading-relaxed flex-1">{s.body}</p>
                <p className="text-[13.5px] font-bold text-[#1a7f37] leading-snug mt-4">{s.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 5 — OUTLOOK */}
        <SectionHeading kicker={t("solarModulePrices.sections.s5.kicker")}>
          {t("solarModulePrices.sections.s5.title")}
        </SectionHeading>
        <div className="my-7">
          {OUTLOOK.map((o, i) => (
            <div
              key={o.period}
              className={`flex flex-col t:flex-row gap-3 t:gap-6 py-5 ${
                i === OUTLOOK.length - 1 ? "" : "border-b border-gray-200"
              }`}
            >
              <div className="shrink-0 t:w-[150px]">
                <span className="inline-block text-[12px] font-bold text-headupb2b border border-headupb2b/30 rounded-full px-3 py-1 whitespace-nowrap">
                  {o.period}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1330] text-[15px] mb-1.5">{o.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{o.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 — MANUFACTURERS */}
        <SectionHeading kicker={t("solarModulePrices.sections.s6.kicker")}>
          {t("solarModulePrices.sections.s6.title")}
        </SectionHeading>
        <div className="rounded-2xl border border-gray-200 bg-[#f3faf5] p-6 t:p-7 my-7">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-[#1a7f37] mb-2">
            {t("solarModulePrices.manufacturers.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-4">
            {t("solarModulePrices.manufacturers.title")}
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-[15px] text-gray-700 leading-relaxed">
            {MANUFACTURERS.map((m, i) => (
              <li key={i} {...HTML(m)} />
            ))}
          </ul>
        </div>

        {/* 7 — WHAT TO AVOID */}
        <SectionHeading kicker={t("solarModulePrices.sections.s7.kicker")}>
          {t("solarModulePrices.sections.s7.title")}
        </SectionHeading>
        <div className="rounded-2xl border border-[#fbd5d5] bg-[#fff5f5] p-6 t:p-7 my-7">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-[#c0392b] mb-2">
            {t("solarModulePrices.avoid.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-4">
            {t("solarModulePrices.avoid.title")}
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-[15px] text-gray-700 leading-relaxed">
            {AVOID.map((a, i) => (
              <li key={i} {...HTML(a)} />
            ))}
          </ul>
        </div>

        {/* 8 — KEY TAKEAWAYS */}
        <SectionHeading kicker={t("solarModulePrices.sections.s8.kicker")}>
          {t("solarModulePrices.sections.s8.title")}
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
        <SectionHeading kicker={t("solarModulePrices.sections.faq.kicker")}>
          {t("solarModulePrices.sections.faq.title")}
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
        <Callout label={t("solarModulePrices.sources.title")}>
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
              {t("solarModulePrices.cta.kicker")}
            </span>
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("solarModulePrices.cta.heading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[560px] mx-auto mb-7">
              {t("solarModulePrices.cta.subtitle")}
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
              {t("solarModulePrices.cta.button")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">{t("solarModulePrices.cta.footer")}</p>
          </div>
        </div>

        {/* ── ARTICLE FOOTER ── */}
        <p className="text-[13px] text-gray-500 mt-12">{t("solarModulePrices.footer.publishedLine")}</p>

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
          title={t("solarModulePrices.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
