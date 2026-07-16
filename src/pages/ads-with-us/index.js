import React from "react";
import HeroSection from "./HeroSection";
import MetricsCards from "./MetricsCards";
import FeaturesGrid from "./FeaturesGrid";
import StatsBanner from "./StatsBanner";
import MediaKitCTA from "./MediaKitCTA";
import NewCTASection from "./NewCTASection";
import { NextSeo } from "next-seo";
import { getAllProducts } from "@/Contants/APIEndpoint";

function index({productData}) {
  return (
    <div>
      <NextSeo
        title={
          "Promote Your Products and Get Traffic/ Lead | Advertise with us"
        }
        description={
          "Promote Your Products and Get Traffic/ Lead | Advertise with us"
        }
        canonical={"https://www.headsupb2b.com/ads-with-us"}
      />
      <main className="bg-gray-50 mb-10 p-10 ll:mt-24">
        <HeroSection productOptions={productData} />
        <MetricsCards />
        <StatsBanner productOptions={productData} />
        <FeaturesGrid />
        <MediaKitCTA productOptions={productData} />
        <NewCTASection productOptions={productData} />
      </main>
    </div>
  );
}

export default index;

export async function getStaticProps(context) {
  let productData = await fetch(getAllProducts);
  productData = await productData?.json();

  if (!productData) {
    return {
      notFound: true,
    };
  }

  const mappedArray = productData?.data
      ?.map((item) => ({
        label: item.name,
        value: item._id,
      }))
      .sort((a, b) => {
        const labelA = a.label.toUpperCase(); // Ignore case
        const labelB = b.label.toUpperCase(); // Ignore case
  
        if (labelA < labelB) {
          return -1; // 'a' comes before 'b'
        }
        if (labelA > labelB) {
          return 1; // 'a' comes after 'b'
        }
        return 0; // names are equal
      });


  return {
    props: {
      productData: mappedArray,
    },
    revalidate: 300,
  };
}
