import { getAllCategoryAndNameData } from "@/Contants/APIEndpoint";
import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchCategoriesNameAndSlug = async () => {
  const response = await fetch(getAllCategoryAndNameData);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch categories');
  }
  
  return result.data;
};

export default function Category() {
  const {
    data: allCategoryData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['categories-name-slug'],
    queryFn: fetchCategoriesNameAndSlug,
    staleTime: 10 * 60 * 1000, // 10 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) {
    return <div className="py-4">Loading categories...</div>;
  }

  if (isError) {
    return (
      <div className="py-4 text-red-500">
        Error: {error?.message || 'Failed to load categories'}
      </div>
    );
  }

  if (!allCategoryData || allCategoryData.length === 0) {
    return <div className="py-4">No categories available</div>;
  }

  return (
    <div className="overflow-hidden relative py-4">
      <div className="mb-2">
        <label className="text-xl font-bold tracking-wide 4k:text-4xl">
          Categories
        </label>
      </div>

      <div className="category-container whitespace-nowrap hover:animate-marquee-paused">
        <div className="flex gap-3 animate-marquee">
          {allCategoryData.map((ele, index) => (
            <div key={ele.slug || index} className="inline-block">
              <a href={`/${ele.slug}`}>
                <label className="font-normal text-[15px] leading-5 cursor-pointer relative inline-block group 4k:text-2xl">
                  {ele.name}
                  <span className="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <span className="ml-3">|</span>
                </label>
              </a>
            </div>
          ))}
          
          {/* Duplicate elements for smooth infinite scrolling */}
          {allCategoryData.map((ele, index) => (
            <div key={`duplicate-${ele.slug || index}`} className="inline-block">
              <a href={`/${ele.slug}`}>
                <label className="font-normal text-[15px] leading-5 cursor-pointer relative inline-block group 4k:text-2xl">
                  {ele.name}
                  <span className="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <span className="ml-3">|</span>
                </label>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          min-width: 200%;
        }

        .hover\\:animate-marquee-paused:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
