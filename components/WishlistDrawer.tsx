'use client';

import React, { useState } from 'react';
import { X, Trash2, ExternalLink, Heart, Check, Copy, Share2, Tag } from 'lucide-react';
import { WishlistItem, Currency } from '@/types/holiday';
import { formatPrice, calculateSavings } from '@/lib/formatters';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  currency: Currency;
}

export function WishlistDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll,
  currency
}: WishlistDrawerProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalOriginalUSD = items.reduce((acc, item) => acc + item.product.originalPriceUSD, 0);
  const totalDiscountUSD = items.reduce((acc, item) => acc + item.product.discountPriceUSD, 0);
  const totalSavingsUSD = totalOriginalUSD - totalDiscountUSD;

  const handleCopyList = () => {
    if (items.length === 0) return;
    const text = items
      .map(
        (it, idx) =>
          `${idx + 1}. ${it.product.name} (${it.holidayName}) - ${formatPrice(it.product.discountPriceUSD, currency)}: ${it.product.amazonUrl}`
      )
      .join('\n\n');

    navigator.clipboard.writeText(`My FestiveAtlas Holiday Shopping List:\n\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Holiday Gift Planner
            </h3>
            <span className="text-xs bg-stone-200 text-stone-800 font-bold px-2 py-0.5 rounded-full tabular-nums">
              {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg transition-colors cursor-pointer"
            aria-label="Close gift planner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <p className="font-semibold text-stone-800 text-sm">Your Gift Planner is empty</p>
              <p className="text-xs text-stone-500 mt-1 max-w-xs">
                Click the heart icon on any holiday essential to bookmark items, calculate discounts, and organize your seasonal gifts.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.productId}
                className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 flex flex-col justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                    <span>{item.holidayName}</span>
                    <button
                      onClick={() => onRemoveItem(item.productId)}
                      className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer p-0.5"
                      title="Remove from list"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h4 className="font-semibold text-stone-900 line-clamp-2">
                    {item.product.name}
                  </h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-200">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-stone-900 tabular-nums">
                      {formatPrice(item.product.discountPriceUSD, currency)}
                    </span>
                    <span className="text-[11px] text-stone-400 line-through tabular-nums">
                      {formatPrice(item.product.originalPriceUSD, currency)}
                    </span>
                  </div>

                  <a
                    href={item.product.amazonUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-900 hover:underline"
                  >
                    <span>Amazon Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Total & Actions */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-4">
            {/* Savings Breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-500">
                <span>Total List Value:</span>
                <span className="line-through tabular-nums">{formatPrice(totalOriginalUSD, currency)}</span>
              </div>
              <div className="flex justify-between font-bold text-emerald-800">
                <span>Total Holiday Savings:</span>
                <span className="tabular-nums">- {formatPrice(totalSavingsUSD, currency)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-stone-900 pt-1 border-t border-stone-200">
                <span>Estimated Total:</span>
                <span className="tabular-nums">{formatPrice(totalDiscountUSD, currency)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopyList}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'List Copied!' : 'Copy Gift List'}</span>
              </button>

              <button
                onClick={onClearAll}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-stone-600 hover:text-rose-700 hover:bg-rose-50 border border-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            </div>

            <p className="text-[10px] text-stone-400 text-center leading-tight">
              Direct checkout is fulfilled securely on Amazon.com with your Amazon Prime account and buyer protections.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
