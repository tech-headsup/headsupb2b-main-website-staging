"use client";

import Head from "next/head";
import { useState } from "react";
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
                        Strengths
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
                        Considerations
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

export default function TopSolarEPCCompaniesPage() {
    const [showQuoteForm, setShowQuoteForm] = useState(false);

    const companies = [
        {
            rank: "01",
            name: "Tata Power Solar",
            tagline: "India's most trusted integrated solar EPC & manufacturer",
            rating: "4.8",
            tags: ["3+ GW Installed", "Pan-India EPC", "In-house Mfg", "O&M Available"],
            description:
                "Tata Power Solar is the undisputed leader for large industrial and rooftop solar projects in India. With a fully integrated model — from cell manufacturing to EPC to O&M — they offer end-to-end accountability most pure-play contractors cannot match. Their portfolio spans auto plants, pharma facilities, textiles, and warehousing complexes across Maharashtra, Gujarat, Tamil Nadu, and Rajasthan.",
            stats: [
                { label: "Capacity", value: "3.2+ GW" },
                { label: "Min. Size", value: "500 kW" },
                { label: "RESCO/PPA", value: "Yes" },
                { label: "O&M", value: "25-yr" },
                { label: "HQ", value: "Mumbai" },
            ],
            strengths: [
                "In-house panels = better QC",
                "Strong post-commissioning support",
                "Easier CFO approval (Tata brand)",
            ],
            considerations: [
                "Premium pricing vs. local EPCs",
                "Longer lead times for smaller projects",
            ],
            quote:
                "We commissioned a 4.2 MW rooftop across two facilities. Zero major defects in 3 years. The O&M team responds within 24 hours.",
            quoteAuthor: "Head of Procurement, Tier-1 Auto Ancillary, Pune",
        },
        {
            rank: "02",
            name: "Waaree Energies",
            tagline: "Largest solar panel manufacturer turned aggressive EPC player",
            rating: "4.6",
            tags: ["12 GW Mfg", "EPC + Supply", "Competitive Price", "West India"],
            description:
                "Waaree has rapidly grown from India's largest panel manufacturer into a full-fledged EPC contractor — meaning a direct supply chain advantage and no middleman markup on panels. Their EPC division has executed projects for food processing plants, cement factories, and large industrial parks. Particularly strong in Gujarat and Maharashtra.",
            stats: [
                { label: "EPC Executed", value: "1.8+ GW" },
                { label: "Min. Size", value: "100 kW" },
                { label: "RESCO/PPA", value: "Selective" },
                { label: "HQ", value: "Surat/Mumbai" },
            ],
            strengths: [
                "Best panel pricing via integration",
                "Strong West India presence",
                "Listed — financially stable",
            ],
            considerations: [
                "EPC arm less mature than peers",
                "O&M network still expanding",
            ],
        },
        {
            rank: "03",
            name: "Vikram Solar",
            tagline: "Premium quality-focused EPC with strong East & South India network",
            rating: "4.5",
            tags: ["2 GW+ Executed", "Bifacial Experts", "Export Quality", "TOPCon"],
            description:
                "A premium choice for buyers who prioritise long-term yield over lowest capex. One of few Indian manufacturers exporting to Europe and the US — a proxy for manufacturing discipline. Their EPC arm focuses on yield optimisation, shadow analysis, and string-level monitoring. Recommended for Odisha, Bengal, AP, and Tamil Nadu projects.",
            stats: [
                { label: "EPC Executed", value: "2+ GW" },
                { label: "Min. Size", value: "300 kW" },
                { label: "RESCO", value: "Yes" },
                { label: "HQ", value: "Kolkata" },
            ],
            strengths: [
                "Higher module efficiency (TOPCon)",
                "Excellent yield guarantees",
                "Strong East & South India",
            ],
            considerations: [
                "Higher Rs/Wp vs. market average",
                "Thinner North India presence",
            ],
        },
        {
            rank: "04",
            name: "Adani Solar (AIEL)",
            tagline: "Scale-first EPC powerhouse for large industrial campuses",
            rating: "4.4",
            tags: ["5+ GW Installed", "Large Projects", "In-house Mfg", "Pan-India"],
            description:
                "Unparalleled scale and deep pockets for industrial solar. If you're deploying 5+ MW across a large campus, few vendors match their execution speed and supply chain depth. Commissioned solar for India's largest ports, airports, and FMCG manufacturing parks. Best for anchor projects — smaller EPCs are more responsive below 2 MW.",
            stats: [
                { label: "Portfolio", value: "5+ GW" },
                { label: "Sweet Spot", value: "5 MW+" },
                { label: "RESCO", value: "Yes" },
                { label: "HQ", value: "Ahmedabad" },
            ],
            strengths: [
                "Fastest execution at scale",
                "Deep balance sheet",
                "Integrated supply chain",
            ],
            considerations: [
                "Less flexible for SME/mid-scale",
                "Post-commissioning support variable",
            ],
        },
        {
            rank: "05",
            name: "Cleanmax Solar",
            tagline: "Leading RESCO/PPA model EPC for zero-capex industrial solar",
            rating: "4.4",
            tags: ["RESCO Pioneer", "Zero Capex", "C&I Specialists", "Macquarie Backed"],
            description:
                "The go-to RESCO/PPA partner for plant heads who want to eliminate upfront capex. You pay only for units consumed at a lower-than-grid tariff — Cleanmax owns, operates, and maintains the plant. With a 1.5+ GW operational portfolio and Macquarie backing, they have serious institutional credibility.",
            stats: [
                { label: "RESCO Portfolio", value: "1.5+ GW" },
                { label: "Model", value: "RESCO/PPA" },
                { label: "Min. Load", value: "500 kW" },
                { label: "Backer", value: "Macquarie" },
            ],
            strengths: [
                "Zero capex for the buyer",
                "Institutional-grade O&M",
                "Proven in pharma, auto, FMCG",
            ],
            considerations: [
                "Long-term PPA lock-in (15-25 yr)",
                "Less flexible on panel specs",
            ],
        },
        {
            rank: "06",
            name: "Amplus Solar (ENGIE)",
            tagline: "MNC-backed C&I solar EPC with Europe-standard quality processes",
            rating: "4.3",
            tags: ["ENGIE Group", "Multi-state", "1.3 GW Executed", "ESG Ready"],
            description:
                "Part of the global ENGIE group, Amplus brings European EPC standards to Indian industrial projects. Particularly strong in hybrid solar+storage and ESG reporting for MNC subsidiaries with Scope 2 targets or RE100 commitments. Best for companies with global parent reporting obligations.",
            stats: [
                { label: "Portfolio", value: "1.3+ GW" },
                { label: "Storage", value: "Yes (BESS)" },
                { label: "ESG Report", value: "Available" },
                { label: "HQ", value: "Gurugram" },
            ],
            strengths: [
                "MNC parent — strong governance",
                "Best for RE100/ESG mandates",
                "Hybrid solar + BESS capability",
            ],
            considerations: [
                "Pricing above Indian-only peers",
                "Slower contracting process",
            ],
        },
        {
            rank: "07",
            name: "Orb Energy",
            tagline: "SME-focused solar EPC with in-house financing for mid-size plants",
            rating: "4.2",
            tags: ["SME Specialists", "In-house Finance", "South India", "4000+ Clients"],
            description:
                "Fills a critical gap — high-quality EPC with integrated financing for industrial SMEs (200 kW–2 MW). If your plant is in Bengaluru, Chennai, Hyderabad, or Pune and you need a vendor who also arranges the loan, Orb has a differentiated one-stop model. They've served 4,000+ businesses across South India.",
            stats: [
                { label: "Customers", value: "4,000+" },
                { label: "Sweet Spot", value: "200kW-2MW" },
                { label: "Financing", value: "In-house NBFC" },
                { label: "HQ", value: "Bengaluru" },
            ],
            strengths: [
                "Best for SME buyers with financing needs",
                "Dense South India coverage",
            ],
            considerations: [
                "Limited pan-India presence",
                "Not ideal for projects above 5 MW",
            ],
        },
        {
            rank: "08",
            name: "Rays Power Infra",
            tagline: "Fast-growing mid-market EPC with competitive Rs/Wp pricing",
            rating: "4.1",
            tags: ["Value Pricing", "North India", "600+ Projects", "DISCOM Expert"],
            description:
                "Executed 600+ industrial rooftop projects across Rajasthan, UP, Haryana, and MP. For price-sensitive procurement teams in North India, they often offer the best Rs/Wp without compromising on MNRE-approved components. They handle net metering, billing, and DISCOM liaison processes in-house.",
            stats: [
                { label: "Projects", value: "600+" },
                { label: "Min. Size", value: "50 kW" },
                { label: "DISCOM Liaison", value: "In-house" },
                { label: "HQ", value: "Jaipur" },
            ],
            strengths: [
                "Most competitive Rs/Wp in North India",
                "Strong regulatory liaison capability",
            ],
            considerations: [
                "Limited for large campuses 10 MW+",
                "O&M team still scaling up",
            ],
        },
    ];

    const comparisonData = [
        ["Tata Power Solar", "4.8", "500 kW+", "Yes", "Yes", "Yes", "Premium"],
        ["Waaree Energies", "4.6", "100 kW+", "Part.", "Yes", "Part.", "Competitive"],
        ["Vikram Solar", "4.5", "300 kW+", "Yes", "Yes", "Part.", "Premium"],
        ["Adani Solar", "4.4", "5 MW+", "Yes", "Yes", "Yes", "Mid-High"],
        ["Cleanmax Solar", "4.4", "500 kW+", "Yes", "Yes", "Yes", "PPA tariff"],
        ["Amplus (ENGIE)", "4.3", "500 kW+", "Yes", "Yes", "Part.", "Premium"],
        ["Orb Energy", "4.2", "200 kW+", "No", "Yes", "Yes", "Mid"],
        ["Rays Power", "4.1", "50 kW+", "No", "Part.", "Part.", "Budget"],
    ];

    const checklist = [
        "Verify the vendor's MNRE empanelment and BIS certification for all components",
        "Request 3 reference site visits — not just calls — for projects of similar scale",
        "Insist on a PVSyst P50/P90 yield report, not just a simple Excel projection",
        "Confirm Bloomberg NEF Tier-1 rated modules are part of the Bill of Materials",
        "Clarify if O&M is in-house or subcontracted — subcontracted O&M is a red flag",
        "Check inverter brand — ABB, SMA, Huawei, Sungrow acceptable; unknown Chinese brands are not",
        "Demand a single-line diagram (SLD) and layout plan at RFQ stage, not post-award",
        "Confirm DISCOM net-metering/net-billing liaison responsibility is in-scope",
        "Get a 10-year P90 performance guarantee in writing, not just 1-year defect liability",
    ];

    return (
        <>
            <Head>
                <title>Top Solar EPC Companies in India for Industrial Projects — 2026</title>
                <meta
                    name="description"
                    content="Ranked guide to the top solar EPC companies in India for industrial projects in 2026. Evaluated on capacity, track record, O&M, panel quality, and financing options."
                />
                <meta
                    name="keywords"
                    content="top solar EPC companies India, industrial solar EPC, Tata Power Solar, Waaree, Vikram Solar, Adani Solar, Cleanmax, Amplus, Orb Energy, Rays Power, RESCO PPA, C&I solar"
                />
                <link rel="canonical" href="https://www.headsupb2b.com/research/top-solar-epc-companies-india-industrial-projects" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Top Solar EPC Companies in India for Industrial Projects — 2026" />
                <meta
                    property="og:description"
                    content="Ranked guide to the top solar EPC companies in India for industrial projects in 2026. Evaluated on capacity, track record, O&M, panel quality, and financing options."
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/top-solar-epc-companies-india-industrial-projects" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:image" content="https://www.headsupb2b.com/Top-Solar-EPC-Companies.webp" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Top Solar EPC Companies in India for Industrial Projects — 2026" />
                <meta
                    name="twitter:description"
                    content="Ranked guide to the top solar EPC companies in India for industrial projects in 2026. Evaluated on capacity, track record, O&M, panel quality, and financing options."
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
                        2026 Updated Guide
                    </span>
                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[54px] leading-[1.15] text-white mb-6 max-w-[760px]">
                        Top Solar EPC Companies in India for Industrial Projects — 2026
                    </h1>
                    <p className="text-[18px] text-[rgba(255,255,255,0.65)] max-w-[640px] leading-[1.65] mb-4">
                        Ranked guide for plant owners &amp; procurement heads shortlisting EPC vendors.
                    </p>
                    <p className="text-[15px] text-[rgba(255,255,255,0.55)] max-w-[640px] leading-[1.65] mb-9">
                        Evaluated on: capacity, track record, O&amp;M, panel quality, and financing options.
                    </p>
                    <div className="flex flex-wrap items-center gap-7 text-[13px]">
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            Updated{" "}
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">May 2026</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">9 min read</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">
                                C&amp;I / Industrial focus
                            </strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">
                                18,400 readers/mo
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
                        Free Service
                    </div>
                    <h3 className="font-serif text-[22px] text-[#1A1410] mb-2 leading-tight">
                        Get Free Quotes from Verified Solar EPC Vendors
                    </h3>
                    <p className="text-[14.5px] text-[#7A6E62] leading-[1.6] mb-4">
                        Share your requirement once — receive 3-5 competitive quotes within 48 hours. No spam.
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
                        Get Free Quotes Now →
                    </button>
                </div>

                {/* TOC */}
                <nav className="border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-8 py-7 mb-[56px] rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7A6E62] mb-4">
                        In this guide
                    </div>
                    <ol className="list-none grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[14px]">
                        <li>
                            <a
                                href="#context"
                                className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]"
                            >
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                    01
                                </span>
                                Why choosing the right partner matters
                            </a>
                        </li>
                        <li>
                            <a
                                href="#ranked-list"
                                className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]"
                            >
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                    02
                                </span>
                                The 8 best solar EPC companies
                            </a>
                        </li>
                        <li>
                            <a
                                href="#comparison"
                                className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]"
                            >
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                    03
                                </span>
                                Quick comparison table
                            </a>
                        </li>
                        <li>
                            <a
                                href="#checklist"
                                className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]"
                            >
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                    04
                                </span>
                                9-point pre-signing checklist
                            </a>
                        </li>
                        <li>
                            <a
                                href="#faq"
                                className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]"
                            >
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                    05
                                </span>
                                FAQ — common buyer questions
                            </a>
                        </li>
                        <li>
                            <a
                                href="#get-quotes"
                                className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]"
                            >
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                    06
                                </span>
                                Get free vendor quotes
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* SECTION 1 — CONTEXT */}
                <Section
                    id="context"
                    number="Context"
                    title="Why Choosing the Right Solar EPC Partner Matters in 2026"
                >
                    <p>
                        Selecting a solar EPC contractor is one of the highest-stakes procurement decisions a
                        plant owner makes. The wrong vendor can mean delayed commissioning, substandard panel
                        quality, and years of underperformance — costing crores in lost savings.
                    </p>
                    <p>
                        With India's C&amp;I solar market projected to cross Rs 1.2 lakh crore by 2027, the
                        number of vendors has exploded. We evaluated companies on six criteria:{" "}
                        <strong>Installed Capacity</strong>, <strong>Industrial Track Record</strong>,{" "}
                        <strong>O&amp;M Capabilities</strong>, <strong>Tier-1 Panel Access</strong>,{" "}
                        <strong>Pan-India Presence</strong>, and <strong>Financing/RESCO options</strong>.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mt-8 mb-2 max-[580px]:grid-cols-2">
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                            <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                <span className="text-[#C8900A]">Rs 1.2</span> L Cr
                            </div>
                            <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                Projected size of India's C&amp;I solar market by 2027
                            </div>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                            <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                <span className="text-[#C8900A]">6</span>
                            </div>
                            <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                Evaluation criteria used to rank EPC vendors
                            </div>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4 max-[580px]:col-span-2 max-[580px]:max-w-[260px]">
                            <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                <span className="text-[#C8900A]">8</span>
                            </div>
                            <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                Top EPC companies shortlisted for industrial projects
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SECTION 2 — RANKED LIST */}
                <Section
                    id="ranked-list"
                    number="Ranked List"
                    title="The 8 Best Solar EPC Companies for Industrial Projects"
                >
                    <p>
                        The companies below are ranked on a composite score across capacity, industrial track
                        record, O&amp;M, panel quality, geographic coverage, and financing flexibility. Use the
                        ratings, statistics, strengths, and considerations under each card to shortlist the
                        vendors that best fit your plant size, location, and capex preference.
                    </p>

                    <div className="mt-10">
                        {companies.map((c) => (
                            <CompanyCard key={c.rank} {...c} />
                        ))}
                    </div>
                </Section>

                {/* SECTION 3 — COMPARISON TABLE */}
                <Section
                    id="comparison"
                    number="Side-by-Side"
                    title="Quick Comparison Table"
                >
                    <p>
                        Use this side-by-side view to filter your shortlist quickly by minimum project size,
                        RESCO availability, in-house O&amp;M, financing support, and pricing band.
                    </p>

                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14.5px]">
                            <thead>
                                <tr>
                                    {[
                                        "Company",
                                        "Rating",
                                        "Scale",
                                        "RESCO",
                                        "O&M",
                                        "Financing",
                                        "Pricing",
                                    ].map((h) => (
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

                    <Callout variant="tip" title="Tip: Always request PVSyst yield simulations">
                        Always shortlist 3 vendors and request PVSyst yield simulations (not just Excel models)
                        as part of the technical bid. This single step eliminates ~60% of low-quality vendors who
                        cannot produce bankable yield assessments.
                    </Callout>
                </Section>

                {/* SECTION 4 — CHECKLIST */}
                <Section
                    id="checklist"
                    number="Buyer's Guide"
                    title="9-Point Checklist Before You Sign an EPC Contract"
                >
                    <p>
                        Run every shortlisted vendor through these nine items before you sign the contract.
                        Skipping any one of them is the most common source of post-commissioning disputes and
                        underperformance claims.
                    </p>

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
                            Not sure which vendor fits your plant?
                        </h3>
                        <p className="text-[14.5px] text-[rgba(255,255,255,0.65)] max-w-[480px] mx-auto mb-5">
                            Describe your requirement — our team matches you with 3 pre-vetted EPCs within 24
                            hours.
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
                            Match Me to a Vendor →
                        </button>
                    </div>
                </Section>

                {/* SECTION 5 — FAQ */}
                <Section id="faq" number="FAQ" title="Common Questions from Industrial Buyers">
                    <p>
                        The questions below come up in nearly every industrial solar procurement we've observed.
                        Use these answers to align your internal stakeholders — finance, plant operations, and
                        procurement — before you go to RFQ.
                    </p>

                    <div className="mt-8 space-y-5">
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-6">
                            <h4 className="text-[16px] font-semibold text-[#1A1410] mb-3 leading-tight">
                                What is a fair Rs/Wp benchmark for industrial rooftop solar in 2026?
                            </h4>
                            <p className="text-[15px] text-[#3D3328] leading-[1.7] m-0">
                                For a quality EPC using Tier-1 panels and string inverters, expect Rs 32-42 per
                                Wp for projects between 500 kW and 5 MW. Ground-mounted projects above 5 MW
                                typically come in at Rs 28-36/Wp. Bids below Rs 28/Wp should be scrutinised
                                carefully for component quality.
                            </p>
                        </div>

                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-6">
                            <h4 className="text-[16px] font-semibold text-[#1A1410] mb-3 leading-tight">
                                Should we go CAPEX or RESCO/PPA model?
                            </h4>
                            <p className="text-[15px] text-[#3D3328] leading-[1.7] m-0">
                                CAPEX ownership gives you the full financial benefit (typically 18-22% IRR) and
                                is better if you have internal capital or solar financing access. RESCO/PPA is
                                ideal if your CFO prefers OpEx treatment, or if you're uncertain about occupying
                                the facility for 15+ years. Many large industrials now do hybrid — CAPEX for
                                owned, RESCO for leased facilities.
                            </p>
                        </div>

                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-6">
                            <h4 className="text-[16px] font-semibold text-[#1A1410] mb-3 leading-tight">
                                How long does a 1 MW industrial solar plant take to commission?
                            </h4>
                            <p className="text-[15px] text-[#3D3328] leading-[1.7] m-0">
                                Typically 60-90 days from purchase order to commissioning for a rooftop project,
                                and 90-150 days for ground-mounted. Delays most commonly arise from DISCOM
                                net-metering approvals and structural audit clearances — experienced EPCs who
                                handle these in-house are meaningfully faster.
                            </p>
                        </div>

                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-6">
                            <h4 className="text-[16px] font-semibold text-[#1A1410] mb-3 leading-tight">
                                Which states have the best net metering policies for industry in 2026?
                            </h4>
                            <p className="text-[15px] text-[#3D3328] leading-[1.7] m-0">
                                Gujarat, Rajasthan, Karnataka, and Tamil Nadu have the most industry-friendly
                                net metering frameworks. Maharashtra and Andhra Pradesh have improved
                                significantly. UP and Bihar have the most complex approval processes and are
                                best handled with an experienced local EPC.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* FINAL CTA */}
                <div
                    id="get-quotes"
                    className="bg-headupb2b rounded-[8px] px-10 py-12 mt-16 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-headupb2b" />
                    <h2 className="font-serif text-[28px] text-white mb-3">
                        Get Free Quotes from Verified Solar EPC Vendors
                    </h2>
                    <p className="text-[16px] text-[rgba(255,255,255,0.7)] max-w-[520px] mx-auto mb-2">
                        Tell us your plant location, load (kW), and CAPEX/RESCO preference.
                    </p>
                    <p className="text-[16px] text-[rgba(255,255,255,0.6)] max-w-[520px] mx-auto mb-7">
                        We'll send 3-5 pre-screened vendor proposals at no cost, no obligation.
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
                        Get Free Quotes Now →
                    </button>
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-6 text-[12px] text-[rgba(255,255,255,0.55)]">
                        <span className="flex items-center gap-1.5">
                            <span className="text-[#00d4f5]">✓</span> Verified vendors
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="text-[#00d4f5]">✓</span> Quotes in 48 hrs
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="text-[#00d4f5]">✓</span> No spam
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="text-[#00d4f5]">✓</span> 100% free
                        </span>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-16 pt-7 border-t border-[#E8E0D4] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[13px] text-[#7A6E62]">
                        © 2026 Headsup Corporation Pvt. Ltd.
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {["EPC", "Solar", "Industrial", "C&I", "India", "RESCO"].map((t) => (
                            <span
                                key={t}
                                className="text-[11px] font-semibold uppercase tracking-[0.07em] px-2.5 py-1 border border-[#E8E0D4] rounded-[3px] text-[#7A6E62]"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </main>

            {showQuoteForm && (
                <GetInTouch
                    onClose={() => setShowQuoteForm(false)}
                    title="Get Free Quotes from Verified Solar EPC Vendors 🚀"
                />
            )}
        </>
    );
}