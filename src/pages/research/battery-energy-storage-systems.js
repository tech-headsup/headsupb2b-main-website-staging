"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
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

export default function BESSGuidePage() {
    const [showRequestConsultation, setShowRequestConsultation] = useState(false);

    return (
        <>
            <Head>
                <title>BESS for Industrial Buyers & EPC Contractors in India | HeadsUp B2B</title>
                <meta
                    name="description"
                    content="A decision-grade guide to Battery Energy Storage Systems for industrial buyers and EPC contractors in India. Covers technology selection, TCO, vendor evaluation, and India's 92 GWh market. Request a consultation."
                />
                <meta
                    name="keywords"
                    content="BESS India 2026, battery energy storage system, LFP battery storage, BESS EPC India, industrial energy storage, peak demand management, BESS procurement, grid-scale storage India, BESS ROI, energy storage solar"
                />
                <link rel="canonical" href="https://www.headsupb2b.com/research/battery-energy-storage-systems" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

                <meta property="og:type" content="article" />
                <meta property="og:title" content="BESS for Industrial Buyers & EPC Contractors in India | HeadsUp B2B" />
                <meta property="og:description" content="A decision-grade guide to Battery Energy Storage Systems for industrial buyers and EPC contractors in India. Covers technology selection, TCO, vendor evaluation, and India's 92 GWh market." />
                <meta property="og:url" content="https://www.headsupb2b.com/research/battery-energy-storage-systems" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image" content="https://www.headsupb2b.com/BESS.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="BESS Guide 2026 — Headsup B2B" />
                <meta property="article:published_time" content="2026-03-01T00:00:00.000Z" />
                <meta property="article:modified_time" content="2026-03-24T00:00:00.000Z" />
                <meta property="article:author" content="Headsup B2B Research Desk" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="BESS for Industrial Buyers & EPC Contractors in India | HeadsUp B2B" />
                <meta name="twitter:description" content="A decision-grade guide to Battery Energy Storage Systems for industrial buyers and EPC contractors in India. Covers technology selection, TCO, vendor evaluation, and India's 92 GWh market." />
                <meta name="twitter:site" content="@headsupb2b" />
                <meta name="twitter:creator" content="@headsupb2b" />
                <meta name="twitter:image" content="https://www.headsupb2b.com/BESS.jpg" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://www.headsupb2b.com",
                            "@type": "Article",
                            headline: "BESS for Industrial Buyers & EPC Contractors in India | HeadsUp B2B",
                            description: "A decision-grade guide to Battery Energy Storage Systems for industrial buyers and EPC contractors in India. Covers technology selection, TCO, vendor evaluation, and India's 92 GWh market.",
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
                            Energy Infrastructure Series
                        </span>
                        <span
                            className="font-mono text-[10px] tracking-[0.5px] px-2.5 py-1 rounded-full flex items-center gap-1 text-[#34d399]"
                            style={{ background: "rgba(13,110,74,0.15)", border: "1px solid rgba(13,110,74,0.3)" }}
                        >
                            <span className="w-[5px] h-[5px] rounded-full inline-block" style={{ background: "#34d399" }} />
                            March 2026
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-display font-extrabold leading-[1.12] tracking-[-1px] text-[#f5f0e8] max-w-[780px] mb-[18px] text-[46px] max-sm:text-[30px]">
                        Battery Energy Storage Systems (BESS):{" "}
                        <em
                            style={{
                                background: "linear-gradient(90deg,#c4b5fd,#e9d5ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            The Strategic Infrastructure Decision
                        </em>
                        <br />Every Industrial Buyer and EPC Must Get Right
                    </h1>

                    {/* Description */}
                    <p className="text-[17px] text-white italic max-w-[640px] leading-[1.65] mb-8">
                        Energy storage is no longer a future consideration — it is a procurement decision sitting
                        on your desk right now. Written for industrial buyers, EPC contractors, and energy
                        consultants who need decision-grade information.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-8 flex-wrap pt-7 border-t border-[rgba(245,240,232,0.12)] max-sm:gap-5">
                        {[
                            ["$183.7B", "Global BESS Market by 2035"],
                            ["92 GWh", "India BESS Pipeline (2025)"],
                            ["27% CAGR", "India Market Growth 2025–2030"],
                        ].map(([n, l], i) => (
                            <div key={i} className="flex items-center gap-8">
                                {i > 0 && (
                                    <div className="w-px self-stretch" style={{ background: "rgba(245,240,232,0.1)" }} />
                                )}
                                <div className="flex flex-col gap-[3px]">
                                    <div className="font-mono text-2xl font-semibold text-white tracking-[-1px]">{n}</div>
                                    <div className="text-[11px] text-white tracking-[0.5px] uppercase">{l}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-white border-b border-[#e5e0d5] px-8 py-3.5">
                <div className="max-w-[1100px] mx-auto flex items-center gap-6 font-mono text-[11px] text-[#7a7060] flex-wrap">

                    <div className="flex items-center gap-1.5"><span>✍</span> Headsup B2B Research Desk</div>
                    <div className="flex items-center gap-1.5"><span>📅</span> Published: Mar 24, 2026</div>
                    <div className="flex items-center gap-1.5"><span>🔄</span> Last Updated: Mar 24, 2026</div>
                    <div className="flex items-center gap-1.5"><span>🏷</span> Battery · Energy · Storage · Systems · BESS</div>
                    <div className="ml-auto bg-[#f4f1ea] px-2.5 py-1 rounded text-[#c8860a]">⏱ 12 min read</div>
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
                            📋 Table of Contents
                        </div>
                        <ol className="list-none p-0 m-0">
                            {[
                                ["what-is-bess", "What Is BESS — and Why Should Your Organisation Care?"],
                                ["how-bess-works", "How BESS Works — What You Need to Know Technically"],
                                ["key-components", "Key Components — Specification Considerations for Buyers and EPCs"],
                                ["technology", "Choosing the Right Technology — Application-Led Selection"],
                                ["applications", "Applications — Where BESS Delivers the Strongest ROI"],
                                ["india-market", "India Market — Specific Considerations for Domestic Buyers and EPCs"],
                                ["tco", "Total Cost of Ownership — Evaluating Beyond Capex"],
                                ["vendor-eval", "What to Evaluate When Shortlisting BESS Vendors"],
                                ["road-ahead", "The Road Ahead — Technology Trends"],
                                ["faq", "Frequently Asked Questions"],
                            ].map(([id, label], i) => (
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
                    <Section id="what-is-bess" number="01" title="What Is BESS — and Why Should Your Organisation Care?">
                        <p>
                            A Battery Energy Storage System (BESS) captures electrical energy and makes it available on demand.
                            At a fundamental level it is a large-scale rechargeable system — but the value it delivers in an
                            industrial or commercial context goes far beyond backup power.
                        </p>
                        <p>
                            For EPC contractors and industrial buyers, BESS directly affects project economics, grid compliance,
                            energy cost structures, and renewable energy yield — not simply an insurance policy against outages.
                        </p>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-3">The Business Case in Plain Terms</h3>

                        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                            <div className="border border-gray-200 rounded-lg p-5 bg-white">
                                <div className="font-bold text-headupb2b text-[14px] uppercase tracking-[1px] mb-3">
                                    For Industrial & Commercial Buyers
                                </div>
                                <ul className="space-y-2 text-[15px] text-gray-700">
                                    {[
                                        "Reduce peak demand charges that inflate electricity bills",
                                        "Store low-cost off-peak energy for use during peak tariff hours",
                                        "Maintain operations during grid outages with zero-delay switchover",
                                        "Meet sustainability and net-zero commitments with measurable data",
                                        "Qualify for government incentives tied to storage adoption",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start">
                                            <span className="text-headupb2b mt-1 shrink-0">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-5 bg-white">
                                <div className="font-bold text-headupb2b text-[14px] uppercase tracking-[1px] mb-3">
                                    For EPC Contractors & Consultants
                                </div>
                                <ul className="space-y-2 text-[15px] text-gray-700">
                                    {[
                                        "Design grid-connected or off-grid projects that meet performance guarantees",
                                        "Integrate storage with solar/wind to solve intermittency at the system level",
                                        "Specify systems compliant with CERC and MNRE storage mandates in India",
                                        "Deliver projects that command premium margins through added complexity",
                                        "Differentiate your firm with proven storage integration capability",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start">
                                            <span className="text-headupb2b mt-1 shrink-0">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Section>

                    {/* SECTION 2 */}
                    <Section id="how-bess-works" number="02" title="How BESS Works — What You Need to Know Technically">
                        <p>
                            Understanding the operating principles of BESS is essential for specifying the right system and
                            avoiding costly mismatches between technology choice and application.
                        </p>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-2">The Charge-Discharge Cycle</h3>
                        <p>
                            BESS operates on a fundamental cycle: absorb energy when supply exceeds demand, then release it when
                            demand exceeds supply. Modern systems respond in under 100 milliseconds — far faster than any
                            conventional generation asset. For industrial facilities, this enables seamless demand response
                            participation. For grid-connected projects, it enables ancillary services that generate additional
                            revenue streams.
                        </p>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-2">Energy Flow Through the System</h3>
                        <p>Energy entering and leaving a BESS passes through four stages:</p>

                        <div className="space-y-3 mt-3">
                            {[
                                ["①", "AC power from the grid or generation source enters the Power Conversion System (PCS)"],
                                ["②", "The PCS converts AC to DC for battery storage"],
                                ["③", "The Battery Management System (BMS) controls storage, monitoring cell-level health and safety"],
                                ["④", "On discharge, DC is converted back to AC and delivered to the load or grid"],
                            ].map(([step, text], i) => (
                                <div key={i} className="flex gap-3 items-start bg-gray-50 border border-gray-200 rounded p-4">
                                    <span className="text-headupb2b font-bold text-[18px] shrink-0">{step}</span>
                                    <p className="text-[15px] text-gray-700 leading-[1.7] m-0">{text}</p>
                                </div>
                            ))}
                        </div>

                        <Callout title="ENERGY MANAGEMENT SYSTEM (EMS)" color="purple">
                            Overlaying all of this is the Energy Management System (EMS), which optimises when to charge,
                            when to discharge, and how to balance competing priorities such as peak shaving, frequency
                            response, and backup reserve.
                        </Callout>
                    </Section>

                    {/* SECTION 3 */}
                    <Section id="key-components" number="03" title="Key Components — Specification Considerations for Buyers and EPCs">
                        <p>
                            When procuring or specifying a BESS, these four components determine system performance,
                            longevity, and total cost of ownership.
                        </p>

                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <ComponentCard icon="🔋" title="Battery Cells — The Core Asset">
                                Battery cells account for the majority of system cost and determine energy density, cycle life,
                                and thermal behaviour. Specification decisions here have long-term consequences.
                                <ul className="mt-3 space-y-2 text-[14px]">
                                    <li><strong>Lithium Iron Phosphate (LFP):</strong> Preferred for stationary storage — safer thermal profile, 3,000–6,000+ cycle life, lower energy density but better suited to daily cycling</li>
                                    <li><strong>NMC (Nickel Manganese Cobalt):</strong> Higher energy density but greater thermal management requirements — used in space-constrained applications</li>
                                    <li><strong>Flow Batteries:</strong> Optimal for long-duration storage (4–12+ hours); decoupled power and energy scaling; suitable for large industrial or grid-scale applications</li>
                                </ul>
                                <div className="mt-3 text-[13px] text-gray-500 italic">
                                    Procurement note: Always validate cycle life warranties against your actual use profile. A system
                                    warranted for 3,000 cycles at 80% DoD will degrade significantly faster if regularly cycled to 95% DoD.
                                </div>
                            </ComponentCard>

                            <ComponentCard icon="🖥️" title="Battery Management System (BMS)">
                                The BMS monitors voltage, temperature, and state-of-charge across every cell, preventing overcharge,
                                over-discharge, and thermal runaway. For industrial buyers, the BMS data feed is your primary
                                maintenance and health monitoring input — evaluate reporting capability and data export formats
                                during procurement.
                            </ComponentCard>

                            <ComponentCard icon="⚡" title="Power Conversion System (PCS)">
                                The PCS handles AC-DC conversion. Key specification parameters include round-trip efficiency
                                (target 90–95%+), response time, and grid-forming vs. grid-following capability. For projects
                                requiring black-start capability or islanding, grid-forming inverters are mandatory — confirm
                                this during tender.
                            </ComponentCard>

                            <ComponentCard icon="📊" title="Energy Management System (EMS)">
                                The EMS is where operational value is maximised or lost. A capable EMS optimises dispatch across
                                multiple revenue streams simultaneously — peak shaving, time-of-use arbitrage, frequency regulation,
                                and demand response. Evaluate EMS platforms on API integration capability, reporting dashboards,
                                and track record in comparable deployments.
                            </ComponentCard>
                        </div>
                    </Section>

                    {/* SECTION 4 */}
                    <Section id="technology" number="04" title="Choosing the Right Technology — Application-Led Selection">
                        <p>
                            Technology selection should always be driven by the application requirements, not by headline cost
                            or vendor preference. Here is a structured comparison:
                        </p>

                        <div className="overflow-x-auto mt-4">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-headupb2b text-white">
                                        <th className="p-3 text-left font-semibold">Technology</th>
                                        <th className="p-3 text-left font-semibold">Best Application</th>
                                        <th className="p-3 text-left font-semibold">Strengths</th>
                                        <th className="p-3 text-left font-semibold">Watch Out For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["LFP Lithium-ion", "C&I peak shaving, daily cycling, solar+storage", "Long cycle life, thermal safety, falling costs", "Space requirements vs. NMC"],
                                        ["NMC Lithium-ion", "Space-constrained industrial, EV charging hubs", "Higher energy density", "Stricter thermal management needed"],
                                        ["Flow Battery", "Grid-scale, long-duration (4–12h), IPP projects", "Scalable, no cycle degradation", "Higher upfront cost, larger footprint"],
                                        ["Lead-Acid", "Low-budget backup, short-duration UPS", "Low capex", "Short lifespan, high replacement costs over time"],
                                    ].map((row, i) => (
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
                    <Section id="applications" number="05" title="Applications — Where BESS Delivers the Strongest ROI">
                        <div className="space-y-5">
                            {[
                                {
                                    n: "1",
                                    title: "Peak Demand Management (Industrial & Commercial)",
                                    body: "For energy-intensive industries — cement, steel, textiles, data centres, cold chains — peak demand charges can constitute 30–50% of the total electricity bill. A correctly sized BESS shaves demand peaks, reducing the billing demand recorded by the utility and delivering direct, predictable cost savings. This is typically the fastest payback application, often achieving ROI within 4–7 years depending on tariff structure.",
                                },
                                {
                                    n: "2",
                                    title: "Renewable Energy Integration (IPPs and EPC Projects)",
                                    body: "Solar and wind assets without storage face two commercial problems: curtailment during high-generation periods and inability to deliver scheduled power. Pairing BESS with generation assets solves both, enabling Round-the-Clock (RTC) power supply agreements that command higher offtake tariffs. For EPC contractors, this expands project scope and margin.",
                                },
                                {
                                    n: "3",
                                    title: "Grid Ancillary Services",
                                    body: "Utility-scale BESS can participate in frequency regulation and spinning reserve markets, generating revenue that improves project economics. In India, CERC's ancillary services framework is evolving to accommodate storage assets — a significant opportunity for early movers.",
                                },
                                {
                                    n: "4",
                                    title: "Industrial Backup and Power Quality",
                                    body: "For process industries where an unplanned outage costs lakhs per hour, BESS provides sub-cycle switchover to backup power with zero interruption. Unlike diesel gensets, there are no startup delays, no fuel procurement risks, and no emissions compliance issues.",
                                },
                            ].map((item, i) => (
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
                    <Section id="india-market" number="06" title="India Market — Specific Considerations for Domestic Buyers and EPCs">
                        <p>
                            India is entering a period of accelerated BESS deployment, creating real procurement and
                            project opportunities now.
                        </p>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-2">Policy and Regulatory Drivers</h3>
                        <ul className="space-y-2">
                            {[
                                "MNRE has mandated energy storage integration across renewable energy procurements",
                                "CERC is developing market frameworks for storage-based ancillary services",
                                "Viability Gap Funding (VGF) schemes are reducing effective capex for storage projects",
                                "State DISCOMs are issuing tenders for grid-connected storage to manage peak load",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-2 items-start text-[15px] text-gray-700">
                                    <span className="text-headupb2b mt-1 shrink-0">•</span> {item}
                                </li>
                            ))}
                        </ul>

                        <Callout title="INDIA BESS MARKET SNAPSHOT" color="purple">
                            The India BESS pipeline has reached 92 GWh in 2025, up sharply from prior years — and procurement
                            activity is accelerating. India's BESS market is projected to grow at a 27% CAGR between 2025 and
                            2030, reaching approximately $1.2 billion. EPCs with storage integration capability are in a strong
                            competitive position for these tenders.
                        </Callout>

                        <h3 className="text-[20px] font-bold text-black mt-4 mb-2">Procurement Landscape</h3>
                        <p>
                            Most large BESS deployments in India involve international battery cell supply chains (primarily
                            from China, South Korea, and the US) with local system integration. EPC contractors must understand
                            the import duty structure, warranty management for offshore components, and domestic value addition
                            requirements under Make in India guidelines to price projects accurately.
                        </p>
                    </Section>

                    {/* SECTION 7 */}
                    <Section id="tco" number="07" title="Total Cost of Ownership — Evaluating Beyond Capex">
                        <p>
                            The most common procurement error is evaluating BESS on upfront cost alone. The 20-year total cost
                            of ownership picture looks very different once you account for all cost and revenue components.
                        </p>

                        <div className="overflow-x-auto mt-4">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-headupb2b text-white">
                                        <th className="p-3 text-left font-semibold">Cost Drivers</th>
                                        <th className="p-3 text-left font-semibold">Value Drivers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Battery cell replacement (typically yr 10–15)", "Peak demand charge reduction"],
                                        ["O&M and monitoring contracts", "Energy arbitrage savings (ToU tariffs)"],
                                        ["EMS software licences", "Ancillary service revenues"],
                                        ["Civil and electrical installation (one-time)", "Avoided diesel genset O&M costs"],
                                        ["Insurance and safety compliance", "Carbon credit / REC monetisation potential"],
                                    ].map((row, i) => (
                                        <tr key={i} className={`border-b hover:bg-[#F4F1FA] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F1FA]/40"}`}>
                                            <td className="p-3 text-gray-700">{row[0]}</td>
                                            <td className="p-3 text-gray-700">{row[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Callout title="RULE OF THUMB" color="yellow">
                            LFP-based systems at current Indian market pricing typically achieve payback in 5–8 years for C&I
                            peak shaving applications, with significantly better economics where ToU tariffs are in effect or
                            ancillary service participation is possible.
                        </Callout>
                    </Section>

                    {/* SECTION 8 */}
                    <Section id="vendor-eval" number="08" title="What to Evaluate When Shortlisting BESS Vendors">
                        <p>Beyond the technology specification, vendor evaluation should cover these areas:</p>

                        <div className="space-y-3 mt-4">
                            {[
                                { icon: "🏦", title: "Bankability and financial standing", body: "Can the vendor support long-term warranty obligations? Have they been assessed by major project finance lenders?" },
                                { icon: "🔧", title: "Local service infrastructure", body: "Response times for on-site O&M in India matter — a supplier with no domestic service presence is a project risk." },
                                { icon: "📋", title: "Reference projects", body: "Insist on references at comparable scale and application type. A strong residential portfolio does not qualify a vendor for MW-scale industrial deployment." },
                                { icon: "🖥️", title: "EMS flexibility", body: "Can the EMS integrate with your SCADA or building management system? What APIs are available?" },
                                { icon: "✅", title: "Safety certifications", body: "IEC 62619, UL 9540A, and BIS certification (where mandated) should be baseline requirements, not optional extras." },
                                { icon: "📈", title: "Performance guarantees", body: "What round-trip efficiency and capacity retention guarantees are offered, and how are they measured and enforced contractually?" },
                            ].map((item, i) => (
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
                    <Section id="road-ahead" number="09" title="The Road Ahead — Technology Trends That Will Affect Your Procurement Decisions">
                        <div className="space-y-5 mt-2">
                            {[
                                {
                                    n: "1",
                                    title: "Falling Battery Costs",
                                    body: "LFP cell prices have fallen over 80% in the past decade and continue to decline. This makes projects that were marginal 2–3 years ago viable today. Systems procured now will benefit from better economics than equivalent projects in 2022.",
                                },
                                {
                                    n: "2",
                                    title: "AI-Driven Energy Management",
                                    body: "Next-generation EMS platforms are integrating machine learning to optimise dispatch across multiple revenue streams in real time, predicting grid prices, demand patterns, and system degradation simultaneously. When evaluating EMS platforms today, ask what AI/ML capabilities are on the product roadmap.",
                                },
                                {
                                    n: "3",
                                    title: "Vehicle-to-Grid (V2G) Integration",
                                    body: "For industrial buyers with large EV fleets, V2G integration creates a bidirectional asset that both charges vehicles and provides grid services. This is still emerging in India but is worth building in design flexibility for at the specification stage.",
                                },
                                {
                                    n: "4",
                                    title: "Sodium-Ion Batteries",
                                    body: "Sodium-ion technology is approaching commercial viability as a lower-cost alternative to LFP with no lithium supply chain dependency. EPCs and buyers specifying projects with a 5+ year horizon should monitor commercialisation timelines — this could materially affect long-duration storage economics.",
                                },
                            ].map((item, i) => (
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
                            <div className="text-[12px] tracking-[2px] font-semibold mb-3 text-white/70">CONCLUSION</div>
                            <h2 className="text-[24px] font-bold mb-4">
                                Battery Energy Storage Is Now Core Infrastructure
                            </h2>
                            <p className="text-[16px] text-white/90 leading-[1.8] mb-4">
                                Battery Energy Storage is moving from an emerging technology to a core infrastructure component.
                                Organisations that develop procurement expertise now will be better positioned to deliver projects,
                                manage costs, and meet regulatory requirements as the market scales.
                            </p>
                            <p className="text-[16px] text-white/90 leading-[1.8] mb-6">
                                The fundamentals are sound: falling costs, strong policy support, a growing project pipeline in India,
                                and clear commercial applications across industrial, commercial, and grid-scale segments. Procurement
                                decisions made today will define performance for the next 15–20 years.
                            </p>
                            <div className="border-t border-white/20 pt-5">
                                <div className="font-bold text-[16px] mb-2">Ready to Explore BESS for Your Business?</div>
                                <p className="text-[14px] text-white/80 mb-4">
                                    Our team works with industrial buyers, EPCs, and project developers to size, specify, and deploy
                                    battery energy storage systems that deliver measurable ROI.
                                </p>

                                <button 
                                onClick={()=> setShowRequestConsultation(true)}
                                className="inline-block bg-white text-headupb2b font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                    → Request a Project Consultation Today
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 10 — FAQ */}
                    <Section id="faq" number="10" title="Frequently Asked Questions">
                        <div className="space-y-6">
                            {[
                                {
                                    q: "What is the typical ROI timeline for a C&I BESS installation in India?",
                                    a: "For industrial and commercial peak shaving applications with current LFP pricing, payback periods typically range from 5 to 8 years depending on tariff structure, load profile, and available incentives. Applications with ToU tariffs or ancillary service participation can achieve shorter paybacks.",
                                },
                                {
                                    q: "Which battery chemistry should EPCs specify for most industrial projects?",
                                    a: "LFP (Lithium Iron Phosphate) is the dominant choice for stationary industrial storage due to its cycle life, thermal safety profile, and declining cost trajectory. NMC remains relevant for space-constrained applications. Specify chemistry based on application requirements, not headline cost alone.",
                                },
                                {
                                    q: "How are BESS projects financed in India?",
                                    a: "Large BESS projects are increasingly financed through project finance structures, with lenders such as IREDA, SBI, and international DFIs active in the space. Vendor bankability and independent technical assessment are key requirements for debt financing.",
                                },
                                {
                                    q: "What certifications should we require from BESS vendors?",
                                    a: "IEC 62619 (battery safety), UL 9540A (large-scale battery energy storage systems), and relevant BIS certifications should be baseline requirements. For grid-connected systems, verify compliance with CERC and IEGC technical requirements.",
                                },
                                {
                                    q: "How does BESS interact with existing SCADA and building management systems?",
                                    a: "Modern EMS platforms support standard industrial communication protocols including Modbus, DNP3, and IEC 61850. API integration capability varies by vendor and should be evaluated during procurement alongside your IT/OT integration requirements.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="border-b border-gray-100 pb-5">
                                    <div className="font-bold text-[16px] mb-2">Q:{item.q}</div>
                                    <p className="text-[15px] text-gray-700 leading-[1.75]">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* FOOTER NOTE */}
                    <div className="pt-12 mt-8 border-t border-gray-200 text-[13px] text-gray-500 space-y-2">
                        <p className="font-semibold text-gray-700">Published by Headsup B2B | Energy Infrastructure Series | March 2026</p>
                        <p>
                            Data sources: IEA Grid-Scale Storage; MarketsandMarkets BESS Market Report 2025; MarkNtel Advisors
                            India BESS Market; Energy-Storage.News India 2025; Carbon Credits Global Shipments Report.
                        </p>
                        <p>© 2026 Headsup B2B Pvt. Ltd. · headsupb2b.com</p>
                    </div>

                </main>
            </div>

            {showRequestConsultation && (
                <GetInTouch title="Request Consultation" onClose={() => setShowRequestConsultation(false)} />
            )}
        </>
    );
}
