"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Offer = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-2 w-fit">
      <h3 className="text-2xl font-semibold capitalize">What we offer</h3>
      <p className="font-normal text-base text-center w-3/4">
        We&apos;re building a new standard for trading and mining. One account
        with streamlined access to multiple liquidity venues.
      </p>
      <div className="flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-x-0 space-y-4">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className="flex flex-col items-center space-y-4 rounded-lg bg-neutral-200 dark:bg-neutral-900 p-8"
        >
          <Image
            src="/images/kanchanara-zT4aoACBRoI-unsplash.jpg"
            alt="offer_images"
            width={500}
            height={500}
          />
          <h3 className="text-2xl font-semibold capitalize">Crypto Mining</h3>
          <p className="font-normal text-base text-center lg:w-3/4 w-full">
            Now you can start trading Bitcoin, Ethereum and many more
            cryptocurrencies quickly, easily and safely from wherever you are —
            in just seconds
          </p>
          <Link href="/bitcoin-mining" passHref>
            <Button variant="default">Learn More</Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className="flex flex-col items-center space-y-4 rounded-lg bg-neutral-200 dark:bg-neutral-900 p-8"
        >
          <Image
            src="/images/maxim-hopman-fiXLQXAhCfk-unsplash.jpg"
            alt="offer_images"
            width={500}
            height={500}
          />
          <h3 className="text-2xl font-semibold capitalize">Crypto Mining</h3>
          <p className="font-normal text-base text-center lg:w-3/4 w-full">
            Now you can start trading Bitcoin, Ethereum and many more
            cryptocurrencies quickly, easily and safely from wherever you are —
            in just seconds
          </p>
          <Link href="/crypto-mining" passHref>
            <Button variant="default">Learn More</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
