"use client";

import { useState } from "react";
import { Car, Target, Compass, CheckCircle } from "lucide-react";

const content = {
  vision: {
    label: "Our Vision",
    title: "Redefining the future of car rentals",
    description:
      "We imagine a world where mobility is simple, trustworthy, and available to everyone. Through innovation and premium service standards, we are shaping the next generation of car rental experiences.",
    points: [
      "Customer-first mindset always",
      "Uncompromised quality standards",
      "Vehicles maintained to perfection"
    ],
    icon: Car
  },
  mission: {
    label: "Our Mission",
    title: "Making every journey smooth and memorable",
    description:
      "Our mission is to deliver dependable, tech-driven, and customer-friendly rental services that make every trip stress-free and enjoyable.",
    points: [
      "Seamless digital booking",
      "Reliable and diverse fleet",
      "Safety and comfort assured"
    ],
    icon: Target
  },
  approach: {
    label: "Our Approach",
    title: "Built on trust, powered by innovation",
    description:
      "By blending smart technology with human-centric service, we ensure every interaction is efficient, transparent, and satisfying.",
    points: [
      "Transparent processes",
      "Continuous service improvement",
      "Consistent experience across locations"
    ],
    icon: Compass
  }
};

export default function AboutTab() {
  const [active, setActive] = useState("vision");
  const ActiveIcon = content[active].icon;

  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Who We Are
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover what drives us, what we stand for, and how we deliver
            exceptional car rental experiences.
          </p>
        </div>

        {/* Selector Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {Object.keys(content).map((key) => {
            const Icon = content[key].icon;
            const isActive = active === key;

            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`group text-left p-8 rounded-3xl border transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#FF3600] text-white border-[#FF3600] shadow-xl scale-105"
                      : "bg-white border-gray-200 hover:shadow-lg"
                  }`}
              >
                <Icon
                  className={`w-10 h-10 mb-4 ${
                    isActive
                      ? "text-white"
                      : "text-[#FF3600] group-hover:text-[#FF3600]"
                  }`}
                />
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  {content[key].label}
                </h3>
                <p
                  className={`text-sm ${
                    isActive ? "text-orange-100" : "text-gray-600"
                  }`}
                >
                  {content[key].title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full bg-orange-100 text-[#FF3600]">
              {content[active].label}
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {content[active].title}
            </h2>

            <p className="text-gray-600 mb-10">
              {content[active].description}
            </p>

            <ul className="space-y-5">
              {content[active].points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#FF3600] mt-1" />
                  <span className="text-gray-800 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-orange-100 rounded-[3rem] rotate-6"></div>
            <div className="relative w-80 h-80 bg-white rounded-[3rem] flex items-center justify-center shadow-2xl">
              <ActiveIcon className="w-36 h-36 text-[#FF3600]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
