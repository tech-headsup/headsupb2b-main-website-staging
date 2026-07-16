import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CoverImage = ({ title, src, slug, priority = false }) => {
  const postURL = `/blog/${slug}`;
  const image = (
    <div className="relative aspect-[16/9] w-full">
      <Image
        src={src}
        alt={title}
        className="w-full h-auto rounded-xl border object-cover hover:opacity-90 dark:border-neutral-800"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
        quality={70}
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );

  return (
    <div className="w-full">
      {slug ? <Link href={postURL}>{image}</Link> : image}
    </div>
  );
};
