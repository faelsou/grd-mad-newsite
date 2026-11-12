"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-white/10">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="text-[15px] font-medium text-[#f6f1e8] md:text-base">{item.q}</span>
              <span className="text-xl leading-none text-muted" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && <p className="max-w-xl pb-5 text-sm leading-relaxed text-muted">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
