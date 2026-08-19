"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import GetInTouch from "@/component/Form/Contact/GetInTouch";


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
        <div style={{ fontSize: 14, margin: 0, lineHeight: 1.6, ...s.body }}>
          {children}
        </div>
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
  color: "#0D4A2F",
  margin: "36px 0 12px",
};

const HTML = (html) => ({ dangerouslySetInnerHTML: { __html: html } });

export default function CollateralFreeCreditPage() {
    const { t } = useTranslation();
    const [showRequestQuote, setShowRequestQuote] = useState(false);

    const HERO_PILLS = t("collateralFreeCredit.hero.pills", { returnObjects: true }) || [];
    const STAT_STRIP = t("collateralFreeCredit.statStrip", { returnObjects: true }) || [];
    const TOC = t("collateralFreeCredit.toc", { returnObjects: true }) || [];
    const COMPARISON_ROWS = t("collateralFreeCredit.comparisonRows", { returnObjects: true }) || [];
    const COMPARISON_HEADERS = t("collateralFreeCredit.comparisonHeaders", { returnObjects: true }) || [];
    const PROJECT_ECONOMICS = t("collateralFreeCredit.projectEconomics", { returnObjects: true }) || [];
    const QUALIFY_HEADERS = t("collateralFreeCredit.qualifyHeaders", { returnObjects: true }) || [];
    const QUALIFY_ROWS = t("collateralFreeCredit.qualifyRows", { returnObjects: true }) || [];
    const STRATEGIC_STEPS = t("collateralFreeCredit.strategicSteps", { returnObjects: true }) || [];
    const TAKEAWAYS = t("collateralFreeCredit.takeaways", { returnObjects: true }) || [];
    const TAGS = t("collateralFreeCredit.tags", { returnObjects: true }) || [];

  return (

    <>
      <Head>
        <title>{t("collateralFreeCredit.meta.title")}</title>
        <meta
          name="description"
          content={t("collateralFreeCredit.meta.description")}
        />
        <meta
          name="keywords"
          content={t("collateralFreeCredit.meta.keywords")}
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/collateral-free-business-credit-solar-procurement"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={t("collateralFreeCredit.meta.ogTitle")}
        />
        <meta
          property="og:description"
          content={t("collateralFreeCredit.meta.ogDescription")}
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/collateral-free-business-credit-solar-procurement"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta
          property="og:image"
          content="https://www.headsupb2b.com/collateral-free-credit.webp"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("collateralFreeCredit.meta.twitterTitle")}
        />
        <meta
          name="twitter:description"
          content={t("collateralFreeCredit.meta.twitterDescription")}
        />
        <meta
          name="twitter:image"
          content="https://www.headsupb2b.com/collateral-free-credit.webp"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap"
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
        <div className="bg-headupb2b"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* gradient stripe */}
          <div
            style={{
              height: 5,
              background:
                "linear-gradient(90deg, #22A05A 0%, #D97706 50%, #22A05A 100%)",
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
            {/* breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 28,
              }}
            >
            </div>
            <span className="inline-block bg-blue-500 text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
              style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
            >
              {t("collateralFreeCredit.hero.badge")}
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
            >
              {t("collateralFreeCredit.hero.title")}
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.62)",
                maxWidth: 660,
                lineHeight: 1.65,
                marginBottom: 40,
                fontStyle: "italic",
              }}
            >
              {t("collateralFreeCredit.hero.subtitle")}
            </p>

            {/* pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {HERO_PILLS.map((label) => (
                <span
                  key={label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
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
        </div>

        {/* ── PAGE BODY ── */}
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 32px 100px",
          }}
        >
          {/* ── Who this is for ── */}
          <div
            style={{
              background: "#E8F0FA",
              border: "1px solid #A8C4E8",
              borderRadius: 6,
              padding: "20px 24px",
              margin: "52px 0 28px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>📋</span>
            <p
              style={{ fontSize: 15, color: "#1E3A5F", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}
              {...HTML(t("collateralFreeCredit.whoThisIsFor"))}
            />
          </div>

          {/* ── INTRO ── */}
          <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 22 }}>
            {t("collateralFreeCredit.intro1")}
          </p>
          <p style={p}>
            {t("collateralFreeCredit.intro2")}
          </p>

          {/* Stat strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "#DDE8DB",
              border: "1px solid #DDE8DB",
              borderRadius: 6,
              overflow: "hidden",
              margin: "36px 0",
            }}
          >
            {STAT_STRIP.map(({ num, unit, desc }) => (
              <div
                key={desc}
                style={{
                  background: "#FFFFFF",
                  padding: "24px 18px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 28,
                    color: "#0D4A2F",
                    lineHeight: 1.15,
                    marginBottom: 12,
                    fontWeight: 700,
                    minHeight: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: "#22A05A" }}>{num}</span>
                  {unit}
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
              margin: "32px 0 60px",
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
              {t("collateralFreeCredit.tocLabel")}
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
              {TOC.map(([href, label], i) => (
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
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── S1: Working Capital Problem ── */}
          <Section id="working-capital-problem" title={t("collateralFreeCredit.sections.s1.title")}>
            <p style={p}>
              {t("collateralFreeCredit.sections.s1.p1")}
            </p>

            {/* Real-world scenario blockquote */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DDE8DB",
                borderLeft: "4px solid #D97706",
                borderRadius: "0 8px 8px 0",
                padding: "28px 32px",
                margin: "32px 0",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#D97706",
                  marginBottom: 14,
                }}
              >
                {t("collateralFreeCredit.sections.s1.scenarioLabel")}
              </div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 19,
                  fontStyle: "italic",
                  color: "#181C18",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {t("collateralFreeCredit.sections.s1.scenarioQuote")}
              </p>
            </div>
          </Section>

          <Rule />

          {/* ── S2: What is Procurement Credit ── */}
          <Section id="what-is-procurement-credit" title={t("collateralFreeCredit.sections.s2.title")}>
            <p style={p}>
              {t("collateralFreeCredit.sections.s2.p1")}
            </p>

            {/* Comparison Table */}
            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr className="bg-headupb2b">
                    {COMPARISON_HEADERS.map(
                      (th) => (
                        <th
                          key={th}
                          style={{
                            padding: "14px 18px",
                            textAlign: "left",
                            color: "rgba(255,255,255,0.95)",
                            fontWeight: 600,
                            fontSize: 12.5,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {th}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(([trad, proc], i) => (
                    <tr key={i} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "#6B7468",
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                          lineHeight: 1.6,
                          width: "50%",
                        }}
                      >
                        {trad}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "#0D4A2F",
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                          lineHeight: 1.6,
                          fontWeight: 500,
                          width: "50%",
                        }}
                      >
                        {proc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S3: Real Economics ── */}
          <Section id="real-economics" title={t("collateralFreeCredit.sections.s3.title")}>
            <p style={p}>
              {t("collateralFreeCredit.sections.s3.p1")}
            </p>

            {/* Project Economics Card */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DDE8DB",
                borderRadius: 8,
                overflow: "hidden",
                margin: "28px 0",
              }}
            >
              <div
                className="bg-headupb2b"
                style={{
                  padding: "16px 24px",
                  color: "#FFFFFF",
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {t("collateralFreeCredit.sections.s3.economicsHeader")}
              </div>
              <div style={{ padding: "8px 0" }}>
                {PROJECT_ECONOMICS.map(({ label, value, highlight }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 24px",
                      borderBottom: "1px dashed #DDE8DB",
                      background: highlight ? "#F0FAF5" : "transparent",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14.5,
                        color: highlight ? "#0D4A2F" : "#3A4238",
                        fontWeight: highlight ? 700 : 400,
                        lineHeight: 1.5,
                        paddingRight: 16,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: highlight ? 22 : 18,
                        fontWeight: 700,
                        color: highlight ? "#22A05A" : "#181C18",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p style={p}>
              {t("collateralFreeCredit.sections.s3.p2")}
            </p>
          </Section>

          <Rule />

          {/* ── S4: Who Qualifies ── */}
          <Section id="who-qualifies" title={t("collateralFreeCredit.sections.s4.title")}>
            <p style={p}>
              {t("collateralFreeCredit.sections.s4.p1")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr className="bg-headupb2b">
                    {QUALIFY_HEADERS.map(
                      (th) => (
                        <th
                          key={th}
                          style={{
                            padding: "12px 16px",
                            textAlign: "left",
                            color: "rgba(255,255,255,0.95)",
                            fontWeight: 600,
                            fontSize: 12.5,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {th}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {QUALIFY_ROWS.map(([profile, limit, req, badgeVar], i) => (
                    <tr key={profile} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td
                        style={{
                          padding: "14px 16px",
                          color: "#181C18",
                          fontWeight: 600,
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                          lineHeight: 1.55,
                        }}
                      >
                        {profile}
                      </td>
                      <td
                        style={{
                          padding: "14px 16px",
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                        }}
                      >
                        <Badge variant={badgeVar}>{limit}</Badge>
                      </td>
                      <td
                        style={{
                          padding: "14px 16px",
                          color: "#3A4238",
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                          lineHeight: 1.55,
                        }}
                      >
                        {req}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S5: 5 Strategic Ways ── */}
          <Section id="strategic-uses" title={t("collateralFreeCredit.sections.s5.title")}>
            <p style={p}>
              {t("collateralFreeCredit.sections.s5.p1")}
            </p>

            {/* Steps */}
            <div style={{ position: "relative", paddingLeft: 48, margin: "32px 0" }}>
              {/* vertical line */}
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
              {STRATEGIC_STEPS.map(({ num, title, desc }) => (
                <div
                  key={num}
                  style={{ position: "relative", marginBottom: 32 }}
                >
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
                      lineHeight: 1.4,
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontSize: 14.5,
                      color: "#6B7468",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S6: Key Takeaways ── */}
          <Section id="takeaways" title={t("collateralFreeCredit.sections.s6.title")}>
            <p style={p}>
              {t("collateralFreeCredit.sections.s6.p1")}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {TAKEAWAYS.map((text, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderRadius: 8,
                    padding: "20px 22px",
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 32,
                      fontWeight: 700,
                      color: "#22A05A",
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: 32,
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    style={{
                      fontSize: 15.5,
                      color: "#3A4238",
                      lineHeight: 1.65,
                      margin: 0,
                      paddingTop: 4,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── CTA ── */}
          <div
            className="bg-headupb2b"
            style={{
              borderRadius: 8,
              padding: "52px 40px",
              textAlign: "center",
              marginTop: 72,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "#FFFFFF",
                paddingTop: 0,
                fontSize: 28,
                marginBottom: 14,
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              {t("collateralFreeCredit.cta.heading")}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 580,
                margin: "0 auto 24px",
                fontSize: 16,
              }}
            >
              {t("collateralFreeCredit.cta.subtitle")}
            </p>
            <div
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 13,
                marginBottom: 30,
                letterSpacing: "0.03em",
              }}
            >
              {t("collateralFreeCredit.cta.stats")}
            </div>
            <button
              type="button"
              onClick={() => setShowRequestQuote(true)}
              style={{
                display: "inline-block",
                background: "#00d4f5",
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 34px",
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              {t("collateralFreeCredit.cta.button")}
            </button>
          </div>

          {/* ── ARTICLE FOOTER ── */}
          <div
            style={{
              marginTop: 60,
              paddingTop: 24,
              borderTop: "1px solid #DDE8DB",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                className="bg-headupb2b"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                {t("collateralFreeCredit.footer.avatar")}
              </div>
              <div>
                <div style={{ fontSize: 13.5, color: "#181C18", fontWeight: 600 }}>
                  {t("collateralFreeCredit.footer.team")}
                </div>
                <div
                  style={{ fontSize: 12, color: "#6B7468" }}
                  {...HTML(t("collateralFreeCredit.footer.byline"))}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {TAGS.map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      border: "1px solid #DDE8DB",
                      borderRadius: 3,
                      color: "#6B7468",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
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
