"use client";

import Image from "@/node_modules/next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handlescroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 paddding-x">
        <h1 className="hero__title">
          find, book, or rent a car --quickly and easily!
        </h1>
        <p className="hero__subtitle">
          streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore-cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handlescroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png"  alt="hero" 
          fill className="object-contain" 
          />
          
          <div  className="hero__image-overlay"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
