'use client';

import { useState, useEffect, useCallback } from 'react';

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function fmt(v) {
  if (v >= 10000000) return '₹' + (v / 10000000).toFixed(2) + ' Cr';
  if (v >= 100000)   return '₹' + (v / 100000).toFixed(1) + 'L';
  if (v >= 1000)     return '₹' + (v / 1000).toFixed(1) + 'K';
  return '₹' + v.toFixed(0);
}

function calc(load, hours, dieselP, gridRate, yrs) {
  const days = 300;
  const dgCap = load * 8000, besCap = load * 26000;
  const fuelLph = (load / 100) * 22;
  const dgFuelA  = fuelLph * hours * days * dieselP;
  const dgMaintA = load * 800;
  const dgMiscA  = dgCap * 0.04;
  const dgAnn    = dgFuelA + dgMaintA + dgMiscA + dgCap / 10;
  const kwhA     = load * 0.8 * hours * days;
  const besElecA = (kwhA / 0.92) * gridRate;
  const besMaintA = besCap * 0.01;
  const besMiscA  = besCap * 0.005;
  const besAnn    = besElecA + besMaintA + besMiscA + besCap / 12;
  const dgFuelT  = dgFuelA * yrs, dgMaintT = dgMaintA * yrs, dgMiscT = dgMiscA * yrs;
  const dgTCO    = dgCap + dgFuelT + dgMaintT + dgMiscT;
  const besElecT = besElecA * yrs, besMaintT = besMaintA * yrs, besMiscT = besMiscA * yrs;
  const besRep   = yrs >= 10 ? besCap * 0.28 : 0;
  const besTCO   = besCap + besElecT + besMaintT + besMiscT + besRep;
  const saving   = dgTCO - besTCO;
  const payback  = (dgAnn - besAnn) > 0 ? (besCap - dgCap) / (dgAnn - besAnn) : 99;
  return { dgAnn, besAnn, payback, dgCap, besCap, dgFuelT, besElecT, dgMaintT, besMaintT, dgMiscT, besMiscT, besRep, dgTCO, besTCO, saving };
}

/* ─────────────────────────────────────────────
   RANGE INPUT
───────────────────────────────────────────── */
function RangeInput({ label, value, min, max, step = 1, unit, onChange, accent = '#10b981' }) {
  const pct = Math.round(((value - min) / (max - min)) * 100);
  const trackStyle = {
    WebkitAppearance: 'none', appearance: 'none',
    width: '100%', height: 4, borderRadius: 2,
    outline: 'none', cursor: 'pointer', marginTop: 8,
    background: `linear-gradient(to right, ${accent} ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
  };
  return (
    <div style={{ padding: '18px 20px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
      <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>
        {label}
      </label>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input
          type="number" value={value} min={min} max={max} step={step}
          onChange={e => onChange(parseFloat(e.target.value) || min)}
          style={{ width: 80, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 10px', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, color: '#fff', outline: 'none' }}
        />
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={trackStyle}
      />
      <style>{`input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:${accent};cursor:pointer;}`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BAR
───────────────────────────────────────────── */
function Bar({ label, value, max, gradient }) {
  const pct = Math.max(4, Math.round((value / max) * 100));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 130, fontSize: 12, color: 'rgba(255,255,255,0.4)', flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, height: 24, background: 'rgba(255,255,255,0.05)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: gradient, borderRadius: 6, display: 'flex', alignItems: 'center', paddingLeft: 10, fontSize: 12, fontWeight: 700, color: '#fff', transition: 'width 0.5s ease', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {fmt(value)}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CALLOUT
───────────────────────────────────────────── */
function Callout({ type, label, title, items }) {
  const t = {
    green: { bg: '#ecfdf5', border: '#6ee7b7', lc: '#059669' },
    amber: { bg: '#fffbeb', border: '#fcd34d', lc: '#d97706' },
  }[type];
  return (
    <div style={{ background: t.bg, border: `1px solid ${t.border}`, borderRadius: 12, padding: '22px 26px', margin: '32px 0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: t.lc, marginBottom: 10 }}>{label}</div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0d1117', marginBottom: 10 }}>{title}</h3>
      <ul style={{ paddingLeft: 18 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 14, color: '#374151', marginBottom: 7, lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HIDDEN COSTS
───────────────────────────────────────────── */
const HIDDEN = [
  { icon: '🛢️', title: 'Fuel Storage & Pilferage', desc: 'Diesel storage tanks require compliance, inspection, and carry pilferage risk. Fuel theft in industrial settings can add 3–8% to actual consumption costs.' },
  { icon: '⏱️', title: 'Startup Lag & Downtime', desc: 'DGs take 10–30 seconds to start and stabilise. For sensitive manufacturing equipment, this lag causes production interruptions worth far more than the energy cost.' },
  { icon: '🌫️', title: 'CPCB Emission Compliance', desc: 'CPCB Gen-set norms are tightening. Non-compliant generators face fines, retrofitting costs, and in some states, operational shutdowns.' },
  { icon: '📉', title: 'Voltage Quality Issues', desc: 'DG output quality varies with load. Sensitive electronics, CNC machines, and data equipment require AVR systems — adding cost and failure points.' },
  { icon: '🏗️', title: 'Civil & Foundation Work', desc: 'Large DG sets require reinforced concrete pads, acoustic enclosures, and exhaust infrastructure — often ₹3–8 lakh for a 500 kVA installation.' },
  { icon: '♻️', title: 'ESG & Carbon Reporting', desc: 'As ESG reporting requirements tighten for listed companies and export-oriented units, diesel emissions become a balance sheet liability.' },
];

/* ─────────────────────────────────────────────
   DECISION MATRIX
───────────────────────────────────────────── */
const MATRIX = [
  { useCase: 'Manufacturing plant (continuous production)', hours: '6–12 hrs/day', verdict: 'BESS Wins', tag: 'green', reason: 'High daily use makes fuel savings dominant within 2–3 years' },
  { useCase: 'Warehouse / logistics park', hours: '4–8 hrs/day', verdict: 'BESS Wins', tag: 'green', reason: 'Combined with rooftop solar charging, near-zero opex achievable' },
  { useCase: 'IT / data centre (UPS replacement)', hours: 'Continuous', verdict: 'BESS Wins', tag: 'green', reason: 'Instant response, zero lag — DG cannot compete for sensitive loads' },
  { useCase: 'Solar hybrid project (EPC)', hours: 'Night storage + backup', verdict: 'BESS Wins', tag: 'green', reason: 'Solar+BESS is now the standard architecture for most new projects' },
  { useCase: 'Construction site (temporary power)', hours: '8–12 hrs, short duration', verdict: 'Marginal', tag: 'amber', reason: 'Mobility and short duration favours DG; BESS capex hard to recover' },
  { useCase: 'Remote site / no grid (mining, rural)', hours: '10–24 hrs/day', verdict: 'Hybrid Recommended', tag: 'amber', reason: 'Solar+BESS+DG hybrid optimises cost; DG as emergency backup only' },
  { useCase: 'Occasional backup (< 2 hrs/day)', hours: '< 2 hrs/day', verdict: 'DG May Win', tag: 'red', reason: 'Low utilisation means BESS capex cannot be recovered in reasonable time' },
];

const TAG_STYLE = {
  green: { background: '#d1fae5', color: '#065f46' },
  amber: { background: '#fef3c7', color: '#92400e' },
  red:   { background: '#fee2e2', color: '#991b1b' },
};

/* ─────────────────────────────────────────────
   CHECKLIST
───────────────────────────────────────────── */
const CHECKS = [
  { icon: '🔌', text: 'Grid reliability at your site — BESS depends on grid or solar for charging; sites with < 12 hrs of grid per day need solar+BESS hybrid design' },
  { icon: '📊', text: 'Daily load profile and peak demand — BESS sizing must match your highest instantaneous load, not just average consumption' },
  { icon: '⏰', text: 'Number of backup hours required — BESS system size (kWh) is determined by hours × kW load; get this wrong and the system underperforms' },
  { icon: '🏗️', text: 'Space and civil requirements — BESS systems require dry, ventilated spaces; container-based BESS is available for outdoor deployment' },
  { icon: '📋', text: 'Local DISCOM regulations on BESS connectivity and net metering if grid-connected storage is planned' },
  { icon: '🔋', text: 'Battery chemistry — LFP (lithium iron phosphate) is the standard for Indian industrial applications: safer, longer cycle life, better thermal stability' },
  { icon: '🛡️', text: 'Warranty and service — demand minimum 5-year battery warranty, 10-year cycle life guarantee, and local service support within 48 hours' },
  { icon: '💳', text: 'Procurement financing — BESS capex is higher than DG; evaluate procurement credit or CAPEX financing options to manage the upfront investment' },
];

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────────── */
export default function DGvsBESSPage() {
  const [load,     setLoad]     = useState(250);
  const [hours,    setHours]    = useState(6);
  const [dieselP,  setDieselP]  = useState(90);
  const [gridRate, setGridRate] = useState(8);
  const [tcoYears, setTcoYears] = useState(10);
  const [r, setR] = useState(() => calc(250, 6, 90, 8, 10));

  const recalc = useCallback(() => setR(calc(load, hours, dieselP, gridRate, tcoYears)), [load, hours, dieselP, gridRate, tcoYears]);
  useEffect(() => { recalc(); }, [recalc]);

  const paybackStr = r.payback < 1 ? '< 1 yr' : r.payback > 20 ? '20+ yrs' : r.payback.toFixed(1) + ' yrs';
  const savingPositive = r.saving > 0;
  const bannerGrad = savingPositive ? 'linear-gradient(135deg,#10b981,#059669)' : 'linear-gradient(135deg,#d97706,#b45309)';
  const verdictHtml = savingPositive
    ? `Based on your inputs, <strong style="color:#34d399">BESS saves ${fmt(r.saving)} over ${tcoYears} years</strong>. Payback of <strong style="color:#34d399">${r.payback > 20 ? '20+ yrs' : r.payback.toFixed(1) + ' years'}</strong> makes this ${r.payback <= 4 ? 'a <strong style="color:#34d399">strong financial decision</strong>' : r.payback <= 7 ? 'a <strong style="color:#34d399">solid investment</strong>' : '<strong style="color:#fbbf24">worth evaluating further</strong>'}.`
    : `At your current usage level, <span style="color:#fbbf24">a diesel generator may be more cost-effective</span> over ${tcoYears} years. Increase daily usage hours or explore a <strong style="color:#34d399">Solar + BESS hybrid</strong> to improve the economics.`;

  const S = {
    dark:     '#0c0f1a',
    darkCard: '#1a1f35',
    bg:       '#f8fafc',
    text:     '#0d1117',
    muted:    '#6b7280',
    border:   '#e5e7eb',
  };

  const h2 = { fontSize: 26, fontWeight: 800, color: S.dark, margin: '52px 0 16px', lineHeight: 1.2, letterSpacing: -0.5 };
  const p  = { marginBottom: '1.4rem', fontSize: 17, lineHeight: 1.82, color: S.text };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: S.bg, color: S.text, lineHeight: 1.75, fontSize: 17 }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* ── NAV ── */}
      <nav style={{ background: S.dark, padding: '14px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: -0.5 }}>
          Headsup <span style={{ color: '#34d399' }}>B2B</span>
        </div>
        <a href="https://www.headsupb2b.com" style={{ background: '#10b981', color: '#fff', padding: '8px 20px', borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
          Get Sourcing Help →
        </a>
      </nav>

      {/* ── HERO ── */}
      <div style={{ background: S.dark, padding: '80px 48px 96px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, left: -60, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -40, width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ background: 'linear-gradient(135deg,#10b981,#059669)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, letterSpacing: '0.8px', textTransform: 'uppercase' }}>Energy &amp; Cost Analysis</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>May 2025</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>11 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px,4.5vw,50px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: -1, marginBottom: 24 }}>
            <span style={{ color: '#f87171' }}>Diesel Generator</span> vs <span style={{ color: '#34d399' }}>BESS</span>:<br />
            Calculate Your Real Power Costs &amp; Savings
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, maxWidth: 640, marginBottom: 36 }}>
            Most industrial buyers compare sticker prices and stop there. The real cost of backup power — fuel, maintenance, downtime, and carbon — tells a very different story.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['BESS','Diesel Generator','Industrial Power','EPC Projects','Energy Storage'].map(tag => (
              <span key={tag} style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.55)', fontSize: 12, padding: '4px 12px', borderRadius: 20 }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 48px 100px' }}>

        {/* Reading bar */}
        <div style={{ background: '#ecfdf5', border: '1px solid #d1fae5', borderRadius: 10, padding: '14px 20px', marginBottom: 36, fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
          📋 <strong style={{ color: S.text }}>Who this is for:</strong> Plant managers, EPC contractors, infrastructure developers, and industrial buyers evaluating backup or hybrid power solutions across India.
        </div>

        <p style={p}>Diesel generators have powered India's industrial backbone for decades. They're familiar, available, and — at first glance — affordable. But that first glance is costing businesses lakhs every year.</p>
        <p style={p}>Battery Energy Storage Systems (BESS) — once the preserve of large utility projects — are now commercially viable for industrial applications. When you run a full lifecycle cost comparison, the math increasingly favours the switch. The question is no longer <em>if</em> BESS makes sense — it's <em>when</em> and <em>for which load profiles</em>.</p>

        {/* ── VS CARDS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', margin: '36px 0', alignItems: 'stretch' }}>
          <div style={{ background: S.dark, border: '1px solid rgba(239,68,68,0.3)', borderRadius: 16, padding: '28px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 26 }}>⚙️</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#f87171' }}>Diesel Generator</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 16 }}>Combustion-based power generation using diesel fuel. Available in kVA ranges from 5 kVA to 3,000+ kVA. Proven, widely serviced, and scalable for high-demand loads.</p>
            {['High fuel running costs','Frequent maintenance cycles','Noise and emissions','Carbon compliance liability','Lower capex, high opex'].map(t => (
              <div key={t} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ color: '#f87171', fontSize: 16 }}>•</span>{t}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, fontSize: 22, fontWeight: 900, color: 'rgba(255,255,255,0.25)', letterSpacing: -1 }}>VS</div>
          <div style={{ background: S.darkCard, border: '1px solid rgba(16,185,129,0.3)', borderRadius: 16, padding: '28px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 26 }}>⚡</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#34d399' }}>BESS</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 16 }}>Battery Energy Storage System using lithium-ion or LFP chemistry. Stores grid or solar energy for dispatch on demand. Scalable from 50 kWh to multi-MWh systems.</p>
            {['Near-zero fuel cost','Minimal maintenance','Silent, zero-emission operation','Carbon credit eligible','Higher capex, low opex'].map(t => (
              <div key={t} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ color: '#34d399', fontSize: 16 }}>•</span>{t}
              </div>
            ))}
          </div>
        </div>

        <h2 style={h2}>Why the Standard Price Comparison Is Wrong</h2>
        <p style={p}>Most procurement decisions on backup power are made by comparing capital cost per kVA — and that's where the analysis ends. A 500 kVA diesel generator might cost ₹18–22 lakh. A comparable BESS system might cost ₹45–65 lakh. On capex alone, the DG wins. But capex alone is the wrong metric.</p>
        <p style={p}>The correct metric is <strong>Total Cost of Ownership (TCO) over the operating life</strong> — typically 10–15 years. When fuel, maintenance, downtime, compliance, and end-of-life costs are factored in, the picture reverses dramatically — often by the 3rd or 4th year of operation.</p>

        {/* ── STATS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(148px,1fr))', gap: 12, margin: '36px 0' }}>
          {[
            { num: '₹92–110', col: '#f87171', label: 'Cost per unit (kWh) from diesel generator at current fuel prices' },
            { num: '₹8–14',   col: '#34d399', label: 'Cost per unit (kWh) from BESS charged via grid or solar' },
            { num: '3–4 Yrs', col: '#fbbf24', label: 'Typical BESS payback period vs. diesel for 8+ hrs/day usage' },
            { num: '₹90/L',   col: '#34d399', label: 'Diesel price benchmark used in this analysis (May 2025, India avg.)' },
          ].map(s => (
            <div key={s.num} style={{ background: S.dark, borderRadius: 14, padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1, marginBottom: 8, color: s.col }}>{s.num}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>The Real Cost Breakdown: DG vs. BESS</h2>
        <p style={p}>Let's model this for a realistic industrial use case: a 250 kVA backup power requirement at a mid-size manufacturing plant, running approximately 6–8 hours per day on backup power.</p>

        {/* ── CALCULATOR ── */}
        <div style={{ background: S.dark, borderRadius: 20, border: '1px solid rgba(52,211,153,0.2)', overflow: 'hidden', margin: '36px 0' }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg,rgba(16,185,129,0.15),rgba(16,185,129,0.04))', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#34d399', marginBottom: 6 }}>⚡ Interactive Calculator</div>
              <div style={{ fontSize: 19, fontWeight: 900, color: '#fff', letterSpacing: -0.4 }}>DG vs BESS — Your Real Power Costs</div>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Adjust inputs → results update instantly</div>
          </div>

          {/* Inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <RangeInput label="Load Capacity"     value={load}     min={10}  max={2000}       unit="kVA"    onChange={setLoad}     accent="#10b981" />
            <RangeInput label="Daily Backup Hours" value={hours}    min={1}   max={24}  step={0.5} unit="hrs/day" onChange={setHours}    accent="#10b981" />
            <RangeInput label="Diesel Price"       value={dieselP}  min={60}  max={150}        unit="₹/L"    onChange={setDieselP}  accent="#ef4444" />
            <RangeInput label="Grid Rate (BESS)"   value={gridRate} min={3}   max={20}  step={0.5} unit="₹/kWh"  onChange={setGridRate} accent="#10b981" />
            <div style={{ padding: '18px 20px' }}>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>TCO Period</label>
              <select value={tcoYears} onChange={e => setTcoYears(+e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 10px', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, color: '#fff', outline: 'none' }}>
                <option value={5}>5 Years</option>
                <option value={10}>10 Years</option>
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
              </select>
            </div>
          </div>

          {/* Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { label: '⚙️ DG Annual Cost',  val: fmt(r.dgAnn),  col: '#f87171' },
              { label: '⚡ BESS Annual Cost', val: fmt(r.besAnn), col: '#34d399' },
              { label: '⏱ Payback Period',   val: paybackStr,    col: '#fbbf24' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '22px 24px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: s.col, marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: s.col, letterSpacing: -1, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{i === 2 ? 'BESS vs DG' : 'per year'}</div>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Cost Breakdown</span>
            <div style={{ display: 'flex' }}>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 11, fontWeight: 700, color: '#f87171', letterSpacing: '0.5px', textTransform: 'uppercase' }}>DG</span>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 11, fontWeight: 700, color: '#34d399', letterSpacing: '0.5px', textTransform: 'uppercase' }}>BESS</span>
            </div>
          </div>
          {[
            { label: 'Capital Investment',      dg: r.dgCap,    be: r.besCap   },
            { label: 'Fuel / Electricity Cost', dg: r.dgFuelT,  be: r.besElecT },
            { label: 'Maintenance & Repairs',   dg: r.dgMaintT, be: r.besMaintT },
            { label: 'Compliance, Ops & Misc.', dg: r.dgMiscT,  be: r.besMiscT },
          ].map(row => (
            <div key={row.label} style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{row.label}</span>
              <div style={{ display: 'flex' }}>
                <span style={{ minWidth: 110, textAlign: 'right', fontSize: 14, fontWeight: 600, color: '#f87171' }}>{fmt(row.dg)}</span>
                <span style={{ minWidth: 110, textAlign: 'right', fontSize: 14, fontWeight: 600, color: '#34d399' }}>{fmt(row.be)}</span>
              </div>
            </div>
          ))}
          <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Battery Replacement</span>
            <div style={{ display: 'flex' }}>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.3)' }}>—</span>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 14, fontWeight: 600, color: '#34d399' }}>{tcoYears >= 10 ? fmt(r.besRep) : '—'}</span>
            </div>
          </div>
          <div style={{ padding: '16px 24px', background: 'rgba(255,255,255,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Total Cost of Ownership</span>
            <div style={{ display: 'flex' }}>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 16, fontWeight: 800, color: '#f87171' }}>{fmt(r.dgTCO)}</span>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 16, fontWeight: 800, color: '#34d399' }}>{fmt(r.besTCO)}</span>
            </div>
          </div>

          {/* Banner */}
          <div style={{ background: bannerGrad, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: 2 }}>{savingPositive ? 'Total Savings with BESS' : 'DG is cheaper by'}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>Over {tcoYears}-year TCO period</div>
            </div>
            <div style={{ fontSize: 30, fontWeight: 900, color: '#fff', letterSpacing: -1 }}>{fmt(Math.abs(r.saving))}</div>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '6px 16px', fontSize: 13, fontWeight: 700, color: '#fff' }}>Payback: {paybackStr}</div>
          </div>

          {/* Bars */}
          <div style={{ padding: '22px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Visual Cost Comparison</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Bar label="DG Total TCO"     value={r.dgTCO}      max={r.dgTCO} gradient="linear-gradient(90deg,#ef4444,#dc2626)" />
              <Bar label="BESS Total TCO"   value={r.besTCO}     max={r.dgTCO} gradient="linear-gradient(90deg,#10b981,#059669)" />
              <Bar label="DG Fuel Only"     value={r.dgFuelT}    max={r.dgTCO} gradient="linear-gradient(90deg,#f97316,#ea580c)" />
              <Bar label="BESS Electricity" value={r.besElecT}   max={r.dgTCO} gradient="linear-gradient(90deg,#3b82f6,#2563eb)" />
            </div>
          </div>

          {/* Verdict */}
          <div style={{ padding: '18px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>🎯 Your Result</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: verdictHtml }} />
          </div>
        </div>

        {/* ── HIDDEN COSTS ── */}
        <h2 style={h2}>The Hidden Costs of Diesel Generators</h2>
        <p style={p}>The numbers above capture the obvious costs. But experienced plant managers know there's a second layer of costs that rarely appears in procurement spreadsheets — and they're significant.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, margin: '28px 0' }}>
          {HIDDEN.map(item => (
            <div key={item.title} style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 12, padding: '18px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#ef4444', marginBottom: 6 }}>{item.title}</div>
              <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.55 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* ── DECISION MATRIX ── */}
        <h2 style={h2}>When Does BESS Win Clearly? The Decision Matrix</h2>
        <p style={p}>BESS is not the right answer in every scenario. Here's an honest breakdown of when BESS delivers clear ROI, when it's marginal, and when diesel still makes operational sense.</p>
        <div style={{ overflowX: 'auto', margin: '28px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr>
                {['Use Case','Daily Backup Hours','Verdict','Reason'].map(h => (
                  <th key={h} style={{ background: S.dark, color: '#fff', padding: '13px 16px', textAlign: 'left', fontSize: 12, fontWeight: 700, letterSpacing: '0.4px', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 1 ? '#f8fafc' : '#fff' }}>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 600, color: S.text, lineHeight: 1.5 }}>{row.useCase}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb', color: '#374151', lineHeight: 1.5 }}>{row.hours}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb' }}>
                    <span style={{ ...TAG_STYLE[row.tag], padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>{row.verdict}</span>
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb', color: '#374151', lineHeight: 1.5 }}>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Blockquote */}
        <blockquote style={{ borderLeft: '4px solid #10b981', margin: '36px 0', padding: '20px 24px', background: '#ecfdf5', borderRadius: '0 10px 10px 0' }}>
          <p style={{ fontSize: 17, fontStyle: 'italic', color: '#064e3b', lineHeight: 1.6, margin: 0 }}>
            The inflection point has moved. Three years ago, BESS made financial sense above 8 hours of daily use. Today, with LFP battery prices down 60% since 2021, that threshold is closer to 4–5 hours per day.
          </p>
          <cite style={{ display: 'block', fontSize: 13, fontStyle: 'normal', color: '#6b7280', marginTop: 8, fontWeight: 500 }}>— Headsup B2B Energy Procurement Research, 2025</cite>
        </blockquote>

        {/* ── SOLAR + BESS ── */}
        <h2 style={h2}>BESS + Solar: The Combination That Changes Everything</h2>
        <p style={p}>The strongest case for BESS in Indian industrial applications isn't as a standalone diesel replacement — it's as the storage component of a solar hybrid system. When a rooftop or ground-mount solar array charges the BESS during the day, the effective cost per unit drops to ₹3–6/kWh.</p>
        <p style={p}>For a manufacturing plant paying ₹8–10/unit for grid power and ₹92–110/unit for diesel backup, a solar+BESS system can compress the blended energy cost to ₹5–7/unit. Payback on combined solar+BESS capex is typically 4–6 years — with 20+ years of low-cost energy thereafter.</p>
        <Callout type="green" label="⚡ Solar + BESS Advantage" title="Why the combination beats standalone BESS or solar alone" items={[
          '<strong>Solar charges BESS at ₹0 marginal cost</strong> — eliminating grid electricity cost for storage',
          '<strong>BESS enables solar to cover evening and night loads</strong> — increasing solar utilisation beyond daylight hours',
          '<strong>Combined system qualifies for MNRE incentives</strong> and state-level renewable energy subsidies',
          '<strong>Eliminates diesel dependency entirely</strong> for facilities with sufficient solar generation',
          '<strong>Single procurement source</strong> for panels, BESS, inverters, and BoS reduces project complexity',
        ]} />

        {/* ── CHECKLIST ── */}
        <h2 style={h2}>What to Evaluate Before Switching from DG to BESS</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '20px 0' }}>
          {CHECKS.map(item => (
            <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: 14, color: '#374151', lineHeight: 1.55 }}>
              <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* ── PROCUREMENT ── */}
        <h2 style={h2}>Procurement Considerations for Industrial Buyers</h2>
        <p style={p}>Sourcing BESS equipment for industrial applications in India requires navigating a rapidly evolving supplier landscape. Unlike diesel generators — where the vendor ecosystem is mature and standardised — BESS procurement involves greater technical complexity.</p>
        <Callout type="amber" label="⚠ Procurement Guidance" title="What industrial buyers must verify before ordering BESS" items={[
          '<strong>IEC 62619 certification</strong> for battery cells — mandatory for safety and insurance compliance',
          '<strong>BMS (Battery Management System) quality</strong> — the BMS determines system safety, performance, and lifespan more than the cells themselves',
          '<strong>Cycle life warranty</strong> — demand minimum 4,000 cycles at 80% depth of discharge for LFP chemistry',
          '<strong>Thermal management system</strong> — active cooling required for ambient temperatures above 40°C (critical for most of India)',
          '<strong>Local service network</strong> — a globally manufactured BESS with no Indian service presence is a liability; confirm response time commitments in writing',
          '<strong>Integration with existing solar inverters</strong> — confirm compatibility before procurement if retrofitting into an existing solar system',
        ]} />

        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '48px 0' }} />

        {/* ── KEY TAKEAWAYS ── */}
        <h2 style={h2}>Key Takeaways</h2>
        {[
          ['1. Capex comparison alone is the wrong metric.', 'Total Cost of Ownership over 10 years consistently favours BESS for applications with 4+ hours of daily backup usage — often by ₹1.5–3 crore on a single system.'],
          ['2. Diesel has a hidden cost layer most buyers ignore.', 'Fuel pilferage, startup downtime, emission compliance, and voltage quality issues add 20–35% to the headline diesel running cost.'],
          ['3. The inflection point is now 4–5 hours of daily use.', 'LFP battery prices have fallen 60%+ since 2021. The BESS business case now applies to the majority of Indian industrial backup applications.'],
          ['4. Solar+BESS is the architecture to evaluate first.', 'Combining rooftop solar with BESS compresses blended energy costs to ₹5–7/unit and eliminates diesel dependency for most load profiles.'],
          ['5. Procurement quality matters more than price.', 'BMS quality, IEC certification, thermal management, and service network availability determine whether a BESS system performs as promised.'],
        ].map(([bold, rest]) => (
          <p key={bold} style={p}><strong>{bold}</strong> {rest}</p>
        ))}

        {/* ── CTA ── */}
        <div style={{ background: S.dark, borderRadius: 16, padding: '52px 44px', textAlign: 'center', margin: '56px 0 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: '#fff', margin: '0 0 12px', letterSpacing: -0.5 }}>Source BESS &amp; Solar Equipment from Verified Suppliers</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, margin: '0 auto 28px', maxWidth: 480 }}>Headsup B2B connects industrial buyers, EPC firms, and developers to IEC-certified BESS systems — with pan-India delivery and 60-day procurement credit.</p>
            <a href="https://www.headsupb2b.com" style={{ display: 'inline-block', background: '#10b981', color: '#fff', padding: '14px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
              Explore Energy Storage Products →
            </a>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 14 }}>1000+ verified suppliers · 500+ projects delivered · 20+ states served</p>
          </div>
        </div>

      </div>
    </div>
  );
}