import Script from "next/script";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Cursor from "../../components/Cursor";
import SmoothScroll from "../../components/SmoothScroll";
import Whatsapp from "../../components/Whatsapp";
import Call from "../../components/Call";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "Ex Army Travels - Trusted Car & Taxi Rental in Varanasi",
  description:
    "Ex Army Travels offers safe and professional car rental services in Varanasi. Book local taxis, airport pickup, outstation cabs and chauffeur-driven cars at affordable rates.",

  keywords: [
    "Ex Army Travels Varanasi",
    "trusted taxi service in varanasi",
    "car hire in varanasi",
    "airport cab booking varanasi",
    "outstation taxi from varanasi",
    "chauffeur car rental varanasi",
    "reliable cab service varanasi",
    "local taxi in varanasi",
    "army background travel service",
  ],

  metadataBase: new URL("https://exarmytravels.com"),

  openGraph: {
    title: "Ex Army Travels | Reliable Car Rental & Taxi Service in Varanasi",
    description:
      "Professional taxi and car rental services in Varanasi by Ex Army Travels. Airport transfers, local rides and outstation travel with trained drivers.",
    url: "https://exarmytravels.com",
    siteName: "Ex Army Travels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ex Army Travels – Reliable taxi and car rental service in Varanasi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SBQTX18BJ9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SBQTX18BJ9');
          `}
        </Script>
      </head>

      <body
        className={`bg-white ${openSans.variable} scroll-smooth font-opensans`}
      >
        {children}
        <Cursor />
        <SmoothScroll />
        <Whatsapp />
        <Call />

        {/* Font Awesome */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
