"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

const ACTIVITY_STYLE = {
  "Very High": "bg-headupb2b text-white",
  High: "bg-headupb2b/15 text-headupb2b",
  Medium: "bg-headupb2b/10 text-headupb2b",
  Moderate: "bg-gray-100 text-gray-600",
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

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarPumpB2BGuide() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical =
    "https://www.headsupb2b.com/research/solar-pump-for-agriculture-b2b-supplier-guide-india";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("solarPumpAgriculture.heroStats", { returnObjects: true }) || [];
  const TOC = t("solarPumpAgriculture.toc", { returnObjects: true }) || [];
  const MARKET_CHARACTERISTICS = t("solarPumpAgriculture.marketCharacteristics", { returnObjects: true }) || [];
  const SUBSIDY_ROWS = t("solarPumpAgriculture.subsidyRows", { returnObjects: true }) || [];
  const PUMP_SPECS = t("solarPumpAgriculture.pumpSpecs", { returnObjects: true }) || [];
  const TECH_SPECS = t("solarPumpAgriculture.techSpecs", { returnObjects: true }) || [];
  const PROCUREMENT_STAGES = t("solarPumpAgriculture.procurementStages", { returnObjects: true }) || [];
  const NODAL_AGENCIES = t("solarPumpAgriculture.nodalAgencies", { returnObjects: true }) || [];
  const OPPORTUNITIES = t("solarPumpAgriculture.opportunities", { returnObjects: true }) || [];
  const STEPS = t("solarPumpAgriculture.steps", { returnObjects: true }) || [];
  const COMPLIANCE = t("solarPumpAgriculture.compliance", { returnObjects: true }) || [];
  const FAQS = t("solarPumpAgriculture.faqs", { returnObjects: true }) || [];
  const activityLabels = t("solarPumpAgriculture.activityLabels", { returnObjects: true }) || {};
  const specLabels = t("solarPumpAgriculture.specLabels", { returnObjects: true }) || {};

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("solarPumpAgriculture.meta.seoTitle")}
        description={t("solarPumpAgriculture.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("solarPumpAgriculture.meta.ogTitle"),
          description: t("solarPumpAgriculture.meta.ogDescription"),
          site_name: "Headsup B2B",
        }}
      />

      {/* ── HERO (was dark green → deep headsupb2b) ── */}
      <header className="relative overflow-hidden bg-[#2e1f4d] px-5 t:px-12 pt-16 pb-20">
        <div className="absolute -top-24 -left-16 w-[460px] h-[460px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.30) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2.5 mb-6 flex-wrap">
            <span className="bg-headupb2b text-white text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase">
              {t("solarPumpAgriculture.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarPumpAgriculture.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarPumpAgriculture.hero.updated")}</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            {t("solarPumpAgriculture.hero.title1")} <br className="hidden t:block" />
            {t("solarPumpAgriculture.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("solarPumpAgriculture.hero.subtitle")}
          </p>

          {/* Hero stats (was light green boxes → light purple) */}
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

        {/* TOC (was light green panel) */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            {t("solarPumpAgriculture.tocLabel")}
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
        <SectionHeading kicker="01">{t("solarPumpAgriculture.sections.s1")}</SectionHeading>
        <p className={para}>{t("solarPumpAgriculture.s1p1")}</p>
        <p className={para}>
          {t("solarPumpAgriculture.s1p2_a")} <strong>{t("solarPumpAgriculture.s1p2_strong1")}</strong>
          {t("solarPumpAgriculture.s1p2_b")} <strong>{t("solarPumpAgriculture.s1p2_strong2")}</strong>
          {t("solarPumpAgriculture.s1p2_c")}
        </p>
        <p className={para}>{t("solarPumpAgriculture.s1p3")}</p>
        <Callout label={t("solarPumpAgriculture.callout1.label")}>
          {t("solarPumpAgriculture.callout1.a")} <strong>{t("solarPumpAgriculture.callout1.strong")}</strong>
          {t("solarPumpAgriculture.callout1.b")}
        </Callout>

        {/* 2 */}
        <SectionHeading kicker="02">{t("solarPumpAgriculture.sections.s2")}</SectionHeading>
        <p className={para}>
          {t("solarPumpAgriculture.s2p1_a")} <strong>{t("solarPumpAgriculture.s2p1_strong")}</strong>
          {t("solarPumpAgriculture.s2p1_b")}
        </p>
        <p className={para}>{t("solarPumpAgriculture.s2p2")}</p>

        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">
                  {t("solarPumpAgriculture.th.marketCharacteristic")}
                </th>
                <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">
                  {t("solarPumpAgriculture.th.whatThisMeans")}
                </th>
              </tr>
            </thead>
            <tbody>
              {MARKET_CHARACTERISTICS.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{k}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout label={t("solarPumpAgriculture.callout2.label")} title={t("solarPumpAgriculture.callout2.title")}>
          {t("solarPumpAgriculture.callout2.a")} <strong>{t("solarPumpAgriculture.callout2.strong")}</strong>
          {t("solarPumpAgriculture.callout2.b")}
        </Callout>

        {/* 3 */}
        <SectionHeading kicker="03">{t("solarPumpAgriculture.sections.s3")}</SectionHeading>
        <p className={para}>{t("solarPumpAgriculture.s3p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {[
                  t("solarPumpAgriculture.th.state"),
                  t("solarPumpAgriculture.th.centralSubsidy"),
                  t("solarPumpAgriculture.th.stateSubsidy"),
                  t("solarPumpAgriculture.th.farmerShare"),
                  t("solarPumpAgriculture.th.nodalAgency"),
                ].map((h) => (
                  <th key={h} className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SUBSIDY_ROWS.map((row, i) => (
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
        <Callout label={t("solarPumpAgriculture.callout3.label")} title={t("solarPumpAgriculture.callout3.title")}>
          {t("solarPumpAgriculture.callout3.body")}
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">{t("solarPumpAgriculture.sections.s4")}</SectionHeading>
        <p className={para}>{t("solarPumpAgriculture.s4p1")}</p>
        <div className="grid grid-cols-1 mm:grid-cols-2 l:grid-cols-4 gap-4 my-7">
          {PUMP_SPECS.map((p) => (
            <div key={p.hp} className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-headupb2b text-white text-center py-4">
                <div className="text-[11px] uppercase tracking-wider text-white/70">{t("solarPumpAgriculture.solarPumpLabel")}</div>
                <div className="text-2xl font-black">{p.hp}</div>
              </div>
              <dl className="p-4 text-[13px] space-y-2.5">
                {[
                  [specLabels.solarCapacity, p.solar],
                  [specLabels.panelsRequired, p.panels],
                  [specLabels.waterOutput, p.output],
                  [specLabels.bestFor, p.best],
                  [specLabels.benchmark, p.cost],
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

        <h3 className="text-lg font-bold text-[#1a1330] mt-10 mb-4">{t("solarPumpAgriculture.mandatoryTechHeading")}</h3>
        <div className="overflow-x-auto my-5">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">{t("solarPumpAgriculture.th.component")}</th>
                <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">{t("solarPumpAgriculture.th.mandatorySpec")}</th>
              </tr>
            </thead>
            <tbody>
              {TECH_SPECS.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{k}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5 */}
        <SectionHeading kicker="05">{t("solarPumpAgriculture.sections.s5")}</SectionHeading>
        <p className={para}>{t("solarPumpAgriculture.s5p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {[
                  t("solarPumpAgriculture.th.stage"),
                  t("solarPumpAgriculture.th.whatHappens"),
                  t("solarPumpAgriculture.th.b2bVendorAction"),
                ].map((h) => (
                  <th key={h} className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PROCUREMENT_STAGES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-headupb2b align-top whitespace-nowrap">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">{t("solarPumpAgriculture.sections.s6")}</SectionHeading>
        <p className={para}>{t("solarPumpAgriculture.s6p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {[
                  t("solarPumpAgriculture.th.state"),
                  t("solarPumpAgriculture.th.nodalAgency"),
                  t("solarPumpAgriculture.th.activityLevel"),
                  t("solarPumpAgriculture.th.tenderPortal"),
                ].map((h) => (
                  <th key={h} className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NODAL_AGENCIES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    <span className={`px-2.5 py-1 rounded-full text-[12px] font-semibold ${ACTIVITY_STYLE[row[2]]}`}>
                      {activityLabels[row[2]] || row[2]}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("solarPumpAgriculture.callout4.label")}>
          {t("solarPumpAgriculture.callout4.body")}
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">{t("solarPumpAgriculture.sections.s7")}</SectionHeading>
        <p className={para}>{t("solarPumpAgriculture.s7p1")}</p>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {OPPORTUNITIES.map((o) => (
            <div key={o.role} className="rounded-2xl border border-gray-200 p-5 hover:border-headupb2b transition-colors">
              <span className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-headupb2b bg-purple px-2.5 py-1 rounded mb-3">
                {o.tag}
              </span>
              <h3 className="text-base font-bold text-[#1a1330] mb-2">{o.role}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-3">{o.desc}</p>
              <div className="text-[14px] font-bold text-headupb2b">{o.value}</div>
            </div>
          ))}
        </div>

        {/* 8 */}
        <SectionHeading kicker="08">{t("solarPumpAgriculture.sections.s8")}</SectionHeading>
        <div className="space-y-4 my-7">
          {STEPS.map(([title, body], i) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-gray-200 p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-headupb2b text-white font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1a1330] mb-1.5">{title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout label={t("solarPumpAgriculture.callout5.label")} title={t("solarPumpAgriculture.callout5.title")}>
          {t("solarPumpAgriculture.callout5.body")}
        </Callout>

        {/* 9 */}
        <SectionHeading kicker="09">{t("solarPumpAgriculture.sections.s9")}</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {[
                  t("solarPumpAgriculture.th.certification"),
                  t("solarPumpAgriculture.th.applicableTo"),
                  t("solarPumpAgriculture.th.issuingBody"),
                  t("solarPumpAgriculture.th.mandatory"),
                ].map((h) => (
                  <th key={h} className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPLIANCE.map((row, i) => (
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
        <Callout label={t("solarPumpAgriculture.callout6.label")}>
          {t("solarPumpAgriculture.callout6.body")}
        </Callout>

        {/* 10 */}
        <SectionHeading kicker="10">{t("solarPumpAgriculture.sections.s10")}</SectionHeading>
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

        {/* ── FINAL CTA (was green banner → headsupb2b) ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("solarPumpAgriculture.ctaHeading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              {t("solarPumpAgriculture.ctaSubtitle")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {t("solarPumpAgriculture.ctaButton")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              {t("solarPumpAgriculture.ctaFooter")}
            </p>
          </div>
        </div>
      </article>

      {showRequestConsultation && (
        <GetInTouch
          title={t("solarPumpAgriculture.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
