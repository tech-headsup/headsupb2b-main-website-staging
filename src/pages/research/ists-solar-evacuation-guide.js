"use client";

import Link from "next/link";

import Head from "next/head";
import { useTranslation } from "react-i18next";

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

function Section({ id, number, title, children }) {
    return (
        <section id={id} className="pt-12">
            <div className="border-t border-gray-300 pt-4 mb-4">
                <div className="text-[12px] tracking-[2px] text-gray-500 font-semibold mb-1">
                    {number}
                </div>
                <h2 className="text-[28px] font-bold text-black leading-tight">
                    {title}
                </h2>
            </div>
            <div className="text-[17px] leading-[1.8] text-gray-800 space-y-4">
                {children}
            </div>
        </section>
    );
}

function Callout({ title, children, color = "gray" }) {
    const styles = {
        gray:   { wrap: "bg-gray-50 border-gray-400",       title: "text-gray-800" },
        blue:   { wrap: "bg-blue-50 border-blue-500",       title: "text-blue-800" },
        green:  { wrap: "bg-green-50 border-green-500",     title: "text-green-800" },
        red:    { wrap: "bg-red-50 border-red-500",         title: "text-red-800" },
        yellow: { wrap: "bg-yellow-50 border-yellow-500",   title: "text-yellow-800" },
        orange: { wrap: "bg-orange-50 border-orange-500",   title: "text-orange-800" },
        purple: { wrap: "bg-purple-50 border-purple-500",   title: "text-purple-800" },
    };

    const s = styles[color] ?? styles.gray;

    return (
        <div className={`border-l-4 p-5 my-6 ${s.wrap}`}>
            <div className={`font-semibold mb-2 ${s.title}`}>{title}</div>
            <div className="text-gray-700">{children}</div>
        </div>
    );
}


function StageCard({ number, title, subtitle, children }) {
    return (
        <div className="border border-gray-200 rounded-lg p-6 my-4 bg-white shadow-sm">
            <div className="flex items-start gap-4">
                <div className="text-[32px] font-bold text-gray-300 leading-none w-10 shrink-0">
                    {number}
                </div>
                <div className="flex-1">
                    <div className="font-bold text-[18px] text-black mb-0.5">{title}</div>
                    <div className="text-[13px] text-gray-500 font-medium mb-3">{subtitle}</div>
                    <div className="text-[15px] leading-[1.75] text-gray-700">{children}</div>
                </div>
            </div>
        </div>
    );
}

function BottleneckCard({ state, severity, severityLabel, stats, children }) {
    const colorMap = {
        CRITICAL: "bg-red-100 text-red-700 border-red-300",
        HIGH: "bg-orange-100 text-orange-700 border-orange-300",
        MEDIUM: "bg-yellow-100 text-yellow-700 border-yellow-300",
    };
    return (
        <div className="border border-gray-200 rounded-lg p-5 my-4">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-[18px] font-bold">{state}</span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${colorMap[severity]}`}>
                    {severityLabel || severity}
                </span>
            </div>
            {stats && (
                <div className="text-[13px] text-gray-500 mb-3 space-y-0.5">
                    {stats.map((s, i) => <div key={i}>{s}</div>)}
                </div>
            )}
            <div className="text-[15px] text-gray-700 leading-[1.7]">{children}</div>
        </div>
    );
}

export default function ISTSGuidePage() {
    const { t, i18n } = useTranslation();
    const isHi = i18n.resolvedLanguage === "hi";

    const HERO_STATS = t("istsGuide.heroStats", { returnObjects: true }) || [];
    const TOC = t("istsGuide.toc", { returnObjects: true }) || [];
    const STAGES = t("istsGuide.stages", { returnObjects: true }) || [];
    const ECOSYSTEM = t("istsGuide.ecosystem", { returnObjects: true }) || [];
    const BOTTLENECKS = t("istsGuide.bottlenecks", { returnObjects: true }) || [];
    const DATA_ROWS = t("istsGuide.dataRows", { returnObjects: true }) || [];
    const WAIVER_ROWS = t("istsGuide.waiverRows", { returnObjects: true }) || [];
    const PLAYERS_ROWS = t("istsGuide.playersRows", { returnObjects: true }) || [];
    const FUTURE_ITEMS = t("istsGuide.futureItems", { returnObjects: true }) || [];
    const GLOSSARY_ROWS = t("istsGuide.glossaryRows", { returnObjects: true }) || [];
    const FAQS = t("istsGuide.faqs", { returnObjects: true }) || [];

    return (
        <>
            <Head>
                {/* ── Core ── */}
                <title>{t("istsGuide.meta.title")}</title>
                <meta
                    name="description"
                    content={t("istsGuide.meta.description")}
                />
                <meta
                    name="keywords"
                    content={t("istsGuide.meta.keywords")}
                />

                {/* ── Canonical ── */}
                <link rel="canonical" href="https://www.headsupb2b.com/research/ists-solar-evacuation-guide" />

                {/* ── Robots ── */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

                {/* ── Open Graph ── */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={t("istsGuide.meta.ogTitle")} />
                <meta
                    property="og:description"
                    content={t("istsGuide.meta.ogDescription")}
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/ists-solar-evacuation-guide" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image" content="https://www.headsupb2b.com/ists-solar-evacuation-guide.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={t("istsGuide.meta.ogImageAlt")} />
                <meta property="article:published_time" content="2026-03-01T00:00:00.000Z" />
                <meta property="article:modified_time" content="2026-03-23T00:00:00.000Z" />
                <meta property="article:author" content="Headsup B2B Research Desk" />

                {/* ── Twitter / X ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("istsGuide.meta.twitterTitle")} />
                <meta
                    name="twitter:description"
                    content={t("istsGuide.meta.twitterDescription")}
                />
                <meta name="twitter:site" content="@headsupb2b" />
                <meta name="twitter:creator" content="@headsupb2b" />
                <meta name="twitter:image" content="https://www.headsupb2b.com/ists-solar-evacuation-guide.jpg" />

                {/* ── JSON-LD ── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://www.headsupb2b.com",
                            "@type": "Article",
                            headline: "ISTS Explained: How India Builds Transmission Lines to Evacuate Solar Power",
                            description: "Explore India's Inter-State Transmission System (ISTS) in this complete guide.",
                            author: {
                                "@type": "Organization",
                                name: "Headsup B2B Research Desk",
                                url: "https://www.headsupb2b.com",
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Headsup B2B Pvt. Ltd.",
                                url: "https://www.headsupb2b.com",
                            },
                            datePublished: "2026-03-01",
                            dateModified: "2026-03-23",
                            mainEntityOfPage: {
                                "@type": "WebPage",
                                "@id": "https://www.headsupb2b.com/research/ists-solar-evacuation-guide",
                            },
                        }),
                    }}
                />
            </Head>
            {/* HERO */}
            <section className="relative overflow-hidden px-8 pt-16 pb-[52px] bg-headupb2b max-sm:px-4 mt-10">
    {/* Background glows */}
    <div
        className="absolute -top-[120px] -right-[80px] w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(94,63,153,0.3) 0%,transparent 65%)" }}
    />
    <div
        className="absolute -bottom-[80px] -left-[60px] w-[450px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(196,181,253,0.1) 0%,transparent 65%)" }}
    />

    <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Badges */}
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
            <span
                className="font-mono text-[10px] tracking-[1px] uppercase px-3 py-1 rounded-full font-medium text-[#c4b5fd]"
                style={{ background: "rgba(196,181,253,0.15)", border: "1px solid rgba(196,181,253,0.3)" }}
            >
                {t("istsGuide.hero.badge")}
            </span>
            <span
                className="font-mono text-[10px] tracking-[0.5px] px-2.5 py-1 rounded-full flex items-center gap-1 text-[#34d399]"
                style={{ background: "rgba(13,110,74,0.15)", border: "1px solid rgba(13,110,74,0.3)" }}
            >
                <span className="w-[5px] h-[5px] rounded-full inline-block" style={{ background: "#34d399" }} />
                {t("istsGuide.hero.date")}
            </span>
        </div>

        {/* Heading */}
        <h1 className={`font-display font-extrabold tracking-[-1px] text-[#f5f0e8] max-w-[780px] mb-[18px] text-[46px] max-sm:text-[30px] ${isHi ? "leading-[1.5]" : "leading-[1.12]"}`}>
            {t("istsGuide.hero.titleStart")}{" "}
            <em
                style={{
                    background: "linear-gradient(90deg,#c4b5fd,#e9d5ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {t("istsGuide.hero.titleEmphasis")}
            </em>
            <br />{t("istsGuide.hero.titleEnd")}
        </h1>

        {/* Description */}
        <p className="text-[17px] text-white italic max-w-[640px] leading-[1.65] mb-8">
            {t("istsGuide.hero.description")}
        </p>

        {/* Stats */}
        <div className="flex gap-8 flex-wrap pt-7 border-t border-[rgba(245,240,232,0.12)] max-sm:gap-5">
            {HERO_STATS.map(([n, l], i) => (
                <div key={i} className="flex items-center gap-8">
                    {i > 0 && (
                        <div className="w-px self-stretch" style={{ background: "rgba(245,240,232,0.1)" }} />
                    )}
                    <div className="flex flex-col gap-[3px]">
                        <div className="font-mono text-2xl font-semibold text-white tracking-[-1px]">{n}</div>
                        <div className={`text-[11px] text-white leading-[1.6] ${isHi ? "normal-case" : "tracking-[0.5px] uppercase"}`}>{l}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

{/* Meta Bar — same as ALMM */}
<div className="bg-white border-b border-[#e5e0d5] px-8 py-3.5">
    <div className="max-w-[1100px] mx-auto flex items-center gap-6 font-mono text-[11px] text-[#7a7060] flex-wrap">
        <div className="flex items-center gap-1.5"><span>✍</span> {t("istsGuide.metaBar.author")}</div>
        <div className="flex items-center gap-1.5"><span>📅</span> {t("istsGuide.metaBar.published")}</div>
        <div className="flex items-center gap-1.5"><span>🔄</span> {t("istsGuide.metaBar.updated")}</div>
        <div className="flex items-center gap-1.5"><span>🏷</span> {t("istsGuide.metaBar.tags")}</div>
        <div className="ml-auto bg-[#f4f1ea] px-2.5 py-1 rounded text-[#c8860a]">⏱ {t("istsGuide.metaBar.readTime")}</div>
    </div>
</div>



            {/* BODY */}
            <div className="max-w-[1100px] mx-auto px-8 max-sm:px-4 bg-gray-100 p-1">
                {/* MAIN CONTENT */}
                <main className="max-w-[800px] mx-auto font-serif w-full">
                    <div
                        className="bg-[#fffbf0] rounded-lg px-5 py-5 mt-5"
                        style={{
                            border: "1px solid rgba(200,134,10,0.2)",
                            borderLeft: "4px solid #c8860a",
                        }}
                    >
                        {/* Heading */}
                        <div className="text-[13px] font-bold text-[#c8860a] uppercase tracking-[1px] mb-4">
                            📋 {t("istsGuide.tocLabel")}
                        </div>

                        {/* List */}
                        <ol className="list-none p-0 m-0">
                            {TOC.map(([id, label], i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 mb-2 text-[13.5px] text-[#3d3830] leading-[1.4]"
                                >
                                    {/* Number */}
                                    <span className="font-mono text-[11px] text-[#c8860a] font-semibold min-w-[18px] mt-0.5">
                                        {i + 1}.
                                    </span>

                                    {/* Link */}
                                    <a
                                        href={`#${id}`}
                                        className="font-medium hover:text-[#c8860a] transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                    {/* SECTION 1 */}
                    <Section id="why" number="01" title={t("istsGuide.section1.title")}>
                        <p>{t("istsGuide.section1.p1")}</p>

                        <Callout title={t("istsGuide.section1.calloutTitle")} color="red">
                            {t("istsGuide.section1.calloutBody")}
                        </Callout>

                        <p>{t("istsGuide.section1.p2")}</p>
                    </Section>

                    {/* SECTION 2 */}
                    <Section id="what" number="02" title={t("istsGuide.section2.title")}>
                        <p>{t("istsGuide.section2.p1")}</p>
                        <p>{t("istsGuide.section2.p2")}</p>
                        <p>{t("istsGuide.section2.p3")}</p>

                        <Callout title={t("istsGuide.section2.calloutTitle")} color="blue">
                            {t("istsGuide.section2.calloutBody")}
                        </Callout>

                        <h3 className="text-[20px] font-bold text-black mt-4">
                            {t("istsGuide.section2.subhead")}
                        </h3>
                        <p>{t("istsGuide.section2.p4")}</p>
                        <p {...HTML(t("istsGuide.section2.p5"))} />
                    </Section>

                    {/* SECTION 3 */}
                    <Section id="process" number="03" title={t("istsGuide.section3.title")}>
                        <p>{t("istsGuide.section3.intro")}</p>

                        {STAGES.map((stage, i) => (
                            <StageCard
                                key={i}
                                number={String(i + 1)}
                                title={stage.title}
                                subtitle={stage.subtitle}
                            >
                                {stage.body}
                            </StageCard>
                        ))}

                        <Callout title={t("istsGuide.section3.calloutTitle")} color="orange">
                            {t("istsGuide.section3.calloutBody")}
                            <br />
                            <br />
                            <strong>{t("istsGuide.section3.calloutTimeline")}</strong>
                        </Callout>
                    </Section>

                    {/* SECTION 4 */}
                    <Section
                        id="ecosystem"
                        number="04"
                        title={t("istsGuide.section4.title")}
                    >
                        <p>{t("istsGuide.section4.intro")}</p>

                        <div className="space-y-5 mt-4 bg-orange-50 border border-orange-200 p-5 rounded-lg">
                            {ECOSYSTEM.map((item, i) => (
                                <div key={i} className="border-l-4 border-orange-200 pl-4">
                                    <div className="font-bold text-[16px]">
                                        {item.name}{" "}
                                        <span className="text-orange-500 font-normal text-[14px]">
                                            — {item.full}
                                        </span>
                                    </div>
                                    <p className="text-[15px] text-gray-700 mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* SECTION 5 */}
                    <Section
                        id="bottlenecks"
                        number="05"
                        title={t("istsGuide.section5.title")}
                    >
                        <p>{t("istsGuide.section5.intro")}</p>

                        {BOTTLENECKS.map((b, i) => (
                            <BottleneckCard
                                key={i}
                                state={b.state}
                                severity={b.severity}
                                severityLabel={b.severityLabel}
                                stats={b.stats}
                            >
                                {b.body}
                            </BottleneckCard>
                        ))}

                        <blockquote className="border-l-4 border-orange-400 bg-orange-50 pl-4 italic text-gray-700 mt-6">
                            {t("istsGuide.section5.quote")}
                            <br />
                            <span className="not-italic text-[13px] text-gray-500 mt-1 block">
                                {t("istsGuide.section5.quoteAttribution")}
                            </span>
                        </blockquote>
                    </Section>

                    {/* SECTION 6 */}
                    <Section id="data" number="06" title={t("istsGuide.section6.title")}>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-[#fff6dd] text-black border-b">
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section6.thMetric")}</th>
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section6.thValue")}</th>
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section6.thSource")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DATA_ROWS.map((row, i) => (
                                        <tr key={i} className="border-b hover:bg-amber-100 odd:bg-white even:bg-[#fff6dd]">
                                            <td className="p-3 font-semibold">{row[0]}</td>
                                            <td className="p-3">{row[1]}</td>
                                            <td className="p-3 text-gray-500 text-[13px]">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    {/* SECTION 7 */}
                    <Section id="curtailment" number="07" title={t("istsGuide.section7.title")}>
                        <p>{t("istsGuide.section7.intro")}</p>

                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-200 rounded p-5">
                                <div className="font-bold text-[16px] mb-2">
                                    {t("istsGuide.section7.mechanism1Title")}
                                </div>
                                <p className="text-[15px] text-gray-700 leading-[1.75]">
                                    {t("istsGuide.section7.mechanism1Body")}
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded p-5">
                                <div className="font-bold text-[16px] mb-2">
                                    {t("istsGuide.section7.mechanism2Title")}
                                </div>
                                <p className="text-[15px] text-gray-700 leading-[1.75]">
                                    {t("istsGuide.section7.mechanism2Body")}
                                </p>
                            </div>
                        </div>

                        <Callout title={t("istsGuide.section7.calloutTitle")} color="red">
                            {t("istsGuide.section7.calloutBody")}
                        </Callout>

                        <h3 className="text-[18px] font-bold text-black mt-2">
                            {t("istsGuide.section7.subhead")}
                        </h3>
                        <p>{t("istsGuide.section7.p1")}</p>
                    </Section>

                    {/* SECTION 8 */}
                    <Section id="waiver" number="08" title={t("istsGuide.section8.title")}>
                        <p>{t("istsGuide.section8.p1")}</p>

                        <h3 className="text-[18px] font-bold text-black mt-4 mb-3">
                            {t("istsGuide.section8.subhead1")}
                        </h3>
                        <p>{t("istsGuide.section8.p2")}</p>

                        <div className="overflow-x-auto">
                            <table className="w-full border  border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-[#fff6dd] border-b">
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section8.thWindow")}</th>
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section8.thWaiver")}</th>
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section8.thImpact")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {WAIVER_ROWS.map((row, i) => (
                                       <tr key={i} className="border-b hover:bg-amber-100 odd:bg-white even:bg-[#fffbf0]">

                                            <td className="p-3">{row[0]}</td>
                                            <td className="p-3 font-semibold">{row[1]}</td>
                                            <td className="p-3 text-gray-600">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-[18px] font-bold text-black mt-6 mb-2">
                            {t("istsGuide.section8.subhead2")}
                        </h3>
                        <p>{t("istsGuide.section8.p3")}</p>

                        <Callout title={t("istsGuide.section8.calloutTitle")} color="orange">
                            {t("istsGuide.section8.calloutBody")}
                        </Callout>
                    </Section>

                    {/* SECTION 9 */}
                    <Section id="players" number="09" title={t("istsGuide.section9.title")}>
                        <p>{t("istsGuide.section9.p1")}</p>

                        <h3 className="text-[18px] font-bold text-black mt-4 mb-2">
                            {t("istsGuide.section9.subhead1")}
                        </h3>
                        <p>{t("istsGuide.section9.p2")}</p>

                        <h3 className="text-[18px] font-bold text-black mt-6 mb-3">
                            {t("istsGuide.section9.subhead2")}
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-[#fff6dd] border-b">
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section9.thCompany")}</th>
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section9.thProfile")}</th>
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section9.thWins")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PLAYERS_ROWS.map((row, i) => (
                                        <tr key={i} className="border-b hover:bg-amber-100 odd:bg-white even:bg-[#fffbf0]">

                                            <td className="p-3 font-semibold">{row[0]}</td>
                                            <td className="p-3 text-gray-600">{row[1]}</td>
                                            <td className="p-3 text-gray-600">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Callout title={t("istsGuide.section9.calloutTitle")} color="green">
                            {t("istsGuide.section9.calloutBody")}
                        </Callout>
                    </Section>

                    {/* SECTION 10 */}
                    <Section id="future" number="10" title={t("istsGuide.section10.title")}>
                        <p>{t("istsGuide.section10.intro")}</p>

                        <div className="space-y-5 mt-2">
                            {FUTURE_ITEMS.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-[28px] font-bold text-black leading-none w-8 shrink-0 pt-1">
                                        {item.n}
                                    </div>
                                    <div>
                                        <div className="font-bold text-[16px] mb-1">{item.title}</div>
                                        <p className="text-[15px] text-gray-700 leading-[1.75]">{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* SECTION 11 */}
                    <Section id="glossary" number="11" title={t("istsGuide.section11.title")}>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-[#fffbf0] border-b">
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section11.thTerm")}</th>
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section11.thFull")}</th>
                                        <th className="p-3 text-left font-semibold">{t("istsGuide.section11.thMeans")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {GLOSSARY_ROWS.map((row, i) => (
                                        <tr key={i} className="border-b hover:bg-amber-100 odd:bg-white even:bg-[#fffbf0] odd:hover:bg-gray-200">

                                            <td className="p-3 font-bold">{row[0]}</td>
                                            <td className="p-3 text-gray-600">{row[1]}</td>
                                            <td className="p-3 text-gray-700">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    {/* SECTION 12 */}
                    <Section id="faq" number="12" title={t("istsGuide.section12.title")}>
                        <div className="space-y-6">
                            {FAQS.map((item, i) => (
                                <div key={i} className="border-b border-gray-100 pb-5">

                                    <div className="font-bold text-[16px] mb-2">{t("istsGuide.section12.qPrefix")} {item.q}</div>
                                    <p className="text-[15px] text-gray-700 leading-[1.75]">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* FOOTER NOTE */}
                    <div className=" p-5 border border-black     rounded-lg text-[13px] text-gray-500 space-y-2 mb-5">
                        <p className="font-semibold text-black">{t("istsGuide.footer.title")}</p>
                        <p>{t("istsGuide.footer.address")}</p>
                        <p>{t("istsGuide.footer.body")}</p>
                    </div>

                </main>
            </div>
        </>
    );
}
