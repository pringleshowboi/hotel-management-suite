'use client';
import Image from "next/image";
import CountUpNumber from "../CountUpNumber/CountUpNumber";

const HeroSection = () => {
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        {/* Heading */}
        <h1 className="mb-6 font-medium text-3xl md:font-semibold md:text-6xl">
          Explore our Exquisite Hotel
        </h1>

        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg text-sm md:text-base">
          Experience an Exquisite Hotel Immersed in Rich History and Timeless
          Elegance. Discover Unparalleled Comfort and Exceptional Service in the
          Heart of the City.
        </p>

        {/* Primary Button */}
        <button className="px-6 md:px-[50px] lg:px-[72px] py-2 md:py-5 bg-primary rounded-lg md:rounded-2xl shadow-sm shadow-primary text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all">
          Get Started
        </button>

        {/* Room stats */}
        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-between">
            <p className="text-sm lg:text-xl text-center">Basic Room</p>
            <CountUpNumber duration={5000} endValue={100} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-between">
            <p className="text-sm lg:text-xl text-center">Luxury Room</p>
            <CountUpNumber duration={5000} endValue={100} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-between">
            <p className="text-sm lg:text-xl text-center">Suite</p>
            <CountUpNumber duration={5000} endValue={100} />
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="md:grid hidden gap-8 grid-cols-1">
        {/* Top image */}
        <div className="rounded-2xl overflow-hidden h-48">
          <Image
            src="/images/hero-1.jpeg"
            alt="hero-1"
            width={300}
            height={200}
            className="object-cover w-full h-full hover:scale-125 transition-all duration-700"
          />
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-2 gap-8 h-48">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-2.jpeg"
              alt="hero-2"
              width={300}
              height={200}
              className="object-cover w-full h-full hover:scale-125 transition-all duration-700"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-3.jpeg"
              alt="hero-3"
              width={300}
              height={200}
              className="object-cover w-full h-full hover:scale-125 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
