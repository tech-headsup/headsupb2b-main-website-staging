import React from 'react'
import TeamImage from '../assets/funds/team.png'
import FounderImage from '../assets/funds/founder.jpg'
import SumitFounderHeadsup from '../assets/funds/SumitFounderHeadsup.jpg'
import Image from 'next/image'
import DownloadableImageWithHoverIcon from '@/component/DownloadableImageWithHoverIcon'

export default function WeHaveRaisedFunds() {
    return (
        <div className='max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 pt-8 md:pt-10 lg:pt-12 ll:pt-16 pb-10 md:pb-12 lg:pb-16'>
            <div>
                <h1 className='text-black text-center font-bold py-4 text-2xl md:text-3xl lg:text-4xl ll:text-5xl leading-tight md:leading-snug'>
                    Headsup B2B Secures Rs. 16.65 Crore Debt Capital to Accelerate Growth and Innovation.
                </h1>
                <p className='text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-justify mt-4'>
                    Headsup B2B, a fast-growing, AI-powered B2B procurement and financing platform for the infrastructure and green energy sectors, announced the closure of Rs. 16.65 crore in debt capital from its banking partners. This funding is crucial for supporting the company's ambitious growth trajectory, which targets a Rs. 250 crore revenue milestone in FY25-26 while bolstering profitability, with Rs. 5 crore specifically earmarked to reinforce its market leadership in infrastructure and green energy. Founded in 2022 and having already achieved Rs. 200 crore in lifetime revenue, the company is now preparing to expand its portfolio into the Rapid Commerce segment for home improvement, starting in Delhi NCR, and is in advanced discussions to raise an additional Rs. 14 crore in Q3 FY25-26.
                </p>
            </div>
            <div className='flex mt-8 md:mt-10 flex-col md:flex-row justify-center'>
                <div className='w-full flex justify-center'>
                    <Image src={SumitFounderHeadsup} alt="Sumit Founder Headsup" height={600} className='max-w-full h-auto' />
                </div>
            </div>
            <div className='mt-8 md:mt-10 max-w-4xl mx-auto'>
                <iframe
                    src="https://firebasestorage.googleapis.com/v0/b/tyt-doc-upload.appspot.com/o/headsupCorporation-Vishal%2Fbusiness-standard-content-press-releases-ani-headsup-b2b-secures-rs-16-65-crore-debt-capital-to-accelerate-growth-and-innovation_.pdf?alt=media&token=fc7f04e2-073a-476c-8e07-181c82ee7f77"
                    className='w-full h-[400px] md:h-[500px] lg:h-[600px]'
                    style={{ border: 'none' }}
                ></iframe>
            </div>
            <div className='mt-10 md:mt-12'>
                <h1 className='text-black text-center font-bold py-4 text-2xl md:text-3xl lg:text-4xl ll:text-5xl leading-tight md:leading-snug'>
                    Digital marketplace Headsup B2B has raised INR 18.89 CR in investments led by Harendra Singh Family Office.
                </h1>
                <p className='text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-justify mt-4'>
                    Headsup B2B, a bootstrapped venture with over INR 100 crores in lifetime revenue,
                    has raised this funding to fuel its growth. Raised funds will be deployed in
                    team development with a focus on 100+ senior and mid level hirings across India,
                    improving the tech-enabled full stack platform in B2B space which will cater
                    from discovery to fulfillment and financing in the near future, exploring new vertical
                    commerce avenues, and expanding cross-border business.
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
                    src="https://firebasestorage.googleapis.com/v0/b/headsupb2b-6b244.appspot.com/o/fund-raised.pdf?alt=media"
                    className='w-full h-[400px] md:h-[500px] lg:h-[600px]'
                    style={{ border: 'none' }}
                ></iframe>
            </div>
        </div>
    )
}
