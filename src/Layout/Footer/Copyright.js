import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Copyright() {
  const { t } = useTranslation();
  return (
    <div className='my-4'><label className='text-xs font-normal text-slate-50/70'> {t('footer.copyright')} </label></div>
  )
}
