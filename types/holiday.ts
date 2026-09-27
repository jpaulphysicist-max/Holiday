export type Country = 
  | 'United States'
  | 'Germany'
  | 'France'
  | 'Italy'
  | 'Spain'
  | 'United Kingdom'
  | 'Ireland'
  | 'Sweden';

export type Season = 'Autumn' | 'Winter' | 'Spring' | 'Summer';

export type ProductCategory = 
  | 'Kitchen & Cookware'
  | 'Tableware & Dining'
  | 'Home & Decor'
  | 'Traditional Attire'
  | 'Specialty Food & Treats'
  | 'Games & Festivities';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface HolidayProduct {
  id: string;
  name: string;
  category: ProductCategory;
  whyEssential: string;
  originalPriceUSD: number;
  discountPriceUSD: number;
  discountPercentage: number;
  dealOfferText: string;
  rating: number;
  reviewCount: number;
  amazonSearchQuery: string;
  amazonUrl: string;
  specifications: ProductSpec[];
  keyHighlights: string[];
  inStock: boolean;
  asin?: string;
  imageAlt: string;
  fallbackIconType?: 'cookware' | 'decor' | 'beverage' | 'attire' | 'treat' | 'tableware';
}

export interface Holiday {
  id: string;
  name: string;
  localName?: string;
  country: Country;
  countryCode: string;
  flagEmoji: string;
  season: Season;
  dateDescription: string;
  month: number;
  heroImage: string;
  briefExplanation: string;
  culturalOrigins: string;
  traditionalAtmosphere: string;
  keyTraditions: string[];
  products: HolidayProduct[];
  tags: string[];
}

export type Currency = 'USD' | 'EUR' | 'GBP';

export interface WishlistItem {
  productId: string;
  holidayId: string;
  holidayName: string;
  product: HolidayProduct;
  addedAt: number;
  notes?: string;
}
