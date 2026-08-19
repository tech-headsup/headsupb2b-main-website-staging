"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import GetInTouch from "@/component/Form/Contact/GetInTouch";


/* ─────────────────────────────────────────────
   REUSABLE SUB-COMPONENTS
───────────────────────────────────────────── */
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
        gray: { wrap: "bg-gray-50 border-gray-400", title: "text-gray-800" },
        purple: { wrap: "bg-[#F4F1FA] border-headupb2b", title: "text-headupb2b" },
        green: { wrap: "bg-green-50 border-green-500", title: "text-green-800" },
        red: { wrap: "bg-red-50 border-red-500", title: "text-red-800" },
        yellow: { wrap: "bg-yellow-50 border-yellow-500", title: "text-yellow-800" },
        orange: { wrap: "bg-orange-50 border-orange-500", title: "text-orange-800" },
    };
    const s = styles[color] ?? styles.gray;
    return (
        <div className={`border-l-4 p-5 my-6 ${s.wrap}`}>
            <div className={`font-semibold mb-2 ${s.title}`}>{title}</div>
            <div className="text-gray-700">{children}</div>
        </div>
    );
}

function ComponentCard({ icon, title, children }) {
    return (
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{icon}</span>
                <div className="font-bold text-[16px] text-headupb2b">{title}</div>
            </div>
            <div className="text-[15px] text-gray-700 leading-[1.75]">{children}</div>
        </div>
    );
}

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

export default function BESSGuidePage() {
    const { t, i18n } = useTranslation();
    const isHi = i18n.resolvedLanguage === "hi";
    const [showRequestConsultation, setShowRequestConsultation] = useState(false);

    const HERO_STATS = t("bess.hero.stats", { returnObjects: true }) || [];
    const TOC = t("bess.toc", { returnObjects: true }) || [];
    const S1_BUYERS = t("bess.s1.buyers", { returnObjects: true }) || [];
    const S1_EPC = t("bess.s1.epc", { returnObjects: true }) || [];
    const S2_STEPS = t("bess.s2.steps", { returnObjects: true }) || [];
    const S3_LFP_ITEMS = t("bess.s3.lfpItems", { returnObjects: true }) || [];
    const S4_ROWS = t("bess.s4.rows", { returnObjects: true }) || [];
    const S5_APPLICATIONS = t("bess.s5.applications", { returnObjects: true }) || [];
    const S6_DRIVERS = t("bess.s6.drivers", { returnObjects: true }) || [];
    const S7_ROWS = t("bess.s7.rows", { returnObjects: true }) || [];
    const S8_VENDORS = t("bess.s8.vendors", { returnObjects: true }) || [];
    const S9_TRENDS = t("bess.s9.trends", { returnObjects: true }) || [];
    const FAQS = t("bess.faqs", { returnObjects: true }) || [];

    return (
        <>
            <Head>
                <title>{t("bess.meta.title")}</title>
                <meta
                    name="description"
                    content={t("bess.meta.description")}
                />
                <meta
                    name="keywords"
                    content={t("bess.meta.keywords")}
                />
                <link rel="canonical" href="https://www.headsupb2b.com/research/battery-energy-storage-systems" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

                <meta property="og:type" content="article" />
                <meta property="og:title" content={t("bess.meta.ogTitle")} />
                <meta property="og:description" content={t("bess.meta.ogDescription")} />
                <meta property="og:url" content="https://www.headsupb2b.com/research/battery-energy-storage-systems" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image" content="https://www.headsupb2b.com/BESS.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={t("bess.meta.ogImageAlt")} />
                <meta property="article:published_time" content="2026-03-01T00:00:00.000Z" />
                <meta property="article:modified_time" content="2026-03-24T00:00:00.000Z" />
                <meta property="article:author" content="Headsup B2B Research Desk" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("bess.meta.twitterTitle")} />
                <meta name="twitter:description" content={t("bess.meta.twitterDescription")} />
                <meta name="twitter:site" content="@headsupb2b" />
                <meta name="twitter:creator" content="@headsupb2b" />
                <meta name="twitter:image" content="https://www.headsupb2b.com/BESS.jpg" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://www.headsupb2b.com",
                            "@type": "Article",
                            headline: t("bess.meta.title"),
                            description: t("bess.meta.description"),
                            image: "https://www.headsupb2b.com/BESS.jpg",
                            author: { "@type": "Organization", name: "Headsup B2B Research Desk", url: "https://www.headsupb2b.com" },
                            publisher: { "@type": "Organization", name: "Headsup B2B Pvt. Ltd.", url: "https://www.headsupb2b.com" },
                            datePublished: "2026-03-01",
                            dateModified: "2026-03-24",
                            mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.headsupb2b.com/research/battery-energy-storage-systems" },
                        }),
                    }}
                />
            </Head>



            {/* ── HERO ── */}
            <section className="relative overflow-hidden px-8 pt-16 pb-[52px] bg-headupb2b max-sm:px-4 mt-10">
                {/* Background glows */}
                <div
                    className="absolute -top-[120px] -right-[80px] w-[600px] h-[500px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse,rgba(196,181,253,0.15) 0%,transparent 65%)" }}
                />
                <div
                    className="absolute -bottom-[80px] -left-[60px] w-[450px] h-[350px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse,rgba(94,63,153,0.2) 0%,transparent 65%)" }}
                />

                <div className="max-w-[1100px] mx-auto relative z-10">
                    {/* Badges */}
                    <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                        <span
                            className="font-mono text-[10px] tracking-[1px] uppercase px-3 py-1 rounded-full font-medium text-[#c4b5fd]"
                            style={{ background: "rgba(196,181,253,0.15)", border: "1px solid rgba(196,181,253,0.3)" }}
                        >
                            {t("bess.hero.badge")}
                        </span>
                        <span
                            className="font-mono text-[10px] tracking-[0.5px] px-2.5 py-1 rounded-full flex items-center gap-1 text-[#34d399]"
                            style={{ background: "rgba(13,110,74,0.15)", border: "1px solid rgba(13,110,74,0.3)" }}
                        >
                            <span className="w-[5px] h-[5px] rounded-full inline-block" style={{ background: "#34d399" }} />
                            {t("bess.hero.date")}
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className={`font-display font-extrabold tracking-[-1px] text-[#f5f0e8] max-w-[780px] mb-[18px] text-[46px] max-sm:text-[30px] ${isHi ? "leading-[1.5]" : "leading-[1.12]"}`}>
                        {t("bess.hero.title1")}{" "}
                        <em
                            style={{
                                background: "linear-gradient(90deg,#c4b5fd,#e9d5ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {t("bess.hero.titleHighlight")}
                        </em>
                        <br />{t("bess.hero.title2")}
                    </h1>

                    {/* Description */}
                    <p className="text-[17px] text-white italic max-w-[640px] leading-[1.65] mb-8">
                        {t("bess.hero.description")}
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

            <div className="bg-white border-b border-[#e5e0d5] px-8 py-3.5">
                <div className="max-w-[1100px] mx-auto flex items-center gap-6 font-mono text-[11px] text-[#7a7060] flex-wrap">

                    <div className="flex items-center gap-1.5"><span>✍</span> {t("bess.meta.author")}</div>
                    <div className="flex items-center gap-1.5"><span>📅</span> {t("bess.meta.published")}</div>
                    <div className="flex items-center gap-1.5"><span>🔄</span> {t("bess.meta.lastUpdated")}</div>
                    <div className="flex items-center gap-1.5"><span>🏷</span> {t("bess.meta.tags")}</div>
                    <div className="ml-auto bg-[#f4f1ea] px-2.5 py-1 rounded text-[#c8860a]">⏱ {t("bess.meta.readTime")}</div>
                </div>
            </div>

            {/* ── BODY ── */}
            <div className="max-w-[1100px] mx-auto px-6 py-10 max-sm:px-4">
                <main className="max-w-[800px] mx-auto font-serif">

                    {/* Table of Contents */}
                    <div
                        className="bg-[#F4F1FA] rounded-lg px-5 py-5 mb-8"
                        style={{ border: "1px solid rgba(94,63,153,0.2)", borderLeft: "4px solid #5E3F99" }}
                    >
                        <div className="text-[13px] font-bold text-headupb2b uppercase tracking-[1px] mb-4">
                            📋 {t("bess.tocLabel")}
                        </div>
                        <ol className="list-none p-0 m-0">
                            {TOC.map(([id, label], i) => (
                                <li key={i} className="flex items-start gap-2 mb-2 text-[13.5px] text-gray-700 leading-[1.4]">
                                    <span className="font-mono text-[11px] text-headupb2b font-semibold min-w-[18px] mt-0.5">
                                        {i + 1}.
                                    </span>
                                    <a href={`#${id}`} className="font-medium hover:text-headupb2b transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* SECTION 1 */}
                    <Section id="what-is-bess" number="01" title={t("bess.s1.title")}>
                        <p>{t("bess.s1.p1")}</p>
                        <p>{t("bess.s1.p2")}</p>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-3">{t("bess.s1.businessCase")}</h3>

                        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                            <div className="border border-gray-200 rounded-lg p-5 bg-white">
                                <div className="font-bold text-headupb2b text-[14px] uppercase tracking-[1px] mb-3">
                                    {t("bess.s1.buyersTitle")}
                                </div>
                                <ul className="space-y-2 text-[15px] text-gray-700">
                                    {S1_BUYERS.map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start">
                                            <span className="text-headupb2b mt-1 shrink-0">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-5 bg-white">
                                <div className="font-bold text-headupb2b text-[14px] uppercase tracking-[1px] mb-3">
                                    {t("bess.s1.epcTitle")}
                                </div>
                                <ul className="space-y-2 text-[15px] text-gray-700">
                                    {S1_EPC.map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start">
                                            <span className="text-headupb2b mt-1 shrink-0">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Section>

                    {/* SECTION 2 */}
                    <Section id="how-bess-works" number="02" title={t("bess.s2.title")}>
                        <p>{t("bess.s2.p1")}</p>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-2">{t("bess.s2.cycleTitle")}</h3>
                        <p>{t("bess.s2.cycleBody")}</p>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-2">{t("bess.s2.flowTitle")}</h3>
                        <p>{t("bess.s2.flowIntro")}</p>

                        <div className="space-y-3 mt-3">
                            {S2_STEPS.map(([step, text], i) => (
                                <div key={i} className="flex gap-3 items-start bg-gray-50 border border-gray-200 rounded p-4">
                                    <span className="text-headupb2b font-bold text-[18px] shrink-0">{step}</span>
                                    <p className="text-[15px] text-gray-700 leading-[1.7] m-0">{text}</p>
                                </div>
                            ))}
                        </div>

                        <Callout title={t("bess.s2.emsCalloutTitle")} color="purple">
                            {t("bess.s2.emsCalloutBody")}
                        </Callout>
                    </Section>

                    {/* SECTION 3 */}
                    <Section id="key-components" number="03" title={t("bess.s3.title")}>
                        <p>{t("bess.s3.p1")}</p>

                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <ComponentCard icon="🔋" title={t("bess.s3.cellsTitle")}>
                                {t("bess.s3.cellsBody")}
                                <ul className="mt-3 space-y-2 text-[14px]">
                                    {S3_LFP_ITEMS.map((item, i) => (
                                        <li key={i} {...HTML(item)} />
                                    ))}
                                </ul>
                                <div className="mt-3 text-[13px] text-gray-500 italic">
                                    {t("bess.s3.cellsNote")}
                                </div>
                            </ComponentCard>

                            <ComponentCard icon="🖥️" title={t("bess.s3.bmsTitle")}>
                                {t("bess.s3.bmsBody")}
                            </ComponentCard>

                            <ComponentCard icon="⚡" title={t("bess.s3.pcsTitle")}>
                                {t("bess.s3.pcsBody")}
                            </ComponentCard>

                            <ComponentCard icon="📊" title={t("bess.s3.emsTitle")}>
                                {t("bess.s3.emsBody")}
                            </ComponentCard>
                        </div>
                    </Section>

                    {/* SECTION 4 */}
                    <Section id="technology" number="04" title={t("bess.s4.title")}>
                        <p>{t("bess.s4.p1")}</p>

                        <div className="overflow-x-auto mt-4">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-headupb2b text-white">
                                        <th className="p-3 text-left font-semibold">{t("bess.s4.thTechnology")}</th>
                                        <th className="p-3 text-left font-semibold">{t("bess.s4.thBestApp")}</th>
                                        <th className="p-3 text-left font-semibold">{t("bess.s4.thStrengths")}</th>
                                        <th className="p-3 text-left font-semibold">{t("bess.s4.thWatchOut")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {S4_ROWS.map((row, i) => (
                                        <tr key={i} className={`border-b hover:bg-[#F4F1FA] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F1FA]/40"}`}>
                                            <td className="p-3 font-semibold">{row[0]}</td>
                                            <td className="p-3 text-gray-600">{row[1]}</td>
                                            <td className="p-3 text-gray-600">{row[2]}</td>
                                            <td className="p-3 text-gray-500 text-[13px]">{row[3]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    {/* SECTION 5 */}
                    <Section id="applications" number="05" title={t("bess.s5.title")}>
                        <div className="space-y-5">
                            {S5_APPLICATIONS.map((item, i) => (
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

                    {/* SECTION 6 */}
                    <Section id="india-market" number="06" title={t("bess.s6.title")}>
                        <p>{t("bess.s6.p1")}</p>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-2">{t("bess.s6.driversTitle")}</h3>
                        <ul className="space-y-2">
                            {S6_DRIVERS.map((item, i) => (
                                <li key={i} className="flex gap-2 items-start text-[15px] text-gray-700">
                                    <span className="text-headupb2b mt-1 shrink-0">•</span> {item}
                                </li>
                            ))}
                        </ul>

                        <Callout title={t("bess.s6.snapshotTitle")} color="purple">
                            {t("bess.s6.snapshotBody")}
                        </Callout>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-2">{t("bess.s6.procurementTitle")}</h3>
                        <p>{t("bess.s6.procurementBody")}</p>
                    </Section>

                    {/* SECTION 7 */}
                    <Section id="tco" number="07" title={t("bess.s7.title")}>
                        <p>{t("bess.s7.p1")}</p>

                        <div className="overflow-x-auto mt-4">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-headupb2b text-white">
                                        <th className="p-3 text-left font-semibold">{t("bess.s7.thCost")}</th>
                                        <th className="p-3 text-left font-semibold">{t("bess.s7.thValue")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {S7_ROWS.map((row, i) => (
                                        <tr key={i} className={`border-b hover:bg-[#F4F1FA] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F1FA]/40"}`}>
                                            <td className="p-3 text-gray-700">{row[0]}</td>
                                            <td className="p-3 text-gray-700">{row[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Callout title={t("bess.s7.ruleTitle")} color="yellow">
                            {t("bess.s7.ruleBody")}
                        </Callout>
                    </Section>

                    {/* SECTION 8 */}
                    <Section id="vendor-eval" number="08" title={t("bess.s8.title")}>
                        <p>{t("bess.s8.p1")}</p>

                        <div className="space-y-3 mt-4">
                            {S8_VENDORS.map((item, i) => (
                                <div key={i} className="flex gap-4 border border-gray-200 rounded-lg p-4 bg-white">
                                    <span className="text-2xl shrink-0">{item.icon}</span>
                                    <div>
                                        <div className="font-bold text-[15px] text-headupb2b mb-1">{item.title}</div>
                                        <p className="text-[14px] text-gray-700 leading-[1.7] m-0">{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* SECTION 9 */}
                    <Section id="road-ahead" number="09" title={t("bess.s9.title")}>
                        <div className="space-y-5 mt-2">
                            {S9_TRENDS.map((item, i) => (
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

                    {/* CONCLUSION */}
                    <section className="pt-12">
                        <div className="bg-headupb2b text-white rounded-xl p-8 my-6">
                            <div className="text-[12px] tracking-[2px] font-semibold mb-3 text-white/70">{t("bess.conclusion.kicker")}</div>
                            <h2 className="text-[24px] font-bold mb-4">
                                {t("bess.conclusion.title")}
                            </h2>
                            <p className="text-[16px] text-white/90 leading-[1.8] mb-4">
                                {t("bess.conclusion.p1")}
                            </p>
                            <p className="text-[16px] text-white/90 leading-[1.8] mb-6">
                                {t("bess.conclusion.p2")}
                            </p>
                            <div className="border-t border-white/20 pt-5">
                                <div className="font-bold text-[16px] mb-2">{t("bess.conclusion.ctaTitle")}</div>
                                <p className="text-[14px] text-white/80 mb-4">
                                    {t("bess.conclusion.ctaBody")}
                                </p>

                                <button
                                onClick={()=> setShowRequestConsultation(true)}
                                className="inline-block bg-white text-headupb2b font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                    {t("bess.conclusion.ctaButton")}
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 10 — FAQ */}
                    <Section id="faq" number="10" title={t("bess.faqTitle")}>
                        <div className="space-y-6">
                            {FAQS.map((item, i) => (
                                <div key={i} className="border-b border-gray-100 pb-5">
                                    <div className="font-bold text-[16px] mb-2">Q:{item.q}</div>
                                    <p className="text-[15px] text-gray-700 leading-[1.75]">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* FOOTER NOTE */}
                    <div className="pt-12 mt-8 border-t border-gray-200 text-[13px] text-gray-500 space-y-2">
                        <p className="font-semibold text-gray-700">{t("bess.footer.publisher")}</p>
                        <p>
                            {t("bess.footer.sources")}
                        </p>
                        <p>{t("bess.footer.copyright")}</p>
                    </div>

                </main>
            </div>

            {showRequestConsultation && (
                <GetInTouch title={t("bess.consultationTitle")} onClose={() => setShowRequestConsultation(false)} />
            )}
        </>
    );
}
