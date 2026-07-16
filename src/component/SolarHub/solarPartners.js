// Solar partner logos — replace/add imports below.
// Missing logos: Luminous, V-Guard, Tata Power Solar (specific),
// Adani Solar (specific). Drop new files into src/assets/partner/Solar/
// and swap the imports below.

import Waaree from "@/assets/partner/Waaree.png";
import Tata from "@/assets/partner/TataNew.png"; // TODO: replace with Tata Power Solar specific logo
import VikramSolar from "@/assets/partner/NewLogos/Vikram Solar logo.png";
import Adani from "@/assets/partner/Adani.jpg"; // TODO: replace with Adani Solar specific logo
import Havells from "@/assets/partner/Havells.png";
import Polycab from "@/assets/partner/NewLogos/Polycab logo.webp";
import Luminous from "@/assets/partner/Solar/Luminous.jpeg";
import VGuard from "@/assets/partner/Solar/VGuard.jpg";

export const SOLAR_PARTNERS_RESPONSE = {
  doc: [
    {
      partner: [
        { _id: 1, imageUrl: Waaree,       height: 35, width: 35 },
        { _id: 2, imageUrl: Tata,         height: 35, width: 35 },
        { _id: 3, imageUrl: VikramSolar,  height: 35, width: 35 },
        { _id: 4, imageUrl: Adani,        height: 35, width: 35 },
        { _id: 5, imageUrl: Luminous,     height: 35, width: 35 },
        { _id: 6, imageUrl: Havells,      height: 35, width: 35 },
        { _id: 7, imageUrl: VGuard,       height: 35, width: 35 },
        { _id: 8, imageUrl: Polycab,      height: 35, width: 35 },
      ],
    },
  ],
};
