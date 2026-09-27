'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Globe } from 'lucide-react';
import { Currency } from '@/types/holiday';
import { CURRENCY_RATES } from '@/data/holidays';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  onSelectRegion?: (region: string) => void;
}

export function Navbar({
  currentCurrency,
  onCurrencyChange,
  wishlistCount,
  onOpenWishlist,
  onSelectRegion
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 hover:text-amber-900 transition-colors shrink-0"
        >
          FestiveAtlas
        </Link>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#holidays-catalog"
            onClick={() => onSelectRegion?.('ALL')}
            className="hover:text-stone-900 transition-colors"
          >
            All Holidays
          </a>
          <a
            href="#holidays-catalog"
            onClick={() => onSelectRegion?.('US')}
            className="hover:text-stone-900 transition-colors"
          >
            United States
          </a>
          <a
            href="#holidays-catalog"
            onClick={() => onSelectRegion?.('DE')}
            className="hover:text-stone-900 transition-colors"
          >
            Germany
          </a>
          <a
            href="#holidays-catalog"
            onClick={() => onSelectRegion?.('FR')}
            className="hover:text-stone-900 transition-colors"
          >
            France
          </a>
          <a
            href="#deals-spotlight"
            className="hover:text-stone-900 transition-colors"
          >
            Holiday Deals
          </a>
          <a
            href="#faq-section"
            className="hover:text-stone-900 transition-colors"
          >
            Traditions & FAQ
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Currency Switcher */}
          <div className="relative flex items-center text-xs font-medium bg-stone-100 rounded-lg p-1 border border-stone-200">
            <Globe className="w-3.5 h-3.5 text-stone-500 ml-1.5 mr-1" aria-hidden="true" />
            {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => onCurrencyChange(curr)}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  currentCurrency === curr
                    ? 'bg-white text-stone-900 font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title={`Switch display currency to ${curr}`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Holiday Gift Planner / Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer relative"
            aria-label={`View Holiday Shopping Planner (${wishlistCount} items saved)`}
          >
            <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-rose-400 text-rose-400' : ''}`} />
            <span className="hidden sm:inline">Gift Planner</span>
            <span className="bg-amber-400 text-stone-950 text-[10px] font-bold px-1.5 py-0.2 rounded-full tabular-nums">
              {wishlistCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
