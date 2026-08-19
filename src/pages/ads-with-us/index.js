import React from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "./HeroSection";
import MetricsCards from "./MetricsCards";
import FeaturesGrid from "./FeaturesGrid";
import StatsBanner from "./StatsBanner";
import MediaKitCTA from "./MediaKitCTA";
import NewCTASection from "./NewCTASection";
import { NextSeo } from "next-seo";
import { getAllProducts } from "@/Contants/APIEndpoint";

function index({productData}) {
  const { t } = useTranslation();
  return (
    <div>
      <NextSeo
        title={t("ads.meta.title")}
        description={t("ads.meta.description")}
        canonical={"https://www.headsupb2b.com/ads-with-us"}
      />
      <main className="bg-gray-50 p-10 ll:mt-24">
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
