// import CountUp from "react-countup";

// const data = [
//   {
//     img: "/blog.png",
//     sub: "Blog curation tailored to your brand with integrated backlinks",
//   },
//   {
//     img: "/ads.png",
//     sub: "4 premium ad placement options for maximum visibility",
//   },
//   {
//     img: "/audience.png",
//     sub: "You write, we curate and amplify it with the right audience touchpoints",
//   },
//   // {
//   //   img: "/average.svg",
//   //   value: 2,
//   //   suffix: " minutes",
//   //   label: "Average Session",
//   //   sub: "Meaningful on-site time",
//   // },
// ];

// const MetricsCards = () => (
//   // <section className="py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
//   //   <h2 className="text-3xl font-bold text-center mb-12">
//   //     Why Choose Headsup B2B?
//   //   </h2>
//   //   {data.map((m, i) => (
//   //     <div
//   //       key={i}
//   //       className="bg-white/90 backdrop-blur-sm border border-gray-200 p-10 rounded-2xl text-center shadow
//   //       transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
//   //       transform hover:scale-105 hover:shadow-xl"
//   //     >
//   //       <img src={m.img} alt={m.label} className="w-12 h-12 mb-4 mx-auto" />
//   //       <h3 className="text-2xl font-extrabold text-gray-900">
//   //         <CountUp end={m.value} duration={2} suffix={m.suffix} />
//   //       </h3>
//   //       <p className="font-semibold text-gray-700">{m.label}</p>
//   //       <p className="text-gray-500 mt-1 text-sm">{m.sub}</p>
//   //     </div>
//   //   ))}
//   // </section>

//   <section className="py-16 px-6 bg-white mt-10">
//     <h2 className="text-3xl font-bold text-center mb-12">
//       Our Unique Offerings Designed for Your Visibility.
//     </h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//       {data.map((m, i) => (
//         <div
//           key={i}
//           className="bg-white/90 backdrop-blur-sm border border-gray-200 p-10 rounded-2xl text-center shadow 
//         transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
//         transform hover:scale-105 hover:shadow-xl"
//         >
//           <img src={m.img} alt={m.label} className="w-12 h-12 mb-4 mx-auto" />
//           <p className=" mt-1 font-semibold text-md">{m.sub}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default MetricsCards;



import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const data = [
  {
    img: "/blog.png",
    sub: (<>
      <strong>Blog curation</strong> tailored to your brand with integrated backlinks
    </> ),
  },
  {
    img: "/ads.png",
    sub:(<>
      <strong>4 premium</strong> ad placement options for maximum visibility
    </>) ,
  },
  {
    img: "/audience.png",
    sub: (<>
      You write, we curate and amplify it with the <strong>right audience </strong>touchpoints
    </>),
  },
];

const MetricsCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  };

  return (
    <section className="py-16 px-6 bg-white mt-10">
      <h2 className="l:text-3xl text-lg font-bold text-center mb-12  ">
        Our Unique Offerings Designed for Your Visibility
      </h2>
      
      {/* Desktop Grid - Hidden on larger tablet and below */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((m, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 p-10 rounded-2xl text-center shadow 
            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
            transform hover:scale-105 hover:shadow-xl"
          >
            <img src={m.img} alt={m.sub} className="w-12 h-12 mb-4 mx-auto" />
            <p className="mt-1 font-semibold text-md">{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Slider - Visible on large tablet and below */}
      <div className="block lg:hidden max-w-lg mx-auto">
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {data.map((m, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl text-center shadow 
                transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                transform hover:scale-105 hover:shadow-xl"
                >
                  <img src={m.img} alt={m.sub} className="w-12 h-12 mb-4 mx-auto" />
                  <p className="mt-1 font-semibold text-md">{m.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white 
            rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white 
            rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 relative ${
                i === currentSlide 
                  ? 'bg-blue-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {/* Progress indicator for current slide */}
              {i === currentSlide && isAutoPlaying && (
                <div className="absolute inset-0 rounded-full border-2 border-blue-200">
                  <div 
                    className="w-full h-full bg-blue-400 rounded-full opacity-30 animate-pulse"
                    style={{
                      animation: 'progress 3s linear infinite'
                    }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        <style jsx>{`
          @keyframes progress {
            0% { transform: scale(0); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0.3; }
            100% { transform: scale(0); opacity: 0.5; }
          }
        `}</style>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-sm text-gray-500">
          {currentSlide + 1} of {data.length}
        </div>
      </div>
    </section>
  );
};

export default MetricsCards;