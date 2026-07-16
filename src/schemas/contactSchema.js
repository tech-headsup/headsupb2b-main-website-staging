// Contact page JSON-LD — LocalBusiness (source: B2B schema contact.pdf)
export default `
{
  "@context": "https://schema.org",
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
`;
