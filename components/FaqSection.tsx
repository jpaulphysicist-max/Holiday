'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Truck, Sparkles, DollarSign } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How are product recommendations and holiday traditions verified on FestiveAtlas?',
    answer:
      'Every holiday featured on FestiveAtlas is curated through authentic regional traditions across the United States, Germany, France, Italy, Spain, the United Kingdom, Ireland, and Scandinavia. Products represent time-tested items integral to celebrations—such as cast iron roasters for American Thanksgiving, authentic mouth-blown crystal snaps glasses for Swedish Midsummer, and hand-carved Erzgebirge pyramids for German Christmas markets.',
    category: 'Curation & Traditions'
  },
  {
    question: 'How do the Amazon affiliate links and price reductions work?',
    answer:
      'FestiveAtlas is an Amazon Associate. When you click our verified product links and make a purchase on Amazon, we earn an advertising fee at zero additional cost to you. All product prices, discounts, and coupon clips reflect active Amazon promotions. Prime members receive their usual complimentary expedited shipping, and purchases are backed by Amazon’s standard buyer return policies.',
    category: 'Affiliate & Pricing'
  },
  {
    question: 'What is the Amazon Affiliate Disclosure policy required by the FTC?',
    answer:
      'Under FTC guidelines and the Amazon Operating Agreement, we must disclose our commercial relationship clearly: "As an Amazon Associate, FestiveAtlas earns from qualifying purchases." We believe in complete transparency: our recommendations are curated strictly based on authentic cultural relevance, high customer ratings (4.7+ stars), and heirloom manufacturing quality.',
    category: 'Affiliate & Pricing'
  },
  {
    question: 'Can I purchase these products if I live outside the United States?',
    answer:
      'Yes. Our links direct to Amazon.com with global shipping options available to European destinations, or you can use our exact product titles to find matching listings on Amazon.de, Amazon.co.uk, Amazon.fr, Amazon.it, or Amazon.es. We also offer multi-currency conversion (USD, EUR, GBP) right on the page.',
    category: 'Shipping & International'
  },
  {
    question: 'What are the most popular traditional holiday gifts in Europe compared to the US?',
    answer:
      'While the US emphasizes Thanksgiving host gifts, Black Friday kitchenware upgrades, and Christmas morning family presents, European traditions place heavy emphasis on artisan food crafts and regional folklore days: for instance, German Christmas market Lebkuchen and Stollen, French Galette des Rois baking forms for Epiphany, Italian Torrone nougat for La Befana, and Spanish Three Kings Day Roscón wreaths.',
    category: 'Curation & Traditions'
  },
  {
    question: 'How does the Holiday Gift Planner calculate savings?',
    answer:
      'When you add products to your Gift Planner using the heart icon, our engine tallies the original manufacturer list prices against the current discounted Amazon deal prices. It dynamically displays your total savings and lets you export or copy an itemized checklist to keep your holiday budget on track.',
    category: 'Features'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          {/* Zero-Pill text metadata */}
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
            Holiday Shopping & Lore Guide
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto mt-2">
            Everything you need to know about European and American holiday traditions, Amazon discounts, and purchasing transparency.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-stone-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/30">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] font-medium text-stone-400">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
