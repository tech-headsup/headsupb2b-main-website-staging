import React from "react";
import OfficeAddress from "./OfficeAddress";
import Category from "./Category";
import Company from "./Company";
import Support from "./Support";
import FollowUs from "./FollowUs";
import Copyright from "./Copyright";
import Image from "next/image";
import LogoWhite from "@/assets/images/logo-light.png";
import Download from "./Download";

export default function Footer() {

  return (
    <div className="bg-[#4A3772] text-white ll:pt-10 ll:pb-3 ms:pb-14 ms:pt-8">
      <div className="max-w-[1280px] mx-auto px-6 t:px-12 l:px-8">
        {/* HEADSUP B2B logo - visible only on mobile and at the top */}
        <div className="mb-6">
          <Image
            src={LogoWhite}
            height={30}
            className="4k:w-[350px]"
            alt="HEADSUP B2B"
          />
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="">
            <Category />
          </div>
        </div>

        <div className="grid grid-cols-1 ms:grid-cols-2 l:grid-cols-4 gap-4 l:gap-28">
          {/* Company section */}
          <div className="ms:col-span-1 l:col-span-1 ms:order-1 l:order-3 m:order-3">
            <Company />
          </div>

          {/* Support section */}
          <div className="ms:col-span-1 l:col-span-1 ms:order-2 l:order-4 m:order-4">
            <Support />
          </div>

          {/* Office Address with logo (logo hidden on mobile) */}
          <div className="ms:col-span-1 l:col-span-1 ms:order-2 l:order-1 m:order-1">
            <OfficeAddress hideLogo={true} />
          </div>

          {/* Follow Us section */}
          <div className="ms:col-span-2 l:col-span-1 ms:order-4 l:order-2 m:order-2">
            <FollowUs />
            <div className="mt-5">
              <Download/>
            </div>
          </div>
        </div>

        <div className="text-center pt-6">
          <Copyright />
        </div>
      </div>
    </div>
  );
}
