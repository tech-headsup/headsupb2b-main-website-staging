"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingImage = () => {
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    controls.start({
      y: [-10, 10],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    controls.start({
      rotate: 2,
      scale: 1.05,
      transition: { type: "spring", stiffness: 200 },
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    controls.start({
      rotate: 0,
      scale: 1,
      y: [-10, 10],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      },
    });
  };

  return (
    <motion.div
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-full mx-auto"
    >
      {/* Image Container */}
      <div className="bg-gradient-to-br from-purple-500/35 to-purple-600 rounded-2xl shadow-xl relative overflow-hidden
                    p-3 t:p-5 l:p-6 ll:p-8">
        <img
          src="/B2B-advertising-page-banner.jpeg"
          alt="B2B Advertising Banner"
          className="w-full h-auto object-contain rounded-lg block"
        />

        {/* Decorative elements - hidden on smaller screens */}
        <div className="absolute top-0 right-0 bg-white/10 rounded-full -translate-y-12 translate-x-12
                      w-24 h-24 hidden t:block"></div>

        <div className="absolute bottom-0 left-0 bg-white/5 rounded-full translate-y-8 -translate-x-8
                      w-16 h-16 hidden t:block"></div>
      </div>
    </motion.div>
  );
};

export default FloatingImage;
