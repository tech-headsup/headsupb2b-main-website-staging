import { Gradient } from "@/Contants/constant";
import React, { useState } from "react";
import Ripples from "react-ripples";
import Modal from "@/component/Modal/Modal";
export default function CustomRipple({
  text,
  className,
  style,
  onClick,
  isloading,
  onSelectedRaiseQuote,
}) {
  return (
    <Ripples
      className={`px-4 py-2 font-bold  tracking-wider rounded-md mm:text-xs ${className} ${
        onSelectedRaiseQuote
          ? "bg-white text-black"
          : "bg-[#80EBF7] group-hover:font-medium group-hover:text-white group-hover:bg-[#4A3772]"
      }`}
      style={{
        backgroundColor: onSelectedRaiseQuote ? "text-[#4A3772]" : "transparent",
      }}

      type="button"

      onClick={() => {
        onClick ? onClick() : {};
      }}
    >
      <label className="cursor-pointer"> {text} </label>
    </Ripples>
  );
}
