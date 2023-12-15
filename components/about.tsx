"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-fit">
      <h3 className="text-2xl font-semibold capitalize">About Us</h3>
      <p className="font-normal text-base text-center w-3/4">
        Most Flexible Crypto Mining Platform
      </p>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
        className="flex flex-col items-center space-y-4 rounded-lg bg-neutral-200 dark:bg-neutral-900 p-8"
      >
        <Image
          src="/images/license.png"
          alt="license"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
};

export default AboutPage;
