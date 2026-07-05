import Footer from "../../components/Footer";
import Any from "../../components/Any";
import Hero from "../../components/Hero";
import NavContainer from "../../components/NavContainer";
import Service from "../../components/Service";
import Section from "../../components/Section";
import Testimonial from "../../components/Testimonial";
import PolicyMain from "../../components/PolicyMain";
import HomeSeoContent from "../../components/HomeSeoContent";

export const metadata = {
  title:
    "Ex Army Travels | Best Taxi Service & Car Rental in Varanasi",

  description:
    "Book trusted taxi service in Varanasi with Ex Army Travels. Airport transfers, railway station pickup, local sightseeing, outstation cab booking, Innova Crysta, Ertiga, Sedan, SUV and Tempo Traveller available 24x7.",

  keywords: [
    "Ex Army Travels",
    "taxi service in varanasi",
    "car rental in varanasi",
    "cab booking varanasi",
    "airport taxi varanasi",
    "airport cab varanasi",
    "railway station taxi varanasi",
    "varanasi taxi service",
    "outstation cab varanasi",
    "one way taxi varanasi",
    "round trip taxi",
    "tempo traveller varanasi",
    "innova crysta rental varanasi",
    "ertiga taxi varanasi",
    "sedan taxi varanasi",
    "chauffeur driven car rental",
    "best taxi service varanasi",
    "cheap taxi varanasi",
    "cab near me varanasi",
    "exarmytravels.com"
  ],

  alternates: {
    canonical: "https://exarmytravels.com",
  },

  openGraph: {
    title:
      "Ex Army Travels | Taxi Service & Car Rental in Varanasi",

    description:
      "24x7 Taxi Service in Varanasi. Airport Taxi, Local Sightseeing, Railway Station Pickup, Outstation Cab Booking and Car Rental.",

    url: "https://exarmytravels.com",

    siteName: "Ex Army Travels",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://exarmytravels.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ex Army Travels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Ex Army Travels | Taxi Service in Varanasi",

    description:
      "Book Airport Taxi, Local Sightseeing, Outstation Cab and Car Rental in Varanasi.",

    images: ["https://exarmytravels.com/og-image.jpg"],
  },

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
};

export default function Home() {
  return (
    <section className="w-full">

      {/* Taxi Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",

            "@id": "https://exarmytravels.com/#business",

            name: "Ex Army Travels",

            url: "https://exarmytravels.com",

            logo: "https://exarmytravels.com/logo.png",

            image: "https://exarmytravels.com/logo.png",

            description:
              "Ex Army Travels provides airport taxi, local sightseeing, railway station pickup, outstation taxi and chauffeur driven car rental services in Varanasi.",

            telephone: "+917830931514",

            email: "exarmy1534@gmail.com",

            priceRange: "₹₹",

            openingHours: "Mo-Su 00:00-23:59",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Varanasi",
              addressRegion: "Uttar Pradesh",
              postalCode: "221001",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: "25.3176",
              longitude: "82.9739",
            },

            areaServed: [
              "Varanasi",
              "Sarnath",
              "Prayagraj",
              "Ayodhya",
              "Vindhyachal",
              "Bodh Gaya",
              "Lucknow",
              "Gorakhpur",
              "Jaunpur",
              "Mirzapur",
            ],

            serviceType: [
              "Taxi Service",
              "Airport Taxi",
              "Airport Transfer",
              "Railway Station Pickup",
              "Railway Station Drop",
              "Local Sightseeing",
              "Outstation Cab",
              "One Way Taxi",
              "Round Trip Taxi",
              "Car Rental",
              "Corporate Travel",
              "Tempo Traveller",
              "Innova Crysta Rental",
              "SUV Rental",
              "Sedan Rental",
            ],

            sameAs: [
              "https://www.facebook.com/YOUR_PAGE",
              "https://www.instagram.com/YOUR_USERNAME"
            ],
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "WebSite",

            "@id": "https://exarmytravels.com/#website",

            url: "https://exarmytravels.com",

            name: "Ex Army Travels",

            publisher: {
              "@id": "https://exarmytravels.com/#organization",
            },

            potentialAction: {
              "@type": "SearchAction",

              target:
                "https://exarmytravels.com/?q={search_term_string}",

              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "Organization",

            "@id": "https://exarmytravels.com/#organization",

            name: "Ex Army Travels",

            url: "https://exarmytravels.com",

            logo: "https://exarmytravels.com/logo.png",

            email: "exarmy1534@gmail.com",

            telephone: "+917830931514",
          }),
        }}
      />

      <header>
        <NavContainer />
      </header>

      <main>
        <Hero />

        <Any />

        <Service />

        <Section />

        <HomeSeoContent />

        <Testimonial />

        <PolicyMain />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
