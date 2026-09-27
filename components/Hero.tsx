'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { ALL_COUNTRIES } from '@/data/holidays';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCountryCode: string;
  onSelectCountryCode: (code: string) => void;
  onExploreClick: () => void;
}

export function Hero({
  searchQuery,
  onSearchChange,
  selectedCountryCode,
  onSelectCountryCode,
  onExploreClick
}: HeroProps) {
  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden border-b border-stone-800">
      {/* Background Hero Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/hero.jpg"
          alt="Festive holiday celebration table with candlelight and European linens"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-900/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 flex flex-col items-start">
        {/* Anti-Slop: Clean unboxed metadata with typographic separator */}
        <div className="flex items-center gap-2 text-xs text-amber-300 font-medium tracking-wide uppercase mb-4">
          <span>Cultural Heritage & Gift Guide</span>
          <span aria-hidden="true">·</span>
          <span>United States & Europe</span>
          <span aria-hidden="true">·</span>
          <span>Amazon Verified Deals</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white max-w-3xl leading-[1.15] tracking-tight mb-6">
          The Traditions & Holiday Essentials of America & Europe
        </h1>

        <p className="text-base sm:text-lg text-stone-300 max-w-2xl font-light leading-relaxed mb-8">
          From German Christmas markets and French Bastille feasts to American Thanksgiving roasts and Swedish Midsummer banquets. Discover authentic culinaryware, decor, and certified Amazon price reductions for every festive season.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-8">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search holidays, traditions, or products (e.g., roaster, Glühwein, stein, pie dish, Dala horse)..."
              className="w-full bg-stone-900/90 text-stone-100 placeholder-stone-400 border border-stone-700 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-shadow shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 text-xs bg-stone-700 hover:bg-stone-600 text-stone-200 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Country Filter Segmented Buttons */}
        <div className="w-full max-w-5xl mb-10">
          <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
            Filter by Country & Region:
          </div>
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-800/80 backdrop-blur-md rounded-xl border border-stone-700">
            {ALL_COUNTRIES.map((c) => {
              const active = selectedCountryCode === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => onSelectCountryCode(c.code)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-amber-400 text-stone-950 font-bold shadow-md'
                      : 'text-stone-300 hover:bg-stone-700/60 hover:text-white'
                  }`}
                >
                  <span aria-hidden="true">{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Proof metrics adjacent to claims */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-stone-800 text-stone-300 text-xs">
          <div>
            <div className="text-xl font-serif font-bold text-white tabular-nums">8 Nations</div>
            <div className="text-stone-400 mt-0.5">Authentic cultural lore</div>
          </div>
          <div>
            <div className="text-xl font-serif font-bold text-amber-300 tabular-nums">22% - 32%</div>
            <div className="text-stone-400 mt-0.5">Current price discounts</div>
          </div>
          <div>
            <div className="text-xl font-serif font-bold text-white tabular-nums">100% Prime</div>
            <div className="text-stone-400 mt-0.5">Fast direct Amazon links</div>
          </div>
          <div>
            <div className="text-xl font-serif font-bold text-white tabular-nums">FTC Compliant</div>
            <div className="text-stone-400 mt-0.5">Transparent associate links</div>
          </div>
        </div>
      </div>
    </section>
  );
}
