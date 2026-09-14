/**
 * Canonical display order for the top-level product categories.
 *
 * The category API does not return them in a fixed order, so every place that
 * renders the list (navbar dropdown, mobile menu, footer marquee, home grid)
 * sorts through `sortCategories` to keep the order identical site-wide.
 *
 * Matching is by slug — names get re-labelled from time to time, slugs do not.
 * Anything not listed here falls to the end, keeping its relative order.
 */
export const CATEGORY_ORDER = [
  "metal-solutions",
  "solar-solutions",
  "industrial-automation-solutions",
  "road-safety-solutions",
  "building-materials",
  "petro-chemical-solutions",
  "electrical-solutions",
  "biomass-energy-solutions", // Biomass
  "industrial-safety-solutions",
  "agro-commodities",
  "drainage-irrigation--utility-solutions",
  "high-mast-poles",
];

/** Older slugs that still point at a category in the list above. */
const SLUG_ALIASES = {
  "renewable-energy-solutions": "solar-solutions",
  "renewable-solutions": "solar-solutions",
};

/** Fallback for the odd consumer whose payload has no slug. */
const NAME_TO_SLUG = {
  "metal solutions": "metal-solutions",
  "solar solutions": "solar-solutions",
  "renewable solutions": "solar-solutions",
  "renewable energy solutions": "solar-solutions",
  "industrial automation solutions": "industrial-automation-solutions",
  "road safety solutions": "road-safety-solutions",
  "building materials": "building-materials",
  "petro-chemical solutions": "petro-chemical-solutions",
  "electrical solutions": "electrical-solutions",
  biomass: "biomass-energy-solutions",
  "biomass energy solutions": "biomass-energy-solutions",
  "industrial safety solutions": "industrial-safety-solutions",
  "agro-commodities": "agro-commodities",
  "drainage, irrigation & utility solutions":
    "drainage-irrigation--utility-solutions",
  "high-mast poles": "high-mast-poles",
};

const normalise = (value = "") =>
  String(value).trim().toLowerCase().replace(/^\/+/, "");

function orderIndex(category) {
  const slug = normalise(category?.slug);
  let idx = CATEGORY_ORDER.indexOf(SLUG_ALIASES[slug] || slug);
  if (idx !== -1) return idx;

  const mapped = NAME_TO_SLUG[normalise(category?.name)];
  idx = mapped ? CATEGORY_ORDER.indexOf(mapped) : -1;
  return idx === -1 ? CATEGORY_ORDER.length : idx;
}

/** Returns a new array ordered by CATEGORY_ORDER; input is left untouched. */
export function sortCategories(categories = []) {
  if (!Array.isArray(categories)) return categories;
  return [...categories]
    .map((category, i) => ({ category, i }))
    .sort((a, b) => orderIndex(a.category) - orderIndex(b.category) || a.i - b.i)
    .map(({ category }) => category);
}
