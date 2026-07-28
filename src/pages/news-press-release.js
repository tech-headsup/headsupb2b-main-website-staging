import Image from "next/image";
import Link from "next/link";

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
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://www.news18.com/agency-feeds/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-10101276.html",
  //   image: "/news-image/news-18.jpg",
  // },
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://www.dailyexcelsior.com/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder/",
  //   image: "/news-image/daily-excelsior.jpg",
  // },
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://economictimes.indiatimes.com/news/company/corporate-trends/headsup-b2b-sees-rs-2500-crore-revenue-by-2030-founder/articleshow/131218538.cms",
  //   image: "/news-image/et.jpg",
  // },
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://www.ptinews.com/story/business/headsup-b2b-sees-rs-2-500-cr-revenue-by-2030-founder/3684697",
  //   image: "/news-image/pti.png",
  // },
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://money.rediff.com/news/market/headsup-b2b-rs-2-500-cr-revenue-target-by-2030/47356720260520",
  //   image: "/news-image/rediff-money.png",
  // },
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://www.newsdrum.in/business/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-11853908",
  //   image: "/news-image/news-drum.jpg",
  // },
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://article.wn.com/view-scrap/2026/05/20/HeadsUp_B2B_sees_Rs_2500_crore_revenue_by_2030_Founder/",
  //   image: "/news-image/wn.png",
  // },
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://www.devdiscourse.com/article/headlines/3914868-headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder",
  //   image: "/news-image/dev-discourse.png",
  // },
  // {
  //   tag: "Press Release - 20 May 2026",
  //   title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
  //   link: "https://www.msn.com/en-in/money/other/headsup-b2b-sees-rs-2-500-crore-revenue-by-2030-founder/ar-AA23D2Q6?ocid=BingNewsVerp",
  //   image: "/news-image/msn-1.png",
  // },
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

  return (
    <div className="bg-white w-full mx-auto max-w-[1280px] px-6 md:px-12 lg:px-8 py-24">
      {/* PAGE HEADING */}
      <h1
        className="text-center font-bold text-[#111] mb-10 leading-tight (1.25) text-3xl ms:text-3xl mm:text-4xl ml:text-[40px] t:text-[48px] l:text-[56px]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Headsup In The Headlines
      </h1>

      {/* FEATURED + STORY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {/* AS FEATURED IN */}
        <div className="rounded-2xl mm:rounded-3xl p-3 mm:p-4 ml:p-5 t:p-6 l:p-8 bg-[#f4f1fb] border border-[#e8e2f5]">
          <div className="relative w-full h-[130px] ms:h-[180px] mm:h-[180px] ml:h-[210px] t:h-[390px] l:h-[260px] xl:h-[320px] rounded-xl mm:rounded-2xl overflow-hidden bg-white mb-4 ml:mb-6">
            <Image
              src="/news-image/dev-discourse.png"
              alt="News feature"
              fill
              className="object-cover"
            />
          </div>
          <h3
            className="text-[15px] ms:text-[15px] mm:text-[17px] ml:text-[19px] t:text-2xl l:text-[28px] font-bold text-[#111] mb-4 ml:mb-6 leading-snug"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder
          </h3>
          <div className="grid grid-cols-3 ms:grid-cols-3 mm:grid-cols-4 ml:grid-cols-5 t:grid-cols-6 l:grid-cols-9 gap-2 mm:gap-3">
            {featuredLogos.map((item, i) => (
              <Link
                href={item.link}
                target="_blank"
                key={i}
                className="relative h-10 ms:h-10 mm:h-11 ml:h-12 t:h-14 rounded-lg overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-1"
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
            Sumit Kumar on Revolutionizing MSME Procurement with AI-Powered Solutions
          </h3>
        </Link>
      </div>

      {/* HEADING */}
      <div className="text-center mb-10">
        <h2
          className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#111]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Latest Press Releases
        </h2>
      </div>

      {/* NEWS GRID */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingNews.map((item, i) => {
            const fullDate = item.tag.replace("Press Release - ", "").toUpperCase();

            return (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-2xl border border-[#e5e5e5] transition-all duration-300 hover:border-[#c5b8e8] hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)]"
              >
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
                    {item.title}
                  </h5>

                  <span
                    className="mt-auto pt-4 self-start"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#4A3772] bg-[#4A3772] px-4 py-2 text-[13px] font-semibold text-white transition">
                      Read release <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}