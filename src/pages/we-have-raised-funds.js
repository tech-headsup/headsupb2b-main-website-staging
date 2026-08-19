import React from 'react'
import TeamImage from '../assets/funds/team.png'
import FounderImage from '../assets/funds/founder.jpg'
import SumitFounderHeadsup from '../assets/funds/SumitFounderHeadsup.jpg'
import Image from 'next/image'
import DownloadableImageWithHoverIcon from '@/component/DownloadableImageWithHoverIcon'
import { useTranslation } from 'react-i18next'
import { NextSeo } from 'next-seo'

export default function WeHaveRaisedFunds() {
    const { t } = useTranslation()

    return (
        <div className='max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 pt-8 md:pt-10 lg:pt-12 ll:pt-16 pb-10 md:pb-12 lg:pb-16'>
            <NextSeo canonical="https://www.headsupb2b.com/we-have-raised-funds" />
            <div>
                <h1 className='text-black text-center font-bold py-4 text-2xl md:text-3xl lg:text-4xl ll:text-5xl leading-tight md:leading-snug'>
                    {t('raisedFundsPage.heading1')}
                </h1>
                <p className='text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-justify mt-4'>
                    {t('raisedFundsPage.para1')}
                </p>
            </div>
            <div className='flex mt-8 md:mt-10 flex-col md:flex-row justify-center'>
                <div className='w-full flex justify-center'>
                    <Image src={SumitFounderHeadsup} alt={t('raisedFundsPage.founderImageAlt')} height={600} className='max-w-full h-auto' />
                </div>
            </div>
            <div className='mt-8 md:mt-10 max-w-4xl mx-auto'>
                <iframe
                    src="/funds/debt-capital-1665-crore.pdf"
                    className='w-full h-[400px] md:h-[500px] lg:h-[600px]'
                    style={{ border: 'none' }}
                ></iframe>
            </div>
            <div className='mt-10 md:mt-12'>
                <h1 className='text-black text-center font-bold py-4 text-2xl md:text-3xl lg:text-4xl ll:text-5xl leading-tight md:leading-snug'>
                    {t('raisedFundsPage.heading2')}
                </h1>
                <p className='text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-justify mt-4'>
                    {t('raisedFundsPage.para2')}
                </p>
            </div>
            <div className='flex mt-8 md:mt-10 flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center'>
                <div className='w-full md:w-1/2'>
                    <DownloadableImageWithHoverIcon imageURL={FounderImage} height={600} />
                </div>
                <div className='w-full md:w-1/2'>
                    <DownloadableImageWithHoverIcon imageURL={TeamImage} height={600} />
                </div>
            </div>
            <div className='mt-8 md:mt-10 max-w-4xl mx-auto'>
                <iframe
                    src="/funds/fund-raised.pdf"
                    className='w-full h-[400px] md:h-[500px] lg:h-[600px]'
                    style={{ border: 'none' }}
                ></iframe>
            </div>
        </div>
    )
}
