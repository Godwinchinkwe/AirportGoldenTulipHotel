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

  description:
    "Luxury airport hotel offering premium accommodation, dining, events and conference facilities.",

  keywords: [
    "airport hotel",
    "hotel near airport",
    "luxury hotel",
    "conference hotel",
    "business hotel",
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

        <LoadingScreen />
        < Header />

        <main>{children}</main>

        < Footer />
      </body>
    </html>
  );
}