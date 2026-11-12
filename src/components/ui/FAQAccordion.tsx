"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={item.id} className="py-5">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left cursor-pointer group"
              >
                <span className="font-heading text-base font-semibold text-[#0B1720] group-hover:text-[#087F8C] transition-colors pr-6">
                  {item.question}
                </span>
                <span className="shrink-0 text-[#52616B] group-hover:text-[#087F8C] transition-colors">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
            </h3>

            {isOpen && (
              <div className="pt-3 pr-8 text-sm text-[#52616B] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
