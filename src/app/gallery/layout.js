export const metadata = {
  title:
    "Hotel Gallery | Airport Golden Tulip Hotel Lagos",

  description:
    "View photos of our luxury rooms, suites, restaurant, swimming pool, gym, lounge and conference facilities at Airport Golden Tulip Hotel Lagos.",

  keywords: [
    "hotel gallery lagos",
    "airport hotel photos",
    "luxury hotel lagos",
    "hotel rooms lagos",
    "airport golden tulip gallery",
  ],

  alternates: {
    canonical:
      "https://www.airportgoldentuliphotel.com/gallery",
  },

  openGraph: {
    title:
      "Hotel Gallery | Airport Golden Tulip Hotel Lagos",

    description:
      "Explore our luxury rooms, dining, swimming pool and facilities.",

    url:
      "https://www.airportgoldentuliphotel.com/gallery",

    siteName:
      "Airport Golden Tulip Hotel Lagos",

    type: "website",
  },
};

export default function GalleryLayout({
  children,
}) {
  return children;
}