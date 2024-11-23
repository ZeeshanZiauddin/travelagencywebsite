/** @format */

import { HomeCarousel } from "./HomeCarousel";

const HeroCarousel = () => {
  return (
    <div className="px-12 lg:px-32 lg:py-20 py-10">
      <div className="grid lg:grid-cols-2 text-blue-50">
        <div>
          <h1 className="text-2xl lg:text-4xl font-extrabold lg:max-w-[22ch]">
            We offer Cheapest flights to Kinshasa
          </h1>
          <p className=" max-w-[60ch] text-primary-foreground/80 mt-2">
            Looking for affordable flights to Kinshasa? We make your journey
            from the UK smooth and budget-friendly. Book with us for the best
            deals and enjoy a hassle-free travel experience!
          </p>
        </div>
        <div className="hidden lg:block">
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
