import React, { useEffect, useState } from "react";
import DockHeadsup from "@/component/Blog/DockHeadsup";

function AboutAuthor({ url }) {
  const [encodedUrl, setEncodedUrl] = useState("");

  useEffect(() => {
    setEncodedUrl(encodeURIComponent(url));
  }, [url]);

  return (
    <div className="mx-auto mb-5 mt-10 flex w-full flex-col gap-16 px-5 md:max-w-screen-md">
      <div className="flex-1 px-2">
        <div className="flex flex-col flex-wrap items-start md:flex-nowrap">
          <h3 className="mb-4 w-full border-b pb-2 text-base font-medium tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400">
            Share
          </h3>
          <div className="flex w-full items-center justify-center">
            <DockHeadsup encodedUrl={encodedUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
