import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PartnerImage = ({ ele, index, withMargin = false }) => {
  if (!ele?.imageUrl?.src) return null;

  return (
    <div
      key={index}
      className={`inline-flex items-center justify-center ${withMargin ? "mx-4" : ""} group`}
      style={{
        width: "70px",
        height: "35px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        height={35}
        width={70}
        src={ele?.imageUrl?.src}
        alt="Brand picture"
        sizes="70px"
        quality={70}
        loading={index < 4 ? "eager" : "lazy"}
        style={{
          maxWidth: "70px",
          maxHeight: "35px",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          display: "block",
          filter: "grayscale(100%)",
          transition: "filter 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
        unoptimized={ele?.imageUrl?.src?.endsWith(".svg")}
        priority={index < 4}
      />
    </div>
  );
};

export default function Partner({ twoRows = true, partnerCompanyList = [] }) {
  const partners = partnerCompanyList || [];
  const [shouldAnimateRow1, setShouldAnimateRow1] = useState(true);
  const [shouldAnimateRow2, setShouldAnimateRow2] = useState(true);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (twoRows) {
        if (row1Ref.current) {
          const containerWidth = row1Ref.current.offsetWidth;
          const midpoint = Math.ceil(partners?.length / 2);
          const contentWidth = midpoint * (70 + 32); // 70px image + 32px margin (mx-4 = 16px each side)
          setShouldAnimateRow1(contentWidth > containerWidth);
        }
        if (row2Ref.current) {
          const containerWidth = row2Ref.current.offsetWidth;
          const midpoint = Math.ceil(partners?.length / 2);
          const secondRowCount = partners.length - midpoint;
          const contentWidth = secondRowCount * (70 + 32);
          setShouldAnimateRow2(contentWidth > containerWidth);
        }
      } else {
        if (row1Ref.current) {
          const containerWidth = row1Ref.current.offsetWidth;
          const contentWidth = partners.length * (70 + 32);
          setShouldAnimateRow1(contentWidth > containerWidth);
        }
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [partners, twoRows]);

  const renderRow = (list, shouldAnimate) =>
    shouldAnimate ? (
      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        {list?.map((ele, index) => (
          <PartnerImage key={index} ele={ele} index={index} withMargin />
        ))}
      </Marquee>
    ) : (
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {list?.map((ele, index) => (
          <PartnerImage key={index} ele={ele} index={index} />
        ))}
      </div>
    );

  if (twoRows) {
    const midpoint = Math.ceil(partners?.length / 2);
    const firstRow = partners?.slice(0, midpoint);
    const secondRow = partners?.slice(midpoint);

    return (
      <div className="w-full py-6">
        <div ref={row1Ref} className="mb-6">
          {renderRow(firstRow, shouldAnimateRow1)}
        </div>
        <div ref={row2Ref}>{renderRow(secondRow, shouldAnimateRow2)}</div>
      </div>
    );
  }

  return (
    <div className="w-full py-6">
      <div ref={row1Ref}>{renderRow(partners, shouldAnimateRow1)}</div>
    </div>
  );
}