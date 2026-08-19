"use client";

import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

function Section({ id, number, title, children }) {
    return (
        <section id={id} className="pt-12">
            <div className="border-t border-[#E8E0D4] pt-4 mb-4">
                <div className="text-[11px] tracking-[2px] text-[#7A6E62] font-semibold mb-1 uppercase">
                    {number}
                </div>
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
                <p className={s.body}>{children}</p>
            </div>
        </div>
    );
}

export default function SolarEPCGuidePage() {
    const { t } = useTranslation();

    const TOC = t("whatIsEpc.toc", { returnObjects: true }) || [];
    const HEADLINE_STATS = t("whatIsEpc.headlineStats", { returnObjects: true }) || [];
    const PHASES = t("whatIsEpc.phases", { returnObjects: true }) || [];
    const CONTRACT_TABLE_HEADERS = t("whatIsEpc.contractTable.headers", { returnObjects: true }) || [];
    const CONTRACT_TABLE_ROWS = t("whatIsEpc.contractTable.rows", { returnObjects: true }) || [];
    const BUYERS = t("whatIsEpc.buyers", { returnObjects: true }) || [];
    const MATERIALS_LIST = t("whatIsEpc.materialsList", { returnObjects: true }) || [];
    const OPP_TABLE_HEADERS = t("whatIsEpc.oppTable.headers", { returnObjects: true }) || [];
    const OPP_TABLE_ROWS = t("whatIsEpc.oppTable.rows", { returnObjects: true }) || [];
    const TAGS = t("whatIsEpc.tags", { returnObjects: true }) || [];

    return (
        <>
            <Head>
                <title>{t("whatIsEpc.meta.title")}</title>
                <meta
                    name="description"
                    content={t("whatIsEpc.meta.description")}
                />
                <meta
                    name="keywords"
                    content={t("whatIsEpc.meta.keywords")}
                />
                <link rel="canonical" href="https://www.headsupb2b.com/research/what-is-epc-in-solar-energy" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={t("whatIsEpc.meta.title")} />
                <meta
                    property="og:description"
                    content={t("whatIsEpc.meta.description")}
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/what-is-epc-in-solar-energy" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:image" content="https://www.headsupb2b.com/solarEnergy.webp" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("whatIsEpc.meta.title")} />
                <meta
                    name="twitter:description"
                    content={t("whatIsEpc.meta.description")}
                />
                <meta name="twitter:image" content="https://www.headsupb2b.com/solarEnergy.webp" />
            </Head>

            {/* HERO */}
            <section className="relative overflow-hidden px-8 pt-20 pb-[72px] bg-headupb2b max-sm:px-4 mt-10">
                <div
                    className="absolute inset-0 pointer-events-none"
                />
                <div className="relative max-w-[820px] mx-auto z-10">
                    <span className="inline-block bg-blue-500 text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
                        style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                    >
                        {t("whatIsEpc.hero.badge")}
                    </span>
                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[54px] leading-[1.15] text-white mb-6 max-w-[720px]">
                        {t("whatIsEpc.hero.title")}
                    </h1>
                    <p className="text-[18px] text-[rgba(255,255,255,0.65)] max-w-[600px] leading-[1.65] mb-9"
                        {...HTML(t("whatIsEpc.hero.subtitle"))}
                    />
                    <div className="flex flex-wrap items-center gap-7 text-[13px]">
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">{t("whatIsEpc.hero.readTime")}</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            {t("whatIsEpc.hero.updatedLabel")} <strong className="text-[rgba(255,255,255,0.75)] font-medium">{t("whatIsEpc.hero.updatedDate")}</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            {t("whatIsEpc.hero.forLabel")} <strong className="text-[rgba(255,255,255,0.75)] font-medium" {...HTML(t("whatIsEpc.hero.forAudience"))} />
                        </span>
                    </div>
                </div>
            </section>

            {/* PAGE BODY */}
            <main className="max-w-[820px] mx-auto px-8 pb-[100px] bg-[#FDFAF6] max-sm:px-4">
                {/* TOC */}
                <nav className="border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-8 py-7 mt-[52px] mb-[56px] rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7A6E62] mb-4">
                        {t("whatIsEpc.tocLabel")}
                    </div>
                    <ol className="list-none grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[14px]">
                        {TOC.map((item, i) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                    <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span {...HTML(item.label)} />
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* SECTION 1 */}
                <Section id="what-is-epc" title={t("whatIsEpc.s1.title")}>
                    <p {...HTML(t("whatIsEpc.s1.p1"))} />

                    <p {...HTML(t("whatIsEpc.s1.p2"))} />

                    <blockquote className="border-l-[3px] border-[#C8900A] my-9 px-7 py-5 bg-[#FDF3DC] rounded-r-md">
                        <p className="font-serif text-[22px] leading-[1.45] text-[#1A1410] italic m-0">
                            {t("whatIsEpc.s1.quote")}
                        </p>
                    </blockquote>

                    <div className="grid grid-cols-3 gap-4 mt-8 mb-2 max-[580px]:grid-cols-2">
                        {HEADLINE_STATS.map((stat, i) => (
                            <div
                                key={i}
                                className={`bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4 ${i === 2 ? "max-[580px]:col-span-2 max-[580px]:max-w-[260px]" : ""}`}
                            >
                                <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                    <span className="text-[#C8900A]">{stat.value}</span> {stat.unit}
                                </div>
                                <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p {...HTML(t("whatIsEpc.s1.p3"))} />
                </Section>


                {/* SECTION 2 */}
                <Section id="three-phases" title={t("whatIsEpc.s2.title")}>
                    <p {...HTML(t("whatIsEpc.s2.p1"))} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] mt-8 mb-3 bg-[#E8E0D4] border border-[#E8E0D4] rounded-[6px] overflow-hidden">
                        {PHASES.map((phase, i) => {
                            const borderColors = ["border-b-[#C8900A]", "border-b-[#0A6E5C]", "border-b-[#14407A]"];
                            return (
                                <div key={i} className={`bg-white p-7 relative border-b-[3px] ${borderColors[i]}`}>
                                    <span className="block font-serif text-[52px] text-[#FDF3DC] leading-none mb-1">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-[#C8900A] mb-2.5">
                                        {phase.tag}
                                    </span>
                                    <h4 className="text-[17px] font-semibold text-[#1A1410] mb-2.5">
                                        {phase.title}
                                    </h4>
                                    <p className="text-[13.5px] text-[#7A6E62] leading-[1.6] m-0">
                                        {phase.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s2.eHeading")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s2.eP1"))} />
                    <p {...HTML(t("whatIsEpc.s2.eP2"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s2.pHeading")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s2.pP1"))} />

                    <Callout variant="tip" title={t("whatIsEpc.s2.calloutTitle")}>
                        {t("whatIsEpc.s2.calloutBody")}
                    </Callout>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s2.cHeading")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s2.cP1"))} />
                    <p {...HTML(t("whatIsEpc.s2.cP2"))} />
                </Section>


                {/* SECTION 3 */}
                <Section id="epc-vs-other" title={t("whatIsEpc.s3.title")}>
                    <p {...HTML(t("whatIsEpc.s3.p1"))} />

                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14.5px]">
                            <thead>
                                <tr>
                                    {CONTRACT_TABLE_HEADERS.map((h, i) => (
                                        <th
                                            key={i}
                                            className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {CONTRACT_TABLE_ROWS.map((row, i) => {
                                    const badgeStyles = [
                                        "bg-[#D3EDDF] text-[#1A6B3A]",
                                        "bg-[#FEF0D0] text-[#7A4A0A]",
                                        "bg-[#FEF0D0] text-[#7A4A0A]",
                                        "bg-[#FAEAEA] text-[#B83232]",
                                        "bg-[#D3EDDF] text-[#1A6B3A]",
                                    ];
                                    return (
                                        <tr key={i} className="even:bg-[#FDFAF6]">
                                            <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                                {row.model}
                                            </td>
                                            <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                                {row.pays}
                                            </td>
                                            <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                                {row.owns}
                                            </td>
                                            <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                                {row.revenue}
                                            </td>
                                            <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                                <span className={`inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] ${badgeStyles[i]}`}>
                                                    {row.impact}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <Callout variant="info" title={t("whatIsEpc.s3.bosTitle")}>
                        <span {...HTML(t("whatIsEpc.s3.bosBody"))} />
                    </Callout>
                </Section>


                {/* SECTION 4 */}
                <Section id="who-are-epc" title={t("whatIsEpc.s4.title")}>
                    <p {...HTML(t("whatIsEpc.s4.p1"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">{t("whatIsEpc.s4.h1")}</h3>
                    <p {...HTML(t("whatIsEpc.s4.p2"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">{t("whatIsEpc.s4.h2")}</h3>
                    <p {...HTML(t("whatIsEpc.s4.p3"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s4.h3")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s4.p4"))} />
                </Section>


                {/* SECTION 5 */}
                <Section id="buyers" title={t("whatIsEpc.s5.title")}>
                    <p {...HTML(t("whatIsEpc.s5.p1"))} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 mb-2">
                        {BUYERS.map((buyer, i) => (
                            <div key={i} className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">
                                    {buyer.type}
                                </div>
                                <div className="text-[14px] font-semibold text-[#1A1410] mb-1">
                                    {buyer.name}
                                </div>
                                <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0"
                                    {...HTML(buyer.desc)}
                                />
                            </div>
                        ))}
                    </div>
                </Section>


                {/* SECTION 6 */}
                <Section
                    id="how-it-works"
                    title={t("whatIsEpc.s6.title")}
                >
                    <p {...HTML(t("whatIsEpc.s6.p1"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s6.stage1H")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s6.stage1P"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s6.stage2H")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s6.stage2P"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s6.stage3H")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s6.stage3P"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s6.stage4H")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s6.stage4P"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s6.stage5H")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s6.stage5P"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s6.stage6H")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s6.stage6P"))} />

                    <Callout variant="warn" title={t("whatIsEpc.s6.calloutTitle")}>
                        {t("whatIsEpc.s6.calloutBody")}
                    </Callout>
                </Section>


                {/* SECTION 7 */}
                <Section id="materials" title={t("whatIsEpc.s7.title")}>
                    <p {...HTML(t("whatIsEpc.s7.p1"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">{t("whatIsEpc.s7.panelsH")}</h3>
                    <p {...HTML(t("whatIsEpc.s7.panelsP"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">{t("whatIsEpc.s7.mountingH")}</h3>
                    <p {...HTML(t("whatIsEpc.s7.mountingP"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">{t("whatIsEpc.s7.invertersH")}</h3>
                    <p {...HTML(t("whatIsEpc.s7.invertersP"))} />

                    <ul className="list-none mt-5 mb-7">
                        {MATERIALS_LIST.map((item, i) => (
                            <li
                                key={i}
                                className={`pl-8 py-2.5 ${i < MATERIALS_LIST.length - 1 ? "border-b border-[#E8E0D4]" : ""} text-[15px] text-[#3D3328] relative`}
                            >
                                <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                                <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Section>


                {/* SECTION 8 */}
                <Section id="om" title={t("whatIsEpc.s8.title")}>
                    <p {...HTML(t("whatIsEpc.s8.p1"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s8.typesH")}
                    </h3>
                    <p>{t("whatIsEpc.s8.typesIntro")}</p>
                    <p {...HTML(t("whatIsEpc.s8.type1"))} />
                    <p {...HTML(t("whatIsEpc.s8.type2"))} />
                    <p {...HTML(t("whatIsEpc.s8.type3"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s8.durationH")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s8.durationP"))} />

                    <Callout variant="tip" title={t("whatIsEpc.s8.calloutTitle")}>
                        {t("whatIsEpc.s8.calloutBody")}
                    </Callout>
                </Section>


                {/* SECTION 9 */}
                <Section id="b2b-opportunities" title={t("whatIsEpc.s9.title")}>
                    <p {...HTML(t("whatIsEpc.s9.p1"))} />

                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14.5px]">
                            <thead>
                                <tr>
                                    {OPP_TABLE_HEADERS.map((h, i) => (
                                        <th
                                            key={i}
                                            className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {OPP_TABLE_ROWS.map((row, i) => {
                                    const isLast = i === OPP_TABLE_ROWS.length - 1;
                                    const borderCls = isLast ? "" : "border-b border-[#E8E0D4]";
                                    return (
                                        <tr key={i} className="even:bg-[#FDFAF6]">
                                            <td className={`px-4 py-3 ${borderCls} font-medium text-[#1A1410]`}>
                                                {row.company}
                                            </td>
                                            <td className={`px-4 py-3 ${borderCls} text-[#3D3328]`}>
                                                {row.fit}
                                            </td>
                                            <td className={`px-4 py-3 ${borderCls} text-[#3D3328]`}>
                                                {row.buyers}
                                            </td>
                                            <td className={`px-4 py-3 ${borderCls} text-[#3D3328]`}>
                                                {row.range}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </Section>


                {/* SECTION 10 */}
                <Section
                    id="how-to-win"
                    title={t("whatIsEpc.s10.title")}
                >
                    <p {...HTML(t("whatIsEpc.s10.p1"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s10.h1")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s10.p2"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s10.h2")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s10.p3"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s10.h3")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s10.p4"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s10.h4")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s10.p5"))} />

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        {t("whatIsEpc.s10.h5")}
                    </h3>
                    <p {...HTML(t("whatIsEpc.s10.p6"))} />

                    <Callout variant="tip" title={t("whatIsEpc.s10.calloutTitle")}>
                        {t("whatIsEpc.s10.calloutBody")}
                    </Callout>
                </Section>

                {/* CTA */}
                <div className="bg-headupb2b rounded-[8px] px-10 py-12 mt-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-headupb2b" />
                    <h2 className="font-serif text-[28px] text-white mb-3">
                        {t("whatIsEpc.cta.title")}
                    </h2>
                    <p className="text-[16px] text-[rgba(255,255,255,0.6)] max-w-[480px] mx-auto mb-7">
                        {t("whatIsEpc.cta.body")}
                    </p>
                    <Link
                        href="#"
                        style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}

                        className="inline-block bg-[#C8900A] text-white text-[14px] font-semibold px-8 py-3.5 rounded-[4px] tracking-[0.03em]"
                    >
                        {t("whatIsEpc.cta.button")}
                    </Link>

                </div>

                {/* FOOTER */}
                <div className="mt-16 pt-7 border-t border-[#E8E0D4] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[13px] text-[#7A6E62]">
                        {t("whatIsEpc.footer.published")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {TAGS.map((tag) => (
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
        </>
    );
}
