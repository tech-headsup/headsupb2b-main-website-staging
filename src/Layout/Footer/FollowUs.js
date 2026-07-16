import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function FollowUs() {

  const fields = [
    { _id: 0, label: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/company/headsupb2b/', active: true },
    { _id: 1, label: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/headsupb2b/', active: true },
    { _id: 2, label: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/headsupb2b/', active: true },
    { _id: 3, label: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/+918595736388', active: true },
    { _id: 4, label: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@HeadsupB2B', active: true },
  ]

  return (
    <div className='flex flex-col justify-center'>
      <h2 className="mb-1 text-xl font-semibold text-white l:text-left mm:text-center 4k:text-4xl 4k:pb-2">Follow Us</h2>
      <ul className="mt-2 font-medium text-white flex ms:justify-evenly t:justify-center l:justify-start mm:space-x-12 t:space-x-2 l:space-x-1 ll:space-x-2 4k:space-x-4 ">
        {fields?.map((ele) => (
          <Link
            key={ele._id}
            href={ele?.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Follow Headsup B2B on ${ele.label} (opens in new tab)`}
          >
            <li
              className='font-normal text-xl bg-FooterIconColor ms:p-1 ms:text-xl l:text-md ll:p-2 4k:text-5xl rounded-md delay hover:-translate-y-1 hover:bg-white hover:text-headupb2b'
              aria-hidden='true'
            >
              {ele?.icon}
            </li>
          </Link>
        ))}
      </ul>
      {/* <div>
        <div className='mt-4'><label className='text-xl font-semibold tracking-wide 4k:text-4xl'> Contact Us </label></div>
        <div className='my-2 flex flex-col'>
          

          <Link href={`tel:+91 72101 99772`} class="w-fit font-normal text-xs leading-5 cursor-pointer relative group 4k:text-2xl">Rizwan - +91 72101 99772<span class="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          <Link href={`tel:+91 93133 06060`} class="w-fit font-normal text-xs leading-5 cursor-pointer relative group 4k:text-2xl">Rishabh - +91 93133 06060<span class="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          <Link href="mailto:info@headsupb2b.com" className="w-fit font-normal text-xs leading-5 cursor-pointer relative group 4k:text-2xl">
            info@headsupb2b.com
            <span className="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>
      </div> */}
    </div>
  )
}
