import Banner from '@/component/Hero/Banner'
import React from 'react'
import { useTranslation } from 'react-i18next'
import BannerImg from '@/assets/images/about1.jpg'
import { GradientText } from '@/Contants/constant'
import { NextSeo } from 'next-seo'

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
          <h1 className={`${GradientText} inline-block text-transparent bg-clip-text font-bold text-3xl 4k:text-6xl`}>{t('about.heading')}</h1>
        </label>
        <div className='py-6 ms:text-justify t:text-center 4k:text-3xl'>
          {t('about.body')}
        </div>
      </div>
    </div >
  )
}
