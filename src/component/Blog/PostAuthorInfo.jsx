import React from "react";
import Image from "next/image";
import { resizeImage } from "@/Utils/resizeImage";

function PostAuthorInfo({ author }) {
  return (
    <div className="flex w-full flex-1 flex-col md:flex-row">
      <div className="mb-4 flex w-full flex-1 flex-row md:mb-0 ">
        <div className="mr-4 flex flex-row md:mb-0">
          <a
            href={`https://hashnode.com/@${author.username}`}
            className="block h-10 w-10 overflow-hidden rounded-full border dark:border-slate-800 md:h-14 md:w-14"
          >
            <Image
              className="block rounded-full"
              src={resizeImage(author.profilePicture, {
                w: 256,
                h: 256,
                c: "thumb",
              })}
              width={256}
              height={256}
              alt={author.name}
              unoptimized
            />
          </a>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-row items-center md:mb-1">
            <h3 className="font-sans text-lg font-semibold text-slate-800 dark:text-slate-100">
              <a
                href={`https://hashnode.com/@${author.username}`}
                className="hover:underline"
              >
                {author.name}
              </a>
            </h3>
          </div>
          {author.bio?.html && (
            <div className="hidden pr-2 md:block">
              <div
                className="prose text-sm text-slate-600 dark:prose-dark dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: author.bio?.html }}
              />
            </div>
          )}
        </div>
      </div>
      {author.bio?.html && (
        <div className="mb-4 block md:hidden">
          <div
            className="prose text-sm text-slate-600 dark:prose-dark "
            dangerouslySetInnerHTML={{ __html: author.bio?.html }}
          />
        </div>
      )}
    </div>
  );
}

export default PostAuthorInfo;
