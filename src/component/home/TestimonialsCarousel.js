import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import doubleQuoteSVG from "@/assets/images/svg/doubleQoutes.svg";

import drs from "@/assets/images/testimonials/DRS Refrigeration Private Limited.webp";
import greencone from "@/assets/images/testimonials/Greencone Environs Pvt Ltd .webp";
import kelly from "@/assets/images/testimonials/Kelley Material Handling Equipment India Private limited.webp";
import nestle from "@/assets/images/testimonials/Nestle India Limited .webp";
import nestlecctv from "@/assets/images/testimonials/Nestle India ltd-cctv.webp";
import uvr from "@/assets/images/testimonials/UVR Natural foods pvt.LTD .webp";
import leftArrow from '@/assets/images/svg/Left Arrow.svg';
import rightArrow from '@/assets/images/svg/right arrow.svg';

const TESTIMONIALS = [
  { quote: "It has been a great experience working with the Headsup B2B team. Their coordination, timely support, and product quality met our expectations for the rolling shutter requirement.", body: "The overall process-from discussion to delivery-was smooth and professional.", author: "- Rajandra Pandey, Director, DRS Refrigeration Private Limited", image: drs?.src },
  { quote: "The Headsup B2B team has been highly collaborative, understanding, and supportive throughout the engagement.", body: "Their proactive coordination and responsiveness played a key role in ensuring timely completion of the CCTV project.", author: "- Aryan Bhat, Cluster Manager, North Supply Chain Nestle India ltd", image: nestlecctv?.src },
  { quote: "It has been a pleasure working with the energetic and dynamic Headsup B2B team. Their professionalism and responsiveness during the high-speed door engagement have been commendable, and we look forward to exploring additional services together.", body: "I would be happy to recommend them within my professional network.", author: "- EPC Director, Greenfield Projects", image: greencone?.src },
  { quote: "The team is highly proactive, responsive, and always available to support customer requirements.", body: "Their eagerness to collaborate and commitment to timely assistance made the raw material procurement process smooth and reliable.", author: "- Ashwani Kumar, Manager - Purchase & SCM, Kelley Material Handling Equipment India Private limited", image: kelly?.src },
  { quote: "An excellent experience working with the Headsup B2B team.", body: "Their technical understanding and prompt coordination ensured smooth execution of the PUF panel requirement.", author: "- Keshav dev, GM technical, UVR Natural foods pvt.LTD", image: uvr?.src },
  { quote: "Overall, a very good experience. The team maintained disciplined delivery timelines throughout the engagement.", body: "They provided proactive support for electrical items and civil works across our DC projects.", author: "- Lovish Bali, Procurement Manager, Nestle India Limited", image: nestle?.src },
];

export default function TestimonialsCarousel() {
  const swiperRef = React.useRef(null);
  return (
    // <div className="bg-white pt-12 md:pt-16 pb-6 md:pb-8">
     <div className="bg-white pt-20 pb-12 md:pb-16">
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center text-[#111] mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Testimonials
      </h2>
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(s) => { swiperRef.current = s; }}
          slidesPerView={1}
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row h-[520px] md:h-[420px] rounded-2xl overflow-hidden">
                <div className="w-full md:w-[35%] flex-shrink-0 overflow-hidden h-[220px] md:h-full">
                  <img src={t.image} alt="testimonial" className="w-full h-full object-cover" style={{ filter: "saturate(1.1)" }} />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-3 px-6 py-6 md:px-14 md:py-10 overflow-hidden" style={{ background: "#4A3772" }}>
                  <span className="text-6xl leading-none mb-[-8px]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Georgia, serif" }}>
                    <img src={doubleQuoteSVG?.src} alt="quote" />
                  </span>
                  <p className="text-xl md:text-2xl font-bold text-white leading-snug" style={{ fontFamily: "'Manrope', sans-serif" }}>{t.quote}</p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif" }}>{t.body}</p>
                  <p className="text-sm font-semibold" style={{ color: "#00d4f5", fontFamily: "'DM Sans', sans-serif" }}>{t.author}</p>
                  <div className="flex gap-3 mt-2">
                    <button onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous" className="w-24 h-10 rounded-3xl flex items-center justify-center text-white text-5xl cursor-pointer transition-all duration-200 hover:bg-white/15" style={{ background: "#5E3F99" }}>
                      <img src={leftArrow?.src}>
                    </img></button>
                    <button onClick={() => swiperRef.current?.slideNext()} aria-label="Next" className="w-24 h-10 rounded-full flex items-center justify-center text-4xl cursor-pointer transition-all duration-200" style={{ background: "#fff", color: "#6B3FA0" }}><img src={rightArrow?.src}></img></button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
}