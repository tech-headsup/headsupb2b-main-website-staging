"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

const TIER_STYLE = {
  Premium: "bg-headupb2b text-white",
  "Mid-range": "bg-headupb2b/15 text-headupb2b",
  Economy: "bg-gray-100 text-gray-600",
};

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
export default function SolarPumpPriceGuide() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/solar-pump-price-india-2026";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("solarPumpPrice.heroStats", { returnObjects: true }) || [];
  const TOC = t("solarPumpPrice.toc", { returnObjects: true }) || [];
  const PRICE_CARDS = t("solarPumpPrice.priceCards", { returnObjects: true }) || [];
  const BENCHMARK_ROWS = t("solarPumpPrice.benchmarkRows", { returnObjects: true }) || [];
  const STATE_ROWS = t("solarPumpPrice.stateRows", { returnObjects: true }) || [];
  const INCLUSION_ROWS = t("solarPumpPrice.inclusionRows", { returnObjects: true }) || [];
  const BRANDS = t("solarPumpPrice.brands", { returnObjects: true }) || [];
  const FACTOR_ROWS = t("solarPumpPrice.factorRows", { returnObjects: true }) || [];
  const BULK_ROWS = t("solarPumpPrice.bulkRows", { returnObjects: true }) || [];
  const GST_ROWS = t("solarPumpPrice.gstRows", { returnObjects: true }) || [];
  const FAQS = t("solarPumpPrice.faqs", { returnObjects: true }) || [];
  const benchmarkHeaders = t("solarPumpPrice.tableHeaders.benchmark", { returnObjects: true }) || [];
  const stateHeaders = t("solarPumpPrice.tableHeaders.state", { returnObjects: true }) || [];
  const inclusionHeaders = t("solarPumpPrice.tableHeaders.inclusion", { returnObjects: true }) || [];
  const factorHeaders = t("solarPumpPrice.tableHeaders.factor", { returnObjects: true }) || [];
  const bulkHeaders = t("solarPumpPrice.tableHeaders.bulk", { returnObjects: true }) || [];
  const gstHeaders = t("solarPumpPrice.tableHeaders.gst", { returnObjects: true }) || [];
  const tierLabels = t("solarPumpPrice.tierLabels", { returnObjects: true }) || {};
  const cardLabels = t("solarPumpPrice.cardLabels", { returnObjects: true }) || {};

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("solarPumpPrice.meta.seoTitle")}
        description={t("solarPumpPrice.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("solarPumpPrice.meta.ogTitle"),
          description: t("solarPumpPrice.meta.ogDescription"),
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
              {t("solarPumpPrice.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarPumpPrice.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarPumpPrice.hero.updated")}</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            {t("solarPumpPrice.hero.title1")} <br className="hidden t:block" />
            {t("solarPumpPrice.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("solarPumpPrice.hero.subtitle")}
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
            {t("solarPumpPrice.tocLabel")}
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
        <SectionHeading kicker="01">{t("solarPumpPrice.sections.s1")}</SectionHeading>
        <p className={para}>{t("solarPumpPrice.s1p1")}</p>
        <div className="grid grid-cols-1 mm:grid-cols-2 l:grid-cols-4 gap-4 my-7">
          {PRICE_CARDS.map((p) => (
            <div key={p.hp} className={`relative rounded-2xl border overflow-hidden ${p.popular ? "border-headupb2b shadow-lg" : "border-gray-200"}`}>
              {p.popular && (
                <div className="absolute top-3 right-3 bg-white text-headupb2b text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide z-10">
                  {t("solarPumpPrice.mostPopular")}
                </div>
              )}
              <div className="bg-headupb2b text-white text-center py-4">
                <div className="text-[11px] uppercase tracking-wider text-white/70">{t("solarPumpPrice.solarPumpLabel")}</div>
                <div className="text-2xl font-black">{p.hp}</div>
                <div className="text-[15px] font-bold mt-1">{p.price}</div>
                <div className="text-[11px] text-white/75 mt-1">{t("solarPumpPrice.afterSubsidy")}: {p.subsidy}</div>
              </div>
              <dl className="p-4 text-[13px] space-y-2.5">
                {[
                  [cardLabels.solarPanels, p.solar],
                  [cardLabels.waterOutput, p.output],
                  [cardLabels.bestFor, p.best],
                  [cardLabels.benchmark, p.bench],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-2">
                    <dt className="text-gray-500">{k}</dt>
                    <dd className="font-semibold text-[#1a1330] text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <Callout label={t("solarPumpPrice.callout1.label")}>
          {t("solarPumpPrice.callout1.body")}
        </Callout>

        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {benchmarkHeaders.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BENCHMARK_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 border-b border-gray-200 ${j === 0 ? "font-semibold text-[#1a1330]" : "text-gray-700"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2 */}
        <SectionHeading kicker="02">{t("solarPumpPrice.sections.s2")}</SectionHeading>
        <p className={para}>{t("solarPumpPrice.s2p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {stateHeaders.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STATE_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 border-b border-gray-200 ${j === 0 ? "font-semibold text-[#1a1330]" : "text-gray-700"} ${j === 3 && cell === "10%" ? "text-headupb2b font-bold" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("solarPumpPrice.callout2.label")}>
          {t("solarPumpPrice.callout2.body")}
        </Callout>

        {/* 3 */}
        <SectionHeading kicker="03">{t("solarPumpPrice.sections.s3")}</SectionHeading>
        <p className={para}>{t("solarPumpPrice.s3p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {inclusionHeaders.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INCLUSION_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("solarPumpPrice.callout3.label")}>
          {t("solarPumpPrice.callout3.body")}
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">{t("solarPumpPrice.sections.s4")}</SectionHeading>
        <p className={para}>{t("solarPumpPrice.s4p1")}</p>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {BRANDS.map((b) => (
            <div key={b.name} className="rounded-2xl border border-gray-200 p-5 hover:border-headupb2b transition-colors">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-base font-bold text-[#1a1330]">{b.name}</h3>
                <span className={`text-[10px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded ${TIER_STYLE[b.tier]}`}>
                  {tierLabels[b.tier] || b.tier}
                </span>
              </div>
              <div className="text-[15px] font-bold text-headupb2b mb-2">{b.price}</div>
              <p className="text-[13px] text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <Callout label={t("solarPumpPrice.callout4.label")}>
          {t("solarPumpPrice.callout4.body")}
        </Callout>

        {/* 5 */}
        <SectionHeading kicker="05">{t("solarPumpPrice.sections.s5")}</SectionHeading>
        <p className={para}>{t("solarPumpPrice.s5p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {factorHeaders.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FACTOR_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-semibold">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">{t("solarPumpPrice.sections.s6")}</SectionHeading>
        <p className={para}>{t("solarPumpPrice.s6p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {bulkHeaders.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BULK_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-semibold">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("solarPumpPrice.callout5.label")}>
          {t("solarPumpPrice.callout5.body")}
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">{t("solarPumpPrice.sections.s7")}</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {gstHeaders.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GST_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-semibold">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("solarPumpPrice.callout6.label")}>
          {t("solarPumpPrice.callout6.body")}
        </Callout>

        {/* 8 */}
        <SectionHeading kicker="08">{t("solarPumpPrice.sections.s8")}</SectionHeading>
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
              {t("solarPumpPrice.ctaHeading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              {t("solarPumpPrice.ctaSubtitle")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {t("solarPumpPrice.ctaButton")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              {t("solarPumpPrice.ctaFooter")}
            </p>
          </div>
        </div>
      </article>

      {showRequestConsultation && (
        <GetInTouch
          title={t("solarPumpPrice.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
