const Sitemap = () => null;

const SITE = "https://www.headsupb2b.com";
const WP_API =
  process.env.WP_API_URL ||
  process.env.NEXT_PUBLIC_WP_API_URL ||
  "https://blogs.headsupb2b.com/wp-json/wp/v2";
const CATEGORY_API =
  process.env.NEXT_PUBLIC_BASE_URL
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/categories`
    : "https://api-dev.headsupb2b.com/api/categories";

const STATIC_PAGES = [
  { path: "", priority: "1.00", changefreq: "daily" },
  { path: "blog", priority: "0.90", changefreq: "daily" },
  { path: "about", priority: "0.80", changefreq: "monthly" },
  { path: "contact", priority: "0.80", changefreq: "monthly" },
  { path: "careers", priority: "0.70", changefreq: "weekly" },
  { path: "services", priority: "0.80", changefreq: "monthly" },
  { path: "ads-with-us", priority: "0.80", changefreq: "monthly" },
  { path: "privacy-policy", priority: "0.30", changefreq: "yearly" },
  { path: "news-press-release", priority: "0.70", changefreq: "weekly" },
  { path: "thank-you", priority: "0.20", changefreq: "yearly" },
  { path: "we-have-raised-funds", priority: "0.50", changefreq: "yearly" },
];

function urlNode(loc, lastmod, priority, changefreq) {
  return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

async function fetchCategoryLinks() {
  try {
    const res = await fetch(CATEGORY_API, { headers: { Accept: "application/json" } });
    if (!res.ok) return [];
    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) return [];
    const payload = await res.json();
    const list = Array.isArray(payload?.data) ? payload.data : Array.isArray(payload) ? payload : [];
    const links = [];
    for (const c of list) {
      if (!c?.slug) continue;
      links.push({ slug: c.slug, type: "category", updatedAt: c.updatedAt || c.updated_at });
      if (Array.isArray(c.subCategories)) {
        for (const s of c.subCategories) {
          if (!s?.slug) continue;
          links.push({
            slug: `${c.slug}/${s.slug}`,
            type: "subcategory",
            updatedAt: s.updatedAt || s.updated_at,
          });
        }
      }
    }
    return links;
  } catch {
    return [];
  }
}

async function fetchAllWpPosts() {
  const perPage = 100;
  const out = [];
  try {
    const firstUrl = `${WP_API}/posts?per_page=${perPage}&page=1&_fields=slug,modified,date`;
    const first = await fetch(firstUrl, { headers: { Accept: "application/json" } });
    if (!first.ok) return out;
    const totalPages = parseInt(first.headers.get("x-wp-totalpages") || "1", 10);
    const page1 = await first.json();
    for (const p of page1) out.push(p);
    if (totalPages > 1) {
      const rest = await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, i) =>
          fetch(`${WP_API}/posts?per_page=${perPage}&page=${i + 2}&_fields=slug,modified,date`, {
            headers: { Accept: "application/json" },
          })
            .then((r) => (r.ok ? r.json() : []))
            .catch(() => [])
        )
      );
      for (const batch of rest) for (const p of batch) out.push(p);
    }
  } catch {
    /* ignore */
  }
  return out;
}

export const getServerSideProps = async ({ res }) => {
  const now = new Date().toISOString();

  const [categories, posts] = await Promise.all([
    fetchCategoryLinks(),
    fetchAllWpPosts(),
  ]);

  const staticXml = STATIC_PAGES.map((p) => {
    const loc = p.path ? `${SITE}/${p.path}` : `${SITE}/`;
    return urlNode(loc, now, p.priority, p.changefreq);
  }).join("");

  const catXml = categories
    .map((c) => {
      const lastmod = c.updatedAt ? new Date(c.updatedAt).toISOString() : now;
      const priority = c.type === "category" ? "0.90" : "0.80";
      return urlNode(`${SITE}/${c.slug}`, lastmod, priority, "weekly");
    })
    .join("");

  const blogXml = posts
    .filter((p) => p?.slug)
    .map((p) => {
      const lastmod = p.modified ? new Date(p.modified).toISOString() : now;
      return urlNode(`${SITE}/blog/${p.slug}`, lastmod, "0.80", "weekly");
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${catXml}
${blogXml}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
