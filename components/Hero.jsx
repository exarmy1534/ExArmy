"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import String from "./String";
import Form from "./Form";
import HeroFeatures from "./HeroFeatuers";
import { FlipWords } from "@/components/ui/flip-words";
const bn1 =
  "https://res.cloudinary.com/dkxoayrd0/image/upload/v1765718507/pexels-neosiam-590059_jvcosx.jpg";


export default function Hero() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);
  const words=[
  "Rental Service",
  "Hire Service",
  "Booking Service",
  "Travel Service",
  "Taxi Service",
  "Cab Service",
  "Rental Provider",
  "Travel Partner"
]

  const [hover, sethover] = useState(false);

  const refdot = useRef(null);

  useEffect(() => {
    gsap.set(imgRef.current, { opacity: 0, scale: 1.05 });
    gsap.set(textRef.current, { opacity: 0, x: 300 });

    const fadeIn = gsap.to(imgRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    const slideText = gsap.to(textRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power2.inOut",
    });

    return () => {
      fadeIn.kill();
      slideText.kill();
    };
  }, [index]);

  useEffect(() => {
    gsap.to(refdot.current, {
      y: 25,              // move upward by 10px
      duration: 0.8,       // how fast it moves
      repeat: -1,          // infinite loop
      yoyo: true,          // goes up, then down
      ease: "power1.inOut" // smooth motion
    });
  }, []);






  return (
    <>

      <section className=" mt-17 flex-col  w-full h-[155vh] md:h-[140vh] lg:h-[125vh]   overflow-hidden flex items-center justify-center">

        <div className="relative flex-col  flex items-center justify-center h-full w-full">
          {/* Overlay Text */}
          <div
            ref={textRef}
            className="absolute inset-0   h-[40rem] flex flex-col justify-center items-center lg:items-start lg:ml-10  md:justify-start top-20 z-1"
          >
            <div className=" mt-5 py-4 rounded-full border-yellow-600 border-2 px-8 bg-yellow-300/20 flex items-center justify-center text-center">
              <h1 className=" text-[1rem] md:text-xl font-bold text-[#FBBF24]">Car Rental Service In Varanasi</h1>
            </div>
            <h1 className="font-ubuntu font-semibold ml-2 text-3xl md:text-4xl lg:text-7xl text-white drop-shadow-lg mt-5">Reliable Car</h1>
            <h1 className=" font-ubuntu font-semibold  text-3xl md:text-4xl lg:text-7xl text-white drop-shadow-lg mt-1">
            
              {<FlipWords duration={2000} words={words} />
              } 
            </h1>
            <h1 className="font-ubuntu font-semibold  text-4xl lg:text-7xl text-[#FBBF24] drop-shadow-lg mt-3">
              You Can Trust
            </h1>

            <h2 className="font-ubuntu font-medium text-center  text-xl  text-white drop-shadow-lg mt-10">Safe, comfortable, and affordable travel solutions.</h2>

            <div className=" relative z-[999] mt-10 flex items-center justify-center ">
              <HeroFeatures />
            </div>


            <div className=" py-5   gap-5 w-full h-16 md:h-28 flex justify-center lg:justify-start">
              <Link className="   " href="/contact"><button onMouseEnter={() => window.cursor?.enter()}
                onMouseLeave={() => window.cursor?.leave()} className=" active:bg-black h-14 w-40 md:w-48 rounded-2xl bg-[#D97706] cursor-pointer hover:bg-[#D97706]/70 transition-all ease-in-out flex items-center justify-center">
                <h5 className=" font-semibold text-white">Book Now</h5>
              </button>
              </Link>
              <Link className="    " href="/rent"><button onMouseEnter={() => { window.cursor?.enter(); sethover(true) }}
                onMouseLeave={() => { window.cursor?.leave(); sethover(false) }} className=" active:bg-black h-14 w-40 rounded-2xl bg-black/60 backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-all ease-linear flex items-center justify-center">
                <h5 className={`font-semibold ${hover ? "text-black" : "text-white"}`}>View Cars</h5>
              </button>
              </Link>
            </div>


            <div className=" mt-40 w-32 h-10"></div>
          </div>






          {/* Image */}
          {/* Image */}
          <div className=" flex items-center justify-center flex-col  w-full h-full">
            <div ref={imgRef} className=" relative flex items-center flex-col justify-center inset-0 h-full w-full ">
              <Image
                src="/bg.jpg"
                alt={`Banner `}
                fill
                priority
                className="object-cover brightness-70 h-full w-full pointer-events-none   "
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className=" bg-white z-[99999] flex absolute bottom-0 md:bottom-10  lg:rounded-[3rem] h-fit  w-fit">

                <Form />

              </div>

            </div>

          </div>
        </div>


      </section>
    </>
  );
}
