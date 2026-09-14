"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   SMALL PRESENTATIONAL COMPONENTS
   (same visual system as the research articles —
    see src/pages/research/india-coal-sector-report-2026.js)
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
      {children && (
        <h2 className="text-2xl t:text-[28px] font-extrabold text-[#1a1330] leading-tight mt-1">
          {children}
        </h2>
      )}
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

/* Only render arrays — t(..., {returnObjects:true}) returns the raw key string
   when a bucket is missing, which would otherwise crash .map() */
const arr = (v) => (Array.isArray(v) ? v : []);

/* ─────────────────────────────────────────────
   BODY BLOCKS
   A section is { kicker, title, blocks: [...] } and each block is one of:
     { type: "p",       html: "<b>rich</b> text" }
     { type: "list",    items: ["…"], ordered: false }
     { type: "callout", label, title, body }
     { type: "table",   headers: [...], rows: [[...], [...]] }
     { type: "stats",   items: [{ num, label }] }
───────────────────────────────────────────── */
const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

function Block({ block }) {
  if (!block || !block.type) return null;

  switch (block.type) {
    case "p":
      return <p className={para} {...HTML(block.html || "")} />;

    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List
          className={`${
            block.ordered ? "list-decimal" : "list-disc"
          } pl-6 space-y-2.5 mb-6 text-[16px] leading-[1.75] text-gray-700 marker:text-headupb2b marker:font-bold`}
        >
          {arr(block.items).map((item, i) => (
            <li key={i} {...HTML(item)} />
          ))}
        </List>
      );
    }

    case "callout":
      return (
        <Callout label={block.label} title={block.title}>
          <span {...HTML(block.body || "")} />
        </Callout>
      );

    case "table":
      return (
        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200">
          <table className="w-full border-collapse min-w-[520px]">
            <thead>
              <tr>
                {arr(block.headers).map((h, i) => (
                  <Th key={i}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {arr(block.rows).map((row, r) => (
                <tr key={r} className={r % 2 ? "bg-[#f8f9fb]" : "bg-white"}>
                  {arr(row).map((cell, c) => (
                    <td
                      key={c}
                      className="px-4 py-3 text-[14px] text-gray-700 border-t border-gray-200 align-top"
                      {...HTML(cell)}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "stats":
      return (
        <div className="grid grid-cols-1 mm:grid-cols-3 gap-3 my-8">
          {arr(block.items).map((s, i) => (
            <div key={i} className="bg-purple rounded-2xl p-5 text-center">
              <div className="text-2xl t:text-[28px] font-black text-headupb2b leading-none mb-2">
                {s.num}
              </div>
              <div className="text-[12px] text-gray-600 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

/* ─────────────────────────────────────────────
   GUIDE LAYOUT
   Every /pm-surya-ghar/<slug> page is this layout pointed at its own
   translation namespace, so adding content = filling translation.json.
───────────────────────────────────────────── */
export default function GuideLayout({ ns, slug }) {
  const { t } = useTranslation();
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);

  const canonical = slug
    ? `https://www.headsupb2b.com/pm-surya-ghar/${slug}`
    : "https://www.headsupb2b.com/pm-surya-ghar";
  const k = (key) => t(`${ns}.${key}`);
  const list = (key) => arr(t(`${ns}.${key}`, { returnObjects: true }));

  const HERO_STATS = list("hero.stats");
  const HERO_STRIP = list("hero.strip");
  const TOC = list("toc");
  const SECTIONS = list("sections");
  const FAQS = list("faqs");
  const KEYWORDS = list("keywords");
  // every guide in the section except the one being read
  const OTHER_GUIDES = arr(
    t("pmSuryaGhar.guideLinks", { returnObjects: true })
  ).filter((g) => g.slug !== slug);

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="bg-white text-[#1a1330] pt-6 t:pt-10"
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={k("meta.seoTitle")}
        description={k("meta.seoDescription")}
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: k("meta.ogTitle"),
          description: k("meta.ogDescription"),
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
              {k("hero.badge")}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{k("hero.readTime")}</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">{k("hero.published")}</span>
          </div>
          <h1
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}
          >
            {k("hero.title1")} <br className="hidden t:block" />
            {k("hero.title2")}
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            {k("hero.subtitle")}
          </p>

          {/* Hero stats */}
          {HERO_STATS.length > 0 && (
            <div className="grid grid-cols-1 mm:grid-cols-3 gap-3 mt-9">
              {HERO_STATS.map((s, i) => (
                <div key={i} className="bg-white/95 rounded-2xl p-5 text-center">
                  <div className="text-2xl t:text-[28px] font-black text-headupb2b leading-none mb-2">
                    {s.num}
                  </div>
                  <div className="text-[12px] text-gray-600 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Topic strip */}
          {HERO_STRIP.length > 0 && (
            <div className="mt-8 rounded-xl bg-headupb2b/90 border border-white/10 px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {HERO_STRIP.map((c, i) => (
                <span
                  key={i}
                  className="text-[11px] t:text-[12px] font-bold uppercase tracking-[1.2px] text-white"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          <p className="text-[12px] text-white/45 mt-6">{k("hero.sourceLine")}</p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">
        {/* TOC */}
        {TOC.length > 0 && (
          <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
            <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
              {k("tocLabel")}
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
        )}

        {/* SECTIONS */}
        {SECTIONS.map((section, i) => (
          <section key={i} className={section.title || section.kicker ? "" : "mt-14"}>
            {(section.title || section.kicker) && (
              <SectionHeading kicker={section.kicker}>{section.title}</SectionHeading>
            )}
            {arr(section.blocks).map((block, b) => (
              <Block key={b} block={block} />
            ))}
          </section>
        ))}

        {/* FAQ */}
        {FAQS.length > 0 && (
          <>
            <SectionHeading kicker={k("faqKicker")}>{k("faqTitle")}</SectionHeading>
            <div className="space-y-3 my-7">
              {FAQS.map((f, i) => (
                <details
                  key={i}
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
          </>
        )}

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
              {k("ctaHeading")}
            </h2>
            <p className="text-white/75 text-[16px] max-w-[560px] mx-auto mb-7">
              {k("ctaSubtitle")}
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              {k("ctaButton")}
            </button>
            <p className="text-[13px] text-white/55 mt-4">{k("ctaFooter")}</p>
          </div>
        </div>

        {/* ── RELATED KEYWORDS ── */}
        {KEYWORDS.length > 0 && (
          <div className="mt-14 border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 mm:grid-cols-3 l:grid-cols-5">
              {KEYWORDS.map((kw, i) => (
                <div
                  key={i}
                  className="px-6 py-5 text-[15px] text-gray-600 bg-[#f8f9fb] border-b border-r border-gray-200 flex items-center"
                >
                  {kw}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── OTHER GUIDES IN THIS SECTION ── */}
        {OTHER_GUIDES.length > 0 && (
          <div className="mt-14">
            <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
              {t("pmSuryaGhar.moreGuides")}
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 mm:grid-cols-3 l:grid-cols-4">
                {OTHER_GUIDES.map((g) => (
                  <Link
                    key={g.slug}
                    href={g.slug ? `/pm-surya-ghar/${g.slug}` : "/pm-surya-ghar"}
                    className="px-6 py-5 text-[15px] text-gray-600 bg-[#f8f9fb] border-b border-r border-gray-200 flex items-center hover:bg-purple hover:text-headupb2b transition-colors"
                  >
                    {g.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      {showRequestConsultation && (
        <GetInTouch
          title={k("consultationTitle")}
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
