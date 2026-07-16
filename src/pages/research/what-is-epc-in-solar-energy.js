"use client";

import Head from "next/head";
import Link from "next/link";

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
    return (
        <>
            <Head>
                <title>What is EPC in Solar Energy? 2026 Guide for B2B Companies</title>
                <meta
                    name="description"
                    content="Learn what EPC means in solar energy and how EPC contracts work in India. A complete 2026 guide for B2B companies covering procurement, contractors, project lifecycle, and business opportunities."
                />
                <meta
                    name="keywords"
                    content="EPC solar energy, solar EPC guide, B2B solar procurement, solar project contracting, EPC contractors India, solar EPC buyers"
                />
                <link rel="canonical" href="https://www.headsupb2b.com/research/what-is-epc-in-solar-energy" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="What is EPC in Solar Energy? 2026 Guide for B2B Companies" />
                <meta
                    property="og:description"
                    content="Learn what EPC means in solar energy and how EPC contracts work in India. A complete 2026 guide for B2B companies covering procurement, contractors, project lifecycle, and business opportunities."
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/what-is-epc-in-solar-energy" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:image" content="https://www.headsupb2b.com/solarEnergy.webp" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="What is EPC in Solar Energy? 2026 Guide for B2B Companies" />
                <meta
                    name="twitter:description"
                    content="Learn what EPC means in solar energy and how EPC contracts work in India. A complete 2026 guide for B2B companies covering procurement, contractors, project lifecycle, and business opportunities."
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
                        Solar Industry Guide
                    </span>
                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[54px] leading-[1.15] text-white mb-6 max-w-[720px]">
                        What is EPC in Solar Energy? A Complete Guide for B2B Companies
                    </h1>
                    <p className="text-[18px] text-[rgba(255,255,255,0.65)] max-w-[600px] leading-[1.65] mb-9">
                        Everything procurement teams, project developers, and B2B suppliers need to know about Engineering, Procurement &amp; Construction contracts in the solar sector.
                    </p>
                    <div className="flex flex-wrap items-center gap-7 text-[13px]">
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            <strong className="text-[rgba(255,255,255,0.75)] font-medium">15 min read</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            Updated <strong className="text-[rgba(255,255,255,0.75)] font-medium">April 2026</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                            <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                            For <strong className="text-[rgba(255,255,255,0.75)] font-medium">B2B Solar Buyers &amp; Vendors</strong>
                        </span>
                    </div>
                </div>
            </section>

            {/* PAGE BODY */}
            <main className="max-w-[820px] mx-auto px-8 pb-[100px] bg-[#FDFAF6] max-sm:px-4">
                {/* TOC */}
                <nav className="border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-8 py-7 mt-[52px] mb-[56px] rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7A6E62] mb-4">
                        In this guide
                    </div>
                    <ol className="list-none grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[14px]">
                        <li>
                            <a href="#what-is-epc" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">01</span>
                                What is EPC in solar?
                            </a>
                        </li>
                        <li>
                            <a href="#three-phases" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">02</span>
                                The three phases explained
                            </a>
                        </li>
                        <li>
                            <a href="#epc-vs-other" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">03</span>
                                EPC vs other contract models
                            </a>
                        </li>
                        <li>
                            <a href="#who-are-epc" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">04</span>
                                Who are EPC contractors?
                            </a>
                        </li>
                        <li>
                            <a href="#buyers" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">05</span>
                                Key buyers in India
                            </a>
                        </li>
                        <li>
                            <a href="#how-it-works" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">06</span>
                                How a solar EPC project works
                            </a>
                        </li>
                        <li>
                            <a href="#materials" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">07</span>
                                Materials &amp; components
                            </a>
                        </li>
                        <li>
                            <a href="#om" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">08</span>
                                O&amp;M: life after EPC
                            </a>
                        </li>
                        <li>
                            <a href="#b2b-opportunities" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">09</span>
                                B2B opportunities
                            </a>
                        </li>
                        <li>
                            <a href="#how-to-win" className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">10</span>
                                How to win EPC business
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* SECTION 1 */}
                <Section id="what-is-epc"  title="What is EPC in solar energy?">
                    <p>
                        <strong>EPC stands for Engineering, Procurement, and Construction.</strong> It is the most widely
                        used contract model for building large-scale solar power plants in India and globally. Under an
                        EPC contract, a single contractor — the EPC contractor — is responsible for the complete
                        delivery of a solar project: from technical design all the way through to commissioning a fully
                        operational plant.
                    </p>

                    <p>
                        For B2B companies — whether you are a solar panel manufacturer, a mounting structure supplier, a
                        cable vendor, or an inverter distributor — understanding how EPC contracts work is essential.
                        EPC contractors are your primary customers in the B2B solar supply chain. They source equipment,
                        manage civil works, and handle every phase of construction.
                    </p>

                    <blockquote className="border-l-[3px] border-[#C8900A] my-9 px-7 py-5 bg-[#FDF3DC] rounded-r-md">
                        <p className="font-serif text-[22px] leading-[1.45] text-[#1A1410] italic m-0">
                            "In the Indian solar market, winning an EPC contract worth ₹100 Cr to ₹1,200 Cr is not uncommon. The supply chain behind each of those projects runs into dozens of B2B vendors."
                        </p>
                    </blockquote>

                    <div className="grid grid-cols-3 gap-4 mt-8 mb-2 max-[580px]:grid-cols-2">
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                            <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                <span className="text-[#C8900A]">₹1,217</span> Cr
                            </div>
                            <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                Largest single solar EPC award in Gujarat (Coal India, 300 MW)
                            </div>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                            <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                <span className="text-[#C8900A]">600</span> MW
                            </div>
                            <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                Combined capacity in NTPC Khavda EPC project (2 × 300 MW blocks)
                            </div>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4 max-[580px]:col-span-2 max-[580px]:max-w-[260px]">
                            <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                <span className="text-[#C8900A]">4,015</span> days
                            </div>
                            <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                Longest contract period on record in Gujarat solar project data
                            </div>
                        </div>
                    </div>

                    <p>
                        The EPC model shifts project risk from the buyer (the awarding authority, such as NTPC or a
                        state utility) to the EPC contractor. The buyer specifies the output — a functioning solar plant
                        of a certain capacity — and the EPC contractor is accountable for delivering it, on time and
                        within budget.
                    </p>
                </Section>


                {/* SECTION 2 */}
                <Section id="three-phases"  title="The three phases of an EPC contract">
                    <p>
                        Every EPC contract — whether for a 1 MW rooftop system or a 600 MW utility-scale project — is
                        structured around three core phases. Understanding each phase tells you exactly where your
                        product or service fits in the supply chain.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] mt-8 mb-3 bg-[#E8E0D4] border border-[#E8E0D4] rounded-[6px] overflow-hidden">
                        <div className="bg-white p-7 relative border-b-[3px] border-b-[#C8900A]">
                            <span className="block font-serif text-[52px] text-[#FDF3DC] leading-none mb-1">
                                01
                            </span>
                            <span className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-[#C8900A] mb-2.5">
                                E — Engineering
                            </span>
                            <h4 className="text-[17px] font-semibold text-[#1A1410] mb-2.5">
                                Design &amp; Technical Planning
                            </h4>
                            <p className="text-[13.5px] text-[#7A6E62] leading-[1.6] m-0">
                                The EPC contractor develops detailed engineering drawings, layout plans, electrical
                                schematics, and structural calculations. This phase determines what equipment is needed
                                and in what specifications.
                            </p>
                        </div>
                        <div className="bg-white p-7 relative border-b-[3px] border-b-[#0A6E5C]">
                            <span className="block font-serif text-[52px] text-[#FDF3DC] leading-none mb-1">
                                02
                            </span>
                            <span className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-[#C8900A] mb-2.5">
                                P — Procurement
                            </span>
                            <h4 className="text-[17px] font-semibold text-[#1A1410] mb-2.5">
                                Equipment &amp; Material Sourcing
                            </h4>
                            <p className="text-[13.5px] text-[#7A6E62] leading-[1.6] m-0">
                                All materials — solar panels, inverters, mounting structures, cables, junction boxes —
                                are sourced, purchased, and delivered to site. This is where B2B vendors are engaged
                                most directly.
                            </p>
                        </div>
                        <div className="bg-white p-7 relative border-b-[3px] border-b-[#14407A]">
                            <span className="block font-serif text-[52px] text-[#FDF3DC] leading-none mb-1">
                                03
                            </span>
                            <span className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-[#C8900A] mb-2.5">
                                C — Construction
                            </span>
                            <h4 className="text-[17px] font-semibold text-[#1A1410] mb-2.5">
                                Installation &amp; Commissioning
                            </h4>
                            <p className="text-[13.5px] text-[#7A6E62] leading-[1.6] m-0">
                                Civil foundations are built, structures are erected, panels mounted, electrical systems
                                connected, and the plant tested. The project is handed over to the buyer only after
                                successful commissioning.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Engineering phase in detail
                    </h3>
                    <p>
                        Engineering is the foundation of the entire project. During this phase, the EPC contractor
                        conducts site surveys, performs solar resource assessments, finalises the layout of panel
                        arrays, and produces complete design documentation. For large projects (10 MW and above), this
                        phase alone can take 3–6 months.
                    </p>
                    <p>
                        From a B2B vendor perspective, the engineering phase is when equipment specifications get locked
                        in. If you are a solar panel manufacturer, your product must match the watt-peak (Wp),
                        efficiency, and certification requirements defined during engineering. Vendors who engage EPC
                        contractors during the engineering phase — offering technical specifications and samples early —
                        win more procurement deals.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Procurement phase in detail
                    </h3>
                    <p>
                        This is the highest-value phase for B2B suppliers. The EPC contractor issues purchase orders,
                        negotiates prices, arranges logistics, and manages delivery schedules for every component the
                        project needs. For a 100 MW solar plant, procurement typically spans 40–60 different product
                        categories.
                    </p>

                    <Callout variant="tip" title="B2B tip: Get empanelled before tenders close">
                        Most EPC contractors maintain preferred vendor lists (PVLs). If your company is not on the PVL
                        before a project is tendered, you are unlikely to receive an enquiry. Approach EPC contractors
                        6–12 months before large tenders are expected to close.
                    </Callout>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Construction phase in detail
                    </h3>
                    <p>
                        During construction, the EPC contractor manages civil works (foundations, trenching, roads),
                        mechanical installation (mounting structures, panel fixing), and electrical works (cabling,
                        inverter connections, switchgear, grid interconnection). For utility-scale projects,
                        construction can run concurrently across multiple zones on site, with hundreds of workers and
                        subcontractors active at the same time.
                    </p>
                    <p>
                        For equipment vendors, construction is where after-sales support matters. Timely delivery,
                        responsive technical support, and on-site assistance during commissioning directly influence
                        whether you get repeat orders from the same EPC contractor.
                    </p>
                </Section>


                {/* SECTION 3 */}
                <Section id="epc-vs-other"  title="EPC vs other solar contract models">
                    <p>
                        Not all solar projects are structured as pure EPC contracts. In India, especially under
                        government schemes like PM-KUSUM, alternative models are common. B2B vendors need to understand
                        the differences because each model creates a different buying dynamic.
                    </p>

                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14.5px]">
                            <thead>
                                <tr>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">
                                        Model
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        Who pays for the plant?
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        Who owns the plant?
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        Revenue model
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        B2B impact
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        EPC (Fixed Price)
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Buyer (government / PSU)
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Buyer
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Lump sum + O&amp;M fee
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#D3EDDF] text-[#1A6B3A]">
                                            High volume
                                        </span>
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        RESCO (Tariff-based)
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Developer / private investor
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Developer (until PPA ends)
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Per-unit electricity tariff
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#FEF0D0] text-[#7A4A0A]">
                                            Developer decides specs
                                        </span>
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        BOOT
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Developer
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Developer → transfers to buyer
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Tariff for contract period
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#FEF0D0] text-[#7A4A0A]">
                                            Long-term relationship
                                        </span>
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        O&amp;M Only
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        N/A (plant already built)
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Buyer / utility
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Annual maintenance fee
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#FAEAEA] text-[#B83232]">
                                            Spares &amp; services only
                                        </span>
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        BOS Package
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Main EPC contractor
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Buyer
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Subcontract lump sum
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#D3EDDF] text-[#1A6B3A]">
                                            Component-level supply
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Callout variant="info" title="What is BOS (Balance of System)?">
                        BOS refers to all components of a solar plant except the panels themselves — inverters, mounting
                        structures, cables, junction boxes, earthing, civil foundations, and monitoring systems. Large
                        EPC contracts often sub-divide BOS work into a separate package awarded to an associate or
                        subcontractor. Bridge &amp; Roof Company India, for example, has awarded BOS packages worth ₹136
                        Cr for NTPC&apos;s 600 MW Khavda project.
                    </Callout>
                </Section>


                {/* SECTION 4 */}
                <Section id="who-are-epc"  title="Who are EPC contractors in the Indian solar market?">
                    <p>
                        EPC contractors range from large public sector undertakings (PSUs) to mid-size private
                        companies. Understanding which type of EPC contractor is most relevant to your product or
                        service helps you target your B2B sales efforts more precisely.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">PSU EPC contractors</h3>
                    <p>
                        Public sector companies like NTPC, BHEL, Bridge &amp; Roof Company India, ONGC, and Coal India
                        execute solar projects either for themselves or for other government bodies. They follow
                        structured procurement processes, often through the GEM portal or CPPP, and require vendors to
                        meet strict pre-qualification criteria.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">Private EPC contractors</h3>
                    <p>
                        Private EPC contractors — which include companies like Kosol Energie, GHV India, Phaloudi
                        Constructions, Avirat Energy, and dozens of regional players — are typically more agile in
                        procurement. They often source equipment through competitive quotations and are more open to
                        relationship-based vendor engagement.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Subcontract EPC (associate model)
                    </h3>
                    <p>
                        In large projects, a primary contractor (like Bridge &amp; Roof) awards a BOS subcontract to an
                        associate firm (like Phaloudi Constructions or GHV India). For B2B vendors, this creates two
                        levels of engagement opportunity: directly with the prime contractor and with the subcontractor.
                    </p>
                </Section>


                {/* SECTION 5 */}
                <Section id="buyers"  title="Key solar EPC buyers in India">
                    <p>
                        In the Indian context, EPC contractors are awarded projects by awarding authorities — central
                        PSUs, state utilities, government departments, and urban local bodies. Each buyer type has a
                        different procurement process and creates different supply chain opportunities.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 mb-2">
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">
                                Central PSU
                            </div>
                            <div className="text-[14px] font-semibold text-[#1A1410] mb-1">
                                NTPC Limited
                            </div>
                            <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">
                                One of the largest solar project developers in India. Awards EPC and O&amp;M contracts
                                for utility-scale projects ranging from 20 MW to 600 MW+. Uses the GEM portal and open
                                tenders.
                            </p>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">
                                Central PSU
                            </div>
                            <div className="text-[14px] font-semibold text-[#1A1410] mb-1">
                                Coal India Limited
                            </div>
                            <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">
                                Recently awarded a ₹1,217 Cr EPC contract for 300 MW solar capacity in Gujarat through
                                GUVNL. Signaling major expansion into renewables alongside its core mining business.
                            </p>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">
                                Central PSU
                            </div>
                            <div className="text-[14px] font-semibold text-[#1A1410] mb-1">
                                ONGC
                            </div>
                            <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">
                                Procures floating and ground-mounted solar for its industrial facilities. Awarded a
                                ₹25.88 Cr floating solar project at Hazira, Surat with 7-year O&amp;M included.
                            </p>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">
                                PSU / Manufacturer
                            </div>
                            <div className="text-[14px] font-semibold text-[#1A1410] mb-1">
                                BHEL
                            </div>
                            <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">
                                Both executes EPC projects and awards subcontracts. Engaged in BOS supply for Gujarat
                                solar projects, creating opportunities for component manufacturers to enter its supply
                                chain.
                            </p>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">
                                State Utility
                            </div>
                            <div className="text-[14px] font-semibold text-[#1A1410] mb-1">
                                GUVNL / GSECL
                            </div>
                            <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">
                                Gujarat&apos;s state utility is one of the most active solar procurement bodies. Awards
                                EPC contracts for the Khavda RE Park and other state-level projects under both ISTS and
                                distribution-connected frameworks.
                            </p>
                        </div>
                        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">
                                Urban / Municipal
                            </div>
                            <div className="text-[14px] font-semibold text-[#1A1410] mb-1">
                                Nagarpalika &amp; ULBs
                            </div>
                            <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">
                                Urban local bodies award rooftop solar EPC contracts in the ₹1–5 Cr range — smaller but
                                more numerous. These are often funded through Urban Development departments and use the
                                GEM portal.
                            </p>
                        </div>
                    </div>
                </Section>


                {/* SECTION 6 */}
                <Section
                    id="how-it-works"
                    title="How a solar EPC project works: from tender to commissioning"
                >
                    <p>
                        For B2B companies trying to enter or expand within the solar supply chain, understanding the
                        full project lifecycle is critical. Here is how a typical solar EPC project unfolds from the
                        awarding authority&apos;s first tender notice to the day the plant starts generating
                        electricity.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Stage 1: Tender issuance
                    </h3>
                    <p>
                        The awarding authority (for example, NTPC or a Nagarpalika) publishes a tender on the GEM
                        portal, CPPP, or BidAssist. The tender document specifies the project capacity, location,
                        contract period, technical requirements, and evaluation criteria. This is when early vendor
                        intelligence is most valuable — knowing which EPC contractors are likely to bid tells you who to
                        approach for supply inquiries.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Stage 2: Technical bid opening
                    </h3>
                    <p>
                        Interested EPC contractors submit their technical bids. Awarding authorities evaluate technical
                        qualifications — experience, financial strength, technical compliance — before opening financial
                        bids. Vendors who have pre-qualified with shortlisted EPC bidders are best positioned to receive
                        purchase orders.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Stage 3: Financial bid and award
                    </h3>
                    <p>
                        After technical evaluation, financial bids are opened. The lowest technically-compliant bidder
                        typically wins. The Award of Contract (AOC) is issued, and the EPC contract is signed. For B2B
                        vendors, this is the trigger to follow up aggressively — the EPC contractor now has confirmed
                        funding and will begin procurement planning immediately.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Stage 4: Procurement and mobilisation
                    </h3>
                    <p>
                        The EPC contractor begins issuing RFQs (requests for quotation), purchase orders, and advance
                        payments to vendors. Site mobilisation — establishing temporary offices, access roads, and
                        storage yards — also begins in parallel.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Stage 5: Construction and installation
                    </h3>
                    <p>
                        Civil works (foundations, cable trenching), mechanical installation (mounting structures, panel
                        fixing), and electrical works (inverter connections, switchgear, transmission lines) proceed
                        according to the construction schedule. Phased completion and progressive commissioning are
                        common on projects above 50 MW.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Stage 6: Testing, commissioning and handover
                    </h3>
                    <p>
                        The plant undergoes performance ratio testing, string-level electrical checks, and grid
                        synchronisation before final handover. The EPC contractor&apos;s liability for defects (the
                        defect liability period, or DLP) typically begins from commissioning.
                    </p>

                    <Callout variant="warn" title="Delivery timing is critical">
                        EPC contractors face liquidated damages (LDs) if they miss commissioning deadlines. This
                        pressure flows directly to vendors — late equipment delivery can cost an EPC contractor crores
                        in penalties. Reliable delivery timelines are as important as competitive pricing in solar B2B
                        procurement.
                    </Callout>
                </Section>


                {/* SECTION 7 */}
                <Section id="materials"  title="Materials &amp; components in a solar EPC project">
                    <p>
                        A solar EPC project is only as good as the components that go into it. Below is a comprehensive
                        overview of the materials typically procured in Indian utility-scale and rooftop solar EPC
                        projects — and what specification standards apply.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">Solar panels</h3>
                    <p>
                        The dominant specification in 2025 is Mono-PERC panels in the 550–575 Wp range for
                        ground-mounted projects. Panels must comply with IEC 61215, IEC 61730, and — for government
                        projects — must be on the ALMM (Approved List of Models and Manufacturers) maintained by the
                        Ministry of New and Renewable Energy (MNRE). Bifacial panels are increasingly specified for
                        open-land projects due to their higher yield.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">Mounting structures</h3>
                    <p>
                        Hot-dip galvanised (HDG) steel mounting structures are the standard for ground-mounted solar in
                        India, due to the combination of structural strength and corrosion resistance required over a
                        25-year project life. Fixed-tilt structures dominate on cost grounds, though single-axis
                        trackers are specified for projects in high-irradiance zones like Rajasthan and Gujarat where
                        the additional yield justifies the cost.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">Inverters</h3>
                    <p>
                        String inverters are dominant for rooftop and small ground-mounted projects (up to 5 MW). Central
                        inverters (500 kW to 3 MW units) remain common for utility-scale projects. Grid-tie inverters
                        must comply with IEC 62109 and CEA grid connectivity standards. For PM-KUSUM projects, inverters
                        must be ALMM-listed.
                    </p>

                    <ul className="list-none mt-5 mb-7">
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            DC solar cables (flame-retardant, UV-resistant, TUV-certified)
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            AC armoured cables (for connection to grid evacuation point)
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            Array junction boxes (AJB) for string combiner functions
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            DC distribution boards (DCDB) and AC distribution boards (ACDB)
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            Earthing kits (copper bonded rods, conductors, exothermic welding kits)
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            Lightning arrestors (as per IS 3043 and IEC 62305)
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            Cable trays (hot-dip galvanised or stainless for outdoor runs)
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            RCC pedestal foundations (for mounting structure bases)
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            Module cleaning systems (manual or automated, depending on project size)
                        </li>
                        <li className="pl-8 py-2.5 border-b border-[#E8E0D4] text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            Remote Monitoring Systems (RMS) — mandatory for PM-KUSUM projects
                        </li>
                        <li className="pl-8 py-2.5  text-[15px] text-[#3D3328] relative">
                            <span className="absolute left-0 top-[11px] w-4 h-4 border-[1.5px] border-[#C8900A] rounded-[3px] bg-[#FDF3DC]" />
                            <span className="absolute left-[3px] top-[9px] text-[10px] font-bold text-[#C8900A]">✓</span>
                            Safety signages and PPE kits (as per MNRE and OHSAS requirements)
                        </li>
                    </ul>
                </Section>


                {/* SECTION 8 */}
                <Section id="om" title="Operation &amp; Maintenance: life after EPC">
                    <p>
                        In India&apos;s solar market, O&amp;M (Operation and Maintenance) is increasingly bundled into
                        EPC contracts rather than being awarded separately. Understanding the O&amp;M component helps
                        B2B companies identify recurring revenue opportunities well beyond the initial equipment sale.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        Types of O&amp;M contracts
                    </h3>
                    <p>The most common O&amp;M structures in Indian government solar projects are:</p>
                    <p>
                        <strong>Comprehensive O&amp;M (CAMC):</strong> The EPC contractor (or a specialist O&amp;M firm)
                        is responsible for all aspects of plant maintenance, including labour, consumables, and
                        replacement of failed components. This is the standard for projects above 10 MW.
                    </p>
                    <p>
                        <strong>Annual Maintenance Contract (AMC):</strong> Labour is covered but spare parts are billed
                        separately. More common for smaller rooftop projects.
                    </p>
                    <p>
                        <strong>Long-term O&amp;M (25-year RESCO model):</strong> Under PM-KUSUM RESCO contracts, the
                        developer is responsible for O&amp;M for the full 25-year project life as part of the tariff
                        agreement.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        O&amp;M durations in government contracts
                    </h3>
                    <p>
                        Contract data from Gujarat shows that O&amp;M periods bundled with EPC range from 1 year (for
                        small rooftop projects) up to 7 years (ONGC floating solar at Hazira). The NTPC Kawas solar
                        O&amp;M contract covered operations for 2 years after commissioning.
                    </p>

                    <Callout variant="tip" title="O&amp;M creates recurring B2B demand">
                        Every commissioned solar plant creates ongoing demand for: replacement modules, inverter spare
                        parts, cable repair kits, cleaning chemicals, earthing consumables, and monitoring system
                        upgrades. Building relationships with O&amp;M contractors — not just EPC contractors — opens a
                        second, recurring revenue stream for B2B suppliers.
                    </Callout>
                </Section>


                {/* SECTION 9 */}
                <Section id="b2b-opportunities"  title="B2B opportunities within solar EPC projects">
                    <p>
                        The solar EPC market in India creates opportunities across a wide range of product and service
                        categories. Here is how different B2B companies can position themselves within the EPC supply
                        chain.
                    </p>

                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14.5px]">
                            <thead>
                                <tr>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">
                                        Company type
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        Where you fit in EPC
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        Key buyers
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        Deal size range
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        Solar panel manufacturer
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Procurement phase — supply to EPC
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        EPC contractors, BOS subcontractors
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        ₹5 Cr – ₹500 Cr+
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        Mounting structure fabricator
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Procurement &amp; construction phase
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        EPC contractors, civil subcontractors
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        ₹50 L – ₹80 Cr
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        Inverter manufacturer / distributor
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Procurement phase
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        EPC contractors, RESCO developers
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        ₹30 L – ₹50 Cr
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        Cable &amp; wire manufacturer
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Procurement phase
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        EPC contractors, electrical subcontractors
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        ₹20 L – ₹30 Cr
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        Civil contractor
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Construction phase (foundations, trenching)
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        EPC prime contractors
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        ₹1 Cr – ₹40 Cr
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        Electrical contractor
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Construction phase (cabling, switchgear)
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        EPC prime contractors
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        ₹50 L – ₹20 Cr
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                        O&amp;M service provider
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Post-commissioning phase
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        Plant owners (utilities, PSUs)
                                    </td>
                                    <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                        ₹30 L – ₹5 Cr per year
                                    </td>
                                </tr>
                                <tr className="even:bg-[#FDFAF6]">
                                    <td className="px-4 py-3  font-medium text-[#1A1410]">
                                        RMS / monitoring software
                                    </td>
                                    <td className="px-4 py-3  text-[#3D3328]">
                                        Procurement &amp; O&amp;M phase
                                    </td>
                                    <td className="px-4 py-3  text-[#3D3328]">
                                        EPC contractors, plant operators
                                    </td>
                                    <td className="px-4 py-3  text-[#3D3328]">
                                        ₹5 L – ₹2 Cr
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>


                {/* SECTION 10 */}
                <Section
                    id="how-to-win"
                    title="How to win B2B business from solar EPC contractors"
                >
                    <p>
                        Understanding EPC is one thing. Converting that knowledge into orders is another. Here are the
                        most effective approaches for B2B companies looking to grow their solar EPC business in India.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        1. Track tender awards, not just tender notices
                    </h3>
                    <p>
                        Most B2B vendors focus on active tenders, but the most valuable intelligence is in award data.
                        When a contract is awarded, you know exactly who the EPC contractor is, what the project
                        involves, where it is located, and how large it is. That is when to make contact — not months
                        later when procurement is almost complete.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        2. Use the GEM portal and BidAssist proactively
                    </h3>
                    <p>
                        The Government e-Marketplace (GEM) and platforms like BidAssist publish award notifications with
                        contractor names and contract values. Building a weekly review process for award data in your
                        target states (Gujarat, Rajasthan, UP) gives you a consistent pipeline of warm leads.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        3. Get ALMM-listed if you manufacture panels or inverters
                    </h3>
                    <p>
                        For any government solar project above 10 kW, panels and inverters must come from ALMM-listed
                        manufacturers. If you are not listed, you are ineligible regardless of price. Prioritise ALMM
                        registration as a non-negotiable compliance step.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        4. Offer technical support, not just price
                    </h3>
                    <p>
                        EPC contractors — especially those executing complex projects under tight timelines — value
                        vendors who provide technical datasheets, application engineers, and on-site commissioning
                        support. Companies that reduce the EPC contractor&apos;s technical risk win repeat business even
                        when their price is not the lowest.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">
                        5. Build relationships before projects are tendered
                    </h3>
                    <p>
                        By the time a tender is published, the winning EPC contractor already has preferred vendors in
                        mind. Engage EPC contractors 6–12 months before expected tenders with product demonstrations,
                        site visits, and sample supplies. The relationship built before the project often determines who
                        gets the purchase order.
                    </p>

                    <Callout variant="tip" title="State-wise focus pays off">
                        Gujarat and Rajasthan dominate India&apos;s utility-scale solar pipeline. If you are a B2B
                        vendor looking to enter the solar EPC market, starting with these two states — where the project
                        pipeline is deepest and the contractors most active — gives you the fastest path to your first
                        order.
                    </Callout>
                </Section>

                {/* CTA */}
                <div className="bg-headupb2b rounded-[8px] px-10 py-12 mt-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-headupb2b" />
                    <h2 className="font-serif text-[28px] text-white mb-3">
                        Ready to find your next solar EPC customer?
                    </h2>
                    <p className="text-[16px] text-[rgba(255,255,255,0.6)] max-w-[480px] mx-auto mb-7">
                        We track solar tender awards across Gujarat, Rajasthan, and 20+ Indian states — so you always
                        know who just won a project and needs to start procurement.
                    </p>
                    <Link
                        href="#"
                        style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}

                        className="inline-block bg-[#C8900A] text-white text-[14px] font-semibold px-8 py-3.5 rounded-[4px] tracking-[0.03em]"
                    >
                        Explore Solar B2B Leads →
                    </Link>

                </div>

                {/* FOOTER */}
                <div className="mt-16 pt-7 border-t border-[#E8E0D4] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[13px] text-[#7A6E62]">
                        Published April 2026 · B2B Solar Research Series
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {["EPC", "Solar", "B2B", "India", "Procurement"].map((t) => (
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
        </>
    );
}