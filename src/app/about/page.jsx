"use client";

import {
  Car,
  ShieldCheck,
  Users,
  Clock,
  Asterisk,
  MapPin
} from "lucide-react";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav from "../../../components/Nav";
import Side from "../../../components/Side";
import Footer from "../../../components/Footer";
import AboutTab from "../../../components/AboutTab";
import PolicyAccordion from "../../../components/PolicyAccordion";
import Last from "../../../components/Last";
import AboutSeoContent from "../../../components/AboutSeoContent";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  const [open, setOpen] = useState(false);

  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="w-full bg-[#FFFBF2] py-48 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="flex items-center justify-center gap-2 text-[#D97706] font-semibold mb-4">
            <Asterisk size={16} /> About Ex-Army Travels
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discipline. Safety.
            <br />
            <span className="text-[#FBBF24]">Reliable Car Rentals</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Ex-Army Travels is a trusted car rental service in Varanasi,
            delivering safe, comfortable, and punctual journeys with the
            discipline and integrity inspired by Indian Army values.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section
        ref={contentRef}
        className="w-full bg-white py-32 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Ex-Army Travels?
            </h2>

            <p className="text-gray-600 text-lg">
              We are more than just a taxi service. Our foundation is built on
              trust, punctuality, and customer satisfaction. Every journey is
              handled with professional care by experienced drivers.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <ShieldCheck className="text-[#D97706]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Safety First
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Regularly maintained vehicles and disciplined drivers ensure
                    a secure travel experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Clock className="text-[#D97706]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Always On Time
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Airport transfers, temple tours, and outstation trips —
                    punctuality is our promise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Users className="text-[#D97706]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Professional Drivers
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Courteous, trained, and experienced drivers who know
                    Varanasi inside out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center items-center">
            <div className="w-80 h-80 rounded-full bg-yellow-50 flex items-center justify-center">
              <Car className="w-32 h-32 text-[#FBBF24]" />
            </div>

            <div className="absolute bottom-0 right-0 w-52 h-52 rounded-full bg-white shadow-lg flex items-center justify-center">
              <MapPin className="w-20 h-20 text-[#D97706]" />
            </div>
          </div>
        </div>
      </section>

      {/* EXTRA SECTIONS */}
      <AboutTab />
      <AboutSeoContent />
      <PolicyAccordion />
    

      <footer>
        <Footer />
      </footer>
    </>
  );
}
