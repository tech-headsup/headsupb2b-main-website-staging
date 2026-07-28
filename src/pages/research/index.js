import researchData from '@/researchdata/researchData'
import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { NextSeo } from 'next-seo'

export default function ResearchIndex() {
  const seoTitle = 'Research Hub - Headsup B2B'
  const seoDescription =
    "In-depth guides on solar procurement, energy infrastructure, and India's power sector."
  const canonical = 'https://www.headsupb2b.com/research'

  const sortedResearch = [...researchData].sort(
    (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
  )

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 py-8 md:py-10 lg:py-12 ll:py-16">
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        openGraph={{
          type: 'website',
          url: canonical,
          title: seoTitle,
          description: seoDescription,
          site_name: 'Headsup B2B',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@headsupb2b',
          handle: '@headsupb2b',
        }}
      />

      {/* Header */}
      <div className="text-center mb-8 md:mb-10 lg:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl ll:text-5xl font-bold text-black">
          Research Hub
        </h1>
        <p className="text-gray-500 mt-2 md:mt-3 text-sm md:text-base lg:text-lg max-w-[500px] lg:max-w-[600px] mx-auto">
          In-depth guides on solar procurement, energy infrastructure, and India's power sector.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 ll:gap-8">
        {[...researchData]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((item, index) => {
          const date = parseISO(item.date)
          return (
            <Link key={index} href={`/research/${item.slug}`} className="h-full">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">

                {/* Fixed image */}
                <div className="w-full shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    width={1200}
                    height={675}
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto block"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 md:p-5 lg:p-6">

                  {/* Category tag — optional, show if exists */}
                  {item.category && (
                    <span className="text-[10px] md:text-[11px] font-mono tracking-[1px] uppercase text-headupb2b bg-[#F4F1FA] px-2 py-0.5 rounded w-fit mb-2">
                      {item.category}
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="font-bold text-base md:text-lg lg:text-xl text-black line-clamp-2 leading-snug">
                    {item.title}
                  </h2>

                  {/* Date */}
                  <p className="text-[11px] md:text-xs text-gray-400 mt-1 font-mono">
                    {format(date, 'LLL d, yyyy')}
                  </p>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 mt-2 line-clamp-3 flex-1">
                    {item.description}
                  </p>

                  {/* Read more */}
                  <div className="mt-4 text-[13px] md:text-sm font-semibold text-headupb2b flex items-center gap-1">
                    Read Guide <span>→</span>
                  </div>

                </div>
              </div>
            </Link>
          )
        })}
      </div>

    </div>
  )
}
