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
      className="relative max-w-full mx-auto
               ml-0 ms:ml-1 mm:ml-2 ml:ml-3 t:ml-3 l:ml-3 ll:ml-4 imac:ml-5 4k:ml-6 qhd:ml-7"
    >
      {/* Image Container with responsive styling */}
      <div className="bg-gradient-to-br from-purple-500/35 to-purple-600 rounded-2xl shadow-xl relative overflow-hidden
                    p-3 ms:p-4 mm:p-5 ml:p-6 t:p-6 l:p-6 ll:p-8 imac:p-10 4k:p-12 qhd:p-14">
        <img 
          src="/B2B-advertising-page-banner.jpeg"
          alt="B2B Advertising Banner"
          className="w-full object-cover rounded-lg
                   h-[12vh] ms:h-[14vh] mm:h-[16vh] ml:h-[18vh] t:h-[45vh] l:h-[22vh] ll:h-[42vh] imac:h-[45vh] 4k:h-[50vh] qhd:h-[55vh]"
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
