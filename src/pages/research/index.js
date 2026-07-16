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
    <div className="px-4 mm:px-6 t:px-8 l:px-12 py-10 mt-12 max-w-[1400px] mx-auto">
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
      <div className="text-center mb-10">
        <h1 className="text-2xl mm:text-3xl l:text-4xl font-bold text-black">
          Research Hub
        </h1>
        <p className="text-gray-500 mt-2 text-sm mm:text-base max-w-[500px] mx-auto">
          In-depth guides on solar procurement, energy infrastructure, and India's power sector.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 t:grid-cols-2 l:grid-cols-3 gap-4 t:gap-6">
        {[...researchData]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((item, index) => {
          const date = parseISO(item.date)
          return (
            <Link key={index} href={`/research/${item.slug}`} className="h-full">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">

                {/* Fixed image */}
                <div className="relative w-full h-[180px] mm:h-[200px] t:h-[210px] shrink-0">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 mm:p-5">

                  {/* Category tag — optional, show if exists */}
                  {item.category && (
                    <span className="text-[10px] font-mono tracking-[1px] uppercase text-headupb2b bg-[#F4F1FA] px-2 py-0.5 rounded w-fit mb-2">
                      {item.category}
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="font-bold text-base mm:text-lg text-black line-clamp-2 leading-snug">
                    {item.title}
                  </h2>

                  {/* Date */}
                  <p className="text-[11px] mm:text-xs text-gray-400 mt-1 font-mono">
                    {format(date, 'LLL d, yyyy')}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-1">
                    {item.description}
                  </p>

                  {/* Read more */}
                  <div className="mt-4 text-[13px] font-semibold text-headupb2b flex items-center gap-1">
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
