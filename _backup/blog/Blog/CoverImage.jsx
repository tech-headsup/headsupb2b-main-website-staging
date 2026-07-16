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
        className="w-full h-auto rounded-xl border object-fit hover:opacity-90 dark:border-neutral-800"
        fill
        unoptimized
        priority={priority}
      />
    </div>
  );

  return (
    <div className="w-full">
      {slug ? <Link href={postURL}>{image}</Link> : image}
    </div>
  );
};
