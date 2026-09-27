'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { Holiday, HolidayProduct, Currency } from '@/types/holiday';
import { ProductCard } from '@/components/ProductCard';

interface HolidayCardProps {
  holiday: Holiday;
  currency: Currency;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: HolidayProduct, holiday: Holiday) => void;
  onOpenSpecsModal: (product: HolidayProduct, holiday: Holiday) => void;
}

export function HolidayCard({
  holiday,
  currency,
  wishlistIds,
  onToggleWishlist,
  onOpenSpecsModal
}: HolidayCardProps) {
  return (
    <section
      id={holiday.id}
      className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-stone-300 transition-colors"
    >
      {/* Holiday Hero Header */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900">
        <Image
          src={holiday.heroImage}
          alt={`${holiday.name} traditional holiday celebration`}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
          {/* Zero-Pill Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-300 mb-2">
            <span>{holiday.flagEmoji} {holiday.country}</span>
            <span aria-hidden="true">·</span>
            <span>{holiday.season}</span>
            <span aria-hidden="true">·</span>
            <span>{holiday.dateDescription}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {holiday.name}
            {holiday.localName && holiday.localName !== holiday.name && (
              <span className="text-lg sm:text-2xl font-light text-stone-300 ml-3 italic">
                ({holiday.localName})
              </span>
            )}
          </h2>
        </div>
      </div>

      {/* Cultural Story & Traditions Section */}
      <div className="p-6 sm:p-8 border-b border-stone-200 bg-stone-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Cultural Lore & Significance
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                {holiday.briefExplanation}
              </p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                Historical Origins
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {holiday.culturalOrigins}
              </p>
            </div>

            <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/60 text-xs text-amber-950">
              <span className="font-semibold">Sensory Atmosphere:</span> {holiday.traditionalAtmosphere}
            </div>
          </div>

          {/* Key Traditions List */}
          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Ceremonial Traditions
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-600">
              {holiday.keyTraditions.map((tradition, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold leading-none mt-0.5">•</span>
                  <span>{tradition}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Associated Products Section */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="text-lg font-serif font-bold text-stone-900">
              Essential Products for {holiday.name}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Traditional cookware, festive decor, tableware & verified Amazon discounts
            </p>
          </div>
          <span className="text-xs font-medium text-stone-500">
            Showing {holiday.products.length} curated essentials
          </span>
        </div>

        {/* 2-3 Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {holiday.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              countryName={holiday.country}
              holidayName={holiday.name}
              currency={currency}
              isWishlisted={wishlistIds.has(product.id)}
              onToggleWishlist={() => onToggleWishlist(product, holiday)}
              onOpenSpecsModal={() => onOpenSpecsModal(product, holiday)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
