// src/app/layout.js

import "./globals.css";
import Script from "next/script";

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
    "Airport Golden Tulip Hotel is a premium hotel on Airport Road, Ikeja, Lagos, located just minutes from Murtala Muhammed International Airport. Whether you are travelling for business, conferences, transit stays, or leisure, our hotel offers luxury rooms, executive suites, fine dining, event facilities, airport convenience, and exceptional hospitality, making it a preferred choice for both local and international travellers.",

  keywords: [
    "airport hotel",
    "hotel near airport",
    "luxury hotel",
    "conference hotel",
    "business hotel",
    "airport golden tulip hotel",
    "Airport Golden Tulip Lagos",
    "Golden Tulip Hotel Lagos",
    "hotel near Lagos airport",
    "Ikeja hotel near airport",
    "Hotel near Murtala Muhammed Airport",
    "luxury accommodation Lagos airport",
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
    "accommodation near Lagos international airport",
    "hotel with restaurant Lagos airport",
    "Murtala Muhammed Airport Hotel",
    "hotel near Lagos airport",
    "best hotel near Lagos airport",
    "luxury hotel near Lagos airport",
    "airport hotel Lagos",
    "hotel close to Murtala Muhammed International Airport",
    "hotel near Murtala Muhammed Airport Lagos",
    "best airport hotel in Lagos",
    "airport accommodation Lagos",
    "Lagos airport hotel booking",
    "hotel near airport terminal Lagos",
    "Airport Golden Tulip Hotel Lagos",
    "Golden Tulip Hotel Lagos airport",
    "Airport Golden Tulip near Lagos airport",
    "Golden Tulip airport hotel Nigeria",
    "Airport Golden Tulip Hotel Ikeja",
    "top hotels near Lagos airport",
    "recommended hotel near Lagos airport",
    "best place to stay near Lagos airport",
    "where to stay near Lagos airport",
    "overnight hotel near Lagos airport",
    "business hotel near Lagos airport",
    "hotel with airport shuttle Lagos",
    "hotel with swimming pool near Lagos airport",
    "conference hotel near Lagos airport",
    "5 star hotel near Lagos airport",
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
      "Lagos airport hotel Close to the Lagos Airport offering premium accommodation, dining, events and conference facilities.",
    url: "https://airportgoldentuliphotel.com",
    siteName: "Airport Golden Tulip Hotel",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning={true}
    >
      <body>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0XGZLVGQSY"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0XGZLVGQSY');
          `}
        </Script>

        <LoadingScreen />
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}