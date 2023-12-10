"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LandingBanner = () => {
  return (
    <div className="flex justify-center space-x-8">
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-6xl font-bold w-1/2">Profitability on the Rise</h1>
        <h3 className="text-lg font-light w-3/4">
          A trading platform that supports your financial goals.
        </h3>
        <Link href="/sign-up" passHref>
          <Button variant="default">Get Started</Button>
        </Link>
      </div>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
      >
        <Image
          src="/images/Landing1.png"
          width={500}
          height={500}
          alt="Landing1"
        />
      </motion.div>
    </div>
  );
};

export default LandingBanner;
