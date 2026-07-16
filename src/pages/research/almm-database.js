import GetInTouch from "@/component/Form/Contact/GetInTouch";
import Head from "next/head";
import { useState, useCallback } from "react";

/* ─── DATA ─── */
const DATA = [
    { rank: 1, name: "Waaree Energies", state: "Gujarat", cap: 21500, tech: ["Mono PERC", "TOPCon", "Bifacial", "Glass-Glass"], lists: "both", watt: "390–710 Wp", year: 2007 },
    { rank: 2, name: "Avaada Electro (Avaada Energy)", state: "Maharashtra / Gujarat", cap: 8220, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "list1", watt: "400–700 Wp", year: 2008 },
    { rank: 3, name: "FS Green Energies (Future Solar)", state: "Gujarat", cap: 5001, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "530–670 Wp", year: 2010 },
    { rank: 4, name: "Tata Power Solar (TP Solar / TPREL)", state: "Tamil Nadu / Karnataka", cap: 8200, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "both", watt: "400–700 Wp", year: 1989 },
    { rank: 5, name: "ReNew Photovoltaics", state: "Rajasthan / Telangana", cap: 4600, tech: ["Mono PERC", "Bifacial"], lists: "both", watt: "540–680 Wp", year: 2019 },
    { rank: 6, name: "Adani Solar (Mundra Solar PV)", state: "Gujarat", cap: 5000, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "both", watt: "440–680 Wp", year: 2016 },
    { rank: 7, name: "FS India Solar Ventures (First Solar)", state: "Tamil Nadu", cap: 3433, tech: ["CdTe Thin Film"], lists: "both", watt: "430–450 Wp", year: 2021 },
    { rank: 8, name: "Saatvik Green Energy", state: "Haryana / Rajasthan", cap: 3800, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "list1", watt: "540–700 Wp", year: 2018 },
    { rank: 9, name: "Premier Energies", state: "Telangana", cap: 3200, tech: ["Mono PERC", "Bifacial", "TOPCon"], lists: "both", watt: "370–700 Wp", year: 1995 },
    { rank: 10, name: "Emmvee Solar (Emmvee Energy)", state: "Karnataka", cap: 6600, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "both", watt: "390–720 Wp", year: 1992 },
    { rank: 11, name: "Vikram Solar", state: "West Bengal / Tamil Nadu", cap: 3500, tech: ["Mono PERC", "TOPCon", "Bifacial", "HJT"], lists: "list1", watt: "375–700 Wp", year: 2006 },
    { rank: 12, name: "Goldi Solar", state: "Gujarat", cap: 2200, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "list1", watt: "430–660 Wp", year: 2011 },
    { rank: 13, name: "Rayzon Solar", state: "Gujarat", cap: 2800, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "list1", watt: "440–695 Wp", year: 2015 },
    { rank: 14, name: "Znshine Solarworld", state: "Gujarat", cap: 1552, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "list1", watt: "430–700 Wp", year: 2024 },
    { rank: 15, name: "Inox Solar (Inox Wind Energy)", state: "Rajasthan", cap: 1274, tech: ["Mono PERC", "TOPCon"], lists: "list1", watt: "540–680 Wp", year: 2023 },
    { rank: 16, name: "SAEL Solar", state: "Gujarat / Rajasthan", cap: 2065, tech: ["Mono PERC", "TOPCon", "Bifacial"], lists: "list1", watt: "540–700 Wp", year: 2019 },
    { rank: 17, name: "Navitas Solar", state: "Gujarat", cap: 1142, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "430–545 Wp", year: 2014 },
    { rank: 18, name: "Sova Solar", state: "Odisha", cap: 1368, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "430–545 Wp", year: 2012 },
    { rank: 19, name: "Gautam Solar", state: "Uttarakhand", cap: 1000, tech: ["Mono PERC", "TOPCon", "Bifacial", "Poly"], lists: "list1", watt: "40–670 Wp", year: 1998 },
    { rank: 20, name: "Solex Energy", state: "Gujarat", cap: 1500, tech: ["Mono PERC", "Bifacial", "Poly"], lists: "list1", watt: "40–575 Wp", year: 2010 },
    { rank: 21, name: "INA Solar", state: "Gujarat", cap: 1100, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "435–555 Wp", year: 2015 },
    { rank: 22, name: "Jupiter International", state: "Karnataka", cap: 779, tech: ["Mono PERC", "Bifacial"], lists: "both", watt: "390–545 Wp", year: 2008 },
    { rank: 23, name: "Websol Energy Systems", state: "West Bengal", cap: 602, tech: ["Mono PERC", "Bifacial"], lists: "both", watt: "400–545 Wp", year: 1994 },
    { rank: 24, name: "Evervolt Solar Technology India", state: "Andhra Pradesh", cap: 1074, tech: ["Mono PERC", "Bifacial"], lists: "both", watt: "540–670 Wp", year: 2022 },
    { rank: 25, name: "Emmvee Energy (Cell Mfr)", state: "Karnataka", cap: 1553, tech: ["TOPCon", "Bifacial"], lists: "both", watt: "—", year: 1992 },
    { rank: 26, name: "RenewSys India", state: "Maharashtra", cap: 650, tech: ["Mono PERC", "Poly", "Bifacial"], lists: "list1", watt: "25–555 Wp", year: 2011 },
    { rank: 27, name: "Bluebird Solar", state: "Gujarat / Delhi", cap: 750, tech: ["Mono PERC", "Poly", "Bifacial"], lists: "list1", watt: "3–550 Wp", year: 2014 },
    { rank: 28, name: "Frontier Energy", state: "Maharashtra", cap: 548, tech: ["Mono PERC", "TOPCon"], lists: "list1", watt: "540–680 Wp", year: 2024 },
    { rank: 29, name: "Macwin Solar Energy", state: "Gujarat", cap: 405, tech: ["Mono PERC", "TOPCon"], lists: "list1", watt: "430–700 Wp", year: 2022 },
    { rank: 30, name: "Kosol Energy", state: "Gujarat", cap: 450, tech: ["Mono PERC", "Bifacial", "TOPCon"], lists: "list1", watt: "380–700 Wp", year: 2013 },
    { rank: 31, name: "Eastman Auto & Power", state: "Haryana", cap: 374, tech: ["Mono PERC", "Poly"], lists: "list1", watt: "10–540 Wp", year: 2007 },
    { rank: 32, name: "Insolation Energy", state: "Rajasthan", cap: 410, tech: ["Mono PERC", "Poly", "Bifacial"], lists: "list1", watt: "50–545 Wp", year: 2012 },
    { rank: 33, name: "Loom Solar", state: "Haryana (Faridabad)", cap: 250, tech: ["Mono PERC", "Bifacial", "TOPCon"], lists: "list1", watt: "5–670 Wp", year: 2018 },
    { rank: 34, name: "Servotech Power Systems", state: "Delhi / Haryana", cap: 300, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "60–545 Wp", year: 2004 },
    { rank: 35, name: "Grew Energy", state: "Tamil Nadu", cap: 189, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "430–545 Wp", year: 2019 },
    { rank: 36, name: "Patanjali Renewable Energy", state: "Uttarakhand", cap: 200, tech: ["Mono PERC", "Poly"], lists: "list1", watt: "40–545 Wp", year: 2020 },
    { rank: 37, name: "Sirius Solar Energy Systems", state: "Gujarat", cap: 67, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "430–545 Wp", year: 2021 },
    { rank: 38, name: "Jeem Energy", state: "Gujarat", cap: 172, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "430–550 Wp", year: 2021 },
    { rank: 39, name: "Rhine Solar", state: "Gujarat", cap: 85, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "435–545 Wp", year: 2022 },
    { rank: 40, name: "Spark Solar", state: "Rajasthan", cap: 60, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "430–545 Wp", year: 2022 },
    { rank: 41, name: "Genus Innovation", state: "Rajasthan", cap: 75, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "430–545 Wp", year: 2022 },
    { rank: 42, name: "Fujiyama Power Systems", state: "Haryana", cap: 63, tech: ["Mono PERC", "Bifacial"], lists: "list1", watt: "375–545 Wp", year: 2020 },
    { rank: 43, name: "Green Valley Motors", state: "Karnataka", cap: 34, tech: ["Mono PERC"], lists: "list1", watt: "380–545 Wp", year: 2023 },
];

const MAXCAP = Math.max(...DATA.map((d) => d.cap));

const CHIP_CONFIG = [
    { key: "perc", label: "Mono PERC" },
    { key: "topcon", label: "TOPCon" },
    { key: "hjt", label: "HJT" },
    { key: "thin", label: "Thin Film" },
    { key: "bifacial", label: "Bifacial" },
    { key: "poly", label: "Poly" },
];

/* ─── HELPERS ─── */
function capFmt(v) {
    return v >= 1000 ? (v / 1000).toFixed(2) + " GW" : v + " MW";
}

function getTechClasses(t) {
    if (t.includes("TOPCon")) return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
    if (t.includes("PERC")) return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    if (t.includes("HJT")) return "bg-violet-500/10 text-violet-400 border border-violet-500/20";
    if (t.includes("Thin") || t.includes("CdTe")) return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
    if (t.includes("Bifacial")) return "bg-pink-500/10 text-pink-400 border border-pink-500/20";
    return "bg-slate-500/10 text-slate-400 border border-slate-500/20";
}

function getChipActiveClasses(key) {
    const map = {
        perc: "bg-blue-500/15 border-blue-400 text-blue-400",
        topcon: "bg-emerald-500/12 border-emerald-400 text-emerald-400",
        hjt: "bg-violet-500/12 border-violet-400 text-violet-400",
        thin: "bg-amber-500/12 border-amber-400 text-amber-400",
        bifacial: "bg-pink-500/12 border-pink-400 text-pink-400",
        poly: "bg-slate-500/12 border-slate-400 text-slate-400",
    };
    return map[key] || "bg-blue-500/15 border-blue-400 text-blue-400";
}

/* ─── STATS STRIP DATA ─── */
const STRIP_STATS = [
    { num: "₹0 BCD", label: "on ALMM-listed modules (exempt)", bar: "bg-amber-500", text: "text-amber-400" },
    { num: "Jun 2026", label: "List-II (Cells) Mandatory Date", bar: "bg-emerald-500", text: "text-emerald-400" },
    { num: "0 Chinese", label: "Manufacturers on ALMM", bar: "bg-blue-500", text: "text-blue-400" },
    { num: "Jun 2028", label: "List-III (Wafers) Expected", bar: "bg-orange-500", text: "text-orange-400" },
];

/* ─── MAIN COMPONENT ─── */
export default function AlmmDatabase() {
    const [activeTab, setActiveTab] = useState("list1");
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("rank");
    const [chips, setChips] = useState({});
    const [copyHint, setCopyHint] = useState("click to copy");

    const toggleChip = useCallback((key) => {
        setChips((prev) => ({ ...prev, [key]: !prev[key] }));
    }, []);

    /* ─── FILTER + SORT ─── */
    const src = activeTab === "list1" ? DATA : DATA.filter((d) => d.lists === "both");
    const q = query.trim().toLowerCase();
    const activeChips = Object.keys(chips).filter((k) => chips[k]);
    const [showRequestQuote, setShowRequestQuote] = useState(false);

    const filtered = src
        .filter((d) => {
            if (q && !d.name.toLowerCase().includes(q) && !d.state.toLowerCase().includes(q) && !d.tech.some((t) => t.toLowerCase().includes(q))) return false;
            if (activeChips.length > 0) {
                const ts = d.tech.join(" ").toLowerCase();
                const hit = activeChips.some((c) => {
                    if (c === "perc") return ts.includes("perc");
                    if (c === "topcon") return ts.includes("topcon");
                    if (c === "hjt") return ts.includes("hjt");
                    if (c === "thin") return ts.includes("thin") || ts.includes("cdte");
                    if (c === "bifacial") return ts.includes("bifacial");
                    if (c === "poly") return ts.includes("poly");
                    return false;
                });
                if (!hit) return false;
            }
            return true;
        })
        .sort((a, b) => {
            if (sort === "rank") return a.rank - b.rank;
            if (sort === "capacity") return b.cap - a.cap;
            if (sort === "name") return a.name.localeCompare(b.name);
            if (sort === "year") return a.year - b.year;
            return 0;
        });


    return (
        <div className="bg-white text-slate-200 mt-10 min-h-screen font-['Syne',sans-serif]">
                    <Head>
    {/* ── Core ── */}
    <title>India's Complete ALMM Solar Database</title>
    <meta
        name="description"
        content="The Approved List of Models & Manufacturers (ALMM) by MNRE — every certified solar module and cell manufacturer, their capacities, technologies, and eligibility for government projects."
    />
    <meta
        name="keywords"
        content="ALMM India 2025, approved solar module manufacturers, MNRE ALMM list, List-I solar modules, List-II solar cells, solar procurement India, ALMM compliance 2026, solar EPC India, ALMM approved manufacturers"
    />

    {/* ── Canonical ── */}
    <link rel="canonical" href="https://www.headsupb2b.com/research/almm-database" />

    {/* ── Robots ── */}
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

    {/* ── Open Graph ── */}
    <meta property="og:type" content="article" />
    <meta property="og:title" content="India's Complete ALMM Solar Database" />
    <meta
        property="og:description"
        content="The Approved List of Models & Manufacturers (ALMM) by MNRE — every certified solar module and cell manufacturer, their capacities, technologies, and eligibility for government projects."
    />
    <meta property="og:url" content="https://www.headsupb2b.com/research/almm-database" />
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
    <meta name="twitter:title" content="India's Complete ALMM Solar Database" />
    <meta
        name="twitter:description"
        content="The Approved List of Models & Manufacturers (ALMM) by MNRE — every certified solar module and cell manufacturer, their capacities, technologies, and eligibility for government projects."
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
                headline: "India's Complete ALMM Solar Database",
                description: "The Approved List of Models & Manufacturers (ALMM) by MNRE — every certified solar module and cell manufacturer, their capacities, technologies, and eligibility for government projects.",
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
                    "@id": "https://www.headsupb2b.com/research/almm-database",
                },
            }),
        }}
    />
</Head>
            {/* ── HERO ── */}
            <section className="relative overflow-hidden border-b border-[#1e3050] bg-headupb2b px-6 pt-14 pb-9"
            >
                {/* glows */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[400px]"
                    style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 65%)" }} />
                <div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[300px]"
                    style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 65%)" }} />

                <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/25 rounded-full px-3 py-1 font-mono-ibm text-[10px] text-amber-400 tracking-widest uppercase mb-4">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-dot" />
                    MNRE ALMM — Updated Dec 2025
                </div>

                <h1 className="text-[38px] md:text-[42px] font-extrabold tracking-[-1.5px] leading-[1.1] max-w-[700px] mb-3.5">
                    India's Complete<br />
                    <span className="bg-gradient-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent">
                        ALMM Solar Database
                    </span>
                </h1>
                <p className="text-[15px] text-white max-w-[580px] leading-relaxed mb-7">
                    The Approved List of Models &amp; Manufacturers (ALMM) by MNRE — every certified solar module and cell manufacturer,
                    their capacities, technologies, and eligibility for government projects.
                </p>

                <div className="flex gap-7 flex-wrap">
                    {[
                        { num: "144 GW+", label: "Module Capacity (List-I)" },
                        { num: "100+", label: "Module Manufacturers" },
                        { num: "26.7 GW", label: "Cell Capacity (List-II)" },
                        { num: "10", label: "Cell Manufacturers" },
                    ].map(({ num, label }, i, arr) => (
                        <div key={num} className="flex items-stretch gap-7">
                            <div className="flex flex-col">
                                <span className="font-mono-ibm text-[26px] font-semibold text-amber-400 tracking-tight leading-none">{num}</span>
                                <span className="text-[10px] text-white uppercase tracking-widest mt-1">{label}</span>
                            </div>
                            {i < arr.length - 1 && <div className="w-px bg-[#1e3050]" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── STATS STRIP ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-black">
                {STRIP_STATS.map(({ num, label, bar, text }) => (
                    <div key={num} className="relative px-5 py-4 bg-headupb2b border-r border-[#1e3050] last:border-r-0 overflow-hidden">
                        <div className={`absolute bottom-0 left-0 right-0 h-[3px] opacity-70 ${bar}`} />
                        <div className={`font-mono-ibm text-[22px] font-semibold tracking-tight ${text}`}>{num}</div>
                        <div className="text-[10px] text-white uppercase tracking-widest mt-0.5">{label}</div>
                    </div>
                ))}
            </div>

            {/* ── CONTROLS ── */}
            <div className="bg-[#687d9e] border-b border-[#1e3050] px-5 py-3.5 flex gap-2.5 items-center flex-wrap sticky top-[55px] z-50">
                {/* Tab Group */}
                <div className="flex gap-0.5 bg-lightHeadsup rounded-lg p-[3px] border border-[#1e3050]">
                    {[
                        { id: "list1", label: "☀ List-I · Modules" },
                        { id: "list2", label: "⚡ List-II · Cells" },
                    ].map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`px-4 py-[7px] rounded-md border-none cursor-pointer text-xs font-bold transition-all tracking-wide whitespace-nowrap
                ${activeTab === id
                                    ? "bg-headupb2b text-white"
                                    : "bg-transparent text-black hover:text-slate-200"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative flex-1 min-w-[180px] max-w-[300px]">
                    <span className="absolute left-3  top-1/2 -translate-y-1/2 text-[#4b6080] text-sm pointer-events-none">⌕</span>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search manufacturer, state, tech…"
                        className="w-full bg-headupb2b border border-[#1e3050] text-white rounded-lg py-2 pl-8 pr-3 font-mono-ibm text-xs outline-none focus:border-amber-500 transition-colors"
                    />
                </div>

                {/* Tech Chips */}
                {activeTab === "list1" && CHIP_CONFIG.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => toggleChip(key)}
                        className={`px-3 py-1.5 rounded-full border text-xs font-semibold cursor-pointer transition-all whitespace-nowrap
              ${chips[key]
                                ? getChipActiveClasses(key)
                                : "border-[#1e3050] bg-headupb2b text-white hover:border-slate-400 hover:text-slate-200"}`}
                    >
                        {label}
                    </button>
                ))}

                {/* Sort */}
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="px-2.5 py-[7px] rounded-lg border border-[#1e3050] bg-headupb2b text-slate-200 text-[11px] cursor-pointer outline-none"
                >
                    <option value="rank">Sort: Rank</option>
                    <option value="capacity">Sort: Capacity ↓</option>
                    <option value="name">Sort: Name A–Z</option>
                    <option value="year">Sort: Year Est.</option>
                </select>

                <div className="font-mono-ibm text-[11px] text-black ml-auto whitespace-nowrap">
                    <b className="text-emerald-400">{filtered.length}</b> of {src.length}
                </div>
            </div>

            {/* ── TABLE ── */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#687d9e] border-b-2 border-[#1e3050]">
                            {["#", "Manufacturer", "State / Location", "ALMM Capacity", "Technology", "Watt Range", "Listed", "Est."].map((h) => (
                                <th key={h} className="px-4 py-[11px] text-left text-[9px] font-bold tracking-[1.5px] uppercase text-white whitespace-nowrap">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center py-20 text-[#4b6080]">
                                    <div className="text-5xl mb-3">🔍</div>
                                    <div>No manufacturers match your current filters.</div>
                                </td>
                            </tr>
                        ) : (
                            filtered.map((d) => {
                                const pct = ((d.cap / MAXCAP) * 100).toFixed(1);
                                const rankColor =
                                    d.rank === 1 ? "text-amber-400" :
                                        d.rank === 2 ? "text-slate-400" :
                                            d.rank === 3 ? "text-[#b97b45]" : "text-[#4b6080]";
                                return (
                                    <tr key={d.rank} className="group border-b border-[#1e3050] hover:bg-[#687d9e]  transition-colors">
                                        {/* Rank */}
                                        <td className="px-4 py-[11px]">
                                            <span className={`font-mono-ibm text-xs font-semibold ${rankColor}`}>{d.rank}</span>
                                        </td>
                                        {/* Name */}
                                        <td className="px-4 py-[11px] ">
                                            <div className="font-bold text-[13px] group-hover:text-white text-black">{d.name}</div>
                                        </td>
                                        {/* State */}
                                        <td className="px-4 py-[11px]">
                                            <div className="font-mono-ibm text-[10px] group-hover:text-white text-black">{d.state}</div>
                                        </td>
                                        {/* Capacity */}
                                        <td className="px-4 py-[11px]">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono-ibm text-[13px] font-semibold text-amber-400 min-w-[62px]">
                                                    {capFmt(d.cap)}
                                                </span>
                                                <div className="flex-1 h-1 bg-[#1e3050] rounded-sm min-w-[50px] max-w-[100px]">
                                                    <div
                                                        className="h-full rounded-sm"
                                                        style={{ width: `${pct}%`, background: "linear-gradient(90deg, #f97316, #f59e0b)" }}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        {/* Tech Tags */}
                                        <td className="px-4 py-[11px]">
                                            <div className="flex flex-wrap gap-1">
                                                {d.tech.map((t) => (
                                                    <span key={t} className={`text-[9px] px-1.5 py-0.5 rounded font-mono-ibm tracking-wide whitespace-nowrap ${getTechClasses(t)}`}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        {/* Watt */}
                                        <td className="px-4 py-[11px]">
                                            <span className="font-mono-ibm text-[11px] group-hover:text-white text-black">{d.watt}</span>
                                        </td>
                                        {/* Listed */}
                                        <td className="px-4 py-[11px]">
                                            {d.lists === "both" ? (
                                                <span className="font-mono-ibm text-[9px] px-2 py-0.5 rounded font-semibold bg-violet-500/12 text-violet-400 border border-violet-500/25">
                                                    I + II
                                                </span>
                                            ) : (
                                                <span className="font-mono-ibm text-[9px] px-2 py-0.5 rounded font-semibold bg-orange-500/12 text-orange-400 border border-orange-500/20">
                                                    List-I
                                                </span>
                                            )}
                                        </td>
                                        {/* Year */}
                                        <td className="px-4 py-[11px]">
                                            <span className="font-mono-ibm text-[11px] text-black group-hover:text-white">{d.year}</span>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>

                <div className="border-t border-b border-[#1e3050] bg-[#687d9e] px-6 py-9 flex items-center justify-between gap-6 flex-wrap">
                    <div>
                        <h2 className="text-[22px] font-extrabold text-white tracking-tight mb-1.5">
                            Source Solar Modules from{" "}
                            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                ALMM-Listed Suppliers
                            </span>
                        </h2>
                        <p className="text-[13px] text-white max-w-[480px] leading-relaxed">
                            Headsup B2B connects solar EPCs, developers, and government agencies with verified, ALMM-compliant module suppliers across India. Get competitive quotes, verified quality, and T+1 payment support via Mintifi.
                        </p>
                    </div>
                    <div className="flex gap-2.5 flex-wrap">
                        {/* <a href="/#sourcing" className="bg-gradient-to-br from-orange-500 to-amber-500 text-black font-bold text-[13px] px-6 py-[11px] rounded-lg no-underline hover:opacity-90 transition-opacity">
            Source Solar Modules →
          </a> */}
                        <button
                            type="button"
                            className="block text-center text-white font-bold text-[13px] px-4 py-[11px] rounded-[7px] no-underline transition-opacity hover:opacity-90"
                            onClick={() => setShowRequestQuote(true)}
                            style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                        >
                            Talk to a Procurement Expert
                        </button>
                    </div>
                </div>
            </div>

            {showRequestQuote && (
                <GetInTouch onClose={() => setShowRequestQuote(false)} />
            )}
        </div>
    );
}
