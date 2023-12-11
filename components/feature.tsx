"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-2 w-fit">
      <div className="flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-x-0 space-y-4">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className="flex flex-col items-center space-y-4 rounded-lg bg-neutral-200 dark:bg-neutral-900 p-8"
        >
          <Image
            src="/images/Feature1.png"
            alt="offer_images"
            width={500}
            height={500}
          />
          <h3 className="text-2xl font-semibold capitalize">
            Fast Registration
          </h3>
          <p className="font-normal text-base text-center lg:w-3/4 w-full">
            Only 1 minute and you&apos;re in. Enter the information you need to
            become a platform investor and start right away.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className="flex flex-col items-center space-y-4 rounded-lg bg-neutral-200 dark:bg-neutral-900 p-8"
        >
          <Image
            src="/images/Feature2.png"
            alt="offer_images"
            width={500}
            height={500}
          />
          <h3 className="text-2xl font-semibold capitalize">Fast Trades</h3>
          <p className="font-normal text-base text-center lg:w-3/4 w-full">
            We know you can&apos;t afford to lose. Get in the trade at exactly
            the price level you set with our platform.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className="flex flex-col items-center space-y-4 rounded-lg bg-neutral-200 dark:bg-neutral-900 p-8"
        >
          <Image
            src="/images/Feature3.png"
            alt="offer_images"
            width={500}
            height={500}
          />
          <h3 className="text-2xl font-semibold capitalize">Timely Support</h3>
          <p className="font-normal text-base text-center lg:w-3/4 w-full">
            We provide unbeatable support service via email or live chat to give
            a professional and fast response
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
