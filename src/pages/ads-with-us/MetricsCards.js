
import React, { useState, useEffect } from 'react';

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
    <section className="py-16 bg-white mt-10 -mx-12 md:-mx-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-10 lg:mb-12">
        Our Unique Offerings Designed for Your Visibility
      </h2>

      {/* Desktop/Tablet Grid - Hidden on mobile */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {data.map((m, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 p-6 md:p-8 lg:p-10 rounded-2xl text-center shadow
            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            transform hover:scale-105 hover:shadow-xl"
          >
            <img src={m.img} alt={m.sub} className="w-10 h-10 md:w-12 md:h-12 mb-4 mx-auto" />
            <p className="mt-1 font-semibold text-sm md:text-base">{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Mobile Slider - Visible only on mobile */}
      <div className="block md:hidden max-w-lg mx-auto">
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
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 relative ${
                i === currentSlide
                  ? 'bg-headupb2b scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {/* Progress indicator for current slide */}
              {i === currentSlide && isAutoPlaying && (
                <div className="absolute inset-0 rounded-full border-2 border-headupb2b/40">
                  <div
                    className="w-full h-full bg-headupb2b rounded-full opacity-30 animate-pulse"
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
      </div>
      </div>
    </section>
  );
};

export default MetricsCards;