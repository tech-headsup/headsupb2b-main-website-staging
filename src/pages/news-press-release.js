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

  const sortedNews = [...NEWS_ITEMS].sort((a, b) => {
    const getDate = (item) => {
      const dateStr = item.tag.replace("Press Release - ", "");
      return new Date(dateStr);
    };

    return getDate(b) - getDate(a);
  });

  const featuredNews = sortedNews[0];
  const sideNews = sortedNews.slice(1, 4);
  const remainingNews = sortedNews.slice(4);

  return (
    <div className="bg-white w-full mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 py-24">
      {/* HEADING */}
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-2xl sm:text-3xl md:text-[36px] font-bold text-center text-[#111]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          News & Press Release
        </h2>
      </div>

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 ">
        {/* LEFT BIG NEWS */}
        <Link
          href={featuredNews.link}
          className="lg:col-span-7 group"
        >
          <div className="rounded-[28px] p-[1px] bg-[#e5e5e5] group-hover:bg-[#c5b8e8] transition duration-500 group-hover:shadow-[0_8px_30px_rgba(74,55,114,0.12)]">
            <div className="relative w-full h-[320px] rounded-[28px] overflow-hidden bg-white">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="object-fit transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-5">
            <h5
              className="text-[15px] sm:text-[30px] font-bold text-[#111] leading-snug min-h-[90px]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {featuredNews.title}
            </h5>

            <p
              className="text-[15px] text-[#777]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {featuredNews.tag}
            </p>
          </div>
        </Link>

        {/* RIGHT SIDE NEWS */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {sideNews.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="flex flex-col sm:flex-row gap-5 group"
            >

              <div className="rounded-2xl p-[1px] bg-[#e5e5e5] group-hover:bg-[#c5b8e8] transition duration-500 group-hover:shadow-[0_8px_30px_rgba(74,55,114,0.12)]">
                <div className="relative w-full sm:min-w-[180px] sm:w-[180px] h-[220px] sm:h-[140px] rounded-2xl overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fit transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex-1 justify-between">
                <h5
                  className="text-[15px] sm:text-[20px] font-bold text-[#111] leading-snug min-h-[70px]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {item.title}
                </h5>

                <p
                  className="text-[15px] text-[#777]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.tag}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* REMAINING NEWS */}
      <div>
        <h3
          className="text-2xl md:text-[32px] font-bold text-[#111] mb-8"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Trending News
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingNews.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="group"
            >
              <div className="group rounded-2xl border border-[#e5e5e5] transition-all duration-300 hover:border-[#c5b8e8] hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)]">

                <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-2 flex flex-col gap-2 p-4">
                  <h5
                    className="min-h-[70px] text-[15px] font-bold leading-snug text-[#111] sm:text-[16px]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {item.title}
                  </h5>

                  <p
                    className="text-[14px] text-[#777]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.tag}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}