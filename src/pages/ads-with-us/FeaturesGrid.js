import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    img: '/Ad.png',
    title: 'Excellent Ad Placements',
    desc: (
      <>
        Target EPC and real estate buyers with over <strong>17,000</strong>  monthly views.
      </>
    )
  },
  {
    img: '/engagement.svg',
    title: 'High Engagement, Real Impact',
    desc: (
      <>
        We keep our visitors captivated with a <strong>96%</strong> engagement rate.
      </>
    )
  },
  {
    img: '/Pan-india.png',
    title: 'Pan-India Reach',
    desc: (
      <>
        Our target audience spans over <strong>6,000</strong> high-potential locations across the country.
      </>
    )
  }
];

const FeaturesGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="py-16 px-6 bg-white ms:mt-0">
      <h2 className="ll:text-3xl font-bold text-center mb-12" >Why Choose Headsup B2B?</h2>
      
      {/* Desktop Grid - Hidden on large tablet and below */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 p-10 rounded-2xl shadow 
              transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
              transform hover:scale-105 hover:shadow-xl text-center"
          >
            <div className="bg-[#80EBF7] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <img
                src={f.img}
                alt={f.title}
                className="w-12 h-12"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">{f.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{f.desc}</p>
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
            {features.map((f, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl text-center shadow 
                transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="bg-[#80EBF7] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <img
                      src={f.img}
                      alt={f.title}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{f.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{f.desc}</p>
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
          {features.map((_, i) => (
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
          {currentSlide + 1} of {features.length}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;