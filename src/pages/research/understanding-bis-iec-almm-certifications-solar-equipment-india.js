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

export default function SolarCertificationsGuidePage() {
  const { t } = useTranslation();

  const HERO_PILLS = t("bisIecAlmm.heroPills", { returnObjects: true }) || [];
  const TOC = t("bisIecAlmm.toc", { returnObjects: true }) || [];
  const PILLARS = t("bisIecAlmm.pillars", { returnObjects: true }) || [];
  const BIS_ALERT = t("bisIecAlmm.bisAlertItems", { returnObjects: true }) || [];
  const IEC_REASONS = t("bisIecAlmm.iecReasons", { returnObjects: true }) || [];
  const IEC_TABLE = t("bisIecAlmm.iecTable", { returnObjects: true }) || [];
  const IEC_TABLE_HEAD = t("bisIecAlmm.iecTableHead", { returnObjects: true }) || [];
  const ALMM_RISK = t("bisIecAlmm.almmRiskItems", { returnObjects: true }) || [];
  const ALMM_STEPS = t("bisIecAlmm.almmSteps", { returnObjects: true }) || [];
  const INTERACT_HEAD = t("bisIecAlmm.interactHead", { returnObjects: true }) || [];
  const INTERACT_ROWS = t("bisIecAlmm.interactRows", { returnObjects: true }) || [];
  const RISKS = t("bisIecAlmm.risks", { returnObjects: true }) || [];
  const CHECKLIST = t("bisIecAlmm.checklist", { returnObjects: true }) || [];
  const TAKEAWAYS = t("bisIecAlmm.takeaways", { returnObjects: true }) || [];
  const FOOTER_TAGS = t("bisIecAlmm.footerTags", { returnObjects: true }) || [];

  return (
    <>
      <Head>
        <title>{t("bisIecAlmm.meta.title")}</title>
        <meta
          name="description"
          content={t("bisIecAlmm.meta.description")}
        />
        <meta
          name="keywords"
          content={t("bisIecAlmm.meta.keywords")}
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/understanding-bis-iec-almm-certifications-solar-equipment-india"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={t("bisIecAlmm.meta.ogTitle")}
        />
        <meta
          property="og:description"
          content={t("bisIecAlmm.meta.ogDescription")}
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/understanding-bis-iec-almm-certifications-solar-equipment-india"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta
          property="og:image"
          content="https://www.headsupb2b.com/solar-certifications.webp"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("bisIecAlmm.meta.twitterTitle")}
        />
        <meta
          name="twitter:description"
          content={t("bisIecAlmm.meta.twitterDescription")}
        />
        <meta
          name="twitter:image"
          content="https://www.headsupb2b.com/solar-certifications.webp"
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
              {t("bisIecAlmm.hero.badge")}
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
              {t("bisIecAlmm.hero.title")}
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.62)",
                maxWidth: 640,
                lineHeight: 1.65,
                marginBottom: 40,
              }}
            >
              {t("bisIecAlmm.hero.subtitle")}
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
              style={{ fontSize: 15, color: "#1E3A5F", lineHeight: 1.65, margin: 0 }}
              {...HTML(t("bisIecAlmm.whoThisIsFor"))}
            />
          </div>

          {/* ── INTRO ── */}
          <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 22 }}>
            {t("bisIecAlmm.intro1")}
          </p>
          <p style={p}>
            {t("bisIecAlmm.intro2")}
          </p>

          {/* ── TOC ── */}
          <nav
            style={{
              background: "#FFFFFF",
              border: "1px solid #DDE8DB",
              borderTop: "4px solid #5E3F99",
              padding: "32px 36px",
              margin: "52px 0 60px",
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
              {t("bisIecAlmm.tocLabel")}
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
              {TOC.map(({ href, label }, i) => (
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

          {/* ── S1: Three Pillars ── */}
          <Section id="three-pillars" title={t("bisIecAlmm.s1.title")}>
            <p style={p}>
              {t("bisIecAlmm.s1.p1")}
            </p>

            {/* Three pillar cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
                margin: "32px 0",
              }}
            >
              {PILLARS.map(({ tag, tagBg, title, desc, icon }) => (
                <div
                  key={tag}
                  style={{
                    border: "1px solid #DDE8DB",
                    borderRadius: 8,
                    overflow: "hidden",
                    background: "#FFFFFF",
                  }}
                >
                  <div
                    style={{
                      padding: "18px 20px 14px",
                      borderBottom: "1px solid #DDE8DB",
                    }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        padding: "3px 9px",
                        borderRadius: 3,
                        display: "inline-block",
                        marginBottom: 10,
                        background: tagBg,
                      }}
                    >
                      {tag}
                    </span>
                    <h4
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#181C18",
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {title}
                    </h4>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontSize: 13.5, color: "#6B7468", lineHeight: 1.6, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={p}>
              {t("bisIecAlmm.s1.p2")}
            </p>
          </Section>

          <Rule />

          {/* ── S2: BIS ── */}
          <Section id="bis" title={t("bisIecAlmm.s2.title")}>
            <p style={p}>
              {t("bisIecAlmm.s2.p1")}
            </p>

            <h3 style={h3Style}>{t("bisIecAlmm.s2.h3a")}</h3>
            <p style={p} {...HTML(t("bisIecAlmm.s2.p2"))} />

            <h3 style={h3Style}>{t("bisIecAlmm.s2.h3b")}</h3>
            <p style={p}>
              {t("bisIecAlmm.s2.p3")}
            </p>

            <Callout variant="amber" icon="⚠" title={t("bisIecAlmm.s2.calloutTitle")}>
              <ul style={{ margin: "8px 0 0", paddingLeft: 20, lineHeight: 1.7 }}>
                {BIS_ALERT.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Callout>
          </Section>

          <Rule />

          {/* ── S3: IEC ── */}
          <Section id="iec" title={t("bisIecAlmm.s3.title")}>
            <p style={p} {...HTML(t("bisIecAlmm.s3.p1"))} />
            <p style={p}>
              {t("bisIecAlmm.s3.p2")}
            </p>
            <p style={p}>
              {t("bisIecAlmm.s3.p3")}
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 24px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {IEC_REASONS.map((item) => (
                <li
                  key={item}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #22A05A",
                    padding: "12px 18px",
                    fontSize: 14.5,
                    color: "#3A4238",
                    lineHeight: 1.6,
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Blockquote */}
            <blockquote
              style={{
                borderLeft: "4px solid #22A05A",
                background: "#F0FAF5",
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
                  color: "#0D4A2F",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {t("bisIecAlmm.s3.quote")}
              </p>
              <cite
                style={{
                  display: "block",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#1A7A4A",
                  marginTop: 12,
                }}
              >
                {t("bisIecAlmm.s3.quoteCite")}
              </cite>
            </blockquote>

            <h3 style={h3Style}>{t("bisIecAlmm.s3.tableHeading")}</h3>

            <div style={{ overflowX: "auto", margin: "20px 0 28px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr className="bg-headupb2b">
                    {IEC_TABLE_HEAD.map(
                      (th) => (
                        <th
                          key={th}
                          style={{
                            padding: "12px 16px",
                            textAlign: "left",
                            color: "rgba(255,255,255,0.9)",
                            fontWeight: 500,
                            fontSize: 12.5,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {th}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {IEC_TABLE.map(({ std, covers, applies, mand, badgeVar }, i) => (
                    <tr key={std} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{std}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{covers}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{applies}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={badgeVar}>{mand}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S4: ALMM ── */}
          <Section id="almm" title={t("bisIecAlmm.s4.title")}>
            <p style={p} {...HTML(t("bisIecAlmm.s4.p1"))} />
            <p style={p}>
              {t("bisIecAlmm.s4.p2")}
            </p>

            <h3 style={h3Style}>{t("bisIecAlmm.s4.h3")}</h3>
            <p style={p}>
              {t("bisIecAlmm.s4.p3")}
            </p>

            <Callout variant="red" icon="🚨" title={t("bisIecAlmm.s4.calloutTitle")}>
              <ul style={{ margin: "8px 0 0", paddingLeft: 20, lineHeight: 1.7 }}>
                {ALMM_RISK.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Callout>
          </Section>

          <Rule />

          {/* ── S5: ALMM Verify ── */}
          <Section id="almm-verify" title={t("bisIecAlmm.s5.title")}>
            <p style={p}>
              {t("bisIecAlmm.s5.p1")}
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
              {ALMM_STEPS.map(({ num, title, desc }) => (
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

          {/* ── S6: How they interact ── */}
          <Section id="interact" title={t("bisIecAlmm.s6.title")}>
            <p style={p}>
              {t("bisIecAlmm.s6.p1")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {INTERACT_HEAD.map(
                      (th) => (
                        <th
                          key={th}
                          style={{
                            padding: "12px 14px",
                            textAlign: "left",
                            color: "rgba(255,255,255,0.9)",
                            fontWeight: 500,
                            fontSize: 12.5,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {th}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {INTERACT_ROWS.map(({ prod, bis, iec, almm, notes }, i) => (
                    <tr key={prod} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 14px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{prod}</td>
                      <td style={{ padding: "12px 14px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{bis}</td>
                      <td style={{ padding: "12px 14px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{iec}</td>
                      <td style={{ padding: "12px 14px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{almm}</td>
                      <td style={{ padding: "12px 14px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S7: Common Risks ── */}
          <Section id="risks" title={t("bisIecAlmm.s7.title")}>
            <p style={p}>
              {t("bisIecAlmm.s7.p1")}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {RISKS.map(({ level, levelVar, title, desc }) => (
                <div
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: `4px solid ${levelVar === "red" ? "#C0392B" : "#D97706"}`,
                    borderRadius: "0 6px 6px 0",
                    padding: "18px 20px",
                  }}
                >
                  <div style={{ marginBottom: 8 }}>
                    <Badge variant={levelVar}>{level}</Badge>
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 8,
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
                  </div>
                  <p style={{ fontSize: 13.5, color: "#6B7468", lineHeight: 1.6, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S8: Checklist ── */}
          <Section id="checklist" title={t("bisIecAlmm.s8.title")}>
            <p style={p}>
              {t("bisIecAlmm.s8.p1")}
            </p>

            <Callout variant="green" icon="✅" title={t("bisIecAlmm.s8.calloutTitle")}>
              <ul style={{ margin: "10px 0 0", paddingLeft: 0, listStyle: "none", lineHeight: 1.7 }}>
                {CHECKLIST.map(({ label, text }) => (
                  <li
                    key={label}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      padding: "8px 0",
                      borderBottom: "1px dashed #9FD4BC",
                    }}
                  >
                    <span style={{ color: "#22A05A", fontSize: 14, marginTop: 2 }}>▸</span>
                    <div>
                      <strong style={{ color: "#0D4A2F", fontWeight: 700 }}>{label}:</strong>{" "}
                      <span>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Callout>
          </Section>

          <Rule />

          {/* ── S9: Procurement Partner ── */}
          <Section id="procurement-partner" title={t("bisIecAlmm.s9.title")}>
            <p style={p}>
              {t("bisIecAlmm.s9.p1")}
            </p>
            <p style={p}>
              {t("bisIecAlmm.s9.p2")}
            </p>
            <p style={p}>
              {t("bisIecAlmm.s9.p3")}
            </p>

            {/* Blockquote */}
            <blockquote
              style={{
                borderLeft: "4px solid #22A05A",
                background: "#F0FAF5",
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
                  color: "#0D4A2F",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {t("bisIecAlmm.s9.quote")}
              </p>
              <cite
                style={{
                  display: "block",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#1A7A4A",
                  marginTop: 12,
                }}
              >
                {t("bisIecAlmm.s9.quoteCite")}
              </cite>
            </blockquote>
          </Section>

          <Rule />

          {/* ── S10: Key Takeaways ── */}
          <Section id="takeaways" title={t("bisIecAlmm.s10.title")}>
            <p style={p}>
              {t("bisIecAlmm.s10.p1")}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {TAKEAWAYS.map(({ num, title, desc }) => (
                <div
                  key={num}
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
                    {num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#181C18",
                        marginBottom: 6,
                        lineHeight: 1.35,
                      }}
                    >
                      {title}
                    </div>
                    <p style={{ fontSize: 14.5, color: "#6B7468", lineHeight: 1.65, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
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
              }}
            >
              {t("bisIecAlmm.cta.heading")}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 540,
                margin: "0 auto 30px",
                fontSize: 16,
              }}
            >
              {t("bisIecAlmm.cta.subtitle")}
            </p>
            <Link
              href="/renewable-energy-solutions/solar-charge-controllers"
              style={{
                display: "inline-block",
                background: "#00d4f5",
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 34px",
                borderRadius: 4,
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              {t("bisIecAlmm.cta.button")}
            </Link>
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
                HB
              </div>
              <div>
                <div style={{ fontSize: 13.5, color: "#181C18", fontWeight: 600 }}>
                  {t("bisIecAlmm.footer.authorName")}
                </div>
                <div style={{ fontSize: 12, color: "#6B7468" }}>
                  {t("bisIecAlmm.footer.authorTagline")}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {FOOTER_TAGS.map(
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
    </>
  );
}
