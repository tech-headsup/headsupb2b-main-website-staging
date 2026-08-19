import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import Client from "./Client";
import Partner from "./Partner";

export default function ClientPartnerSwitch({
  tabText1,
  tabText2,
  disbaleTab2 = true,
  twoRows,
  increaseTextSize,
  partnerCompanyList,
  clientCompanyList,
  visionText = false,
  hr = false,
}) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(true);
  const resolvedTab1 = tabText1 ?? t("home.trustedPartners");
  const resolvedTab2 = tabText2 ?? t("home.happyClients");

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="-mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-28">
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
    <div className="w-full">
      <h2 className="section_heading text-black text-2xl sm:text-3xl md:text-[40px] font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{resolvedTab1}</h2>
      <div className="my-0 mt-5 w-full overflow-hidden">
        {selected ? (
          <Partner twoRows={twoRows} partnerCompanyList={partnerCompanyList} />
        ) : (
          <Client clientCompanyList={clientCompanyList} />
        )}
      </div>
      {visionText && (
        <label className="section_sub_text">
          {visionText}
        </label>
      )}
      {hr && <hr className="border border-[#B6B6B6]" />}
    </div>
    </div>
    </div>
  );
}
