import Image from "next/image";
import Link from "next/link";

const TICKER_ITEMS = [
  {
    title:
      "Headsup B2B Secures Mandate for 40+ MW of Solar Panels and Ancillary Products Across Rajasthan and Jharkhand",
    link: "https://www.business-standard.com/content/press-releases-ani/headsup-b2b-secures-mandate-for-40-mw-of-solar-panels-and-ancillary-products-across-rajasthan-and-jharkhand-126011600010_1.html",
    image: "/news_logos/bs.png",
  },
  {
    title:
      "Headsup B2B Secures Rs. 16.65 Crore Debt Capital to Accelerate Growth and Innovation",
    link: "https://www.business-standard.com/content/press-releases-ani/headsup-b2b-secures-rs-16-65-crore-debt-capital-to-accelerate-growth-and-innovation-125092600024_1.html",
    image: "/news_logos/bs.png",
  },
  {
    title:
      "India’s Green Steel Push Faces Credibility Test As Emissions Rise Despite Net-Zero Pledges",
    link: "https://www.businessworld.in/article/india-s-green-steel-push-faces-credibility-test-as-emissions-rise-despite-net-zero-pledges-606080",
    image: "/news_logos/bw.png",
  },
  {
    title:
      "The Pulse of Progress: Industry Voices on Technological Evolution",
    link: "https://cxotoday.com/others/the-pulse-of-progress-industry-voices-on-technological-evolution/",
    image: "/news_logos/cxo.png",
  },
  {
    title:
      "India’s Technology Day: From Shakti to Superintelligence—The Nation’s $1 Trillion Digital Bet",
    link: "https://cisoforum.in/indias-technology-day-from-shakti-to-superintelligence-the-nations-1-trillion-digital-bet/",
    image: "/news_logos/ciso.png",
  },
  {
    title:
      "National Technology Day 2026: Industry Leaders Speak on Next Tech Boom and ₹1 Lakh Crore R&D Bet on Deep-Tech",
    link: "https://www.analyticsinsight.net/tech-news/national-technology-day-2026-industry-leaders-speak-on-next-tech-boom-and-1-lakh-crore-rd-bet-on-deep-tech",
    image: "/news_logos/ai.png",
    bg: "#1a1a2e",
  },
  {
    title: "National Technology Day: Shaping India’s tech future responsibly",
    link: "https://www.manufacturingtodayindia.com/national-technology-day-shaping-indias-tech-future-responsibly",
    image: "/news_logos/today.png",
    bg: "#c8102e",
  },
  {
    title:
      "Stock Market Highlights, Sensex Today: Sensex Falls 1,312 Points, Nifty Down 360 As Oil Prices Rally",
    link: "https://www.ndtv.com/business-news/stock-market-sensex-share-market-nifty-live-updates-today-11-may-pm-modi-save-fuel-appeal-us-iran-war-oil-prices-11476840",
    image: "/news_logos/ndtv.png",
  },

  // Same title, different publications
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.news18.com/agency-feeds/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-10101276.html",
    image: "/news_logos/18.png",
  },
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.dailyexcelsior.com/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder/",
    image: "/news_logos/daily.jpeg",
  },
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://economictimes.indiatimes.com/news/company/corporate-trends/headsup-b2b-sees-rs-2500-crore-revenue-by-2030-founder/articleshow/131218538.cms",
    image: "/news_logos/times.jpeg",
  },
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.ptinews.com/story/business/headsup-b2b-sees-rs-2-500-cr-revenue-by-2030-founder/3684697",
    image: "/news_logos/pti.png",
  },
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://money.rediff.com/news/market/headsup-b2b-rs-2-500-cr-revenue-target-by-2030/47356720260520",
    image: "/news_logos/rediff.png",
  },
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.newsdrum.in/business/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-11853908",
    image: "/news_logos/drum.png",
  },
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://article.wn.com/view-scrap/2026/05/20/HeadsUp_B2B_sees_Rs_2500_crore_revenue_by_2030_Founder/",
    image: "/news_logos/scrap-com.png",
  },
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.devdiscourse.com/article/headlines/3914868-headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder",
    image: "/news_logos/devdiscourse.png",
  },
  {
    title: "Headsup B2B sees Rs 2,500 cr revenue by 2030: Founder",
    link: "https://www.msn.com/en-in/money/other/headsup-b2b-sees-rs-2-500-crore-revenue-by-2030-founder/ar-AA23D2Q6",
    image: "/news_logos/et.webp",
  },

  {
    title:
      "Headsup B2B Targets INR 400 Crore Revenue Via Integrated Infrastructure Services Expansion",
    link: "https://www.energetica-india.net/news/headsup-b2b-targets-inr-400-crore-revenue-via-integrated-infrastructure-services-expansion",
    image: "/news_logos/energetica.jpeg",
  },
  {
    title: "What’s next in India’s EV (r)evolution?",
    link: "https://www.theweek.in/news/biz-tech/2026/07/14/electric-vehicle-market-growth-india.html",
    image: "/news_logos/the-week.jpg",
  },
];

// Group same titles together
const groupedItems = Object.values(
  TICKER_ITEMS.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = {
        title: item.title,
        logos: [],
      };
    }

    acc[item.title].logos.push({
      image: item.image,
      link: item.link,
      bg: item.bg,
    });

    return acc;
  }, {})
);

const tickerRow = [...groupedItems, ...groupedItems];

export default function NewsTicker() {
  return (
    <div
      className="news-ticker w-full overflow-hidden border-b border-[#e9e3f7] p-1"
      style={{
        background:
          "linear-gradient(90deg, #f7f4ff 0%, #ffffff 50%, #f7f4ff 100%)",
      }}
    >
      <div className="relative overflow-hidden">
        <div className="news-ticker__track flex w-max items-center gap-16 py-2 whitespace-nowrap">
          {tickerRow.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="flex items-center gap-1"
            >
              <span
                className="text-[13px] lg:text-[14px] text-[#6b46c1]"
                style={{ fontFamily: "'Montserrat'" }}
              >
                News & Press Release -
              </span>

              <span
                className="text-[13px] lg:text-[13px] text-[#222]"
                style={{ fontFamily: "'Montserrat'" }}
              >
                {item.title}
              </span>

              <div className="flex items-center gap-2">
                <span
                  className="text-[12px] lg:text-[14px] text-gray-500 italic"
                  style={{ fontFamily: "'Montserrat'" }}
                >
                  - Published on
                </span>
                {item.logos.map((logo, idx) => (
                  <Link
                    key={idx}
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read "${item.title}" on the publisher website`}
                  >
                    <span
                      className={`relative w-20 h-10 flex-shrink-0 rounded flex items-center justify-center ${logo.bg ? "px-2 py-1" : ""
                        }`}
                      style={
                        logo.bg ? { background: logo.bg } : undefined
                      }
                    >
                      <Image
                        src={logo.image}
                        alt={`Publisher logo for "${item.title}"`}
                        fill
                        sizes="80px"
                        quality={60}
                        loading="lazy"
                        className={`object-contain ${logo.bg ? "p-1" : ""
                          }`}
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .news-ticker__track {
          animation: news-ticker-scroll 180s linear infinite;
        }

        .news-ticker:hover .news-ticker__track {
          animation-play-state: paused;
        }

        @keyframes news-ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .news-ticker__track {
            animation-duration: 90s;
          }
        }
      `}</style>
    </div>
  );
}
