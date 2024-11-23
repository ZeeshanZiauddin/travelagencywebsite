/** @format */

"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AirlineCarousel() {
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
            console.log("Next button found, triggering click...");
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
    <div className="w-full flex justify-center px-0  py-0 my-0">
      <Carousel
        ref={carouselRef}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: itemCount }).map((_, index) =>
            index > 0 ? (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <div>
                  <Card className={"bg-transparent border-none shadow-none"}>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        key={index}
                        src={`/airlines/${index}.png`}
                        className="max-w-[100px]"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ) : (
              ""
            )
          )}
        </CarouselContent>

        <CarouselNext
          data-carousel-next
          className={"bg-primary text-white hidden"}
        />
      </Carousel>
    </div>
  );
}
