// Home page JSON-LD — Organization + WebSite + LocalBusiness (source: B2B schema.pdf)
// Bundled under a single @graph so the cross-references (@id) resolve correctly.
export default `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.headsupb2b.com/#organization",
      "name": "Headsup B2B",
      "url": "https://www.headsupb2b.com",
      "logo": "https://www.headsupb2b.com/logo-dark.webp",
      "email": "info@headsupb2b.com",
      "telephone": "+918595736388",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd floor A4, Aurobindo Marg, Sarvodaya Enclave",
        "addressLocality": "New Delhi",
        "postalCode": "110017",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/headsupb2b",
        "https://www.instagram.com/headsupb2b/",
        "https://www.linkedin.com/company/headsupb2b/",
        "https://www.youtube.com/@HeadsupB2B",
        "https://twitter.com/headsupb2b"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.headsupb2b.com/#website",
      "name": "Headsup B2B",
      "url": "https://www.headsupb2b.com",
      "publisher": {
        "@id": "https://www.headsupb2b.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.headsupb2b.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.headsupb2b.com/#localbusiness",
      "name": "Headsup B2B",
      "url": "https://www.headsupb2b.com",
      "image": "https://www.headsupb2b.com/logo-dark.webp",
      "telephone": "+918595736388",
      "email": "info@headsupb2b.com",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd floor A4, Aurobindo Marg, Sarvodaya Enclave",
        "addressLocality": "New Delhi",
        "postalCode": "110017",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5279118,
        "longitude": 77.2088986
      },
      "sameAs": [
        "https://www.facebook.com/headsupb2b",
        "https://www.instagram.com/headsupb2b/",
        "https://www.linkedin.com/company/headsupb2b/",
        "https://www.youtube.com/@HeadsupB2B",
        "https://twitter.com/headsupb2b"
      ]
    }
  ]
}
`;
