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

export default function PmKusumGuidePage() {
  const { t } = useTranslation();

  const HERO_PILLS = t("pmKusumGuide.heroPills", { returnObjects: true }) || [];
  const TOC = t("pmKusumGuide.toc", { returnObjects: true }) || [];
  const HERO_STATS = t("pmKusumGuide.heroStats", { returnObjects: true }) || [];
  const COMPONENTS = t("pmKusumGuide.components", { returnObjects: true }) || [];
  const RESCO_FLOW = t("pmKusumGuide.rescoFlow", { returnObjects: true }) || [];
  const EPC_VS_RESCO_HEADERS = t("pmKusumGuide.epcVsRescoHeaders", { returnObjects: true }) || [];
  const EPC_VS_RESCO_ROWS = t("pmKusumGuide.epcVsRescoRows", { returnObjects: true }) || [];
  const EPC_VS_RESCO_LAST = t("pmKusumGuide.epcVsRescoLast", { returnObjects: true }) || {};
  const BUYERS = t("pmKusumGuide.buyers", { returnObjects: true }) || [];
  const MATERIALS = t("pmKusumGuide.materials", { returnObjects: true }) || [];
  const STAGES = t("pmKusumGuide.stages", { returnObjects: true }) || [];
  const RAJ_HEADERS = t("pmKusumGuide.rajHeaders", { returnObjects: true }) || [];
  const RAJ_ROWS = t("pmKusumGuide.rajRows", { returnObjects: true }) || [];
  const GUJ_HEADERS = t("pmKusumGuide.gujHeaders", { returnObjects: true }) || [];
  const GUJ_ROWS = t("pmKusumGuide.gujRows", { returnObjects: true }) || [];
  const B2B_OPPORTUNITIES = t("pmKusumGuide.b2bOpportunities", { returnObjects: true }) || [];
  const HOW_TO_ENTER_ITEMS = t("pmKusumGuide.howToEnterItems", { returnObjects: true }) || [];
  const ALMM_HEADERS = t("pmKusumGuide.almmHeaders", { returnObjects: true }) || [];
  const ALMM_ROWS = t("pmKusumGuide.almmRows", { returnObjects: true }) || [];
  const FAQS = t("pmKusumGuide.faqs", { returnObjects: true }) || [];
  const FOOTER_TAGS = t("pmKusumGuide.footerTags", { returnObjects: true }) || [];

  return (
    <>
      <Head>
        <title>{t("pmKusumGuide.meta.title")}</title>
        <meta
          name="description"
          content={t("pmKusumGuide.meta.description")}
        />
        <meta
          name="keywords"
          content={t("pmKusumGuide.meta.keywords")}
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/what-is-pm-kusum"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={t("pmKusumGuide.meta.ogTitle")}
        />
        <meta
          property="og:description"
          content={t("pmKusumGuide.meta.ogDescription")}
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/what-is-pm-kusum"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta
          property="og:image"
          content="https://www.headsupb2b.com/pmkusum.webp"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("pmKusumGuide.meta.twitterTitle")}
        />
        <meta
          name="twitter:description"
          content={t("pmKusumGuide.meta.twitterDescription")}
        />
        <meta
          name="twitter:image"
          content="https://www.headsupb2b.com/pmkusum.webp"
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
              {t("pmKusumGuide.heroBadge")}
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
              {t("pmKusumGuide.heroTitle")}
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
              {t("pmKusumGuide.heroSubtitle")}
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
              {t("pmKusumGuide.tocLabel")}
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

          {/* ── S1: What is PM-KUSUM ── */}
          <Section id="what-is" title={t("pmKusumGuide.s1.title")}>
            <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 28 }}>
              {t("pmKusumGuide.s1.lead")}
            </p>
            <p style={p} {...HTML(t("pmKusumGuide.s1.para1"))} />
            <p style={p}>
              {t("pmKusumGuide.s1.para2")}
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
                {t("pmKusumGuide.s1.quote")}
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
                {t("pmKusumGuide.s1.quoteAttribution")}
              </cite>
            </blockquote>

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
              {HERO_STATS.map(({ num, unit, desc }) => (
                <div
                  key={num}
                  style={{
                    background: "#FFFFFF",
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 30,
                      color: "#0D4A2F",
                      lineHeight: 1,
                      marginBottom: 6,
                      fontWeight: 700,
                    }}
                  >
                    <span style={{ color: "#22A05A" }}>{num}</span>
                    {unit}
                  </div>
                  <div style={{ fontSize: 12, color: "#6B7468", lineHeight: 1.5 }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S2: Three Components ── */}
          <Section id="three-components" title={t("pmKusumGuide.s2.title")}>
            <p style={p}>
              {t("pmKusumGuide.s2.intro")}
            </p>

            {/* Component Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
                margin: "32px 0",
              }}
            >
              {COMPONENTS.map(({ tag, tagBg, title, desc, kvs }) => (
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
                        fontSize: 16,
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
                    <p style={{ fontSize: 13.5, color: "#6B7468", lineHeight: 1.6, margin: "0 0 10px" }}>
                      {desc}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {kvs.map(([k, v]) => (
                        <div
                          key={k}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                            fontSize: 12.5,
                            padding: "5px 0",
                            borderBottom: "1px dashed #DDE8DB",
                          }}
                        >
                          <span style={{ color: "#6B7468" }}>{k}</span>
                          <span style={{ fontWeight: 600, color: "#181C18", fontSize: 13 }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout variant="green" icon="💡" title={t("pmKusumGuide.s2.calloutTitle")}>
              {t("pmKusumGuide.s2.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S3: RESCO ── */}
          <Section id="resco" title={t("pmKusumGuide.s3.title")}>
            <p style={p} {...HTML(t("pmKusumGuide.s3.para1"))} />
            <p style={p} {...HTML(t("pmKusumGuide.s3.para2"))} />

            {/* RESCO flow diagram */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DDE8DB",
                borderRadius: 8,
                padding: "28px 24px",
                margin: "28px 0",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6B7468",
                  marginBottom: 20,
                  textAlign: "center",
                }}
              >
                {t("pmKusumGuide.s3.flowLabel")}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {RESCO_FLOW.map(({ label, sub, color, bg }, i, arr) => (
                  <>
                    <div
                      key={label}
                      style={{
                        background: bg,
                        border: `1px solid ${color}22`,
                        borderRadius: 8,
                        padding: "16px 14px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 700, color, marginBottom: 6 }}>{label}</div>
                      <div style={{ fontSize: 11, color: "#6B7468", lineHeight: 1.45 }}>{sub}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div key={`arrow-${i}`} style={{ fontSize: 18, color: "#22A05A", textAlign: "center" }}>→</div>
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* EPC vs RESCO Table */}
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
                    {EPC_VS_RESCO_HEADERS.map(
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
                  {EPC_VS_RESCO_ROWS.map(([aspect, epc, resco], i) => (
                    <tr key={aspect} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{aspect}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{epc}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{resco}</td>
                    </tr>
                  ))}
                  {/* Last row with badges */}
                  <tr style={{ background: "#FFFFFF" }}>
                    <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, verticalAlign: "top" }}>{EPC_VS_RESCO_LAST.aspect}</td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}><Badge variant="green">{EPC_VS_RESCO_LAST.epc}</Badge></td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}><Badge variant="blue">{EPC_VS_RESCO_LAST.resco}</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="amber" icon="⚠" title={t("pmKusumGuide.s3.calloutTitle")}>
              {t("pmKusumGuide.s3.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S4: Key Buyers ── */}
          <Section id="key-buyers" title={t("pmKusumGuide.s4.title")}>
            <p style={p}>
              {t("pmKusumGuide.s4.intro")}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {BUYERS.map(({ state, name, desc }) => (
                <div
                  key={name}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "4px solid #1A7A4A",
                    borderRadius: "0 6px 6px 0",
                    padding: "18px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#22A05A",
                      marginBottom: 4,
                    }}
                  >
                    {state}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {name}
                  </div>
                  <p style={{ fontSize: 13, color: "#6B7468", lineHeight: 1.55, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S5: Materials ── */}
          <Section id="materials" title={t("pmKusumGuide.s5.title")}>
            <p style={p}>
              {t("pmKusumGuide.s5.intro")}
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

            <Callout variant="blue" icon="ℹ" title={t("pmKusumGuide.s5.calloutTitle")}>
              {t("pmKusumGuide.s5.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S6: How Projects Flow ── */}
          <Section id="how-projects-flow" title={t("pmKusumGuide.s6.title")}>
            <p style={p}>
              {t("pmKusumGuide.s6.intro")}
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

          {/* ── S7: Rajasthan ── */}
          <Section id="rajasthan" title={t("pmKusumGuide.s7.title")}>
            <p style={p}>
              {t("pmKusumGuide.s7.intro")}
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {RAJ_HEADERS.map(
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
                  {RAJ_ROWS.map(([district, discom, model, winners], i) => (
                    <tr key={district + i} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{district}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{discom}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={model === "RESCO" ? "blue" : "green"}>{model}</Badge>
                      </td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{winners}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={p}>
              {t("pmKusumGuide.s7.outro")}
            </p>
          </Section>

          <Rule />

          {/* ── S8: Gujarat ── */}
          <Section id="gujarat" title={t("pmKusumGuide.s8.title")}>
            <p style={p}>
              {t("pmKusumGuide.s8.para1")}
            </p>
            <p style={p}>
              {t("pmKusumGuide.s8.para2")}
            </p>

            {/* Gujarat Projects Table — NEW from PDF */}
            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {GUJ_HEADERS.map(
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
                  {GUJ_ROWS.map(([project, location, value, awardee], i) => (
                    <tr key={project + i} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{project}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{location}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{value}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{awardee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="green" icon="🌞" title={t("pmKusumGuide.s8.calloutTitle")}>
              {t("pmKusumGuide.s8.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S9: B2B Opportunities ── */}
          <Section id="b2b-opportunities" title={t("pmKusumGuide.s9.title")}>
            <p style={p}>
              {t("pmKusumGuide.s9.intro")}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {B2B_OPPORTUNITIES.map(({ label, title, desc, size }) => (
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
          <Section id="how-to-enter" title={t("pmKusumGuide.s10.title")}>
            <p style={p}>
              {t("pmKusumGuide.s10.intro")}
            </p>

            {HOW_TO_ENTER_ITEMS.map(({ h, body }) => (
              <div key={h}>
                <h3 style={h3Style}>{h}</h3>
                <p style={p}>{body}</p>
              </div>
            ))}

            <Callout variant="green" icon="💡" title={t("pmKusumGuide.s10.calloutTitle")}>
              {t("pmKusumGuide.s10.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S11: ALMM ── */}
          <Section id="almm" title={t("pmKusumGuide.s11.title")}>
            <p style={p} {...HTML(t("pmKusumGuide.s11.para1"))} />

            {/* ALMM Requirements Table — NEW from PDF */}
            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {ALMM_HEADERS.map(
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
                  {ALMM_ROWS.map(([req, panels, inverters], i) => (
                    <tr key={req} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{req}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{panels}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{inverters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="red" icon="⚠" title={t("pmKusumGuide.s11.calloutTitle")}>
              {t("pmKusumGuide.s11.calloutBody")}
            </Callout>
          </Section>

          <Rule />

          {/* ── S12: FAQ ── */}
          <Section id="faq" title={t("pmKusumGuide.s12.title")}>
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
              {t("pmKusumGuide.ctaHeading")}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 500,
                margin: "0 auto 30px",
                fontSize: 16,
              }}
            >
              {t("pmKusumGuide.ctaSubtitle")}
            </p>
            <Link
              href="#"
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
              {t("pmKusumGuide.ctaButton")}
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
            <span style={{ fontSize: 13, color: "#6B7468" }}>
              {t("pmKusumGuide.footerPublished")}
            </span>
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
