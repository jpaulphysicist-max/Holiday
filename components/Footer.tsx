'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { ALL_COUNTRIES } from '@/data/holidays';

interface FooterProps {
  onSelectCountryCode?: (code: string) => void;
}

export function Footer({ onSelectCountryCode }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tight hover:text-amber-300 transition-colors inline-block">
              FestiveAtlas
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              An authoritative cultural guide to the traditional culinaryware, heirloom decorations, festive apparel, and holiday essentials of the United States and European nations.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Amazon Associate Recommendations</span>
            </div>
          </div>

          {/* Regional Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Countries & Traditions
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {ALL_COUNTRIES.filter(c => c.code !== 'ALL').map((c) => (
                <li key={c.code}>
                  <button
                    onClick={() => {
                      onSelectCountryCode?.(c.code);
                      const el = document.getElementById('holidays-catalog');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-amber-300 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Seasonal Collections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Celebrated Seasons
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#holidays-catalog" className="hover:text-amber-300 transition-colors">
                  Autumn Harvest & Thanksgiving
                </a>
              </li>
              <li>
                <a href="#holidays-catalog" className="hover:text-amber-300 transition-colors">
                  Winter Solstice & Christmas Markets
                </a>
              </li>
              <li>
                <a href="#holidays-catalog" className="hover:text-amber-300 transition-colors">
                  Spring Festivals & St. Patrick’s
                </a>
              </li>
              <li>
                <a href="#holidays-catalog" className="hover:text-amber-300 transition-colors">
                  Midsummer & Solstice Feasts
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Amazon Trust & Ethics
            </h4>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              We never accept paid endorsements or sponsored reviews. Products are selected based on authentic cultural historical relevance, verified user satisfaction, and direct Amazon delivery reliability.
            </p>
          </div>
        </div>

        {/* FTC / Amazon Associate Full Disclosure */}
        <div className="py-8 border-b border-stone-800 text-xs text-stone-400 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-stone-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>FTC & Amazon Associates Program Operating Agreement Disclosure</span>
          </div>
          <p className="text-[11px] text-stone-400 leading-relaxed">
            FestiveAtlas is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated international Amazon stores (including Amazon.co.uk, Amazon.de, Amazon.fr, Amazon.it, and Amazon.es). As an Amazon Associate, we earn from qualifying purchases. CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON SERVICES LLC. THIS CONTENT IS PROVIDED &apos;AS IS&apos; AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME.
          </p>
          <p className="text-[11px] text-stone-500">
            Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com at the time of purchase will apply to the purchase of this product.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} FestiveAtlas. All rights reserved. Built for cultural celebrations.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Traditions of the US & Europe</span>
            <span aria-hidden="true">·</span>
            <span>Amazon Affiliate Transparency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
