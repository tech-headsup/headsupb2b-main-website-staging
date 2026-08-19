'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NextSeo } from 'next-seo';

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

const TAG_STYLE = {
  green: { background: '#d1fae5', color: '#065f46' },
  amber: { background: '#fef3c7', color: '#92400e' },
  red:   { background: '#fee2e2', color: '#991b1b' },
};

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────────── */
export default function DGvsBESSPage() {
  const { t } = useTranslation();

  const [load,     setLoad]     = useState(250);
  const [hours,    setHours]    = useState(6);
  const [dieselP,  setDieselP]  = useState(90);
  const [gridRate, setGridRate] = useState(8);
  const [tcoYears, setTcoYears] = useState(10);
  const [r, setR] = useState(() => calc(250, 6, 90, 8, 10));

  const recalc = useCallback(() => setR(calc(load, hours, dieselP, gridRate, tcoYears)), [load, hours, dieselP, gridRate, tcoYears]);
  useEffect(() => { recalc(); }, [recalc]);

  const HIDDEN = t('dieselVsBess.hidden', { returnObjects: true }) || [];
  const MATRIX = t('dieselVsBess.matrix', { returnObjects: true }) || [];
  const CHECKS = t('dieselVsBess.checks', { returnObjects: true }) || [];
  const TAGS = t('dieselVsBess.hero.tags', { returnObjects: true }) || [];
  const DG_BULLETS = t('dieselVsBess.dgCard.bullets', { returnObjects: true }) || [];
  const BESS_BULLETS = t('dieselVsBess.bessCard.bullets', { returnObjects: true }) || [];
  const STATS = t('dieselVsBess.stats', { returnObjects: true }) || [];
  const SOLAR_ITEMS = t('dieselVsBess.solarCallout.items', { returnObjects: true }) || [];
  const PROC_ITEMS = t('dieselVsBess.procurementCallout.items', { returnObjects: true }) || [];
  const TAKEAWAYS = t('dieselVsBess.takeaways', { returnObjects: true }) || [];
  const MATRIX_HEADERS = t('dieselVsBess.matrixHeaders', { returnObjects: true }) || [];

  const paybackStr = r.payback < 1
    ? t('dieselVsBess.calc.paybackLt1')
    : r.payback > 20
      ? t('dieselVsBess.calc.paybackGt20')
      : r.payback.toFixed(1) + ' ' + t('dieselVsBess.calc.paybackYrsSuffix');
  const savingPositive = r.saving > 0;
  const bannerGrad = savingPositive ? 'linear-gradient(135deg,#10b981,#059669)' : 'linear-gradient(135deg,#d97706,#b45309)';

  const paybackYrsLabel = r.payback > 20
    ? t('dieselVsBess.calc.paybackGt20')
    : r.payback.toFixed(1) + ' ' + t('dieselVsBess.calc.verdictYearsWord');
  const strengthKey = r.payback <= 4
    ? 'verdictStrong'
    : r.payback <= 7
      ? 'verdictSolid'
      : 'verdictWorth';
  const verdictHtml = savingPositive
    ? t('dieselVsBess.calc.verdictPositive', {
        savings: fmt(r.saving),
        years: tcoYears,
        payback: paybackYrsLabel,
        strength: t('dieselVsBess.calc.' + strengthKey),
      })
    : t('dieselVsBess.calc.verdictNegative', { years: tcoYears });

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
      <NextSeo canonical="https://www.headsupb2b.com/research/diesel-generator-vs-bess" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* ── NAV ── */}
      <nav style={{ background: S.dark, padding: '14px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: -0.5 }}>
          {t('dieselVsBess.nav.brandPrefix')} <span style={{ color: '#34d399' }}>{t('dieselVsBess.nav.brandSuffix')}</span>
        </div>
        <a href="https://www.headsupb2b.com" style={{ background: '#10b981', color: '#fff', padding: '8px 20px', borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
          {t('dieselVsBess.nav.cta')}
        </a>
      </nav>

      {/* ── HERO ── */}
      <div style={{ background: S.dark, padding: '80px 48px 96px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, left: -60, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -40, width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ background: 'linear-gradient(135deg,#10b981,#059669)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, letterSpacing: '0.8px', textTransform: 'uppercase' }}>{t('dieselVsBess.hero.badge')}</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{t('dieselVsBess.hero.published')}</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{t('dieselVsBess.hero.readTime')}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px,4.5vw,50px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: -1, marginBottom: 24 }}>
            <span style={{ color: '#f87171' }}>{t('dieselVsBess.hero.dg')}</span> {t('dieselVsBess.hero.vs')} <span style={{ color: '#34d399' }}>{t('dieselVsBess.hero.bess')}</span>:<br />
            {t('dieselVsBess.hero.title2')}
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, maxWidth: 640, marginBottom: 36 }}>
            {t('dieselVsBess.hero.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {TAGS.map(tag => (
              <span key={tag} style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.55)', fontSize: 12, padding: '4px 12px', borderRadius: 20 }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 48px 100px' }}>

        {/* Reading bar */}
        <div style={{ background: '#ecfdf5', border: '1px solid #d1fae5', borderRadius: 10, padding: '14px 20px', marginBottom: 36, fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
          📋 <strong style={{ color: S.text }}>{t('dieselVsBess.readingBar.label')}</strong> {t('dieselVsBess.readingBar.text')}
        </div>

        <p style={p}>{t('dieselVsBess.intro.p1')}</p>
        <p style={p} dangerouslySetInnerHTML={{ __html: t('dieselVsBess.intro.p2') }} />

        {/* ── VS CARDS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', margin: '36px 0', alignItems: 'stretch' }}>
          <div style={{ background: S.dark, border: '1px solid rgba(239,68,68,0.3)', borderRadius: 16, padding: '28px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 26 }}>⚙️</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#f87171' }}>{t('dieselVsBess.dgCard.title')}</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 16 }}>{t('dieselVsBess.dgCard.desc')}</p>
            {DG_BULLETS.map(text => (
              <div key={text} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ color: '#f87171', fontSize: 16 }}>•</span>{text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, fontSize: 22, fontWeight: 900, color: 'rgba(255,255,255,0.25)', letterSpacing: -1 }}>{t('dieselVsBess.vs')}</div>
          <div style={{ background: S.darkCard, border: '1px solid rgba(16,185,129,0.3)', borderRadius: 16, padding: '28px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 26 }}>⚡</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#34d399' }}>{t('dieselVsBess.bessCard.title')}</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 16 }}>{t('dieselVsBess.bessCard.desc')}</p>
            {BESS_BULLETS.map(text => (
              <div key={text} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ color: '#34d399', fontSize: 16 }}>•</span>{text}
              </div>
            ))}
          </div>
        </div>

        <h2 style={h2}>{t('dieselVsBess.wrongPrice.title')}</h2>
        <p style={p}>{t('dieselVsBess.wrongPrice.p1')}</p>
        <p style={p} dangerouslySetInnerHTML={{ __html: t('dieselVsBess.wrongPrice.p2') }} />

        {/* ── STATS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(148px,1fr))', gap: 12, margin: '36px 0' }}>
          {STATS.map(s => (
            <div key={s.num} style={{ background: S.dark, borderRadius: 14, padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1, marginBottom: 8, color: s.col }}>{s.num}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>{t('dieselVsBess.breakdown.title')}</h2>
        <p style={p}>{t('dieselVsBess.breakdown.p1')}</p>

        {/* ── CALCULATOR ── */}
        <div style={{ background: S.dark, borderRadius: 20, border: '1px solid rgba(52,211,153,0.2)', overflow: 'hidden', margin: '36px 0' }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg,rgba(16,185,129,0.15),rgba(16,185,129,0.04))', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#34d399', marginBottom: 6 }}>{t('dieselVsBess.calc.kicker')}</div>
              <div style={{ fontSize: 19, fontWeight: 900, color: '#fff', letterSpacing: -0.4 }}>{t('dieselVsBess.calc.title')}</div>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{t('dieselVsBess.calc.hint')}</div>
          </div>

          {/* Inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <RangeInput label={t('dieselVsBess.calc.inputs.load')}     value={load}     min={10}  max={2000}       unit={t('dieselVsBess.calc.units.kva')}    onChange={setLoad}     accent="#10b981" />
            <RangeInput label={t('dieselVsBess.calc.inputs.hours')}    value={hours}    min={1}   max={24}  step={0.5} unit={t('dieselVsBess.calc.units.hrsDay')} onChange={setHours}    accent="#10b981" />
            <RangeInput label={t('dieselVsBess.calc.inputs.diesel')}   value={dieselP}  min={60}  max={150}        unit={t('dieselVsBess.calc.units.perL')}    onChange={setDieselP}  accent="#ef4444" />
            <RangeInput label={t('dieselVsBess.calc.inputs.grid')}     value={gridRate} min={3}   max={20}  step={0.5} unit={t('dieselVsBess.calc.units.perKwh')} onChange={setGridRate} accent="#10b981" />
            <div style={{ padding: '18px 20px' }}>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>{t('dieselVsBess.calc.inputs.tcoPeriod')}</label>
              <select value={tcoYears} onChange={e => setTcoYears(+e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 10px', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, color: '#fff', outline: 'none' }}>
                <option value={5}>{t('dieselVsBess.calc.tcoOptions.y5')}</option>
                <option value={10}>{t('dieselVsBess.calc.tcoOptions.y10')}</option>
                <option value={15}>{t('dieselVsBess.calc.tcoOptions.y15')}</option>
                <option value={20}>{t('dieselVsBess.calc.tcoOptions.y20')}</option>
              </select>
            </div>
          </div>

          {/* Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { label: t('dieselVsBess.calc.summary.dgAnnual'),  val: fmt(r.dgAnn),  col: '#f87171' },
              { label: t('dieselVsBess.calc.summary.bessAnnual'), val: fmt(r.besAnn), col: '#34d399' },
              { label: t('dieselVsBess.calc.summary.payback'),   val: paybackStr,    col: '#fbbf24' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '22px 24px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: s.col, marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: s.col, letterSpacing: -1, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{i === 2 ? t('dieselVsBess.calc.summary.bessVsDg') : t('dieselVsBess.calc.summary.perYear')}</div>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{t('dieselVsBess.calc.breakdown.title')}</span>
            <div style={{ display: 'flex' }}>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 11, fontWeight: 700, color: '#f87171', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{t('dieselVsBess.calc.breakdown.dg')}</span>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 11, fontWeight: 700, color: '#34d399', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{t('dieselVsBess.calc.breakdown.bess')}</span>
            </div>
          </div>
          {[
            { label: t('dieselVsBess.calc.rows.capital'),     dg: r.dgCap,    be: r.besCap   },
            { label: t('dieselVsBess.calc.rows.fuelElec'),    dg: r.dgFuelT,  be: r.besElecT },
            { label: t('dieselVsBess.calc.rows.maintenance'), dg: r.dgMaintT, be: r.besMaintT },
            { label: t('dieselVsBess.calc.rows.compliance'),  dg: r.dgMiscT,  be: r.besMiscT },
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
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{t('dieselVsBess.calc.rows.batteryRep')}</span>
            <div style={{ display: 'flex' }}>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.3)' }}>—</span>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 14, fontWeight: 600, color: '#34d399' }}>{tcoYears >= 10 ? fmt(r.besRep) : '—'}</span>
            </div>
          </div>
          <div style={{ padding: '16px 24px', background: 'rgba(255,255,255,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{t('dieselVsBess.calc.rows.tco')}</span>
            <div style={{ display: 'flex' }}>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 16, fontWeight: 800, color: '#f87171' }}>{fmt(r.dgTCO)}</span>
              <span style={{ minWidth: 110, textAlign: 'right', fontSize: 16, fontWeight: 800, color: '#34d399' }}>{fmt(r.besTCO)}</span>
            </div>
          </div>

          {/* Banner */}
          <div style={{ background: bannerGrad, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: 2 }}>{savingPositive ? t('dieselVsBess.calc.banner.savings') : t('dieselVsBess.calc.banner.dgCheaper')}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{t('dieselVsBess.calc.banner.overPeriod', { years: tcoYears })}</div>
            </div>
            <div style={{ fontSize: 30, fontWeight: 900, color: '#fff', letterSpacing: -1 }}>{fmt(Math.abs(r.saving))}</div>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '6px 16px', fontSize: 13, fontWeight: 700, color: '#fff' }}>{t('dieselVsBess.calc.banner.paybackLabel')}: {paybackStr}</div>
          </div>

          {/* Bars */}
          <div style={{ padding: '22px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{t('dieselVsBess.calc.visual.title')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Bar label={t('dieselVsBess.calc.visual.dgTotal')}    value={r.dgTCO}      max={r.dgTCO} gradient="linear-gradient(90deg,#ef4444,#dc2626)" />
              <Bar label={t('dieselVsBess.calc.visual.bessTotal')}  value={r.besTCO}     max={r.dgTCO} gradient="linear-gradient(90deg,#10b981,#059669)" />
              <Bar label={t('dieselVsBess.calc.visual.dgFuel')}     value={r.dgFuelT}    max={r.dgTCO} gradient="linear-gradient(90deg,#f97316,#ea580c)" />
              <Bar label={t('dieselVsBess.calc.visual.bessElec')}   value={r.besElecT}   max={r.dgTCO} gradient="linear-gradient(90deg,#3b82f6,#2563eb)" />
            </div>
          </div>

          {/* Verdict */}
          <div style={{ padding: '18px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>{t('dieselVsBess.calc.result')}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: verdictHtml }} />
          </div>
        </div>

        {/* ── HIDDEN COSTS ── */}
        <h2 style={h2}>{t('dieselVsBess.hiddenSection.title')}</h2>
        <p style={p}>{t('dieselVsBess.hiddenSection.p1')}</p>
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
        <h2 style={h2}>{t('dieselVsBess.matrixSection.title')}</h2>
        <p style={p}>{t('dieselVsBess.matrixSection.p1')}</p>
        <div style={{ overflowX: 'auto', margin: '28px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr>
                {MATRIX_HEADERS.map(h => (
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
            {t('dieselVsBess.quote.text')}
          </p>
          <cite style={{ display: 'block', fontSize: 13, fontStyle: 'normal', color: '#6b7280', marginTop: 8, fontWeight: 500 }}>{t('dieselVsBess.quote.author')}</cite>
        </blockquote>

        {/* ── SOLAR + BESS ── */}
        <h2 style={h2}>{t('dieselVsBess.solarSection.title')}</h2>
        <p style={p}>{t('dieselVsBess.solarSection.p1')}</p>
        <p style={p}>{t('dieselVsBess.solarSection.p2')}</p>
        <Callout type="green" label={t('dieselVsBess.solarCallout.label')} title={t('dieselVsBess.solarCallout.title')} items={SOLAR_ITEMS} />

        {/* ── CHECKLIST ── */}
        <h2 style={h2}>{t('dieselVsBess.checklistSection.title')}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '20px 0' }}>
          {CHECKS.map(item => (
            <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, fontSize: 14, color: '#374151', lineHeight: 1.55 }}>
              <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* ── PROCUREMENT ── */}
        <h2 style={h2}>{t('dieselVsBess.procurementSection.title')}</h2>
        <p style={p}>{t('dieselVsBess.procurementSection.p1')}</p>
        <Callout type="amber" label={t('dieselVsBess.procurementCallout.label')} title={t('dieselVsBess.procurementCallout.title')} items={PROC_ITEMS} />

        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '48px 0' }} />

        {/* ── KEY TAKEAWAYS ── */}
        <h2 style={h2}>{t('dieselVsBess.takeawaysTitle')}</h2>
        {TAKEAWAYS.map(item => (
          <p key={item.bold} style={p}><strong>{item.bold}</strong> {item.rest}</p>
        ))}

        {/* ── CTA ── */}
        <div style={{ background: S.dark, borderRadius: 16, padding: '52px 44px', textAlign: 'center', margin: '56px 0 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: '#fff', margin: '0 0 12px', letterSpacing: -0.5 }}>{t('dieselVsBess.finalCta.title')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, margin: '0 auto 28px', maxWidth: 480 }}>{t('dieselVsBess.finalCta.desc')}</p>
            <a href="https://www.headsupb2b.com" style={{ display: 'inline-block', background: '#10b981', color: '#fff', padding: '14px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
              {t('dieselVsBess.finalCta.button')}
            </a>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 14 }}>{t('dieselVsBess.finalCta.footer')}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
