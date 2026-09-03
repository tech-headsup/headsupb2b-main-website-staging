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

const FIT_TONE = {
  green: "text-[#1a7f37]",
  amber: "text-[#a06a00]",
  red: "text-[#c0392b]",
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function GreenHydrogenSolarIndia() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/green-hydrogen-solar-india";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("greenHydrogen.heroStats", { returnObjects: true }) || [];
  const HERO_TAGS = t("greenHydrogen.heroTags", { returnObjects: true }) || [];
  const TOC = t("greenHydrogen.toc", { returnObjects: true }) || [];
  const CHAIN = t("greenHydrogen.chain", { returnObjects: true }) || [];
  const STATUS_HEADERS = t("greenHydrogen.statusHeaders", { returnObjects: true }) || [];
  const STATUS_ROWS = t("greenHydrogen.statusRows", { returnObjects: true }) || [];
  const LEVELS = t("greenHydrogen.levels", { returnObjects: true }) || [];
  const SCALE_HEADERS = t("greenHydrogen.scaleHeaders", { returnObjects: true }) || [];
  const SCALE_ROWS = t("greenHydrogen.scaleRows", { returnObjects: true }) || [];
  const REALITY = t("greenHydrogen.realityCheck.items", { returnObjects: true }) || [];
  const SENS_HEADERS = t("greenHydrogen.sensitivityHeaders", { returnObjects: true }) || [];
  const SENS_ROWS = t("greenHydrogen.sensitivityRows", { returnObjects: true }) || [];
  const ACTIONS = t("greenHydrogen.actions.items", { returnObjects: true }) || [];
  const CMP_HEADERS = t("greenHydrogen.compareHeaders", { returnObjects: true }) || [];
  const CMP_ROWS = t("greenHydrogen.compareRows", { returnObjects: true }) || [];
  const TAKEAWAYS = t("greenHydrogen.takeaways", { returnObjects: true }) || [];
  const FAQS = t("greenHydrogen.faqs", { returnObjects: true }) || [];
  const SOURCES = t("greenHydrogen.sources.items", { returnObjects: true }) || [];
  const CTA_FEATURES = t("greenHydrogen.cta.features", { returnObjects: true }) || [];
  const KEYWORDS = t("greenHydrogen.keywords", { returnObjects: true }) || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("greenHydrogen.meta.seoTitle")}
        description={t("greenHydrogen.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("greenHydrogen.meta.ogTitle"),
          description: t("greenHydrogen.meta.ogDescription"),
          site_name: "Headsup B2B",
          images: [
            {
              url: "https://www.headsupb2b.com/green-hydrogen-solar-india.webp",
              width: 1600,
              height: 800,
              alt: t("greenHydrogen.meta.ogTitle"),
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
              {t("greenHydrogen.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("greenHydrogen.hero.published")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("greenHydrogen.hero.readTime")}</span>
          </div>
          <h1
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}
          >
            {t("greenHydrogen.hero.title1")} <br className="hidden t:block" />
            {t("greenHydrogen.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("greenHydrogen.hero.subtitle")}
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

          <p className="text-[12px] text-white/45 mt-6">{t("greenHydrogen.hero.sourceLine")}</p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">
        <Callout label={t("greenHydrogen.whoFor.label")}>{t("greenHydrogen.whoFor.body")}</Callout>

        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            {t("greenHydrogen.tocLabel")}
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

        <p className={para}>{t("greenHydrogen.intro.p1")}</p>
        <p className={para}>{t("greenHydrogen.intro.p2")}</p>
        <p className={para}>{t("greenHydrogen.intro.p3")}</p>

        {/* 1 — FUNDAMENTALS */}
        <SectionHeading kicker={t("greenHydrogen.sections.s1.kicker")}>
          {t("greenHydrogen.sections.s1.title")}
        </SectionHeading>
        <p className={para}>{t("greenHydrogen.s1p1")}</p>

        <div className="my-7">
          {CHAIN.map((c, i) => (
            <div key={c.title}>
              <div className="rounded-2xl border border-gray-200 bg-[#f3faf5] px-5 py-4 text-center">
                <h3 className="font-bold text-[#1a1330] text-[15px]">{c.title}</h3>
                <p className="text-[13.5px] text-gray-600 leading-relaxed mt-1">{c.body}</p>
              </div>
              {i < CHAIN.length - 1 && (
                <div className="text-center text-headupb2b text-xl leading-none py-1.5">↓</div>
              )}
            </div>
          ))}
        </div>

        <p className={para} {...HTML(t("greenHydrogen.s1p2"))} />

        {/* 2 — MISSION STATUS */}
        <SectionHeading kicker={t("greenHydrogen.sections.s2.kicker")}>
          {t("greenHydrogen.sections.s2.title")}
        </SectionHeading>
        <p className={para}>{t("greenHydrogen.s2p1")}</p>
        <p className={para}>{t("greenHydrogen.s2p2")}</p>

        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[700px] border-collapse text-[14px]">
            <thead>
              <tr>
                {STATUS_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STATUS_ROWS.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.c}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-snug">
                    {row.s}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-snug">
                    {row.i}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">{t("greenHydrogen.statusNote")}</p>
        </div>

        {/* 3 — THE OPPORTUNITY */}
        <SectionHeading kicker={t("greenHydrogen.sections.s3.kicker")}>
          {t("greenHydrogen.sections.s3.title")}
        </SectionHeading>
        <p className={para}>{t("greenHydrogen.s3p1")}</p>
        <div className="space-y-4 my-7">
          {LEVELS.map((l) => (
            <div key={l.title} className="rounded-2xl border border-gray-200 bg-[#faf9fd] p-5 t:p-6">
              <h3 className="font-bold text-[#1a1330] text-[16px] mb-2 leading-snug">{l.title}</h3>
              <p className="text-[14.5px] text-gray-600 leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
        <p className={para}>{t("greenHydrogen.s3p2")}</p>

        {/* Mid CTA */}
        <div className="relative overflow-hidden bg-headupb2b rounded-2xl px-7 t:px-9 py-8 my-9">
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <h3 className="text-xl t:text-2xl font-black text-white mb-2.5">
              {t("greenHydrogen.midCta.title")}
            </h3>
            <p className="text-white/75 text-[15px] leading-relaxed mb-6 max-w-[620px]">
              {t("greenHydrogen.midCta.desc")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-7 py-3 rounded-lg text-[15px] font-bold hover:bg-gray-100 transition-colors"
            >
              {t("greenHydrogen.midCta.btnText")}
            </button>
          </div>
        </div>

        {/* 4 — PROJECT SCALE */}
        <SectionHeading kicker={t("greenHydrogen.sections.s4.kicker")}>
          {t("greenHydrogen.sections.s4.title")}
        </SectionHeading>
        <p className={para}>{t("greenHydrogen.s4p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[720px] border-collapse text-[14px]">
            <thead>
              <tr>
                {SCALE_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCALE_ROWS.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold align-top whitespace-nowrap">
                    {row.cap}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top leading-snug">
                    {row.req}
                  </td>
                  <td
                    className={`px-4 py-3 border-b border-gray-200 align-top font-bold leading-snug ${
                      FIT_TONE[row.tone] || FIT_TONE.amber
                    }`}
                  >
                    {row.fit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#fff5f2] border border-[#f9d5c7] rounded-2xl p-6 t:p-7 my-8">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-[#c0392b] mb-2">
            {t("greenHydrogen.realityCheck.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-4">
            {t("greenHydrogen.realityCheck.title")}
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-[15px] text-gray-700 leading-relaxed">
            {REALITY.map((r, i) => (
              <li key={i} {...HTML(r)} />
            ))}
          </ul>
        </div>

        {/* 5 — ECONOMICS */}
        <SectionHeading kicker={t("greenHydrogen.sections.s5.kicker")}>
          {t("greenHydrogen.sections.s5.title")}
        </SectionHeading>
        <p className={para}>{t("greenHydrogen.s5p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[700px] border-collapse text-[14px]">
            <thead>
              <tr>
                {SENS_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SENS_ROWS.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.tariff}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top whitespace-nowrap">
                    {row.eff}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold align-top whitespace-nowrap">
                    {row.cost}
                  </td>
                  <td
                    className={`px-4 py-3 border-b border-gray-200 align-top font-bold leading-snug ${
                      FIT_TONE[row.tone] || FIT_TONE.amber
                    }`}
                  >
                    {row.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">{t("greenHydrogen.sensitivityNote")}</p>
        </div>
        <p className={para} {...HTML(t("greenHydrogen.s5p2"))} />

        <div className="bg-purple border-l-4 border-headupb2b rounded-r-xl p-6 my-8">
          <p className="text-[19px] t:text-xl font-bold text-[#1a1330] leading-snug italic">
            {t("greenHydrogen.pullQuote.text")}
          </p>
          <p className="text-[13px] text-gray-500 mt-3">
            {t("greenHydrogen.pullQuote.attribution")}
          </p>
        </div>

        {/* 6 — ACTION PLAN */}
        <SectionHeading kicker={t("greenHydrogen.sections.s6.kicker")}>
          {t("greenHydrogen.sections.s6.title")}
        </SectionHeading>
        <div className="rounded-2xl border border-gray-200 bg-[#f3faf5] p-6 t:p-7 my-7">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-[#1a7f37] mb-2">
            {t("greenHydrogen.actions.label")}
          </div>
          <h3 className="text-base font-bold text-[#1a1330] mb-4">
            {t("greenHydrogen.actions.title")}
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-[15px] text-gray-700 leading-relaxed">
            {ACTIONS.map((a, i) => (
              <li key={i} {...HTML(a)} />
            ))}
          </ul>
        </div>

        {/* 7 — PROCUREMENT COMPARISON */}
        <SectionHeading kicker={t("greenHydrogen.sections.s7.kicker")}>
          {t("greenHydrogen.sections.s7.title")}
        </SectionHeading>
        <p className={para}>{t("greenHydrogen.s7p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[680px] border-collapse text-[14px]">
            <thead>
              <tr>
                {CMP_HEADERS.map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CMP_ROWS.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug">
                    {row.el}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-600 align-top leading-snug">
                    {row.std}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 font-semibold align-top leading-snug">
                    {row.gh2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 8 — KEY TAKEAWAYS */}
        <SectionHeading kicker={t("greenHydrogen.sections.s8.kicker")}>
          {t("greenHydrogen.sections.s8.title")}
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
        <SectionHeading kicker={t("greenHydrogen.sections.faq.kicker")}>
          {t("greenHydrogen.sections.faq.title")}
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
        <Callout label={t("greenHydrogen.sources.title")}>
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
              {t("greenHydrogen.cta.kicker")}
            </span>
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("greenHydrogen.cta.heading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[560px] mx-auto mb-7">
              {t("greenHydrogen.cta.subtitle")}
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
              {t("greenHydrogen.cta.button")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">{t("greenHydrogen.cta.footer")}</p>
          </div>
        </div>

        {/* ── ARTICLE FOOTER ── */}
        <p className="text-[13px] text-gray-500 mt-12">{t("greenHydrogen.footer.publishedLine")}</p>

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
          title={t("greenHydrogen.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
