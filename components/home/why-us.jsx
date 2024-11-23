/** @format */

"use client";

import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <ZoomIn className="size-6" />,
  },
  {
    title: "Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BarChartHorizontal className="size-6" />,
  },
  {
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <CircleHelp className="size-6" />,
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <WandSparkles className="size-6" />,
  },
  {
    title: "Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <Layers className="size-6" />,
  },
  {
    title: "Efficiency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BatteryCharging className="size-6" />,
  },
];

const WhyUs = () => {
  return (
    <section className="px-8 lg:px-16 ">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <div className="md:text-center">
            <p className=" text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:tracking-tight lg:text-5xl">
              Why Should
              <span className="px-2 py-1 relative inline-block">
                <svg
                  className="stroke-current bottom-0 absolute text-primary/90 -translate-x-2"
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
                <span className="relative">You Choose Us?</span>
              </span>
            </p>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div key={i} className="grid grid-cols-6 md:grid-cols-1">
                <div className="mb-5 flex size-16 col-span-1 items-center justify-center rounded-full bg-accent">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-start text-xl flex items-center   font-semibold text-primary col-span-5 md:col-span-1">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-ghost col-span-6 md:col-span-1">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
