/** @format */

"use client";

import ContactUs from "@/components/form/contact-form";
import AboutUs from "@/components/home/about-us";
import Team from "@/components/home/team";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const page = () => {
  return (
    <div className="container my-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="text-center my-20">
          <p className=" text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Cheapest Fairs
            <span className="px-2 py-1 relative inline-block">
              <svg
                className="stroke-current bottom-0 absolute text-red-500 -translate-x-2"
                viewBox="0 0 410 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  strokeWidth="12"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="relative">To your destinations</span>
            </span>
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            Take the leap and enjoy your vacation. Experience one of the most
            memorable moments of your life.
          </p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center">
            <ContactUs />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center">
            <Image
              src={"/aboutblob.png"}
              width={400}
              height={400}
              alt="Cheapest flights to you favourit destinations"
            />
          </div>
        </motion.div>
      </div>
      <Separator className={"my-10"} />
      <Team />
      <div className="mt-20">
        <AboutUs />
      </div>
    </div>
  );
};

export default page;
