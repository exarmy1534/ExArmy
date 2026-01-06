"use client";

import React from "react";
import { InfiniteMovingCards } from "../src/components/ui/infinite-moving-cards";

export default function Section() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <h3 className="text-xl md:text-2xl font-bold text-[#D97706] mb-5">
        Explore With Ease
      </h3>
      <h2 className="text-[1.3rem] md:text-5xl font-bold text-gray-900 mt-4 mb-6">
        Book Rides Across Popular Cities
      </h2>

      <InfiniteMovingCards items={destinations} direction="right" speed="slow" />
    </div>
  );
}

const destinations = [
  {
    name: "Kashi Vishwanath Temple",
    description:
      "Visit the sacred temple dedicated to Lord Shiva in the heart of Varanasi.",
    image: "/Kashi.jpg",
  },
  {
    name: "Sarnath",
    description:
      "A peaceful Buddhist site where Lord Buddha gave his first sermon.",
    image: "/Sarnath.jpg",
  },
  {
    name: "Varanasi Airport",
    description:
      "Reliable taxi transfers to and from Lal Bahadur Shastri Airport.",
    image: "/Airport.jpg",
  },
  {
    name: "Assi Ghat",
    description:
      "Famous for sunrise rituals, Ganga aarti, and boat rides.",
    image: "/Ghat.jpg",
  },
  {
    name: "Ramnagar Fort",
    description:
      "A historic 17th-century fort and museum along the Ganges.",
    image: "/Fort.jpg",
  },
  {
    name: "Banaras Hindu University",
    description:
      "A vast historic campus with temples and peaceful surroundings.",
    image: "/BHU.jpg",
  },
  {
    name: "Ayodhya Ram Mandir",
    description:
      "The sacred birthplace of Lord Rama and a major pilgrimage site.",
    image: "/Ayodhya.jpg",
  },
  {
    name: "Triveni Sangam, Prayagraj",
    description:
      "The holy confluence of the Ganga, Yamuna, and Saraswati rivers.",
    image: "/Prayag.jpg",
  },
  {
    name: "Bodh Gaya",
    description:
      "Home to the Mahabodhi Temple where Buddha attained enlightenment.",
    image: "/Bodh.jpg",
  },
];
