import React, { useEffect, useState } from "react";
import DockHeadsup from "@/component/Blog/DockHeadsup";
import PostAuthorInfo from "@/component/Blog/PostAuthorInfo";

function AboutAuthor({ url, post, publication }) {
  const { author } = post;
  const coAuthors = post.coAuthors || [];

  const allAuthors = publication?.isTeam ? [author, ...coAuthors] : [author];
  const [encodedUrl, setEncodedUrl] = useState("");

  useEffect(() => {
    setEncodedUrl(encodeURIComponent(url));
  }, [url]);

  return (
    <div className="mx-auto mb-5 mt-10 flex w-full flex-col gap-16 px-5 md:max-w-screen-md">
      <div className="flex-1 px-2">
        <div className="flex flex-col flex-wrap items-start md:flex-nowrap">
          <h3 className="mb-4 w-full border-b pb-2 text-base font-medium tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400">
            Written by
          </h3>
          <div className="flex w-full flex-col justify-evenly md:flex-row">
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="flex flex-col gap-12">
                {allAuthors.map((_author) => (
                  <PostAuthorInfo
                    key={_author.id.toString()}
                    author={_author}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center mt-6 md:mt-0">
              <DockHeadsup encodedUrl={encodedUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
