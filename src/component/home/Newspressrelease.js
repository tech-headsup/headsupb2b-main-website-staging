// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { Autoplay, Navigation } from "swiper/modules";
// import { Swiper } from "swiper/react";

// const NEWS_ITEMS = [
//   {
//     tag: "Press Release - 16 Jan 2026",
//     title: "Headsup B2B Secures Mandate for 40+ MW of Solar Panels and Ancillary Products Across Rajasthan and Jharkhand",
//     link: "https://www.business-standard.com/content/press-releases-ani/headsup-b2b-secures-mandate-for-40-mw-of-solar-panels-and-ancillary-products-across-rajasthan-and-jharkhand-126011600010_1.html",
//     image: "/news-image/bs.jpg",
//   },
//   {
//     tag: "Press Release - 26 Sep 2025",
//     title: "Headsup B2B Secures Rs. 16.65 Crore Debt Capital to Accelerate Growth and Innovation",
//     link: "https://www.business-standard.com/content/press-releases-ani/headsup-b2b-secures-rs-16-65-crore-debt-capital-to-accelerate-growth-and-innovation-125092600024_1.html",
//     image: "/news-image/bs-1.jpg",
//   },
//   {
//     tag: "Press Release - 09 May 2026",
//     title: "India’s Green Steel Push Faces Credibility Test As Emissions Rise Despite Net-Zero Pledges",
//     link: "https://www.businessworld.in/article/india-s-green-steel-push-faces-credibility-test-as-emissions-rise-despite-net-zero-pledges-606080",
//     image: "/news-image/bw.webp",
//   },
//   {
//     tag: "Press Release - 10 May 2026",
//     title: "The Pulse of Progress: Industry Voices on Technological Evolution",
//     link: "https://cxotoday.com/others/the-pulse-of-progress-industry-voices-on-technological-evolution/",
//     image: "/news-image/cxo.png",
//   },
//   {
//     tag: "Press Release - 11 May 2026",
//     title: "India’s Technology Day: From Shakti to Superintelligence—The Nation’s $1 Trillion Digital Bet",
//     link: "https://cisoforum.in/indias-technology-day-from-shakti-to-superintelligence-the-nations-1-trillion-digital-bet/",
//     image: "/news-image/ciso.webp",
//   },
//   {
//     tag: "Press Release - 11 May 2026",
//     title: "National Technology Day 2026: Industry Leaders Speak on Next Tech Boom and $1 Lakh Crore R&D Bet on Deep-Tech",
//     link: "https://www.analyticsinsight.net/tech-news/national-technology-day-2026-industry-leaders-speak-on-next-tech-boom-and-1-lakh-crore-rd-bet-on-deep-tech",
//     image: "/news-image/analyticsinsight.jpg",
//   },
//   {
//     tag: "Press Release - 11 May 2026",
//     title: "National Technology Day: Shaping India’s tech future responsibly",
//     link: "https://www.manufacturingtodayindia.com/national-technology-day-shaping-indias-tech-future-responsibly",
//     image: "/news-image/mt.jpg",
//   },
//   {
//     tag: "Press Release - 11 May 2026",
//     title: "Stock Market Highlights, Sensex Today: Sensex Falls 1,312 Points, Nifty Down 360 As Oil Prices Rally",
//     link: "https://www.ndtv.com/business-news/stock-market-sensex-share-market-nifty-live-updates-today-11-may-pm-modi-save-fuel-appeal-us-iran-war-oil-prices-11476840",
//     image: "/news-image/ndtv.webp",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://www.news18.com/agency-feeds/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-10101276.html",
//     image: "/news-image/news-18.jpg",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://www.dailyexcelsior.com/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder/",
//     image: "/news-image/daily-excelsior.jpg",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://economictimes.indiatimes.com/news/company/corporate-trends/headsup-b2b-sees-rs-2500-crore-revenue-by-2030-founder/articleshow/131218538.cms",
//     image: "/news-image/et.jpg",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://www.devdiscourse.com/article/headlines/3914868-headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder",
//     image: "",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://www.ptinews.com/story/business/headsup-b2b-sees-rs-2-500-cr-revenue-by-2030-founder/3684697",
//     image: "",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://money.rediff.com/news/market/headsup-b2b-rs-2-500-cr-revenue-target-by-2030/47356720260520",
//     image: "",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://www.newsdrum.in/business/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-11853908",
//     image: "/news-image/news-drum.jpg",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://article.wn.com/view-scrap/2026/05/20/HeadsUp_B2B_sees_Rs_2500_crore_revenue_by_2030_Founder/",
//     image: "",
//   },
//   {
//     tag: "Press Release - 20 May 2026",
//     title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
//     link: "https://www.msn.com/en-in/money/other/headsup-b2b-sees-rs-2-500-crore-revenue-by-2030-founder/ar-AA23D2Q6?ocid=BingNewsVerp",
//     image: "/news-image/msn.png",
//   },
// ];

// export default function NewsPressRelease() {
//   return (
//     <div className="bg-white w-full px-5 sm:px-8 md:px-10 pt-12 sm:pt-16">
//       <h2
//         className="text-2xl sm:text-3xl md:text-[36px] font-bold text-center text-[#111] mb-10"
//         style={{ fontFamily: "'Manrope', sans-serif" }}
//       >
//         News &amp; Press Release
//       </h2>

//        <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         spaceBetween={20}
//         slidesPerView={4}
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//           },
//           640: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//         }}
//         className="w-full"
//       ></Swiper>

//       <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 max-[1280px] mx-auto">
//         {NEWS_ITEMS.map((item, i) => (
//           // <div
//           //   key={i}
//           //   className="flex flex-col justify-between gap-5 rounded-2xl p-6 border border-[#e5e5e5] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8] cursor-default"
//           //   style={{ background: "#fff" }}
//           // >
//           //   <div className="flex flex-col gap-3">
//           //     <span
//           //       className="text-xs text-[#888] leading-snug"
//           //       style={{ fontFamily: "'DM Sans', sans-serif" }}
//           //     >
//           //       {item.tag}
//           //     </span>
//           //     <p
//           //       className="text-[15px] sm:text-[16px] font-bold text-[#111] leading-snug"
//           //       style={{ fontFamily: "'Manrope', sans-serif" }}
//           //     >
//           //       {item.title}
//           //     </p>
//           //   </div>
//           //   <a
//           //     href={item.link}
//           //     target="_blank"
//           //     rel="noopener noreferrer"
//           //     className="w-fit rounded-full px-5 py-2 text-sm font-bold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:opacity-90"
//           //     style={{
//           //       background: "#4A3772",
//           //       fontFamily: "'DM Sans', sans-serif",
//           //     }}
//           //   >
//           //     Know More
//           //   </a>
//           // </div>
//           <div
//             key={i}
//             className="flex flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8]"
//             style={{ background: "#fff" }}
//           >
//             {/* IMAGE */}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={500}
//               height={220}
//               className="w-full h-[220px] object-cover"
//             />

//             {/* CONTENT */}
//             <div className="flex flex-col justify-between gap-5 p-6 flex-1">
//               <div className="flex flex-col gap-3">
//                 <span
//                   className="text-xs text-[#888] leading-snug"
//                   style={{ fontFamily: "'DM Sans', sans-serif" }}
//                 >
//                   {item.tag}
//                 </span>

//                 <p
//                   className="text-[15px] sm:text-[16px] font-bold text-[#111] leading-snug"
//                   style={{ fontFamily: "'Manrope', sans-serif" }}
//                 >
//                   {item.title}
//                 </p>
//               </div>

//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-fit rounded-full px-5 py-2 text-sm font-bold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:opacity-90"
//                 style={{
//                   background: "#4A3772",
//                   fontFamily: "'DM Sans', sans-serif",
//                 }}
//               >
//                 Know More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-10">
//         <Link href="/news-press-release">
//           <Button
//             className="rounded-full px-8 py-6 text-sm font-bold transition-all duration-200 hover:-translate-y-px"
//             style={{
//               background: "#4A3772",
//               color: "#fff",
//               fontFamily: "'DM Sans', sans-serif",
//             }}
//           >
//             View All
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { ArrowRight } from "lucide-react";

const NEWS_ITEMS = [
  {
    tag: "Press Release - 16 Jan 2026",
    title: "Headsup B2B Secures Mandate for 40+ MW of Solar Panels and Ancillary Products Across Rajasthan and Jharkhand",
    link: "https://www.business-standard.com/content/press-releases-ani/headsup-b2b-secures-mandate-for-40-mw-of-solar-panels-and-ancillary-products-across-rajasthan-and-jharkhand-126011600010_1.html",
    image: "/news-image/bs.jpg",
  },
  {
    tag: "Press Release - 26 Sep 2025",
    title: "Headsup B2B Secures Rs. 16.65 Crore Debt Capital to Accelerate Growth and Innovation",
    link: "https://www.business-standard.com/content/press-releases-ani/headsup-b2b-secures-rs-16-65-crore-debt-capital-to-accelerate-growth-and-innovation-125092600024_1.html",
    image: "/news-image/sumit-image.png",
  },
  {
    tag: "Press Release - 09 May 2026",
    title: "India’s Green Steel Push Faces Credibility Test As Emissions Rise Despite Net-Zero Pledges",
    link: "https://www.businessworld.in/article/india-s-green-steel-push-faces-credibility-test-as-emissions-rise-despite-net-zero-pledges-606080",
    image: "/news-image/bw.webp",
  },
  {
    tag: "Press Release - 10 May 2026",
    title: "The Pulse of Progress: Industry Voices on Technological Evolution",
    link: "https://cxotoday.com/others/the-pulse-of-progress-industry-voices-on-technological-evolution/",
    image: "/news-image/cxo.png",
  },
  {
    tag: "Press Release - 11 May 2026",
    title: "India’s Technology Day: From Shakti to Superintelligence—The Nation’s $1 Trillion Digital Bet",
    link: "https://cisoforum.in/indias-technology-day-from-shakti-to-superintelligence-the-nations-1-trillion-digital-bet/",
    image: "/news-image/ciso.webp",
  },
  {
    tag: "Press Release - 11 May 2026",
    title: "National Technology Day 2026: Industry Leaders Speak on Next Tech Boom and $1 Lakh Crore R&D Bet on Deep-Tech",
    link: "https://www.analyticsinsight.net/tech-news/national-technology-day-2026-industry-leaders-speak-on-next-tech-boom-and-1-lakh-crore-rd-bet-on-deep-tech",
    image: "/news-image/analyticsinsight.jpg",
  },
  {
    tag: "Press Release - 11 May 2026",
    title: "National Technology Day: Shaping India’s tech future responsibly",
    link: "https://www.manufacturingtodayindia.com/national-technology-day-shaping-indias-tech-future-responsibly",
    image: "/news-image/mt.jpg",
  },
  {
    tag: "Press Release - 11 May 2026",
    title: "Stock Market Highlights, Sensex Today: Sensex Falls 1,312 Points, Nifty Down 360 As Oil Prices Rally",
    link: "https://www.ndtv.com/business-news/stock-market-sensex-share-market-nifty-live-updates-today-11-may-pm-modi-save-fuel-appeal-us-iran-war-oil-prices-11476840",
    image: "/news-image/ndtv.webp",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.news18.com/agency-feeds/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-10101276.html",
    image: "/news-image/news-18.jpg",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.dailyexcelsior.com/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder/",
    image: "/news-image/daily-excelsior.jpg",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://economictimes.indiatimes.com/news/company/corporate-trends/headsup-b2b-sees-rs-2500-crore-revenue-by-2030-founder/articleshow/131218538.cms",
    image: "/news-image/et.jpg",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.ptinews.com/story/business/headsup-b2b-sees-rs-2-500-cr-revenue-by-2030-founder/3684697",
    image: "/news-image/pti.png",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://money.rediff.com/news/market/headsup-b2b-rs-2-500-cr-revenue-target-by-2030/47356720260520",
    image: "/news-image/rediff-money.png",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.newsdrum.in/business/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-11853908",
    image: "/news-image/news-drum.jpg",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://article.wn.com/view-scrap/2026/05/20/HeadsUp_B2B_sees_Rs_2500_crore_revenue_by_2030_Founder/",
    image: "/news-image/wn.png",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.devdiscourse.com/article/headlines/3914868-headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder",
    image: "/news-image/dev-discourse.png",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.msn.com/en-in/money/other/headsup-b2b-sees-rs-2-500-crore-revenue-by-2030-founder/ar-AA23D2Q6?ocid=BingNewsVerp",
    image: "/news-image/msn-1.png",
  },
  {
    tag: "Press Release - 29 May 2026",
    title: "Headsup B2B Targets INR 400 Crore Revenue Via Integrated Infrastructure Services Expansion",
    link: "https://www.energetica-india.net/news/headsup-b2b-targets-inr-400-crore-revenue-via-integrated-infrastructure-services-expansion",
    image: "/news-image/energetica-solar.jpg",
  },
  {
    tag: "Press Release - 14 Jul 2026",
    title: "What’s next in India’s EV (r)evolution?",
    link: "https://www.theweek.in/news/biz-tech/2026/07/14/electric-vehicle-market-growth-india.html",
    image: "/news-image/electric-vehicles.jpg",
  },
];

export default function NewsPressRelease() {
  return (
    <div className="bg-white w-full px-5 sm:px-8 md:px-10 pt-12 sm:pt-16">
      <h2
        className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center text-[#111] mb-10"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        News &amp; Press Release
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="w-full news-press-swiper"
        style={{ minHeight: 460 }}
      >
        {NEWS_ITEMS.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="flex flex-col h-[440px] overflow-hidden rounded-2xl border border-[#e5e5e5] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8] bg-white mb-4"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[220px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-fit"
                />
              </div>


              {/* CONTENT */}
              <div className="flex flex-col justify-between gap-5 p-6 flex-1">
                <div className="flex flex-col gap-3">
                  <span
                    className="text-xs text-[#888] leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.tag}
                  </span>

                  <p className="text-[15px] sm:text-[16px] font-bold text-[#111] leading-snug min-h-[90px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {item.title}
                  </p>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:opacity-90"
                  style={{
                    background: "#4A3772",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col md:relative md:flex-row items-center justify-center gap-4 mt-4">
        {/* Center Button */}
        <Link href="/news-press-release">
          <Button
            className="w-fit rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 h-auto text-xs font-bold text-black transition-all duration-200 hover:-translate-y-px hover:bg-[#00b8d9] flex items-center gap-1.5"
            style={{
              background: "#80EBF7",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            View All
            <GoArrowRight className="w-4 h-4" />
          </Button>
        </Link>

        {/* Arrows — stacked below on mobile, absolute right on md+ */}
        <div className="flex items-center gap-3 md:absolute md:right-0">
          <button
            type="button"
            aria-label="Previous news"
            className="custom-prev w-12 h-12 rounded-full border border-[#ddd] flex items-center justify-center hover:bg-[#f5f5f5] transition"
          >
            <GoArrowLeft aria-hidden="true" className="w-5 h-5 text-[#111]" />
          </button>

          <button
            type="button"
            aria-label="Next news"
            className="custom-next w-12 h-12 rounded-full border border-[#ddd] flex items-center justify-center hover:bg-[#f5f5f5] transition"
          >
            <GoArrowRight aria-hidden="true" className="w-5 h-5 text-[#111]" />
          </button>
        </div>
      </div>
    </div>
  );
}