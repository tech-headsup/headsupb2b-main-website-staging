// lib/page-metadata.js

export function getPageSeoProps(config) {  // ← must have `export`
  const {
    title,
    description,
    keywords = "",
    canonicalUrl,
    imageUrl = "https://headsupb2b.com/og/default.jpg",
    publishedDate = "2026-01-01",
    modifiedDate = "2026-01-01",
    twitterHandle = "@headsupb2b",
  } = config;

  return { title, description, keywords, canonicalUrl, imageUrl, publishedDate, modifiedDate, twitterHandle };
}
