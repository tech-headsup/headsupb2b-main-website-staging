import Image from 'next/image'
import React from 'react'
import DefaultImage from '@/assets/images/category/default.png'
import CustomRipple from '@/component/Form/Button/CustomRipple'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { hi as hiLocale } from 'date-fns/locale'
import { useTranslation } from 'react-i18next'
import { useDynamicTranslate } from '@/lib/useDynamicTranslate'

export default function BlogItem({ ele }) {
  const { t, i18n } = useTranslation()
  const dt = useDynamicTranslate()
  const imageUrl = ele?.node?.coverImage?.url || DefaultImage
  const rawTitle = ele?.node?.title || t('blogPage.noTitle')
  const title = dt(rawTitle, 'blogTitles')
  const dateString = ele?.node?.publishedAt || new Date().toISOString()
  const date = parseISO(dateString)
  const isHindi = i18n.language?.startsWith('hi')
  const dateLocale = isHindi ? { locale: hiLocale } : undefined
  const dateFormatStr = isHindi ? 'LLLL d, yyyy' : 'LLL d, yyyy'

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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 328px"
            quality={65}
            loading="lazy"
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
              text={t('blogPage.readMore')}
              className="ripple cursor-pointer text-[14px] px-5 py-2.5"
            />
            <time
              className="text-sm text-[#666]"
              dateTime={dateString}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {format(date, dateFormatStr, dateLocale)}
            </time>
          </div>
        </div>

      </div>
    </Link>
  )
}
