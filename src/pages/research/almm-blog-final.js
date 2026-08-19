"use client";

import GetInTouch from "@/component/Form/Contact/GetInTouch";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

/* ─────────────────────────────────────────────
   REUSABLE SUB-COMPONENTS
───────────────────────────────────────────── */
function Tag({ v, children }) {
    const s = {
        g: "bg-[#e6faf3] text-[#0d6e4a] border border-[rgba(13,110,74,0.2)]",
        o: "bg-[#fff4ec] text-[#c05800] border border-[rgba(192,88,0,0.2)]",
        b: "bg-[#eef4ff] text-[#0d4a8a] border border-[rgba(13,74,138,0.2)]",
    }[v];
    return (
        <span className={`inline-block font-mono text-[9px] px-[7px] py-[2px] rounded-[3px] m-px tracking-[0.3px] ${s}`}>
            {children}
        </span>
    );
}

function SectionHead({ id, num, children }) {
    return (
        <h2
            id={id}
            // FIX: Replaced conflicting `border-t-2 border-[#e5e0d5]` Tailwind utilities
            // with an inline style to avoid shorthand collision.
            className="font-display text-[32px] font-extrabold tracking-[-0.5px] text-[#1a1612] mt-[52px] mb-[18px] leading-[1.2] pt-3 max-sm:text-[24px]"
            style={{ borderTop: "2px solid #e5e0d5" }}
        >
            <span className="font-mono text-[13px] font-semibold text-[#c8860a] block mb-1.5 tracking-[1px]">{num}</span>
            {children}
        </h2>
    );
}

function SubHead({ children }) {
    return (
        <h3 className="font-display text-[22px] font-bold text-[#1a1612] mt-8 mb-3">
            {children}
        </h3>
    );
}

function Callout({ type, icon, title, children }) {
    const s = {
        info: { wrap: "bg-[#f0f6ff] border border-[rgba(13,74,138,0.15)]", title: "text-[#0d4a8a]" },
        warn: { wrap: "bg-[#fffbf0] border border-[rgba(200,134,10,0.2)]", title: "text-[#c8860a]" },
        success: { wrap: "bg-[#f0faf5] border border-[rgba(13,110,74,0.15)]", title: "text-[#0d6e4a]" },
        danger: { wrap: "bg-[#fff5f5] border border-[rgba(155,26,26,0.15)]", title: "text-[#9b1a1a]" },
    }[type];
    return (
        <div className={`${s.wrap} rounded-lg p-5 my-7 flex gap-3.5 items-start`}>
            <span className="text-xl min-w-[26px] mt-px">{icon}</span>
            <div>
                <div className={`font-display text-[15px] font-bold mb-1.5 ${s.title}`}>{title}</div>
                <p className="text-[14px] leading-[1.6] m-0 text-[#3d3830]">{children}</p>
            </div>
        </div>
    );
}

function DataTable({ headers, rows }) {
    return (
        <div className="overflow-x-auto my-7">
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="bg-headupb2b text-white">
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className="px-4 py-3 text-left font-mono text-[10px] tracking-[1px] uppercase font-medium whitespace-nowrap"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="border-b border-[#e5e0d5] hover:bg-[#f4f1ea] transition-colors">
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className={`px-4 py-3 text-[#3d3830] leading-[1.4] ${j === 0 ? "font-semibold text-[#1a1612]" : ""}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ComplianceBox({ head, rows }) {
    return (
        <div className="bg-white border border-[#e5e0d5] rounded-xl overflow-hidden my-7">
            <div className="bg-headupb2b text-white px-5 py-3.5 font-mono text-[11px] tracking-[1px] uppercase">
                {head}
            </div>
            {rows.map((row, i) => (
                <div
                    key={i}
                    className="flex items-start gap-3.5 px-5 py-3.5 border-b border-[#e5e0d5] last:border-b-0 text-[13px]"
                >
                    <span className="text-lg min-w-[22px] mt-px">{row.icon}</span>
                    <div className="text-[#3d3830] leading-[1.5]">{row.content}</div>
                </div>
            ))}
        </div>
    );
}

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ALMMGuidePage() {
    const { t, i18n } = useTranslation();
    const isHi = i18n.resolvedLanguage === "hi";
    const handleCopyLink = useCallback((e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            const el = e.currentTarget;
            el.textContent = t("almmGuide.share.copied");
            setTimeout(() => {
                el.textContent = t("almmGuide.share.copyLink");
            }, 2000);
        });
    }, [t]);
    const [showRequestQuote, setShowRequestQuote] = useState(false);

    const HERO_STATS = t("almmGuide.hero.stats", { returnObjects: true }) || [];
    const TOC = t("almmGuide.toc", { returnObjects: true }) || [];
    const ARCHITECTURE_HEADERS = t("almmGuide.architectureTable.headers", { returnObjects: true }) || [];
    const LIST1_STATS = t("almmGuide.list1.stats", { returnObjects: true }) || [];
    const EFFICIENCY_HEADERS = t("almmGuide.efficiencyTable.headers", { returnObjects: true }) || [];
    const EFFICIENCY_ROWS = t("almmGuide.efficiencyTable.rows", { returnObjects: true }) || [];
    const LIST2_HEADERS = t("almmGuide.list2Table.headers", { returnObjects: true }) || [];
    const LIST2_ROWS = t("almmGuide.list2Table.rows", { returnObjects: true }) || [];
    const TOP_MANUFACTURERS = t("almmGuide.topManufacturers", { returnObjects: true }) || [];
    const TIMELINE = t("almmGuide.timeline", { returnObjects: true }) || [];
    const TECHNOLOGY_HEADERS = t("almmGuide.technologyTable.headers", { returnObjects: true }) || [];
    const TECHNOLOGY_ROWS = t("almmGuide.technologyTable.rows", { returnObjects: true }) || [];
    const FAQS = t("almmGuide.faqs", { returnObjects: true }) || [];
    const QUICK_FACTS = t("almmGuide.quickFacts", { returnObjects: true }) || [];
    const RECENT_UPDATES = t("almmGuide.recentUpdates", { returnObjects: true }) || [];
    const UPCOMING_ARTICLES = t("almmGuide.upcomingArticles", { returnObjects: true }) || [];
    const METABAR = t("almmGuide.metaBar", { returnObjects: true }) || [];

    // Static architecture rows (mixed JSX + text)
    const architectureRows = [
        [
            t("almmGuide.architectureTable.rows.0.list"),
            t("almmGuide.architectureTable.rows.0.covers"),
            t("almmGuide.architectureTable.rows.0.firstPublished"),
            t("almmGuide.architectureTable.rows.0.mandatoryFrom"),
            <Tag key="g" v="g">{t("almmGuide.architectureTable.rows.0.status")}</Tag>,
        ],
        [
            t("almmGuide.architectureTable.rows.1.list"),
            t("almmGuide.architectureTable.rows.1.covers"),
            t("almmGuide.architectureTable.rows.1.firstPublished"),
            t("almmGuide.architectureTable.rows.1.mandatoryFrom"),
            <Tag key="o" v="o">{t("almmGuide.architectureTable.rows.1.status")}</Tag>,
        ],
        [
            t("almmGuide.architectureTable.rows.2.list"),
            t("almmGuide.architectureTable.rows.2.covers"),
            t("almmGuide.architectureTable.rows.2.firstPublished"),
            t("almmGuide.architectureTable.rows.2.mandatoryFrom"),
            <Tag key="b" v="b">{t("almmGuide.architectureTable.rows.2.status")}</Tag>,
        ],
    ];

    const complianceRows = (t("almmGuide.complianceBox.rows", { returnObjects: true }) || []).map((row) => ({
        icon: row.icon,
        content: <span {...HTML(row.content)} />,
    }));

    const procurementRows = (t("almmGuide.procurementBox.rows", { returnObjects: true }) || []).map((row) => ({
        icon: row.icon,
        content: <span {...HTML(row.content)} />,
    }));

    const shareLinks = [
        { href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://www.headsupb2b.com/research/almm-blog-final")}`, label: t("almmGuide.share.linkedin") },
        { href: `https://twitter.com/intent/tweet?url=${encodeURIComponent("https://www.headsupb2b.com/research/almm-blog-final")}`, label: t("almmGuide.share.twitter") },
        { href: `https://wa.me/?text=${encodeURIComponent(`${t("almmGuide.share.whatsappText")} https://www.headsupb2b.com/research/almm-blog-final`)}`, label: t("almmGuide.share.whatsapp") },
    ];

    return (
        <>
            <Head>
                {/* ── Core ── */}
                <title>{t("almmGuide.meta.title")}</title>
                <meta
                    name="description"
                    content={t("almmGuide.meta.description")}
                />
                <meta
                    name="keywords"
                    content={t("almmGuide.meta.keywords")}
                />

                {/* ── Canonical ── */}
                <link rel="canonical" href="https://www.headsupb2b.com/research/almm-blog-final" />

                {/* ── Robots ── */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

                {/* ── Open Graph ── */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={t("almmGuide.meta.title")} />
                <meta
                    property="og:description"
                    content={t("almmGuide.meta.description")}
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/almm-blog-final" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image" content="https://www.headsupb2b.com/almm.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="https://www.headsupb2b.com/almm.png" />
                <meta property="article:published_time" content="2025-12-22T00:00:00.000Z" />
                <meta property="article:modified_time" content="2026-02-05T00:00:00.000Z" />
                <meta property="article:author" content="Headsup B2B Research Desk" />

                {/* ── Twitter / X ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("almmGuide.meta.title")} />
                <meta
                    name="twitter:description"
                    content={t("almmGuide.meta.description")}
                />
                <meta name="twitter:site" content="@headsupb2b" />
                <meta name="twitter:creator" content="@headsupb2b" />
                <meta name="twitter:image" content="https://www.headsupb2b.com/almm.png" />

                {/* ── JSON-LD ── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://www.headsupb2b.com",
                            "@type": "Article",
                            headline: t("almmGuide.meta.title"),
                            description: t("almmGuide.meta.description"),
                            image: "https://www.headsupb2b.com/almm.png",
                            author: {
                                "@type": "Organization",
                                name: "Headsup B2B Research Desk",
                                url: "https://www.headsupb2b.com",
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Headsup B2B Pvt. Ltd.",
                                url: "https://www.headsupb2b.com",
                                logo: {
                                    "@type": "ImageObject",
                                    url: "https://www.headsupb2b.com/logo.png",
                                },
                            },
                            datePublished: "2025-12-22",
                            dateModified: "2026-02-05",
                            mainEntityOfPage: {
                                "@type": "WebPage",
                                "@id": "https://www.headsupb2b.com/research/almm-blog-final",
                            },
                        }),
                    }}
                />
            </Head>

            <section
                className="relative overflow-hidden px-8 pt-16 pb-[52px] bg-headupb2b max-sm:px-4 mt-10"
            >
                <div
                    className="absolute -top-[120px] -right-[80px] w-[600px] h-[500px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse,rgba(212,80,10,0.18) 0%,transparent 65%)" }}
                />
                <div
                    className="absolute -bottom-[80px] -left-[60px] w-[450px] h-[350px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse,rgba(13,110,74,0.12) 0%,transparent 65%)" }}
                />
                <div className="max-w-[1100px] mx-auto relative z-10">
                    <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                        <span
                            className="font-mono text-[10px] tracking-[1px] uppercase px-3 py-1 rounded-full font-medium text-[#f97316]"
                            style={{ background: "rgba(212,80,10,0.2)", border: "1px solid rgba(212,80,10,0.35)" }}
                        >
                            {t("almmGuide.hero.badge")}
                        </span>
                        <span
                            className="font-mono text-[10px] tracking-[0.5px] px-2.5 py-1 rounded-full flex items-center gap-1 text-[#34d399]"
                            style={{ background: "rgba(13,110,74,0.15)", border: "1px solid rgba(13,110,74,0.3)" }}
                        >
                            <span className="w-[5px] h-[5px] rounded-full inline-block blink" style={{ background: "#34d399" }} />
                            {t("almmGuide.hero.updated")}
                        </span>
                    </div>

                    <h1 className={`font-display font-extrabold tracking-[-1px] text-[#f5f0e8] max-w-[780px] mb-[18px] text-[46px] max-sm:text-[30px] ${isHi ? "leading-[1.5]" : "leading-[1.12]"}`}>
                        {t("almmGuide.hero.titlePrefix")}{" "}
                        <em
                            style={{
                                background: "linear-gradient(90deg,#f59e0b,#fde68a)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {t("almmGuide.hero.titleHighlight")}
                        </em>
                        <br />{t("almmGuide.hero.titleSuffix")}
                    </h1>

                    <p
                        className="text-[17px] text-white italic max-w-[640px] leading-[1.65] mb-8"
                    >
                        {t("almmGuide.hero.subtitle")}
                    </p>

                    <div className="flex gap-8 flex-wrap pt-7 border-t border-[rgba(245,240,232,0.12)] max-sm:gap-5">
                        {HERO_STATS.map(({ n, l }, i) => (
                            <div key={i} className="flex items-center gap-8">
                                {i > 0 && (
                                    <div className="w-px self-stretch" style={{ background: "rgba(245,240,232,0.1)" }} />
                                )}
                                <div className="flex flex-col gap-[3px]">
                                    <div className="font-mono text-2xl font-semibold text-white tracking-[-1px]">{n}</div>
                                    <div
                                        className={`text-[11px] text-white leading-[1.6] ${isHi ? "normal-case" : "tracking-[0.5px] uppercase"}`}
                                    >
                                        {l}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          META BAR
      ══════════════════════════════════════ */}
            <div className="bg-white border-b border-[#e5e0d5] px-8 py-3.5">
                <div className="max-w-[1100px] mx-auto flex items-center gap-6 font-mono text-[11px] text-[#7a7060] flex-wrap">
                    <div className="flex items-center gap-1.5"><span>✍</span> {t("almmGuide.metaBar.author")}</div>
                    <div className="flex items-center gap-1.5"><span>📅</span> {t("almmGuide.metaBar.published")}</div>
                    <div className="flex items-center gap-1.5"><span>🔄</span> {t("almmGuide.metaBar.lastUpdated")}</div>
                    <div className="flex items-center gap-1.5"><span>🏷</span> {t("almmGuide.metaBar.tags")}</div>
                    <div className="ml-auto bg-[#f4f1ea] px-2.5 py-1 rounded text-[#c8860a]">⏱ {t("almmGuide.metaBar.readTime")}</div>
                </div>
            </div>


            {/* ══════════════════════════════════════
          PAGE BODY
      ══════════════════════════════════════ */}
            <div className="max-w-[1100px] mx-auto px-8 max-sm:px-4">

                {/* Breadcrumb */}
                <nav className="py-3.5 font-mono text-[11px] text-[#b0a898] tracking-[0.3px]">
                    <Link href="https://www.headsupb2b.com" className="text-[#7a7060] no-underline hover:text-[#c8860a]">{t("almmGuide.breadcrumb.home")}</Link>
                    <span className="mx-1.5">/</span>
                    <Link href="/" className="text-[#7a7060] no-underline hover:text-[#c8860a]">{t("almmGuide.breadcrumb.research")}</Link>
                    <span className="mx-1.5">/</span>
                    <Link href="/renewable-energy-solutions" className="text-[#7a7060] no-underline hover:text-[#c8860a]">{t("almmGuide.breadcrumb.solarProcurement")}</Link>
                    <span className="mx-1.5">/</span>
                    {t("almmGuide.breadcrumb.current")}
                </nav>

                {/* Two-column layout */}
                <div className="grid grid-cols-[1fr_300px] gap-14 items-start pt-4 max-[900px]:grid-cols-1">

                    <main className="pt-2 font-serif text-[18px] leading-[1.75]">


                        <div
                            className="bg-[#fffbf0] rounded-lg px-6 py-5 my-8"
                            style={{ border: "1px solid rgba(200,134,10,0.2)", borderLeft: "4px solid #c8860a" }}
                        >
                            <div className="font-display text-[14px] font-bold text-[#c8860a] uppercase tracking-[1px] mb-3.5">
                                📋 {t("almmGuide.tocLabel")}
                            </div>
                            <ol className="list-none p-0 m-0">
                                {TOC.map(({ href, label }, i) => (
                                    <li key={i} className="flex items-start gap-2 mb-1.5 text-[14px] text-[#3d3830] leading-[1.4]">
                                        <span className="font-mono text-[11px] text-[#c8860a] font-semibold min-w-[18px] mt-0.5">
                                            {i + 1}.
                                        </span>
                                        <Link
                                            href={href}
                                            className="text-[#3d3830] no-underline font-medium hover:text-[#c8860a] transition-colors"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Intro */}
                        <p className="mb-5 text-[19px] text-[#1a1612] font-medium leading-[1.7]" {...HTML(t("almmGuide.intro"))} />

                        {/* ── SECTION 1 ── */}
                        <SectionHead id="what-is-almm" num={t("almmGuide.sections.s1.num")}>
                            {t("almmGuide.sections.s1.title")}
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]" {...HTML(t("almmGuide.s1p1"))} />
                        <p className="mb-5 text-[#3d3830]" {...HTML(t("almmGuide.s1p2"))} />
                        <Callout type="info" icon="ℹ️" title={t("almmGuide.callouts.whyMnre.title")}>
                            {t("almmGuide.callouts.whyMnre.body")}
                        </Callout>
                        <SubHead>{t("almmGuide.subheads.threeLayer")}</SubHead>
                        <p className="mb-5 text-[#3d3830]">
                            {t("almmGuide.s1p3")}
                        </p>
                        <DataTable
                            headers={ARCHITECTURE_HEADERS}
                            rows={architectureRows}
                        />
                        <blockquote className="border-l-[5px] border-[#c8860a] my-9 px-7 py-5 bg-[#fffbf0] rounded-r-lg">
                            <p className="font-display text-[22px] italic text-[#1a1612] leading-[1.5] m-0">
                                {t("almmGuide.quote.text")}
                            </p>
                            <cite className="block mt-2.5 font-mono text-[11px] text-[#c8860a] tracking-[0.5px] not-italic">
                                {t("almmGuide.quote.cite")}
                            </cite>
                        </blockquote>

                        {/* ── SECTION 2 ── */}
                        <SectionHead id="list1" num={t("almmGuide.sections.s2.num")}>
                            {t("almmGuide.sections.s2.title")}
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]" {...HTML(t("almmGuide.s2p1"))} />
                        <div className="grid grid-cols-3 gap-px bg-[#e5e0d5] border border-[#e5e0d5] rounded-xl overflow-hidden my-7 max-sm:grid-cols-1">
                            {LIST1_STATS.map((s, i) => (
                                <div key={i} className="bg-white p-5 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: s.c }} />
                                    <div
                                        className="font-mono text-[28px] font-semibold tracking-[-1px] leading-none"
                                        style={{ color: s.c }}
                                    >
                                        {s.n}
                                    </div>
                                    <div className="text-[12px] text-[#7a7060] mt-1.5 leading-[1.4] whitespace-pre-line">{s.l}</div>
                                </div>
                            ))}
                        </div>
                        <p className="mb-5 text-[#3d3830]">
                            {t("almmGuide.s2p2")}
                        </p>
                        <SubHead>{t("almmGuide.subheads.efficiency")}</SubHead>
                        <DataTable
                            headers={EFFICIENCY_HEADERS}
                            rows={EFFICIENCY_ROWS}
                        />

                        {/* ── SECTION 3 ── */}
                        <SectionHead id="list2" num={t("almmGuide.sections.s3.num")}>
                            {t("almmGuide.sections.s3.title")}
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]" {...HTML(t("almmGuide.s3p1"))} />
                        <Callout type="warn" icon="⚠️" title={t("almmGuide.callouts.compliance.title")}>
                            <span {...HTML(t("almmGuide.callouts.compliance.body"))} />
                        </Callout>
                        <SubHead>{t("almmGuide.subheads.list2Current")}</SubHead>
                        <DataTable
                            headers={LIST2_HEADERS}
                            rows={LIST2_ROWS}
                        />

                        {/* ── SECTION 4 ── */}
                        <SectionHead id="top-players" num={t("almmGuide.sections.s4.num")}>
                            {t("almmGuide.sections.s4.title")}
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            {t("almmGuide.s4p1")}
                        </p>
                        <div className="grid grid-cols-2 gap-3.5 my-7 max-[900px]:grid-cols-1">
                            {TOP_MANUFACTURERS.map((m, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-[#e5e0d5] rounded-xl px-5 py-[18px] relative overflow-hidden transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: m.color }} />
                                    <div
                                        className="font-mono text-[10px] tracking-[1px] uppercase mb-1.5 font-semibold"
                                        style={{ color: m.color }}
                                    >
                                        {m.rank}
                                    </div>
                                    <div className="font-display text-base font-bold mb-[3px] text-[#1a1612]">{m.name}</div>
                                    <div className="font-mono text-[10px] text-[#7a7060] mb-2.5">{m.state}</div>
                                    <div
                                        className="font-mono text-lg font-semibold tracking-[-0.5px]"
                                        style={{ color: m.color }}
                                    >
                                        {m.cap}
                                    </div>
                                    <div className="text-[11px] text-[#7a7060] mt-0.5">{t("almmGuide.manufacturersCapLabel")}</div>
                                    <div className="flex flex-wrap gap-1 mt-2.5">
                                        {m.tags.map(([v, tag], ti) => (
                                            <Tag key={ti} v={v}>{tag}</Tag>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── SECTION 5 ── */}
                        <SectionHead id="compliance" num={t("almmGuide.sections.s5.num")}>
                            {t("almmGuide.sections.s5.title")}
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            {t("almmGuide.s5p1")}
                        </p>
                        <ComplianceBox
                            head={t("almmGuide.complianceBox.head")}
                            rows={complianceRows}
                        />
                        <Callout type="success" icon="✅" title={t("almmGuide.callouts.doesNotApply.title")}>
                            {t("almmGuide.callouts.doesNotApply.body")}
                        </Callout>

                        {/* ── SECTION 6 ── */}
                        <SectionHead id="timeline" num={t("almmGuide.sections.s6.num")}>
                            {t("almmGuide.sections.s6.title")}
                        </SectionHead>
                        <div className="my-7 relative">
                            {TIMELINE.map((item, i, arr) => (
                                <div key={i} className="flex gap-5 pb-7 relative">
                                    {i < arr.length - 1 && (
                                        <div className="absolute left-[17px] top-9 bottom-[-8px] w-0.5 bg-[#e5e0d5]" />
                                    )}
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-[11px] font-semibold text-white flex-shrink-0 mt-0.5 z-10"
                                        style={{ background: item.color }}
                                    >
                                        {item.dot}
                                    </div>
                                    <div>
                                        <div className="font-mono text-[11px] text-[#b0a898] tracking-[0.5px] mb-[3px]">{item.date}</div>
                                        <div className="font-display text-base font-bold text-[#1a1612] mb-1">{item.title}</div>
                                        <p className="text-[14px] text-[#7a7060] leading-[1.5] m-0">{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── SECTION 7 ── */}
                        <SectionHead id="technology" num={t("almmGuide.sections.s7.num")}>
                            {t("almmGuide.sections.s7.title")}
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            {t("almmGuide.s7p1")}
                        </p>
                        <DataTable
                            headers={TECHNOLOGY_HEADERS}
                            rows={TECHNOLOGY_ROWS}
                        />
                        <Callout type="info" icon="💡" title={t("almmGuide.callouts.topcon.title")}>
                            {t("almmGuide.callouts.topcon.body")}
                        </Callout>

                        {/* ── SECTION 8 ── */}
                        <SectionHead id="sourcing" num={t("almmGuide.sections.s8.num")}>
                            {t("almmGuide.sections.s8.title")}
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            {t("almmGuide.s8p1")}
                        </p>
                        <SubHead>{t("almmGuide.subheads.checklist")}</SubHead>
                        <ComplianceBox
                            head={t("almmGuide.procurementBox.head")}
                            rows={procurementRows}
                        />

                        {/* ── DATABASE EMBED ── */}
                        <div
                            id="database"
                            className="relative overflow-hidden bg-headupb2b rounded-2xl p-9 my-12"
                        >
                            <div
                                className="absolute -top-[80px] -right-[60px] w-[350px] h-[350px] pointer-events-none"
                                style={{ background: "radial-gradient(circle,rgba(212,80,10,0.1),transparent 65%)" }}
                            />
                            <div className="relative z-10">
                                <div className="font-mono text-[10px] text-[#f59e0b] tracking-[1.5px] uppercase mb-3 flex items-center gap-2">
                                    <span className="w-5 h-px bg-[#f59e0b] opacity-50 inline-block" />
                                    {t("almmGuide.database.kicker")}
                                </div>
                                <div className="font-display text-[26px] font-extrabold text-[#f5f0e8] tracking-[-0.5px] mb-2.5">
                                    {t("almmGuide.database.title")}
                                </div>
                                <p
                                    className="text-[14px] mb-6 leading-[1.6]"
                                    style={{ color: "rgba(245,240,232,0.6)" }}
                                >
                                    {t("almmGuide.database.body")}
                                </p>
                                <Link
                                    href="/research/almm-database"

                                    className="inline-block text-white font-bold text-[14px] px-7 py-3 rounded-lg no-underline transition-opacity hover:opacity-90"
                                    style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                                >
                                    {t("almmGuide.database.button")}
                                </Link>
                                <Link
                                    href="/research/almm-database"
                                    className="inline-block text-[13px] px-5 py-3 ml-1 no-underline transition-opacity hover:opacity-90 underline-offset-2"
                                    style={{ color: "rgba(245,240,232,0.6)", textDecorationColor: "rgba(245,240,232,0.2)" }}
                                >
                                    {t("almmGuide.database.embed")}
                                </Link>
                            </div>
                        </div>

                        {/* ── SECTION 9: FAQ ── */}
                        <SectionHead id="faq" num={t("almmGuide.sections.faq.num")}>{t("almmGuide.sections.faq.title")}</SectionHead>
                        {FAQS.map(({ q, a }, i) => (
                            <div key={i}>
                                <SubHead>{q}</SubHead>
                                <p className="mb-5 text-[#3d3830]">{a}</p>
                            </div>
                        ))}

                        {/* ── SHARE BAR ── */}
                        <div className="flex items-center gap-2.5 py-5 border-t border-b border-[#e5e0d5] my-9 flex-wrap">
                            <span className="font-mono text-[11px] text-[#7a7060] tracking-[0.5px]">{t("almmGuide.share.label")}</span>
                            {/*
                FIX: "Copy Link" was a <Link href="#"> with an onClick — semantically wrong.
                Replaced with a <button> since it performs an action, not navigation.
                FIX: Share URLs were protocol-relative (//almm-complete-guide-2025) which
                is not a valid path. Replaced with template-literal absolute URLs so
                window.location.origin is used at runtime. For LinkedIn/Twitter/WhatsApp
                the encoded URL now points to a real shareable path.
              */}
                            <button
                                onClick={handleCopyLink}
                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4f1ea] border border-[#e5e0d5] text-[12px] font-semibold text-[#3d3830] cursor-pointer hover:border-[#d4cfc5] hover:bg-white transition-all"
                            >
                                🔗 {t("almmGuide.share.copyLink")}
                            </button>
                            {shareLinks.map(({ href, label }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4f1ea] border border-[#e5e0d5] text-[12px] font-semibold text-[#3d3830] no-underline hover:border-[#d4cfc5] hover:bg-white transition-all"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>

                        {/* ── AUTHOR BOX ── */}
                        <div className="flex gap-5 bg-white border border-[#e5e0d5] rounded-xl p-6 my-9 items-start">
                            <div
                                className="w-[60px] h-[60px] rounded-full bg-headupb2b flex items-center justify-center font-display text-2xl font-extrabold text-white flex-shrink-0"

                            >
                                H
                            </div>
                            <div>
                                <div className="font-display text-[17px] font-bold mb-[3px]">{t("almmGuide.author.name")}</div>
                                <div className="font-mono text-[10px] text-[#c8860a] tracking-[0.5px] mb-2">
                                    {t("almmGuide.author.company")}
                                </div>
                                <p className="text-[13px] text-[#7a7060] leading-[1.6] m-0">
                                    {t("almmGuide.author.bio")}
                                </p>
                            </div>
                        </div>

                        {/* ── RELATED ARTICLES ── */}
                        {/* <h2 className="font-display text-[32px] font-extrabold tracking-[-0.5px] text-[#1a1612] mt-9 mb-[18px]">
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-3 gap-4 mt-6 max-[900px]:grid-cols-1 mb-8">
                            {[
                                { href: "/solar-module-pricing-india-2025", cat: "Solar Procurement", title: "Solar Module Pricing in India — Q4 2025 Benchmark Report", meta: "Dec 2025 · 8 min read" },
                                { href: "/topcon-vs-perc-procurement-guide", cat: "Technology", title: "TOPCon vs Mono PERC: Which Should You Specify for Your Tender?", meta: "Nov 2025 · 10 min read" },
                                { href: "/solar-epc-procurement-checklist", cat: "EPC Guide", title: "Solar EPC Procurement Checklist: 27 Points Before Placing a Module PO", meta: "Oct 2025 · 6 min read" },
                            ].map((card, i) => (
                                <Link
                                    key={i}
                                    href={card.href}
                                    className="bg-white border border-[#e5e0d5] rounded-xl p-[18px] no-underline block transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]"
                                >
                                    <div className="font-mono text-[9px] text-[#c8860a] tracking-[1px] uppercase mb-1.5">{card.cat}</div>
                                    <div className="font-display text-[15px] font-bold text-[#1a1612] leading-[1.35] mb-1.5">{card.title}</div>
                                    <div className="font-mono text-[10px] text-[#b0a898]">{card.meta}</div>
                                </Link>
                            ))}
                        </div> */}
                        <h2 className="font-display text-[32px] font-extrabold tracking-[-0.5px] text-[#1a1612] mt-9 mb-[18px]">
                            {t("almmGuide.upcomingArticlesHeading")}
                        </h2>
                        <div className="grid grid-cols-3 gap-4 mt-6 max-[900px]:grid-cols-1 mb-8">
                            {UPCOMING_ARTICLES.map((card, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-[#e5e0d5] rounded-xl p-[18px] block transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]"
                                >
                                    <div className="font-mono text-[9px] text-[#c8860a] tracking-[1px] uppercase mb-1.5">
                                        {card.cat}
                                    </div>

                                    <div className="font-display text-[15px] font-bold text-[#1a1612] leading-[1.35] mb-1.5">
                                        {card.title}
                                    </div>

                                    <div className="font-mono text-[10px] text-[#b0a898]">
                                        {card.meta}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>

                    {/* ════════════════════════════════
              SIDEBAR
          ════════════════════════════════ */}
                    <aside className="sticky top-[80px] max-[900px]:static">

                        {/* CTA Card */}
                        <div
                            className="rounded-xl p-5 mb-5 bg-headupb2b"
                        >
                            <div className="font-display text-[15px] font-bold text-[#f5f0e8] mb-3.5">
                                {t("almmGuide.sidebarCta.title")}
                            </div>
                            <p className="text-[13px] leading-[1.6] mb-4" style={{ color: "rgba(245,240,232,0.6)" }}>
                                {t("almmGuide.sidebarCta.body")}
                            </p>
                            <button
                                type="button"
                                className="block text-center text-white font-bold text-[13px] px-4 py-[11px] rounded-[7px] no-underline transition-opacity hover:opacity-90"
                                onClick={() => setShowRequestQuote(true)}
                                style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                            >
                                {t("almmGuide.sidebarCta.button")}
                            </button>
                        </div>

                        {/* Quick Facts */}
                        <div className="bg-white border border-[#e5e0d5] rounded-xl p-5 mb-5">
                            <div className="font-display text-[15px] font-bold mb-3.5">📊 {t("almmGuide.quickFactsTitle")}</div>
                            <ul className="list-none p-0 m-0">
                                {QUICK_FACTS.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex justify-between items-center py-[9px] border-b border-[#e5e0d5] last:border-b-0 text-[13px] gap-2.5"
                                    >
                                        <span className="text-[#7a7060] flex-shrink-0">{item.k}</span>
                                        <span className={`font-semibold font-mono text-[12px] text-right ${item.c}`}>{item.v}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Updates */}
                        <div className="bg-white border border-[#e5e0d5] rounded-xl p-5 mb-5">
                            <div className="font-display text-[15px] font-bold mb-3.5">🔄 {t("almmGuide.recentUpdatesTitle")}</div>
                            <ul className="list-none p-0 m-0">
                                {RECENT_UPDATES.map((item, i) => (
                                    <li key={i} className="py-2.5 border-b border-[#e5e0d5] last:border-b-0 text-[13px]">
                                        <div className="font-semibold text-[#1a1612] leading-[1.4] mb-0.5">{item.title}</div>
                                        <div className="font-mono text-[10px] text-[#b0a898]">{item.meta}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Database Tool */}
                        <div className="bg-headupb2b border border-[rgba(200,134,10,0.2)] rounded-xl p-5 mb-8">
                            <div className="font-display text-[15px] font-bold text-white mb-3.5">🔍 {t("almmGuide.sidebarDatabase.title")}</div>
                            <p className="text-[13px] text-white leading-[1.6] mb-3.5">
                                {t("almmGuide.sidebarDatabase.body")}
                            </p>
                            <Link
                                href="/research/almm-database"
                                className="block text-center bg-headupb2b text-white font-bold text-[13px] px-4 py-2.5 rounded-[7px] no-underline transition-opacity hover:opacity-90"
                                style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}

                            >
                                {t("almmGuide.sidebarDatabase.button")}
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            {showRequestQuote && (
                <GetInTouch onClose={() => setShowRequestQuote(false)} />
            )}
        </>
    );
}
