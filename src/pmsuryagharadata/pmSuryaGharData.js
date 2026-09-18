/**
 * PM Surya Ghar guide index.
 *
 * Mirrors src/researchdata/researchData.js — the listing page sorts by `date`
 * (newest first) and links to /pm-surya-ghar/<slug>.
 *
 * To add a guide:
 *   1. create src/pages/pm-surya-ghar/<slug>.js pointing GuideLayout at its namespace
 *   2. fill pmSuryaGhar.guides.<key> in src/locales/{en,hi}/translation.json
 *   3. add it to pmSuryaGhar.guideLinks (both locales) for the cross-link grid
 *   4. drop its banner in /public, import it below, and add an entry here
 *
 * An entry without an `image` breaks the listing card, so keep the two in sync.
 */

import completeGuideBanner from "../../public/pm-surya-ghar-complete-guide.webp";
import subsidyAmountBanner from "../../public/pm-surya-ghar-subsidy-amount.webp";
import howToApplyBanner from "../../public/pm-surya-ghar-how-to-apply.webp";
import subsidyNotReceivedBanner from "../../public/pm-surya-ghar-subsidy-not-received.webp";
import vendorRegistrationBanner from "../../public/pm-surya-ghar-vendor-registration.webp";
import dcrCertificateBanner from "../../public/pm-surya-ghar-dcr-certificate.webp";
import loanBanner from "../../public/pm-surya-ghar-loan.webp";
import kwComparisonBanner from "../../public/pm-surya-ghar-1kw-2kw-3kw.webp";

const pmSuryaGharData = [
  {
    title: "PM Surya Ghar Muft Bijli Yojana 2026: Complete Guide",
    slug: "complete-guide",
    date: "2026-09-11",
    image: completeGuideBanner,
    description:
      "Subsidy, eligibility, the 12-step application, vendor selection, the loan route and the March 2027 deadline — everything a homeowner needs before installing.",
  },
  {
    title: "PM Surya Ghar Subsidy Amount 2026: 1kW, 2kW & 3kW Rates",
    slug: "subsidy-amount",
    date: "2026-09-14",
    image: subsidyAmountBanner,
    description:
      "Central subsidy for 1 kW, 2 kW and 3 kW systems, state top-ups, why 5 kW gets no extra money, and what you actually pay out of pocket.",
  },
  {
    title: "How to Apply for PM Surya Ghar Online 2026: Step-by-Step",
    slug: "how-to-apply",
    date: "2026-09-16",
    image: howToApplyBanner,
    description:
      "Registration to Redeem Subsidy — the 12 steps in the order the portal enforces them, and the uploads that stall files.",
  },
  {
    title: "PM Surya Ghar Subsidy Not Received? 5 Reasons & Fixes",
    slug: "subsidy-not-received",
    date: "2026-09-18",
    image: subsidyNotReceivedBanner,
    description:
      "Name mismatch, wrong bank document, verification pending, loan-account details, and who has to click Redeem — with the exact fix for each.",
  },
  // {
  //   title: "How to Become a PM Surya Ghar Vendor in 2026",
  //   slug: "vendor-registration",
  //   date: "2026-09-05",
  //   image: vendorRegistrationBanner,
  //   description:
  //     "Vendor tiers and bank guarantee, the two-portal rule, the document checklist, and the nine clerical mistakes that fill every rejection list.",
  // },
  // {
  //   title: "DCR Certificate for PM Surya Ghar: Rules & Verification",
  //   slug: "dcr-certificate",
  //   date: "2026-09-05",
  //   image: dcrCertificateBanner,
  //   description:
  //     "Domestic Content Requirement, the DCR Verification Portal, B2B vs B2C certificates, serial-number tracking, and the errors that get subsidies rejected.",
  // },
  // {
  //   title: "PM Surya Ghar Loan via Jansamarth: Rates, Banks & Process",
  //   slug: "loan",
  //   date: "2026-09-05",
  //   image: loanBanner,
  //   description:
  //     "Collateral-free financing through Jansamarth — sanctioned rates from SBI, Union Bank, BoB and PNB, the IFSC bug, and how the subsidy repays the loan.",
  // },
  // {
  //   title: "1 kW vs 2 kW vs 3 kW Solar System for Home (2026)",
  //   slug: "1kw-2kw-3kw-comparison",
  //   date: "2026-09-05",
  //   image: kwComparisonBanner,
  //   description:
  //     "Installed cost, subsidy, net cost, monthly units, roof area and payback compared — plus which appliances each size can and cannot run.",
  // },
];

export default pmSuryaGharData;
