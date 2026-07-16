import SolarHub from "@/component/SolarHub/SolarHub";
import researchData from "@/researchdata/researchData";
import renewableEnergyData from "@/component/SolarHub/renewableEnergyData.json";

export default SolarHub;

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

  return {
    props: {
      knowledgeArticles,
      solarCategoryData: renewableEnergyData?.data || null,
      categoryProductOptions: [],
    },
    revalidate: 600,
  };
}
