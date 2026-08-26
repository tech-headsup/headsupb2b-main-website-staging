import Image from 'next/image'
import React from 'react'

export default function Banner({ imgUrl, title, description}) {
  return (
    <div className='ms:h-[300px] t:h-[400px] overylay-image flex items-center border' style={{ backgroundImage: `url(${imgUrl?.src})`, }}>
    <div className='text-center mm:p-4 ml:p-1 mm:px-4 l:px-48 w-full'>
    <h1
      className='text-white font-bold leading-tight text-2xl ms:text-2xl mm:text-3xl ml:text-[32px] t:text-[36px] l:text-[42px] py-2'
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >{title}</h1>
      <label
        className='text-white font-bold leading-tight text-2xl ms:text-2xl mm:text-3xl ml:text-[32px] t:text-[36px] l:text-[42px] text-center block'
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >{description}</label>
    </div>
  </div>
  )
}
