'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { HOLIDAYS_DATA, ALL_COUNTRIES } from '@/data/holidays';
import { Holiday, HolidayProduct, Currency, WishlistItem, Season } from '@/types/holiday';
import { AmazonDisclosureBanner } from '@/components/AmazonDisclosure';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HolidayCard } from '@/components/HolidayCard';
import { DealsSpotlight } from '@/components/DealsSpotlight';
import { ProductModal } from '@/components/ProductModal';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { Filter, Search, Calendar, Sparkles, AlertCircle } from 'lucide-react';

const SEASONS: { label: string; value: Season | 'All' }[] = [
  { label: 'All Seasons', value: 'All' },
  { label: 'Autumn Feasts', value: 'Autumn' },
  { label: 'Winter Celebrations', value: 'Winter' },
  { label: 'Spring Traditions', value: 'Spring' },
  { label: 'Summer Solstice', value: 'Summer' }
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('ALL');
  const [selectedSeason, setSelectedSeason] = useState<Season | 'All'>('All');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('festiveatlas_wishlist');
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignore
      }
    }
    return [];
  });
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Modal State
  const [activeModalProduct, setActiveModalProduct] = useState<{
    product: HolidayProduct;
    holiday: Holiday;
  } | null>(null);

  // Save wishlist to localStorage
  const saveWishlist = (items: WishlistItem[]) => {
    setWishlist(items);
    try {
      localStorage.setItem('festiveatlas_wishlist', JSON.stringify(items));
    } catch {
      // Ignore
    }
  };

  const handleToggleWishlist = (product: HolidayProduct, holiday: Holiday) => {
    const exists = wishlist.some((item) => item.productId === product.id);
    if (exists) {
      saveWishlist(wishlist.filter((item) => item.productId !== product.id));
    } else {
      const newItem: WishlistItem = {
        productId: product.id,
        holidayId: holiday.id,
        holidayName: holiday.name,
        product,
        addedAt: Date.now()
      };
      saveWishlist([...wishlist, newItem]);
    }
  };

  const handleRemoveWishlistItem = (productId: string) => {
    saveWishlist(wishlist.filter((item) => item.productId !== productId));
  };

  const handleClearWishlist = () => {
    saveWishlist([]);
  };

  const wishlistIds = useMemo(() => {
    return new Set(wishlist.map((item) => item.productId));
  }, [wishlist]);

  // Filtered Holidays
  const filteredHolidays = useMemo(() => {
    return HOLIDAYS_DATA.filter((holiday) => {
      // Country Filter
      if (selectedCountryCode !== 'ALL' && holiday.countryCode !== selectedCountryCode) {
        return false;
      }

      // Season Filter
      if (selectedSeason !== 'All' && holiday.season !== selectedSeason) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = holiday.name.toLowerCase().includes(q);
        const matchesLocal = holiday.localName?.toLowerCase().includes(q) || false;
        const matchesCountry = holiday.country.toLowerCase().includes(q);
        const matchesSummary = holiday.briefExplanation.toLowerCase().includes(q);
        const matchesTraditions = holiday.keyTraditions.some((t) => t.toLowerCase().includes(q));
        const matchesProducts = holiday.products.some(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.whyEssential.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.specifications.some((s) => s.value.toLowerCase().includes(q))
        );

        return matchesName || matchesLocal || matchesCountry || matchesSummary || matchesTraditions || matchesProducts;
      }

      return true;
    });
  }, [searchQuery, selectedCountryCode, selectedSeason]);

  // Schema.org Structured Data
  const jsonLd = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://festiveatlas.com/#website',
          url: 'https://festiveatlas.com',
          name: 'FestiveAtlas',
          description:
            'Authentic traditions, curated holiday essentials, product specifications, and seasonal deals across the United States and Europe.',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://festiveatlas.com/?search={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@type': 'ItemList',
          itemListElement: HOLIDAYS_DATA.flatMap((holiday, hIdx) =>
            holiday.products.map((p, pIdx) => ({
              '@type': 'ListItem',
              position: hIdx * 10 + pIdx + 1,
              item: {
                '@type': 'Product',
                name: p.name,
                description: p.whyEssential,
                offers: {
                  '@type': 'Offer',
                  price: p.discountPriceUSD,
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: p.amazonUrl
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: p.rating,
                  reviewCount: p.reviewCount
                }
              }
            }))
          )
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How are product recommendations and holiday traditions verified on FestiveAtlas?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Every holiday featured on FestiveAtlas is curated through authentic regional traditions across the United States and Europe, showcasing time-tested culinaryware, decor, and festive items.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do the Amazon affiliate links and price reductions work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'As an Amazon Associate, FestiveAtlas earns from qualifying purchases at zero added cost to buyers. All links connect to Amazon with live pricing and Prime shipping.'
              }
            }
          ]
        }
      ]
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-stone-900 flex flex-col font-sans selection:bg-amber-200">
      {/* JSON-LD Structured Data for Organic Search Engine Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FTC Amazon Associate Disclosure Banner */}
      <AmazonDisclosureBanner />

      {/* Top 3-Zone Navigation */}
      <Navbar
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectRegion={(code) => setSelectedCountryCode(code)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCountryCode={selectedCountryCode}
          onSelectCountryCode={setSelectedCountryCode}
          onExploreClick={() => {
            document.getElementById('holidays-catalog')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Featured Deep-Discount Deals Section */}
        <DealsSpotlight
          holidays={HOLIDAYS_DATA}
          currency={currency}
          onOpenSpecsModal={(product, holiday) => setActiveModalProduct({ product, holiday })}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* Holidays Catalog Container */}
        <div id="holidays-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          {/* Section Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wider">
                <span>Traditions Catalog</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  Showing {filteredHolidays.length} of {HOLIDAYS_DATA.length} Celebrations
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mt-1">
                Regional Holidays & Associated Essentials
              </h2>
            </div>

            {/* Season Filter Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200 overflow-x-auto max-w-full">
              {SEASONS.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSelectedSeason(s.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    selectedSeason === s.value
                      ? 'bg-white text-stone-900 font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Search & Filter Indicators */}
          {(searchQuery || selectedCountryCode !== 'ALL' || selectedSeason !== 'All') && (
            <div className="mb-8 p-3.5 bg-stone-100/80 rounded-xl border border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-700">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-stone-900">Active Filters:</span>
                {searchQuery && (
                  <span className="bg-white border border-stone-300 px-2 py-0.5 rounded-md">
                    Keyword: &ldquo;{searchQuery}&rdquo;
                  </span>
                )}
                {selectedCountryCode !== 'ALL' && (
                  <span className="bg-white border border-stone-300 px-2 py-0.5 rounded-md">
                    Country: {ALL_COUNTRIES.find((c) => c.code === selectedCountryCode)?.name}
                  </span>
                )}
                {selectedSeason !== 'All' && (
                  <span className="bg-white border border-stone-300 px-2 py-0.5 rounded-md">
                    Season: {selectedSeason}
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCountryCode('ALL');
                  setSelectedSeason('All');
                }}
                className="text-stone-600 hover:text-stone-900 font-medium underline cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Holidays List */}
          {filteredHolidays.length === 0 ? (
            <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto my-12">
              <AlertCircle className="w-10 h-10 text-stone-400 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-stone-900">No holidays matched your criteria</h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Try searching for a different keyword like &quot;turkey&quot;, &quot;beer&quot;, &quot;linens&quot;, or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCountryCode('ALL');
                  setSelectedSeason('All');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredHolidays.map((holiday) => (
                <HolidayCard
                  key={holiday.id}
                  holiday={holiday}
                  currency={currency}
                  wishlistIds={wishlistIds}
                  onToggleWishlist={handleToggleWishlist}
                  onOpenSpecsModal={(product, h) => setActiveModalProduct({ product, holiday: h })}
                />
              ))}
            </div>
          )}
        </div>

        {/* SEO FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onSelectCountryCode={(code) => setSelectedCountryCode(code)} />

      {/* Product Specifications Modal */}
      <ProductModal
        product={activeModalProduct?.product || null}
        holiday={activeModalProduct?.holiday || null}
        currency={currency}
        isWishlisted={activeModalProduct ? wishlistIds.has(activeModalProduct.product.id) : false}
        onToggleWishlist={() => {
          if (activeModalProduct) {
            handleToggleWishlist(activeModalProduct.product, activeModalProduct.holiday);
          }
        }}
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Wishlist / Gift Planner Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onClearAll={handleClearWishlist}
        currency={currency}
      />
    </div>
  );
}
