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

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function IndiaCoalSectorReportFY2026() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical =
    "https://www.headsupb2b.com/research/india-coal-sector-report-2026";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("coalReport2026.heroStats", { returnObjects: true }) || [];
  const MATERIAL_CATEGORIES = t("coalReport2026.materialCategories", { returnObjects: true }) || [];
  const TOC = t("coalReport2026.toc", { returnObjects: true }) || [];
  const HEADLINE_STATS = t("coalReport2026.headlineStats", { returnObjects: true }) || [];
  const TOP_ALLOTTEES = t("coalReport2026.topAllottees", { returnObjects: true }) || [];
  const PROGRAMMES = t("coalReport2026.programmes", { returnObjects: true }) || [];
  const AWAITING_BLOCKS = t("coalReport2026.awaitingBlocks", { returnObjects: true }) || [];
  const MATERIAL_PACKAGE = t("coalReport2026.materialPackage", { returnObjects: true }) || [];
  const KEYWORDS = t("coalReport2026.keywords", { returnObjects: true }) || [];
  const FAQS = t("coalReport2026.faqs", { returnObjects: true }) || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("coalReport2026.meta.seoTitle")}
        description={t("coalReport2026.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("coalReport2026.meta.ogTitle"),
          description: t("coalReport2026.meta.ogDescription"),
          site_name: "Headsup B2B",
        }}
      />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#2e1f4d] px-5 t:px-12 pt-16 pb-20">
        <div
          className="absolute -top-24 -left-16 w-[460px] h-[460px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(94,63,153,0.30) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2.5 mb-6 flex-wrap">
            <span className="bg-headupb2b text-white text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase">
              {t("coalReport2026.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("coalReport2026.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("coalReport2026.hero.published")}</span>
          </div>
          <h1
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}
          >
            {t("coalReport2026.hero.title1")} <br className="hidden t:block" />
            {t("coalReport2026.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("coalReport2026.hero.subtitle")}
          </p>

          {/* Hero stats */}
          <div className="grid grid-cols-1 mm:grid-cols-3 gap-3 mt-9">
            {HERO_STATS.map((s) => (
              <div key={s.num} className="bg-white/95 rounded-2xl p-5 text-center">
                <div className="text-2xl t:text-[28px] font-black text-headupb2b leading-none mb-2">
                  {s.num}
                </div>
                <div className="text-[12px] text-gray-600 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Material category strip */}
          <div className="mt-8 rounded-xl bg-headupb2b/90 border border-white/10 px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {MATERIAL_CATEGORIES.map((c) => (
              <span
                key={c}
                className="text-[11px] t:text-[12px] font-bold uppercase tracking-[1.2px] text-white"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="text-[12px] text-white/45 mt-6">
            {t("coalReport2026.hero.sourceLine")}
          </p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">
        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            {t("coalReport2026.tocLabel")}
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
        <SectionHeading kicker={t("coalReport2026.sections.s1.kicker")}>
          {t("coalReport2026.sections.s1.title")}
        </SectionHeading>
        <p className={para} {...HTML(t("coalReport2026.s1p1"))} />
        <p className={para} {...HTML(t("coalReport2026.s1p2"))} />
        <p className={para} {...HTML(t("coalReport2026.s1p3"))} />

        <div className="grid grid-cols-2 l:grid-cols-4 gap-3 my-8">
          {HEADLINE_STATS.map(([num, label, sub]) => (
            <div key={num} className="rounded-2xl border border-gray-200 p-5 bg-[#faf9fd]">
              <div className="text-xl t:text-[24px] font-black text-headupb2b leading-none mb-2">
                {num}
              </div>
              <div className="text-[12px] font-bold uppercase tracking-wide text-[#1a1330] mb-1">
                {label}
              </div>
              <div className="text-[12px] text-gray-600 leading-snug">{sub}</div>
            </div>
          ))}
        </div>

        {/* 2 */}
        <SectionHeading kicker={t("coalReport2026.sections.s2.kicker")}>
          {t("coalReport2026.sections.s2.title")}
        </SectionHeading>
        <p className={para} {...HTML(t("coalReport2026.s2p1"))} />
        <p className={para} {...HTML(t("coalReport2026.s2p2"))} />

        {/* 3 */}
        <SectionHeading kicker={t("coalReport2026.sections.s3.kicker")}>
          {t("coalReport2026.sections.s3.title")}
        </SectionHeading>
        <p className={para} {...HTML(t("coalReport2026.s3p1"))} />
        <p className={para} {...HTML(t("coalReport2026.s3p2"))} />
        <Callout label={t("coalReport2026.calloutAuction.label")}>
          <span {...HTML(t("coalReport2026.calloutAuction.body"))} />
        </Callout>

        {/* 4 */}
        <SectionHeading kicker={t("coalReport2026.sections.s4.kicker")}>
          {t("coalReport2026.sections.s4.title")}
        </SectionHeading>
        <p className={para} {...HTML(t("coalReport2026.s4p1"))} />
        <p className={para} {...HTML(t("coalReport2026.s4p2"))} />

        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("coalReport2026.thAllottee")}</Th>
                <Th>{t("coalReport2026.thProducingPRC")}</Th>
              </tr>
            </thead>
            <tbody>
              {TOP_ALLOTTEES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">
                    {row[0]}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold text-right">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">
            {t("coalReport2026.topAllotteesCaption")}
          </p>
        </div>

        {/* 5 */}
        <SectionHeading kicker={t("coalReport2026.sections.s5.kicker")}>
          {t("coalReport2026.sections.s5.title")}
        </SectionHeading>
        <p className={para}>{t("coalReport2026.programmesIntro")}</p>
        <div className="space-y-3 my-7">
          {PROGRAMMES.map((p, i) => (
            <div
              key={p.title}
              className="flex gap-4 p-5 rounded-2xl bg-[#faf9fd] border border-gray-200"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-black text-[15px] flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[#1a1330] text-[15px] mb-1.5">
                  {p.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 */}
        <SectionHeading kicker={t("coalReport2026.sections.s6.kicker")}>
          {t("coalReport2026.sections.s6.title")}
        </SectionHeading>
        <p className={para} {...HTML(t("coalReport2026.s6p1"))} />
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("coalReport2026.thBlockAwaiting")}</Th>
                <Th>{t("coalReport2026.thAllottee")}</Th>
                <Th>{t("coalReport2026.thPRC")}</Th>
              </tr>
            </thead>
            <tbody>
              {AWAITING_BLOCKS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">
                    {row[0]}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                    {row[1]}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold text-right">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">
            {t("coalReport2026.awaitingBlocksCaption")}
          </p>
        </div>

        {/* 7 */}
        <SectionHeading kicker={t("coalReport2026.sections.s7.kicker")}>
          {t("coalReport2026.sections.s7.title")}
        </SectionHeading>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {MATERIAL_PACKAGE.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="px-5 pt-5">
                <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b">
                  / {m.num}
                </div>
                <h3 className="text-lg font-extrabold text-[#1a1330] mt-2">
                  {m.title}
                </h3>
              </div>
              <div className="px-5 pb-5 pt-2">
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Callout label={t("coalReport2026.calloutSources.label")}>
          {t("coalReport2026.calloutSources.body")}
        </Callout>

        {/* 8 */}
        <SectionHeading kicker={t("coalReport2026.sections.s8.kicker")}>
          {t("coalReport2026.sections.s8.title")}
        </SectionHeading>
        <p className={para} {...HTML(t("coalReport2026.s8p1"))} />
        <p className={para} {...HTML(t("coalReport2026.s8p2"))} />

        {/* FAQ */}
        <SectionHeading kicker={t("coalReport2026.sections.faq.kicker")}>
          {t("coalReport2026.sections.faq.title")}
        </SectionHeading>
        <div className="space-y-3 my-7">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-gray-200 p-5 open:border-headupb2b"
            >
              <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-[#1a1330] text-[15px]">
                {f.q}
                <span className="text-headupb2b text-xl leading-none shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-[14px] text-gray-600 leading-relaxed mt-3">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        {/* ── FINAL CTA ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("coalReport2026.ctaHeading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[560px] mx-auto mb-7">
              {t("coalReport2026.ctaSubtitle")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {t("coalReport2026.ctaButton")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              {t("coalReport2026.ctaFooter")}
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
          title={t("coalReport2026.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
