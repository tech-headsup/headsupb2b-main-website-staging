import SolarHub from "@/component/SolarHub/SolarHub";
import researchData from "@/researchdata/researchData";
import renewableEnergyData from "@/component/SolarHub/renewableEnergyData.json";
import { getAllCategoryData, getCategoryData } from "@/Contants/APIEndpoint";

const RENEWABLE_CATEGORY_SLUG = "renewable-energy-solutions";

export default SolarHub;

const transformCategoriesResponse = (data) => {
  if (!data || !Array.isArray(data)) return [];
  return data.map((category) => ({
    label: category?.name,
    value: category?.name,
    products: (category?.subCategories || []).flatMap((subCategory) =>
      (subCategory?.products || []).map((product) => ({
        label: product?.name,
        value: product?.name,
        subCategory: subCategory?.name,
      }))
    ),
  }));
};

export async function getStaticProps() {
  const knowledgeArticles = [...researchData]
    .filter((r) => r?.slug && r?.title)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 3)
    .map((r) => {
      let image = null;
      let width = 1200;
      let height = 630;
      if (r.image && typeof r.image === "object") {
        image = r.image.src || null;
        width = r.image.width || width;
        height = r.image.height || height;
      } else if (typeof r.image === "string") {
        image = r.image;
      }
      return {
        tag: "Research",
        title: r.title,
        href: `/research/${r.slug}`,
        date: r.date,
        image,
        width,
        height,
      };
    });

  let categoryProductOptions = [];
  try {
    const res = await fetch(getAllCategoryData);
    const allCategoryData = await res.json();
    categoryProductOptions = transformCategoriesResponse(allCategoryData?.data);
  } catch (err) {
    console.warn("Solar Hub: failed to fetch category options", err);
  }

  let solarCategoryData = renewableEnergyData?.data || null;
  try {
    const res = await fetch(`${getCategoryData}/${RENEWABLE_CATEGORY_SLUG}`);
    if (res.ok) {
      const liveData = await res.json();
      if (liveData?.data && Object.keys(liveData.data).length > 0) {
        solarCategoryData = liveData.data;
      }
    }
  } catch (err) {
    console.warn("Solar Hub: failed to fetch renewable category, using static fallback", err);
  }

  return {
    props: {
      knowledgeArticles,
      solarCategoryData,
      categoryProductOptions,
    },
    revalidate: 600,
  };
}
