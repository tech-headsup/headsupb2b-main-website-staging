import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Client from "./Client";
import Partner from "./Partner";

export default function ClientPartnerSwitch({
  tabText1 = "Our Trusted Partners",
  tabText2 = "Our Happy Clients",
  disbaleTab2 = true,
  twoRows,
  increaseTextSize,
  partnerCompanyList,
  clientCompanyList,
  visionText = false,
  hr = false,
}) {
  const [selected, setSelected] = useState(true);

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="w-full">
      <h2 className="section_heading text-black text-2xl sm:text-3xl md:text-[40px] font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{tabText1}</h2>
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
  );
}
