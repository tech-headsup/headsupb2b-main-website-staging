import React from 'react'
import Image from 'next/image'
import CustomRipple from '../Form/Button/CustomRipple'
import Link from 'next/link'
import { categoryTagline } from '@/Contants/tagLine'

export default function ProductCard({ ele, index = 0 }) {
  const GetSubJHead = () => {
    return <span>{categoryTagline?.[ele?.name]}</span>
  }

  const isAboveTheFold = index < 4;

  return (
    <Link href={ele?.slug} prefetch={true}>
      {/*
        Outer wrapper:
        - bg-white         → matches WWSCard
        - rounded-2xl      → matches WWSCard (border+rounded live on MainCategory wrapper too, overflow-hidden clips the image)
        - overflow-hidden  → clips the top image to the card's rounded corners
        - flex flex-col    → stacks image then content
        - gap-3            → matches WWSCard gap
      */}
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col gap-3 cursor-pointer transaction-delay l:min-h-[305px] ll:min-h-[310px] 4k:min-h-[450px]">

        {/* Image — slight padding + rounded so it sits inset from the card border */}
        <div className="w-full px-3 pt-3">
          <Image
            src={ele?.image?.url}
            width={328}
            height={160}
            alt={ele?.name}
            priority={isAboveTheFold}
            loading={isAboveTheFold ? "eager" : "lazy"}
            sizes="(max-width: 767px) 92vw, (max-width: 1023px) 46vw, (max-width: 1279px) 31vw, 328px"
            quality={65}
            className="w-full object-cover rounded-xl"
            style={{
              width: '100%',
              minHeight: '160px',
              maxHeight: '160px',
            }}
          />
        </div>

        {/* Content — tightened bottom padding */}
        <div className="flex flex-col px-6 pb-4 flex-1">
          {/* Fixed-height text block ensures button lines up across all cards */}
          <div className="min-h-[80px]">
            <p
              className="font-bold text-[17px] text-[#111] leading-snug ms:text-center l:text-left"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {ele?.name}
            </p>
            <p
              className="text-sm text-[#666] leading-relaxed mt-1 ms:text-center l:text-left"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <GetSubJHead />
            </p>
          </div>
          <div className="ms:flex ms:justify-center l:justify-start l:flex">
            <CustomRipple
              text="View All"
              className="ripple cursor-pointer text-[14px] px-5 py-2.5"
            />
          </div>
        </div>

      </div>
    </Link>
  )
}
