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

/* ─── One of the 8 BOQ line-item tables ─── */
function BoqTable({ n, title, sub, headers, rows }) {
  return (
    <div className="my-9">
      <div className="flex items-start gap-4 mb-4">
        <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-black text-[15px] flex items-center justify-center">
          {n}
        </div>
        <div>
          <h3 className="font-extrabold text-[#1a1330] text-lg leading-snug">{title}</h3>
          <p className="text-[13px] text-gray-500 mt-1">{sub}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-[14px]">
          <thead>
            <tr>
              {headers.map((th) => (
                <Th key={th}>{th}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                <td
                  className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top leading-snug"
                  {...HTML(row.item)}
                />
                <td className="px-4 py-3 border-b border-gray-200 text-gray-500 align-top whitespace-nowrap">
                  {row.unit}
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
                    row.tone === "red" ? "text-[#c0392b]" : "text-headupb2b"
                  }`}
                  {...HTML(row.flag)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function HowToBuildAWinningSolarBoq() {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical =
    "https://www.headsupb2b.com/research/solar-boq-procurement-checklist";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  const HERO_STATS = t("solarBoq.heroStats", { returnObjects: true }) || [];
  const HERO_TAGS = t("solarBoq.heroTags", { returnObjects: true }) || [];
  const TOC = t("solarBoq.toc", { returnObjects: true }) || [];
  const TABLE_HEADERS = t("solarBoq.tableHeaders", { returnObjects: true }) || [];
  const TABLE_HEADERS_8 = t("solarBoq.tableHeaders8", { returnObjects: true }) || [];
  const BOQ_SECTIONS = t("solarBoq.boqSections", { returnObjects: true }) || [];
  const ALMM_ITEMS = t("solarBoq.almm.items", { returnObjects: true }) || [];
  const MISTAKES = t("solarBoq.mistakes", { returnObjects: true }) || [];
  const STEPS = t("solarBoq.steps", { returnObjects: true }) || [];
  const COST_ROWS = t("solarBoq.costCard.rows", { returnObjects: true }) || [];
  const CHECKLIST = t("solarBoq.checklist", { returnObjects: true }) || [];
  const TAKEAWAYS = t("solarBoq.takeaways", { returnObjects: true }) || [];
  const FAQS = t("solarBoq.faqs", { returnObjects: true }) || [];
  const SOURCES = t("solarBoq.sources.items", { returnObjects: true }) || [];
  const CTA_FEATURES = t("solarBoq.cta.features", { returnObjects: true }) || [];
  const KEYWORDS = t("solarBoq.keywords", { returnObjects: true }) || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={t("solarBoq.meta.seoTitle")}
        description={t("solarBoq.meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: t("solarBoq.meta.ogTitle"),
          description: t("solarBoq.meta.ogDescription"),
          site_name: "Headsup B2B",
          images: [
            {
              url: "https://www.headsupb2b.com/how-to-build-a-winning-solar-boq.webp",
              width: 1600,
              height: 800,
              alt: t("solarBoq.meta.ogTitle"),
            },
          ],
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
              {t("solarBoq.hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarBoq.hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{t("solarBoq.hero.published")}</span>
          </div>
          <h1
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}
          >
            {t("solarBoq.hero.title1")} <br className="hidden t:block" />
            {t("solarBoq.hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {t("solarBoq.hero.subtitle")}
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
              <span
                key={c}
                className="text-[11px] t:text-[12px] font-bold uppercase tracking-[1.2px] text-white"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="text-[12px] text-white/45 mt-6">{t("solarBoq.hero.sourceLine")}</p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">
        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            {t("solarBoq.tocLabel")}
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
        <Callout label={t("solarBoq.whoFor.label")}>{t("solarBoq.whoFor.body")}</Callout>

        <p className={para}>{t("solarBoq.intro.p1")}</p>
        <p className={para}>{t("solarBoq.intro.p2")}</p>
        <p className={para}>{t("solarBoq.intro.p3")}</p>

        {/* Real-world scenario */}
        <div className="relative overflow-hidden bg-[#2e1f4d] rounded-2xl px-7 t:px-9 py-8 my-9">
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <div className="text-xs font-bold tracking-[1.5px] uppercase text-white/60 mb-3">
              {t("solarBoq.scenario.label")}
            </div>
            <p className="text-[16px] text-white/90 leading-relaxed italic">
              &ldquo;{t("solarBoq.scenario.quote")}&rdquo;
            </p>
            <p className="text-[13px] text-white/50 mt-4">
              {t("solarBoq.scenario.attribution")}
            </p>
          </div>
        </div>

        {/* 1 */}
        <SectionHeading kicker={t("solarBoq.sections.s1.kicker")}>
          {t("solarBoq.sections.s1.title")}
        </SectionHeading>
        <p className={para}>{t("solarBoq.s1p1")}</p>
        <p className={para}>{t("solarBoq.s1p2")}</p>
        <div className="bg-purple border-l-4 border-headupb2b rounded-r-xl p-6 my-8">
          <p className="text-[19px] t:text-xl font-bold text-[#1a1330] leading-snug italic">
            {t("solarBoq.s1quote")}
          </p>
          <p className="text-[13px] text-gray-500 mt-3">{t("solarBoq.s1quoteAttribution")}</p>
        </div>

        {/* 2 */}
        <SectionHeading kicker={t("solarBoq.sections.s2.kicker")}>
          {t("solarBoq.sections.s2.title")}
        </SectionHeading>
        <p className={para}>{t("solarBoq.s2p1")}</p>

        {BOQ_SECTIONS.map((sec, idx) => (
          <div key={sec.n}>
            <BoqTable
              n={sec.n}
              title={sec.title}
              sub={sec.sub}
              headers={idx === BOQ_SECTIONS.length - 1 ? TABLE_HEADERS_8 : TABLE_HEADERS}
              rows={sec.rows}
            />

            {/* After section 1: module pricing note + ALMM position */}
            {idx === 0 && (
              <>
                <p className="text-[15px] leading-relaxed text-gray-600 italic">
                  {t("solarBoq.moduleNote")}
                </p>
                <Callout label={t("solarBoq.almm.label")}>
                  <ul className="list-disc pl-5 space-y-2.5">
                    {ALMM_ITEMS.map((item, i) => (
                      <li key={i} {...HTML(item)} />
                    ))}
                  </ul>
                </Callout>
              </>
            )}

            {/* After section 4: cable rule of thumb + mid-article CTA */}
            {idx === 3 && (
              <>
                <p
                  className="text-[15px] leading-relaxed text-gray-600"
                  {...HTML(t("solarBoq.cableNote"))}
                />
                <div className="relative overflow-hidden bg-headupb2b rounded-2xl px-7 t:px-9 py-8 my-9">
                  <div
                    className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl t:text-2xl font-black text-white mb-2.5">
                      {t("solarBoq.midCta.title")}
                    </h3>
                    <p className="text-white/75 text-[15px] leading-relaxed mb-6 max-w-[620px]">
                      {t("solarBoq.midCta.desc")}
                    </p>
                    <button
                      onClick={() => setShowRequestConsultation(true)}
                      className="inline-block bg-white text-headupb2b px-7 py-3 rounded-lg text-[15px] font-bold hover:bg-gray-100 transition-colors"
                    >
                      {t("solarBoq.midCta.btnText")}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* 3 */}
        <SectionHeading kicker={t("solarBoq.sections.s3.kicker")}>
          {t("solarBoq.sections.s3.title")}
        </SectionHeading>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {MISTAKES.map((m) => (
            <div key={m.n} className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-5 pt-5">
                <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b">
                  / {m.n}
                </div>
                <h3 className="text-lg font-extrabold text-[#1a1330] mt-2 leading-snug">
                  {m.title}
                </h3>
              </div>
              <div className="px-5 pb-5 pt-2">
                <p className="text-[14px] text-gray-600 leading-relaxed">{m.body}</p>
                <p className="text-[13px] font-bold text-[#c0392b] leading-snug mt-3">
                  {m.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 */}
        <SectionHeading kicker={t("solarBoq.sections.s4.kicker")}>
          {t("solarBoq.sections.s4.title")}
        </SectionHeading>
        <div className="space-y-3 my-7">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="flex gap-4 p-5 rounded-2xl bg-[#faf9fd] border border-gray-200"
            >
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

        {/* 5 */}
        <SectionHeading kicker={t("solarBoq.sections.s5.kicker")}>
          {t("solarBoq.sections.s5.title")}
        </SectionHeading>
        <div className="relative overflow-hidden bg-[#2e1f4d] rounded-2xl px-7 t:px-9 py-8 my-7">
          <div
            className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <div className="text-xs font-bold tracking-[1.5px] uppercase text-white/60 mb-5">
              {t("solarBoq.costCard.label")}
            </div>
            {COST_ROWS.map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-baseline gap-5 py-3 border-b border-white/10"
              >
                <span className="text-[14px] t:text-[15px] text-white/75 leading-snug">
                  {row.label}
                </span>
                <span
                  className={`text-[16px] font-black whitespace-nowrap ${
                    row.tone === "negative" ? "text-[#ff9b6a]" : "text-white"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-baseline gap-5 pt-5">
              <span className="text-[15px] font-bold text-white">
                {t("solarBoq.costCard.totalLabel")}
              </span>
              <span className="text-xl font-black text-white whitespace-nowrap">
                {t("solarBoq.costCard.totalValue")}
              </span>
            </div>
          </div>
        </div>
        <p className={para}>{t("solarBoq.s5p1")}</p>

        {/* 6 */}
        <SectionHeading kicker={t("solarBoq.sections.s6.kicker")}>
          {t("solarBoq.sections.s6.title")}
        </SectionHeading>
        <p className={para}>{t("solarBoq.s6p1")}</p>
        <div className="space-y-2.5 my-7">
          {CHECKLIST.map((c, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 t:p-5 rounded-xl bg-[#faf9fd] border border-gray-200"
            >
              <span className="shrink-0 w-5 h-5 mt-0.5 rounded border-2 border-headupb2b" />
              <p className="text-[14px] t:text-[15px] text-gray-600 leading-relaxed">
                <strong className="text-[#1a1330]">{c.label}</strong> {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* 7 */}
        <SectionHeading kicker={t("solarBoq.sections.s7.kicker")}>
          {t("solarBoq.sections.s7.title")}
        </SectionHeading>
        <div className="space-y-3 my-7">
          {TAKEAWAYS.map((k, i) => (
            <div
              key={k.title}
              className="flex gap-4 p-5 rounded-2xl bg-[#faf9fd] border border-gray-200"
            >
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
        <SectionHeading kicker={t("solarBoq.sections.faq.kicker")}>
          {t("solarBoq.sections.faq.title")}
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
              <p className="text-[14px] text-gray-600 leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>

        {/* Sources */}
        <Callout label={t("solarBoq.sources.title")}>
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
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <span className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase text-white/70 border border-white/25 rounded-full px-3.5 py-1 mb-5">
              {t("solarBoq.cta.kicker")}
            </span>
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              {t("solarBoq.cta.heading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[560px] mx-auto mb-7">
              {t("solarBoq.cta.subtitle")}
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
              {t("solarBoq.cta.button")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">{t("solarBoq.cta.footer")}</p>
          </div>
        </div>

        {/* ── ARTICLE FOOTER ── */}
        <p className="text-[13px] text-gray-500 mt-12">{t("solarBoq.footer.publishedLine")}</p>

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
          title={t("solarBoq.consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
