import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#1c1917',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'FestiveAtlas: US & European Holiday Tradition & Gift Guide',
  description:
    'Discover authentic cultural traditions, curated holiday essentials, product specifications, and seasonal deals across the United States and Europe.',
  keywords: [
    'Holiday gifts',
    'European holiday traditions',
    'US holidays',
    'Thanksgiving essentials',
    'Oktoberfest beer steins',
    'German Christmas market',
    'French Bastille Day',
    'Three Kings Day',
    'Amazon holiday deals',
    'Holiday cookware'
  ],
  authors: [{ name: 'FestiveAtlas Editorial' }],
  openGraph: {
    title: 'FestiveAtlas: US & European Holiday Tradition & Gift Guide',
    description:
      'Discover authentic cultural traditions, curated holiday essentials, product specifications, and seasonal deals across the United States and Europe.',
    type: 'website',
    url: 'https://festiveatlas.com',
    siteName: 'FestiveAtlas',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'FestiveAtlas US & European Holiday Traditions and Gifts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FestiveAtlas: US & European Holiday Tradition & Gift Guide',
    description:
      'Discover authentic cultural traditions, curated holiday essentials, product specifications, and seasonal deals across the United States and Europe.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased text-stone-900 bg-[#FDFCF9]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
