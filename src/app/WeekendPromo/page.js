export const metadata = {
  title: '40% Weekend Discount | Airport Golden Tulip Hotel Lagos',
  description:
    'Enjoy an exclusive 40% discount on luxury weekend stays at Airport Golden Tulip Hotel in Ikeja, Lagos. Complimentary breakfast, airport shuttle, swimming pool, and premium amenities included.',
  keywords: [
    '40% hotel discount Lagos',
    'weekend hotel deal Ikeja',
    'luxury hotel Lagos',
    'hotel near Lagos airport',
    'weekend escape Lagos',
    'Airport Golden Tulip Hotel promo',
    'discounted hotel rooms Lagos',
    'MMIA hotel offer',
    'Ikeja weekend stay',
    'airport hotel Lagos discount',
    'Promo',
    "Weekend Deal"
  ],
  openGraph: {
    title: '40% Weekend Discount | Airport Golden Tulip Hotel Lagos',
    description:
      'Save 40% on luxury weekend stays in Ikeja, Lagos. Limited-time offer with breakfast and airport shuttle included.',
    url: 'https://airportgoldentuliphotel.com/WeekendPromo',
    siteName: 'Airport Golden Tulip Hotel',
    images: [
      {
        url: 'https://airportgoldentuliphotel.com/images/promo/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Airport Golden Tulip Hotel Weekend Promotion',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '40% Weekend Discount | Airport Golden Tulip Hotel Lagos',
    description:
      'Save 40% on luxury weekend stays in Ikeja, Lagos. Limited-time offer with breakfast and airport shuttle included.',
    images: ['https://airportgoldentuliphotel.com/images/promo/hero.jpg'],
  },
  alternates: {
    canonical: 'https://airportgoldentuliphotel.com/weekendPromo',
  },
};

import WeekendPromo from "@/app/WeekendPromo/WeekendPromo";

export default function Page() {
  return <WeekendPromo />;
}