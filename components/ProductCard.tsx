'use client';

import React from 'react';
import { ExternalLink, Star, Heart, Check, Tag, Eye } from 'lucide-react';
import { HolidayProduct, Currency } from '@/types/holiday';
import { formatPrice, calculateSavings, formatReviewCount } from '@/lib/formatters';

interface ProductCardProps {
  product: HolidayProduct;
  countryName: string;
  holidayName: string;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onOpenSpecsModal: () => void;
}

export function ProductCard({
  product,
  countryName,
  holidayName,
  currency,
  isWishlisted,
  onToggleWishlist,
  onOpenSpecsModal
}: ProductCardProps) {
  return (
    <article className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Visual Area / Header */}
        <div className="relative p-5 pb-3 bg-stone-50 border-b border-stone-100 flex items-start justify-between gap-3">
          <div>
            {/* Zero-Pill Metadata */}
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>{countryName}</span>
            </div>
            <h4 className="mt-1 text-base font-semibold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-2">
              {product.name}
            </h4>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onToggleWishlist}
            className={`p-2 rounded-lg border transition-colors cursor-pointer shrink-0 ${
              isWishlisted
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white border-stone-200 text-stone-400 hover:text-stone-700 hover:border-stone-300'
            }`}
            title={isWishlisted ? 'Remove from Gift Planner' : 'Save to Gift Planner'}
            aria-label={`Save ${product.name} to Gift Planner`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>

        {/* Product Body Content */}
        <div className="p-5 space-y-4">
          {/* Explanation of Why It's Essential */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1">
              Cultural Significance:
            </div>
            <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
              {product.whyEssential}
            </p>
          </div>

          {/* Quick Specifications Preview */}
          <div className="bg-stone-50/80 rounded-lg p-3 border border-stone-200/60 text-xs space-y-1.5">
            <div className="font-semibold text-stone-800 text-[11px] uppercase tracking-wider">
              Key Specifications:
            </div>
            {product.specifications.slice(0, 3).map((spec, idx) => (
              <div key={idx} className="flex items-baseline justify-between text-stone-600 text-[11px] gap-2">
                <span className="text-stone-500 shrink-0">{spec.label}:</span>
                <span className="font-medium text-stone-800 text-right truncate">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Rating and Social Proof */}
          <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-stone-800 tabular-nums">{product.rating}</span>
              <span className="text-stone-400">({formatReviewCount(product.reviewCount)} reviews)</span>
            </div>
            {product.inStock && (
              <span className="flex items-center gap-1 text-emerald-700 text-[11px] font-medium">
                <Check className="w-3 h-3" /> In Stock & Prime
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Pricing & Action Section */}
      <div className="p-5 pt-3 bg-stone-50/50 border-t border-stone-100">
        {/* Pricing & Discount Bar */}
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-stone-900 tabular-nums">
              {formatPrice(product.discountPriceUSD, currency)}
            </span>
            <span className="text-xs text-stone-400 line-through tabular-nums">
              {formatPrice(product.originalPriceUSD, currency)}
            </span>
          </div>

          <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-md tabular-nums">
            Save {product.discountPercentage}% ({calculateSavings(product.originalPriceUSD, product.discountPriceUSD, currency)})
          </span>
        </div>

        {/* Offer detail text */}
        <div className="text-[11px] text-stone-500 mb-3 flex items-center gap-1.5 truncate">
          <Tag className="w-3 h-3 text-amber-700 shrink-0" />
          <span className="truncate">{product.dealOfferText}</span>
        </div>

        {/* Two CTAs: View Specs & Working Amazon Link */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onOpenSpecsModal}
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Full Specs</span>
          </button>

          <a
            href={product.amazonUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-xs hover:shadow-sm transition-all cursor-pointer"
            title={`View ${product.name} on Amazon`}
          >
            <span>Buy on Amazon</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
