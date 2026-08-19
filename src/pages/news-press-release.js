import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { NextSeo } from "next-seo";

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
    link: "https://www.ndtv.com/business-news/stock-market-sensex-share-market-nifty-live-updates-today-11-may-pm-modi-save-fuel-appeal-us-iran-war-oil-prices-11476840#551440",
    image: "/news-image/ndtv.webp",
  },
  {
    tag: "Press Release - 20 May 2026",
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.news18.com/agency-feeds/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-10101276.html",
    image: "/news-image/pti.png",
    logos: [
      { image: "/news_logos/18.png", link: "https://www.news18.com/agency-feeds/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-10101276.html", title: "News18" },
      { image: "/news_logos/daily.jpeg", link: "https://www.dailyexcelsior.com/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder/", title: "Daily Excelsior" },
      { image: "/news_logos/times.jpeg", link: "https://economictimes.indiatimes.com/news/company/corporate-trends/headsup-b2b-sees-rs-2500-crore-revenue-by-2030-founder/articleshow/131218538.cms", title: "Economic Times" },
      { image: "/news_logos/pti.png", link: "https://www.ptinews.com/story/business/headsup-b2b-sees-rs-2-500-cr-revenue-by-2030-founder/3684697", title: "PTI" },
      { image: "/news_logos/rediff.png", link: "https://money.rediff.com/news/market/headsup-b2b-rs-2-500-cr-revenue-target-by-2030/47356720260520", title: "Rediff Money" },
      { image: "/news_logos/drum.png", link: "https://www.newsdrum.in/business/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-11853908", title: "News Drum" },
      { image: "/news_logos/scrap-com.png", link: "https://article.wn.com/view-scrap/2026/05/20/HeadsUp_B2B_sees_Rs_2500_crore_revenue_by_2030_Founder/", title: "WN" },
      { image: "/news_logos/devdiscourse.png", link: "https://www.devdiscourse.com/article/headlines/3914868-headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder", title: "Dev Discourse" },
      { image: "/news_logos/economic-times.jpg", link: "https://www.msn.com/en-in/money/other/headsup-b2b-sees-rs-2-500-crore-revenue-by-2030-founder/ar-AA23D2Q6", title: "MSN" },
    ],
  },
  {
    tag: "Press Release - 29 May 2026",
    title: "Headsup B2B Targets INR 400 Crore Revenue Via Integrated Infrastructure Services Expansion",
    link: "https://www.energetica-india.net/news/headsup-b2b-targets-inr-400-crore-revenue-via-integrated-infrastructure-services-expansion",
    image: "/news-image/energetica-solar.jpg",
  },
  {
    tag: "Press Release - 14 Jul 2026",
    title: "What’s next in India’s EV\n(r)evolution?",
    link: "https://www.theweek.in/news/biz-tech/2026/07/14/electric-vehicle-market-growth-india.html",
    image: "/news-image/electric-vehicles.jpg",
  },
];

export default function NewsPressRelease() {
  const { t, i18n } = useTranslation();
  const bundle = i18n.getResourceBundle(i18n.language, "translation");
  const translateTitle = (title) => bundle?.newsroom?.titles?.[title] || title;

  const sortedNews = [...NEWS_ITEMS].sort((a, b) => {
    const getDate = (item) => {
      const dateStr = item.tag.replace("Press Release - ", "");
      return new Date(dateStr);
    };

    return getDate(b) - getDate(a);
  });

  const remainingNews = sortedNews;

  const featuredLogos = [
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

  return (
    <div className="bg-white w-full mx-auto max-w-[1280px] px-6 md:px-12 lg:px-8 pt-24 pb-10">
      <NextSeo canonical="https://www.headsupb2b.com/news-press-release" />
      {/* PAGE HEADING */}
      <h1
        className="text-center font-bold text-[#111] mb-10 leading-tight (1.25) text-3xl ms:text-3xl mm:text-4xl ml:text-[40px] t:text-[48px] l:text-[56px]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {t("newsroom.pageHeading")}
      </h1>

      {/* FEATURED + STORY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {/* AS FEATURED IN */}
        <div className="rounded-2xl mm:rounded-3xl p-3 mm:p-4 ml:p-5 t:p-6 l:p-8 bg-[#f4f1fb] border border-[#e8e2f5]">
          <div className="relative w-full h-[130px] ms:h-[180px] mm:h-[180px] ml:h-[210px] t:h-[390px] l:h-[260px] xl:h-[320px] rounded-xl mm:rounded-2xl overflow-hidden bg-white mb-4 ml:mb-6">
            <Image
              src="/news-image/ina-solar.jpg"
              alt="Headsup B2B enters into partnership with INA Solar"
              fill
              className="object-fit"
            />
          </div>
          <h3
            className="text-[15px] ms:text-[15px] mm:text-[17px] ml:text-[19px] t:text-2xl l:text-[28px] font-bold text-[#111] mb-5 ml:mb-6 leading-snug"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t("newsroom.featuredTitle")}
          </h3>
          <div className="grid grid-cols-5 gap-2 mm:gap-3 t:gap-4">
            {featuredLogos.map((item, i) => (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="relative h-12 mm:h-14 ml:h-16 t:h-18 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-1.5"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* WATCH THE STORY */}
        <Link
          href="https://visualmediamonitor.com/TV/TVPost?clipId=eHhCclZHZ0V4eDR5UVBkOWtmZGkxZz09&orderNo=dzE0dkc3WEx3WmNvU1F5TzFLV1RKUT09"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl mm:rounded-3xl p-3 mm:p-4 ml:p-5 t:p-6 l:p-8 cursor-pointer"
          style={{ backgroundColor: "#eafdff", border: "1px solid #cdf5f9" }}
        >
          <div className="relative w-full h-[130px] ms:h-[180px] mm:h-[180px] ml:h-[210px] t:h-[390px] l:h-[260px] xl:h-[320px] rounded-xl mm:rounded-2xl overflow-hidden bg-black mb-4 ml:mb-6">
            <video
              src="/news-story.mp4"
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <h3
            className="text-[15px] ms:text-[15px] mm:text-[17px] ml:text-[19px] t:text-2xl l:text-[28px] font-bold text-[#111] leading-snug"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t("newsroom.watchStoryTitle")}
          </h3>
        </Link>
      </div>

      {/* HEADING */}
      <div className="text-center mb-10">
        <h2
          className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#111]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {t("newsroom.latestReleases")}
        </h2>
      </div>

      {/* NEWS GRID */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingNews.map((item, i) => {
            // const dateOnly = item.tag.replace("Press Release - ", "");
            // const fullDate = `${t("newsroom.pressReleasePrefix")}${dateOnly}`.toUpperCase();
            const dateOnly = item.tag.replace("Press Release - ", "");

            const [day, month, year] = dateOnly.split(" ");

            const translatedMonth =
              i18n.language === "hi"
                ? t(`newsroom.months.${month}`)
                : month;

            const fullDate =
              `${t("newsroom.pressReleasePrefix")}${day} ${translatedMonth} ${year}`.toUpperCase();
            const hasLogos = Array.isArray(item.logos) && item.logos.length > 0;

            const cardInner = (
              <>
                <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl bg-[#f4f4f6]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fill"
                  />
                </div>

                <div className="flex flex-col flex-1 p-4">
                  <p
                    className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#777]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {fullDate}
                  </p>

                  <h5
                    className="mt-2 text-[17px] font-bold leading-snug text-[#111] whitespace-pre-line"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {translateTitle(item.title)}
                  </h5>

                  {hasLogos ? (
                    <div className="mt-4 grid grid-cols-3 gap-2 mm:gap-3">
                      {item.logos.map((logo, li) => (
                        <Link
                          key={li}
                          href={logo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-5 mm:h-6 t:h-6 rounded-md overflow-hidden flex items-center justify-center"
                          aria-label={logo.title}
                        >
                          <Image
                            src={logo.image}
                            alt={logo.title}
                            fill
                            className="object-contain p-0.5"
                          />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <span
                      className="mt-auto pt-4 self-start"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span className="inline-flex items-center gap-2 rounded-xl bg-[#80EBF7] px-4 py-2 text-[13px] font-bold text-[#4A3772] transition">
                        {t("newsroom.readRelease")} <span aria-hidden="true">→</span>
                      </span>
                    </span>
                  )}
                </div>
              </>
            );

            if (hasLogos) {
              return (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl border border-[#e5e5e5] transition-all duration-300 hover:border-[#c5b8e8] hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)]"
                >
                  {cardInner}
                </div>
              );
            }

            return (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-2xl border border-[#e5e5e5] transition-all duration-300 hover:border-[#c5b8e8] hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)]"
              >
                {cardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}