import researchData from "@/researchdata/researchData";

const Sitemap1 = () => null;

const SITE = "https://www.headsupb2b.com";

function urlNode(loc, lastmod, priority, changefreq) {
  return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

export const getServerSideProps = async ({ res }) => {
  const now = new Date().toISOString();

  const indexXml = urlNode(`${SITE}/research`, now, "0.80", "weekly");

  const researchXml = (researchData || [])
    .filter((r) => r?.slug)
    .map((r) => {
      const lastmod = r.date ? new Date(r.date).toISOString() : now;
      return urlNode(`${SITE}/research/${r.slug}`, lastmod, "0.70", "monthly");
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexXml}
${researchXml}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap1;
