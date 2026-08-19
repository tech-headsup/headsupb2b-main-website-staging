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

function TierBadge({ tier }) {
  return (
    <span className="bg-headupb2b text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
      {tier}
    </span>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function TopSolarPumpManufacturersIndia2026() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/top-solar-pump-manufacturers-india-2026";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("topSolarPumpManufacturers.heroStats", { returnObjects: true }) || [];
  const TOC = t("topSolarPumpManufacturers.toc", { returnObjects: true }) || [];
  const EVAL_ROWS = t("topSolarPumpManufacturers.evalRows", { returnObjects: true }) || [];
  const MANUFACTURERS = t("topSolarPumpManufacturers.manufacturers", { returnObjects: true }) || [];
  const COMPARISON_ROWS = t("topSolarPumpManufacturers.comparisonRows", { returnObjects: true }) || [];
  const STATE_ROWS = t("topSolarPumpManufacturers.stateRows", { returnObjects: true }) || [];
  const VERIFY_ROWS = t("topSolarPumpManufacturers.verifyRows", { returnObjects: true }) || [];
  const HEADSUP_BENEFITS = t("topSolarPumpManufacturers.headsupBenefits", { returnObjects: true }) || [];
  const KEYWORDS = t("topSolarPumpManufacturers.keywords", { returnObjects: true }) || [];
  const FAQS = t("topSolarPumpManufacturers.faqs", { returnObjects: true }) || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("topSolarPumpManufacturers.meta.seoTitle")}
        description={t("topSolarPumpManufacturers.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("topSolarPumpManufacturers.meta.ogTitle"),
          description: t("topSolarPumpManufacturers.meta.ogDescription"),
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
              {t("topSolarPumpManufacturers.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("topSolarPumpManufacturers.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("topSolarPumpManufacturers.hero.updated")}</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            {t("topSolarPumpManufacturers.hero.title1")} <br className="hidden t:block" />
            {t("topSolarPumpManufacturers.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("topSolarPumpManufacturers.hero.subtitle")}
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
            {t("topSolarPumpManufacturers.tocLabel")}
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
        <SectionHeading kicker="01">{t("topSolarPumpManufacturers.sections.s1")}</SectionHeading>
        <p className={para}>{t("topSolarPumpManufacturers.s1p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("topSolarPumpManufacturers.th.criterion")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.whatToCheck")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.redFlags")}</Th>
              </tr>
            </thead>
            <tbody>
              {EVAL_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top w-[24%]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2 */}
        <SectionHeading kicker="02">{t("topSolarPumpManufacturers.sections.s2")}</SectionHeading>
        <p className={para}>{t("topSolarPumpManufacturers.s2p1")}</p>

        <div className="space-y-6 my-7">
          {MANUFACTURERS.map((m) => (
            <div key={m.no} className="flex gap-0 rounded-2xl overflow-hidden border border-[#e9e3f5]">
              <div className="shrink-0 w-14 t:w-16 bg-headupb2b text-white font-black text-2xl t:text-3xl flex items-center justify-center">
                {m.no}
              </div>
              <div className="flex-1 p-5 t:p-6 bg-white">
                <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                  <h3 className="font-extrabold text-[18px] t:text-[20px] text-[#1a1330] leading-snug">
                    {m.name}
                  </h3>
                  <TierBadge tier={m.tier} />
                </div>
                <div className="text-[13px] text-gray-500 mb-3">■ {m.location}</div>
                <p className="text-[15px] text-gray-700 leading-relaxed mb-4">{m.desc}</p>
                <div className="grid grid-cols-1 t:grid-cols-[140px_1fr] gap-y-2 gap-x-4 text-[14px] border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-500">{t("topSolarPumpManufacturers.manufacturerLabels.hpRange")}</div>
                  <div className="font-bold text-[#1a1330]">{m.hp}</div>
                  <div className="font-semibold text-gray-500">{t("topSolarPumpManufacturers.manufacturerLabels.certifications")}</div>
                  <div className="font-bold text-[#1a1330]">{m.certifications}</div>
                  <div className="font-semibold text-gray-500">{t("topSolarPumpManufacturers.manufacturerLabels.bestFor")}</div>
                  <div className="font-bold text-[#1a1330]">{m.bestFor}</div>
                  <div className="font-semibold text-gray-500">{t("topSolarPumpManufacturers.manufacturerLabels.b2bNote")}</div>
                  <div className="font-bold text-headupb2b">{m.note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 */}
        <SectionHeading kicker="03">{t("topSolarPumpManufacturers.sections.s3")}</SectionHeading>
        <p className={para}>{t("topSolarPumpManufacturers.s3p1")}</p>

        <div className="rounded-2xl overflow-hidden border-2 border-headupb2b my-7">
          <div className="bg-headupb2b px-6 py-3 flex items-center justify-between flex-wrap gap-2">
            <span className="text-white text-[12px] font-bold tracking-[1.5px] uppercase">
              ■ {t("topSolarPumpManufacturers.featuredSupplier.badge")}
            </span>
            <span className="text-white/80 text-[12px] font-bold tracking-[1.5px] uppercase">
              {t("topSolarPumpManufacturers.featuredSupplier.verifiedPlatform")}
            </span>
          </div>
          <div className="grid grid-cols-1 t:grid-cols-2 gap-6 p-6 t:p-8 bg-purple">
            <div>
              <h3 className="text-2xl font-black text-[#1a1330] mb-2">{t("topSolarPumpManufacturers.featuredSupplier.name")}</h3>
              <div className="text-[13px] font-bold text-headupb2b mb-4">
                {t("topSolarPumpManufacturers.featuredSupplier.tagline")}
              </div>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                {t("topSolarPumpManufacturers.featuredSupplier.description")}
              </p>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#1a1330] mb-3">
                {t("topSolarPumpManufacturers.featuredSupplier.whyHeading")}
              </div>
              <ul className="space-y-2.5">
                {HEADSUP_BENEFITS.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[14px] text-gray-700 leading-relaxed">
                    <span className="text-headupb2b font-bold shrink-0">■</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white px-6 py-4 flex items-center justify-between flex-wrap gap-2 border-t border-[#e9e3f5]">
            <div className="text-[13px] text-gray-600">
              ■ {t("topSolarPumpManufacturers.featuredSupplier.contactText")}
            </div>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="text-headupb2b font-bold text-[13px] hover:underline"
            >
              {t("topSolarPumpManufacturers.featuredSupplier.contactLink")}
            </button>
          </div>
        </div>

        {/* 4 */}
        <SectionHeading kicker="04">{t("topSolarPumpManufacturers.sections.s4")}</SectionHeading>
        <p className={para}>{t("topSolarPumpManufacturers.s4p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                <Th>{t("topSolarPumpManufacturers.th.manufacturer")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.hq")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.hpRange")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.tier")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.bestState")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.almm")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.b2bMinOrder")}</Th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row[0]} className={row[7] ? "bg-purple" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-extrabold text-headupb2b" : "font-semibold text-[#1a1330]"}`}>
                    {row[7] ? "■ " : ""}{row[0]}
                  </td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[1]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[2]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[3]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[4]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top font-bold ${row[7] ? "text-headupb2b" : "text-headupb2b"}`}>
                    ■ {row[5]}
                  </td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[6]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5 */}
        <SectionHeading kicker="05">{t("topSolarPumpManufacturers.sections.s5")}</SectionHeading>
        <p className={para}>{t("topSolarPumpManufacturers.s5p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("topSolarPumpManufacturers.th.state")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.nodalAgency")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.recommendedManufacturers")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.why")}</Th>
              </tr>
            </thead>
            <tbody>
              {STATE_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 font-bold text-headupb2b align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">{t("topSolarPumpManufacturers.sections.s6")}</SectionHeading>
        <p className={para}>{t("topSolarPumpManufacturers.s6p1")}</p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>{t("topSolarPumpManufacturers.th.verificationStep")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.howToDoIt")}</Th>
                <Th>{t("topSolarPumpManufacturers.th.timeRequired")}</Th>
              </tr>
            </thead>
            <tbody>
              {VERIFY_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top w-[26%]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 font-bold text-headupb2b align-top w-[18%]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label={t("topSolarPumpManufacturers.callout1.label")}>
          {t("topSolarPumpManufacturers.callout1.body")}
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">{t("topSolarPumpManufacturers.sections.s7")}</SectionHeading>
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
              {t("topSolarPumpManufacturers.ctaHeading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              {t("topSolarPumpManufacturers.ctaSubtitle")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {t("topSolarPumpManufacturers.ctaButton")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              {t("topSolarPumpManufacturers.ctaFooter")}
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
          title={t("topSolarPumpManufacturers.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
