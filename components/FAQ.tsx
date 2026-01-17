"use client";

import { useState } from "react";
import { gameData } from "@/lib/gameData";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div className={`glass-dark rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border border-sun-400/30' : 'border border-transparent'}`}>
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-sun-400/20 rounded-lg flex items-center justify-center text-sun-400 font-game font-bold text-sm">
            {index + 1}
          </span>
          <span className="font-medium text-white">{question}</span>
        </div>
        <span className={`text-sun-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed ml-11">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { faq } = gameData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="glass-dark rounded-2xl p-6 text-center mb-8">
          <h2 className="font-game text-3xl md:text-4xl font-bold text-white mb-2">
            ❓ FAQ
          </h2>
          <p className="text-white/60">
            Got questions? We&apos;ve got answers!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
