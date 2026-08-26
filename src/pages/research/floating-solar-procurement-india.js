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

/* Category pill on the component table */
const CAT_TONE = {
  blue: "bg-[#e6f4fb] text-[#0a6c8f]",
  grey: "bg-[#f0eef7] text-[#4b3f6b]",
  amber: "bg-[#fdf3dd] text-[#8a6300]",
};
/* Procurement-complexity colour */
const FLAG_TONE = {
  red: "text-[#c0392b]",
  amber: "text-[#a06a00]",
  green: "text-[#1a7f37]",
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function FloatingSolarProcurementIndia() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical =
    "https://www.headsupb2b.com/research/floating-solar-procurement-india";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("floatingSolar.heroStats", { returnObjects: true }) || [];
  const HERO_TAGS = t("floatingSolar.heroTags", { returnObjects: true }) || [];
  const TOC = t("floatingSolar.toc", { returnObjects: true }) || [];
  const GROUND_ITEMS = t("floatingSolar.compare.groundItems", { returnObjects: true }) || [];
  const FPV_ITEMS = t("floatingSolar.compare.fpvItems", { returnObjects: true }) || [];
  const COMPONENT_HEADERS = t("floatingSolar.componentHeaders", { returnObjects: true }) || [];
  const COMPONENTS = t("floatingSolar.components", { returnObjects: true }) || [];
  const HDPE_ITEMS = t("floatingSolar.hdpeCallout.items", { returnObjects: true }) || [];
  const COST_HEADERS = t("floatingSolar.costHeaders", { returnObjects: true }) || [];
  const COST_ROWS = t("floatingSolar.costRows", { returnObjects: true }) || [];
  const COST_TOTAL = t("floatingSolar.costTotal", { returnObjects: true }) || {};
  const CHALLENGES = t("floatingSolar.challenges", { returnObjects: true }) || [];
  const CRITERIA_HEADERS = t("floatingSolar.criteriaHeaders", { returnObjects: true }) || [];
  const CRITERIA = t("floatingSolar.criteria", { returnObjects: true }) || [];
  const SUPPLIERS = t("floatingSolar.suppliers.items", { returnObjects: true }) || [];
  const STEPS = t("floatingSolar.steps", { returnObjects: true }) || [];
  const CASE_FACTS = t("floatingSolar.caseStudy.facts", { returnObjects: true }) || [];
  const TAKEAWAYS = t("floatingSolar.takeaways", { returnObjects: true }) || [];
  const FAQS = t("floatingSolar.faqs", { returnObjects: true }) || [];
  const SOURCES = t("floatingSolar.sources.items", { returnObjects: true }) || [];
  const CTA_FEATURES = t("floatingSolar.cta.features", { returnObjects: true }) || [];
  const KEYWORDS = t("floatingSolar.keywords", { returnObjects: true }) || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("floatingSolar.meta.seoTitle")}
        description={t("floatingSolar.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("floatingSolar.meta.ogTitle"),
          description: t("floatingSolar.meta.ogDescription"),
          site_name: "Headsup B2B",
          images: [
            {
              url: "https://www.headsupb2b.com/floating-solar-procurement-india.webp",
              width: 1600,
              height: 800,
              alt: t("floatingSolar.meta.ogTitle"),
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
              {t("floatingSolar.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("floatingSolar.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("floatingSolar.hero.published")}</span>
          </div>
          <h1
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}
          >
            {t("floatingSolar.hero.title1")} <br className="hidden t:block" />
            {t("floatingSolar.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("floatingSolar.hero.subtitle")}
          </p>

          {/* Hero stats */}
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

          {/* Topic strip */}
          <div className="mt-8 rounded-xl bg-headupb2b/90 border border-white/10 px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {HERO_TAGS.map((c) => (
              <span key={c} className="text-[11px] t:text-[12px] font-bold uppercase tracking-[1.2px] text-white">
                {c}
              </span>
            ))}
          </div>

          <p className="text-[12px] text-white/45 mt-6">{t("floatingSolar.hero.sourceLine")}</p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">
        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            {t("floatingSolar.tocLabel")}
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

        {/* Who this is for */}
        <Callout label={t("floatingSolar.whoFor.label")}>{t("floatingSolar.whoFor.body")}</Callout>

        <p className={para}>{t("floatingSolar.intro.p1")}</p>
        <p className={para}>{t("floatingSolar.intro.p2")}</p>
        <p className={para}>{t("floatingSolar.intro.p3")}</p>

        {/* PM-SSY clause callout */}
        <div className="bg-[#fffaf0] border-l-4 border-[#d9a300] rounded-r-xl p-6 my-8">
          <div className="text-xs font-bold tracking-[1px] uppercase text-[#8a6300] mb-3">
            {t("floatingSolar.pmssyCallout.label")}
          </div>
          <p className="text-[15px] text-gray-700 leading-relaxed mb-3" {...HTML(t("floatingSolar.pmssyCallout.p1"))} />
          <p className="text-[15px] text-gray-700 leading-relaxed">{t("floatingSolar.pmssyCallout.p2")}</p>
        </div>

        {/* 1 — WHY FPV IS DIFFERENT */}
        <SectionHeading kicker={t("floatingSolar.sections.s1.kicker")}>
          {t("floatingSolar.sections.s1.title")}
        </SectionHeading>
        <p className={para}>{t("floatingSolar.s1p1")}</p>

        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          <div className="rounded-2xl border border-gray-200 bg-[#f3faf5] p-6">
            <h3 className="font-extrabold text-[#1a1330] text-lg mb-4">
              {t("floatingSolar.compare.groundTitle")}
            </h3>
            <ul className="space-y-2.5">
              {GROUND_ITEMS.map((it) => (
                <li key={it} className="flex gap-2.5 text-[14px] text-gray-700 leading-relaxed">
                  <span className="text-[#1a7f37] font-bold shrink-0">✓</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-[#eff8fc] p-6">
            <h3 className="font-extrabold text-[#0a6c8f] text-lg mb-4">
              {t("floatingSolar.compare.fpvTitle")}
            </h3>
            <ul className="space-y-2.5">
              {FPV_ITEMS.map((it) => (
                <li key={it} className="flex gap-2.5 text-[14px] text-gray-700 leading-relaxed">
                  <span className="text-[#0a9fd4] font-bold shrink-0">◆</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={para}>{t("floatingSolar.s1p2")}</p>
        <p className={para}>{t("floatingSolar.s1p3")}</p>

        {/* 2 — COMPONENT STACK */}
        <SectionHeading kicker={t("floatingSolar.sections.s2.kicker")}>
          {t("floatingSolar.sections.s2.title")}
        </SectionHeading>
        <p className={para}>{t("floatingSolar.s2p1")}</p>

        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[680px] border-collapse text-[14px]">
            <thead>
              <tr>
                {COMPONENT_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPONENTS.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.item}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 align-top">
                    <span
                      className={`inline-block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        CAT_TONE[row.catTone] || CAT_TONE.grey
                      }`}
                    >
                      {row.cat}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-relaxed">
                    <span {...HTML(row.spec)} />
                    {row.badge && (
                      <span className="inline-block ml-2 align-middle text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple text-headupb2b">
                        {row.badge}
                      </span>
                    )}
                  </td>
                  <td
                    className={`px-4 py-3 border-b border-gray-200 align-top font-bold leading-snug ${
                      FLAG_TONE[row.tone] || FLAG_TONE.amber
                    }`}
                  >
                    {row.flag}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">{t("floatingSolar.essNote")}</p>
        </div>

        {/* Virgin vs recycled HDPE */}
        <div className="bg-[#fffaf0] border-l-4 border-[#d9a300] rounded-r-xl p-6 my-8">
          <div className="text-xs font-bold tracking-[1px] uppercase text-[#8a6300] mb-2">
            {t("floatingSolar.hdpeCallout.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-3">
            {t("floatingSolar.hdpeCallout.title")}
          </h3>
          <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-gray-700 leading-relaxed">
            {HDPE_ITEMS.map((it, i) => (
              <li key={i} {...HTML(it)} />
            ))}
          </ul>
        </div>

        {/* 3 — COST PREMIUM */}
        <SectionHeading kicker={t("floatingSolar.sections.s3.kicker")}>
          {t("floatingSolar.sections.s3.title")}
        </SectionHeading>
        <p className={para}>{t("floatingSolar.s3p1")}</p>

        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[640px] border-collapse text-[14px]">
            <thead>
              <tr>
                {COST_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((row, i) => (
                <tr key={row.item} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.item}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-600 align-top whitespace-nowrap">
                    {row.ground}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold align-top whitespace-nowrap">
                    {row.floating}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-snug">
                    {row.driver}
                  </td>
                </tr>
              ))}
              <tr className="bg-purple">
                <td className="px-4 py-3.5 border-b border-gray-200 font-extrabold text-[#1a1330] align-top">
                  {COST_TOTAL.item}
                </td>
                <td className="px-4 py-3.5 border-b border-gray-200 font-extrabold text-[#1a1330] align-top whitespace-nowrap">
                  {COST_TOTAL.ground}
                </td>
                <td className="px-4 py-3.5 border-b border-gray-200 font-extrabold text-headupb2b align-top whitespace-nowrap">
                  {COST_TOTAL.floating}
                </td>
                <td className="px-4 py-3.5 border-b border-gray-200 font-bold text-[#1a1330] align-top leading-snug">
                  {COST_TOTAL.driver}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={para} {...HTML(t("floatingSolar.s3p2"))} />
        <p className={para}>{t("floatingSolar.s3p3")}</p>

        {/* Mid-article CTA */}
        <div className="relative overflow-hidden bg-headupb2b rounded-2xl px-7 t:px-9 py-8 my-9">
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <h3 className="text-xl t:text-2xl font-black text-white mb-2.5">
              {t("floatingSolar.midCta.title")}
            </h3>
            <p className="text-white/75 text-[15px] leading-relaxed mb-6 max-w-[620px]">
              {t("floatingSolar.midCta.desc")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-7 py-3 rounded-lg text-[15px] font-bold hover:bg-gray-100 transition-colors"
            >
              {t("floatingSolar.midCta.btnText")}
            </button>
          </div>
        </div>

        {/* Pull quote */}
        <div className="bg-purple border-l-4 border-headupb2b rounded-r-xl p-6 my-8">
          <p className="text-[19px] t:text-xl font-bold text-[#1a1330] leading-snug italic">
            {t("floatingSolar.pullQuote.text")}
          </p>
          <p className="text-[13px] text-gray-500 mt-3">{t("floatingSolar.pullQuote.attribution")}</p>
        </div>

        {/* 4 — CHALLENGES */}
        <SectionHeading kicker={t("floatingSolar.sections.s4.kicker")}>
          {t("floatingSolar.sections.s4.title")}
        </SectionHeading>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {CHALLENGES.map((c) => (
            <div key={c.n} className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <div className="px-5 pt-5">
                <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b">
                  / {c.n}
                </div>
                <h3 className="text-lg font-extrabold text-[#1a1330] mt-2 leading-snug">{c.title}</h3>
              </div>
              <div className="px-5 pb-5 pt-2 flex-1 flex flex-col">
                <p className="text-[14px] text-gray-600 leading-relaxed flex-1">{c.body}</p>
                <p className="text-[13.5px] font-bold text-headupb2b leading-snug mt-4">
                  ↗ {c.action}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Omkareshwar */}
        <div className="bg-[#fffaf0] border-l-4 border-[#d9a300] rounded-r-xl p-6 my-8">
          <div className="text-xs font-bold tracking-[1px] uppercase text-[#8a6300] mb-3">
            {t("floatingSolar.omkareshwarCallout.label")}
          </div>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            {t("floatingSolar.omkareshwarCallout.body")}
          </p>
        </div>

        {/* 5 — SUPPLIER SELECTION */}
        <SectionHeading kicker={t("floatingSolar.sections.s5.kicker")}>
          {t("floatingSolar.sections.s5.title")}
        </SectionHeading>
        <p className={para}>{t("floatingSolar.s5p1")}</p>

        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[620px] border-collapse text-[14px]">
            <thead>
              <tr>
                {CRITERIA_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map((row, i) => (
                <tr key={row.item} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.item}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold align-top whitespace-nowrap">
                    {row.weight}
                  </td>
                  <td
                    className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-relaxed"
                    {...HTML(row.verify)}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Supplier shortlist */}
        <div className="rounded-2xl border border-gray-200 bg-[#f3faf5] p-6 t:p-7 my-8">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-[#1a7f37] mb-4">
            {t("floatingSolar.suppliers.label")}
          </div>
          <ul className="list-disc pl-5 space-y-3 text-[15px] text-gray-700 leading-relaxed">
            {SUPPLIERS.map((s, i) => (
              <li key={i} {...HTML(s)} />
            ))}
          </ul>
          <p className="text-[13px] text-gray-500 italic mt-5">{t("floatingSolar.suppliers.note")}</p>
        </div>

        {/* 6 — PROCUREMENT SEQUENCE */}
        <SectionHeading kicker={t("floatingSolar.sections.s6.kicker")}>
          {t("floatingSolar.sections.s6.title")}
        </SectionHeading>
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

        {/* 7 — RAMAGUNDAM CASE STUDY */}
        <SectionHeading kicker={t("floatingSolar.sections.s7.kicker")}>
          {t("floatingSolar.sections.s7.title")}
        </SectionHeading>
        <div className="relative overflow-hidden bg-[#2e1f4d] rounded-2xl px-7 t:px-9 py-8 my-7">
          <div
            className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <div className="text-xs font-bold tracking-[1.5px] uppercase text-white/60 mb-4">
              {t("floatingSolar.caseStudy.label")}
            </div>
            <p className="text-[15px] text-white/80 leading-relaxed">
              {t("floatingSolar.caseStudy.p1")}
            </p>
            <div className="grid grid-cols-1 mm:grid-cols-2 gap-x-8 gap-y-2.5 my-6 py-6 border-y border-white/10">
              {CASE_FACTS.map((f) => (
                <div key={f.k} className="text-[14px] text-white/70 leading-snug">
                  <span className="font-bold text-white">{f.k}</span> {f.v}
                </div>
              ))}
            </div>
            <p className="text-[15px] text-white/80 leading-relaxed">
              {t("floatingSolar.caseStudy.p2")}
            </p>
            <p className="text-[13px] text-white/45 mt-5">
              {t("floatingSolar.caseStudy.attribution")}
            </p>
          </div>
        </div>

        {/* 8 — KEY TAKEAWAYS */}
        <SectionHeading kicker={t("floatingSolar.sections.s8.kicker")}>
          {t("floatingSolar.sections.s8.title")}
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
        <SectionHeading kicker={t("floatingSolar.sections.faq.kicker")}>
          {t("floatingSolar.sections.faq.title")}
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
        <Callout label={t("floatingSolar.sources.title")}>
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
              {t("floatingSolar.cta.kicker")}
            </span>
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("floatingSolar.cta.heading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[560px] mx-auto mb-7">
              {t("floatingSolar.cta.subtitle")}
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
              {t("floatingSolar.cta.button")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">{t("floatingSolar.cta.footer")}</p>
          </div>
        </div>

        {/* ── ARTICLE FOOTER ── */}
        <p className="text-[13px] text-gray-500 mt-12">{t("floatingSolar.footer.publishedLine")}</p>

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
          title={t("floatingSolar.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
