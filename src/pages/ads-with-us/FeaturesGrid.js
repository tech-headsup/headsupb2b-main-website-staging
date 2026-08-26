import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const FEATURES = [
  { img: '/Ad.png', titleKey: 'ads.features.item1.title', descKey: 'ads.features.item1.desc' },
  { img: '/engagement.svg', titleKey: 'ads.features.item2.title', descKey: 'ads.features.item2.desc' },
  { img: '/Pan-india.png', titleKey: 'ads.features.item3.title', descKey: 'ads.features.item3.desc' },
];

const FeaturesGrid = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
     <section className="py-4 md:py-6 lg:py-8 ll:py-10 mt-2 -mx-12 md:-mx-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center text-[#111] mb-8 sm:mb-10 md:mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>{t("ads.features.heading")}</h2>

      {/* Desktop Grid - Hidden on mobile */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-6 ll:gap-8">
        {FEATURES.map((f, i) => {
          const title = t(f.titleKey);
          return (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 p-8 md:p-8 lg:p-10 ll:p-12 rounded-2xl shadow
                transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                transform hover:scale-105 hover:shadow-xl text-center"
            >
              <div className="bg-[#80EBF7] w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 ll:w-24 ll:h-24 rounded-2xl flex items-center justify-center mb-4 ll:mb-6 mx-auto">
                <img
                  src={f.img}
                  alt={title}
                  className="w-10 h-10 lg:w-12 lg:h-12 ll:w-14 ll:h-14"
                />
              </div>
              <h3 className="font-bold text-lg md:text-xl ll:text-2xl mb-2 ll:mb-3 text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm md:text-base ll:text-lg leading-relaxed">
                <Trans i18nKey={f.descKey} components={{ strong: <strong /> }} />
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Slider - Visible on mobile only */}
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
            {FEATURES.map((f, i) => {
              const title = t(f.titleKey);
              return (
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
                        alt={title}
                        className="w-12 h-12"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      <Trans i18nKey={f.descKey} components={{ strong: <strong /> }} />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {FEATURES.map((_, i) => (
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

export default FeaturesGrid;
