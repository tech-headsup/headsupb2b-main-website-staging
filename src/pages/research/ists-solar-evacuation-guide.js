"use client";

import Link from "next/link";

import Head from "next/head";


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

function BottleneckCard({ state, severity, stats, children }) {
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
                    {severity}
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
    return (
        <>
            <Head>
                {/* ── Core ── */}
                <title>ISTS Explained: India’s Transmission Lines for Solar Power Evacuation</title>
                <meta
                    name="description"
                    content="Explore India’s Inter-State Transmission System (ISTS) in this complete guide — from renewable energy zone planning to grid dispatch — and understand why nearly 50 GW of solar and renewable capacity remains stranded."
                />
                <meta
                    name="keywords"
                    content="ISTS India, Inter-State Transmission System, solar power evacuation India, renewable energy transmission, ISTS solar bottleneck, TBCB transmission, PGCIL, solar curtailment India, GNA grid access, ISTS charge waiver"
                />

                {/* ── Canonical ── */}
                <link rel="canonical" href="https://www.headsupb2b.com/research/ists-solar-evacuation-guide" />

                {/* ── Robots ── */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

                {/* ── Open Graph ── */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="ISTS Explained: How India Builds Transmission Lines
to Evacuate Solar Power" />
                <meta
                    property="og:description"
                    content="Explore India’s Inter-State Transmission System (ISTS) in this complete guide — from renewable energy zone planning to grid dispatch — and understand why nearly 50 GW of solar and renewable capacity remains stranded."
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/ists-solar-evacuation-guide" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image" content="https://www.headsupb2b.com/ists-solar-evacuation-guide.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="ISTS Solar Evacuation Guide — Headsup B2B" />
                <meta property="article:published_time" content="2026-03-01T00:00:00.000Z" />
                <meta property="article:modified_time" content="2026-03-23T00:00:00.000Z" />
                <meta property="article:author" content="Headsup B2B Research Desk" />

                {/* ── Twitter / X ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ISTS Explained: How India Builds Transmission Linesto Evacuate Solar Power" />
                <meta
                    name="twitter:description"
                    content="Why is 50 GW of India's solar capacity stranded? A complete guide to the ISTS — from RE zone planning to grid dispatch."
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
                Solar Infrastructure Intelligence
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
            ISTS Explained:{" "}
            <em
                style={{
                    background: "linear-gradient(90deg,#c4b5fd,#e9d5ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                How India Builds Transmission Lines
            </em>
            <br />to Evacuate Solar Power
        </h1>

        {/* Description */}
        <p className="text-[17px] text-white italic max-w-[640px] leading-[1.65] mb-8">
            A complete guide to India's Inter-State Transmission System — from RE zone
            planning to grid dispatch — and why ~50 GW of renewable capacity remains stranded
            across the country.
        </p>

        {/* Stats */}
        <div className="flex gap-8 flex-wrap pt-7 border-t border-[rgba(245,240,232,0.12)] max-sm:gap-5">
            {[
                ["~50 GW", "Stranded RE Capacity"],
                ["₹2.44L Cr", "ISTS Investment by 2030"],
                ["50,890 ckm", "New Lines Planned"],
                ["3–7 Years", "Planning to Commission"],
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

{/* Meta Bar — same as ALMM */}
<div className="bg-white border-b border-[#e5e0d5] px-8 py-3.5">
    <div className="max-w-[1100px] mx-auto flex items-center gap-6 font-mono text-[11px] text-[#7a7060] flex-wrap">
        <div className="flex items-center gap-1.5"><span>✍</span> Headsup B2B Research Desk</div>
        <div className="flex items-center gap-1.5"><span>📅</span> Published: Mar 01, 2026</div>
        <div className="flex items-center gap-1.5"><span>🔄</span> Last Updated: Mar 24, 2026</div>
        <div className="flex items-center gap-1.5"><span>🏷</span> Transmission · Solar · ISTS · Grid · Evacuation</div>
        <div className="ml-auto bg-[#f4f1ea] px-2.5 py-1 rounded text-[#c8860a]">⏱ 22 min read</div>
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
                            📋 Table of Contents
                        </div>

                        {/* List */}
                        <ol className="list-none p-0 m-0">
                            {[
                                ["why", "Why This Guide Matters"],
                                ["what", "What is ISTS"],
                                ["process", "7-Stage ISTS Process"],
                                ["ecosystem", "Institutional Ecosystem"],
                                ["bottlenecks", "ISTS Bottleneck Map"],
                                ["data", "The Numbers That Matter"],
                                ["curtailment", "Why Solar Gets Curtailed"],
                                ["waiver", "ISTS Charge Waiver"],
                                ["players", "Private Players in TBCB"],
                                ["future", "What Needs to Change"],
                                ["glossary", "Glossary of Key Terms"],
                                ["faq", "Frequently Asked Questions"],
                            ].map(([id, label], i) => (
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
                    <Section id="why" number="01" title="Why This Guide Matters">
                        <p>
                            India added 38 GW of solar capacity in 2025 alone — more than most
                            countries have installed in total. The country has crossed 250 GW of
                            non-fossil fuel installed capacity and is racing towards its 500 GW
                            renewable energy target by 2030. But here's the problem nobody talks
                            about enough: approximately 50 GW of India's renewable energy capacity
                            is currently stranded — unable to deliver power to the grid because the
                            transmission lines needed to evacuate it don't yet exist, or are delayed,
                            or are congested.
                        </p>

                        <Callout title="THE CORE PROBLEM" color="red">
                            A solar project takes 12–24 months to commission. An ISTS transmission
                            line takes 36–60 months. This structural mismatch — compounded by land
                            disputes, equipment shortages, and regulatory delays — is the single
                            biggest bottleneck in India's energy transition.
                        </Callout>

                        <p>
                            If you're a solar developer, EPC contractor, infrastructure investor,
                            procurement professional, or policy researcher, this guide will give you
                            a complete understanding of how India's Inter-State Transmission System
                            works, where the bottlenecks are, and who the key institutional players
                            are. We've built this to be the resource we wished existed when we
                            started covering solar procurement at Headsup B2B.
                        </p>
                    </Section>

                    {/* SECTION 2 */}
                    <Section id="what" number="02" title="What Is ISTS? The Backbone of India's Green Grid">
                        <p>
                            The Inter-State Transmission System (ISTS) is the high-voltage electricity
                            highway that carries power across state boundaries in India.
                        </p>
                        <p>
                            Think of it as the national highway network — but for electrons. While
                            intra-state transmission handles power movement within a state, ISTS
                            handles the long-distance, bulk transfer of electricity from
                            generation-rich states to consumption-heavy ones.
                        </p>
                        <p>
                            For solar energy, ISTS is existentially important. India's best solar
                            irradiance zones are concentrated in Rajasthan, Gujarat, and parts of
                            Karnataka and Andhra Pradesh. But the biggest consumption centres —
                            Delhi-NCR, Mumbai, Chennai, Bengaluru, Kolkata — are hundreds or
                            thousands of kilometres away. Without ISTS, solar power generated in
                            Bhadla, Rajasthan, cannot reach a factory in Noida or a household in
                            Mumbai.
                        </p>

                        <Callout title="ISTS BY THE NUMBERS" color="blue">
                            Total ISTS investment planned by 2030: ₹2,44,200 crore (~$29 billion).
                            This covers approximately 50,890 circuit-kilometres of new transmission
                            lines and 4,33,575 MVA of substation transformation capacity. The Central
                            Transmission Utility has planned transmission infrastructure to evacuate
                            power from 172.5 GW of RE capacity.
                        </Callout>

                        <h3 className="text-[20px] font-bold text-black mt-4">
                            ISTS vs. Intra-State Transmission
                        </h3>
                        <p>
                            ISTS operates at 400 kV and 765 kV (and HVDC for ultra-long distances)
                            and is regulated by the Central Electricity Regulatory Commission (CERC).
                            Intra-state transmission operates at lower voltages (66 kV to 220 kV)
                            and falls under State Electricity Regulatory Commissions. For large solar
                            parks and RE zones, ISTS connectivity is the critical link between
                            generation and the national grid.
                        </p>
                        <p>
                            The key principle:{" "}
                            <strong>renewable energy has "must-run" status</strong> under the Indian
                            Electricity Grid Code 2010. This means solar and wind power must be
                            dispatched before thermal generation, subject only to grid security
                            constraints. This policy was designed to accelerate RE adoption — but
                            when the transmission lines aren't ready, the power simply has nowhere
                            to go.
                        </p>
                    </Section>

                    {/* SECTION 3 */}
                    <Section id="process" number="03" title="The Complete 7-Stage ISTS Process">
                        <p>
                            From the moment a solar zone is identified to the point when a unit of
                            electricity flows through a newly commissioned transmission line, here is
                            the complete lifecycle of an ISTS project in India:
                        </p>

                        <StageCard
                            number="1"
                            title="RE Zone Identification & Potential Assessment"
                            subtitle="MNRE + CEA + State Governments"
                        >
                            The Ministry of New & Renewable Energy (MNRE) identifies solar energy
                            zones (SEZs) and wind energy zones based on irradiance data, land
                            availability, and strategic proximity to load centres. CEA (Central
                            Electricity Authority) assesses generation potential. This planning
                            typically happens 5–7 years before power can be evacuated. Major zones
                            include Bhadla and Fatehgarh in Rajasthan, Khavda in Gujarat (the
                            world's largest hybrid RE park at 30 GW planned capacity), Koppal and
                            Gadag in Karnataka, and Ananthapuramu and Kurnool in Andhra Pradesh.
                        </StageCard>

                        <StageCard
                            number="2"
                            title="Transmission Network Planning"
                            subtitle="CTU (Central Transmission Utility of India Ltd)"
                        >
                            CTU — now a separate entity carved out of PGCIL — plans the ISTS network
                            required to evacuate power from these RE zones. It determines voltage
                            levels (400/765 kV or HVDC), substation locations, corridor routing, and
                            required transformation capacity. CTU also grants connectivity (GNA —
                            General Network Access) to RE developers, which is the permission to
                            inject power into the ISTS grid. CTU's planning is done in consultation
                            with NLDC, state utilities, SECI, and RE developers.
                        </StageCard>

                        <StageCard
                            number="3"
                            title="Regulatory Approval"
                            subtitle="CERC (Central Electricity Regulatory Commission)"
                        >
                            CERC grants regulatory approval for the transmission scheme. It examines
                            the cost estimates, technical design, necessity of the scheme, and hears
                            objections from state utilities and DISCOMs. This is often where delays
                            begin — states like Tamil Nadu and Karnataka have historically opposed
                            ISTS plans, arguing generation capacity was being overestimated. For
                            example, a 18.5 GW southern region transmission plan was scaled down to
                            8 GW after objections and lack of Long-Term Access applications.
                        </StageCard>

                        <StageCard
                            number="4"
                            title="Tender & Bid Process (TBCB)"
                            subtitle="RECPDCL / PFC Consulting (Bid Process Coordinators)"
                        >
                            RECPDCL (a subsidiary of REC Ltd) or PFC Consulting acts as the Bid
                            Process Coordinator (BPC). They create a Special Purpose Vehicle (SPV)
                            for each project — e.g., "Fatehgarh Bhadla Transco Ltd" or "Robertsganj
                            Power Transmission Ltd" — and float the tender under the Tariff Based
                            Competitive Bidding (TBCB) framework. This involves publishing the RfP,
                            qualifying bidders on technical merit, and conducting an e-Reverse
                            Auction to discover the lowest annual transmission charge. The entire
                            process typically takes 6–12 months.
                        </StageCard>

                        <StageCard
                            number="5"
                            title="Developer Selection & SPV Transfer"
                            subtitle="PGCIL / Adani / Tata Power / Private TSPs"
                        >
                            The winning Transmission Service Provider (TSP) receives a Letter of
                            Intent (LoI), and the SPV is formally transferred to them. The TSP must
                            execute the project under the BOOT model (Build-Own-Operate-Transfer) —
                            conducting detailed surveys, preparing the DPR (Detailed Project Report),
                            arranging financing, managing the project, and securing all clearances
                            and permits. The TSP earns a fixed annual transmission charge over the
                            license period, typically 35 years.
                        </StageCard>

                        <StageCard
                            number="6"
                            title="Construction & Commissioning"
                            subtitle="TSP + EPC Contractors + Equipment Suppliers"
                        >
                            Physical execution begins: 765/400/220 kV GIS substations, power
                            transformers, STATCOM, line reactors, transmission towers, conductors,
                            and insulators. Typical construction timelines are 24–36 months. This is
                            where the most severe bottlenecks occur — Right-of-Way (RoW) disputes,
                            prolonged land acquisition, transformer shortages (prices have doubled
                            from ~₹14 Cr to ₹30 Cr), GIS bay cost increases (₹6 Cr → ₹15 Cr), and
                            ecological restrictions like the Great Indian Bustard habitat mandating
                            underground cabling in Rajasthan at 5–8x the cost of overhead lines.
                        </StageCard>

                        <StageCard
                            number="7"
                            title="Grid Integration & Real-Time Dispatch"
                            subtitle="NLDC (Grid-India) / RLDC / SLDC"
                        >
                            Once commissioned, the ISTS line is integrated into Grid-India's
                            real-time dispatch system. NLDC (National Load Dispatch Centre) manages
                            scheduling of RE generators based on their GNA allocation. Solar and wind
                            plants operate as must-run but are subject to curtailment under two
                            conditions: (a) system-wide emergency through TRAS (Tertiary Reserve
                            Ancillary Services), or (b) transmission corridor congestion. When
                            available transmission capacity is less than generation capacity, NLDC
                            reduces the schedules of generators — this is curtailment, and it's the
                            symptom of the entire mismatch problem.
                        </StageCard>

                        <Callout title="THE COMPLETE CHAIN — AT A GLANCE" color="orange">
                            MNRE identifies RE Zone → CEA assesses potential → CTU designs ISTS
                            network → CERC approves scheme → RECPDCL/PFC creates SPV & floats TBCB
                            tender → e-Reverse Auction discovers lowest tariff → TSP wins & receives
                            LoI → SPV transferred → DPR + Financing + Clearances → EPC Construction
                            (24–36 months) → PGCIL/TSP commissions line → NLDC integrates into grid
                            → RE generators evacuate power via GNA.
                            <br />
                            <br />
                            <strong>Total timeline: 3–7 years from planning to commissioning.</strong>
                        </Callout>
                    </Section>

                    {/* SECTION 4 */}
                    <Section
                        id="ecosystem"
                        number="04"
                        title="The Institutional Ecosystem — Who Does What"
                    >
                        <p>
                            India's ISTS ecosystem involves eight major central institutions, each
                            with a distinct mandate. Understanding who does what is critical for
                            anyone operating in the solar infrastructure space.
                        </p>

                        <div className="space-y-5 mt-4 bg-orange-50 border border-orange-200 p-5 rounded-lg">
                            {[
                                {
                                    name: "MNRE",
                                    full: "Ministry of New & Renewable Energy",
                                    desc: "The policy architect. Sets national RE targets (500 GW by 2030), identifies RE zones, administers ISTS charge waivers, manages ALMM and PM-KUSUM, and drives the National Green Hydrogen Mission. MNRE constituted the sub-committee that originally identified 66.5 GW of solar and wind potential across India for ISTS planning.",
                                },
                                {
                                    name: "CEA",
                                    full: "Central Electricity Authority",
                                    desc: "The national transmission planning body. Prepares the National Electricity Plan and the transmission expansion roadmap. CEA has shifted to \"potential-based planning\" — revising plans every six months to reflect evolving ground realities rather than static five-year cycles. The ₹2.44 lakh crore ISTS investment estimate comes from CEA.",
                                },
                                {
                                    name: "CTU",
                                    full: "Central Transmission Utility of India Ltd (CTUIL)",
                                    desc: "Carved out of PGCIL to ensure planning independence. Grants connectivity (GNA) to RE developers. Plans ISTS corridors and coordinates with NLDC, state transcos, and developers. The single-window portal for RE injection access. CTU has planned transmission systems to evacuate power from 172.5 GW of RE capacity.",
                                },
                                {
                                    name: "PGCIL",
                                    full: "Power Grid Corporation of India Ltd",
                                    desc: "India's largest transmission utility and Maharatna CPSE. Wins 40–50% of all TBCB schemes. Executes mega ISTS projects — it won all 6 SPVs for Khavda (Gujarat) evacuation, secured the 8.1 GW Rajasthan Phase-2 projects, and recently bid for the 5 GW Visakhapatnam green hydrogen ISTS. PGCIL also operates as a developer, not just a contractor.",
                                },
                                {
                                    name: "RECPDCL",
                                    full: "REC Power Development & Consultancy Ltd",
                                    desc: "The Bid Process Coordinator (BPC) for TBCB tenders. A subsidiary of REC Limited (NBFC Maharatna under Ministry of Power). Creates SPVs, manages the entire tender process — from qualification to e-Reverse Auction to LoI — and transfers winning SPVs to developers. RECPDCL has coordinated the bidding for the majority of India's RE evacuation transmission projects.",
                                },
                                {
                                    name: "PFC Consulting",
                                    full: "PFC Consulting Ltd",
                                    desc: "The alternative BPC alongside RECPDCL. Also creates SPVs and manages TBCB bidding for select ISTS schemes. PFC Consulting handled the Bikaner-III Neemrana-II transmission scheme, among others.",
                                },
                                {
                                    name: "CERC",
                                    full: "Central Electricity Regulatory Commission",
                                    desc: "The regulator. Approves transmission schemes, sets tariff norms, adjudicates disputes. ISTS charges sharing regulations, the GNA framework, and curtailment compensation rules all fall under CERC's jurisdiction. Every ISTS scheme must receive CERC's regulatory approval before tendering can begin.",
                                },
                                {
                                    name: "NLDC",
                                    full: "National Load Dispatch Centre (Grid-India)",
                                    desc: "The real-time grid operator. Schedules RE dispatch, manages grid frequency, activates TRAS (emergency curtailment), and publishes daily VRE reports. NLDC is the entity that ultimately decides if solar power flows or gets curtailed. It operates five Regional Load Dispatch Centres (RLDCs) across India.",
                                },
                            ].map((item, i) => (
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
                        title="India's ISTS Bottleneck Map — State-Wise Analysis"
                    >
                        <p>
                            Not all states face equal transmission stress. The bottleneck geography
                            is heavily concentrated in states with high RE generation but insufficient
                            evacuation infrastructure. Here is a state-by-state analysis of where
                            India's ISTS is most critically strained:
                        </p>

                        <BottleneckCard
                            state="Rajasthan"
                            severity="CRITICAL"
                            stats={[
                                "~56 GW total capacity, ~40 GW RE",
                                "Stranded: ~8 GW out of 22 GW ISTS-connected RE",
                                "Curtailment: 15–30% during peak solar hours",
                                "Key Zones: Bhadla, Fatehgarh, Barmer, Jaisalmer, Bikaner",
                            ]}
                        >
                            India's worst ISTS bottleneck. An 18+ month delay in the 8.1 GW
                            transmission strengthening program stalled evacuation. GIB habitat
                            restrictions mandate underground cabling at 5–8x cost. RoW disputes on
                            14 ISTS projects. In December 2025, ~4,300 MW of solar faced complete
                            daytime curtailment.
                        </BottleneckCard>

                        <BottleneckCard
                            state="Gujarat"
                            severity="CRITICAL"
                            stats={[
                                "~66 GW total capacity, ~35 GW RE",
                                "Stranded: ~6 GW affected",
                                "Curtailment: 10–25% peak hours",
                                "Key Zones: Khavda (30 GW mega park), Kutch, Banaskantha",
                            ]}
                        >
                            The Khavda hybrid RE park alone requires massive 765 kV corridor
                            buildout. Equipment shortages compound the problem. Speculative GNA
                            hoarding by developers has reduced available transmission margin for
                            projects that are actually ready to generate.
                        </BottleneckCard>

                        <BottleneckCard
                            state="Karnataka"
                            severity="HIGH"
                            stats={[
                                "~30 GW total capacity, ~24 GW RE",
                                "Affected: ~4 GW",
                                "Key Zones: Koppal, Gadag, Pavagada, Davangere",
                            ]}
                        >
                            The southern region's ISTS plan was reduced from 18.5 GW to 8 GW due to
                            lack of LTA applications and state objections. PGCIL recently won the
                            Davangere transmission strengthening scheme. Intra-state bottlenecks
                            persist alongside interstate constraints.
                        </BottleneckCard>

                        <BottleneckCard
                            state="Tamil Nadu"
                            severity="HIGH"
                            stats={[
                                "~36 GW total capacity, ~25 GW RE",
                                "Curtailment: 10–30%",
                                "Key Zones: Tuticorin, Karur, Ramanathapuram",
                            ]}
                        >
                            India's oldest wind energy state, now facing inter-regional corridor
                            saturation. TANGEDCO has historically opposed ISTS plans. The evening
                            ramp challenge — when solar output drops but wind doesn't fully
                            compensate — stresses the southern grid corridor.
                        </BottleneckCard>

                        <BottleneckCard
                            state="Andhra Pradesh"
                            severity="MEDIUM"
                            stats={[
                                "~25 GW total capacity",
                                "Key Zones: Ananthapuramu, Kurnool, Visakhapatnam (Green H₂)",
                            ]}
                        >
                            Fast-emerging bottleneck. The 5 GW Visakhapatnam green
                            hydrogen/ammonia ISTS project is one of India's largest upcoming
                            evacuation schemes. Kurnool-IV (4.5 GW) evacuation is also pending.
                            Ananthapuramu-II (3 GW) Phase-II was recently tendered.
                        </BottleneckCard>

                        <BottleneckCard
                            state="Madhya Pradesh"
                            severity="MEDIUM"
                            stats={[
                                "~25 GW total capacity",
                                "Key Zones: Rajgarh, Neemuch, Rewa, Shajapur SEZ",
                            ]}
                        >
                            The Rajgarh and Neemuch SEZ transmission projects were recently awarded
                            to GR Infraprojects. MP's central geographic location means it also
                            serves as a transit corridor for RE power flowing from western to eastern
                            India, creating dual transmission stress.
                        </BottleneckCard>

                        <blockquote className="border-l-4 border-orange-400 bg-orange-50 pl-4 italic text-gray-700 mt-6">
                            "The improvement in transmission has been limited and insufficient to
                            offset the scale and speed of new RE commissioning. The core issue
                            remains asynchronous planning — renewable generation is commissioned in
                            12–24 months, whereas ISTS transmission takes three to five years."
                            <br />
                            <span className="not-italic text-[13px] text-gray-500 mt-1 block">
                                — Solar Power Developers Association (SPDA)
                            </span>
                        </blockquote>
                    </Section>

                    {/* SECTION 6 */}
                    <Section id="data" number="06" title="The Numbers That Matter — ISTS by Data">
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-[#fff6dd] text-black border-b">
                                        <th className="p-3 text-left font-semibold">Metric</th>
                                        <th className="p-3 text-left font-semibold">Value</th>
                                        <th className="p-3 text-left font-semibold">Source / Context</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Total RE capacity (Nov 2025)", "262.74 GW", "51.5% of India's total installed capacity (509.64 GW)"],
                                        ["Solar capacity (2025)", "~132.85 GW", "41% year-on-year increase"],
                                        ["Solar added in 2025 alone", "38 GW", "Highest-ever annual addition"],
                                        ["RE capacity stranded (nationwide)", "~50 GW", "Due to transmission bottlenecks (IEEFA estimate)"],
                                        ["Rajasthan stranded capacity", "~8 GW", "Out of 22 GW ISTS-connected RE"],
                                        ["Unsigned PSAs (Sep 2025)", "44 GW", "Awarded but unable to reach financial closure"],
                                        ["ISTS investment target (by 2030)", "₹2,44,200 Cr", "~$29 billion; CEA estimate"],
                                        ["New transmission lines planned", "50,890 ckm", "For integration of additional solar + wind by 2030"],
                                        ["Substation capacity planned", "4,33,575 MVA", "765/400/220 kV transformation capacity"],
                                        ["Transformer cost inflation", "₹14 Cr → ₹30 Cr", "More than doubled; lead times exceed 18 months"],
                                        ["GIS bay cost inflation", "₹6 Cr → ₹15 Cr", "2.5x increase in recent years"],
                                        ["ISTS transmission lag vs. target", "~50% behind", "SBI Caps report, late FY26"],
                                        ["Curtailment across major RE states", "15–20% average", "Rajasthan, Gujarat, Karnataka; up to 100% at midday"],
                                        ["Energy storage needed by 2032", "411 GWh", "BESS + pumped hydro; current deployment severely inadequate"],
                                    ].map((row, i) => (
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
                    <Section id="curtailment" number="07" title="Why Solar Gets Curtailed — The Mismatch Problem">
                        <p>
                            Curtailment is the term for when a solar or wind plant is forced to
                            reduce or stop generating power, even though it can produce. Under India's
                            grid code, RE has "must-run" status — meaning it should be evacuated
                            before thermal power. But in practice, curtailment has become routine in
                            2025–26, driven by two primary mechanisms:
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-200 rounded p-5">
                                <div className="font-bold text-[16px] mb-2">
                                    1. Emergency TRAS (Tertiary Reserve Ancillary Services)
                                </div>
                                <p className="text-[15px] text-gray-700 leading-[1.75]">
                                    When grid frequency rises above safe limits — typically because supply
                                    exceeds demand — NLDC activates TRAS-down, requiring generators to
                                    reduce output. Solar plants, being operationally flexible (they can
                                    ramp down instantly), are disproportionately called upon. On 12
                                    October 2025, approximately 93.3 GWh of ISTS solar output was
                                    curtailed through this mechanism — up from 45 GWh just five months
                                    earlier.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded p-5">
                                <div className="font-bold text-[16px] mb-2">
                                    2. Transmission Constraint-Based Curtailment
                                </div>
                                <p className="text-[15px] text-gray-700 leading-[1.75]">
                                    When the physical transmission corridor cannot carry the generation
                                    being produced, NLDC reduces schedules of generators holding T-GNA
                                    (Temporary General Network Access). Unlike TRAS, this type of
                                    curtailment is not always financially compensated, making it a
                                    critical risk for RE developers. In December 2025, approximately 4 GW
                                    of T-GNA solar capacity faced complete curtailment between 11 AM and
                                    2 PM on certain days.
                                </p>
                            </div>
                        </div>

                        <Callout title="THE DUCK CURVE PROBLEM" color="red">
                            At midday, available solar capacity in India reaches 50–65 GW while the
                            coal fleet is maintained above ~100 GW to ensure availability for the
                            evening peak of 140–160 GW. Coal plants cannot ramp down beyond their
                            Minimum Technical Load (MTL) of ~55%. The result: solar is curtailed
                            during the very hours it generates most, while coal — more expensive and
                            polluting — continues running. This "duck curve" will deepen every year
                            as solar capacity grows faster than flexibility improves.
                        </Callout>

                        <h3 className="text-[18px] font-bold text-black mt-2">
                            Why It Matters Commercially
                        </h3>
                        <p>
                            For solar developers, curtailment directly reduces the Plant Load Factor
                            (PLF), lowering revenue below projections. For investors, it introduces
                            a structural risk that can't be hedged. For DISCOMs, it means paying for
                            must-run solar they can't receive. And for India's climate targets, it
                            means clean energy is being wasted while coal continues to burn.
                        </p>
                    </Section>

                    {/* SECTION 8 */}
                    <Section id="waiver" number="08" title="ISTS Charge Waiver — The Policy That Changed Everything">
                        <p>
                            One of the most impactful policy instruments in India's RE journey has
                            been the ISTS charges waiver — a government-mandated exemption from
                            paying interstate transmission charges for renewable energy projects. The
                            waiver was first introduced to make RE cost-competitive with thermal power
                            by reducing the effective cost of delivering solar/wind power across state
                            boundaries.
                        </p>

                        <h3 className="text-[18px] font-bold text-black mt-4 mb-3">
                            What Changed in 2025
                        </h3>
                        <p>
                            In June 2025, the government announced a phased withdrawal of the ISTS
                            charges waiver:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full border  border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-[#fff6dd] border-b">
                                        <th className="p-3 text-left font-semibold">Commissioning Window</th>
                                        <th className="p-3 text-left font-semibold">Waiver Level</th>
                                        <th className="p-3 text-left font-semibold">Impact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Before June 30, 2025", "100% waiver", "Full benefit; most projects rushed to commission"],
                                        ["July 2025 – June 2026", "75% waiver", "Still attractive; partial commissioning strategy used"],
                                        ["July 2026 – June 2027", "50% waiver", "Landed cost increases significantly"],
                                        ["July 2027 – June 2028", "25% waiver", "Further cost pressure on RE projects"],
                                        ["After June 30, 2028", "0% waiver", "Full ISTS charges apply; RE must compete on total cost"],
                                    ].map((row, i) => (
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
                            The Unintended Consequence
                        </h3>
                        <p>
                            The 100% waiver, while commercially beneficial, created a geographic
                            concentration problem. Developers flooded into Rajasthan and Gujarat —
                            where irradiance is highest — without regard for transmission capacity.
                            The waiver reduced the cost of moving power interstate, eliminating the
                            natural incentive to build closer to consumption centres. The result:
                            massive generation clusters in western India with insufficient evacuation
                            infrastructure.
                        </p>

                        <Callout title="KEY TAKEAWAY" color="orange">
                            The phased withdrawal will gradually redistribute RE development more
                            evenly across India, as developers will need to factor in ISTS charges
                            when selecting project locations. This should reduce geographic
                            bottlenecks over time — but the stranded capacity from the 100% waiver
                            era will take years to resolve through new transmission infrastructure.
                        </Callout>
                    </Section>

                    {/* SECTION 9 */}
                    <Section id="players" number="09" title="Private Players in Transmission — The TBCB Revolution">
                        <p>
                            India's ISTS development was historically a PGCIL monopoly. The
                            introduction of TBCB (Tariff Based Competitive Bidding) opened the door
                            for private players to build, own, and operate interstate transmission
                            assets. This has been transformative — bringing competition, driving down
                            tariffs, and accelerating capacity addition.
                        </p>

                        <h3 className="text-[18px] font-bold text-black mt-4 mb-2">
                            How TBCB Works
                        </h3>
                        <p>
                            RECPDCL or PFC Consulting creates an SPV for each transmission project
                            and conducts a competitive bidding process. Bidders compete on the annual
                            transmission charge they're willing to accept. The lowest bidder wins,
                            receives the SPV, and must build and operate the asset for the license
                            period (typically 35 years). The revenue model is a regulated, fixed
                            annual charge — making it attractive for infrastructure-focused investors.
                        </p>

                        <h3 className="text-[18px] font-bold text-black mt-6 mb-3">
                            Key TBCB Players (as of FY26)
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-[#fff6dd] border-b">
                                        <th className="p-3 text-left font-semibold">Company</th>
                                        <th className="p-3 text-left font-semibold">Profile</th>
                                        <th className="p-3 text-left font-semibold">Notable Wins</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["PGCIL", "Dominant; wins 40–50% of TBCB schemes", "Khavda (6 SPVs), Rajasthan 8.1 GW (Phase-2), Davangere, Sonbhadra"],
                                        ["Adani Energy Solutions", "Largest private transmission player", "WRNES Talegaon PSP scheme; multiple Rajasthan corridors"],
                                        ["Sterlite / Resonia", "Private transmission pioneer", "NER Expansion scheme (Jul 2025)"],
                                        ["GR Infraprojects", "New entrant from highways", "Rajgarh-Neemuch (MP) scheme (Aug 2025)"],
                                        ["HG Infra Engineering", "Newest debutant in TBCB", "Angul Sundargarh scheme (Jul 2025)"],
                                        ["Tata Power", "Integrated utility", "Multiple qualifications; Bikaner-III Neemrana-II LoI"],
                                        ["IndiGrid (Enerica)", "Infrastructure InvIT", "Qualified for Sonbhadra, Rajgarh-Neemuch"],
                                        ["Reliance Industries", "New entrant", "L1 for Kandla GHA scheme (Apr 2025)"],
                                        ["Dineshchandra Agrawal", "EPC-turned-developer", "Raghanesda RE scheme (Jul 2025)"],
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b hover:bg-amber-100 odd:bg-white even:bg-[#fffbf0]">

                                            <td className="p-3 font-semibold">{row[0]}</td>
                                            <td className="p-3 text-gray-600">{row[1]}</td>
                                            <td className="p-3 text-gray-600">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Callout title="MARKET OPPORTUNITY" color="green">
                            In FY26 (April–August 2025 alone), five ISTS-TBCB schemes were formally
                            transferred to developers, and the bidding pipeline is expected to grow by
                            ~₹29,000 crore with six major new schemes cleared recently. The entry of
                            highway builders (GR Infra, HG Infra) and conglomerates (Reliance)
                            signals that the market is large enough to attract diversified capital.
                        </Callout>
                    </Section>

                    {/* SECTION 10 */}
                    <Section id="future" number="10" title="What Needs to Change — The Road Ahead">
                        <p>
                            The structural challenge is clear: India's RE generation capacity is
                            growing at 2–3x the pace of transmission infrastructure. Solving this
                            requires coordinated action across several dimensions:
                        </p>

                        <div className="space-y-5 mt-2">
                            {[
                                {
                                    n: "1",
                                    title: "Transmission-First Sequencing",
                                    body: "Currently, generation projects are planned and commissioned before transmission infrastructure is ready. Flipping this — building transmission corridors ahead of generation — would prevent stranding. This requires longer planning horizons and tolerance for initial underutilisation of transmission assets, but it is the approach adopted by countries like Germany and China.",
                                },
                                {
                                    n: "2",
                                    title: "Advanced Conductors for Existing Corridors",
                                    body: "Advanced composite-core conductors can double the power-carrying capacity of existing transmission lines without building new towers. This is the fastest way to debottleneck existing corridors — particularly in Rajasthan, where RoW issues delay new line construction.",
                                },
                                {
                                    n: "3",
                                    title: "Massive Energy Storage Deployment",
                                    body: "India needs an estimated 411 GWh of energy storage capacity by 2032 to bridge the gap between when solar generates (daytime) and when demand peaks (evening). BESS costs are declining, but deployment is far behind targets. Pumped hydro storage (like the Sonbhadra and Talegaon projects) can provide longer-duration storage, but takes 4–6 years to build.",
                                },
                                {
                                    n: "4",
                                    title: "Adaptive Transmission Planning",
                                    body: "Moving from static five-year planning cycles to dynamic, semi-annual revision (as CEA has started doing) allows transmission planning to respond to the reality of RE deployment patterns rather than outdated projections.",
                                },
                                {
                                    n: "5",
                                    title: "Corridor-Wise Prioritisation & Accountability",
                                    body: "Establishing clear priority corridors — ranked by stranded capacity and economic impact — and assigning accountability for timely execution with penalties for delays would introduce the urgency the system currently lacks.",
                                },
                                {
                                    n: "6",
                                    title: "Reform in Right-of-Way Acquisition",
                                    body: "RoW disputes are the single largest cause of construction delays. Streamlining land acquisition processes, standardising compensation norms, and creating a dedicated fast-track mechanism for green energy corridors would have an outsized impact.",
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

                    {/* SECTION 11 */}
                    <Section id="glossary" number="11" title="Glossary of Key Terms">
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-[#fffbf0] border-b">
                                        <th className="p-3 text-left font-semibold">Term</th>
                                        <th className="p-3 text-left font-semibold">Full Form</th>
                                        <th className="p-3 text-left font-semibold">What It Means</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["ISTS", "Inter-State Transmission System", "The high-voltage grid that carries power across state boundaries"],
                                        ["GNA", "General Network Access", "Permission to inject/draw power from the ISTS grid; replaces old LTA/MTOA system"],
                                        ["T-GNA", "Temporary GNA", "Short-term grid access; first to be curtailed when corridors are congested"],
                                        ["TBCB", "Tariff Based Competitive Bidding", "The bidding process through which private players win ISTS projects"],
                                        ["SPV", "Special Purpose Vehicle", "A company created for each ISTS project; transferred to the winning developer"],
                                        ["BPC", "Bid Process Coordinator", "RECPDCL or PFC Consulting — the entity that runs the tender"],
                                        ["BOOT", "Build-Own-Operate-Transfer", "The business model for ISTS projects; developer builds, owns, operates for ~35 years"],
                                        ["TRAS", "Tertiary Reserve Ancillary Services", "Grid emergency mechanism used by NLDC to curtail generation"],
                                        ["GIS", "Gas Insulated Switchgear", "Compact switchgear used in substations; costs have risen sharply"],
                                        ["STATCOM", "Static Synchronous Compensator", "Reactive power compensation device; stabilises voltage on long transmission lines"],
                                        ["RoW", "Right of Way", "Legal permission to build transmission lines across land; major cause of delays"],
                                        ["DPR", "Detailed Project Report", "Technical and financial plan prepared by the TSP before construction begins"],
                                        ["GIB", "Great Indian Bustard", "Critically endangered bird; habitat restrictions mandate underground cabling in Rajasthan"],
                                        ["ALMM", "Approved List of Models & Manufacturers", "MNRE's mandatory list for solar modules/cells used in government-supported projects"],
                                    ].map((row, i) => (
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
                    <Section id="faq" number="12" title="Frequently Asked Questions">
                        <div className="space-y-6">
                            {[
                                {
                                    q: "What is ISTS in the context of solar energy?",
                                    a: "ISTS (Inter-State Transmission System) is the high-voltage transmission network that carries electricity across state boundaries. For solar energy, ISTS is essential because India's best solar zones (Rajasthan, Gujarat) are far from the major consumption centres (Delhi, Mumbai, Bengaluru). Without ISTS, solar power cannot reach the markets that need it.",
                                },
                                {
                                    q: "How long does it take to build an ISTS transmission line?",
                                    a: "The typical construction timeline is 24–36 months from the start of physical work. However, the full lifecycle — from RE zone identification to grid commissioning — takes 3–7 years when planning, regulatory approvals, tendering, and clearances are included. By comparison, a solar project can be commissioned in 12–24 months.",
                                },
                                {
                                    q: "Why is so much solar power being curtailed in India?",
                                    a: "Two primary reasons: (1) Grid emergency curtailment through TRAS, where NLDC reduces generation to maintain frequency stability, and (2) transmission corridor congestion, where the physical lines cannot carry all the power being generated. The root cause is that RE generation capacity has been added much faster than transmission infrastructure.",
                                },
                                {
                                    q: "Who builds ISTS lines — only PGCIL?",
                                    a: "No. Since the introduction of TBCB, private companies can bid for and build ISTS projects. PGCIL remains the largest player (winning 40–50% of schemes), but Adani Energy Solutions, Tata Power, Sterlite/Resonia, GR Infraprojects, HG Infra, Reliance Industries, and IndiGrid are all active in the space. The market is open and competitive.",
                                },
                                {
                                    q: "What is the ISTS charge waiver and is it still available?",
                                    a: "The ISTS charge waiver exempted RE projects from paying interstate transmission charges. It's being phased out: projects commissioned before June 2025 got 100% waiver, declining to 75%, 50%, 25% in successive years, and reaching 0% after June 2028. This means future RE projects will need to factor transmission charges into their cost calculations.",
                                },
                                {
                                    q: "What is GNA and how does it relate to ISTS?",
                                    a: "GNA (General Network Access) is the permission granted by CTU to a generator or consumer to use the ISTS grid. It replaced the earlier LTA (Long Term Access) and MTOA (Medium Term Open Access) system. Generators with GNA have a right to inject power into the grid, while T-GNA (Temporary GNA) holders have lower priority and are the first to face curtailment.",
                                },
                                {
                                    q: "How can I track upcoming ISTS tenders?",
                                    a: "Monitor RECPDCL's official website (recpdcl.in) and PFC Consulting for TBCB tender announcements. CTU (ctuil.in) publishes upcoming ISTS plans and connectivity grant information. Headsup B2B's Research Desk tracks and analyses major RE-related ISTS tenders as part of our solar procurement intelligence coverage.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="border-b border-gray-100 pb-5">
                                    
                                    <div className="font-bold text-[16px] mb-2">Q: {item.q}</div>
                                    <p className="text-[15px] text-gray-700 leading-[1.75]">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* FOOTER NOTE */}
                    <div className=" p-5 border border-black     rounded-lg text-[13px] text-gray-500 space-y-2 mb-5">
                        <p className="font-semibold text-black">Headsup B2B Research Desk</p>
                        <p>Headsup B2B Pvt. Ltd. · New Delhi</p>
                        <p>
                            Headsup B2B is India's B2B procurement marketplace for infrastructure
                            materials — TMT bars, solar equipment, structural steel, crash barriers,
                            and non-ferrous metals. Our Research Desk produces in-depth guides on
                            policy, procurement, and market intelligence for India's infrastructure
                            ecosystem.
                        </p>
                    </div>

                </main>
            </div>
        </>
    );
}
