/** @format */

"use client";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, PhoneCall } from "lucide-react";
import Link from "next/link";
import AirlineCarousel from "./airline-carousel";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0.3, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <section className="py-0 px-10 hidden lg:block">
        <div className="container overflow-hidden rounded-lg bg-violet-50 md:rounded-xl">
          <div className="flex w-full flex-col gap-16  px-10 py-4  lg:flex-row lg:items-center ">
            <div className="flex-1 py-2">
              <h3 className="mb-1 text-2xl font-semibold  md:text-4xl ">
                Just Reach us
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Let us help you make you dream flight to Sierra Leone Memorable.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outline">
                <Link href={"/contact-us"}>Contact us</Link>
                <PhoneCall />
              </Button>
              <Button>
                <Link href={"/"}>Send us a Query</Link>
                <ExternalLinkIcon />
              </Button>
            </div>
          </div>
          <div className="px-10">
            <div className=" mt-5 flex items-center text-muted-foreground text-sm gap-x-1.5 after:flex-[1_1_0%] after:border-t after:ms-6 ">
              <span className="font-semibold text-primary">20+</span>
              Some of the Papular airlines we deal with
            </div>
            <AirlineCarousel />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
