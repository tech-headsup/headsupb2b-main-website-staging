import React, { useState } from "react";
import Image from "next/image";
import { resizeImage } from "@/Utils/resizeImage";
import { CoverImage } from "@/component/Blog/CoverImage";
import { ReadTimeInMinutes } from "@/component/Blog/ReadTimeInMinutes";
import { PostTitle } from "@/component/Blog/PostTitle";

// Import local assets
import blogAd from "../../assets/blog/Blog ad-02.png";
import emergeSolutionAdMobile from "../../assets/blog/EmergeSolutionAdMobile.png";

export const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  readTimeInMinutes,
  url,
  post, // Passing entire post for coAuthors if needed
}) => {
  // Shared content components
  const titleComponent = <PostTitle>{title}</PostTitle>;

  const metaComponent = (
    <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2 px-2 text-slate-700 md:px-0 dark:text-neutral-300">
      <div className="mt-7 mb-4 flex w-full flex-col items-center justify-center md:mb-0 md:w-auto md:flex-row md:justify-start">
        <ReadTimeInMinutes
          readTimeInMinutes={readTimeInMinutes}
          Date={date}
          url={url}
        />
      </div>
    </div>
  );

  const coverImageComponent = coverImage && (
    <div className="w-full mt-5">
      <CoverImage
        title={title}
        src={resizeImage(coverImage, { w: 1600, h: 840, c: "thumb" })}
        priority={true}
      />
    </div>
  );

  return (
    <>
      {/* Single Title */}
      {titleComponent}

      {/* Desktop Layout with Sidebar Ads */}
      <div className="hidden lg:grid lg:grid-cols-[160px_minmax(0,1fr)_160px] lg:gap-6 lg:items-start">
        {/* Left Ad */}
        <div className="w-full" id="leftAd">
          <a
            href="https://www.headsupb2b.com/metal-solutions"
            rel="noopener noreferrer"
          >
            <Image
              src={blogAd}
              alt="Emerge Solution Advertisement"
              className="h-auto w-full rounded-lg border-2 border-white shadow-lg"
            />
          </a>
        </div>

        {/* PostHeader Content */}
        <div className="w-full">
          {metaComponent}
          {coverImageComponent}
        </div>

        {/* Right Ad */}
        <div className="w-full" id="rightAd">
          <a
            href="https://www.headsupb2b.com/metal-solutions"
            rel="noopener noreferrer"
          >
            <Image
              src={blogAd}
              alt="Emerge Solution Advertisement"
              className="h-auto w-full rounded-lg border-2 border-white shadow-lg"
            />
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {metaComponent}
        {coverImageComponent}

        {/* Mobile Ad */}
        <div className="mt-6 w-full">
          <a href="#" rel="noopener noreferrer">
            <Image
              src={emergeSolutionAdMobile}
              alt="Emerge Solution Advertisement Mobile"
              className="h-auto w-full rounded-lg border-2 border-white shadow-lg"
            />
          </a>
        </div>
      </div>
    </>
  );
};
