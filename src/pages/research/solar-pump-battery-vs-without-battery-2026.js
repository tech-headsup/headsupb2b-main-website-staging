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

function ChoiceBadge({ choice, withoutLabel, withLabel }) {
  const isWithout = choice === "Without Battery";
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[12px] font-bold whitespace-nowrap ${
        isWithout ? "bg-headupb2b text-white" : "bg-slate-200 text-slate-700"
      }`}
    >
      {isWithout ? withoutLabel : withLabel}
    </span>
  );
}

function YesNoBadge({ yes, yesLabel, noLabel }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[12px] font-bold whitespace-nowrap ${
        yes ? "bg-headupb2b text-white" : "bg-slate-200 text-slate-700"
      }`}
    >
      {yes ? yesLabel : noLabel}
    </span>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarPumpBatteryVsWithoutBatteryGuide() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/solar-pump-battery-vs-without-battery-2026";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("pumpBatteryCompare.heroStats", { returnObjects: true }) || [];
  const TOC = t("pumpBatteryCompare.toc", { returnObjects: true }) || [];
  const HOW_IT_WORKS = t("pumpBatteryCompare.howItWorks", { returnObjects: true }) || [];
  const PROS_WITHOUT = t("pumpBatteryCompare.prosWithout", { returnObjects: true }) || [];
  const CONS_WITHOUT = t("pumpBatteryCompare.consWithout", { returnObjects: true }) || [];
  const PROS_WITH = t("pumpBatteryCompare.prosWith", { returnObjects: true }) || [];
  const CONS_WITH = t("pumpBatteryCompare.consWith", { returnObjects: true }) || [];
  const COST_ROWS = t("pumpBatteryCompare.costRows", { returnObjects: true }) || [];
  const WHEN_TO_CHOOSE = t("pumpBatteryCompare.whenToChoose", { returnObjects: true }) || [];
  const BATTERY_TYPES = t("pumpBatteryCompare.batteryTypes", { returnObjects: true }) || [];
  const SYSTEM_CONFIGS = t("pumpBatteryCompare.systemConfigs", { returnObjects: true }) || [];
  const SUBSIDY_ROWS = t("pumpBatteryCompare.subsidyRows", { returnObjects: true }) || [];
  const TANK_VS_BATTERY = t("pumpBatteryCompare.tankVsBattery", { returnObjects: true }) || [];
  const KEYWORDS = t("pumpBatteryCompare.keywords", { returnObjects: true }) || [];
  const FAQS = t("pumpBatteryCompare.faqs", { returnObjects: true }) || [];
  const badgeWithout = t("pumpBatteryCompare.badges.without");
  const badgeWith = t("pumpBatteryCompare.badges.with");
  const yesLabel = t("pumpBatteryCompare.yes");
  const noLabel = t("pumpBatteryCompare.no");

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("pumpBatteryCompare.meta.seoTitle")}
        description={t("pumpBatteryCompare.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("pumpBatteryCompare.meta.ogTitle"),
          description: t("pumpBatteryCompare.meta.ogDescription"),
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
              {t("pumpBatteryCompare.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("pumpBatteryCompare.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("pumpBatteryCompare.hero.updated")}</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            {t("pumpBatteryCompare.hero.title1")} <br className="hidden t:block" />
            {t("pumpBatteryCompare.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("pumpBatteryCompare.hero.subtitle")}
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
            {t("pumpBatteryCompare.tocLabel")}
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
        <SectionHeading kicker="01">{t("pumpBatteryCompare.sections.s1")}</SectionHeading>
        <p className={para}>{t("pumpBatteryCompare.s1p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("pumpBatteryCompare.th.component")}</Th>
                <Th>{t("pumpBatteryCompare.th.withoutBattery")}</Th>
                <Th>{t("pumpBatteryCompare.th.withBattery")}</Th>
              </tr>
            </thead>
            <tbody>
              {HOW_IT_WORKS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("pumpBatteryCompare.callout1.label")}>
          {t("pumpBatteryCompare.callout1.body")}
        </Callout>

        {/* 2 */}
        <SectionHeading kicker="02">{t("pumpBatteryCompare.sections.s2")}</SectionHeading>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-5 my-7">
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-headupb2b text-white px-5 py-3 font-bold text-[15px] text-center">
              {t("pumpBatteryCompare.headers.without")}
            </div>
            <ul className="p-5 space-y-2.5">
              {PROS_WITHOUT.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] text-gray-700 leading-snug">
                  <span className="text-headupb2b font-bold shrink-0">+</span>
                  <span>{p}</span>
                </li>
              ))}
              {CONS_WITHOUT.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] text-gray-600 leading-snug">
                  <span className="text-gray-400 font-bold shrink-0">−</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#2e1f4d] text-white px-5 py-3 font-bold text-[15px] text-center">
              {t("pumpBatteryCompare.headers.with")}
            </div>
            <ul className="p-5 space-y-2.5">
              {PROS_WITH.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] text-gray-700 leading-snug">
                  <span className="text-headupb2b font-bold shrink-0">+</span>
                  <span>{p}</span>
                </li>
              ))}
              {CONS_WITH.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] text-gray-600 leading-snug">
                  <span className="text-gray-400 font-bold shrink-0">−</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3 */}
        <SectionHeading kicker="03">{t("pumpBatteryCompare.sections.s3")}</SectionHeading>
        <p className={para}>{t("pumpBatteryCompare.s3p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("pumpBatteryCompare.th.component")}</Th>
                <Th>{t("pumpBatteryCompare.th.withoutBattery")}</Th>
                <Th>{t("pumpBatteryCompare.th.withBattery")}</Th>
                <Th>{t("pumpBatteryCompare.th.extraCost")}</Th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((row, i) => (
                <tr key={row[0]} className={row[4] ? "bg-purple" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-extrabold text-headupb2b" : "font-semibold text-[#1a1330]"}`}>{row[0]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[1]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[2]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-headupb2b" : "text-headupb2b font-semibold"}`}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("pumpBatteryCompare.callout2.label")}>
          {t("pumpBatteryCompare.callout2.body")}
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">{t("pumpBatteryCompare.sections.s4")}</SectionHeading>
        <p className={para}>{t("pumpBatteryCompare.s4p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("pumpBatteryCompare.th.useCase")}</Th>
                <Th>{t("pumpBatteryCompare.th.recommended")}</Th>
                <Th>{t("pumpBatteryCompare.th.reason")}</Th>
              </tr>
            </thead>
            <tbody>
              {WHEN_TO_CHOOSE.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 align-top"><ChoiceBadge choice={row[1]} withoutLabel={badgeWithout} withLabel={badgeWith} /></td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5 */}
        <SectionHeading kicker="05">{t("pumpBatteryCompare.sections.s5")}</SectionHeading>
        <p className={para}>{t("pumpBatteryCompare.s5p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("pumpBatteryCompare.th.batteryType")}</Th>
                <Th>{t("pumpBatteryCompare.th.lifespan")}</Th>
                <Th>{t("pumpBatteryCompare.th.cost5HP")}</Th>
                <Th>{t("pumpBatteryCompare.th.maintenance")}</Th>
                <Th>{t("pumpBatteryCompare.th.bestFor")}</Th>
              </tr>
            </thead>
            <tbody>
              {BATTERY_TYPES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("pumpBatteryCompare.th.systemConfig")}</Th>
                <Th>{t("pumpBatteryCompare.th.howItWorks")}</Th>
                <Th>{t("pumpBatteryCompare.th.bestSuited")}</Th>
                <Th>{t("pumpBatteryCompare.th.priceRange")}</Th>
              </tr>
            </thead>
            <tbody>
              {SYSTEM_CONFIGS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">{t("pumpBatteryCompare.sections.s6")}</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("pumpBatteryCompare.th.component")}</Th>
                <Th>{t("pumpBatteryCompare.th.coveredBySubsidy")}</Th>
                <Th>{t("pumpBatteryCompare.th.subsidyAmount")}</Th>
              </tr>
            </thead>
            <tbody>
              {SUBSIDY_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200"><YesNoBadge yes={row[1]} yesLabel={yesLabel} noLabel={noLabel} /></td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 7 */}
        <SectionHeading kicker="07">{t("pumpBatteryCompare.sections.s7")}</SectionHeading>
        <p className={para}>{t("pumpBatteryCompare.s7p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("pumpBatteryCompare.th.comparisonPoint")}</Th>
                <Th>{t("pumpBatteryCompare.th.batterySystem")}</Th>
                <Th>{t("pumpBatteryCompare.th.tankNoBattery")}</Th>
              </tr>
            </thead>
            <tbody>
              {TANK_VS_BATTERY.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("pumpBatteryCompare.callout3.label")}>
          {t("pumpBatteryCompare.callout3.body")}
        </Callout>

        {/* 8 */}
        <SectionHeading kicker="08">{t("pumpBatteryCompare.sections.s8")}</SectionHeading>
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
              {t("pumpBatteryCompare.ctaHeading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              {t("pumpBatteryCompare.ctaSubtitle")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {t("pumpBatteryCompare.ctaButton")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              {t("pumpBatteryCompare.ctaFooter")}
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
          title={t("pumpBatteryCompare.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
