import React, { useState } from "react";
import Client from "../Switch/ClientPartner/Client";
import Partner from "../Switch/ClientPartner/Partner";
import { CompanyImageMap } from "@/Contants/CompanyImageMap";

export default function ReliableSupplyPartnerCarousel({
  tabText1 = "Our Trusted Partners",
  twoRows,
  increaseTextSize,
  partnerCompanyList,
  visionText = false,
}) {
  const [selected, setSelected] = useState(true);

  const handleSelect = (value) => {
    setSelected(value);
  };

  const finalList = partnerCompanyList?.map((item)=>{

    return CompanyImageMap?.[item];
  })

  return (
    <div>
      <h2 className="section_heading">{tabText1}</h2>
      <div className="my-0 mt-8">
        <Partner twoRows={twoRows} partnerCompanyList={finalList} />
      </div>
      {visionText && <label className="section_sub_text">{visionText}</label>}
    </div>
  );
}
