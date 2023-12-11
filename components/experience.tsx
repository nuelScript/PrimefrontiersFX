"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-center lg:items-start items-center lg:space-x-8 lg:space-y-0 space-y-8 space-x-0 p-2">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
      >
        <Image
          src="/images/Experience.png"
          width={500}
          height={500}
          alt="Landing1"
        />
      </motion.div>
      <div className="flex flex-col h-full justify-center lg:items-start items-center space-y-6">
        <h1 className="text-4xl font-bold lg:w-3/4 w-full lg:text-start text-center">
          Smooth Experience on any Device
        </h1>
        <h3 className="text-lg font-light lg:text-start text-center lg:w-3/5 w-full">
          Whether you prefer trading at your desk or on the go — PrimeFrontiers
          FX has got you covered.
        </h3>
        <h3 className="text-lg font-light lg:text-start text-center lg:w-3/5 w-full">
          The custom-built platform has been adapted for any device you may
          choose and switching is 100% seamless.
        </h3>
      </div>
    </div>
  );
};

export default Experience;
