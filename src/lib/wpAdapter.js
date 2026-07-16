// Maps WordPress REST `wp/v2/posts` response into the Hashnode-shaped object
// the legacy Blog components were built around. Keeps component code unchanged.

function decodeEntities(s) {
  return String(s || "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&#x27;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(s) {
  return decodeEntities(String(s || "").replace(/<[^>]+>/g, "")).trim();
}

function termsOf(wpPost, taxonomy) {
  const groups = wpPost?._embedded?.["wp:term"] || [];
  for (const g of groups) if (g[0]?.taxonomy === taxonomy) return g;
  return [];
}

function readTimeMin(html) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function buildToc(html) {
  // Parse heading text + slug IDs from rendered HTML to fake Hashnode TOC structure.
  const items = [];
  const re = /<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/gi;
  let m;
  let id = 0;
  while ((m = re.exec(html))) {
    const level = parseInt(m[1], 10);
    if (level < 2 || level > 3) continue; // only h2/h3 for TOC
    const attrs = m[2] || "";
    const text = stripHtml(m[3]);
    const slugMatch = attrs.match(/id=["']([^"']+)["']/);
    const slug = slugMatch ? slugMatch[1] : text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    items.push({
      id: `toc-${++id}`,
      level,
      slug,
      title: text,
      parentId: null,
    });
  }
  // Nest h3 under nearest preceding h2
  const nested = [];
  let lastH2 = null;
  for (const it of items) {
    if (it.level === 2) {
      lastH2 = it.id;
      nested.push(it);
    } else if (it.level === 3 && lastH2) {
      nested.push({ ...it, parentId: lastH2 });
    } else {
      nested.push(it);
    }
  }
  return nested;
}

export function wpPostToHashnodeEdge(wpPost) {
  const cover = wpPost?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  return {
    node: {
      id: String(wpPost.id),
      title: decodeEntities(wpPost.title?.rendered),
      slug: wpPost.slug,
      brief: stripHtml(wpPost.excerpt?.rendered).slice(0, 200),
      publishedAt: wpPost.date,
      coverImage: cover ? { url: cover } : null,
    },
  };
}

export function wpListToHashnodeEdges(wpPosts) {
  return (wpPosts || []).map(wpPostToHashnodeEdge);
}

export function wpPostToHashnodeDetail(wpPost, options = {}) {
  const blogBase = options.blogBase || "";
  const cover = wpPost?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const authorEmb = wpPost?._embedded?.author?.[0];
  const html = wpPost?.content?.rendered || "";
  const tags = termsOf(wpPost, "post_tag").map((t) => ({
    id: String(t.id),
    name: t.name,
    slug: t.slug,
  }));
  const cats = termsOf(wpPost, "category").map((t) => ({
    id: String(t.id),
    name: t.name,
    slug: t.slug,
  }));
  const tocItems = buildToc(html);

  return {
    id: String(wpPost.id),
    title: decodeEntities(wpPost.title?.rendered),
    subtitle: "",
    slug: wpPost.slug,
    url: `${blogBase}/${wpPost.slug}`,
    brief: stripHtml(wpPost.excerpt?.rendered),
    publishedAt: wpPost.date,
    updatedAt: wpPost.modified,
    readTimeInMinutes: readTimeMin(html),
    hasLatexInPost: false,
    coAuthors: [],
    author: {
      id: String(wpPost.author || 0),
      name: authorEmb?.name || "Headsup B2B",
      username: authorEmb?.slug || "admin",
      profilePicture:
        authorEmb?.avatar_urls?.["96"] ||
        authorEmb?.avatar_urls?.["48"] ||
        "/logo-dark.webp",
      bio: { html: authorEmb?.description ? `<p>${authorEmb.description}</p>` : "" },
    },
    content: { html, markdown: "" },
    coverImage: cover ? { url: cover } : null,
    tags,
    categories: cats,
    features: {
      tableOfContents: {
        isEnabled: tocItems.length > 1,
        items: tocItems,
      },
    },
    preferences: { disableComments: true },
    comments: { totalDocuments: 0 },
    seo: {
      title: wpPost.yoast_head_json?.title || decodeEntities(wpPost.title?.rendered),
      description:
        wpPost.yoast_head_json?.description ||
        stripHtml(wpPost.excerpt?.rendered).slice(0, 160),
    },
    ogMetaData: { image: cover },
  };
}
