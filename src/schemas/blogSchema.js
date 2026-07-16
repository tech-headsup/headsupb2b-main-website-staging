// Blog post JSON-LD — BlogPosting + BreadcrumbList (source: B2B schema blog.pdf)
// Built dynamically per post. Returns a JSON string for dangerouslySetInnerHTML.
export default function blogSchema({
  title,
  description,
  image,
  url,
  datePublished,
  dateModified,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: title,
        description: description,
        image: image,
        url: url,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
          "@type": "Organization",
          name: "Headsup B2B",
          "@id": "https://www.headsupb2b.com/#organization",
        },
        publisher: {
          "@type": "Organization",
          name: "Headsup B2B",
          logo: {
            "@type": "ImageObject",
            url: "https://www.headsupb2b.com/logo-dark.webp",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.headsupb2b.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.headsupb2b.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
    ],
  };
  return JSON.stringify(schema);
}
