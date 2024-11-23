/** @format */

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export function HomeCarousel() {
  const carouselRef = React.useRef(null);
  const intervalRef = React.useRef(null); // Ref to store the interval ID
  const itemCount = 10; // Total number of items in the carousel

  React.useEffect(() => {
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        if (carouselRef.current) {
          const nextButton = carouselRef.current.querySelector(
            "[data-carousel-next]"
          );
          if (nextButton) {
            nextButton.click(); // Simulate a click on the "Next" button
          } else {
            console.warn("Next button not found!");
          }
        } else {
          console.warn("Carousel ref is not set!");
        }
      }, 3000); // Change slides every 3 seconds
    };

    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Cleanup the interval on component unmount
      }
    };
  }, []);
  return (
    <Carousel
      ref={carouselRef}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full "
    >
      <CarouselContent>
        <CarouselItem className={"max-h-[200px]"}>
          <div className="max-w-[600px] aspect-[21/7]   rounded-xl overflow-hidden ">
            <img
              src={"/herobg2.jpg"}
              className=" w-full"
              alt=" cheap flights"
            />
          </div>
        </CarouselItem>
        <CarouselItem className={"max-h-[200px]"}>
          <div className="max-w-[600px] aspect-[21/7]  rounded-xl overflow-hidden ">
            <img
              src={"/herobg0.jpg"}
              className=" w-full"
              alt=" cheap flights"
            />
          </div>
        </CarouselItem>
        <CarouselItem className={"max-h-[200px]"}>
          <div className="max-w-[600px] aspect-[21/7]  rounded-xl overflow-hidden ">
            <img
              src={"/herobg1.jpg"}
              className=" w-full"
              alt=" cheap flights"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext data-carousel-next className={"hidden"} />
    </Carousel>
  );
}
