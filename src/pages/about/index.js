"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'react-i18next'
import HeroBg from '@/assets/images/Home-Banner-image-8.webp'

/* ─────────────────────────────────────────────
   PREVIOUS ABOUT PAGE — kept for reference.
   Replaced on 10 Sep 2026 by the sectioned design below.

import Banner from '@/component/Hero/Banner'
import BannerImg from '@/assets/images/about1.jpg'
import { GradientText } from '@/Contants/constant'

export default function index() {
  const { t } = useTranslation()
  const dynamicCanonicalUrl = `https://www.headsupb2b.com/about`

  return (
    <div className='ms:mt-12 t:mt-0'>
      <NextSeo
        title={t('about.metaTitle')}
        description={t('about.metaDescription')}
        canonical={dynamicCanonicalUrl}
      />
      <div>
        <Banner
          imgUrl={BannerImg}
          height={400}
          title={t('about.bannerTitle')}
          description={t('about.bannerDescription')}
        />
      </div>
      <div className='ms:mx-6 ms:pb-10 t:mx-20 t:pb-10 l:mx-20 l:pb-10 ll:mx-28 imac:px-44 4k:px-56'>
        <label className="flex justify-center mt-8">
          <h1
            className={`${GradientText} inline-block text-transparent bg-clip-text font-bold leading-tight text-2xl ms:text-2xl mm:text-3xl ml:text-[32px] t:text-[36px] l:text-[42px]`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >{t('about.heading')}</h1>
        </label>
        <div className='py-6 ms:text-justify t:text-center 4k:text-3xl'>
          {t('about.body')}
        </div>
      </div>
    </div >
  )
}
───────────────────────────────────────────── */

/* Design tokens from the About Us layout.
   The layout used Syne for headings; the site runs on Montserrat throughout
   (see _app.js), so headings keep only the weight the design called for. */
const HEADING = { fontWeight: 800 }
const HEADING_MED = { fontWeight: 700 }
const YELLOW = '#FFCA1F'
const PURPLE = '#5E3F99'
const DEEP = '#4A3772'
const INK = '#1A1A2E'

/* Section shell — the shared horizontal rhythm every band uses */
const SECTION = 'px-5 t:px-10 l:px-[72px]'
const INNER = 'max-w-[1180px] mx-auto'

/* Small eyebrow label above a heading */
function Kicker({ children, color = PURPLE, rule = false }) {
  return (
    <div className={rule ? 'flex items-center gap-3' : ''}>
      {rule && <span className="block w-9 h-[3px]" style={{ background: color }} />}
      <span
        className="text-[12px] font-bold uppercase"
        style={{ letterSpacing: '0.18em', color }}
      >
        {children}
      </span>
    </div>
  )
}

/* Only render arrays — t(..., {returnObjects:true}) returns the key string when
   a bucket is missing, which would otherwise crash .map() */
const arr = (v) => (Array.isArray(v) ? v : [])

export default function AboutPage() {
  const { t } = useTranslation()
  const canonical = 'https://www.headsupb2b.com/about'

  const founderParas = arr(t('aboutPage.founder.paras', { returnObjects: true }))
  const waves = arr(t('aboutPage.problem.waves', { returnObjects: true }))
  const promisePoints = arr(t('aboutPage.promise.points', { returnObjects: true }))
  const milestones = arr(t('aboutPage.journey.milestones', { returnObjects: true }))

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-[#111827]">
      <NextSeo
        title={t('about.metaTitle')}
        description={t('about.metaDescription')}
        canonical={canonical}
        openGraph={{
          type: 'website',
          url: canonical,
          title: t('about.metaTitle'),
          description: t('about.metaDescription'),
          site_name: 'Headsup B2B',
        }}
      />

      {/* ── BANNER ── */}
      <section
        className={`relative overflow-hidden py-16 t:py-24 l:py-[132px] ${SECTION}`}
        style={{ backgroundColor: '#3A2B5C' }}
      >
        <Image
          src={HeroBg}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(42,31,69,0.94) 0%, rgba(58,43,92,0.86) 55%, rgba(58,43,92,0.55) 100%)',
          }}
        />
        <div className={`relative ${INNER}`}>
          <h1
            className="text-white m-0 text-[34px] t:text-[52px] l:text-[68px] leading-[1.04] max-w-[15ch]"
            style={HEADING}
          >
            {t('aboutPage.hero.title')}
          </h1>
          <p className="mt-[22px] mb-0 text-[16px] t:text-[19px] l:text-[22px] max-w-[34ch]" style={{ color: '#EDE7FA' }}>
            {t('aboutPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section className={`py-14 t:py-20 l:py-[110px] bg-white ${SECTION}`}>
        <div className={`${INNER} grid grid-cols-1 l:grid-cols-2 gap-8 t:gap-12 l:gap-[72px] items-start`}>
          <div>
            <Kicker>{t('aboutPage.about.kicker')}</Kicker>
            <h2
              className="mt-3.5 mb-0 text-[28px] t:text-[36px] l:text-[44px] leading-[1.12]"
              style={{ ...HEADING, color: INK }}
            >
              {t('aboutPage.about.heading')}
            </h2>
            <p className="mt-5 mb-0 text-[17px] leading-[1.7] text-[#4B5563]">
              {t('aboutPage.about.lead')}
            </p>
          </div>
          <div className="flex flex-col gap-[22px]">
            <p className="m-0 text-[17px] leading-[1.75] text-[#374151]">{t('aboutPage.about.p1')}</p>
            <p className="m-0 text-[17px] leading-[1.75] text-[#374151]">{t('aboutPage.about.p2')}</p>
            <div className="py-1 pl-5 border-l-[3px]" style={{ borderColor: YELLOW }}>
              <p
                className="m-0 text-[19px] t:text-[22px] l:text-[25px] leading-[1.35]"
                style={{ ...HEADING_MED, color: DEEP }}
              >
                {t('aboutPage.about.pullquote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section
        className={`py-14 t:py-20 l:py-[110px] ${SECTION}`}
        style={{ background: '#FDFAF6', borderTop: '1px solid #F0EAF7', borderBottom: '1px solid #F0EAF7' }}
      >
        <div className={INNER}>
          <div className="mb-[34px]">
            <Kicker rule>{t('aboutPage.founder.kicker')}</Kicker>
          </div>

          <div
            className="grid grid-cols-1 l:grid-cols-2 gap-7 t:gap-10 l:gap-16 items-center pb-8 l:pb-12"
            style={{ borderBottom: '1px solid #EDE4F2' }}
          >
            <p
              className="m-0 text-[22px] t:text-[29px] l:text-[36px] leading-[1.3]"
              style={{ ...HEADING_MED, color: DEEP }}
            >
              {t('aboutPage.founder.quote')}
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <div
                className="relative shrink-0 rounded-full overflow-hidden bg-[#EDE7FA] border-[3px] border-white w-[180px] h-[180px] t:w-[240px] t:h-[240px] l:w-[300px] l:h-[300px]"
                style={{ boxShadow: '0 6px 24px rgba(74,55,114,0.18)' }}
              >
                <Image
                  src="/news-image/sumit-founder-square.webp"
                  alt={t('aboutPage.founder.portraitAlt')}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="border-l-[3px] pl-[18px]" style={{ borderColor: YELLOW }}>
                <p className="m-0 text-[20px] t:text-[23px] l:text-[26px]" style={{ ...HEADING_MED, color: INK }}>
                  {t('aboutPage.founder.name')}
                </p>
                <p className="mt-[7px] mb-0 text-[14px] font-medium text-[#6B7280]" style={{ letterSpacing: '0.04em' }}>
                  {t('aboutPage.founder.role')}
                  <br />
                  {t('aboutPage.founder.company')}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 l:mt-12 t:columns-2 gap-8 l:gap-16">
            {founderParas.map((para, i) => (
              <p key={i} className="mt-0 mb-5 text-[17px] leading-[1.75] text-[#374151] break-inside-avoid">
                {para}
              </p>
            ))}
          </div>

          <p className="mt-5 l:mt-8 mb-0 text-[20px] t:text-[24px] l:text-[28px]" style={{ ...HEADING, color: INK }}>
            {t('aboutPage.founder.closing')}
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM WE SOLVE ── */}
      <section className={`py-14 t:py-20 l:py-[110px] ${SECTION}`} style={{ background: INK }}>
        <div className={INNER}>
          <div className="grid grid-cols-1 l:grid-cols-2 gap-6 t:gap-10 l:gap-16 items-end mb-9 l:mb-[60px]">
            <div>
              <Kicker color={YELLOW}>{t('aboutPage.problem.kicker')}</Kicker>
              <h2
                className="mt-3.5 mb-0 text-[28px] t:text-[36px] l:text-[44px] leading-[1.12] text-white"
                style={HEADING}
              >
                {t('aboutPage.problem.heading')}
              </h2>
            </div>
            <p className="m-0 text-[17px] leading-[1.75]" style={{ color: '#C9C2DE' }}>
              {t('aboutPage.problem.lead')}
            </p>
          </div>

          <div className="grid grid-cols-1 mm:grid-cols-2 l:grid-cols-4 gap-[18px]">
            {waves.map((w, i) => {
              const isLast = i === waves.length - 1
              return (
                <div
                  key={i}
                  className="rounded-[14px] p-7"
                  style={{
                    background: isLast ? YELLOW : '#23213C',
                    border: `1px solid ${isLast ? YELLOW : '#33305A'}`,
                  }}
                >
                  <p className="m-0 text-[15px]" style={{ ...HEADING_MED, color: isLast ? '#7A5A00' : '#8E86B8' }}>
                    {w.label}
                  </p>
                  <p className="mt-2.5 mb-0 text-[23px]" style={{ ...HEADING_MED, color: isLast ? INK : '#ffffff' }}>
                    {w.name}
                  </p>
                  <p
                    className="mt-3 mb-0 text-[15px] leading-[1.65]"
                    style={{ color: isLast ? '#3B3520' : '#B9B2D0', fontWeight: isLast ? 500 : 400 }}
                  >
                    {w.text}
                  </p>
                </div>
              )
            })}
          </div>

          <p
            className="mt-7 l:mt-11 mb-0 text-[20px] t:text-[24px] l:text-[28px] text-white max-w-[36ch]"
            style={HEADING_MED}
          >
            {t('aboutPage.problem.closing')}
          </p>
        </div>
      </section>

      {/* ── PROMISE ── */}
      <section className={`py-11 t:py-14 l:py-[72px] bg-headupb2b ${SECTION}`}>
        <div className={`${INNER} grid grid-cols-1 l:grid-cols-2 gap-6 t:gap-10 l:gap-14 items-center`}>
          <h2 className="m-0 text-[24px] t:text-[30px] l:text-[36px] leading-[1.2] text-white" style={HEADING}>
            {t('aboutPage.promise.headingLine1')}
            <br />
            {t('aboutPage.promise.headingLine2')}
          </h2>
          <div className="grid grid-cols-1 mm:grid-cols-3 gap-5">
            {promisePoints.map((point, i) => (
              <div key={i} className="pt-3.5 border-t-[3px]" style={{ borderColor: YELLOW }}>
                <p className="m-0 text-[20px] text-white" style={HEADING_MED}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY ── */}
      <section className={`py-14 t:py-20 l:py-[110px] bg-white ${SECTION}`}>
        <div className={INNER}>
          <Kicker>{t('aboutPage.journey.kicker')}</Kicker>
          <h2
            className="mt-3.5 mb-9 l:mb-14 text-[28px] t:text-[36px] l:text-[44px] leading-[1.12] max-w-[24ch]"
            style={{ ...HEADING, color: INK }}
          >
            {t('aboutPage.journey.heading')}
          </h2>
          <div className="grid grid-cols-1 mm:grid-cols-2 t:grid-cols-3 l:grid-cols-5">
            {milestones.map((m, i) => {
              const isLast = i === milestones.length - 1
              const dot = isLast ? YELLOW : PURPLE
              return (
                <div key={i} className="pt-6 pr-[22px] pb-[26px] border-t-2" style={{ borderColor: isLast ? YELLOW : '#EDE7FA' }}>
                  <div className="w-3 h-3 rounded-full mb-[22px] -mt-[31px]" style={{ background: dot }} />
                  <p className="m-0 text-[19px]" style={{ ...HEADING_MED, color: isLast ? '#C8900A' : PURPLE }}>
                    {m.year}
                  </p>
                  <p className="mt-2.5 mb-0 text-[15px] leading-[1.65] text-[#4B5563]">{m.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className={`py-14 t:py-20 l:py-[110px] ${SECTION}`} style={{ background: '#F4F1FA' }}>
        <div className={INNER}>
          <Kicker>{t('aboutPage.missionVision.kicker')}</Kicker>
          <div className="grid grid-cols-1 l:grid-cols-2 gap-6 mt-7 l:mt-11">
            <div className="rounded-2xl p-7 t:p-9 l:p-11 bg-white" style={{ border: '1px solid #E9E3F7' }}>
              <p className="m-0 text-[22px] t:text-[26px] l:text-[30px]" style={{ ...HEADING, color: INK }}>
                {t('aboutPage.missionVision.missionTitle')}
              </p>
              <span className="block w-11 h-[3px] my-[18px]" style={{ background: YELLOW }} />
              <p className="m-0 text-[17px] leading-[1.75] text-[#374151]">
                {t('aboutPage.missionVision.missionBody')}
              </p>
            </div>
            <div className="rounded-2xl p-7 t:p-9 l:p-11" style={{ background: DEEP, border: `1px solid ${DEEP}` }}>
              <p className="m-0 text-[22px] t:text-[26px] l:text-[30px] text-white" style={HEADING}>
                {t('aboutPage.missionVision.visionTitle')}
              </p>
              <span className="block w-11 h-[3px] my-[18px]" style={{ background: YELLOW }} />
              <p className="m-0 text-[17px] leading-[1.75]" style={{ color: '#EDE7FA' }}>
                {t('aboutPage.missionVision.visionBody')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`py-14 t:py-20 l:py-24 ${SECTION}`} style={{ background: INK }}>
        <div className={`${INNER} flex flex-wrap gap-6 l:gap-12 items-center justify-between`}>
          <h2
            className="m-0 text-[26px] t:text-[34px] l:text-[42px] leading-[1.15] text-white max-w-[22ch]"
            style={HEADING}
          >
            {t('aboutPage.cta.heading')}
          </h2>
          <div className="flex flex-wrap gap-3.5 items-center">
            <Link
              href="/contact"
              className="rounded-[9px] px-[30px] py-4 text-[16px] font-bold"
              style={{ background: YELLOW, color: INK }}
            >
              {t('aboutPage.cta.primary')}
            </Link>
            <a
              href="tel:+917210199772"
              className="rounded-[9px] px-7 py-[15px] text-[16px] font-semibold text-white"
              style={{ border: '1px solid #4A4470' }}
            >
              {t('aboutPage.cta.secondary')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
