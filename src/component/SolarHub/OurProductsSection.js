"use client";

import React, { useState, useEffect } from "react";
import ProductCardv2 from "@/component/Card/ProductCardv2";

export default function OurProductsSection({ categoryData, categoryProductOptions = [] }) {
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    categoryData?.subCategories?.[0] || null
  );

  useEffect(() => {
    if (!selectedSubCategory && categoryData?.subCategories?.[0]) {
      setSelectedSubCategory(categoryData.subCategories[0]);
    }
  }, [categoryData, selectedSubCategory]);

  if (!categoryData) return null;

  return (
    <section className="section section-no-top" style={{ paddingBottom: 40 }}>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <h2 className="section_heading text-center text-[#111] text-3xl md:text-[40px] font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Our Products
        </h2>

        <div className="mt-8 ll:mt-[70px] flex flex-wrap gap-2 justify-center">
          {categoryData?.subCategories?.map((item) => {
            const isActive = selectedSubCategory?.name === item?.name;
            const selectedClass = isActive
              ? "bg-[#4A3772] text-white"
              : "bg-[#4A377236] text-[#4A3772]";
            return (
              <button
                key={item?.name}
                onClick={() => setSelectedSubCategory(item)}
                className={`px-7 ll:px-9 py-3 rounded-full text-base ll:text-xl font-semibold hover:bg-[#4A3772] hover:text-white transition-colors ${selectedClass}`}
              >
                <h3 className="inline-block">{item?.name}</h3>
              </button>
            );
          })}
        </div>

        <div className="bg-white flex flex-col px-2 ll:px-10 py-8 pb-8 mt-5 rounded-2xl">
          <div className="w-full flex justify-between items-center">
            <span className="text-base font-semibold capitalize text-gray-800 truncate">
              {`Home > ${categoryData?.name} > ${selectedSubCategory?.name}`}
            </span>
            <span className="text-base hidden sm:inline font-semibold text-gray-600">
              {selectedSubCategory?.products?.length === 1
                ? `1 Product`
                : `${selectedSubCategory?.products?.length || 0} Products`}
            </span>
          </div>
          <hr className="border-b mt-6 border-[#B6B6B6] w-full" />
          <div className="w-full mt-5">
            {categoryData?.subCategories?.map((subCat) => {
              const isVisible = selectedSubCategory?.name === subCat?.name;
              const products = subCat?.products || [];
              return (
                <React.Fragment key={`op-section-${subCat.name}`}>
                  {products.length > 0 ? (
                    <div
                      className={
                        !isVisible
                          ? "hidden"
                          : "grid grid-cols-1 t:grid-cols-2 l:grid-cols-3 4k:grid-cols-5 gap-2 sm:gap-5"
                      }
                    >
                      {products.map((item) => (
                        <ProductCardv2
                          key={item?.name}
                          product={item}
                          categoryName={categoryData?.name}
                          categoryProductOptions={categoryProductOptions}
                        />
                      ))}
                    </div>
                  ) : (
                    isVisible && (
                      <div className="w-full py-6 sm:py-8 text-center">
                        <p className="text-xs sm:text-sm md:text-base text-gray-500">
                          No products available in {subCat.name}
                        </p>
                      </div>
                    )
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
