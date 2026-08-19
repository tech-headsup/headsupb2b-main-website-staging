"use client";

import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

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

function ChallengeCard({ number, title, description, challengeLabel }) {
    return (
        <div className="bg-white border border-[#E8E0D4] rounded-[6px] p-6">
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#5E3F99] mb-2">
                {challengeLabel} {number.toString().padStart(2, "0")}
            </div>
            <h4 className="text-[16px] font-semibold text-[#1A1410] mb-2 leading-[1.35]">{title}</h4>
            <p className="text-[13.5px] text-[#7A6E62] leading-[1.6] m-0">{description}</p>
        </div>
    );
}

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

export default function SolarProcurementChallengesPage() {
    const { t } = useTranslation();

    const HERO_TAGS = t("solarBoom.heroTags", { returnObjects: true }) || [];
    const STATS = t("solarBoom.stats", { returnObjects: true }) || [];
    const CHALLENGES_LIST = t("solarBoom.challengesList", { returnObjects: true }) || [];
    const RISK_WATCH_ITEMS = t("solarBoom.riskWatch.items", { returnObjects: true }) || [];
    const LEADING_TABLE_ROWS = t("solarBoom.leadingTable.rows", { returnObjects: true }) || [];
    const KEY_TAKEAWAYS = t("solarBoom.keyTakeaways.points", { returnObjects: true }) || [];
    const FOOTER_TAGS = t("solarBoom.footerTags", { returnObjects: true }) || [];

    return (
        <>
            <Head>
                <title>{t("solarBoom.meta.title")}</title>
                <meta
                    name="description"
                    content={t("solarBoom.meta.description")}
                />
                <meta
                    name="keywords"
                    content={t("solarBoom.meta.keywords")}
                />
                <link rel="canonical" href="https://www.headsupb2b.com/research/India's-Solar-Boom-Procurement-Challenges-Facing-Contractors" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={t("solarBoom.meta.ogTitle")} />
                <meta
                    property="og:description"
                    content={t("solarBoom.meta.ogDescription")}
                />
                <meta property="og:url" content="https://www.headsupb2b.com/research/India's-Solar-Boom-Procurement-Challenges-Facing-Contractors" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:image" content="https://www.headsupb2b.com/India's-Solar-Boom-Procurement-Challenges-Facing-Contractors.webp" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("solarBoom.meta.twitterTitle")} />
                <meta
                    name="twitter:description"
                    content={t("solarBoom.meta.twitterDescription")}
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
                        {t("solarBoom.hero.badge")}
                    </span>
                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[54px] leading-[1.15] text-white mb-6 max-w-[720px]">
                        {t("solarBoom.hero.title")}
                    </h1>
                    <p className="text-[18px] text-[rgba(255,255,255,0.65)] max-w-[600px] leading-[1.65] mb-9">
                        {t("solarBoom.hero.subtitle")}
                    </p>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        {HERO_TAGS.map((label) => (
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
                <Callout variant="info" title={t("solarBoom.keyTakeaway.title")}>
                    {t("solarBoom.keyTakeaway.body")}
                </Callout>

                {/* Intro */}
                <div className="text-[17px] leading-[1.8] text-[#3D3328] space-y-4 mt-8">
                    <p {...HTML(t("solarBoom.intro.p1"))} />
                    <p {...HTML(t("solarBoom.intro.p2"))} />
                    <p {...HTML(t("solarBoom.intro.p3"))} />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-10 mb-4 max-[580px]:grid-cols-2">
                    {STATS.map((stat, i) => (
                        <div key={i} className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                            <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                <span className="text-[#5E3F99]">{stat.value}</span> {stat.unit}
                            </div>
                            <div className="text-[13px] text-[#7A6E62] leading-[1.4]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section: Procurement Gap */}
                <Section id="procurement-gap" title={t("solarBoom.procurementGap.title")}>
                    <p {...HTML(t("solarBoom.procurementGap.p1"))} />
                    <p {...HTML(t("solarBoom.procurementGap.p2"))} />
                    <p {...HTML(t("solarBoom.procurementGap.p3"))} />

                    <blockquote className="border-l-[3px] border-[#5E3F99] my-9 px-7 py-5 bg-[#F4F1FA] rounded-r-md">
                        <p className="font-serif text-[22px] leading-[1.45] text-[#1A1410] italic m-0">
                            {t("solarBoom.procurementGap.quote")}
                        </p>
                        <p className="text-[13px] text-[#7A6E62] mt-3 mb-0 not-italic">
                            {t("solarBoom.procurementGap.quoteAttribution")}
                        </p>
                    </blockquote>
                </Section>

                {/* Section: 6 Challenges Overview */}
                <Section id="six-challenges" title={t("solarBoom.sixChallenges.title")}>
                    <p {...HTML(t("solarBoom.sixChallenges.intro"))} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-3">
                        {CHALLENGES_LIST.map((c, i) => (
                            <ChallengeCard
                                key={i}
                                number={i + 1}
                                title={c.title}
                                description={c.description}
                                challengeLabel={t("solarBoom.challengeLabel")}
                            />
                        ))}
                    </div>
                </Section>

                {/* Section: Challenge 1 */}
                <Section id="challenge-1" title={t("solarBoom.challenge1.title")}>
                    <p {...HTML(t("solarBoom.challenge1.p1"))} />
                    <p {...HTML(t("solarBoom.challenge1.p2"))} />
                    <p {...HTML(t("solarBoom.challenge1.p3"))} />
                </Section>

                {/* Section: Challenge 2 */}
                <Section id="challenge-2" title={t("solarBoom.challenge2.title")}>
                    <p {...HTML(t("solarBoom.challenge2.p1"))} />
                    <p {...HTML(t("solarBoom.challenge2.p2"))} />

                    {/* Risk Watch Box */}
                    <div className="border border-[#F5C8A0] bg-[#FEF4EA] rounded-[6px] p-6 my-7">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[18px]">⚠</span>
                            <strong className="text-[14px] font-semibold text-[#7A4A0A] tracking-[0.03em] uppercase">{t("solarBoom.riskWatch.title")}</strong>
                        </div>
                        <p className="text-[13px] font-semibold text-[#7A4A0A] mb-3">{t("solarBoom.riskWatch.subtitle")}</p>
                        <ul className="space-y-2 text-[13.5px] text-[#8A5A1A] leading-[1.6]">
                            {RISK_WATCH_ITEMS.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8900A]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>

                {/* Section: Challenge 3 */}
                <Section id="challenge-3" title={t("solarBoom.challenge3.title")}>
                    <p {...HTML(t("solarBoom.challenge3.p1"))} />
                    <p {...HTML(t("solarBoom.challenge3.p2"))} />
                    <p {...HTML(t("solarBoom.challenge3.p3"))} />
                </Section>

                {/* Section: Challenge 4 */}
                <Section id="challenge-4" title={t("solarBoom.challenge4.title")}>
                    <p {...HTML(t("solarBoom.challenge4.p1"))} />
                    <p {...HTML(t("solarBoom.challenge4.p2"))} />
                </Section>

                {/* Section: Challenge 5 */}
                <Section id="challenge-5" title={t("solarBoom.challenge5.title")}>
                    <p {...HTML(t("solarBoom.challenge5.p1"))} />
                    <p {...HTML(t("solarBoom.challenge5.p2"))} />
                </Section>

                {/* Section: Challenge 6 */}
                <Section id="challenge-6" title={t("solarBoom.challenge6.title")}>
                    <p {...HTML(t("solarBoom.challenge6.p1"))} />
                    <p {...HTML(t("solarBoom.challenge6.p2"))} />
                    <p {...HTML(t("solarBoom.challenge6.p3"))} />
                </Section>

                {/* Section: What Leading Contractors Are Doing */}
                <Section id="leading-practice" title={t("solarBoom.leadingPractice.title")}>
                    <p {...HTML(t("solarBoom.leadingPractice.intro"))} />

                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14.5px]">
                            <thead>
                                <tr>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px]">
                                        {t("solarBoom.leadingTable.thChallenge")}
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3">
                                        {t("solarBoom.leadingTable.thOld")}
                                    </th>
                                    <th className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 last:rounded-tr-[4px]">
                                        {t("solarBoom.leadingTable.thLeading")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {LEADING_TABLE_ROWS.map((row, i) => (
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
                <Section id="platform-opportunity" title={t("solarBoom.platformOpportunity.title")}>
                    <p {...HTML(t("solarBoom.platformOpportunity.p1"))} />
                    <p {...HTML(t("solarBoom.platformOpportunity.p2"))} />

                    <blockquote className="border-l-[3px] border-[#5E3F99] my-9 px-7 py-5 bg-[#F4F1FA] rounded-r-md">
                        <p className="font-serif text-[22px] leading-[1.45] text-[#1A1410] italic m-0">
                            {t("solarBoom.platformOpportunity.quote")}
                        </p>
                        <p className="text-[13px] text-[#7A6E62] mt-3 mb-0 not-italic">
                            {t("solarBoom.platformOpportunity.quoteAttribution")}
                        </p>
                    </blockquote>
                </Section>

                {/* Key Takeaways */}
                <section id="key-takeaways" className="pt-12">
                    <div className="border-t border-[#E8E0D4] pt-4 mb-4">
                        <h2 className="text-[30px] font-serif text-[#1A1410] leading-tight">
                            {t("solarBoom.keyTakeaways.title")}
                        </h2>
                    </div>
                    <div className="space-y-4 mt-6">
                        {KEY_TAKEAWAYS.map((point, i) => (
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
                        {t("solarBoom.cta.heading")}
                    </h2>
                    <p className="text-[16px] text-[rgba(255,255,255,0.6)] max-w-[480px] mx-auto mb-7">
                        {t("solarBoom.cta.subtitle")}
                    </p>
                    <div style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                        className="inline-block text-white text-[14px] font-semibold px-8 py-3.5 rounded-[4px] tracking-[0.03em]">
                        {t("solarBoom.cta.button")}
                    </div>

                </div>

                {/* FOOTER */}
                <div className="mt-16 pt-7 border-t border-[#E8E0D4] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[13px] text-[#7A6E62]">
                        {t("solarBoom.footer.publishedLine")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {FOOTER_TAGS.map((tag) => (
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
