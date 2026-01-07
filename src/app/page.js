"use client"

import { useState } from "react";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Any from "../../components/Any";
import Hero2 from "../../components/Hero2";
import Hero from "../../components/Hero";
import Last from "../../components/Last";
import Nav from "../../components/Nav";
import Nav2 from "../../components/Nav2";
import Review from "../../components/Review";
import Service from "../../components/Service";
import Side from "../../components/Side";
import Testimonial from "../../components/Testimonial";

import Section from "../../components/Section";
import PolicyAccordion from "../../components/PolicyAccordion";
import PolicyMain from "../../components/PolicyMain";
import HomeSeoContent from "../../components/HomeSeoContent";


export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <section className=" w-full">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "Ex Army Travels",
            "image": "https://exarmytravels.com/logo.png",
            "url": "https://exarmytravels.com",
            "telephone": "+917830931514",
            "email": "exarmy1534@gmail.com",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Varanasi",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "Varanasi"
            },
            "serviceOffered": [
              {
                "@type": "Service",
                "name": "Car Rental Service"
              },
              {
                "@type": "Service",
                "name": "Taxi Service"
              },
              {
                "@type": "Service",
                "name": "Airport Transfer"
              },
              {
                "@type": "Service",
                "name": "Outstation Cab Service"
              }
            ]
          }),
        }}
      />




      <header>
        <Nav open={open} setOpen={setOpen} />
        <Side open={open} setOpen={setOpen} />
      </header>

      <main>
        <Hero />



        <Any />
        <Service />






        <Section/>


        <HomeSeoContent />


        <Testimonial />
        <PolicyMain />

        {/* <Last /> */}
      </main>
      <footer>
        <Footer />
      </footer>



    </section>
  );
}
