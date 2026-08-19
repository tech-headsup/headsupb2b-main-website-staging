import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const HIGHLIGHT_STYLE = { fontWeight: 700, color: '#80EBF7' }

export default function Company() {
  const { t } = useTranslation();
  const { pathname } = useRouter();

  const fields = [
    { _id: 0, key: 'footer.aboutUs', url: '/about', active: true },
    { _id: 1, key: 'footer.blogs', url: '/blog', active: true },
    { _id: 2, key: 'footer.careers', url: '/careers', active: true },
    { _id: 3, key: 'footer.contactUs', url: '/contact', active: true },
    { _id: 4, key: 'footer.raisedFunds', url: '/we-have-raised-funds', active: true },
    { _id: 5, key: 'footer.research', url: '/research', active: true },
  ]

  const isActive = (url) => pathname === url || pathname.startsWith(`${url}/`)

  return (
    <>
      <div className='mb-3'>
        <div className='mb-2'><label className='text-xl font-bold tracking-wide 4k:text-4xl'> {t('footer.company')} </label></div>
        <ul>
          {fields?.map((ele) => <li key={ele?.url}>
            <Link href={ele?.url}>
              <label className=" font-normal text-xs leading-5 cursor-pointer relative inline-block group 4k:text-2xl" style={isActive(ele.url) ? HIGHLIGHT_STYLE : {}}>{t(ele.key)} <span className="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span></label>
            </Link>
          </li>)}
        </ul>
      </div>

    </>
  )
}
