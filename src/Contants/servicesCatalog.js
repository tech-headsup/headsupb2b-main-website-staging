/**
 * On-demand services offered on /services.
 *
 * Services are not part of the product catalogue, so the product search API
 * never returns them. The search box matches this list locally so a query like
 * "painting" or "AMC" surfaces the service alongside product results.
 *
 * `titleKey` resolves through i18n (en/hi), `keywords` stay English so the
 * English terms keep matching on the Hindi site.
 */
export const SERVICES_CATALOG = [
  {
    key: "painting",
    icon: "/Ondemand/Painting.png",
    titleKey: "services.onDemand.items.painting.title",
    fallbackTitle: "Painting & Flooring Services",
    keywords: [
      "painting", "paint", "painter", "flooring", "floor", "epoxy",
      "coating", "putty", "whitewash", "wall finish", "tiling",
    ],
  },
  {
    key: "electrical",
    icon: "/Ondemand/Electrical.png",
    titleKey: "services.onDemand.items.electrical.title",
    fallbackTitle: "Electrical Services",
    keywords: [
      "electrical", "electric", "electrician", "wiring", "panel",
      "lighting", "earthing", "cabling", "dg", "switchgear",
    ],
  },
  {
    key: "plumbing",
    icon: "/Ondemand/Plumbing.png",
    titleKey: "services.onDemand.items.plumbing.title",
    fallbackTitle: "Plumbing & Sanitary",
    keywords: [
      "plumbing", "plumber", "sanitary", "sanitaryware", "pipe", "piping",
      "drainage", "water supply", "bathroom", "toilet", "cp fittings",
    ],
  },
  {
    key: "hvac",
    icon: "/Ondemand/AC.png",
    titleKey: "services.onDemand.items.hvac.title",
    fallbackTitle: "HVAC & AC Services",
    keywords: [
      "hvac", "ac", "air conditioning", "air conditioner", "cooling",
      "ventilation", "chiller", "ducting", "vrf", "vrv", "refrigeration",
    ],
  },
  {
    key: "fire",
    icon: "/Ondemand/Fire.png",
    iconSize: 18,
    titleKey: "services.onDemand.items.fire.title",
    fallbackTitle: "Fire Fighting Systems",
    keywords: [
      "fire", "fire fighting", "firefighting", "fire safety", "sprinkler",
      "hydrant", "fire alarm", "extinguisher", "suppression",
    ],
  },
  {
    key: "amc",
    icon: "/Ondemand/ACM.png",
    titleKey: "services.onDemand.items.amc.title",
    fallbackTitle: "Annual Maintenance (AMC)",
    keywords: [
      "amc", "annual maintenance", "maintenance", "o&m", "om",
      "servicing", "facility management", "upkeep", "repair",
    ],
  },
  {
    key: "solar",
    icon: "/Ondemand/Solar.png",
    titleKey: "services.onDemand.items.solar.title",
    fallbackTitle: "Solar Plant Installation",
    keywords: [
      "solar", "solar plant", "solar installation", "rooftop solar", "epc",
      "solar panel installation", "pv", "photovoltaic", "net metering",
    ],
  },
  {
    key: "bess",
    icon: "/Ondemand/BESS.png",
    iconSize: 14,
    titleKey: "services.onDemand.items.bess.title",
    fallbackTitle: "BESS Retrofitting",
    keywords: [
      "bess", "battery", "battery energy storage", "energy storage",
      "retrofit", "retrofitting", "storage system", "backup power",
    ],
  },
  {
    key: "landscaping",
    icon: "/Ondemand/Contract.png",
    titleKey: "services.onDemand.items.landscaping.title",
    fallbackTitle: "Landscaping",
    keywords: [
      "landscaping", "landscape", "gardening", "garden", "horticulture",
      "lawn", "green area", "plantation", "irrigation",
    ],
  },
];

/** Deep link to a service card on the services page. */
export const serviceHref = (key) => `/services#service-${key}`;

const normalise = (value = "") => String(value).trim().toLowerCase();

/**
 * Services matching `query`, best match first.
 * Matches the translated title (pass `t`) and the English keyword list.
 */
export function searchServices(query, t) {
  const q = normalise(query);
  if (!q) return [];

  const translate = (service) => {
    if (typeof t !== "function") return service.fallbackTitle;
    const value = t(service.titleKey);
    return value && value !== service.titleKey ? value : service.fallbackTitle;
  };

  return SERVICES_CATALOG.map((service) => {
    const title = translate(service);
    const haystacks = [
      normalise(title),
      normalise(service.fallbackTitle),
      ...service.keywords.map(normalise),
    ];

    // Match on word starts only — a mid-word hit ("ac" inside "backup")
    // drags in unrelated services.
    // 0 = whole value starts with the query, 1 = some word does, -1 = no match.
    let score = -1;
    for (const hay of haystacks) {
      if (hay.startsWith(q)) { score = 0; break; }
      if (hay.split(/[^a-z0-9&]+/i).some((word) => word.startsWith(q))) {
        score = score === -1 ? 1 : score;
      }
    }

    return score === -1 ? null : { ...service, title, score };
  })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score);
}
