import Image from 'next/image'
import React from 'react'
import DefaultImage from '@/assets/images/category/default.png'
import CustomRipple from '@/component/Form/Button/CustomRipple'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

export default function BlogItem({ ele }) {
  const imageUrl = ele?.node?.coverImage?.url || DefaultImage
  const title = ele?.node?.title || 'No Title'
  const dateString = ele?.node?.publishedAt || new Date().toISOString()
  const date = parseISO(dateString)

  return (
    <Link href={"/blog/" + ele?.node?.slug}>
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col gap-3 cursor-pointer transaction-delay h-full">

        <div className="w-full px-3 pt-3">
          <Image
            src={imageUrl}
            width={328}
            height={160}
            alt={title}
            className="w-full object-cover rounded-xl"
            style={{ minHeight: '160px', maxHeight: '160px' }}
            unoptimized={true}
          />
        </div>

        <div className="flex flex-col px-6 pb-4 flex-1">
          <div className="min-h-[60px]">
            <p
              className="font-bold text-[17px] text-[#111] leading-snug"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {title}
            </p>
          </div>

          {/* Button on left, date on right — pinned to bottom */}
          <div className="flex items-center justify-between mt-auto pt-2">
            <CustomRipple
              text="Read more"
              className="ripple cursor-pointer text-[14px] px-5 py-2.5"
            />
            <time
              className="text-sm text-[#666]"
              dateTime={dateString}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {format(date, 'LLL d, yyyy')}
            </time>
          </div>
        </div>

      </div>
    </Link>
  )
}
