"use client";

import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

/* ─── Reusable Section wrapper ─── */
function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-6">
      <h2
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "32px",
          color: "#181C18",
          lineHeight: 1.2,
          marginBottom: "22px",
          paddingTop: "56px",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Callout variants ─── */
function Callout({ variant = "green", icon, title, children }) {
  const map = {
    green: {
      wrap: { background: "#F0FAF5", border: "1px solid #9FD4BC", borderRadius: 6 },
      title: { color: "#0D4A2F" },
      body: { color: "#0D4A2F" },
    },
    amber: {
      wrap: { background: "#FEF3C7", border: "1px solid #F5D48A", borderRadius: 6 },
      title: { color: "#7A4800" },
      body: { color: "#8A5500" },
    },
    blue: {
      wrap: { background: "#E8F0FA", border: "1px solid #A8C4E8", borderRadius: 6 },
      title: { color: "#1E3A5F" },
      body: { color: "#284F7A" },
    },
    red: {
      wrap: { background: "#FDECEA", border: "1px solid #F5B8B2", borderRadius: 6 },
      title: { color: "#C0392B" },
      body: { color: "#9A2E24" },
    },
    purple: {
      wrap: { background: "#F4F1FA", border: "1px solid #C9B8E8", borderRadius: 6 },
      title: { color: "#5E3F99" },
      body: { color: "#46306F" },
    },
  };
  const s = map[variant];
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: "20px 24px",
        margin: "28px 0",
        alignItems: "flex-start",
        ...s.wrap,
      }}
    >
      <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <strong
          style={{ display: "block", fontSize: 14, marginBottom: 5, ...s.title }}
        >
          {title}
        </strong>
        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.6, ...s.body }}>
          {children}
        </p>
      </div>
    </div>
  );
}

/* ─── Badge ─── */
function Badge({ variant, children }) {
  const map = {
    green: { background: "#D6F0E2", color: "#0D4A2F" },
    blue: { background: "#E8F0FA", color: "#1E3A5F" },
    amber: { background: "#FEF3C7", color: "#7A4800" },
    red: { background: "#FDECEA", color: "#C0392B" },
    purple: { background: "#F4F1FA", color: "#5E3F99" },
  };
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 9px",
        borderRadius: 3,
        letterSpacing: "0.03em",
        ...map[variant],
      }}
    >
      {children}
    </span>
  );
}

/* ─── HR Rule ─── */
function Rule() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #DDE8DB",
        margin: "0",
      }}
    />
  );
}

/* ─── Shared paragraph style ─── */
const p = {
  marginBottom: 18,
  color: "#3A4238",
  fontSize: 17,
  lineHeight: 1.78,
};

const h3Style = {
  fontSize: 18,
  fontWeight: 600,
  color: "#5E3F99",
  margin: "36px 0 12px",
};

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

export default function SolarOMBusinessGuidePage() {
  const { t } = useTranslation();

  const META_STRIP = t("solarOm.metaStrip", { returnObjects: true }) || [];
  const HEADLINE_STATS = t("solarOm.headlineStats", { returnObjects: true }) || [];
  const TOC = t("solarOm.toc", { returnObjects: true }) || [];
  const OM_COVERAGE = t("solarOm.omCoverage", { returnObjects: true }) || [];
  const SEGMENTS = t("solarOm.segments", { returnObjects: true }) || [];
  const SEGMENT_HEADERS = t("solarOm.segmentHeaders", { returnObjects: true }) || [];
  const LEGAL_STEPS = t("solarOm.legalSteps", { returnObjects: true }) || [];
  const TEAM_ROLES = t("solarOm.teamRoles", { returnObjects: true }) || [];
  const TEAM_HEADERS = t("solarOm.teamHeaders", { returnObjects: true }) || [];
  const TALENT_SOURCES = t("solarOm.talentSources", { returnObjects: true }) || [];
  const TOOLS = t("solarOm.tools", { returnObjects: true }) || [];
  const TOOLS_HEADERS = t("solarOm.toolsHeaders", { returnObjects: true }) || [];
  const PRICING_ROWS = t("solarOm.pricingRows", { returnObjects: true }) || [];
  const PRICING_HEADERS = t("solarOm.pricingHeaders", { returnObjects: true }) || [];
  const GTM_STEPS = t("solarOm.gtmSteps", { returnObjects: true }) || [];
  const CONTRACT_CLAUSES = t("solarOm.contractClauses", { returnObjects: true }) || [];
  const SCALING_STAGES = t("solarOm.scalingStages", { returnObjects: true }) || [];
  const SCALING_HEADERS = t("solarOm.scalingHeaders", { returnObjects: true }) || [];
  const GROWTH_LEVERS = t("solarOm.growthLevers", { returnObjects: true }) || [];
  const CHALLENGES = t("solarOm.challenges", { returnObjects: true }) || [];
  const CHALLENGES_HEADERS = t("solarOm.challengesHeaders", { returnObjects: true }) || [];
  const FAQS = t("solarOm.faqs", { returnObjects: true }) || [];
  const SOURCES = t("solarOm.sources", { returnObjects: true }) || [];

  return (
    <>
      <Head>
        <title>{t("solarOm.meta.title")}</title>
        <meta
          name="description"
          content={t("solarOm.meta.description")}
        />
        <meta
          name="keywords"
          content={t("solarOm.meta.keywords")}
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/solar-om-business-india-guide"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={t("solarOm.meta.ogTitle")}
        />
        <meta
          property="og:description"
          content={t("solarOm.meta.ogDescription")}
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/solar-om-business-india-guide"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta property="og:image" content="https://www.headsupb2b.com/O&M-Business-in-India.webp" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("solarOm.meta.twitterTitle")}
        />
        <meta
          name="twitter:description"
          content={t("solarOm.meta.twitterDescription")}
        />
        <meta name="twitter:image" content="https://www.headsupb2b.com/O&M-Business-in-India.webp" />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&family=DM+Sans:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#F7FAF7",
          color: "#181C18",
          fontSize: 17,
          lineHeight: 1.78,
        }}
      >
        {/* ── HERO ── */}
        <div className="bg-headupb2b" style={{ position: "relative", overflow: "hidden" }}>
          {/* gradient stripe */}
          <div
            style={{
              height: 5,
              background:
                "linear-gradient(90deg, #5E3F99 0%, #F2B705 50%, #5E3F99 100%)",
            }}
          />
          <div
            style={{
              padding: "72px 40px 68px",
              maxWidth: 860,
              margin: "0 auto",
              position: "relative",
            }}
          >
            <span
              className="inline-block text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
              style={{
                background: "#00d4f5",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 15px rgba(0,212,245,0.35)",
              }}
            >
              {t("solarOm.hero.badge")}
            </span>

            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(30px, 4.5vw, 52px)",
                color: "#FFFFFF",
                lineHeight: 1.18,
                marginBottom: 22,
                maxWidth: 720,
                fontWeight: 700,
              }}
              {...HTML(t("solarOm.hero.title"))}
            />

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.62)",
                maxWidth: 620,
                lineHeight: 1.65,
                marginBottom: 40,
              }}
            >
              {t("solarOm.hero.subtitle")}
            </p>

            {/* meta strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, auto)",
                gap: 36,
                paddingTop: 26,
                borderTop: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {META_STRIP.map(([label, value]) => (
                <div key={label}>
                  <div
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 600,
                      marginBottom: 6,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PAGE BODY ── */}
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 32px 100px",
          }}
        >
          {/* ── HEADLINE STAT STRIP ── */}
          <div style={{ marginTop: 56, marginBottom: 12 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#5E3F99",
                marginBottom: 12,
              }}
            >
              {t("solarOm.headlineKicker")}
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#6B7468",
                lineHeight: 1.6,
                marginBottom: 20,
              }}
            >
              {t("solarOm.headlineIntro")}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "#DDE8DB",
              border: "1px solid #DDE8DB",
              borderRadius: 6,
              overflow: "hidden",
              marginBottom: 36,
            }}
          >
            {HEADLINE_STATS.map(({ label, num, unit, desc }) => (
              <div
                key={label}
                style={{
                  background: "#FFFFFF",
                  padding: "22px 18px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 9.5,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "#5E3F99",
                    marginBottom: 10,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 28,
                    color: "#181C18",
                    lineHeight: 1,
                    marginBottom: 8,
                    fontWeight: 700,
                  }}
                >
                  <span style={{ color: "#5E3F99" }}>{num}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#3A4238" }}>{unit}</span>
                </div>
                <div style={{ fontSize: 11.5, color: "#6B7468", lineHeight: 1.5 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>

          {/* ── TOC ── */}
          <nav
            style={{
              background: "#FFFFFF",
              border: "1px solid #DDE8DB",
              borderTop: "4px solid #5E3F99",
              padding: "32px 36px",
              margin: "20px 0 60px",
              borderRadius: 2,
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6B7468",
                marginBottom: 18,
              }}
            >
              {t("solarOm.tocLabel")}
            </div>
            <ol
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6px 40px",
                listStyle: "none",
                padding: 0,
                margin: 0,
                counterReset: "toc",
              }}
            >
              {TOC.map(([href, label, sub], i) => (
                <li key={href} style={{ counterIncrement: "toc" }}>
                  <a
                    href={href}
                    style={{
                      textDecoration: "none",
                      fontSize: 14,
                      color: "#3A4238",
                      display: "flex",
                      gap: 10,
                      alignItems: "baseline",
                      padding: "5px 0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#5E3F99",
                        minWidth: 20,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span style={{ fontWeight: 600, color: "#181C18" }}>{label}</span>
                      <span style={{ color: "#6B7468", fontSize: 13 }}> — {sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── S1: Market ── */}
          <Section id="market" title={t("solarOm.s1.title")}>
            <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 28 }}>
              {t("solarOm.s1.lead")}
            </p>
            <p style={p} {...HTML(t("solarOm.s1.p1"))} />
            <p style={p} {...HTML(t("solarOm.s1.p2"))} />

            <Callout variant="purple" icon="📚" title={t("solarOm.s1.sourcesTitle")}>
              {t("solarOm.s1.sourcesBody")}
            </Callout>

            <h3 style={h3Style}>{t("solarOm.s1.coverageTitle")}</h3>
            <p style={p}>
              {t("solarOm.s1.coverageIntro")}
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {OM_COVERAGE.map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #5E3F99",
                    borderRadius: "0 6px 6px 0",
                    padding: "16px 20px",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: 14,
                      color: "#5E3F99",
                      marginBottom: 4,
                      fontWeight: 600,
                    }}
                  >
                    {title}:
                  </strong>
                  <span style={{ fontSize: 14.5, color: "#3A4238", lineHeight: 1.65 }}>
                    {body}
                  </span>
                </li>
              ))}
            </ul>

            <h3 style={h3Style}>{t("solarOm.s1.segmentsTitle")}</h3>
            <p style={p}>
              {t("solarOm.s1.segmentsIntro")}
            </p>

            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {SEGMENT_HEADERS.map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SEGMENTS.map(([seg, size, criterion, diff, badgeVar], i) => (
                    <tr key={seg} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{seg}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{size}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{criterion}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={badgeVar}>{diff}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={p} {...HTML(t("solarOm.s1.segmentsFooter"))} />
          </Section>

          <Rule />

          {/* ── S2: Legal ── */}
          <Section id="legal" title={t("solarOm.s2.title")}>
            <p style={p}>
              {t("solarOm.s2.intro")}
            </p>

            {/* Numbered steps */}
            <div style={{ position: "relative", paddingLeft: 48, margin: "32px 0" }}>
              <div
                style={{
                  position: "absolute",
                  left: 15,
                  top: 8,
                  bottom: 8,
                  width: 2,
                  background: "#DDE8DB",
                }}
              />
              {LEGAL_STEPS.map(({ num, title, desc }) => (
                <div key={num} style={{ position: "relative", marginBottom: 32 }}>
                  <div
                    className="bg-headupb2b"
                    style={{
                      position: "absolute",
                      left: -48,
                      top: 0,
                      width: 32,
                      height: 32,
                      color: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: 700,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      background: "#5E3F99",
                    }}
                  >
                    {num}
                  </div>
                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 8,
                      paddingTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {title}
                  </h4>
                  <p style={{ fontSize: 14.5, color: "#6B7468", lineHeight: 1.65, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <Callout variant="green" icon="💡" title={t("solarOm.s2.proTipTitle")}>
              {t("solarOm.s2.proTipBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S3: Team ── */}
          <Section id="team" title={t("solarOm.s3.title")}>
            <p style={p}>
              {t("solarOm.s3.intro")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {TEAM_HEADERS.map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TEAM_ROLES.map(([role, qual, sal], i) => (
                    <tr key={role} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{role}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{qual}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{sal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={h3Style}>{t("solarOm.s3.talentTitle")}</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {TALENT_SOURCES.map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #5E3F99",
                    borderRadius: "0 6px 6px 0",
                    padding: "14px 18px",
                  }}
                >
                  <strong style={{ display: "block", fontSize: 14, color: "#5E3F99", marginBottom: 4, fontWeight: 600 }}>
                    {title}:
                  </strong>
                  <span style={{ fontSize: 14, color: "#3A4238", lineHeight: 1.6 }}>{body}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Rule />

          {/* ── S4: Tools ── */}
          <Section id="tools" title={t("solarOm.s4.title")}>
            <p style={p} {...HTML(t("solarOm.s4.intro"))} />

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {TOOLS_HEADERS.map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TOOLS.map(([cat, tool, cost, pri, badgeVar], i) => (
                    <tr key={cat} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{cat}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{tool}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{cost}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={badgeVar}>{pri}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={h3Style}>{t("solarOm.s4.robotsTitle")}</h3>
            <p style={p} {...HTML(t("solarOm.s4.robotsBody"))} />
          </Section>

          <Rule />

          {/* ── S5: Pricing ── */}
          <Section id="pricing" title={t("solarOm.s5.title")}>
            <p style={p}>
              {t("solarOm.s5.intro")}
            </p>

            <h3 style={h3Style}>{t("solarOm.s5.modelATitle")}</h3>
            <p style={p}>
              {t("solarOm.s5.modelABody")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {PRICING_HEADERS.map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRICING_ROWS.map(([plant, range, quote], i) => (
                    <tr key={plant} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{plant}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{range}</td>
                      <td style={{ padding: "12px 16px", color: "#5E3F99", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{quote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="purple" icon="📚" title={t("solarOm.s5.sourcesTitle")}>
              {t("solarOm.s5.sourcesBody")}
            </Callout>

            <h3 style={h3Style}>{t("solarOm.s5.modelBTitle")}</h3>
            <p style={p}>
              {t("solarOm.s5.modelBBody1")}
            </p>
            <p style={p} {...HTML(t("solarOm.s5.modelBBody2"))} />

            {/* Blockquote */}
            <blockquote
              style={{
                borderLeft: "4px solid #5E3F99",
                background: "#F4F1FA",
                padding: "24px 30px",
                margin: "36px 0",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 21,
                  fontStyle: "italic",
                  color: "#46306F",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {t("solarOm.s5.quote")}
              </p>
              <cite
                style={{
                  display: "block",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#5E3F99",
                  marginTop: 12,
                }}
              >
                {t("solarOm.s5.quoteCite")}
              </cite>
            </blockquote>
          </Section>

          <Rule />

          {/* ── S6: GTM ── */}
          <Section id="gtm" title={t("solarOm.s6.title")}>
            <p style={p}>
              {t("solarOm.s6.intro")}
            </p>

            <div style={{ position: "relative", paddingLeft: 48, margin: "32px 0" }}>
              <div
                style={{
                  position: "absolute",
                  left: 15,
                  top: 8,
                  bottom: 8,
                  width: 2,
                  background: "#DDE8DB",
                }}
              />
              {GTM_STEPS.map(({ num, title, desc }) => (
                <div key={num} style={{ position: "relative", marginBottom: 32 }}>
                  <div
                    style={{
                      position: "absolute",
                      left: -48,
                      top: 0,
                      width: 32,
                      height: 32,
                      color: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: 700,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      background: "#5E3F99",
                    }}
                  >
                    {num}
                  </div>
                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 8,
                      paddingTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {title}
                  </h4>
                  <p style={{ fontSize: 14.5, color: "#6B7468", lineHeight: 1.65, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S7: Contracts ── */}
          <Section id="contracts" title={t("solarOm.s7.title")}>
            <p style={p}>
              {t("solarOm.s7.intro")}
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {CONTRACT_CLAUSES.map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #5E3F99",
                    borderRadius: "0 6px 6px 0",
                    padding: "14px 18px",
                  }}
                >
                  <strong style={{ display: "block", fontSize: 14, color: "#5E3F99", marginBottom: 4, fontWeight: 600 }}>
                    {title}:
                  </strong>
                  <span style={{ fontSize: 14, color: "#3A4238", lineHeight: 1.6 }}>{body}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Rule />

          {/* ── S8: Scaling ── */}
          <Section id="scaling" title={t("solarOm.s8.title")}>
            <p style={p}>
              {t("solarOm.s8.intro")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {SCALING_HEADERS.map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SCALING_STAGES.map(([stage, cap, focus], i) => (
                    <tr key={stage} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{stage}</td>
                      <td style={{ padding: "12px 16px", color: "#5E3F99", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{cap}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={h3Style}>{t("solarOm.s8.leversTitle")}</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {GROWTH_LEVERS.map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #5E3F99",
                    borderRadius: "0 6px 6px 0",
                    padding: "14px 18px",
                  }}
                >
                  <strong style={{ display: "block", fontSize: 14, color: "#5E3F99", marginBottom: 4, fontWeight: 600 }}>
                    {title}:
                  </strong>
                  <span style={{ fontSize: 14, color: "#3A4238", lineHeight: 1.6 }}>{body}</span>
                </li>
              ))}
            </ul>

            <h3 style={h3Style}>{t("solarOm.s8.topPlayersTitle")}</h3>
            <p style={p} {...HTML(t("solarOm.s8.topPlayersBody"))} />
          </Section>

          <Rule />

          {/* ── S9: Challenges ── */}
          <Section id="challenges" title={t("solarOm.s9.title")}>
            <p style={p}>
              {t("solarOm.s9.intro")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {CHALLENGES_HEADERS.map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CHALLENGES.map(([ch, rc, mit], i) => (
                    <tr key={ch} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{ch}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{rc}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{mit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S10: Outlook ── */}
          <Section id="outlook" title={t("solarOm.s10.title")}>
            <p style={{ ...p, fontSize: 19, fontWeight: 300 }}>
              {t("solarOm.s10.p1")}
            </p>
            <p style={p}>
              {t("solarOm.s10.p2")}
            </p>
            <p style={p}>
              {t("solarOm.s10.p3")}
            </p>
          </Section>

          <Rule />

          {/* ── FAQ ── */}
          <Section id="faq" title={t("solarOm.faqTitle")}>
            <p style={p}>
              {t("solarOm.faqIntro")}
            </p>

            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DDE8DB",
                  borderRadius: 6,
                  padding: "20px 24px",
                  marginBottom: 14,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#5E3F99",
                    margin: "0 0 10px",
                    display: "flex",
                    gap: 10,
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5E3F99", flexShrink: 0 }}>
                    {t("solarOm.faqQPrefix")}
                  </span>
                  {q}
                </h3>
                <p style={{ fontSize: 14.5, color: "#3A4238", lineHeight: 1.7, margin: 0 }}>
                  {a}
                </p>
              </div>
            ))}
          </Section>

          <Rule />

          {/* ── SOURCES ── */}
          <Section id="sources" title={t("solarOm.sourcesTitle")}>
            <p style={p}>
              {t("solarOm.sourcesIntro")}
            </p>

            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: "24px 0 0",
                counterReset: "src",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {SOURCES.map((src, i) => (
                <li
                  key={i}
                  style={{
                    counterIncrement: "src",
                    display: "flex",
                    gap: 14,
                    alignItems: "baseline",
                    fontSize: 13.5,
                    color: "#3A4238",
                    lineHeight: 1.6,
                    paddingBottom: 10,
                    borderBottom: "1px dashed #DDE8DB",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#5E3F99",
                      minWidth: 24,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span>{src}</span>
                </li>
              ))}
            </ol>
          </Section>

          {/* ── CTA ── */}
          {/* Hero quote */}
            <blockquote
              style={{
                background: "#181C18",
                borderRadius: 8,
                padding: "44px 38px",
                margin: "44px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -20,
                  fontSize: 200,
                  fontFamily: "'Montserrat', sans-serif",
                  color: "rgba(242,183,5,0.15)",
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                &rdquo;
              </div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 28,
                  color: "#FFFFFF",
                  lineHeight: 1.35,
                  margin: 0,
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 1,
                }}
                {...HTML(t("solarOm.finalQuote"))}
              />
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  marginTop: 22,
                  marginBottom: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {t("solarOm.finalQuoteFooter")}
              </p>
            </blockquote>

          {/* ── DISCLAIMER ── */}
          <div
            style={{
              marginTop: 30,
              fontSize: 12,
              color: "#6B7468",
              lineHeight: 1.6,
              textAlign: "center",
              padding: "20px 0",
            }}
            {...HTML(t("solarOm.disclaimer"))}
          />
        </div>
      </div>
    </>
  );
}
