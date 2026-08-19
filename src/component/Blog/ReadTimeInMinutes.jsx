import React, { useEffect, useState } from "react";
import { DateFormatter } from "@/component/Blog/DateFormatter";
import DockHeadsup from "@/component/Blog/DockHeadsup";
import { IoBookOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";


export const ReadTimeInMinutes = ({ readTimeInMinutes, url, Date }) => {
  const { t } = useTranslation();
  const [encodedUrl, setEncodedUrl] = useState("");

  useEffect(() => {
    setEncodedUrl(encodeURIComponent(url));
  }, [url]);

  return (
    <div className="flex flex-col items-center md:flex-row">
      <span className="ms:block mx-3 hidden font-bold text-slate-500 md:block">
        &middot;
      </span>
      <DateFormatter dateString={Date} />
      <span className="flex flex-col items-center justify-center md:flex-row">
        {readTimeInMinutes && (
          <span className="ms:block mx-3 hidden font-bold text-slate-500 md:block">
            &middot;
          </span>
        )}
        <span className="flex flex-row items-center gap-2">
          <IoBookOutline />
          <span>{t("blogPage.minRead", { count: readTimeInMinutes })}</span>
        </span>
      </span>
      <span className="ms:block mx-3 hidden font-bold text-slate-500">
        &middot;
      </span>
      <DockHeadsup encodedUrl={encodedUrl} />
    </div>
  );
};

export default ReadTimeInMinutes;
