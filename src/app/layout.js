// src/app/layout.js

import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";



export const metadata = {
  metadataBase: new URL("https://airportgoldentuliphotel.com"),

  title: {
    default: "Airport Golden Tulip Hotel",
    template: "%s | Airport Golden Tulip Hotel",
  },
  icons: {
    icon: "./favicon.png",
  },

  description:
    "Luxury airport hotel offering premium accommodation, dining, events and conference facilities.",

  keywords: [
    "airport hotel",
    "hotel near airport",
    "luxury hotel",
    "conference hotel",
    "business hotel",
    "airport golden tulip hotel",
    "Airport Golden Tulip Lagos,",
    "Golden Tulip Hotel Lagos,",
    "hotel near Lagos airport",
    "Ikeja hotel near airport",
    " hotel near Murtala Muhammed Airport",
    " luxury accommodation Lagos airport",
    "hotel with pool in Lagos",
    "hotel near Computer Village Ikeja",
    "Google My Business hotel Lagos",
    "Google search hotel Lagos",
    "Google news Lagos hotel updates",
    "best hotel in Lagos airport area",
    "most talked about hotel Lagos",
    "most booked airport hotel Lagos",
    "top rated hotel near airport Lagos",
    "hotels in Mafoluku Lagos",
    "hotel for business travelers Lagos",
    "hotel booking Lagos airport",
    "Google My Business hotel Lagos",
    "Google news Lagos hotel updates",
    "accommodation near Lagos international airport",
    "hotel with restaurant Lagos airport",
  ],

   robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

    verification: {
    google: "c92b4688de54005b",
  },

    alternates: {
    canonical: "https://airportgoldentuliphotel.com",
  },

  openGraph: {
    title: "Airport Golden Tulip Hotel",
    description:
      "Luxury airport hotel offering premium accommodation, dining, events and conference facilities.",
    url: "https://airportgoldentuliphotel.com",
    siteName: "Airport Golden Tulip Hotel",
    locale: "en_US",
    type: "website",
  },
};







export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>

        < LoadingScreen />
        < Header />

        <main>{children}</main>

        < Footer />
      </body>
    </html>
  );
}