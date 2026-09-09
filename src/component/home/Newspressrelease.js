"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function localizeTag(t, rawTag) {
  const match = rawTag.match(/^Press Release - (\d{1,2}) (\w{3}) (\d{4})$/);
  if (!match) return rawTag;
  const [, day, month, year] = match;
  const label = t("home.newsPress.pressLabel", { defaultValue: "Press Release" });
  const translatedMonth = t(`home.newsPress.months.${month}`, { defaultValue: month });
  return `${label} - ${day} ${translatedMonth} ${year}`;
}

const RS_2500_CR_LOGOS = [
  {
    image: "/news_logos/18.png",
    link: "https://www.news18.com/agency-feeds/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-10101276.html",
    title: "News18",
  },
  {
    image: "/news_logos/daily.jpeg",
    link: "https://www.dailyexcelsior.com/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder/",
    title: "Daily Excelsior",
  },
  {
    image: "/news_logos/times.jpeg",
    link: "https://economictimes.indiatimes.com/news/company/corporate-trends/headsup-b2b-sees-rs-2500-crore-revenue-by-2030-founder/articleshow/131218538.cms",
    title: "Economic Times",
  },
  {
    image: "/news_logos/pti.png",
    link: "https://www.ptinews.com/story/business/headsup-b2b-sees-rs-2-500-cr-revenue-by-2030-founder/3684697",
    title: "PTI",
  },
  {
    image: "/news_logos/rediff.png",
    link: "https://money.rediff.com/news/market/headsup-b2b-rs-2-500-cr-revenue-target-by-2030/47356720260520",
    title: "Rediff Money",
  },
  {
    image: "/news_logos/drum.png",
    link: "https://www.newsdrum.in/business/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-11853908",
    title: "News Drum",
  },
  {
    image: "/news_logos/scrap-com.png",
    link: "https://article.wn.com/view-scrap/2026/05/20/HeadsUp_B2B_sees_Rs_2500_crore_revenue_by_2030_Founder/",
    title: "WN",
  },
  {
    image: "/news_logos/devdiscourse.png",
    link: "https://www.devdiscourse.com/article/headlines/3914868-headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder",
    title: "Dev Discourse",
  },
  {
    image: "/news_logos/economic-times.jpg",
    link: "https://www.msn.com/en-in/money/other/headsup-b2b-sees-rs-2-500-crore-revenue-by-2030-founder/ar-AA23D2Q6",
    title: "MSN",
  },
];

const INA_SOLAR_LOGOS = [
  {
    image: "/news_logos/18.png",
    link: "https://www.news18.com/agency-feeds/headsup-b2b-enters-into-partnership-with-ina-solar-10251824.html",
    title: "News18",
  },
  {
    image: "/news_logos/energetica.jpeg",
    link: "https://www.energetica-india.net/news/headsup-b2b-partners-with-ina-solar-to-expand-solar-distribution-targets-inr-150-crore-annual-revenue",
    title: "Energetica India",
  },
  {
    image: "/news_logos/saur-energy.webp",
    link: "https://www.saurenergy.com/solar-energy-news/headsup-b2b-signs-ina-solar-distribution-deal-targets-rs-150-crore-solar-revenue-12231159",
    title: "Saur Energy",
  },
  {
    image: "/news_logos/hans-india.png",
    link: "https://www.thehansindia.com/business/headsup-b2b-signs-deal-with-ina-solar-1105153",
    title: "The Hans India",
  },
  {
    image: "/news_logos/pti.png",
    link: "https://www.ptinews.com/detail/business/HeadsUp-B2B-enters-into-partnership-with-INA-Solar/3932329",
    title: "PTI",
  },
];

const NEWS_ITEMS = [
  {
    tag: "Press Release - 13 Aug 2026",
    title: "Headsup B2B enters into partnership with INA Solar",
    image: "/news-image/ina-solar.jpg",
    logos: INA_SOLAR_LOGOS,
  },
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
    link: "https://www.ndtv.com/business-news/stock-market-sensex-share-market-nifty-live-updates-today-11-may-pm-modi-save-fuel-appeal-us-iran-war-oil-prices-11476840#551440",
    image: "/news-image/ndtv.webp",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    image: "/news-image/pti.png",
    logos: RS_2500_CR_LOGOS,
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
  const { t, i18n } = useTranslation();
  const bundle = i18n.getResourceBundle(i18n.language, "translation");
  const translateTitle = (title) => bundle?.newsroom?.titles?.[title] || title;

  const sortedNews = [...NEWS_ITEMS].sort((a, b) => {
    const getDate = (item) => new Date(item.tag.replace("Press Release - ", ""));
    return getDate(b) - getDate(a);
  });

  return (
    <div className="-mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-28">
    <div className="bg-white max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8 pt-12 sm:pt-16">
      <div className="text-center mb-10">
        <h2
          className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {t("home.newsPress.heading", { defaultValue: "Latest Press Releases" })}
        </h2>
      </div>

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
            slidesPerView: 3,
          },
        }}
        className="w-full news-press-swiper"
        style={{ minHeight: 520 }}
      >
        {sortedNews.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="flex flex-col h-[500px] overflow-hidden rounded-2xl border border-[#e5e5e5] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8] bg-white mb-4"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[220px] shrink-0">
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
                    {localizeTag(t, item.tag)}
                  </span>

                  <p className="text-[15px] sm:text-[16px] font-bold text-[#111] leading-snug min-h-[90px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {translateTitle(item.title)}
                  </p>
                </div>

                {item.logos ? (
                  <div className="grid grid-cols-3 gap-2">
                    {item.logos.map((logo, li) => (
                      <a
                        key={li}
                        href={logo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative h-6 overflow-hidden"
                      >
                        <Image
                          src={logo.image}
                          alt={logo.title}
                          fill
                          className="object-contain"
                        />
                      </a>
                    ))}
                  </div>
                ) : (
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
                    {t("common.readMore", { defaultValue: "Read More" })}
                  </a>
                )}
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
            {t("common.viewAll", { defaultValue: "View All" })}
            <GoArrowRight className="w-4 h-4" />
          </Button>
        </Link>

        {/* Arrows — stacked below on mobile, absolute right on md+ */}
        <div className="flex items-center gap-3 md:absolute md:right-0">
          <button
            type="button"
            aria-label={t("home.newsPress.prevAria", { defaultValue: "Previous news" })}
            className="custom-prev w-12 h-12 rounded-full border border-[#ddd] flex items-center justify-center hover:bg-[#f5f5f5] transition"
          >
            <GoArrowLeft aria-hidden="true" className="w-5 h-5 text-[#111]" />
          </button>

          <button
            type="button"
            aria-label={t("home.newsPress.nextAria", { defaultValue: "Next news" })}
            className="custom-next w-12 h-12 rounded-full border border-[#ddd] flex items-center justify-center hover:bg-[#f5f5f5] transition"
          >
            <GoArrowRight aria-hidden="true" className="w-5 h-5 text-[#111]" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}