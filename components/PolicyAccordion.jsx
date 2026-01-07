"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Car,
  ShieldCheck,
  CreditCard,
  HelpCircle,
  Mail,
} from "lucide-react";

const policies = [
  {
    id: "1",
    icon: <Car className="w-5 h-5 text-gray-500" />,
    question: "Driver's License Requirements",
    answer:
      "A valid driving license with at least one year of experience is required to rent a vehicle.",
  },
  {
    id: "2",
    icon: <ShieldCheck className="w-5 h-5 text-gray-500" />,
    question: "Insurance and Coverage Policy",
    answer:
      "All rentals include basic insurance coverage. Optional upgrades are available.",
  },
  {
    id: "3",
    icon: <CreditCard className="w-5 h-5 text-gray-500" />,
    question: "Available Payment Methods",
    answer: "We accept UPI, cards, net banking, and cash payments.",
  },
  {
    id: "4",
    icon: <HelpCircle className="w-5 h-5 text-gray-500" />,
    question: "Cancellation and Modification Policy",
    answer: "Free cancellation up to 24 hours before pickup time.",
  },
  {
    id: "5",
    icon: <ShieldCheck className="w-5 h-5 text-gray-500" />,
    question: "Smoking and Pet Policy",
    answer: "Smoking is not allowed. Pets are permitted only in selected cars.",
  },
  {
    id: "6",
    icon: <Mail className="w-5 h-5 text-gray-500" />,
    question: "Minimum Age Requirement",
    answer: "The minimum age to rent a car is 21 years.",
  },
];

function PolicyAccordion() {
  return (
    <section className="w-full py-20 bg-[#F9FAFB] flex items-center justify-center">
      <div className="max-w-4xl px-6 w-full">

        <h2 className="text-xl md:text-3xl text-center lg:text-4xl font-bold text-black mb-12">
          Policies and Agreement
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {policies.map((policy) => (
            <AccordionItem
              key={policy.id}
              value={policy.id}
              className="border rounded-2xl px-4"
            >
              <AccordionTrigger className="flex gap-3 text-lg cursor-pointer font-semibold">
                {policy.icon}
                {policy.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {policy.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default PolicyAccordion;
