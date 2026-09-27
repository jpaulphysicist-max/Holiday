import { Currency } from '@/types/holiday';
import { CURRENCY_RATES } from '@/data/holidays';

export function formatPrice(amountUSD: number, currency: Currency = 'USD'): string {
  const config = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = amountUSD * config.rate;
  return `${config.symbol}${converted.toFixed(2)}`;
}

export function calculateSavings(originalUSD: number, discountUSD: number, currency: Currency = 'USD'): string {
  const config = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const savings = (originalUSD - discountUSD) * config.rate;
  return `${config.symbol}${savings.toFixed(2)}`;
}

export function formatReviewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

export function getCleanAmazonUrl(query: string, rawUrl?: string): string {
  if (rawUrl && rawUrl.startsWith('http')) {
    return rawUrl;
  }
  const encoded = encodeURIComponent(query);
  return `https://www.amazon.com/s?k=${encoded}&tag=festiveatlas-20`;
}
