export const HERO_STATS = [
  { value: "11,000+ MT", label: "Solar structures\nsupplied" },
  { value: "40+ MW", label: "Mandated across\nRajasthan & Jharkhand" },
  { value: "10+ ", label: "Tier-1 \nBrands" },
  { value: "Up to 61 Days*", label: "Collateral-free credit\n*T&C apply" },
];

export const SOLAR_FAQ = [
  {
    question:
      "What is the difference between N-Type TOPCon and Mono PERC solar panels?",
    answer:
      "TOPCon uses newer N-Type silicon wafers, delivering higher efficiency (22%+), slower degradation, and better heat performance. Mono PERC uses older P-Type silicon — reliable and widely available but slightly lower on all three metrics. Choose TOPCon for long-term output; Mono PERC for budget flexibility.",
  },
  {
    question:
      "How do bifacial solar panels generate extra power, and where do they work best?",
    answer:
      "Bifacial panels produce electricity from both sides — the rear captures reflected sunlight. Real-world rear-side gain in India is 8–15%, depending on mounting height and ground reflectivity. Best suited for ground-mount and carport installations; not effective on flush rooftop mounts where the rear gets no light.",
  },
  {
    question:
      "What does ALMM approval mean, and why does it matter for my project?",
    answer:
      "ALMM (Approved List of Models and Manufacturers) is an MNRE-maintained list. Solar panels used in government-funded or subsidised projects must be ALMM-listed. Even for private projects, it serves as a quality benchmark — confirming the module has passed domestic testing and meets Indian performance standards.",
  },
  {
    question:
      "How do I decide between a string inverter, a central inverter, and a hybrid inverter?",
    answer:
      "String inverters suit small-to-mid rooftop systems. Central inverters handle MW-scale utility projects. Hybrid inverters manage both solar conversion and battery charging in one unit — ideal for systems with energy storage or backup power needs. Your system size and storage requirement determine the right fit.",
  },
  {
    question:
      "What is a BMS in a battery, and what protections should I look for?",
    answer:
      "BMS (Battery Management System) is the electronic controller inside every lithium battery. It monitors cell health and protects against overcharge, over-discharge, over-current, short circuit, and over-temperature. Without a BMS, the battery is a safety risk. All batteries on our page include full BMS protection.",
  },
  {
    question:
      "Can solar panels withstand heavy rain, hail, and extreme Indian summers?",
    answer:
      "Yes. Panels certified to IEC 61215 and IEC 61730 are tested against hail impact, high winds, humidity, and thermal cycling. Heat reduces output by roughly 0.3–0.5% per degree above 25°C, but this is factored into system design. ALMM-listed panels are built for 25+ years in Indian conditions.",
  },
  {
    question:
      "What is net metering, and do I need it for a rooftop solar installation?",
    answer:
      "Net metering lets you export excess solar electricity to the grid and receive a bill credit. It is available for grid-connected rooftop systems under state-specific policies and is essential for maximising financial returns. Off-grid and hybrid systems with battery storage do not require net metering.",
  },
  {
    question:
      "Why do some bundles include Industrial Safety Solutions — is safety gear really part of a solar procurement?",
    answer:
      "Yes. Solar installations involve working at height, heavy modules, and live DC wiring. MNRE guidelines require PPE — helmets, gloves, harnesses, safety jackets — at every site. Including safety gear in the bundle ensures the crew is equipped from day one without a separate procurement cycle.",
  },
  {
    question: "How much rooftop area do I need to install a solar system?",
    answer:
      "Roughly 10 square metres (100 sq. ft.) of shadow-free rooftop area per 1 kW of capacity using standard monocrystalline panels. Higher-efficiency TOPCon panels reduce the space needed by 10–15%. Share your roof area and electricity consumption through the enquiry form for a sizing recommendation.",
  },
  {
    question:
      "What is the typical lifespan of a solar panel, and how does performance degrade over time?",
    answer:
      "Quality panels last 25–30 years. Manufacturers guarantee at least 80% output after 25 years. TOPCon panels degrade slower (~0.4%/year) than P-Type panels (~0.5–0.7%/year). Regular cleaning and avoiding physical damage are the two main factors that keep real-world performance close to the warranty curve.",
  },
  {
    question:
      "When should I choose an LFP battery over a standard Lithium-Ion battery for my project?",
    answer:
      "Choose LFP for projects needing long cycle life and daily deep discharge — warehouses, EV charging hubs, telecom towers. LFP delivers 6,000+ cycles versus 2,000–3,000 for standard Li-ion. Choose Li-ion where space is tight and weight matters. For solar storage with daily cycling, LFP pays for itself over time.",
  },
  {
    question:
      "What is an APFC panel, and why is it included in warehouse solar bundles?",
    answer:
      "APFC (Automatic Power Factor Correction) panels maintain healthy power factor by switching capacitor banks automatically. DISCOMs penalise commercial consumers if power factor drops below 0.9. When a warehouse adds solar to its existing electrical setup, an APFC panel keeps the combined load compliant and avoids penalty charges.",
  },
];

const DEFAULT_HOW_STEPS = [
  {
    step: 1,
    title: "Add to Cart & Submit Quote",
    desc: "Add items to your cart and request a quote",
  },
  {
    step: 2,
    title: "Get Quote in 24 Hrs",
    desc: "Availability Confirmation & Quote Within a Day",
  },
  {
    step: 3,
    title: "Delivery Options Available",
    desc: "Select delivery to your home or warehouse pickup",
  },
];

const buildDefaultDetails = (skuSize) => [
  { label: "SKU", value: `${skuSize}_BOS_DCR_TOPCON` },
  { label: "Shipping", value: "Free Shipping" },
  { label: "T&C", value: "Non Returnable" },
  { label: "Type", value: "Ready To Install Solar Kit" },
  { label: "Subsidy", value: "Eligible for Government Subsidies" },
];

const KIT_1_1_SPEC_ROWS = [
  {
    component: "Solar Panel",
    specifications: "570-650 Wp On grid TOPCon Mono Solar Module",
    brand: "ALMM",
    qty: 2,
    units: "Nos.",
  },
  {
    component: "Solar MPPT / Inverter",
    specifications: "Solar MPPT (1.1 kW) ALMM",
    brand: "ALMM",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "MC4 Connectors",
    specifications: "M-160 / F-160",
    brand: "NINGBO",
    qty: 2,
    units: "Nos.",
  },
  {
    component: "ACDB To Inverter Cable",
    specifications: "2C x 2.5 Sq.mm Cu. Flexible, 1.1 KVA",
    brand: "POLYCAB",
    qty: 10,
    units: "Mtr.",
  },
  {
    component: "DC Cable",
    specifications: "1C x 4 Sqmm Cu. Flexible",
    brand: "POLYCAB",
    qty: 10,
    units: "Mtr.",
  },
  {
    component: "Earthing Cable",
    specifications: "1C x 4 Sqmm Cu. Flexible",
    brand: "POLYCAB",
    qty: 10,
    units: "Mtr.",
  },
  {
    component: "Earthing Cable",
    specifications: "1C x 16 Sqmm AL Flexible",
    brand: "POLYCAB",
    qty: 20,
    units: "Mtr.",
  },
  {
    component: "Solar ACDB",
    specifications: "1 IN 1 Out Single Phase",
    brand: "SR Green",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Earthing",
    specifications: "14 mm dia, 1 m long, 10 kg BFC with pit cover",
    brand: "SRG",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "Lighting Arrester",
    specifications: "10 M Radius LA With HRD",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "PVC Pipe",
    specifications: "25 mm",
    brand: "AKG",
    qty: 20,
    units: "Mtr.",
  },
  {
    component: "PVC Band",
    specifications: "25 mm",
    brand: "AKG",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "Sadel",
    specifications: "25 mm",
    brand: "AKG",
    qty: 20,
    units: "Nos.",
  },
  {
    component: "PVC Tape",
    specifications: "PVC Tape R Y B",
    brand: "Steelgrip",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tray",
    specifications: "25 x 25 MM",
    brand: "CONNECTWELL",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "PVC Gitti & Pitch",
    specifications: "38 mm",
    brand: "AKG",
    qty: 60,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tie",
    specifications: "200 mm UV Protected",
    brand: "KS/Tycon",
    qty: 20,
    units: "Nos.",
  },
  {
    component: "Lugs",
    specifications: "2.5 mm Ring & Pin Type",
    brand: "Comet",
    qty: 10,
    units: "Nos.",
  },
  {
    component: "Lugs",
    specifications: "4 mm Ring & Pin Type",
    brand: "Comet",
    qty: 10,
    units: "Nos.",
  },
  {
    component: "Module Mounting Structure",
    specifications:
      "Solar Mounting Structure, Hot-dip Galvanised with Hot-dip Hardware",
    brand: "SR Green",
    qty: 1.1,
    units: "Kw.",
  },
];

const KIT_2_2_SPEC_ROWS = [
  {
    component: "Solar Panel",
    specifications: "570-650 Wp On grid TOPCon Mono Solar Module",
    brand: "ALMM",
    qty: 4,
    units: "Nos.",
  },
  {
    component: "Solar Inverter / MPPT",
    specifications: "On-Grid Solar Inverter 2.2 kW",
    brand: "ALMM",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "MC4 Connectors",
    specifications: "M-160 / F-160",
    brand: "NINGBO",
    qty: 4,
    units: "Nos.",
  },
  {
    component: "ACDB To Inverter Cable",
    specifications: "2C x 2.5 Sq.mm Cu. Flexible, 2.2 KVA",
    brand: "POLYCAB",
    qty: 15,
    units: "Mtr.",
  },
  {
    component: "DC Cable",
    specifications: "1C x 4 Sqmm Cu. Flexible",
    brand: "POLYCAB",
    qty: 20,
    units: "Mtr.",
  },
  {
    component: "Earthing Cable",
    specifications: "1C x 4 Sqmm Cu. Flexible",
    brand: "POLYCAB",
    qty: 15,
    units: "Mtr.",
  },
  {
    component: "Earthing Cable",
    specifications: "1C x 16 Sqmm AL Flexible",
    brand: "POLYCAB",
    qty: 25,
    units: "Mtr.",
  },
  {
    component: "Solar ACDB",
    specifications: "1 IN 1 Out Single Phase",
    brand: "SR Green",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Earthing",
    specifications: "14 mm dia, 1 m long, 10 kg BFC with pit cover",
    brand: "SRG",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "Lighting Arrester",
    specifications: "10 M Radius LA With HRD",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "PVC Pipe",
    specifications: "25 mm",
    brand: "AKG",
    qty: 25,
    units: "Mtr.",
  },
  {
    component: "PVC Band",
    specifications: "25 mm",
    brand: "AKG",
    qty: 5,
    units: "Nos.",
  },
  {
    component: "Sadel",
    specifications: "25 mm",
    brand: "AKG",
    qty: 25,
    units: "Nos.",
  },
  {
    component: "PVC Tape",
    specifications: "PVC Tape R Y B",
    brand: "Steelgrip",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tray",
    specifications: "25 x 25 MM",
    brand: "CONNECTWELL",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "PVC Gitti & Pitch",
    specifications: "38 mm",
    brand: "AKG",
    qty: 80,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tie",
    specifications: "200 mm UV Protected",
    brand: "KS/Tycon",
    qty: 25,
    units: "Nos.",
  },
  {
    component: "Lugs",
    specifications: "2.5 mm Ring & Pin Type",
    brand: "Comet",
    qty: 12,
    units: "Nos.",
  },
  {
    component: "Lugs",
    specifications: "4 mm Ring & Pin Type",
    brand: "Comet",
    qty: 12,
    units: "Nos.",
  },
  {
    component: "Module Mounting Structure",
    specifications:
      "Solar Mounting Structure, Hot-dip Galvanised with Hot-dip Hardware",
    brand: "SR Green",
    qty: 2.2,
    units: "Kw.",
  },
];

const KIT_3_3_SPEC_ROWS = [
  {
    component: "Solar Panel",
    specifications: "570-650 Wp On grid TOPCon Mono Solar Module",
    brand: "ALMM",
    qty: 6,
    units: "Nos.",
  },
  {
    component: "Solar Inverter",
    specifications: "On-Grid Solar Inverter 3.3 kW",
    brand: "ALMM",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "MC4 Connectors",
    specifications: "M-160 / F-160",
    brand: "NINGBO",
    qty: 4,
    units: "Nos.",
  },
  {
    component: "ACDB To Customer Panel",
    specifications: "3.5C x 4 Sq.mm AL ARMD Cable 1.1 KVA",
    brand: "POLYCAB",
    qty: 20,
    units: "Mtr.",
  },
  {
    component: "DC Cables (modules connect)",
    specifications: "1R x 1C, 4 Sq.mm DC Cables, 0.6/1.5 KV",
    brand: "POLYCAB",
    qty: 50,
    units: "Mtr.",
  },
  {
    component: "Earthing Cable",
    specifications: "1C x 4 Sqmm Cu. Flexible",
    brand: "POLYCAB",
    qty: 25,
    units: "Mtr.",
  },
  {
    component: "Solar DCDB",
    specifications: "1 IN 1 Out",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Solar ACDB",
    specifications:
      "1 IN 1 Out, MCCB (3P+N) 32A with SPD (MCCB-L&T/C&S, SPD-Phoenix)",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Earthing",
    specifications: "14 mm dia 3 m long 25 kg BFC with pit cover",
    brand: "SRG",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "Lighting Arrester",
    specifications: "10M Radius LA With HRD",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "PVC Pipe",
    specifications: "25 mm",
    brand: "AKG",
    qty: 20,
    units: "Mtr.",
  },
  {
    component: "PVC Band",
    specifications: "25 mm",
    brand: "AKG",
    qty: 6,
    units: "Nos.",
  },
  {
    component: "Sadel",
    specifications: "25 mm",
    brand: "AKG",
    qty: 20,
    units: "Nos.",
  },
  {
    component: "PVC Tape",
    specifications: "PVC Tape R Y B",
    brand: "STEEL GRIP",
    qty: 2,
    units: "Nos.",
  },
  {
    component: "PVC Gitti & Pitch",
    specifications: "38 mm",
    brand: "AKG",
    qty: 80,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tie",
    specifications: "300 mm UV Protected",
    brand: "KS",
    qty: 20,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tray",
    specifications: "25 x 25 MM",
    brand: "CONNECTWELL",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Lugs",
    specifications: "4 mm Ring & Pin Type",
    brand: "ACTION",
    qty: 16,
    units: "Nos.",
  },
  {
    component: "Module Mounting Structure",
    specifications:
      "Solar Mounting Structure Hotdip Galvanised with Hot Dip Hardware",
    brand: "SRG",
    qty: 3.3,
    units: "Kw.",
  }
];

const KIT_5_5_SPEC_ROWS = [
  {
    component: "Solar Panel",
    specifications: "570-650 Wp On grid TOPCon Mono Solar Module",
    brand: "ALMM",
    qty: 10,
    units: "Nos.",
  },
  {
    component: "Solar Inverter",
    specifications: "On-Grid Solar Inverter 5.5 kW",
    brand: "ALMM",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "MC4 Connectors",
    specifications: "M-160 / F-160",
    brand: "NINGBO",
    qty: 4,
    units: "Nos.",
  },
  {
    component: "DC Cables (modules connect)",
    specifications: "1R x 1C, 4 Sq.mm DC Cables, 0.6/1.5 KV",
    brand: "POLYCAB",
    qty: 85,
    units: "Mtr.",
  },
  {
    component: "ACDB To Customer Panel",
    specifications: "3.5C x 4 Sq.mm AL ARMD Cable 1.1 KVA",
    brand: "POLYCAB",
    qty: 20,
    units: "Mtr.",
  },
  {
    component: "Earthing Cable",
    specifications: "1C x 4 Sqmm Cu. Flexible",
    brand: "POLYCAB",
    qty: 30,
    units: "Mtr.",
  },
  {
    component: "Solar DCDB",
    specifications: "1 IN 1 Out",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Solar ACDB",
    specifications:
      "1 IN 1 Out, MCCB (3P+N) 32A with SPD (MCCB-L&T/C&S, SPD-Phoenix)",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Earthing",
    specifications: "14 mm dia 3 m long 25 kg BFC with pit cover",
    brand: "SRG",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "Lighting Arrester",
    specifications: "10M Radius LA With HRD",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "PVC Pipe",
    specifications: "25 mm",
    brand: "AKG",
    qty: 22,
    units: "Mtr.",
  },
  {
    component: "PVC Band",
    specifications: "25 mm",
    brand: "AKG",
    qty: 7,
    units: "Nos.",
  },
  {
    component: "Sadel",
    specifications: "25 mm",
    brand: "AKG",
    qty: 24,
    units: "Nos.",
  },
  {
    component: "PVC Tape",
    specifications: "PVC Tape R Y B",
    brand: "STEEL GRIP",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "PVC Gitti & Pitch",
    specifications: "38 mm",
    brand: "AKG",
    qty: 110,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tie",
    specifications: "300 mm UV Protected",
    brand: "KS",
    qty: 25,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tray",
    specifications: "25 x 25 MM",
    brand: "CONNECTWELL",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Lugs",
    specifications: "4 mm Ring & Pin Type",
    brand: "ACTION",
    qty: 22,
    units: "Nos.",
  },
  {
    component: "Module Mounting Structure",
    specifications:
      "Solar Mounting Structure AL. MONO RAIL with SS Hardware",
    brand: "SRG",
    qty: 5.5,
    units: "Kw.",
  }
];

const KIT_10_SPEC_ROWS = [
  {
    component: "Solar Panel",
    specifications: "570-650 Wp On grid TOPCon Mono Solar Module",
    brand: "ALMM",
    qty: 18,
    units: "Nos.",
  },
  {
    component: "Solar Inverter",
    specifications: "On-Grid Solar Inverter 10 kW",
    brand: "ALMM",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "MC4 Connectors",
    specifications: "M-160 / F-160",
    brand: "NINGBO",
    qty: 4,
    units: "Nos.",
  },
  {
    component: "DC Cables (modules connect)",
    specifications: "1R x 1C, 4 Sq.mm DC Cables, 0.6/1.5 KV",
    brand: "POLYCAB",
    qty: 130,
    units: "Mtr.",
  },
  {
    component: "ACDB To Customer Panel",
    specifications: "3.5C x 6 Sq.mm AL ARMD Cable 1.1 KVA",
    brand: "POLYCAB",
    qty: 20,
    units: "Mtr.",
  },
  {
    component: "Earthing Cable",
    specifications: "1C x 4 Sqmm Cu. Flexible",
    brand: "POLYCAB",
    qty: 30,
    units: "Mtr.",
  },
  {
    component: "Solar DCDB",
    specifications: "1 IN 1 Out",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Solar ACDB",
    specifications:
      "1 IN 1 Out, MCCB (3P+N) 32A with SPD (MCCB-L&T/C&S, SPD-Phoenix)",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "Earthing",
    specifications: "14 mm dia 3 m long 25 kg BFC with pit cover",
    brand: "SRG",
    qty: 3,
    units: "Nos.",
  },
  {
    component: "Lighting Arrester",
    specifications: "10M Radius LA With HRD",
    brand: "SRG",
    qty: 1,
    units: "Nos.",
  },
  {
    component: "PVC Pipe",
    specifications: "25 mm",
    brand: "AKG",
    qty: 30,
    units: "Mtr.",
  },
  {
    component: "PVC Band",
    specifications: "25 mm",
    brand: "AKG",
    qty: 10,
    units: "Nos.",
  },
  {
    component: "Sadel",
    specifications: "25 mm",
    brand: "AKG",
    qty: 40,
    units: "Nos.",
  },
  {
    component: "PVC Tape",
    specifications: "PVC Tape R Y B",
    brand: "STEEL GRIP",
    qty: 4,
    units: "Nos.",
  },
  {
    component: "PVC Gitti & Pitch",
    specifications: "38 mm",
    brand: "AKG",
    qty: 200,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tie",
    specifications: "300 mm UV Protected",
    brand: "KS",
    qty: 50,
    units: "Nos.",
  },
  {
    component: "PVC Cable Tray",
    specifications: "25 x 25 MM",
    brand: "CONNECTWELL",
    qty: 2,
    units: "Nos.",
  },
  {
    component: "Lugs",
    specifications: "4 mm Ring & Pin Type",
    brand: "ACTION",
    qty: 32,
    units: "Nos.",
  },
  {
    component: "Module Mounting Structure",
    specifications:
      "Solar Mounting Structure AL. MONO RAIL with SS Hardware",
    brand: "SRG",
    qty: 10,
    units: "Kw.",
  }
];

const DEFAULT_SPEC_ROWS = [
  {
    component: "Solar Panel",
    specifications: "570-650 Wp On grid TOPCon Mono Solar Module",
    brand: "CONNECTWELL",
    qty: 1,
    units: "NOS.",
  },
  {
    component: "Module Mounting Structure",
    specifications: "Solar Mounting Structure, Hot-dip Galvanised with Hot-dip Hardware",
    brand: "CONNECTWELL",
    qty: 1,
    units: "NOS.",
  },
  {
    component: "Module Mounting Structure",
    specifications: "Solar Mounting Structure, Hot-dip Galvanised with Hot-dip Hardware",
    brand: "CONNECTWELL",
    qty: 1,
    units: "NOS.",
  },
  {
    component: "Module Mounting Structure",
    specifications: "Solar Mounting Structure, Hot-dip Galvanised with Hot-dip Hardware",
    brand: "CONNECTWELL",
    qty: 1,
    units: "NOS.",
  },
  {
    component: "Module Mounting Structure",
    specifications: "Solar Mounting Structure, Hot-dip Galvanised with Hot-dip Hardware",
    brand: "CONNECTWELL",
    qty: 1,
    units: "NOS.",
  },
];

export const SOLAR_KITS = [
  {
    slug: "ongrid-dcr-non-dcr-1-1-kw",
    power: "1.1 kW",
    title: "OnGrid DCR/NON DCR 1.1 kW Kit",
    fullTitle: "Headsup B2B OnGrid DCR/NON DCR 1.1 kW Kit",
    desc: "N-Type TOPCon · 570-650 Wp modules · Ready to install",
    image: "/solar-kits/kit-1-5.png",
    imgScale: 0.9,
    gallery: [
      "/solar-kits/kit-1-5.png",
      "/solar-kits/kit-1-1.png",
      "/solar-kits/kit-1-2.png",
      "/solar-kits/kit-1.png",
    ],
    highlights: [
      { label: "MODULE POWER", value: "570-650 Wp" },
      { label: "SYSTEM TYPE", value: "On grid" },
      { label: "MODULE TYPE", value: "DCR/NON DCR" },
    ],
    features: ["Free Shipping", "Ready To Install Kit", "Subsidy Eligible"],
    details: buildDefaultDetails("1.1kW"),
    howItWorksSteps: DEFAULT_HOW_STEPS,
    specsTable: KIT_1_1_SPEC_ROWS,
  },
  {
    slug: "ongrid-dcr-non-dcr-2-2-kw",
    power: "2.2 kW",
    title: "OnGrid DCR/NON DCR 2.2 kW Kit",
    fullTitle: "Headsup B2B OnGrid DCR/NON DCR 2.2 kW Kit",
    desc: "Single-phase · MPPT inverter · Full BOS",
    image: "/solar-kits/kit-1-3.png",
    gallery: [
      "/solar-kits/kit-1-3.png",
      "/solar-kits/kit-1-1.png",
      "/solar-kits/kit-1-2.png",
      "/solar-kits/kit-1-3.png",
    ],
    highlights: [
      { label: "MODULE POWER", value: "570-650 Wp" },
      { label: "SYSTEM TYPE", value: "On grid" },
      { label: "MODULE TYPE", value: "DCR/NON DCR" },
    ],
    features: ["Free Shipping", "Ready To Install Kit", "Subsidy Eligible"],
    details: buildDefaultDetails("2.2kW"),
    howItWorksSteps: DEFAULT_HOW_STEPS,
    specsTable: KIT_2_2_SPEC_ROWS,
  },
  {
    slug: "ongrid-dcr-non-dcr-3-3-kw",
    power: "3.3 kW",
    title: "OnGrid DCR/NON DCR 3.3 kW Kit",
    fullTitle: "Headsup B2B OnGrid DCR/NON DCR 3.3 kW Kit",
    desc: "Subsidy-eligible · Mounting + earthing",
    image: "/solar-kits/kit-3-5.png",
    gallery: [
      "/solar-kits/kit-3-5.png",
      "/solar-kits/3-3-5-5-10kw2.png",
      // "/solar-kits/kit-3-2.png",
      "/solar-kits/kit-3-3.png",
      "/solar-kits/3-3-5-5-10kw.png",
    ],
    highlights: [
      { label: "MODULE POWER", value: "570-650 Wp" },
      { label: "SYSTEM TYPE", value: "On grid" },
      { label: "MODULE TYPE", value: "DCR/NON DCR" },
    ],
    features: ["Free Shipping", "Ready To Install Kit", "Subsidy Eligible"],
    details: buildDefaultDetails("3.3kW"),
    howItWorksSteps: DEFAULT_HOW_STEPS,
    specsTable: KIT_3_3_SPEC_ROWS,
  },
  {
    slug: "ongrid-dcr-non-dcr-5-5-kw",
    power: "5.5 kW",
    title: "OnGrid DCR/NON DCR 5.5 kW Kit",
    fullTitle: "Headsup B2B OnGrid DCR/NON DCR 5.5 kW Kit",
    desc: "Three-phase · Project-grade BOS",
    image: "/solar-kits/kit-3-6.png",
    gallery: [
      "/solar-kits/kit-3-6.png",
      "/solar-kits/3-3-5-5-10kw2.png",
      // "/solar-kits/kit-3-2.png",
      "/solar-kits/kit-3-3.png",
      "/solar-kits/3-3-5-5-10kw.png",
    ],
    highlights: [
      { label: "MODULE POWER", value: "570-650 Wp" },
      { label: "SYSTEM TYPE", value: "On grid" },
      { label: "MODULE TYPE", value: "DCR/NON DCR" },
    ],
    features: ["Free Shipping", "Ready To Install Kit", "Subsidy Eligible"],
    details: buildDefaultDetails("5.5kW"),
    howItWorksSteps: DEFAULT_HOW_STEPS,
    specsTable: KIT_5_5_SPEC_ROWS,
  },
  {
    slug: "ongrid-dcr-non-dcr-10-kw",
    power: "10 kW",
    title: "OnGrid DCR/NON DCR 10 kW Kit",
    fullTitle: "Headsup B2B OnGrid DCR/NON DCR 10 kW Kit",
    desc: "Custom sizing · Full O&M coverage",
    image: "/solar-kits/kit-3-6.png",
    gallery: [
      "/solar-kits/kit-3-6.png",
      "/solar-kits/3-3-5-5-10kw2.png",
      // "/solar-kits/kit-3-2.png",
      "/solar-kits/kit-3-3.png",
      "/solar-kits/3-3-5-5-10kw.png",
    ],
    highlights: [
      { label: "MODULE POWER", value: "570-650 Wp" },
      { label: "SYSTEM TYPE", value: "On grid" },
      { label: "MODULE TYPE", value: "DCR/NON DCR" },
    ],
    features: ["Free Shipping", "Ready To Install Kit", "Subsidy Eligible"],
    details: buildDefaultDetails("10kW"),
    howItWorksSteps: DEFAULT_HOW_STEPS,
    specsTable: KIT_10_SPEC_ROWS,
  },
  {
    slug: "ongrid-dcr-non-dcr-1-1-kw",
    power: "1.1 kW",
    title: "OnGrid DCR/NON DCR 1.1 kW Kit",
    fullTitle: "Headsup B2B OnGrid DCR/NON DCR 1.1 kW Kit",
    desc: "N-Type TOPCon · 570-650 Wp modules · Ready to install",
    image: "/solar-kits/kit-1-5.png",
    imgScale: 0.9,
    gallery: [
      "/solar-kits/kit-1-5.png",
      "/solar-kits/kit-1-1.png",
      "/solar-kits/kit-1-2.png",
      "/solar-kits/kit-1.png",
    ],
    highlights: [
      { label: "MODULE POWER", value: "570-650 Wp" },
      { label: "SYSTEM TYPE", value: "On grid" },
      { label: "MODULE TYPE", value: "DCR/NON DCR" },
    ],
    features: ["Free Shipping", "Ready To Install Kit", "Subsidy Eligible"],
    details: buildDefaultDetails("1.1kW"),
    howItWorksSteps: DEFAULT_HOW_STEPS,
    specsTable: KIT_1_1_SPEC_ROWS,
  }
];
