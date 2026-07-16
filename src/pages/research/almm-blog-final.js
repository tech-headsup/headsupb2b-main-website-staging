"use client";

import GetInTouch from "@/component/Form/Contact/GetInTouch";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";

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

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ALMMGuidePage() {
    const handleCopyLink = useCallback((e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            const el = e.currentTarget;
            el.textContent = "✓ Copied!";
            setTimeout(() => {
                el.textContent = "🔗 Copy Link";
            }, 2000);
        });
    }, []);
    const [showRequestQuote, setShowRequestQuote] = useState(false);

    return (
        <>
            <Head>
                {/* ── Core ── */}
                <title>ALMM 2025–26: Complete Guide to India’s Solar Module & Cell Manufacturers</title>
                <meta
                    name="description"
                    content="Discover India’s Approved List of Module & Cell Manufacturers (ALMM 2025–26). Get insights on List-I & List-II manufacturers, technology types, production capacity, and compliance timelines for smarter solar procurement."
                />
                <meta
                    name="keywords"
                    content="ALMM India 2025, approved solar module manufacturers, MNRE ALMM list, List-I solar modules, List-II solar cells, solar procurement India, ALMM compliance 2026, solar EPC India, ALMM approved manufacturers"
                />

                {/* ── Canonical ── */}
                <link rel="canonical" href="https://www.headsupb2b.com/research/almm-blog-final" />

                {/* ── Robots ── */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

                {/* ── Open Graph ── */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="ALMM 2025–26: Complete Guide to India’s Solar Module & Cell Manufacturers" />
                <meta
                    property="og:description"
                    content="Discover India’s Approved List of Module & Cell Manufacturers (ALMM 2025–26). Get insights on List-I & List-II manufacturers, technology types, production capacity, and compliance timelines for smarter solar procurement."
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
                <meta name="twitter:title" content="ALMM 2025–26: Complete Guide to India’s Solar Module & Cell Manufacturers" />
                <meta
                    name="twitter:description"
                    content="Discover India’s Approved List of Module & Cell Manufacturers (ALMM 2025–26). Get insights on List-I & List-II manufacturers, technology types, production capacity, and compliance timelines for smarter solar procurement."
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
                            headline: "ALMM 2025–26: Complete Guide to India’s Solar Module & Cell Manufacturers",
                            description: "Discover India’s Approved List of Module & Cell Manufacturers (ALMM 2025–26). Get insights on List-I & List-II manufacturers, technology types, production capacity, and compliance timelines for smarter solar procurement.",
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
                            Solar Procurement Guide
                        </span>
                        <span
                            className="font-mono text-[10px] tracking-[0.5px] px-2.5 py-1 rounded-full flex items-center gap-1 text-[#34d399]"
                            style={{ background: "rgba(13,110,74,0.15)", border: "1px solid rgba(13,110,74,0.3)" }}
                        >
                            <span className="w-[5px] h-[5px] rounded-full inline-block blink" style={{ background: "#34d399" }} />
                            Updated: Feb 2026
                        </span>
                    </div>

                    <h1 className="font-display font-extrabold leading-[1.12] tracking-[-1px] text-[#f5f0e8] max-w-[780px] mb-[18px] text-[46px] max-sm:text-[30px]">
                        ALMM 2025–26:{" "}
                        <em
                            style={{
                                background: "linear-gradient(90deg,#f59e0b,#fde68a)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            The Complete Guide
                        </em>
                        <br />to India&apos;s Approved Solar Manufacturers
                    </h1>

                    <p
                        className="text-[17px] text-white italic max-w-[640px] leading-[1.65] mb-8"
                    >
                        Everything EPCs, developers, and procurement professionals need to know about MNRE&apos;s Approved List of
                        Models &amp; Manufacturers — List-I modules, List-II cells, compliance timelines, and how to source right.
                    </p>

                    <div className="flex gap-8 flex-wrap pt-7 border-t border-[rgba(245,240,232,0.12)] max-sm:gap-5">
                        {[
                            ["144 GW+", "List-I Module Capacity"],
                            ["100+", "Approved Manufacturers"],
                            ["26.7 GW", "List-II Cell Capacity"],
                            ["Jun 2026", "List-II Mandatory"],
                        ].map(([n, l], i) => (
                            <div key={i} className="flex items-center gap-8">
                                {i > 0 && (
                                    <div className="w-px self-stretch" style={{ background: "rgba(245,240,232,0.1)" }} />
                                )}
                                <div className="flex flex-col gap-[3px]">
                                    <div className="font-mono text-2xl font-semibold text-white tracking-[-1px]">{n}</div>
                                    <div
                                        className="text-[11px] text-white tracking-[0.5px] uppercase"
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
                    <div className="flex items-center gap-1.5"><span>✍</span> Headsup B2B Research Desk</div>
                    <div className="flex items-center gap-1.5"><span>📅</span> Published: Dec 22, 2025</div>
                    <div className="flex items-center gap-1.5"><span>🔄</span> Last Updated: Feb 5, 2026</div>
                    <div className="flex items-center gap-1.5"><span>🏷</span> Solar · Policy · Procurement · MNRE</div>
                    <div className="ml-auto bg-[#f4f1ea] px-2.5 py-1 rounded text-[#c8860a]">⏱ 12 min read</div>
                </div>
            </div>


            {/* ══════════════════════════════════════
          PAGE BODY
      ══════════════════════════════════════ */}
            <div className="max-w-[1100px] mx-auto px-8 max-sm:px-4">

                {/* Breadcrumb */}
                <nav className="py-3.5 font-mono text-[11px] text-[#b0a898] tracking-[0.3px]">
                    <Link href="https://www.headsupb2b.com" className="text-[#7a7060] no-underline hover:text-[#c8860a]">Home</Link>
                    <span className="mx-1.5">/</span>
                    <Link href="/" className="text-[#7a7060] no-underline hover:text-[#c8860a]">Research</Link>
                    <span className="mx-1.5">/</span>
                    <Link href="/renewable-energy-solutions" className="text-[#7a7060] no-underline hover:text-[#c8860a]">Solar Procurement</Link>
                    <span className="mx-1.5">/</span>
                    ALMM Complete Guide 2025–26
                </nav>

                {/* Two-column layout */}
                <div className="grid grid-cols-[1fr_300px] gap-14 items-start pt-4 max-[900px]:grid-cols-1">

                    <main className="pt-2 font-serif text-[18px] leading-[1.75]">


                        <div
                            className="bg-[#fffbf0] rounded-lg px-6 py-5 my-8"
                            style={{ border: "1px solid rgba(200,134,10,0.2)", borderLeft: "4px solid #c8860a" }}
                        >
                            <div className="font-display text-[14px] font-bold text-[#c8860a] uppercase tracking-[1px] mb-3.5">
                                📋 Table of Contents
                            </div>
                            <ol className="list-none p-0 m-0">
                                {[
                                    ["#what-is-almm", "What is ALMM and Why Does It Exist?"],
                                    ["#list1", "List-I: Approved Module Manufacturers (144 GW+)"],
                                    ["#list2", "List-II: Approved Cell Manufacturers (26.7 GW)"],
                                    ["#top-players", "Top 10 Manufacturers You Must Know"],
                                    ["#compliance", "ALMM Compliance: Who Must Follow It?"],
                                    ["#timeline", "Key Dates & Regulatory Timeline"],
                                    ["#technology", "Technology Breakdown: PERC vs TOPCon vs HJT"],
                                    ["#sourcing", "How to Source ALMM-Certified Modules"],
                                    ["#database", "Interactive ALMM Database Tool"],
                                    ["#faq", "Frequently Asked Questions"],
                                ].map(([href, label], i) => (
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
                        <p className="mb-5 text-[19px] text-[#1a1612] font-medium leading-[1.7]">
                            India&apos;s solar energy ambition — 500 GW of renewable capacity by 2030 — rests on one foundational
                            question: <strong className="font-semibold">where do the panels come from, and are they good enough?</strong>{" "}
                            The ALMM (Approved List of Models &amp; Manufacturers) is MNRE&apos;s answer. It is a quality gate, a
                            domestic manufacturing catalyst, and a procurement compliance framework all rolled into one.
                        </p>

                        {/* ── SECTION 1 ── */}
                        <SectionHead id="what-is-almm" num="01 / INTRODUCTION">
                            What is ALMM and Why Does It Exist?
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            The <strong>Approved List of Models &amp; Manufacturers (ALMM)</strong> is a regulatory framework
                            introduced by MNRE under the &quot;Approved Models and Manufacturers of Solar Photovoltaic Modules
                            (Requirements for Compulsory Registration) Order, 2019.&quot; The first List-I (modules) was published
                            on March 10, 2021.
                        </p>
                        <p className="mb-5 text-[#3d3830]">
                            Only manufacturers whose products appear on this list are eligible to supply solar modules and cells for
                            government projects, government-assisted projects, open access schemes, and net-metering projects in India.
                        </p>
                        <Callout type="info" icon="ℹ️" title="Why MNRE Created ALMM">
                            Before ALMM, India&apos;s solar sector was flooded with low-quality, uncertified imports — particularly
                            from China — which led to project failures, lower efficiencies, and massive financial losses. ALMM creates
                            accountability: every module on a government project is traceable to a verified, BIS-certified, tested
                            manufacturer.
                        </Callout>
                        <SubHead>The Three-Layer ALMM Architecture</SubHead>
                        <p className="mb-5 text-[#3d3830]">
                            MNRE has structured ALMM as a progressive supply-chain framework with three lists coming into force over time:
                        </p>
                        <DataTable
                            headers={["List", "Covers", "First Published", "Mandatory From", "Status"]}
                            rows={[
                                ["List-I", "Solar PV Modules", "March 10, 2021", "April 10, 2021", <Tag key="g" v="g">✓ Active</Tag>],
                                ["List-II", "Solar PV Cells", "July 31, 2025", "June 1, 2026", <Tag key="o" v="o">⏳ Transition</Tag>],
                                ["List-III", "Solar PV Wafers", "Expected 2028", "June 1, 2028 (draft)", <Tag key="b" v="b">📝 Draft</Tag>],
                            ]}
                        />
                        <blockquote className="border-l-[5px] border-[#c8860a] my-9 px-7 py-5 bg-[#fffbf0] rounded-r-lg">
                            <p className="font-display text-[22px] italic text-[#1a1612] leading-[1.5] m-0">
                                &quot;The ALMM is not just a quality list — it is the single most powerful lever India has used to
                                indigenise its solar supply chain, growing domestic module capacity from near zero to 144 GW in four
                                years.&quot;
                            </p>
                            <cite className="block mt-2.5 font-mono text-[11px] text-[#c8860a] tracking-[0.5px] not-italic">
                                — Headsup B2B Procurement Research, 2025
                            </cite>
                        </blockquote>

                        {/* ── SECTION 2 ── */}
                        <SectionHead id="list1" num="02 / LIST-I">
                            Approved Module Manufacturers — 144 GW and Growing
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            As of December 22, 2025, ALMM List-I covers <strong>100+ module manufacturers</strong> with a combined
                            enlisted capacity of <strong>144,841 MW (~145 GW)</strong>. This represents staggering growth from ~19 GW
                            in early 2023, driven by the PLI scheme and BCD on imported cells and modules.
                        </p>
                        <div className="grid grid-cols-3 gap-px bg-[#e5e0d5] border border-[#e5e0d5] rounded-xl overflow-hidden my-7 max-sm:grid-cols-1">
                            {[
                                { n: "144,841", l: "MW total enlisted capacity\n(Dec 2025)", c: "#c8860a" },
                                { n: "100+", l: "Active module manufacturers\non List-I", c: "#0d6e4a" },
                                { n: "0", l: "Chinese manufacturers\non the list", c: "#d4500a" },
                            ].map((s, i) => (
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
                            December 2025 saw a record single-month addition of 23,119 MW, with six new manufacturers entering
                            including Znshine Solarworld (1,552 MW), Inox Solar (1,274 MW), and Frontier Energy (548 MW).
                        </p>
                        <SubHead>Minimum Efficiency Thresholds</SubHead>
                        <DataTable
                            headers={["Category", "Application", "Min Efficiency", "Technology"]}
                            rows={[
                                ["Category I (Utility)", "Ground-mount, large-scale", "≥ 20.0%", "Mono c-Si"],
                                ["Category II (Rooftop)", "Commercial / Industrial rooftop", "≥ 19.5%", "Mono c-Si"],
                                ["Off-Grid", "Solar lamps, fans, lights", "Lower threshold (amended)", "Any"],
                            ]}
                        />

                        {/* ── SECTION 3 ── */}
                        <SectionHead id="list2" num="03 / LIST-II">
                            Approved Cell Manufacturers — The New Frontier
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            ALMM List-II for solar PV cells is India&apos;s next strategic frontier. First published on July 31,
                            2025, it currently covers <strong>10 manufacturers</strong> with a combined capacity of{" "}
                            <strong>26,790 MW</strong>. The mandate becomes compulsory from <strong>June 1, 2026</strong>.
                        </p>
                        <Callout type="warn" icon="⚠️" title="Critical Compliance Cut-Off">
                            <strong>Projects with bid submission on or before Aug 31, 2025:</strong> ALMM List-II (cells) not
                            mandatory even if commissioned after Jun 1, 2026.<br />
                            <strong>Projects with bid submission after Aug 31, 2025:</strong> Must comply with List-II, even if
                            commissioned before Jun 1, 2026.
                        </Callout>
                        <SubHead>Current List-II Manufacturers (as of Feb 2026)</SubHead>
                        <DataTable
                            headers={["#", "Manufacturer", "Technology", "Capacity (MW)", "State"]}
                            rows={[
                                ["1", "Waaree Energies", "Mono PERC + TOPCon", "5,251 MW", "Gujarat"],
                                ["2", "Tata Power (TP Solar + TPREL)", "Mono PERC + TOPCon", "4,813 MW", "Tamil Nadu / Karnataka"],
                                ["3", "Adani Solar (Mundra)", "Mono PERC + TOPCon", "4,237 MW", "Gujarat"],
                                ["4", "FS India (First Solar)", "CdTe Thin Film", "3,433 MW", "Tamil Nadu"],
                                ["5", "Premier Energies", "Mono PERC + TOPCon", "3,283 MW", "Telangana"],
                                ["6", "Emmvee Energy", "TOPCon Bifacial", "1,553 MW", "Karnataka"],
                                ["7", "ReNew Photovoltaics", "Mono PERC Bifacial", "1,766 MW", "Rajasthan"],
                                ["8", "Jupiter International", "Mono PERC Bifacial", "779 MW", "Karnataka"],
                                ["9", "Websol Energy Systems", "Mono PERC Bifacial", "602 MW", "West Bengal"],
                                ["10", "Evervolt Solar Technology India", "Mono PERC Bifacial", "1,074 MW", "Andhra Pradesh"],
                            ]}
                        />

                        {/* ── SECTION 4 ── */}
                        <SectionHead id="top-players" num="04 / MANUFACTURERS">
                            Top 10 ALMM Manufacturers You Must Know
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            The top five players (Waaree, Tata Power, Avaada, Adani, Emmvee) account for roughly 45% of all enlisted
                            module capacity. Here are the manufacturers that matter most for procurement decisions:
                        </p>
                        <div className="grid grid-cols-2 gap-3.5 my-7 max-[900px]:grid-cols-1">
                            {[
                                { rank: "🥇 Rank 1 · Module Market Leader", name: "Waaree Energies", state: "Gujarat (Valsad + Navsari + Chikhli)", cap: "21,500 MW", color: "#f59e0b", tags: [["b", "Mono PERC"], ["g", "TOPCon"], ["o", "Bifacial"]] },
                                { rank: "🥈 Rank 2 · Fastest Expanding", name: "Tata Power Solar (TP Solar)", state: "Tamil Nadu / Karnataka", cap: "8,200 MW", color: "#94a3b8", tags: [["b", "Mono PERC"], ["g", "TOPCon"], ["o", "Bifacial"]] },
                                { rank: "🥉 Rank 3 · IPP-backed Capacity", name: "Avaada Electro", state: "Maharashtra (Nagpur) / Gujarat", cap: "8,220 MW", color: "#b97b45", tags: [["b", "Mono PERC"], ["g", "TOPCon"]] },
                                { rank: "Rank 4 · Vertically Integrated", name: "Adani Solar (Mundra)", state: "Gujarat (Mundra)", cap: "5,000 MW", color: "#0d6e4a", tags: [["b", "Mono PERC"], ["g", "TOPCon"], ["o", "Bifacial"]] },
                                { rank: "Rank 5 · Only Thin-Film on List", name: "FS India (First Solar)", state: "Tamil Nadu", cap: "3,433 MW", color: "#0d4a8a", tags: [["o", "CdTe Thin Film"]] },
                                { rank: "Rank 6 · Karnataka's Solar Giant", name: "Emmvee Solar", state: "Karnataka", cap: "6,600 MW", color: "#8b5cf6", tags: [["b", "Mono PERC"], ["g", "TOPCon"]] },
                            ].map((m, i) => (
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
                                    <div className="text-[11px] text-[#7a7060] mt-0.5">ALMM-enlisted module capacity</div>
                                    <div className="flex flex-wrap gap-1 mt-2.5">
                                        {m.tags.map(([v, t], ti) => (
                                            <Tag key={ti} v={v}>{t}</Tag>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── SECTION 5 ── */}
                        <SectionHead id="compliance" num="05 / COMPLIANCE">
                            Who Must Comply with ALMM?
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            ALMM compliance is not universal — it applies to specific categories of projects. Understanding the scope
                            is critical for procurement planning, especially for projects that straddle the compliance boundary dates.
                        </p>
                        <ComplianceBox
                            head="ALMM MANDATORY — Projects that MUST use ALMM-listed modules"
                            rows={[
                                { icon: "✅", content: <><strong>Government Projects:</strong> Central Govt, State Govts, CPSEs, State PSUs, Autonomous Bodies</> },
                                { icon: "✅", content: <><strong>Government-Assisted Projects:</strong> Any project receiving govt subsidy, VGF, or grant</> },
                                { icon: "✅", content: <><strong>Section 63 Projects:</strong> Projects selling electricity to government under Electricity Act 2003</> },
                                { icon: "✅", content: <><strong>Open Access Projects:</strong> Applied after Oct 1, 2022 (earlier ones exempted)</> },
                                { icon: "✅", content: <><strong>Net Metering Projects:</strong> Applied after Oct 1, 2022</> },
                            ]}
                        />
                        <Callout type="success" icon="✅" title="ALMM Does NOT Apply To">
                            Private off-grid installations; captive consumption projects (individual or group); projects commissioned
                            before March 31, 2024 (reinstated mandate exemption); and projects bid before April 10, 2021.
                        </Callout>

                        {/* ── SECTION 6 ── */}
                        <SectionHead id="timeline" num="06 / TIMELINE">
                            Key Regulatory Dates You Cannot Afford to Miss
                        </SectionHead>
                        <div className="my-7 relative">
                            {[
                                { dot: "2019", color: "#c8860a", date: "January 2, 2019", title: "ALMM Order Notified", body: 'MNRE issues the "Approved Models and Manufacturers of Solar PV Modules (Requirements for Compulsory Registration) Order, 2019" — the founding legal document.' },
                                { dot: "2021", color: "#c8860a", date: "March 10, 2021 → April 10, 2021", title: "List-I First Published & Activated", body: "MNRE publishes the first ALMM List-I for solar PV modules. Compliance becomes mandatory for government projects from April 10, 2021." },
                                { dot: "2024", color: "#0d6e4a", date: "April 1, 2024", title: "Mandate Reinstated After Pause", body: "After a year-long hold (FY 2022–23), MNRE reinstates the ALMM mandate. Projects commissioned by March 31, 2024 were exempted; those after must comply fully." },
                                { dot: "2025", color: "#d4500a", date: "July 31, 2025", title: "List-II (Cells) — First Published", body: "India's first approved list for solar PV cells is published with 6 manufacturers and 13 GW combined capacity. Cut-off compliance date set as August 31, 2025." },
                                { dot: "2026", color: "#0d6e4a", date: "June 1, 2026", title: "List-II (Cells) — Mandatory", body: "ALMM List-II for solar cells becomes compulsory. All new government and grid-connected projects must source cells from approved List-II manufacturers." },
                                { dot: "2028", color: "#0d4a8a", date: "June 1, 2028 (Draft)", title: "List-III (Wafers) — Proposed", body: "MNRE's draft amendment proposes ALMM List-III for solar wafers, subject to at least three independent wafer manufacturing units with 15 GW capacity." },
                            ].map((item, i, arr) => (
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
                        <SectionHead id="technology" num="07 / TECHNOLOGY">
                            PERC vs TOPCon vs HJT — What&apos;s on ALMM?
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            The technology mix within ALMM has shifted dramatically since 2021 — from polycrystalline to Mono PERC
                            to TOPCon (Tunnel Oxide Passivated Contact), which offers higher efficiencies, better temperature
                            coefficients, and superior low-light performance.
                        </p>
                        <DataTable
                            headers={["Technology", "Typical Efficiency", "ALMM Share", "Key ALMM Manufacturers", "Best For"]}
                            rows={[
                                ["Mono PERC", "19.5%–21.5%", "~59%", "Waaree, Tata, Adani, ReNew, Premier", "Rooftop, cost-sensitive utility"],
                                ["TOPCon", "21.5%–23.5%", "~28%", "Waaree, Adani, Emmvee, Rayzon, Goldi", "Utility-scale, carport, BIPV"],
                                ["HJT", "22%–24%+", "<1%", "Vikram Solar (limited)", "Premium, space-constrained"],
                                ["CdTe Thin Film", "18%–19%", "~2%", "First Solar (FS India)", "Utility, arid/high-irradiance zones"],
                                ["Bifacial (any)", "+5–15% rear gain", "~60% modules", "Most major manufacturers", "Ground-mount, tracker systems"],
                            ]}
                        />
                        <Callout type="info" icon="💡" title="Procurement Insight: TOPCon is Now Mainstream">
                            TOPCon pricing has converged with Mono PERC over the past 12 months. Headsup B2B recommends specifying
                            TOPCon bifacial for all new utility-scale and carport tenders above 500 kWp — the IRR uplift is typically
                            0.3–0.8% over the project life.
                        </Callout>

                        {/* ── SECTION 8 ── */}
                        <SectionHead id="sourcing" num="08 / SOURCING">
                            How to Source ALMM-Certified Modules Effectively
                        </SectionHead>
                        <p className="mb-5 text-[#3d3830]">
                            Knowing the list is only half the battle. The real challenge is securing the right modules — at the right
                            price, right delivery timeline, and with documented ALMM compliance — for a project on a tight deadline.
                        </p>
                        <SubHead>5-Step ALMM-Compliant Procurement Checklist</SubHead>
                        <ComplianceBox
                            head="PROCUREMENT COMPLIANCE CHECKLIST"
                            rows={[
                                { icon: "①", content: <><strong>Verify Current List Status:</strong> Check MNRE&apos;s website for the latest ALMM List-I update (revised monthly). A manufacturer enlisted today may be delisted next month if BIS registration lapses.</> },
                                { icon: "②", content: <><strong>Match Model Numbers:</strong> ALMM approval is model-specific — not just manufacturer-level. The exact model number on the PO must match an approved model in the list.</> },
                                { icon: "③", content: <><strong>Check Capacity Availability:</strong> Enlisted capacity ≠ available inventory. Some manufacturers have long order books. Confirm lead times for your quantum.</> },
                                { icon: "④", content: <><strong>Request Compliance Documents:</strong> Obtain BIS certificate number, ALMM registration certificate, and test reports for the specific model batch.</> },
                                { icon: "⑤", content: <><strong>Lock Pricing with Advance Purchase Orders:</strong> ALMM modules command a price premium over non-listed imports. Lock in pricing early for tight commissioning timelines.</> },
                            ]}
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
                                    Interactive Tool
                                </div>
                                <div className="font-display text-[26px] font-extrabold text-[#f5f0e8] tracking-[-0.5px] mb-2.5">
                                    Explore the Full ALMM Database
                                </div>
                                <p
                                    className="text-[14px] mb-6 leading-[1.6]"
                                    style={{ color: "rgba(245,240,232,0.6)" }}
                                >
                                    Search, filter, and compare all 100+ ALMM-approved solar module manufacturers — by technology,
                                    state, capacity, and year. Updated after every MNRE revision.
                                </p>
                                <Link
                                    href="/research/almm-database"

                                    className="inline-block text-white font-bold text-[14px] px-7 py-3 rounded-lg no-underline transition-opacity hover:opacity-90"
                                    style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                                >
                                    Open ALMM Database Tool →
                                </Link>
                                <Link
                                    href="/research/almm-database"
                                    className="inline-block text-[13px] px-5 py-3 ml-1 no-underline transition-opacity hover:opacity-90 underline-offset-2"
                                    style={{ color: "rgba(245,240,232,0.6)", textDecorationColor: "rgba(245,240,232,0.2)" }}
                                >
                                    Or embed it on your website
                                </Link>
                            </div>
                        </div>

                        {/* ── SECTION 9: FAQ ── */}
                        <SectionHead id="faq" num="10 / FAQ">Frequently Asked Questions</SectionHead>
                        {[
                            {
                                q: "Q: Can a private rooftop solar project use non-ALMM modules?",
                                a: "Yes — if the project is entirely off-grid or used for captive consumption without any government subsidy, ALMM compliance is not mandatory. However, if the project avails net-metering benefits, it must use ALMM-listed modules.",
                            },
                            {
                                q: "Q: What happens if a manufacturer is delisted mid-project?",
                                a: "If a manufacturer's BIS registration expires and they are removed from ALMM while modules are already installed, the previously installed modules remain compliant. However, any future supply for the same project must come from an active listed manufacturer.",
                            },
                            {
                                q: "Q: Is First Solar's thin-film module ALMM-listed?",
                                a: "Yes. FS India Solar Ventures has 3,433 MW of CdTe thin-film capacity listed under both List-I (modules) and List-II (cells). It is the only thin-film manufacturer and one of the only foreign-origin firms on the ALMM — due to its local manufacturing plant in Tamil Nadu.",
                            },
                            {
                                q: "Q: How often is the ALMM list updated?",
                                a: "MNRE updates List-I for modules approximately every 4–6 weeks. List-II for cells has been revised four times since its first publication in July 2025.",
                            },
                            {
                                q: "Q: Where can I download the official ALMM list PDF?",
                                a: "The official ALMM list is available at mnre.gov.in. Our interactive ALMM database provides a searchable, always-updated version you can use directly for procurement decisions.",
                            },
                        ].map(({ q, a }, i) => (
                            <div key={i}>
                                <SubHead>{q}</SubHead>
                                <p className="mb-5 text-[#3d3830]">{a}</p>
                            </div>
                        ))}

                        {/* ── SHARE BAR ── */}
                        <div className="flex items-center gap-2.5 py-5 border-t border-b border-[#e5e0d5] my-9 flex-wrap">
                            <span className="font-mono text-[11px] text-[#7a7060] tracking-[0.5px]">SHARE THIS GUIDE</span>
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
                                🔗 Copy Link
                            </button>
                            {[
                                { href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://www.headsupb2b.com/research/almm-blog-final")}`, label: "in LinkedIn" },
                                { href: `https://twitter.com/intent/tweet?url=${encodeURIComponent("https://www.headsupb2b.com/research/almm-blog-final")}`, label: "𝕏 Twitter" },
                                { href: `https://wa.me/?text=${encodeURIComponent("ALMM Complete Guide 2025-26 by Headsup B2B https://www.headsupb2b.com/research/almm-blog-final")}`, label: "💬 WhatsApp" },
                            ].map(({ href, label }, i) => (
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
                                <div className="font-display text-[17px] font-bold mb-[3px]">Headsup B2B Research Desk</div>
                                <div className="font-mono text-[10px] text-[#c8860a] tracking-[0.5px] mb-2">
                                    Headsup B2B Pvt. Ltd. · New Delhi
                                </div>
                                <p className="text-[13px] text-[#7a7060] leading-[1.6] m-0">
                                    Headsup B2B is India&apos;s B2B procurement marketplace for infrastructure materials — TMT bars,
                                    solar equipment, structural steel, crash barriers, and non-ferrous metals. With ₹220+ Cr in annual
                                    procurement volumes, we track MNRE policy, ALMM updates, and supply chain shifts in real time.
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
                            Upcoming Articles
                        </h2>
                        <div className="grid grid-cols-3 gap-4 mt-6 max-[900px]:grid-cols-1 mb-8">
                            {[
                                { cat: "Solar Procurement", title: "Solar Module Pricing in India — Q4 2025 Benchmark Report", meta: "Dec 2025 · 8 min read" },
                                { cat: "Technology", title: "TOPCon vs Mono PERC: Which Should You Specify for Your Tender?", meta: "Nov 2025 · 10 min read" },
                                { cat: "EPC Guide", title: "Solar EPC Procurement Checklist: 27 Points Before Placing a Module PO", meta: "Oct 2025 · 6 min read" },
                            ].map((card, i) => (
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
                                Source ALMM Modules Through Headsup B2B
                            </div>
                            <p className="text-[13px] leading-[1.6] mb-4" style={{ color: "rgba(245,240,232,0.6)" }}>
                                Get competitive quotes from verified, ALMM-listed suppliers. T+1 payment via Mintifi.
                                Trusted by 100+ solar EPCs across India.
                            </p>
                            {/* <Link
                                href="#sourcing"
                                className="block text-center text-white font-bold text-[13px] px-4 py-[11px] rounded-[7px] no-underline transition-opacity hover:opacity-90"
                                style={{ background: "linear-gradient(135deg,#d4500a,#f59e0b)" }}
                            >
                                Request a Quote →
                            </Link> */}
                            <button
                                type="button"
                                className="block text-center text-white font-bold text-[13px] px-4 py-[11px] rounded-[7px] no-underline transition-opacity hover:opacity-90"
                                onClick={() => setShowRequestQuote(true)}
                                style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                            >
                                Request a Quote →
                            </button>
                            {/* <button
                                type="button"
                                className="block w-full text-center text-[12px] bg-transparent border-0 cursor-pointer mt-2 transition-opacity hover:opacity-80"
                                style={{ color: "rgba(245,240,232,0.45)" }}
                            >
                                Talk to a procurement expert
                            </button> */}
                        </div>

                        {/* Quick Facts */}
                        <div className="bg-white border border-[#e5e0d5] rounded-xl p-5 mb-5">
                            <div className="font-display text-[15px] font-bold mb-3.5">📊 ALMM Quick Facts</div>
                            <ul className="list-none p-0 m-0">
                                {[
                                    { k: "List-I Capacity", v: "144,841 MW", c: "text-[#1a1612]" },
                                    { k: "Module Manufacturers", v: "100+", c: "text-[#0d6e4a]" },
                                    { k: "List-II Capacity", v: "26,790 MW", c: "text-[#1a1612]" },
                                    { k: "Cell Manufacturers", v: "10", c: "text-[#0d6e4a]" },
                                    { k: "List-II Mandatory", v: "Jun 2026", c: "text-[#d4500a]" },
                                    { k: "Chinese Manufacturers", v: "0", c: "text-[#1a1612]" },
                                    { k: "Last Updated (List-I)", v: "Dec 22, 2025", c: "text-[#1a1612]" },
                                    { k: "Last Updated (List-II)", v: "Feb 5, 2026", c: "text-[#1a1612]" },
                                ].map((item, i) => (
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
                            <div className="font-display text-[15px] font-bold mb-3.5">🔄 Recent ALMM Updates</div>
                            <ul className="list-none p-0 m-0">
                                {[
                                    { title: "+23,119 MW added to List-I", meta: "Dec 22, 2025 · 6 new entrants" },
                                    { title: "Evervolt Solar enters List-II (1,074 MW)", meta: "Feb 5, 2026 · Total: 26,790 MW" },
                                    { title: "+5,255 MW to List-I — Avaada +2,798 MW", meta: "Nov 25, 2025" },
                                    { title: "Waaree enters List-II with 5,251 MW", meta: "Dec 15, 2025" },
                                    { title: "Draft: ALMM List-III for Wafers proposed", meta: "Sep 12, 2025 · Public comments" },
                                ].map((item, i) => (
                                    <li key={i} className="py-2.5 border-b border-[#e5e0d5] last:border-b-0 text-[13px]">
                                        <div className="font-semibold text-[#1a1612] leading-[1.4] mb-0.5">{item.title}</div>
                                        <div className="font-mono text-[10px] text-[#b0a898]">{item.meta}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Database Tool */}
                        <div className="bg-headupb2b border border-[rgba(200,134,10,0.2)] rounded-xl p-5 mb-8">
                            <div className="font-display text-[15px] font-bold text-white mb-3.5">🔍 ALMM Database Tool</div>
                            <p className="text-[13px] text-white leading-[1.6] mb-3.5">
                                Search and filter all 100+ ALMM manufacturers. Updated after every MNRE revision.
                            </p>
                            <Link
                                href="/research/almm-database"
                                className="block text-center bg-headupb2b text-white font-bold text-[13px] px-4 py-2.5 rounded-[7px] no-underline transition-opacity hover:opacity-90"
                                style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}

                            >
                                Open Database →
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