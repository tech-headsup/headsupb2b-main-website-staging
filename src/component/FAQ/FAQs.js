import React, { useState } from "react";
import HeaderTitle from "../Header/HeaderTitle";
import SubHeader from "../Header/SubHeader";
import { Language } from "@/locales/Language";
import { getLanguage } from "@/storage/storage";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GradientText } from "@/Contants/constant";

export default function FAQs({ FAQData = [] }) {
  const [selected, setSelected] = useState(null);

  const splitFAQs = (data) => {
    const midIndex = Math.ceil(data.length / 2);
    return [data.slice(0, midIndex), data.slice(midIndex)];
  };

  const [faqColumn1, faqColumn2] = splitFAQs(FAQData);

  return (
    <div className="-mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-28">
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <h3 className="section_heading">FAQs</h3>
        <div className="text-center mt-3 mx-8 text-xs leading-4 mm:leading-4 mm:text-xs md:text-[16px] md:leading-6">
          <label className="section_sub_text">
            Find the answers to all of our most frequently asked questions
          </label>
        </div>
      </div>

      <Accordion type="single" collapsible value={selected} onValueChange={setSelected}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-2">
          {[faqColumn1, faqColumn2].map((faqs, columnIndex) => (
            <div key={columnIndex}>
              {faqs.map((item, index) => {
                const itemValue = `item-${columnIndex}-${index}`;
                return (
                  <AccordionItem
                    key={itemValue}
                    value={itemValue}
                    className="border-b-0 my-4 group"
                  >
                    <AccordionTrigger
                      className={`px-4 shadow-lg text-md bg-white text-left hover:no-underline leading-5 ${
                        selected === itemValue ? "rounded-t-xl" : "rounded-xl"
                      }`}
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-AccordColor p-4 rounded-b-xl">
                      <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </div>
          ))}
        </div>
      </Accordion>
    </div>
    </div>
  );
}
