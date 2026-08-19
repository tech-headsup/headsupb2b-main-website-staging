import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const TICKER_ITEMS = [
  {
    titleKey: "home.newsTicker.items.inaSolarPartnership",
    link: "https://www.news18.com/agency-feeds/headsup-b2b-enters-into-partnership-with-ina-solar-10251824.html",
    image: "/news_logos/18.png",
  },
  {
    titleKey: "home.newsTicker.items.inaSolarPartnership",
    link: "https://www.energetica-india.net/news/headsup-b2b-partners-with-ina-solar-to-expand-solar-distribution-targets-inr-150-crore-annual-revenue",
    image: "/news_logos/energetica.jpeg",
  },
  {
    titleKey: "home.newsTicker.items.inaSolarPartnership",
    link: "https://www.saurenergy.com/solar-energy-news/headsup-b2b-signs-ina-solar-distribution-deal-targets-rs-150-crore-solar-revenue-12231159",
    image: "/news_logos/saur-energy.webp",
  },
  {
    titleKey: "home.newsTicker.items.inaSolarPartnership",
    link: "https://www.thehansindia.com/business/headsup-b2b-signs-deal-with-ina-solar-1105153",
    image: "/news_logos/hans-india.png",
  },
  {
    titleKey: "home.newsTicker.items.inaSolarPartnership",
    link: "https://www.ptinews.com/detail/business/HeadsUp-B2B-enters-into-partnership-with-INA-Solar/3932329",
    image: "/news_logos/pti.png",
  },
  {
    titleKey: "home.newsTicker.items.solarMandate40Mw",
    link: "https://www.business-standard.com/content/press-releases-ani/headsup-b2b-secures-mandate-for-40-mw-of-solar-panels-and-ancillary-products-across-rajasthan-and-jharkhand-126011600010_1.html",
    image: "/news_logos/bs.png",
  },
  {
    titleKey: "home.newsTicker.items.debtCapital1665Cr",
    link: "https://www.business-standard.com/content/press-releases-ani/headsup-b2b-secures-rs-16-65-crore-debt-capital-to-accelerate-growth-and-innovation-125092600024_1.html",
    image: "/news_logos/bs.png",
  },
  {
    titleKey: "home.newsTicker.items.greenSteelPush",
    link: "https://www.businessworld.in/article/india-s-green-steel-push-faces-credibility-test-as-emissions-rise-despite-net-zero-pledges-606080",
    image: "/news_logos/bw.png",
  },
  {
    titleKey: "home.newsTicker.items.pulseOfProgress",
    link: "https://cxotoday.com/others/the-pulse-of-progress-industry-voices-on-technological-evolution/",
    image: "/news_logos/cxo.png",
  },
  {
    titleKey: "home.newsTicker.items.technologyDayShakti",
    link: "https://cisoforum.in/indias-technology-day-from-shakti-to-superintelligence-the-nations-1-trillion-digital-bet/",
    image: "/news_logos/ciso.png",
  },
  {
    titleKey: "home.newsTicker.items.nationalTechDay2026",
    link: "https://www.analyticsinsight.net/tech-news/national-technology-day-2026-industry-leaders-speak-on-next-tech-boom-and-1-lakh-crore-rd-bet-on-deep-tech",
    image: "/news_logos/ai.png",
    bg: "#1a1a2e",
  },
  {
    titleKey: "home.newsTicker.items.nationalTechDayResponsible",
    link: "https://www.manufacturingtodayindia.com/national-technology-day-shaping-indias-tech-future-responsibly",
    image: "/news_logos/today.png",
    bg: "#c8102e",
  },
  {
    titleKey: "home.newsTicker.items.sensexFalls1312",
    link: "https://www.ndtv.com/business-news/stock-market-sensex-share-market-nifty-live-updates-today-11-may-pm-modi-save-fuel-appeal-us-iran-war-oil-prices-11476840#551440",
    image: "/news_logos/ndtv.png",
  },

  // Same title, different publications
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://www.news18.com/agency-feeds/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-10101276.html",
    image: "/news_logos/18.png",
  },
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://www.dailyexcelsior.com/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder/",
    image: "/news_logos/daily.jpeg",
  },
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://economictimes.indiatimes.com/news/company/corporate-trends/headsup-b2b-sees-rs-2500-crore-revenue-by-2030-founder/articleshow/131218538.cms",
    image: "/news_logos/times.jpeg",
  },
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://www.ptinews.com/story/business/headsup-b2b-sees-rs-2-500-cr-revenue-by-2030-founder/3684697",
    image: "/news_logos/pti.png",
  },
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://money.rediff.com/news/market/headsup-b2b-rs-2-500-cr-revenue-target-by-2030/47356720260520",
    image: "/news_logos/rediff.png",
  },
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://www.newsdrum.in/business/headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder-11853908",
    image: "/news_logos/drum.png",
  },
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://article.wn.com/view-scrap/2026/05/20/HeadsUp_B2B_sees_Rs_2500_crore_revenue_by_2030_Founder/",
    image: "/news_logos/scrap-com.png",
  },
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://www.devdiscourse.com/article/headlines/3914868-headsup-b2b-sees-rs-2500-cr-revenue-by-2030-founder",
    image: "/news_logos/devdiscourse.png",
  },
  {
    titleKey: "home.newsTicker.items.revenue2500Cr2030",
    link: "https://www.msn.com/en-in/money/other/headsup-b2b-sees-rs-2-500-crore-revenue-by-2030-founder/ar-AA23D2Q6",
    image: "/news_logos/et.webp",
  },

  {
    titleKey: "home.newsTicker.items.infra400CrExpansion",
    link: "https://www.energetica-india.net/news/headsup-b2b-targets-inr-400-crore-revenue-via-integrated-infrastructure-services-expansion",
    image: "/news_logos/energetica.jpeg",
  },
  {
    titleKey: "home.newsTicker.items.evRevolution",
    link: "https://www.theweek.in/news/biz-tech/2026/07/14/electric-vehicle-market-growth-india.html",
    image: "/news_logos/the-week.jpg",
  },
];

// Group same titles together
const groupedItems = Object.values(
  TICKER_ITEMS.reduce((acc, item) => {
    if (!acc[item.titleKey]) {
      acc[item.titleKey] = {
        titleKey: item.titleKey,
        logos: [],
      };
    }

    acc[item.titleKey].logos.push({
      image: item.image,
      link: item.link,
      bg: item.bg,
    });

    return acc;
  }, {})
);

const tickerRow = [...groupedItems, ...groupedItems];

export default function NewsTicker() {
  const { t } = useTranslation();
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
          {tickerRow.map((item, i) => {
            const title = t(item.titleKey);
            return (
              <div
                key={`${item.titleKey}-${i}`}
                className="flex items-center gap-1"
              >
                <span
                  className="text-[13px] lg:text-[14px] text-[#6b46c1]"
                  style={{ fontFamily: "'Montserrat'" }}
                >
                  {t("home.newsTickerLabel")}
                </span>

                <span
                  className="text-[13px] lg:text-[13px] text-[#222]"
                  style={{ fontFamily: "'Montserrat'" }}
                >
                  {title}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className="text-[12px] lg:text-[14px] text-gray-500 italic"
                    style={{ fontFamily: "'Montserrat'" }}
                  >
                    {t("home.newsTickerPublished")}
                  </span>
                  {item.logos.map((logo, idx) => (
                    <Link
                      key={idx}
                      href={logo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read "${title}" on the publisher website`}
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
                          alt={`Publisher logo for "${title}"`}
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
            );
          })}
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
