"use client"

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { X, CheckCircle } from "lucide-react";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import Side from "../../../../components/Side";
import PolicyAccordion from "../../../../components/PolicyAccordion";
import Link from "next/link";

export default function CarDetails({ params }) {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [carName, setCarName] = useState("");

  // Unwrap params safely in useEffect
  useEffect(() => {
    (async () => {
      const resolvedParams = await params; // unwrap promise if necessary
      setCarName(decodeURIComponent(resolvedParams.name));
    })();
  }, [params]);

  useEffect(() => {
    if (!carName) return;

    async function fetchCar() {
      try {
        const res = await fetch("/api/cars");
        const data = await res.json();

        const foundCar = data.find(
          (c) => c.name.toLowerCase() === carName.toLowerCase()
        );

        setCar(foundCar || null);
      } catch (err) {
        console.error("Error fetching car:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCar();
  }, [carName]);

  if (loading || !carName) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        <span className="loading loading-dots text-[#FBBF24] loading-xl"></span>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-semibold">
        Car not found
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>
          {`${car.name} Car Rental in Varanasi | Ex-Army Travels`}
        </title>

        <meta
          name="description"
          content={`Book ${car.name} car rental in Varanasi with Ex-Army Travels. Professional Ex-Army drivers, clean and well-maintained cars, airport transfers, temple tours, and outstation trips at affordable prices.`}
        />

        {/* Open Graph (Facebook / WhatsApp) */}
        <meta
          property="og:title"
          content={`${car.name} Car Rental in Varanasi | Ex-Army Travels`}
        />
        <meta
          property="og:description"
          content={`Rent ${car.name} in Varanasi with trusted Ex-Army drivers. Ideal for airport pickup, temple tours, local sightseeing, and outstation travel.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${car.name} Car Rental in Varanasi | Ex-Army Travels`}
        />
        <meta
          name="twitter:description"
          content={`Affordable ${car.name} car rental service in Varanasi with disciplined Ex-Army drivers. Book now for airport and outstation trips.`}
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Varanasi" />
      </Head>


      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />

      <section className="max-w-7xl mx-auto px-6 py-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-3xl p-8 order-2 lg:order-1">
            <h1 className="text-3xl text-black font-bold mb-2">{car.name}</h1>
            <p className="text-black mb-6">{car.location}</p>

            <h2 className="text-xl font-semibold text-black mb-4">Rates</h2>

            <div className="space-y-4">
              {car.rates.map((rate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <span className="text-black">{rate.label}</span>
                  <div className="flex items-center gap-6">
                    <span className="font-semibold text-black">{rate.price}</span>
                    <X className="text-black" size={18} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 items-center justify-center">
              <Link href={`/contact?car=${encodeURIComponent(car.name)}`}><button
                onMouseEnter={() => window.cursor?.enter()}
                onMouseLeave={() => window.cursor?.leave()}
                className="bg-gradient-to-r from-[#FBBF24] to-[#D97706] text-white cursor-pointer active:bg-[#D97706] hover:bg-[#D17106] transition-all text-white px-8 py-4 rounded-full font-semibold"
              >
                Book Now
              </button>
              </Link>

              <a
                href="tel:+917830931514"
                onMouseEnter={() => window.cursor?.enter()}
                onMouseLeave={() => window.cursor?.leave()}
                className="flex cursor-pointer items-center active:bg-gray-100 justify-center w-12 h-12 border border-[#FBBF24] hover:bg-yellow-50 transition-all rounded-full text-[#D97706]"
              >
                <i className=" text-[#D97706] fa-solid fa-phone"></i>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden order-1 lg:order-2">
            <Image
              src={car.image || "/AMAZE.png"}
              alt={car.name}
              width={800}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>

        </div>
      </section>

      <section className="w-full py-24 bg-[#F9FAFB] flex items-center justify-center">
  <div className="max-w-6xl w-full px-6">

    {/* TOP LABEL */}
    <p className="text-[#D97706] font-semibold mb-4 flex items-center gap-2 uppercase tracking-wide">
      <span className="text-xl">*</span>
      General Information
    </p>

    {/* MAIN HEADING */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
      Know About Our <span className="text-[#D97706]">Car Rental Service</span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-gray-700 max-w-4xl mb-12 leading-relaxed text-lg">
      Ex-Army Travels offers reliable and affordable car rental services in
      Varanasi, ensuring safe, comfortable, and stress-free journeys.
      From seamless bookings to professionally maintained vehicles and
      disciplined Ex-Army drivers, we deliver quality service at every step.
    </p>

    {/* FEATURES */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
      
      <li className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
        <CheckCircle className="text-[#FBBF24] w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-black text-lg">
            24/7 Roadside Assistance
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Travel with confidence knowing help is always available.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
        <CheckCircle className="text-[#FBBF24] w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-black text-lg">
            Free Cancellation & Return
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Flexible booking policies designed for your convenience.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
        <CheckCircle className="text-[#FBBF24] w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-black text-lg">
            Rent Now, Pay When You Arrive
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            No advance pressure — pay only when your journey begins.
          </p>
        </div>
      </li>

      <li className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
        <CheckCircle className="text-[#FBBF24] w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-black text-lg">
            Trusted Ex-Army Drivers
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Professional, disciplined, and safety-focused chauffeurs.
          </p>
        </div>
      </li>

    </ul>

  </div>
</section>


      <PolicyAccordion />
      <Footer />
    </>
  );
}
