'use client';

import React, { useState } from 'react';
import { ShieldCheck, Info, X } from 'lucide-react';

export function AmazonDisclosureBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <aside aria-label="Affiliate Disclosure" className="bg-stone-100 border-b border-stone-200 text-stone-600 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
            <p className="truncate">
              <span className="font-semibold text-stone-800">Amazon Associate Disclosure:</span> As an Amazon Associate, FestiveAtlas earns from qualifying purchases at zero added cost to you.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-stone-700 underline hover:text-stone-900 shrink-0 font-medium cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </aside>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1 rounded-md transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-stone-900">Amazon Affiliate Transparency</h3>
                <p className="text-xs text-stone-500">FTC Compliance & Reader Protection</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>FestiveAtlas</strong> participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for websites to earn advertising fees by linking to Amazon.com and affiliated international Amazon storefronts.
              </p>
              <p>
                When you click on our curated holiday product recommendations and complete a purchase, we may receive a small commission. <strong>This incurs no extra cost to you</strong>—prices, discounts, and Prime benefits remain identical to searching Amazon directly.
              </p>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 space-y-1">
                <p className="font-semibold text-stone-900">Price & Discount Guarantee:</p>
                <p>Product prices and promotions are accurate as of publication time and are subject to change. Amazon discounts, lightning deals, and merchant coupons fluctuate based on seasonal inventory.</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
