import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Support() {
  const { t } = useTranslation();

  const fields = [
    { _id: 0, key: 'footer.privacyTerms', url: '/privacy-policy', active: true },
    { _id: 1, key: 'footer.generalEnquiry', url: '/contact', active: true },
    { _id: 2, key: 'footer.wantToSell', url: '/contact', active: true },
    { _id: 3, key: 'footer.wantToBuy', url: '/contact', active: true },
  ]
  const handleClick = (ele) => {
    // router.push({pathname:ele?.url})
    window.location.href = ele?.url

  }
  return (
    <div>
      <div className='mb-2'><label className='text-xl font-bold tracking-wide 4k:text-4xl'> {t('footer.support')} </label></div>
      <ul>
        {fields?.map((ele) =>
          <li key={ele?.key}>
            <Link href={ele?.url}>
              <label onClick={() => handleClick(ele)} class=" font-normal text-xs leading-5 cursor-pointer relative inline-block group 4k:text-2xl">{t(ele.key)}<span class="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span>
              </label>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
