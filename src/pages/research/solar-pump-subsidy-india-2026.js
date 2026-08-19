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

function LevelBadge({ level, labels }) {
  const map = {
    "Very High": "bg-headupb2b text-white",
    High: "bg-[#7a5dbf] text-white",
    Medium: "bg-slate-200 text-slate-700",
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${map[level]}`}>
      {labels?.[level] || level}
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

function NumberedStep({ index, title, body }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-[#faf9fd] border border-gray-200">
      <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-black text-[15px] flex items-center justify-center">
        {index}
      </div>
      <div>
        <h3 className="font-bold text-[#1a1330] text-[15px] mb-1.5">{title}</h3>
        <p className="text-[14px] text-gray-600 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarPumpSubsidyIndiaGuide() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/solar-pump-subsidy-india-2026";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("solarPumpSubsidy.heroStats", { returnObjects: true }) || [];
  const TOC = t("solarPumpSubsidy.toc", { returnObjects: true }) || [];
  const SCHEME_ROWS = t("solarPumpSubsidy.schemeRows", { returnObjects: true }) || [];
  const MONEY_FLOW = t("solarPumpSubsidy.moneyFlow", { returnObjects: true }) || [];
  const STATES = t("solarPumpSubsidy.states", { returnObjects: true }) || [];
  const ELIGIBILITY_ROWS = t("solarPumpSubsidy.eligibilityRows", { returnObjects: true }) || [];
  const COVERAGE_ROWS = t("solarPumpSubsidy.coverageRows", { returnObjects: true }) || [];
  const STEPS = t("solarPumpSubsidy.steps", { returnObjects: true }) || [];
  const REJECTION_ROWS = t("solarPumpSubsidy.rejectionRows", { returnObjects: true }) || [];
  const NODAL_AGENCIES = t("solarPumpSubsidy.nodalAgencies", { returnObjects: true }) || [];
  const KEYWORDS = t("solarPumpSubsidy.keywords", { returnObjects: true }) || [];
  const FAQS = t("solarPumpSubsidy.faqs", { returnObjects: true }) || [];
  const levelLabels = t("solarPumpSubsidy.levels", { returnObjects: true }) || {};
  const yesLabel = t("solarPumpSubsidy.yes");
  const noLabel = t("solarPumpSubsidy.no");

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("solarPumpSubsidy.meta.seoTitle")}
        description={t("solarPumpSubsidy.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("solarPumpSubsidy.meta.ogTitle"),
          description: t("solarPumpSubsidy.meta.ogDescription"),
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
              {t("solarPumpSubsidy.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarPumpSubsidy.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarPumpSubsidy.hero.updated")}</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            {t("solarPumpSubsidy.hero.title1")} <br className="hidden t:block" />
            {t("solarPumpSubsidy.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("solarPumpSubsidy.hero.subtitle")}
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
            {t("solarPumpSubsidy.tocLabel")}
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
        <SectionHeading kicker="01">{t("solarPumpSubsidy.sections.s1")}</SectionHeading>
        <p className={para}>{t("solarPumpSubsidy.s1p1")}</p>
        <p className={para}>{t("solarPumpSubsidy.s1p2")}</p>
        <Callout label={t("solarPumpSubsidy.callout1.label")}>
          {t("solarPumpSubsidy.callout1.body")}
        </Callout>

        {/* 2 */}
        <SectionHeading kicker="02">{t("solarPumpSubsidy.sections.s2")}</SectionHeading>
        <p className={para}>{t("solarPumpSubsidy.s2p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("solarPumpSubsidy.th.aspect")}</Th>
                <Th>{t("solarPumpSubsidy.th.details")}</Th>
              </tr>
            </thead>
            <tbody>
              {SCHEME_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] w-1/3">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-[#1a1330] mt-10 mb-5">{t("solarPumpSubsidy.moneyFlowHeading")}</h3>
        <div className="space-y-3 my-5">
          {MONEY_FLOW.map((s, i) => (
            <NumberedStep key={s.title} index={i + 1} title={s.title} body={s.body} />
          ))}
        </div>

        {/* 3 */}
        <SectionHeading kicker="03">{t("solarPumpSubsidy.sections.s3")}</SectionHeading>
        <p className={para}>{t("solarPumpSubsidy.s3p1")}</p>
        <div className="grid grid-cols-1 t:grid-cols-2 l:grid-cols-3 gap-4 my-7">
          {STATES.map((s) => (
            <div key={s.state} className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-[#faf9fd] border-b border-gray-200">
                <div className="font-extrabold text-[#1a1330] text-[15px] leading-tight">{s.state}</div>
                <LevelBadge level={s.level} labels={levelLabels} />
              </div>
              <div className="p-4 space-y-1.5">
                <div className="text-[12px] text-gray-600">{t("solarPumpSubsidy.states_labels.nodalAgency")}: <span className="font-semibold text-[#1a1330]">{s.agency}</span></div>
                <div className="text-[12px] text-gray-600">{s.split}</div>
                <div className="text-[13px] font-bold text-headupb2b mt-2">{t("solarPumpSubsidy.states_labels.farmerPays5HP")}: {s.cost}</div>
              </div>
            </div>
          ))}
        </div>
        <Callout label={t("solarPumpSubsidy.callout2.label")}>
          {t("solarPumpSubsidy.callout2.body")}
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">{t("solarPumpSubsidy.sections.s4")}</SectionHeading>
        <p className={para}>{t("solarPumpSubsidy.s4p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("solarPumpSubsidy.th.criterion")}</Th>
                <Th>{t("solarPumpSubsidy.th.requirement")}</Th>
                <Th>{t("solarPumpSubsidy.th.notes")}</Th>
              </tr>
            </thead>
            <tbody>
              {ELIGIBILITY_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("solarPumpSubsidy.callout3.label")}>
          {t("solarPumpSubsidy.callout3.body")}
        </Callout>

        {/* 5 */}
        <SectionHeading kicker="05">{t("solarPumpSubsidy.sections.s5")}</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("solarPumpSubsidy.th.component")}</Th>
                <Th>{t("solarPumpSubsidy.th.covered")}</Th>
                <Th>{t("solarPumpSubsidy.th.subsidyAmount")}</Th>
                <Th>{t("solarPumpSubsidy.th.notes")}</Th>
              </tr>
            </thead>
            <tbody>
              {COVERAGE_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200"><YesNoBadge yes={row[1]} yesLabel={yesLabel} noLabel={noLabel} /></td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">{t("solarPumpSubsidy.sections.s6")}</SectionHeading>
        <p className={para}>{t("solarPumpSubsidy.s6p1")}</p>
        <div className="space-y-3 my-5">
          {STEPS.map((s, i) => (
            <NumberedStep key={s.title} index={i + 1} title={s.title} body={s.body} />
          ))}
        </div>
        <Callout label={t("solarPumpSubsidy.callout4.label")}>
          {t("solarPumpSubsidy.callout4.body")}
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">{t("solarPumpSubsidy.sections.s7")}</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("solarPumpSubsidy.th.issue")}</Th>
                <Th>{t("solarPumpSubsidy.th.whyHappens")}</Th>
                <Th>{t("solarPumpSubsidy.th.howAvoid")}</Th>
              </tr>
            </thead>
            <tbody>
              {REJECTION_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 8 */}
        <SectionHeading kicker="08">{t("solarPumpSubsidy.sections.s8")}</SectionHeading>
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

        {/* Nodal agency quick reference */}
        <SectionHeading>{t("solarPumpSubsidy.nodalRefHeading")}</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("solarPumpSubsidy.th.state")}</Th>
                <Th>{t("solarPumpSubsidy.th.nodalAgency")}</Th>
                <Th>{t("solarPumpSubsidy.th.portal")}</Th>
                <Th>{t("solarPumpSubsidy.th.applyFor")}</Th>
              </tr>
            </thead>
            <tbody>
              {NODAL_AGENCIES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{t("solarPumpSubsidy.pmKusumComponentB")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── FINAL CTA ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("solarPumpSubsidy.ctaHeading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              {t("solarPumpSubsidy.ctaSubtitle")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {t("solarPumpSubsidy.ctaButton")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              {t("solarPumpSubsidy.ctaFooter")}
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
          title={t("solarPumpSubsidy.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
