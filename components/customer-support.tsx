"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const CustomerSupport = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-center items-center lg:space-x-8 lg:space-y-0 space-x-0 space-y-8 px-2 py-6 bg-neutral-200 dark:bg-neutral-900 rounded-xl">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
      >
        <Image
          src="/images/Headset.webp"
          width={500}
          height={500}
          alt="Landing1"
        />
      </motion.div>

      <div className="flex flex-col justify-center lg:items-start items-center space-y-6">
        <h1 className="text-4xl font-bold lg:w-1/2 w-full lg:text-start text-center">
          Unrivaled 24/7 Customer Service
        </h1>
        <h3 className="text-lg font-light lg:text-start text-center lg:w-3/4 w-full">
          Got an issue? We respond under 5 minutes on live chat and solve the
          problem for you.
        </h3>

        <ul className="text-lg font-light lg:text-start text-center lg:w-3/4 w-full">
          <li>Contact us anytime, from anywhere</li>
          <li>One-to-one trading support for all clients</li>
        </ul>
      </div>
    </div>
  );
};
