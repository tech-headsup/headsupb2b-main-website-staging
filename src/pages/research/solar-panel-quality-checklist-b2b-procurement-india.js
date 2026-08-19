"use client";

import GetInTouch from "@/component/Form/Contact/GetInTouch";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

/* ─── Reusable Section wrapper ─── */
function Section({ id, num, title, children }) {
  return (
    <section id={id}>
      <hr style={{ border: "none", borderTop: "1px solid #D0D7DE", margin: "0" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, paddingTop: 52 }}>
        <span
          style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            color: "#FF6B35", background: "#FFF1E5",
            border: "1px solid rgba(255,107,53,0.2)",
            padding: "4px 10px", borderRadius: 4, whiteSpace: "nowrap",
          }}
        >
          {num}
        </span>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26, lineHeight: 1.2,
            color: "#0C2340", fontWeight: 700, margin: 0, padding: 0,
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

/* ─── Callout variants ─── */
function Callout({ variant = "tip", icon, title, children }) {
  const map = {
    warn: {
      wrap: { background: "#FFF8E1", border: "1px solid #F5D48A", borderRadius: 8 },
      icon: { background: "#FDE68A", color: "#92700A" },
      title: { color: "#92700A" },
      body: { color: "#92700A" },
    },
    tip: {
      wrap: { background: "#E0F4FB", border: "1px solid #A8D8E8", borderRadius: 8 },
      icon: { background: "#BAE6F7", color: "#055470" },
      title: { color: "#055470" },
      body: { color: "#0A7EA4" },
    },
    danger: {
      wrap: { background: "#FFEBE9", border: "1px solid #FCA5A5", borderRadius: 8 },
      icon: { background: "#FEE2E2", color: "#CF222E" },
      title: { color: "#CF222E" },
      body: { color: "#CF222E" },
    },
    success: {
      wrap: { background: "#DCFFE4", border: "1px solid #86EFAC", borderRadius: 8 },
      icon: { background: "#BBF7D0", color: "#0A4423" },
      title: { color: "#0A4423" },
      body: { color: "#1A7F37" },
    },
  };
  const s = map[variant];
  return (
    <div style={{ display: "flex", gap: 14, padding: "18px 22px", margin: "24px 0", alignItems: "flex-start", ...s.wrap }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, ...s.icon }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <strong style={{ display: "block", fontSize: 13.5, marginBottom: 5, ...s.title }}>{title}</strong>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, ...s.body }}>{children}</p>
      </div>
    </div>
  );
}

/* ─── Checklist Section wrapper ─── */
function ChecklistSection({ title, badge, badgeColor, children }) {
  const badgeColors = {
    mandatory: { background: "#FF6B35", color: "#FFFFFF" },
    critical: { background: "#CF222E", color: "#FFFFFF" },
    important: { background: "#0A7EA4", color: "#FFFFFF" },
    recommended: { background: "#1A7F37", color: "#FFFFFF" },
  };
  return (
    <div style={{ background: "#FFFFFF", border: "1px solid #D0D7DE", borderRadius: 10, overflow: "hidden", margin: "24px 0" }}>
      <div className="bg-headupb2b" style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", margin: 0 }}>{title}</h3>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, ...badgeColors[badgeColor] }}>
          {badge}
        </span>
      </div>
      {children}
    </div>
  );
}

/* ─── Single Checklist Item ─── */
function CheckItem({ icon, iconVariant, title, tag, tagVariant, desc }) {
  const iconMap = {
    green: { background: "#DCFFE4", color: "#1A7F37" },
    red: { background: "#FFEBE9", color: "#CF222E" },
    amber: { background: "#FFF8E1", color: "#92700A" },
    blue: { background: "#E0F4FB", color: "#0A7EA4" },
  };
  const tagMap = {
    almm: { background: "#FFF0E5", color: "#FF6B35" },
    iec: { background: "#E0F4FB", color: "#055470" },
    mnre: { background: "#E8F5E9", color: "#0A4423" },
    bis: { background: "#EDE7F6", color: "#4A148C" },
  };
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 24px", borderBottom: "1px solid #D0D7DE" }}>
      <div style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, ...iconMap[iconVariant] }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#1C2128", marginBottom: 3 }}>
          {title}
          {tag && (
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 3, marginLeft: 6, verticalAlign: "middle", ...tagMap[tagVariant] }}>
              {tag}
            </span>
          )}
        </div>
        <div style={{ fontSize: 13, color: "#768390", lineHeight: 1.55 }}>{desc}</div>
      </div>
    </div>
  );
}

/* ─── Inline CTA Strip ─── */
function InlineCta({ title, desc, btnText, btnHref }) {
  const [showRequestQuote, setShowRequestQuote] = useState(false);

  return (
    <div className="bg-headupb2b" style={{

      borderRadius: 10, padding: "28px 32px", margin: "40px 0",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 20, flexWrap: "wrap", borderLeft: "4px solid #FF6B35",
    }}>
      <div>
        <h4 style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 5 }}>{title}</h4>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.5 }}>{desc}</p>
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <button
          type="button"
          className="block text-center text-white font-bold text-[13px] px-4 py-[11px] rounded-[7px] no-underline transition-opacity hover:opacity-90"
          onClick={() => setShowRequestQuote(true)}
          style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
        >
          {btnText}
        </button>
      </div>

      {showRequestQuote && (
        <GetInTouch onClose={() => setShowRequestQuote(false)} />
      )}
    </div>
  );
}

/* ─── FAQ Item ─── */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "1px solid #D0D7DE", borderRadius: 8, marginBottom: 8, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", padding: "16px 20px",
          background: open ? "#F6F8FA" : "#FFFFFF",
          border: "none", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 15, fontWeight: 600, color: "#1C2128", lineHeight: 1.4,
        }}
      >
        {question}
        <span style={{ fontSize: 20, color: "#FF6B35", flexShrink: 0, marginLeft: 16 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 20px 16px", fontSize: 14, color: "#444C56", lineHeight: 1.65 }}>
          {answer}
        </div>
      )}
    </div>
  );
}

/* ─── Shared styles ─── */
const p = { marginBottom: 18, color: "#444C56", lineHeight: 1.78, fontSize: 17 };

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

export default function SolarPanelQualityChecklistPage() {
  const { t } = useTranslation();
  const [showRequestQuote, setShowRequestQuote] = useState(false);

  const HERO_TAGS = t("solarPanelQuality.hero.tags", { returnObjects: true }) || [];
  const HERO_STATS = t("solarPanelQuality.hero.stats", { returnObjects: true }) || [];
  const TOC = t("solarPanelQuality.toc", { returnObjects: true }) || [];
  const S1_STATS = t("solarPanelQuality.s1.stats", { returnObjects: true }) || [];
  const S2_ITEMS = t("solarPanelQuality.s2.items", { returnObjects: true }) || [];
  const S3_SPECS = t("solarPanelQuality.s3.specs", { returnObjects: true }) || [];
  const S3_ITEMS = t("solarPanelQuality.s3.items", { returnObjects: true }) || [];
  const S4_ITEMS = t("solarPanelQuality.s4.items", { returnObjects: true }) || [];
  const S5_ITEMS = t("solarPanelQuality.s5.items", { returnObjects: true }) || [];
  const S6_ITEMS = t("solarPanelQuality.s6.items", { returnObjects: true }) || [];
  const S7_ITEMS = t("solarPanelQuality.s7.items", { returnObjects: true }) || [];
  const S8_ITEMS = t("solarPanelQuality.s8.items", { returnObjects: true }) || [];
  const S9_ITEMS = t("solarPanelQuality.s9.items", { returnObjects: true }) || [];
  const S10_TABLE_HEADERS = t("solarPanelQuality.s10.tableHeaders", { returnObjects: true }) || [];
  const S10_ROWS = t("solarPanelQuality.s10.rows", { returnObjects: true }) || [];
  const S11_TABLE_HEADERS = t("solarPanelQuality.s11.tableHeaders", { returnObjects: true }) || [];
  const S11_ROWS = t("solarPanelQuality.s11.rows", { returnObjects: true }) || [];
  const FAQS = t("solarPanelQuality.faqs", { returnObjects: true }) || [];
  const CTA_FEATURES = t("solarPanelQuality.mainCta.features", { returnObjects: true }) || [];
  const FOOTER_TAGS = t("solarPanelQuality.footer.tags", { returnObjects: true }) || [];

  return (
    <>
      <Head>
        <title>{t("solarPanelQuality.meta.title")}</title>
        <meta
          name="description"
          content={t("solarPanelQuality.meta.description")}
        />
        <meta
          name="keywords"
          content={t("solarPanelQuality.meta.keywords")}
        />
        <meta name="author" content="HeadsUp B2B Solar Research" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.headsupb2b.com/research/solar-panel-quality-checklist-b2b-procurement-india" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t("solarPanelQuality.meta.ogTitle")} />
        <meta property="og:description" content={t("solarPanelQuality.meta.ogDescription")} />
        <meta property="og:url" content="https://www.headsupb2b.com/research/solar-panel-quality-checklist-b2b-procurement-india" />
        <meta property="og:site_name" content="HeadsUp B2B" />
        <meta property="og:image" content="https://www.headsupb2b.com/solarPanelQualityChecklist.webp" />
        <meta property="article:published_time" content="2025-04-15" />
        <meta property="article:modified_time" content="2025-04-15" />
        <meta property="article:section" content="Solar Industry Guide" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("solarPanelQuality.meta.twitterTitle")} />
        <meta name="twitter:description" content={t("solarPanelQuality.meta.twitterDescription")} />
        <meta name="twitter:image" content="https://www.headsupb2b.com/solarPanelQualityChecklist.webp" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F6F8FA", color: "#1C2128", fontSize: 17, lineHeight: 1.75 }}>



        {/* ── HERO ── */}
        <section className="bg-headupb2b" style={{ position: "relative", overflow: "hidden", padding: "92px 0 64px" }}>

          <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
            <div >
              <span className="inline-block bg-blue-500 text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
                style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
              >
                {t("solarPanelQuality.hero.badge")}
              </span>
            </div>

            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.12, color: "#FFFFFF", marginBottom: 22, maxWidth: 760, fontWeight: 700 }}>
              <span {...HTML(t("solarPanelQuality.hero.title"))} />
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.62)", maxWidth: 620, marginBottom: 36, fontWeight: 300 }}>
              {t("solarPanelQuality.hero.subtitle")}
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
              {HERO_TAGS.map((label) => (
                <span key={label} style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.15)", padding: "5px 14px", borderRadius: 100, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", flexShrink: 0 }} />
                  {label}
                </span>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, overflow: "hidden" }}>
              {HERO_STATS.map(({ num, label }) => (
                <div key={num} style={{ background: "rgba(255,255,255,0.04)", padding: "18px 20px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 26, fontWeight: 700, color: "#FFFFFF", lineHeight: 1, marginBottom: 4 }}>
                    <span style={{ color: "#FF8C5A" }}>{num}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAGE BODY ── */}
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px 100px" }}>

          {/* ── TOC ── */}
          <nav style={{ background: "#FFFFFF", border: "1px solid #D0D7DE", borderTop: "4px solid #FF6B35", borderRadius: "0 0 8px 8px", padding: "28px 32px", margin: "48px 0 52px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#768390", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              {t("solarPanelQuality.tocLabel")}
              <span style={{ flex: 1, height: 1, background: "#D0D7DE" }} />
            </div>
            <ol style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 40px", listStyle: "none", padding: 0, margin: 0 }}>
              {TOC.map(([href, label], i) => (
                <li key={href}>
                  <a href={href} style={{ textDecoration: "none", fontSize: 13.5, color: "#444C56", display: "flex", alignItems: "baseline", gap: 10, padding: "6px 0" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#FF6B35", minWidth: 20, flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── S1: WHY QUALITY MATTERS ── */}
          <Section id="s1" num={t("solarPanelQuality.s1.num")} title={t("solarPanelQuality.s1.title")}>
            <p style={p} {...HTML(t("solarPanelQuality.s1.p1"))} />
            <p style={p} {...HTML(t("solarPanelQuality.s1.p2"))} />
            <p style={p} {...HTML(t("solarPanelQuality.s1.p3"))} />

            <div style={{ borderLeft: "4px solid #FF6B35", background: "#FFF1E5", padding: "22px 28px", margin: "32px 0", borderRadius: "0 8px 8px 0" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 19, lineHeight: 1.5, color: "#0C2340", fontStyle: "italic", margin: 0 }}>
                {t("solarPanelQuality.s1.quote")}
              </p>
              <cite style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF6B35", marginTop: 10, fontStyle: "normal" }}>
                {t("solarPanelQuality.s1.quoteCite")}
              </cite>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, margin: "24px 0" }}>
              {S1_STATS.map(({ num, label, desc, type }) => {
                const colorMap = { critical: "#CF222E", important: "#0A7EA4", standard: "#1A7F37" };
                const borderMap = { critical: "#CF222E", important: "#0A7EA4", standard: "#1A7F37" };
                return (
                  <div key={num} style={{ background: "#FFFFFF", border: "1px solid #D0D7DE", borderTop: `3px solid ${borderMap[type]}`, borderRadius: 8, padding: 20 }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 36, fontWeight: 700, lineHeight: 1, marginBottom: 4, color: colorMap[type] }}>{num}</div>
                    <div style={{ fontSize: 12, color: "#768390", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
                    <div style={{ fontSize: 13, color: "#444C56", marginTop: 10, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                );
              })}
            </div>
          </Section>

          <InlineCta
            title={t("solarPanelQuality.inlineCta.title")}
            desc={t("solarPanelQuality.inlineCta.desc")}
            btnText={t("solarPanelQuality.inlineCta.btnText")}
          />

          {/* ── S2: ALMM COMPLIANCE ── */}
          <Section id="s2" num={t("solarPanelQuality.s2.num")} title={t("solarPanelQuality.s2.title")}>
            <p style={p} {...HTML(t("solarPanelQuality.s2.p1"))} />
            <Callout variant="danger" icon="⚠" title={t("solarPanelQuality.s2.calloutTitle")}>
              {t("solarPanelQuality.s2.calloutBody")}
            </Callout>
            <ChecklistSection title={t("solarPanelQuality.s2.checklistTitle")} badge={t("solarPanelQuality.s2.checklistBadge")} badgeColor="mandatory">
              {S2_ITEMS.map((item, i) => (
                <CheckItem
                  key={i}
                  icon={item.icon}
                  iconVariant={item.iconVariant}
                  title={item.title}
                  tag={item.tag}
                  tagVariant={item.tagVariant}
                  desc={item.desc}
                />
              ))}
            </ChecklistSection>
          </Section>

          {/* ── S3: TECHNICAL SPECIFICATIONS ── */}
          <Section id="s3" num={t("solarPanelQuality.s3.num")} title={t("solarPanelQuality.s3.title")}>
            <p style={p}>{t("solarPanelQuality.s3.p1")}</p>

            {/* Spec Table */}
            <div style={{ background: "#FFFFFF", border: "1px solid #D0D7DE", borderRadius: 10, overflow: "hidden", margin: "24px 0" }}>
              {S3_SPECS.map(({ key, val }, i) => (
                <div key={key} style={{ display: "grid", gridTemplateColumns: "200px 1fr", borderBottom: "1px solid #D0D7DE", background: i % 2 === 1 ? "#F8FAFC" : "#FFFFFF" }}>
                  <div style={{ padding: "13px 18px", fontSize: 13, fontWeight: 600, color: "#444C56", borderRight: "1px solid #D0D7DE", display: "flex", alignItems: "center" }}>{key}</div>
                  <div style={{ padding: "13px 18px", fontSize: 13.5, color: "#1C2128", display: "flex", alignItems: "center", gap: 8 }} {...HTML(val)} />
                </div>
              ))}
            </div>

            <ChecklistSection title={t("solarPanelQuality.s3.checklistTitle")} badge={t("solarPanelQuality.s3.checklistBadge")} badgeColor="critical">
              {S3_ITEMS.map((item, i) => (
                <CheckItem
                  key={i}
                  icon={item.icon}
                  iconVariant={item.iconVariant}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </ChecklistSection>
          </Section>

          {/* ── S4: PHYSICAL INSPECTION ── */}
          <Section id="s4" num={t("solarPanelQuality.s4.num")} title={t("solarPanelQuality.s4.title")}>
            <p style={p}>{t("solarPanelQuality.s4.p1")}</p>
            <Callout variant="tip" icon="💡" title={t("solarPanelQuality.s4.calloutTitle")}>
              {t("solarPanelQuality.s4.calloutBody")}
            </Callout>
            <ChecklistSection title={t("solarPanelQuality.s4.checklistTitle")} badge={t("solarPanelQuality.s4.checklistBadge")} badgeColor="critical">
              {S4_ITEMS.map((item, i) => (
                <CheckItem
                  key={i}
                  icon={item.icon}
                  iconVariant={item.iconVariant}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </ChecklistSection>
          </Section>

          {/* ── S5: PERFORMANCE ── */}
          <Section id="s5" num={t("solarPanelQuality.s5.num")} title={t("solarPanelQuality.s5.title")}>
            <p style={p}>{t("solarPanelQuality.s5.p1")}</p>
            <ChecklistSection title={t("solarPanelQuality.s5.checklistTitle")} badge={t("solarPanelQuality.s5.checklistBadge")} badgeColor="important">
              {S5_ITEMS.map((item, i) => (
                <CheckItem
                  key={i}
                  icon={item.icon}
                  iconVariant={item.iconVariant}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </ChecklistSection>
          </Section>

          {/* ── S6: WARRANTY ── */}
          <Section id="s6" num={t("solarPanelQuality.s6.num")} title={t("solarPanelQuality.s6.title")}>
            <p style={p}>{t("solarPanelQuality.s6.p1")}</p>
            <ChecklistSection title={t("solarPanelQuality.s6.checklistTitle")} badge={t("solarPanelQuality.s6.checklistBadge")} badgeColor="important">
              {S6_ITEMS.map((item, i) => (
                <CheckItem
                  key={i}
                  icon={item.icon}
                  iconVariant={item.iconVariant}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </ChecklistSection>
          </Section>

          {/* ── S7: VENDOR EVALUATION ── */}
          <Section id="s7" num={t("solarPanelQuality.s7.num")} title={t("solarPanelQuality.s7.title")}>
            <p style={p}>{t("solarPanelQuality.s7.p1")}</p>
            <ChecklistSection title={t("solarPanelQuality.s7.checklistTitle")} badge={t("solarPanelQuality.s7.checklistBadge")} badgeColor="important">
              {S7_ITEMS.map((item, i) => (
                <CheckItem
                  key={i}
                  icon={item.icon}
                  iconVariant={item.iconVariant}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </ChecklistSection>
          </Section>

          {/* ── S8: DELIVERY & LOGISTICS ── */}
          <Section id="s8" num={t("solarPanelQuality.s8.num")} title={t("solarPanelQuality.s8.title")}>
            <p style={p}>{t("solarPanelQuality.s8.p1")}</p>
            <ChecklistSection title={t("solarPanelQuality.s8.checklistTitle")} badge={t("solarPanelQuality.s8.checklistBadge")} badgeColor="important">
              {S8_ITEMS.map((item, i) => (
                <CheckItem
                  key={i}
                  icon={item.icon}
                  iconVariant={item.iconVariant}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </ChecklistSection>
          </Section>

          {/* ── S9: PRE-SHIPMENT INSPECTION ── */}
          <Section id="s9" num={t("solarPanelQuality.s9.num")} title={t("solarPanelQuality.s9.title")}>
            <p style={p}>{t("solarPanelQuality.s9.p1")}</p>
            <ChecklistSection title={t("solarPanelQuality.s9.checklistTitle")} badge={t("solarPanelQuality.s9.checklistBadge")} badgeColor="recommended">
              {S9_ITEMS.map((item, i) => (
                <CheckItem
                  key={i}
                  icon={item.icon}
                  iconVariant={item.iconVariant}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </ChecklistSection>
          </Section>

          {/* ── S10: MONO-PERC VS BIFACIAL ── */}
          <Section id="s10" num={t("solarPanelQuality.s10.num")} title={t("solarPanelQuality.s10.title")}>
            <p style={p}>{t("solarPanelQuality.s10.p1")}</p>

            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, borderRadius: 8, overflow: "hidden", border: "1px solid #D0D7DE" }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {S10_TABLE_HEADERS.map((th) => (
                      <th key={th} style={{ padding: "12px 16px", textAlign: "left", color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: 12, letterSpacing: "0.04em" }}>{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {S10_ROWS.map((row, i) => (
                    <tr key={row.criteria} style={{ background: i % 2 === 1 ? "#F8FAFC" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "#1C2128", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", lineHeight: 1.5 }}>{row.criteria}</td>
                      <td style={{ padding: "12px 16px", color: "#444C56", borderBottom: "1px solid #D0D7DE", verticalAlign: "top" }}>{row.mono}</td>
                      <td style={{ padding: "12px 16px", color: "#444C56", borderBottom: "1px solid #D0D7DE", verticalAlign: "top" }}>{row.bifacial}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", fontWeight: 700, color: row.verdict.color }}>{row.verdict.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="success" icon="✓" title={t("solarPanelQuality.s10.calloutTitle")}>
              {t("solarPanelQuality.s10.calloutBody")}
            </Callout>
          </Section>

          {/* ── S11: RED FLAGS ── */}
          <Section id="s11" num={t("solarPanelQuality.s11.num")} title={t("solarPanelQuality.s11.title")}>
            <p style={p}>{t("solarPanelQuality.s11.p1")}</p>
            <Callout variant="danger" icon="✗" title={t("solarPanelQuality.s11.calloutTitle")}>
              {t("solarPanelQuality.s11.calloutBody")}
            </Callout>

            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, borderRadius: 8, overflow: "hidden", border: "1px solid #D0D7DE" }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {S11_TABLE_HEADERS.map((th) => (
                      <th key={th} style={{ padding: "12px 16px", textAlign: "left", color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: 12, letterSpacing: "0.04em" }}>{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {S11_ROWS.map((row, i) => (
                    <tr key={row.flag} style={{ background: i % 2 === 1 ? "#F8FAFC" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "#1C2128", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", lineHeight: 1.55 }}>{row.flag}</td>
                      <td style={{ padding: "12px 16px", color: "#444C56", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", lineHeight: 1.55 }}>{row.why}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", fontWeight: 700, color: row.action.color }}>{row.action.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── S12: FAQ ── */}
          <Section id="s12" num={t("solarPanelQuality.s12.num")} title={t("solarPanelQuality.s12.title")}>
            <p style={p}>{t("solarPanelQuality.s12.p1")}</p>
            {FAQS.map((f, i) => (
              <FaqItem
                key={i}
                question={f.question}
                answer={f.answer}
              />
            ))}
          </Section>

          {/* ── MAIN CTA ── */}
          <div className="bg-headupb2b" style={{
            borderRadius: 12, padding: "52px 48px", margin: "60px 0 0",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "relative" }}>
              <span style={{
                display: "inline-block", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#FF6B35", border: "1px solid rgba(255,107,53,0.3)",
                padding: "5px 14px", borderRadius: 4, marginBottom: 20,
              }}>
                {t("solarPanelQuality.mainCta.kicker")}
              </span>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 4vw, 36px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: 16, fontWeight: 700 }}>
                {t("solarPanelQuality.mainCta.title")}
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.62)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
                {t("solarPanelQuality.mainCta.subtitle")}
              </p>
              <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
                {CTA_FEATURES.map((f) => (
                  <span key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                    <span style={{ color: "#FF8C5A", fontWeight: 700 }}>✓</span> {f}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="block text-center text-white font-bold text-[13px] px-4 py-[11px] rounded-[7px] no-underline transition-opacity hover:opacity-90"
                  onClick={() => setShowRequestQuote(true)}
                  style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                >
                  {t("solarPanelQuality.mainCta.btnText")}
                </button>
              </div>
              <p style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                {t("solarPanelQuality.mainCta.footerNote")}
              </p>
            </div>
          </div>

          {/* ── ARTICLE FOOTER ── */}
          <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid #D0D7DE", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#768390" }}>{t("solarPanelQuality.footer.publishedLine")}</span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {FOOTER_TAGS.map((tag) => (
                <a key={tag} href="#" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 10px", border: "1px solid #D0D7DE", borderRadius: 4, color: "#768390", textDecoration: "none" }}>
                  {tag}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      {showRequestQuote && (
        <GetInTouch onClose={() => setShowRequestQuote(false)} />
      )}
    </>
  );
}
