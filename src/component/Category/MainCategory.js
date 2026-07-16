import React, { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";
import CustomText from "../Text/CustomText";

export default function MainCategory({ initialDataa }) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [width, setWidth] = useState(null);
  const isMobile = width < 768;

  useEffect(() => {
    if (width === null) {
      setWidth(window.innerWidth);
    }
  }, [width]);

  const renderCategories = () => {
    const filtered = initialDataa?.filter(
      (ele) =>
        ele.name !== "IT Products" &&
        ele.name !== "Tools and Accessories" &&
        ele.name !== "Fitness Equipment"
    );

    const items = isMobile && !showAllCategories ? filtered : filtered;

    // Determine columns based on width
    let cols = 1;
    if (width >= 1280) cols = 4;       // ll and 4k
    else if (width >= 1024) cols = 3;  // l
    else if (width >= 768) cols = 2;   // t
    else cols = 1;

    const remainder = items?.length % cols;
    const lastRowCount = remainder === 0 ? cols : remainder;
    const fullRowItems = items?.slice(0, items.length - lastRowCount);
    const lastRowItems = items?.slice(items.length - lastRowCount);

    const cardClass =
      "rounded-2xl border border-[#e5e5e5] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8]";

    return (
      <>
        {/* Full rows — normal grid */}
        {fullRowItems?.length > 0 && (
          <div className="grid gap-3 t:gap-8 grid-cols-1 mm:grid-cols-1 ml:grid-cols-1 t:grid-cols-2 l:grid-cols-3 ll:grid-cols-4 4k:grid-cols-4">
            {fullRowItems.map((ele, index) => (
              <div key={ele?.name ?? index} className={cardClass}>
                <ProductCard ele={ele} index={index} />
              </div>
            ))}
          </div>
        )}

        {/* Last row — centered flex */}
        {lastRowItems?.length > 0 && lastRowItems.length !== cols && (
          <div className="flex flex-wrap justify-center gap-3 t:gap-8 mt-3 t:mt-8">
            {lastRowItems.map((ele, index) => (
              <div
                key={ele?.name ?? index}
                className={`w-full t:w-[calc(50%-16px)] l:w-[calc(33.333%-16px)] ll:w-[calc(25%-16px)] 4k:w-[calc(25%-16px)] ${cardClass}`}
              >
                <ProductCard ele={ele} index={fullRowItems.length + index} />
              </div>
            ))}
          </div>
        )}

        {/* Last row is a full row — render normally in the grid above */}
        {lastRowItems?.length === cols && (
          <div className="grid gap-3 t:gap-8 grid-cols-1 mm:grid-cols-1 ml:grid-cols-1 t:grid-cols-2 l:grid-cols-3 ll:grid-cols-4 4k:grid-cols-4 mt-3 t:mt-8">
            {lastRowItems.map((ele, index) => (
              <div key={ele?.name ?? index} className={cardClass}>
                <ProductCard ele={ele} index={fullRowItems.length + index} />
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div className="text-center">
        <h2 className="section_heading text-3xl md:text-[40px] font-extrabold text-center text-[#111]">
          Our Categories
        </h2>
      </div>
      <div className="text-center mb-10 pt-2">
        <CustomText
          text="We have developed a multi-faceted expertise in various categories."
          className="section_sub_text"
        />
      </div>
      <div>
        <div className="my-4 4k:my-10">
          {renderCategories()}
          {isMobile && !showAllCategories && (
            <div className="text-center mt-6">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setShowAllCategories(true)}
                onKeyDown={(e) =>
                  e.key === "Enter" && setShowAllCategories(true)
                }
                className="group cursor-pointer inline-flex items-center text-headupb2b font-medium py-2 px-4 text-md 4k:text-3xl hover:scale-x-105 transaction-delay"
              >
                View All&nbsp;
                <span className="icon-left-arrow rotate-180 text-[18px] 4k:text-3xl" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
