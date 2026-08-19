"use client";

import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

function Section({ id, number, title, children }) {
    return (
        <section id={id} className="pt-12">
            <div className="border-t border-[#E8E0D4] pt-4 mb-4">
                {number && (
                    <div className="text-[11px] tracking-[2px] text-[#7A6E62] font-semibold mb-1 uppercase">
                        {number}
                    </div>
                )}
                <h2 className="text-[30px] font-serif text-[#1A1410] leading-tight">
                    {title}
                </h2>
            </div>
            <div className="text-[17px] leading-[1.8] text-[#3D3328] space-y-4">
                {children}
            </div>
        </section>
    );
}

function Callout({ variant, title, children }) {
    const map = {
        tip: {
            wrap: "border-[#A0D4C8] bg-[#E0F2EE]",
            title: "text-[#0A6E5C]",
            body: "text-[#0A6E5C]",
        },
        warn: {
            wrap: "border-[#F5C8A0] bg-[#FEF4EA]",
            title: "text-[#7A4A0A]",
            body: "text-[#8A5A1A]",
        },
        info: {
            wrap: "border-[#C0D8F5] bg-[#EAF2FD]",
            title: "text-[#14407A]",
            body: "text-[#1A5090]",
        },
    };

    const s = map[variant];

    return (
        <div className={`border p-5 my-7 rounded flex gap-4 items-start ${s.wrap}`}>
            <div className="text-[20px] mt-[2px] shrink-0">
                {variant === "tip" ? "💡" : variant === "warn" ? "⚠" : "ℹ"}
            </div>
            <div className="flex-1 text-[14px] leading-[1.6]">
                <strong className={`block mb-1 text-[14px] font-semibold ${s.title}`}>{title}</strong>
                <div className={s.body}>{children}</div>
            </div>
        </div>
    );
}

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-[22px] font-serif font-semibold text-[#1A1410]">{rating}</span>
            <span className="text-[#C8900A] text-[15px] tracking-[1px]">★★★★</span>
        </div>
    );
}

function Tag({ children }) {
    return (
        <span className="inline-block text-[11px] font-semibold px-2.5 py-[4px] rounded-[3px] tracking-[0.04em] bg-[#FDF3DC] text-[#7A4A0A] border border-[#F0E2C0]">
            {children}
        </span>
    );
}

function StatBlock({ label, value }) {
    return (
        <div className="bg-[#FDFAF6] border border-[#E8E0D4] rounded-[4px] px-3 py-2.5">
            <div className="text-[10px] uppercase tracking-[0.08em] text-[#7A6E62] font-semibold mb-0.5">
                {label}
            </div>
            <div className="text-[14px] font-semibold text-[#1A1410] leading-tight">
                {value}
            </div>
        </div>
    );
}

function CompanyCard({
    rank,
    name,
    tagline,
    rating,
    tags,
    description,
    stats,
    strengths,
    considerations,
    quote,
    quoteAuthor,
    strengthsLabel,
    considerationsLabel,
}) {
    return (
        <div className="bg-white border border-[#E8E0D4] rounded-[8px] mb-7 overflow-hidden">
            {/* Header */}
            <div className="px-7 pt-6 pb-5 border-b border-[#E8E0D4] bg-gradient-to-br from-[#FDFAF6] to-white">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex items-baseline gap-3">
                        <span className="font-serif text-[34px] leading-none text-[#C8900A] font-semibold">
                            {rank}
                        </span>
                        <div>
                            <h3 className="text-[22px] font-serif font-semibold text-[#1A1410] leading-tight">
                                {name}
                            </h3>
                            <p className="text-[13.5px] text-[#7A6E62] mt-1 leading-snug">
                                {tagline}
                            </p>
                        </div>
                    </div>
                    <StarRating rating={rating} />
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="px-7 py-5 text-[15px] leading-[1.7] text-[#3D3328] border-b border-[#E8E0D4]">
                {description}
            </div>

            {/* Stats */}
            <div className="px-7 py-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 border-b border-[#E8E0D4] bg-[#FDFAF6]">
                {stats.map((s, i) => (
                    <StatBlock key={i} label={s.label} value={s.value} />
                ))}
            </div>

            {/* Strengths & Considerations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#E8E0D4]">
                <div className="bg-white p-6">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#0A6E5C] mb-3">
                        {strengthsLabel}
                    </div>
                    <ul className="list-none space-y-2">
                        {strengths.map((s, i) => (
                            <li key={i} className="flex gap-2 text-[14px] text-[#3D3328] leading-[1.55]">
                                <span className="text-[#0A6E5C] font-bold shrink-0">✓</span>
                                <span>{s}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-6">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7A4A0A] mb-3">
                        {considerationsLabel}
                    </div>
                    <ul className="list-none space-y-2">
                        {considerations.map((c, i) => (
                            <li key={i} className="flex gap-2 text-[14px] text-[#3D3328] leading-[1.55]">
                                <span className="text-[#C8900A] font-bold shrink-0">▲</span>
                                <span>{c}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Quote */}
            {quote && (
                <div className="px-7 py-5 bg-[#FDF3DC] border-t border-[#E8E0D4]">
                    <p className="text-[14.5px] italic text-[#3D3328] leading-[1.6] m-0">
                        “{quote}”
                    </p>
                    <p className="text-[12px] text-[#7A6E62] mt-2 m-0">— {quoteAuthor}</p>
                </div>
            )}
        </div>
    );
}

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

export default function TopSolarEPCCompaniesPage() {
    const { t } = useTranslation();
    const [showQuoteForm, setShowQuoteForm] = useState(false);

    const companies = t("topSolarEpc.companies", { returnObjects: true }) || [];
    const comparisonData = t("topSolarEpc.comparisonData", { returnObjects: true }) || [];
    const checklist = t("topSolarEpc.checklist", { returnObjects: true }) || [];
    const tocItems = t("topSolarEpc.toc", { returnObjects: true }) || [];
    const comparisonHeaders = t("topSolarEpc.comparisonHeaders", { returnObjects: true }) || [];
    const contextStats = t("topSolarEpc.contextStats", { returnObjects: true }) || [];
    const faqs = t("topSolarEpc.faqs", { returnObjects: true }) || [];
    const finalCtaBadges = t("topSolarEpc.finalCta.badges", { returnObjects: true }) || [];
    const footerTags = t("topSolarEpc.footerTags", { returnObjects: true }) || [];

    return (
        <>
            <Head>
                <title>{t("topSolarEpc.meta.title")}</title>
                <meta
                    name="description"
                    content={t("topSolarEpc.meta.description")}
                />
                <meta
                    name="keywords"
                    content={t("topSolarEpc.meta.keywords")}
                />
                <link rel="canonical" href="https://www.headsupb2b.com/research/top-solar-epc-companies-india-industrial-projects" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={t("topSolarEpc.meta.title")} />
                <meta
                    property="og:description"
                    content={t("topSolarEpc.meta.description")}
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/top-solar-epc-companies-india-industrial-projects" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:image" content="https://www.headsupb2b.com/Top-Solar-EPC-Companies.webp" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("topSolarEpc.meta.title")} />
                <meta
                    name="twitter:description"
                    content={t("topSolarEpc.meta.description")}
                />
                <meta name="twitter:image" content="https://www.headsupb2b.com/Top-Solar-EPC-Companies.webp" />
            </Head>

            {/* HERO */}
            <section className="relative overflow-hidden px-8 pt-20 pb-[72px] bg-headupb2b max-sm:px-4 mt-10">
                <div className="absolute inset-0 pointer-events-none" />
                <div className="relative max-w-[820px] mx-auto z-10">
                    <span
                        className="inline-block text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
                        style={{
                            background: "#00d4f5",
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: "0 4px 15px rgba(0,212,245,0.35)",
                        }}
                    >
                        {t("topSolarEpc.hero.badge")}
                    </span>
                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[54px] leading-[1.15] text-white mb-6 max-w-[760px]">
                        {t("topSolarEpc.hero.title")}
                    </h1>
                    <p className="text-[18px] text-[rgba(255,255,255,0.65)] max-w-[640px] leading-[1.65] mb-4">
                        {t("topSolarEpc.hero.subtitle1")}
                    </p>
                    <p className="text-[15px] text-[rgba(255,255,255,0.55)] max-w-[640px] leading-[1.65] mb-9">
                        {t("topSolarEpc.hero.subtitle2")}
                    </p>
                    <div className="flex flex-wrap items-center gap-7 text-[13px]">
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            {t("topSolarEpc.hero.updatedLabel")}{" "}
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">{t("topSolarEpc.hero.updatedValue")}</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">{t("topSolarEpc.hero.readTime")}</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">
                                {t("topSolarEpc.hero.focus")}
                            </strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">
                                {t("topSolarEpc.hero.readers")}
                            </strong>
                        </span>
                    </div>
                </div>
            </section>

            {/* PAGE BODY */}
            <main className="max-w-[820px] mx-auto px-8 pb-[100px] bg-[#FDFAF6] max-sm:px-4">
                {/* TOP CTA */}
                <div className="border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-7 py-6 mt-[52px] mb-[40px] rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8900A] mb-2">
                        {t("topSolarEpc.topCta.label")}
                    </div>
                    <h3 className="font-serif text-[22px] text-[#1A1410] mb-2 leading-tight">
                        {t("topSolarEpc.topCta.title")}
                    </h3>
                    <p className="text-[14.5px] text-[#7A6E62] leading-[1.6] mb-4">
                        {t("topSolarEpc.topCta.subtitle")}
                    </p>
                    <button
                        type="button"
                        onClick={() => setShowQuoteForm(true)}
                        style={{
                            background: "#00d4f5",
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: "0 4px 15px rgba(0,212,245,0.35)",
                        }}
                        className="inline-block text-white text-[13.5px] font-semibold px-6 py-2.5 rounded-[4px] tracking-[0.03em] cursor-pointer"
                    >
                        {t("topSolarEpc.topCta.button")}
                    </button>
                </div>

                {/* TOC */}
                <nav className="border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-8 py-7 mb-[56px] rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7A6E62] mb-4">
                        {t("topSolarEpc.tocLabel")}
                    </div>
                    <ol className="list-none grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[14px]">
                        {tocItems.map((item, i) => (
                            <li key={i}>
                                <a
                                    href={`#${item.id}`}
                                    className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]"
                                >
                                    <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* SECTION 1 — CONTEXT */}
                <Section
                    id="context"
                    number={t("topSolarEpc.section1.number")}
                    title={t("topSolarEpc.section1.title")}
                >
                    <p>{t("topSolarEpc.section1.p1")}</p>
                    <p {...HTML(t("topSolarEpc.section1.p2"))} />

                    <div className="grid grid-cols-3 gap-4 mt-8 mb-2 max-[580px]:grid-cols-2">
                        {contextStats.map((stat, i) => (
                            <div
                                key={i}
                                className={`bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4${i === 2 ? " max-[580px]:col-span-2 max-[580px]:max-w-[260px]" : ""}`}
                            >
                                <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                    <span className="text-[#C8900A]">{stat.value}</span>
                                    {stat.suffix ? ` ${stat.suffix}` : ""}
                                </div>
                                <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* SECTION 2 — RANKED LIST */}
                <Section
                    id="ranked-list"
                    number={t("topSolarEpc.section2.number")}
                    title={t("topSolarEpc.section2.title")}
                >
                    <p>{t("topSolarEpc.section2.intro")}</p>

                    <div className="mt-10">
                        {companies.map((c) => (
                            <CompanyCard
                                key={c.rank}
                                {...c}
                                strengthsLabel={t("topSolarEpc.strengthsLabel")}
                                considerationsLabel={t("topSolarEpc.considerationsLabel")}
                            />
                        ))}
                    </div>
                </Section>

                {/* SECTION 3 — COMPARISON TABLE */}
                <Section
                    id="comparison"
                    number={t("topSolarEpc.section3.number")}
                    title={t("topSolarEpc.section3.title")}
                >
                    <p>{t("topSolarEpc.section3.intro")}</p>

                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14.5px]">
                            <thead>
                                <tr>
                                    {comparisonHeaders.map((h) => (
                                        <th
                                            key={h}
                                            className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                            {row[0]}
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                            <span className="inline-flex items-center gap-1">
                                                <span className="font-semibold">{row[1]}</span>
                                                <span className="text-[#C8900A] text-[11px]">★</span>
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                            {row[2]}
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                            {row[3]}
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                            {row[4]}
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                            {row[5]}
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                            {row[6]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Callout variant="tip" title={t("topSolarEpc.tipCallout.title")}>
                        {t("topSolarEpc.tipCallout.body")}
                    </Callout>
                </Section>

                {/* SECTION 4 — CHECKLIST */}
                <Section
                    id="checklist"
                    number={t("topSolarEpc.section4.number")}
                    title={t("topSolarEpc.section4.title")}
                >
                    <p>{t("topSolarEpc.section4.intro")}</p>

                    <ul className="list-none mt-7 mb-7">
                        {checklist.map((item, i) => (
                            <li
                                key={i}
                                className="pl-9 py-3 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative leading-[1.6] last:border-b-0"
                            >
                                <span className="absolute left-0 top-[14px] w-[18px] h-[18px] border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC] flex items-center justify-center">
                                    <span className="text-[11px] font-bold text-[#C8900A] leading-none">
                                        ✓
                                    </span>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-headupb2b rounded-[8px] px-8 py-7 mt-10 text-center relative overflow-hidden">
                        <h3 className="font-serif text-[22px] text-white mb-2">
                            {t("topSolarEpc.midCta.title")}
                        </h3>
                        <p className="text-[14.5px] text-[rgba(255,255,255,0.65)] max-w-[480px] mx-auto mb-5">
                            {t("topSolarEpc.midCta.subtitle")}
                        </p>
                        <button
                            type="button"
                            onClick={() => setShowQuoteForm(true)}
                            style={{
                                background: "#00d4f5",
                                fontFamily: "'DM Sans', sans-serif",
                                boxShadow: "0 4px 15px rgba(0,212,245,0.35)",
                            }}
                            className="inline-block text-white text-[13.5px] font-semibold px-7 py-3 rounded-[4px] tracking-[0.03em] cursor-pointer"
                        >
                            {t("topSolarEpc.midCta.button")}
                        </button>
                    </div>
                </Section>

                {/* SECTION 5 — FAQ */}
                <Section
                    id="faq"
                    number={t("topSolarEpc.section5.number")}
                    title={t("topSolarEpc.section5.title")}
                >
                    <p>{t("topSolarEpc.section5.intro")}</p>

                    <div className="mt-8 space-y-5">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-[#E8E0D4] rounded-[6px] p-6">
                                <h4 className="text-[16px] font-semibold text-[#1A1410] mb-3 leading-tight">
                                    {faq.q}
                                </h4>
                                <p className="text-[15px] text-[#3D3328] leading-[1.7] m-0">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* FINAL CTA */}
                <div
                    id="get-quotes"
                    className="bg-headupb2b rounded-[8px] px-10 py-12 mt-16 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-headupb2b" />
                    <h2 className="font-serif text-[28px] text-white mb-3">
                        {t("topSolarEpc.finalCta.title")}
                    </h2>
                    <p className="text-[16px] text-[rgba(255,255,255,0.7)] max-w-[520px] mx-auto mb-2">
                        {t("topSolarEpc.finalCta.subtitle1")}
                    </p>
                    <p className="text-[16px] text-[rgba(255,255,255,0.6)] max-w-[520px] mx-auto mb-7">
                        {t("topSolarEpc.finalCta.subtitle2")}
                    </p>
                    <button
                        type="button"
                        onClick={() => setShowQuoteForm(true)}
                        style={{
                            background: "#00d4f5",
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: "0 4px 15px rgba(0,212,245,0.35)",
                        }}
                        className="inline-block text-white text-[14px] font-semibold px-8 py-3.5 rounded-[4px] tracking-[0.03em] cursor-pointer"
                    >
                        {t("topSolarEpc.finalCta.button")}
                    </button>
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-6 text-[12px] text-[rgba(255,255,255,0.55)]">
                        {finalCtaBadges.map((badge, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <span className="text-[#00d4f5]">✓</span> {badge}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-16 pt-7 border-t border-[#E8E0D4] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[13px] text-[#7A6E62]">
                        {t("topSolarEpc.copyright")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {footerTags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] font-semibold uppercase tracking-[0.07em] px-2.5 py-1 border border-[#E8E0D4] rounded-[3px] text-[#7A6E62]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </main>

            {showQuoteForm && (
                <GetInTouch
                    onClose={() => setShowQuoteForm(false)}
                    title={t("topSolarEpc.formTitle")}
                />
            )}
        </>
    );
}
