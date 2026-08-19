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

export default function RajasthanSolarMarketPage() {
  const { t } = useTranslation();

  const HERO_PILLS = t("rajasthanSolar.heroPills", { returnObjects: true }) || [];
  const TOC = t("rajasthanSolar.toc", { returnObjects: true }) || [];
  const STATS = t("rajasthanSolar.stats", { returnObjects: true }) || [];
  const PMKUSUM_TABLE_HEADERS = t("rajasthanSolar.pmkusumTable.headers", { returnObjects: true }) || [];
  const PMKUSUM_TABLE_ROWS = t("rajasthanSolar.pmkusumTable.rows", { returnObjects: true }) || [];
  const RESCO_TABLE_HEADERS = t("rajasthanSolar.rescoTable.headers", { returnObjects: true }) || [];
  const RESCO_TABLE_ROWS = t("rajasthanSolar.rescoTable.rows", { returnObjects: true }) || [];
  const DISCOM_TABLE_HEADERS = t("rajasthanSolar.discomTable.headers", { returnObjects: true }) || [];
  const DISCOM_TABLE_ROWS = t("rajasthanSolar.discomTable.rows", { returnObjects: true }) || [];
  const DISTRICTS = t("rajasthanSolar.districts", { returnObjects: true }) || [];
  const AWARD_HEADERS = t("rajasthanSolar.awardTable.headers", { returnObjects: true }) || [];
  const AWARD_ROWS = t("rajasthanSolar.awardTable.rows", { returnObjects: true }) || [];
  const MATERIALS = t("rajasthanSolar.materials", { returnObjects: true }) || [];
  const STAGES = t("rajasthanSolar.stages", { returnObjects: true }) || [];
  const OPPORTUNITIES = t("rajasthanSolar.opportunities", { returnObjects: true }) || [];
  const CHALLENGE_HEADERS = t("rajasthanSolar.challengesTable.headers", { returnObjects: true }) || [];
  const CHALLENGE_ROWS = t("rajasthanSolar.challengesTable.rows", { returnObjects: true }) || [];
  const FAQS = t("rajasthanSolar.faqs", { returnObjects: true }) || [];

  return (
    <>
      <Head>
        <title>{t("rajasthanSolar.meta.title")}</title>
        <meta
          name="description"
          content={t("rajasthanSolar.meta.description")}
        />
        <meta
          name="keywords"
          content={t("rajasthanSolar.meta.keywords")}
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/rajasthan-solar-market"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={t("rajasthanSolar.meta.ogTitle")}
        />
        <meta
          property="og:description"
          content={t("rajasthanSolar.meta.ogDescription")}
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/rajasthan-solar-market"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta
          property="og:image"
          content="https://www.headsupb2b.com/Pmkusum.webp"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("rajasthanSolar.meta.twitterTitle")}
        />
        <meta
          name="twitter:description"
          content={t("rajasthanSolar.meta.twitterDescription")}
        />
        <meta
          name="twitter:image"
          content="https://www.headsupb2b.com/Pmkusum.webp"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .rsm-b2b-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .rsm-stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .rsm-toc-grid {
            grid-template-columns: 1fr !important;
            gap: 4px 0 !important;
          }
          .rsm-stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .rsm-district-grid {
            grid-template-columns: 1fr !important;
          }
          .rsm-b2b-grid {
            grid-template-columns: 1fr !important;
          }
          .rsm-body {
            padding: 0 20px 80px !important;
          }
          .rsm-body table {
            font-size: 13px !important;
          }
          .rsm-body table th,
          .rsm-body table td {
            padding: 10px 12px !important;
          }
        }
        @media (max-width: 480px) {
          .rsm-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .rsm-body {
            padding: 0 16px 64px !important;
          }
          .rsm-body table th,
          .rsm-body table td {
            padding: 8px 10px !important;
            font-size: 12.5px !important;
          }
        }
      `}</style>

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
              {t("rajasthanSolar.hero.badge")}
            </span>

            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(30px, 4.5vw, 52px)",
                color: "#FFFFFF",
                lineHeight: 1.18,
                marginBottom: 22,
                maxWidth: 700,
                fontWeight: 700,
              }}
            >
              {t("rajasthanSolar.hero.title")}
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.62)",
                maxWidth: 620,
                lineHeight: 1.65,
                marginBottom: 40,
              }}
            >
              {t("rajasthanSolar.hero.subtitle")}
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
          className="rsm-body"
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 32px 100px",
          }}
        >
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
              {t("rajasthanSolar.tocLabel")}
            </div>
            <ol
              className="rsm-toc-grid"
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

          {/* ── S1: Why Rajasthan ── */}
          <Section id="why-rajasthan" title={t("rajasthanSolar.s1.title")}>
            <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 28 }}>
              {t("rajasthanSolar.s1.lead")}
            </p>
            <p style={p} {...HTML(t("rajasthanSolar.s1.p2"))} />

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
                {t("rajasthanSolar.s1.quote")}
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
                {t("rajasthanSolar.s1.quoteCite")}
              </cite>
            </blockquote>

            {/* Stat strip */}
            <div
              className="rsm-stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 1,
                background: "#DDE8DB",
                border: "1px solid #DDE8DB",
                borderRadius: 6,
                overflow: "hidden",
                margin: "36px 0",
              }}
            >
              {STATS.map(({ num, unit, desc }) => (
                <div
                  key={desc}
                  style={{
                    background: "#FFFFFF",
                    padding: "24px 16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 26,
                      color: "#0D4A2F",
                      lineHeight: 1,
                      marginBottom: 6,
                      fontWeight: 700,
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

            <h3 style={h3Style}>{t("rajasthanSolar.s1.h3")}</h3>
            <p style={p} {...HTML(t("rajasthanSolar.s1.p3"))} />
          </Section>

          <Rule />

          {/* ── S2: PM-KUSUM in Rajasthan ── */}
          <Section id="pm-kusum-scale" title={t("rajasthanSolar.s2.title")}>
            <p style={p} {...HTML(t("rajasthanSolar.s2.p1"))} />

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {PMKUSUM_TABLE_HEADERS.map((th) => (
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
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PMKUSUM_TABLE_ROWS.map(([comp, desc, target, model, disc], i) => (
                    <tr key={comp} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{comp}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{desc}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{target}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{model}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{disc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="amber" icon="⚡" title={t("rajasthanSolar.s2.calloutTitle")}>
              {t("rajasthanSolar.s2.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S3: RESCO Model ── */}
          <Section id="resco" title={t("rajasthanSolar.s3.title")}>
            <p style={p} {...HTML(t("rajasthanSolar.s3.p1"))} />

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {RESCO_TABLE_HEADERS.map((th) => (
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
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RESCO_TABLE_ROWS.map(([aspect, epc, resco], i) => (
                    <tr key={aspect} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{aspect}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{epc}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{resco}</td>
                    </tr>
                  ))}
                  <tr style={{ background: "#FFFFFF" }}>
                    <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, verticalAlign: "top" }}>{t("rajasthanSolar.s3.b2bRow.label")}</td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}><Badge variant="green">{t("rajasthanSolar.s3.b2bRow.epc")}</Badge></td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}><Badge variant="blue">{t("rajasthanSolar.s3.b2bRow.resco")}</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="amber" icon="⚠" title={t("rajasthanSolar.s3.calloutTitle")}>
              {t("rajasthanSolar.s3.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S4: DISCOMs ── */}
          <Section id="discoms" title={t("rajasthanSolar.s4.title")}>
            <p style={p}>
              {t("rajasthanSolar.s4.p1")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {DISCOM_TABLE_HEADERS.map((th) => (
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
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DISCOM_TABLE_ROWS.map(([d, terr, f, v, w], i) => (
                    <tr key={d} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{d}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{terr}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{f}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{v}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S5: District Map ── */}
          <Section id="district-map" title={t("rajasthanSolar.s5.title")}>
            <p style={p}>
              {t("rajasthanSolar.s5.p1")}
            </p>

            <div
              className="rsm-district-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {DISTRICTS.map(({ district, auth, model, winner, contract }) => (
                <div
                  key={district}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "4px solid #1A7A4A",
                    borderRadius: "0 6px 6px 0",
                    padding: "18px 20px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, gap: 10, flexWrap: "wrap" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#181C18", lineHeight: 1.3 }}>{district}</div>
                    <Badge variant={model.startsWith("RESCO") ? "blue" : "green"}>{model}</Badge>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#22A05A", marginBottom: 10 }}>
                    {auth}
                  </div>
                  <div style={{ fontSize: 12, color: "#6B7468", marginBottom: 4 }}>{t("rajasthanSolar.s5.winnerLabel")}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#181C18", marginBottom: 10, lineHeight: 1.45 }}>{winner}</div>
                  <div style={{ fontSize: 12, color: "#6B7468", marginBottom: 4 }}>{t("rajasthanSolar.s5.contractLabel")}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#0D4A2F" }}>{contract}</div>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S6: Award Data ── */}
          <Section id="award-data" title={t("rajasthanSolar.s6.title")}>
            <p style={p}>
              {t("rajasthanSolar.s6.p1")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {AWARD_HEADERS.map((th) => (
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
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AWARD_ROWS.map(([proj, win, loc, model, auth], i) => (
                    <tr key={proj + i} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{proj}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{win}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{loc}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={model === "RESCO" ? "blue" : "green"}>{model}</Badge>
                      </td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{auth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="amber" icon="⏱" title={t("rajasthanSolar.s6.calloutTitle")}>
              {t("rajasthanSolar.s6.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S7: Materials ── */}
          <Section id="materials" title={t("rajasthanSolar.s7.title")}>
            <p style={p}>
              {t("rajasthanSolar.s7.p1")}
            </p>

            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
                border: "1px solid #DDE8DB",
                borderRadius: 6,
                overflow: "hidden",
                margin: "24px 0",
                padding: 0,
              }}
            >
              {MATERIALS.map((item, i) => (
                <li
                  key={item}
                  style={{
                    padding: "12px 18px",
                    fontSize: 14,
                    color: "#3A4238",
                    borderBottom: "1px solid #DDE8DB",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: i % 2 === 1 ? "#F0FAF5" : "#FFFFFF",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22A05A",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Callout variant="blue" icon="ℹ" title={t("rajasthanSolar.s7.calloutTitle")}>
              {t("rajasthanSolar.s7.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S8: Project Flow ── */}
          <Section id="project-flow" title={t("rajasthanSolar.s8.title")}>
            <p style={p}>
              {t("rajasthanSolar.s8.p1")}
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
              {STAGES.map(({ num, title, desc }) => (
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

          {/* ── S9: B2B Opportunities ── */}
          <Section id="b2b-opportunities" title={t("rajasthanSolar.s9.title")}>
            <p style={p}>
              {t("rajasthanSolar.s9.p1")}
            </p>

            <div
              className="rsm-b2b-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {OPPORTUNITIES.map(({ label, title, desc, size }) => (
                <div
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderRadius: 8,
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#22A05A",
                      marginBottom: 8,
                    }}
                  >
                    {label}
                  </div>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 8,
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#6B7468",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                  <span
                    style={{
                      marginTop: 12,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#0D4A2F",
                      background: "#D6F0E2",
                      padding: "4px 10px",
                      borderRadius: 4,
                      display: "inline-block",
                    }}
                  >
                    {size}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S10: How to Enter ── */}
          <Section id="how-to-enter" title={t("rajasthanSolar.s10.title")}>
            <p style={p}>
              {t("rajasthanSolar.s10.p1")}
            </p>

            <h3 style={h3Style}>{t("rajasthanSolar.s10.h1")}</h3>
            <p style={p}>
              {t("rajasthanSolar.s10.p2")}
            </p>

            <h3 style={h3Style}>{t("rajasthanSolar.s10.h2")}</h3>
            <p style={p}>
              {t("rajasthanSolar.s10.p3")}
            </p>

            <h3 style={h3Style}>{t("rajasthanSolar.s10.h3")}</h3>
            <p style={p}>
              {t("rajasthanSolar.s10.p4")}
            </p>

            <h3 style={h3Style}>{t("rajasthanSolar.s10.h4")}</h3>
            <p style={p}>
              {t("rajasthanSolar.s10.p5")}
            </p>

            <h3 style={h3Style}>{t("rajasthanSolar.s10.h5")}</h3>
            <p style={p}>
              {t("rajasthanSolar.s10.p6")}
            </p>

            <Callout variant="green" icon="💡" title={t("rajasthanSolar.s10.calloutTitle")}>
              {t("rajasthanSolar.s10.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S11: Challenges ── */}
          <Section id="challenges" title={t("rajasthanSolar.s11.title")}>
            <p style={p}>
              {t("rajasthanSolar.s11.p1")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {CHALLENGE_HEADERS.map((th) => (
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
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CHALLENGE_ROWS.map(([c, i_, m], idx) => (
                    <tr key={c} style={{ background: idx % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{c}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{i_}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S12: FAQ ── */}
          <Section id="faq" title={t("rajasthanSolar.s12.title")}>
            {FAQS.map(({ q, a }) => (
              <div key={q}>
                <h3 style={h3Style}>{q}</h3>
                <p style={p}>{a}</p>
              </div>
            ))}
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
              {t("rajasthanSolar.cta.title")}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 500,
                margin: "0 auto 30px",
                fontSize: 16,
              }}
            >
              {t("rajasthanSolar.cta.subtitle")}
            </p>
            <a

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
              {t("rajasthanSolar.cta.button")}
            </a>
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
            <span style={{ fontSize: 13, color: "#6B7468" }}>
              {t("rajasthanSolar.footer")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
