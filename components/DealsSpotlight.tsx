'use client';

import React from 'react';
import { Tag, ExternalLink, Percent, ShieldCheck, Star } from 'lucide-react';
import { HolidayProduct, Holiday, Currency } from '@/types/holiday';
import { formatPrice, calculateSavings, formatReviewCount } from '@/lib/formatters';

interface DealsSpotlightProps {
  holidays: Holiday[];
  currency: Currency;
  onOpenSpecsModal: (product: HolidayProduct, holiday: Holiday) => void;
  onToggleWishlist: (product: HolidayProduct, holiday: Holiday) => void;
  wishlistIds: Set<string>;
}

export function DealsSpotlight({
  holidays,
  currency,
  onOpenSpecsModal,
  onToggleWishlist,
  wishlistIds
}: DealsSpotlightProps) {
  // Collect all products and sort by highest discount percentage
  const allDeals = holidays
    .flatMap((h) => h.products.map((p) => ({ product: p, holiday: h })))
    .sort((a, b) => b.product.discountPercentage - a.product.discountPercentage)
    .slice(0, 4);

  return (
    <section id="deals-spotlight" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
              <Percent className="w-3.5 h-3.5 text-amber-700" />
              Special Offers & Verified Price Drops
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Featured Holiday Deals & Savings
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Curated holiday cookware, festive decor, and traditional essentials currently featuring the deepest Amazon price reductions.
            </p>
          </div>

          <div className="text-xs text-stone-500 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Updated hourly · Prime 2-Day Delivery</span>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allDeals.map(({ product, holiday }) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span>{holiday.flagEmoji} {holiday.country}</span>
                  <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md tabular-nums">
                    -{product.discountPercentage}%
                  </span>
                </div>

                <h3 className="font-semibold text-stone-900 text-sm line-clamp-2 mb-2">
                  {product.name}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                  {product.whyEssential}
                </p>

                <div className="flex items-center gap-1 text-xs text-amber-500 mb-3">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-stone-800">{product.rating}</span>
                  <span className="text-stone-400">({formatReviewCount(product.reviewCount)})</span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-stone-900 tabular-nums">
                      {formatPrice(product.discountPriceUSD, currency)}
                    </span>
                    <span className="text-xs text-stone-400 line-through ml-2 tabular-nums">
                      {formatPrice(product.originalPriceUSD, currency)}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-medium">
                    Save {calculateSavings(product.originalPriceUSD, product.discountPriceUSD, currency)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenSpecsModal(product, holiday)}
                    className="py-1.5 px-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg text-center transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="py-1.5 px-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg text-center transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Amazon</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
