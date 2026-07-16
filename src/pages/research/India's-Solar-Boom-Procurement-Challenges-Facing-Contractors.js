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

function ChallengeCard({ number, title, description }) {
    return (
        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-6">
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#5E3F99] mb-2">
                Challenge {number.toString().padStart(2, "0")}
            </div>
            <h4 className="text-[16px] font-semibold text-[#1A1410] mb-2 leading-[1.35]">{title}</h4>
            <p className="text-[13.5px] text-[#7A6E62] leading-[1.6] m-0">{description}</p>
        </div>
    );
}

export default function SolarProcurementChallengesPage() {
    return (
        <>
            <Head>
                <title>India's Solar Boom: Procurement Challenges Facing Contractors in 2026–27</title>
                <meta
                    name="description"
                    content="India is racing toward 500 GW of renewable energy. But behind every megawatt won is a procurement battle — with supply chain bottlenecks, price volatility, and compliance hurdles testing contractors at every step."
                />
                <meta
                    name="keywords"
                    content="solar procurement India, EPC contractors 2026, ALMM compliance, solar supply chain, B2B solar procurement, renewable energy contractors India"
                />
                <link rel="canonical" href="https://www.headsupb2b.com/research/India's-Solar-Boom-Procurement-Challenges-Facing-Contractors" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="India's Solar Boom: Procurement Challenges Facing Contractors in 2026–27" />
                <meta
                    property="og:description"
                    content="India is racing toward 500 GW of renewable energy. But behind every megawatt won is a procurement battle — with supply chain bottlenecks, price volatility, and compliance hurdles testing contractors at every step."
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/India's-Solar-Boom-Procurement-Challenges-Facing-Contractors" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:image" content="https://www.headsupb2b.com/India's-Solar-Boom-Procurement-Challenges-Facing-Contractors.webp" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="India's Solar Boom: Procurement Challenges Facing Contractors in 2026–27" />
                <meta
                    name="twitter:description"
                    content="India is racing toward 500 GW of renewable energy. But behind every megawatt won is a procurement battle — with supply chain bottlenecks, price volatility, and compliance hurdles testing contractors at every step."
                />
                <meta name="twitter:image" content="https://www.headsupb2b.com/India's-Solar-Boom-Procurement-Challenges-Facing-Contractors.webp" />
            </Head>

            {/* HERO */}
            <section className="relative overflow-hidden px-8 pt-20 pb-[72px] bg-headupb2b max-sm:px-4 mt-10">
                <div className="absolute inset-0 pointer-events-none" />
                <div className="relative max-w-[820px] mx-auto z-10">
                    <span
                        className="inline-block text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
                        style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                    >
                        Market Trends
                    </span>
                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[54px] leading-[1.15] text-white mb-6 max-w-[720px]">
                        India's Solar Boom: Procurement Challenges Facing Contractors in 2026–27
                    </h1>
                    <p className="text-[18px] text-[rgba(255,255,255,0.65)] max-w-[600px] leading-[1.65] mb-9">
                        India is racing toward 500 GW of renewable energy. But behind every megawatt won is a procurement battle — with supply chain bottlenecks, price volatility, and compliance hurdles testing contractors at every step.
                    </p>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        {[
                            "8 min read",
                            "Updated May 2026",
                            "EPC Companies & Contractors",
                            "Solar Procurement",
                            "India Renewable Energy",
                            "Contractors"
                        ].map((label) => (
                            <span
                                key={label}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: "white",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    padding: "6px 14px",
                                    borderRadius: 100,
                                    letterSpacing: "0.03em",
                                }}
                            >
                                <span
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: "#22A05A",
                                        flexShrink: 0,
                                    }}
                                />
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* PAGE BODY */}
            <main className="max-w-[820px] mx-auto px-8 pb-[100px] bg-[#FDFAF6] max-sm:px-4">
                {/* Key Takeaway */}
                <Callout variant="info" title="Key takeaway">
                    As India's solar pipeline swells past 100 GW installed, procurement complexity is the #1 operational risk for contractors and EPC firms in 2026–27.
                </Callout>

                {/* Intro */}
                <div className="text-[17px] leading-[1.8] text-[#3D3328] space-y-4 mt-8">
                    <p>
                        India added a record <strong>21 GW of solar capacity in FY25 alone</strong>, taking installed solar past the 100 GW milestone — and the FY26 pipeline is even more ambitious. With the government targeting 500 GW of non-fossil fuel capacity by 2030, the pressure on the ground is immense. Projects are getting bigger, timelines are tighter, and the supply chain is under unprecedented strain.
                    </p>
                    <p>
                        For contractors and EPC companies executing these projects, winning a bid is only half the battle. The real challenge begins when you need to procure high-quality solar equipment — on time, within budget, and from verified sources — across 20+ states with wildly different logistics realities.
                    </p>
                    <p>
                        This article breaks down the <strong>six most critical procurement challenges</strong> facing solar contractors in India today, and what forward-thinking firms are doing to solve them.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-10 mb-4 max-[580px]:grid-cols-2">
                    <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                        <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                            <span className="text-[#5E3F99]">500</span> GW
                        </div>
                        <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                            India's non-fossil fuel target by 2030
                        </div>
                    </div>
                    <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                        <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                            <span className="text-[#5E3F99]">21</span> GW
                        </div>
                        <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                            Solar capacity added in FY25 (record)
                        </div>
                    </div>
                    <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                        <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                            <span className="text-[#5E3F99]">₹2.5L</span> Cr
                        </div>
                        <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                            Estimated solar investment pipeline 2026–30
                        </div>
                    </div>
                    <div className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                        <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                            <span className="text-[#5E3F99]">40–60</span>%
                        </div>
                        <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                            Of project cost tied to equipment procurement
                        </div>
                    </div>
                </div>

                {/* Section: Procurement Gap */}
                <Section id="procurement-gap" title="The Procurement Gap Nobody Talks About">
                    <p>
                        India's renewable energy story is told in GW and gigajoules. But the operational reality on the ground is one of sourcing chaos, fragmented supplier bases, and procurement cycles that can delay projects by weeks or months.
                    </p>
                    <p>
                        For a utility-scale solar project, equipment procurement typically accounts for 40–60% of total project cost. A delay or quality failure in this single function ripples into commissioning timelines, penalty clauses, and financing costs. Yet most EPC firms still rely on fragmented, relationship-based sourcing — phone calls, informal quotes, and suppliers with no formal verification.
                    </p>
                    <p>
                        That approach worked in a smaller market. In a ₹2.5 lakh crore pipeline, it's a liability.
                    </p>

                    <blockquote className="border-l-[3px] border-[#5E3F99] my-9 px-7 py-5 bg-[#F4F1FA] rounded-r-md">
                        <p className="font-serif text-[22px] leading-[1.45] text-[#1A1410] italic m-0">
                            "We won the project on margin. We lost it on procurement. Material arrived 11 weeks late from three different suppliers — none of them coordinated."
                        </p>
                        <p className="text-[13px] text-[#7A6E62] mt-3 mb-0 not-italic">
                            — Senior Project Manager, Mid-size EPC firm, Rajasthan (2025)
                        </p>
                    </blockquote>
                </Section>

                {/* Section: 6 Challenges Overview */}
                <Section id="six-challenges" title="The 6 Biggest Procurement Challenges in 2026–27">
                    <p>
                        Below are the six most pressing procurement challenges facing solar contractors and EPC firms in India this year.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-3">
                        <ChallengeCard
                            number={1}
                            title="Supply Chain Fragmentation and Unverified Suppliers"
                            description="India's solar equipment supply base is vast but unorganised. Thousands of traders and distributors operate without formal certifications, creating quality and reliability risks at scale."
                        />
                        <ChallengeCard
                            number={2}
                            title="Import Duty Volatility and ALMM Compliance"
                            description="BCD on imported cells and modules (now 20% + AIDC) and the ALMM List I/II expansion create pricing uncertainty that can wipe project margins mid-cycle."
                        />
                        <ChallengeCard
                            number={3}
                            title="Working Capital Squeeze on Long-Cycle Projects"
                            description="EPC contractors are often expected to front equipment costs 60–90 days before receiving payments. Without flexible credit, smaller firms are forced to defer procurement or compromise on quality."
                        />
                        <ChallengeCard
                            number={4}
                            title="Pan-India Logistics and Last-Mile Delivery"
                            description="Solar projects are rarely in easy-to-reach locations. Delivering fragile panels, heavy inverters, and mounting structures to remote sites demands logistics infrastructure most suppliers lack."
                        />
                        <ChallengeCard
                            number={5}
                            title="BOQ Misalignment and Specification Drift"
                            description="Procurement teams often receive BOQs late or mid-revision. This leads to mis-sourced materials, rework, and returns that blow both budget and schedule."
                        />
                        <ChallengeCard
                            number={6}
                            title="Price Volatility of Raw Materials"
                            description="Polysilicon, aluminium for mounting structures, and copper for cables all exhibit high volatility. Locking in prices at bid stage while sourcing months later creates significant margin exposure."
                        />
                    </div>
                </Section>

                {/* Section: Challenge 1 */}
                <Section id="challenge-1" title="Challenge 1: Supplier Verification in an Unorganised Market">
                    <p>
                        India has thousands of solar equipment distributors, traders, and manufacturers — but a significant proportion operate without BIS certifications, MNRE empanelment, or verifiable track records. For a contractor issuing an RFQ for 5 MW worth of panels, distinguishing a reliable supplier from a fly-by-night one takes weeks of due diligence that most project timelines simply don't accommodate.
                    </p>
                    <p>
                        The consequences of getting this wrong are severe: substandard panels that fail performance tests post-installation, inverters that trip under load, or suppliers who simply don't deliver on commitment. Insurance and warranties mean little when your commissioning deadline has passed and penalties are accumulating.
                    </p>
                    <p>
                        The smart move is to pre-qualify suppliers before the project clock starts — and to leverage networks where verification is already done. Platforms that maintain verified supplier bases with audited credentials, performance histories, and quality certifications compress weeks of sourcing diligence into hours.
                    </p>
                </Section>

                {/* Section: Challenge 2 */}
                <Section id="challenge-2" title="Challenge 2: Navigating ALMM and Updated Customs Duty Structure">
                    <p>
                        The Approved List of Models and Manufacturers (ALMM) — now expanded to include ALMM List II for solar PV cells from June 2026 — has significantly narrowed the sourcing universe for EPC firms. While well-intentioned to promote domestic manufacturing, it creates real procurement constraints: ALMM-listed panels often carry a 10–15% premium over non-listed alternatives, and supply can be tight during peak project cycles.
                    </p>
                    <p>
                        The Union Budget 2025–26 significantly restructured customs duty. BCD on solar cells and modules was reduced from 25%/40% to a uniform 20%, but new Agriculture Infrastructure and Development Cess (AIDC) was introduced — 7.5% on cells and 20% on modules. Combined with GST on various BoS components, the total landed cost of a solar project is considerably higher than headline equipment prices suggest. Contractors who don't factor these into their BOQs at bid stage routinely find themselves squeezed by the time procurement begins.
                    </p>

                    {/* Risk Watch Box */}
                    <div className="border border-[#F5C8A0] bg-[#FEF4EA] rounded-[6px] p-6 my-7">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[18px]">⚠</span>
                            <strong className="text-[14px] font-semibold text-[#7A4A0A] tracking-[0.03em] uppercase">Procurement Risk Watch</strong>
                        </div>
                        <p className="text-[13px] font-semibold text-[#7A4A0A] mb-3">What's impacting solar project costs in 2026–27</p>
                        <ul className="space-y-2 text-[13.5px] text-[#8A5A1A] leading-[1.6]">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8900A]" />
                                BCD: 20% on cells and 20% on modules (revised w.e.f. 2 Feb 2025)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8900A]" />
                                AIDC: 7.5% on cells, 20% on modules (introduced Feb 2025) — effectively restoring import cost to pre-budget levels
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8900A]" />
                                ALMM List I mandatory for all SECI/NTPC projects; ALMM List II (cells) being phased in
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8900A]" />
                                Polysilicon spot prices remain well below 2022 peaks but volatile — June 2025 saw a ~6.5% week-on-week spike
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8900A]" />
                                Domestic module manufacturing capacity: ~74 GW (Mar 2025), nearly doubled from 38 GW (Mar 2024); cell capacity tripled to 25 GW
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8900A]" />
                                GST on inverters (12%), cables (18%), and mounting structures (18%) adds to landed cost
                            </li>
                        </ul>
                    </div>
                </Section>

                {/* Section: Challenge 3 */}
                <Section id="challenge-3" title="Challenge 3: The Working Capital Problem for Contractors">
                    <p>
                        This is the silent killer of many mid-size EPC and contractor businesses. The economics of a solar project demand that equipment is procured and delivered — often months before commissioning milestones trigger payment. A contractor running three or four concurrent projects faces a cash gap that can reach ₹5–15 crore at any given time.
                    </p>
                    <p>
                        Traditional financing options — bank overdrafts, NBFC loans — require collateral that many contractors don't have, or come with processing delays that make them impractical for fast-moving project timelines. The result: contractors either delay procurement (risking schedule), accept suboptimal supplier terms, or underbid future projects to maintain cash flow.
                    </p>
                    <p>
                        The emergence of collateral-free business credit — specifically designed for B2B procurement — is changing this dynamic. Credit terms of 45–60 days aligned to procurement cycles allow contractors to source at the right time without sacrificing margins. This is no longer a niche offering; it's becoming a procurement baseline for competitive EPC firms.
                    </p>
                </Section>

                {/* Section: Challenge 4 */}
                <Section id="challenge-4" title="Challenge 4: Logistics Across India's Diverse Project Landscape">
                    <p>
                        A utility-scale solar project in Rajasthan looks nothing like a rooftop project in a pharma SEZ in Hyderabad or a floating solar installation in Andhra Pradesh. The logistics of delivering solar panels — fragile, bulky, and time-sensitive — to each of these contexts requires specialised handling, route planning, and carrier relationships that most equipment suppliers simply don't have.
                    </p>
                    <p>
                        Pan-India fulfilment — with consistent standards across all 20+ states — is a capability gap that contractors routinely cite as a top operational risk. A supplier who can reliably deliver to Rajasthan may have no infrastructure in the Northeast. The answer isn't finding more suppliers; it's consolidating procurement with partners who have genuine national reach.
                    </p>
                </Section>

                {/* Section: Challenge 5 */}
                <Section id="challenge-5" title="Challenge 5: BOQ-Aligned Procurement in a Fast-Moving Project Environment">
                    <p>
                        A bill of quantities is the backbone of every solar project's procurement plan. But in the real world, BOQs are revised — sometimes multiple times — as design specifications evolve, site conditions change, or utility requirements shift. Procurement teams caught sourcing against an outdated BOQ end up with wrong-spec panels, over-ordered cables, or incompatible mounting hardware.
                    </p>
                    <p>
                        The solution is not to wait for a final BOQ — that rarely comes in time. It's to adopt procurement workflows that are natively linked to project documentation, with real-time updates that flag specification changes before purchase orders are issued. This is where the operational capability of a digital procurement platform pays for itself many times over.
                    </p>
                </Section>

                {/* Section: Challenge 6 */}
                <Section id="challenge-6" title="Challenge 6: Price Volatility of Raw Materials">
                    <p>
                        Solar economics are exposed to three globally traded commodities: polysilicon (the input to cells and modules), aluminium (mounting structures, frames), and copper (DC and AC cabling). Each one has demonstrated significant volatility in the last 36 months.
                    </p>
                    <p>
                        Polysilicon spot prices peaked above $38–40/kg in August 2022, then collapsed by over 75% through 2023 as Chinese capacity came online. They have remained low through 2024–25 but with sharp rebounds — June 2025 saw a near 6.5% week-on-week spike on news of Chinese capacity discipline. Aluminium and copper have similarly oscillated, driven by global manufacturing demand and macro shocks.
                    </p>
                    <p>
                        For a contractor who has bid a project at a fixed tariff and will source equipment 4–6 months later, this volatility is a margin killer. The leading response is twofold: hedge through volume commitments with verified suppliers who absorb some of the price risk, and use procurement platforms with live price benchmarks so the team knows in real time when the window to buy has opened or closed.
                    </p>
                </Section>

                {/* Section: What Leading Contractors Are Doing */}
                <Section id="leading-practice" title="What Leading Contractors Are Doing Differently">
                    <p>
                        The EPC firms consistently winning on solar execution have shifted from transactional procurement to strategic sourcing. They think about their supply chain as a competitive advantage — not an administrative function. Here's how they're approaching 2026–27:
                    </p>

                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14.5px]">
                            <thead>
                                <tr>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px]">
                                        Challenge
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        Old Approach
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 last:rounded-tr-[4px]">
                                        Leading Practice
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        challenge: "Supplier reliability",
                                        old: "Relationship-based, informal",
                                        leading: "Verified supplier networks with performance data",
                                    },
                                    {
                                        challenge: "Compliance",
                                        old: "Checked post-order",
                                        leading: "ALMM List I/II and BIS filtering built into sourcing platform",
                                    },
                                    {
                                        challenge: "Working capital",
                                        old: "Own funds or bank overdraft",
                                        leading: "Procurement-linked 60-day collateral-free credit",
                                    },
                                    {
                                        challenge: "Logistics",
                                        old: "Supplier-dependent, ad hoc",
                                        leading: "Pan-India fulfilment with milestone-based delivery",
                                    },
                                    {
                                        challenge: "BOQ alignment",
                                        old: "Manual cross-referencing",
                                        leading: "BOQ-mapped procurement with revision tracking",
                                    },
                                    {
                                        challenge: "Price discovery",
                                        old: "3 quotes, best price wins",
                                        leading: "Live commodity benchmarks with volume leverage",
                                    },
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 1 ? "bg-[#FDFAF6]" : ""}>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">
                                            {row.challenge}
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#7A6E62]">
                                            {row.old}
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">
                                            {row.leading}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* Section: Platform Opportunity */}
                <Section id="platform-opportunity" title="The Platform Opportunity for Contractors">
                    <p>
                        The shift from fragmented, offline procurement to structured, digital-first sourcing is well underway in India's B2B supply chain. In solar specifically, the combination of high project volumes, regulatory complexity, and capital intensity makes this shift not just beneficial — but necessary for firms that want to remain competitive.
                    </p>
                    <p>
                        Digital B2B procurement platforms purpose-built for infrastructure and renewable energy now offer what contractors actually need: verified suppliers, competitive pricing, BOQ-mapped delivery, pan-India fulfilment, and procurement-linked financing — all under one roof. The firms early to adopt these platforms are compressing their procurement cycles from weeks to days, and redirecting that efficiency into project delivery and margin improvement.
                    </p>

                    <blockquote className="border-l-[3px] border-[#5E3F99] my-9 px-7 py-5 bg-[#F4F1FA] rounded-r-md">
                        <p className="font-serif text-[22px] leading-[1.45] text-[#1A1410] italic m-0">
                            "India's solar ambition will be won or lost on procurement efficiency. The contractors who treat sourcing as a strategic capability — not a back-office task — will dominate the next decade of renewables execution."
                        </p>
                        <p className="text-[13px] text-[#7A6E62] mt-3 mb-0 not-italic">
                            — Editorial view, Headsup B2B Research
                        </p>
                    </blockquote>
                </Section>

                {/* Key Takeaways */}
                <section id="key-takeaways" className="pt-12">
                    <div className="border-t border-[#E8E0D4] pt-4 mb-4">
                        <h2 className="text-[30px] font-serif text-[#1A1410] leading-tight">
                            Key Takeaways for Contractors and EPC Firms
                        </h2>
                    </div>
                    <div className="space-y-4 mt-6">
                        {[
                            "Pre-qualify your supply chain before the project, not during it. Verified supplier networks reduce sourcing risk and compress due diligence timelines dramatically.",
                            "Build BCD, AIDC, and ALMM costs into your bids at day one. Compliance surprises mid-procurement are margin killers. Know your full regulatory exposure before you sign.",
                            "Treat working capital as a procurement tool. Collateral-free credit aligned to project milestones unlocks better timing, better suppliers, and better terms.",
                            "Demand pan-India fulfilment capability from your procurement partners. A supplier who's great in one state is a liability in a national portfolio.",
                            "Link your procurement to live BOQs and commodity benchmarks. Misaligned specifications and unhedged commodity exposure are more expensive than any unit price differential.",
                        ].map((point, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-[#E8E0D4] rounded-[6px] px-5 py-4">
                                <span className="shrink-0 w-7 h-7 rounded-full bg-headupb2b text-white text-[12px] font-bold flex items-center justify-center">
                                    {i + 1}
                                </span>
                                <p className="text-[15px] text-[#3D3328] leading-[1.7] m-0">{point}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-headupb2b rounded-[8px] px-10 py-12 mt-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-headupb2b" />
                    <h2 className="font-serif text-[28px] text-white mb-3">
                        Procure Smarter for Your Next Solar Project
                    </h2>
                    <p className="text-[16px] text-[rgba(255,255,255,0.6)] max-w-[480px] mx-auto mb-7">
                        Headsup B2B connects contractors and EPC firms to 1,000+ verified suppliers, BOQ-mapped delivery, and 60-day collateral-free business credit — across India.
                    </p>
                    <div style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                        className="inline-block text-white text-[14px] font-semibold px-8 py-3.5 rounded-[4px] tracking-[0.03em]">
                        Explore Procurement Solutions →
                    </div>

                </div>

                {/* FOOTER */}
                <div className="mt-16 pt-7 border-t border-[#E8E0D4] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[13px] text-[#7A6E62]">
                        Published May 2026 · Market Trends · Headsup B2B Research
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {["EPC", "Solar", "Procurement", "India", "Contractors"].map((t) => (
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