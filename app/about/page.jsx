/** @format */

"use client";

import AboutUs from "@/components/home/about-us";
import Team from "@/components/home/team";
import WhyUs from "@/components/home/why-us";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const page = () => {
  return (
    <div className="w-100  my-5 rounded-xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="lg:text-center my-20 block">
          <p className="lg:text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:tracking-tight lg:text-6xl">
            Get to
            <span className="px-2 py-1 relative inline-block">
              <svg
                className="stroke-current bottom-0 absolute text-primary -translate-x-2"
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
              <span className="relative"> Know About Us</span>
            </span>
          </p>
          <div className=" w-full mt-5 block lg:flex justify-center ">
            <span className=" max-w-[50ch] text-xl text-gray-500 block">
              We aim to be your trusted partner for flights, ensuring every
              journey is smooth and stress-free
            </span>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 justify-center lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-primary mb-1">About us</p>
            <h2 className="text-4xl max-w-[30ch]">
              Connecting You to the World with Seamless Travel Solutions
            </h2>
            <p className="text-gray-500 max-w-[60ch] text-[15px] mt-2">
              At CheapFlightsToSierraLeone, we specialize in providing
              affordable, reliable flight services between the UK and Sierra
              Leone. Our mission is to make your travel experience seamless and
              cost-effective, whether you're heading to Sierra Leone for
              business, leisure, or to visit family. We understand the
              importance of finding the best deals, so we work tirelessly to
              offer you the lowest prices without compromising on quality or
              service. With our expertise and dedication, we aim to be your
              trusted partner for flights to and from Sierra Leone, ensuring
              every journey is smooth and stress-free.
            </p>
            <p className="text-gray-500 w-[60ch] text-[15px] mt-2">
              Send us a message, and let us help you book an cheap, affordable
              and hasle free trip to Sierra Leone.
            </p>
            <div className="mt-2">
              <Button variant={"secondary"}>
                <Link href={"/contact-us"}>Contact Us</Link>
              </Button>
              <Button className="ms-2">
                <Link href={"/"}>Book your flight</Link>
                <ExternalLink />
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className=" justify-center items-center hidden lg:flex">
            <Image
              src={"/aboutblob.png"}
              height={450}
              width={450}
              className="w-100"
              alt="about us blob image"
            />
          </div>
        </motion.div>
      </div>
      <Separator className={"my-20"} />
      <WhyUs />
      <Separator className={"my-20"} />
      <Team />
      <Separator className={"my-20"} />
      <AboutUs />
      <Separator className={"my-20"} />
    </div>
  );
};

export default page;
