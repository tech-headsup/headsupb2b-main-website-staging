"use client";

import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// ─── Helper Components ────────────────────────────────────────────────────────

function Section({ id, number, title, children }) {
    return (
        <section id={id} className="pt-12">
            <div className="border-t border-[#E8E0D4] pt-4 mb-4">
                {number && (
                    <div className="text-[11px] tracking-[2px] text-[#7A6E62] font-semibold mb-1 uppercase">
                        {number}
                    </div>
                )}
                <h2 className="text-[30px] font-serif text-[#1A1410] leading-tight">{title}</h2>
            </div>
            <div className="text-[17px] leading-[1.8] text-[#3D3328] space-y-4">{children}</div>
        </section>
    );
}

function Callout({ variant = "info", title, children }) {
    const map = {
        tip:  { wrap: "border-[#A0D4C8] bg-[#E0F2EE]",  title: "text-[#0A6E5C]", body: "text-[#0A6E5C]", icon: "💡" },
        warn: { wrap: "border-[#F5C8A0] bg-[#FEF4EA]",  title: "text-[#7A4A0A]", body: "text-[#8A5A1A]", icon: "⚠" },
        info: { wrap: "border-[#C0D8F5] bg-[#EAF2FD]",  title: "text-[#14407A]", body: "text-[#1A5090]", icon: "ℹ" },
    };
    const s = map[variant];
    return (
        <div className={`border p-5 my-7 rounded flex gap-4 items-start ${s.wrap}`}>
            <div className="text-[20px] mt-[2px] shrink-0">{s.icon}</div>
            <div className="flex-1 text-[14px] leading-[1.6]">
                <strong className={`block mb-1 text-[14px] font-semibold ${s.title}`}>{title}</strong>
                <p className={s.body}>{children}</p>
            </div>
        </div>
    );
}

function BrandCard({ rank, medal, name, location, profile, tenders, contractValue, almm, market, labels }) {
    const medalClass =
        medal === "Gold"   ? "bg-[#FDF3DC] border-[#EFD28D]" :
        medal === "Silver" ? "bg-[#F5F5F5] border-[#DEDEDE]" :
        medal === "Bronze" ? "bg-[#FBEADF] border-[#E8C3A5]" :
                             "bg-white border-[#E8E0D4]";
    const rankColor =
        medal === "Gold"   ? "text-[#C8900A]" :
        medal === "Silver" ? "text-[#8B8B8B]" :
        medal === "Bronze" ? "text-[#A6633F]" :
                             "text-[#C8900A]";
    return (
        <div className={`border rounded-[6px] p-5 ${medalClass}`}>
            <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                    <div className="text-[11px] uppercase tracking-[0.08em] text-[#7A6E62] font-semibold mb-2">
                        #{rank} {medal}
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#1A1410] leading-[1.35]">{name}</h3>
                    <p className="text-[13px] text-[#7A6E62] mt-1">{location}</p>
                </div>
                <div className={`font-serif text-[36px] leading-none ${rankColor}`}>{rank}</div>
            </div>
            <div className="grid grid-cols-1 gap-3 text-[13px]">
                <div>
                    <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">{labels.brandProfile}</div>
                    <p className="text-[#3D3328] m-0">{profile}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">{labels.govtProjects}</div>
                        <p className="text-[#1A1410] font-medium m-0">{tenders}</p>
                    </div>
                    <div>
                        <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">{labels.estValue}</div>
                        <p className="text-[#1A1410] font-medium m-0">{contractValue}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">{labels.almmStatus}</div>
                        <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#D3EDDF] text-[#1A6B3A]">
                            {almm}
                        </span>
                    </div>
                    <div>
                        <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">{labels.keyMarket}</div>
                        <p className="text-[#1A1410] font-medium m-0">{market}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CellBadge({ value }) {
    const styles =
        value === "Y" ? "bg-[#D3EDDF] text-[#1A6B3A]" :
        value === "N" ? "bg-[#FCE4E4] text-[#B83232]" :
                        "bg-[#FEF0D0] text-[#7A4A0A]";
    return (
        <span className={`inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] ${styles}`}>
            {value}
        </span>
    );
}

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

// ─── JSON-LD Schema (static, English) ─────────────────────────────────────────

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Top Solar Panel Brands Winning Government Tenders in India (2025)",
    description: "Discover which solar panel brands are winning NTPC, Coal India & PM-KUSUM tenders in India 2025.",
    image: "https://www.headsupb2b.com/topsolarpanelbrands.webp",
    author: { "@type": "Organization", name: "B2B Solar Research Team" },
    publisher: { "@type": "Organization", name: "Headsup B2B" },
    datePublished: "2025-04-10", dateModified: "2025-04-10",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.headsupb2b.com/research/top-solar-panel-brands" },
    keywords: "solar panel brands India 2025, ALMM solar manufacturers, government tender solar panels, Mono-PERC 550Wp India",
    articleSection: "Solar Industry Guide", wordCount: 5200,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TopSolarPanelBrandsIndia2025Page() {
    const { t } = useTranslation();

    const tocItems = t("topSolarPanelBrands.tocItems", { returnObjects: true }) || [];
    const topBrands = t("topSolarPanelBrands.topBrands", { returnObjects: true }) || [];
    const epcRows = t("topSolarPanelBrands.epcRows", { returnObjects: true }) || [];
    const matrixRows = t("topSolarPanelBrands.matrixRows", { returnObjects: true }) || [];
    const gujaratProjects = t("topSolarPanelBrands.gujaratProjects", { returnObjects: true }) || [];
    const rajasthanProjects = t("topSolarPanelBrands.rajasthanProjects", { returnObjects: true }) || [];
    const materials = t("topSolarPanelBrands.materials", { returnObjects: true }) || [];
    const almmChecklist = t("topSolarPanelBrands.almmChecklist", { returnObjects: true }) || [];
    const monoPercRows = t("topSolarPanelBrands.monoPercRows", { returnObjects: true }) || [];
    const stateRows = t("topSolarPanelBrands.stateRows", { returnObjects: true }) || [];
    const buyerCards = t("topSolarPanelBrands.buyerCards", { returnObjects: true }) || [];
    const faqs = t("topSolarPanelBrands.faqs", { returnObjects: true }) || [];
    const tags = t("topSolarPanelBrands.tags", { returnObjects: true }) || [];
    const heroMeta = t("topSolarPanelBrands.hero.meta", { returnObjects: true }) || [];
    const s1Stats = t("topSolarPanelBrands.s1.stats", { returnObjects: true }) || [];
    const winCriteria = t("topSolarPanelBrands.winCriteria", { returnObjects: true }) || [];
    const brandCardLabels = t("topSolarPanelBrands.brandCardLabels", { returnObjects: true }) || {};
    const epcTableHeaders = t("topSolarPanelBrands.epcTableHeaders", { returnObjects: true }) || [];
    const matrixHeaders = t("topSolarPanelBrands.matrixHeaders", { returnObjects: true }) || [];
    const gujaratHeaders = t("topSolarPanelBrands.gujaratHeaders", { returnObjects: true }) || [];
    const rajasthanHeaders = t("topSolarPanelBrands.rajasthanHeaders", { returnObjects: true }) || [];
    const materialsHeaders = t("topSolarPanelBrands.materialsHeaders", { returnObjects: true }) || [];
    const monoPercHeaders = t("topSolarPanelBrands.monoPercHeaders", { returnObjects: true }) || [];
    const stateHeaders = t("topSolarPanelBrands.stateHeaders", { returnObjects: true }) || [];

    const faqSchema = {
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: (faqs || []).map((f) => ({
            "@type": "Question", name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <>
            <Head>
                <title>{t("topSolarPanelBrands.meta.title")}</title>
                <meta name="description" content={t("topSolarPanelBrands.meta.description")} />
                <meta name="keywords" content={t("topSolarPanelBrands.meta.keywords")} />
                <link rel="canonical" href="https://www.headsupb2b.com/research/top-solar-panel-brands" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={t("topSolarPanelBrands.meta.ogTitle")} />
                <meta property="og:description" content={t("topSolarPanelBrands.meta.ogDescription")} />
                <meta property="og:url" content="https://www.headsupb2b.com/research/top-solar-panel-brands" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:image" content="https://www.headsupb2b.com/topsolarpanelbrands.webp" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("topSolarPanelBrands.meta.twitterTitle")} />
                <meta name="twitter:description" content={t("topSolarPanelBrands.meta.twitterDescription")} />
                <meta name="twitter:image" content="https://www.headsupb2b.com/topsolarpanelbrands.webp" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>

            {/* ── HERO ── */}
            <section className="relative overflow-hidden px-8 pt-20 pb-[72px] bg-headupb2b max-sm:px-4 mt-10">
                <div className="absolute inset-0 pointer-events-none" />
                <div className="relative max-w-[820px] mx-auto z-10">
                    <span
                        className="inline-block text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
                        style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                    >
                        {t("topSolarPanelBrands.hero.badge")}
                    </span>

                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[54px] leading-[1.15] text-white mb-6 max-w-[720px]">
                        {t("topSolarPanelBrands.hero.title")}
                    </h1>

                    <p className="text-[18px] text-[rgba(255,255,255,0.65)] max-w-[620px] leading-[1.65] mb-9">
                        {t("topSolarPanelBrands.hero.subtitle")}
                    </p>

                    <div className="flex flex-wrap items-center gap-7 text-[13px]">
                        {heroMeta.map((label) => (
                            <span key={label} className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                                <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                                <strong className="text-[rgba(255,255,255,0.75)] font-medium">{label}</strong>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BODY ── */}
            <main className="max-w-[820px] mx-auto px-8 pb-[100px] bg-[#FDFAF6] max-sm:px-4">

                {/* TOC */}
                <nav className="border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-8 py-7 mt-[52px] mb-[56px] rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7A6E62] mb-4">{t("topSolarPanelBrands.tocLabel")}</div>
                    <ol className="list-none grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[14px]">
                        {tocItems.map((item, index) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                    <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* ── §01 ── */}
                <Section id="why-tenders" number="01" title={t("topSolarPanelBrands.s1.title")}>
                    <p {...HTML(t("topSolarPanelBrands.s1.p1"))} />
                    <p {...HTML(t("topSolarPanelBrands.s1.p2"))} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-2">
                        {s1Stats.map((stat, i) => (
                            <div key={i} className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                                <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                    <span className="text-[#C8900A]">{stat.value}</span>
                                    {stat.unit && <span className="text-[20px] ml-1">{stat.unit}</span>}
                                </div>
                                <div className="text-[13px] text-[#7A6E62] leading-[1.4]">{stat.desc}</div>
                            </div>
                        ))}
                    </div>

                    <blockquote className="border-l-[3px] border-[#C8900A] my-9 px-7 py-5 bg-[#FDF3DC] rounded-r-md">
                        <p className="font-serif text-[22px] leading-[1.45] text-[#1A1410] italic m-0">
                            {t("topSolarPanelBrands.s1.quote")}
                        </p>
                        <cite className="block mt-3 text-[13px] text-[#7A6E62] not-italic">
                            {t("topSolarPanelBrands.s1.citation")}
                        </cite>
                    </blockquote>
                </Section>

                {/* ── §02 ── */}
                <Section id="win-criteria" number="02" title={t("topSolarPanelBrands.s2.title")}>
                    <p>{t("topSolarPanelBrands.s2.p1")}</p>

                    <div className="grid grid-cols-1 gap-[1px] mt-8 mb-3 bg-[#E8E0D4] border border-[#E8E0D4] rounded-[6px] overflow-hidden">
                        {winCriteria.map((item) => (
                            <div key={item.num} className={`bg-white p-7 relative border-b-[3px] ${item.color}`}>
                                <span className="block font-serif text-[52px] text-[#FDF3DC] leading-none mb-1">{item.num}</span>
                                <h4 className="text-[17px] font-semibold text-[#1A1410] mb-2.5">{item.title}</h4>
                                <p className="text-[13.5px] text-[#7A6E62] leading-[1.6] m-0">{item.text}</p>
                                <p className="text-[12px] text-[#C8900A] font-medium mt-2 m-0">{t("topSolarPanelBrands.s2.noteLabel")}: {item.note}</p>
                            </div>
                        ))}
                    </div>

                    <Callout variant="tip" title={t("topSolarPanelBrands.s2.calloutTitle")}>
                        {t("topSolarPanelBrands.s2.calloutBody")}
                    </Callout>
                </Section>

                {/* ── §03 ── */}
                <Section id="ranking" number="03" title={t("topSolarPanelBrands.s3.title")}>
                    <p>{t("topSolarPanelBrands.s3.p1")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        {topBrands.map((brand) => <BrandCard key={brand.rank} {...brand} labels={brandCardLabels} />)}
                    </div>
                    <Callout variant="warn" title={t("topSolarPanelBrands.s3.calloutTitle")}>
                        {t("topSolarPanelBrands.s3.calloutBody")}
                    </Callout>
                </Section>

                {/* ── §04 ── */}
                <Section id="epc-leaders" number="04" title={t("topSolarPanelBrands.s4.title")}>
                    <p>{t("topSolarPanelBrands.s4.p1")}</p>
                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {epcTableHeaders.map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {epcRows.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row.company}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row.state}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#C8900A] font-semibold">{row.value}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row.authority}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row.scope}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Callout variant="info" title={t("topSolarPanelBrands.s4.calloutTitle")}>
                        {t("topSolarPanelBrands.s4.calloutBody")}
                    </Callout>
                </Section>

                {/* ── §05 ── */}
                <Section id="matrix" number="05" title={t("topSolarPanelBrands.s5.title")}>
                    <p>{t("topSolarPanelBrands.s5.p1")}</p>
                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {matrixHeaders.map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {matrixRows.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[0]}</td>
                                        {row.slice(1).map((cell, ci) => (
                                            <td key={ci} className="px-4 py-3 border-b border-[#E8E0D4]"><CellBadge value={cell} /></td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* ── §06 ── */}
                <Section id="tender-data" number="06" title={t("topSolarPanelBrands.s6.title")}>
                    <p>{t("topSolarPanelBrands.s6.p1")}</p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">{t("topSolarPanelBrands.s6.gujaratHeading")}</h3>
                    <div className="overflow-x-auto mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {gujaratHeaders.map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {gujaratProjects.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[0]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[1]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[2]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#C8900A] font-semibold">{row[3]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[4]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">{t("topSolarPanelBrands.s6.rajasthanHeading")}</h3>
                    <div className="overflow-x-auto mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {rajasthanHeaders.map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rajasthanProjects.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[0]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[1]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[2]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4]">
                                            <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#D3EDDF] text-[#1A6B3A]">{row[3]}</span>
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[4]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">{t("topSolarPanelBrands.s6.materialsHeading")}</h3>
                    <p className="text-[15px] text-[#3D3328]">{t("topSolarPanelBrands.s6.materialsIntro")}</p>
                    <div className="overflow-x-auto mt-4 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {materialsHeaders.map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {materials.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[0]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[1]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[2]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4]">
                                            <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#D3EDDF] text-[#1A6B3A]">{row[3]}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* ── §07 ── */}
                <Section id="almm" number="07" title={t("topSolarPanelBrands.s7.title")}>
                    <p>{t("topSolarPanelBrands.s7.p1")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 mb-2">
                        {almmChecklist.map((item, idx) => (
                            <div key={idx} className={`border rounded-[6px] p-5 ${item.icon === "✅" ? "bg-white border-[#E8E0D4]" : "bg-[#FAEAEA] border-[#F5C8C8]"}`}>
                                <div className="text-[20px] mb-2">{item.icon}</div>
                                <div className="text-[14px] font-semibold text-[#1A1410] mb-1">{item.title}</div>
                                <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <Callout variant="warn" title={t("topSolarPanelBrands.s7.calloutTitle")}>
                        {t("topSolarPanelBrands.s7.calloutBody")}
                    </Callout>
                </Section>

                {/* ── §08 ── */}
                <Section id="mono-perc" number="08" title={t("topSolarPanelBrands.s8.title")}>
                    <p>{t("topSolarPanelBrands.s8.p1")}</p>
                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {monoPercHeaders.map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {monoPercRows.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[0]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#1A6B3A] font-medium">{row[1]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[2]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <blockquote className="border-l-[3px] border-[#C8900A] my-9 px-7 py-5 bg-[#FDF3DC] rounded-r-md">
                        <p className="font-serif text-[20px] leading-[1.45] text-[#1A1410] italic m-0">
                            {t("topSolarPanelBrands.s8.quote")}
                        </p>
                    </blockquote>
                </Section>

                {/* ── §09 ── */}
                <Section id="state-performance" number="09" title={t("topSolarPanelBrands.s9.title")}>
                    <p>{t("topSolarPanelBrands.s9.p1")}</p>
                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {stateHeaders.map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {stateRows.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        {row.map((cell, ci) => (
                                            <td key={ci} className={`px-4 py-3 border-b border-[#E8E0D4] ${ci === 0 ? "font-medium text-[#1A1410]" : "text-[#3D3328]"}`}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* ── §10 ── */}
                <Section id="buyer-playbook" number="10" title={t("topSolarPanelBrands.s10.title")}>
                    <p>{t("topSolarPanelBrands.s10.p1")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 mb-2">
                        {buyerCards.map((item) => (
                            <div key={item.title} className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">{t("topSolarPanelBrands.s10.useCaseLabel")}</div>
                                <div className="text-[14px] font-semibold text-[#1A1410] mb-1">{item.title}</div>
                                <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* ── §11 ── */}
                <Section id="faq" number="11" title={t("topSolarPanelBrands.s11.title")}>
                    <p>{t("topSolarPanelBrands.s11.p1")}</p>
                    <div className="space-y-4 mt-6">
                        {faqs.map((item, idx) => (
                            <div key={idx} className="border border-[#E8E0D4] rounded-[6px] bg-white overflow-hidden">
                                <div className="px-6 py-4 border-b border-[#E8E0D4]">
                                    <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#C8900A] mb-2">
                                        {t("topSolarPanelBrands.s11.questionLabel")} {String(idx + 1).padStart(2, "0")}
                                    </div>
                                    <h3 className="text-[17px] font-semibold text-[#1A1410] leading-[1.45]">{item.q}</h3>
                                </div>
                                <div className="px-6 py-4">
                                    <p className="text-[14px] text-[#3D3328] leading-[1.7] m-0">{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* ── CTA ── */}
                <div className="mt-16 border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-8 py-8 rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8900A] mb-3">{t("topSolarPanelBrands.cta.kicker")}</div>
                    <h3 className="font-serif text-[24px] text-[#1A1410] mb-3 leading-tight">
                        {t("topSolarPanelBrands.cta.title")}
                    </h3>
                    <p className="text-[15px] text-[#7A6E62] leading-[1.6] mb-6 max-w-[520px]">
                        {t("topSolarPanelBrands.cta.body")}
                    </p>
                    <Link
                        href="/research"
                        className="inline-block bg-[#C8900A] text-white text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3 rounded-[2px] hover:bg-[#A07008] transition-colors"
                    >
                        {t("topSolarPanelBrands.cta.button")}
                    </Link>
                    <div className="flex flex-wrap gap-2 mt-7">
                        {tags.map((tag) => (
                            <span key={tag} className="inline-block text-[11px] font-medium text-[#7A6E62] border border-[#E8E0D4] px-3 py-1 rounded-full bg-[#FDFAF6]">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-[12px] text-[#7A6E62] mt-5">
                        {t("topSolarPanelBrands.cta.footer")}
                    </p>
                </div>

            </main>
        </>
    );
}
