'use client';

import React from 'react';
import { X, ExternalLink, Star, ShieldCheck, Heart, Tag, Check, Award } from 'lucide-react';
import { HolidayProduct, Holiday, Currency } from '@/types/holiday';
import { formatPrice, calculateSavings, formatReviewCount } from '@/lib/formatters';

interface ProductModalProps {
  product: HolidayProduct | null;
  holiday: Holiday | null;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onClose: () => void;
}

export function ProductModal({
  product,
  holiday,
  currency,
  isWishlisted,
  onToggleWishlist,
  onClose
}: ProductModalProps) {
  if (!product || !holiday) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
        {/* Sticky Header with Close */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 p-4 sm:px-6 flex items-center justify-between gap-4 z-10">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>{holiday.flagEmoji} {holiday.country}</span>
            <span aria-hidden="true">·</span>
            <span>{holiday.name}</span>
            <span aria-hidden="true">·</span>
            <span>{product.category}</span>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Ratings */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug">
              {product.name}
            </h3>

            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-stone-600">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-stone-900 tabular-nums">{product.rating}</span>
                <span className="text-stone-500">({formatReviewCount(product.reviewCount)} Amazon verified ratings)</span>
              </div>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Prime Fast Delivery Eligible
              </span>
            </div>
          </div>

          {/* Pricing & Offer Box */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-stone-500 mb-0.5">Verified Amazon Price:</div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-stone-900 tabular-nums">
                  {formatPrice(product.discountPriceUSD, currency)}
                </span>
                <span className="text-sm text-stone-400 line-through tabular-nums">
                  {formatPrice(product.originalPriceUSD, currency)}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  {product.discountPercentage}% OFF
                </span>
              </div>
              <div className="text-xs text-emerald-700 font-medium mt-1">
                You save {calculateSavings(product.originalPriceUSD, product.discountPriceUSD, currency)} off list price
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onToggleWishlist}
                className={`p-3 rounded-xl border transition-colors cursor-pointer flex items-center gap-2 text-xs font-medium ${
                  isWishlisted
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{isWishlisted ? 'Saved' : 'Save'}</span>
              </button>

              <a
                href={product.amazonUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Purchase on Amazon</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Cultural Reason / Significance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
              Why It Is Essential for {holiday.name}
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              {product.whyEssential}
            </p>
          </div>

          {/* Highlights / Features */}
          {product.keyHighlights && product.keyHighlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                Craftsmanship & Key Features
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {product.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Specifications Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
              Product Specifications & Dimensions
            </h4>
            <div className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-200 text-xs">
              {product.specifications.map((spec, i) => (
                <div key={i} className="grid grid-cols-3 p-3 bg-stone-50/30 odd:bg-white">
                  <span className="font-semibold text-stone-600">{spec.label}</span>
                  <span className="col-span-2 text-stone-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amazon Affiliate Note in Modal */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-stone-400" />
              <span>Amazon Associate Link · Prices and inventory verified dynamically.</span>
            </div>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="text-amber-800 font-semibold hover:underline flex items-center gap-1"
            >
              Check Availability <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
