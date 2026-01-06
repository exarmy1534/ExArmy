"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  CreditCard,
  Car,
  ShieldCheck,
  Mail,
} from "lucide-react";

const categories = [
  "General",
  "Pricing",
  "Bookings",
  "Safety",
  "Support",
];

const faqData = {
  General: [
    {
      id: "g1",
      icon: <Car className="w-5 h-5 text-gray-500" />,
      question: "What services does Ex-Army Travels provide?",
      answer:
        "Ex-Army Travels provides professional car rental services including airport transfers, temple tours, local sightseeing, and outstation trips across Varanasi, Prayagraj, Ayodhya, Sarnath, and nearby cities.",
    },
    {
      id: "g2",
      icon: <HelpCircle className="w-5 h-5 text-gray-500" />,
      question: "Do you provide drivers with the vehicle?",
      answer:
        "Yes, all our rentals include experienced and disciplined Ex-Army drivers for a safe and comfortable journey.",
    },
  ],

  Pricing: [
    {
      id: "p1",
      icon: <CreditCard className="w-5 h-5 text-gray-500" />,
      question: "How is the rental price calculated?",
      answer:
        "Pricing is calculated based on distance, duration, vehicle type, and route. We provide complete fare details before booking confirmation.",
    },
    {
      id: "p2",
      icon: <CreditCard className="w-5 h-5 text-gray-500" />,
      question: "Are there any hidden charges?",
      answer:
        "No, we follow transparent pricing. Toll taxes, parking, and state taxes (if applicable) are clearly discussed beforehand.",
    },
  ],

  Bookings: [
    {
      id: "b1",
      icon: <HelpCircle className="w-5 h-5 text-gray-500" />,
      question: "How can I book a car?",
      answer:
        "You can book a car by calling us, sending a WhatsApp message, or submitting a booking request through our website.",
    },
    {
      id: "b2",
      icon: <HelpCircle className="w-5 h-5 text-gray-500" />,
      question: "Can I modify or cancel my booking?",
      answer:
        "Yes, bookings can be modified or cancelled free of charge up to 24 hours before the scheduled pickup time.",
    },
  ],

  Safety: [
    {
      id: "s1",
      icon: <ShieldCheck className="w-5 h-5 text-gray-500" />,
      question: "Are your drivers verified?",
      answer:
        "Yes, all drivers are Ex-Army personnel, background-verified, professionally trained, and follow strict safety standards.",
    },
    {
      id: "s2",
      icon: <ShieldCheck className="w-5 h-5 text-gray-500" />,
      question: "Are the vehicles well maintained?",
      answer:
        "All vehicles are regularly serviced, sanitized, and inspected to ensure safety and comfort for passengers.",
    },
  ],

  Support: [
    {
      id: "su1",
      icon: <Mail className="w-5 h-5 text-gray-500" />,
      question: "How can I contact customer support?",
      answer:
        "You can reach us anytime via email at exarmy1534@gmail.com or call/WhatsApp us at +91 78309 31514. Our support team is available 24/7.",
    },
  ],
};

function PolicyMain() {
  const [active, setActive] = useState("General");

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 text-lg">
            Find answers about our car rental services, pricing, bookings, and support.
            Can't find what you're looking for?{" "}
            <span className="text-[#FF3600] font-medium cursor-pointer">
              Chat with our team
            </span>
          </p>
        </div>

        {/* CATEGORY PILLS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition
                ${
                  active === item
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData[active].map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border rounded-xl px-4"
            >
              <AccordionTrigger className="flex gap-3 text-left text-base font-semibold">
                {faq.icon}
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default PolicyMain;
