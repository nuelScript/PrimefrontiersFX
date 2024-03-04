"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const PlansPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-fit">
      <h3 className="text-2xl font-semibold capitalize">Affordable Packages</h3>
      <p className="font-normal text-base text-center w-3/4">
        You can check out our packages.
      </p>
      <div className="flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 space-x-0 space-y-4">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className="flex flex-col items-center space-y-4 rounded-2xl bg-neutral-200 dark:bg-neutral-900 pb-4"
        >
          <div className="flex flex-col items-center space-y-6 p-4 bg-cyan-700 rounded-t-2xl w-full">
            <h1 className="font-bold text-2xl uppercase">Gold Plan</h1>
            <p className="font-normal text-lg uppercase">
              10,000 GHZ/S Speed Rate
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6 p-4">
            <p className="text-lg font-normal uppercase tracking-wide">
              Minimum Investment: $5,000
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              No Maximum investment
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              R.O.I: 40%
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Period: 14 Days
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Unlimited Withdrawals
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Referral Bonus: 15% + $2
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              24/7 Support: Yes
            </p>
          </div>
          <Link href="/sign-up">
            <Button
              className="bg-cyan-500 uppercase hover:bg-cyan-500/50"
              size="lg"
            >
              Invest Now
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className="flex flex-col items-center space-y-4 rounded-2xl bg-neutral-200 dark:bg-neutral-900 pb-4"
        >
          <div className="flex flex-col items-center space-y-6 p-4 bg-cyan-700 rounded-t-2xl w-full">
            <h1 className="font-bold text-2xl uppercase">Silver Plan</h1>
            <p className="font-normal text-lg uppercase">
              2,000 GHZ/S Speed Rate
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6 p-4">
            <p className="text-lg font-normal uppercase tracking-wide">
              Minimum Investment: $1,000
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Maximum Investment: $5,000
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              R.O.I: 25%
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Period: 17 Days
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Unlimited Withdrawals
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Referral Bonus: 11% + $2
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              24/7 Support: Yes
            </p>
          </div>
          <Link href="/sign-up">
            <Button
              className="bg-cyan-500 uppercase hover:bg-cyan-500/50"
              size="lg"
            >
              Invest Now
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className="flex flex-col items-center space-y-4 rounded-2xl bg-neutral-200 dark:bg-neutral-900 pb-4"
        >
          <div className="flex flex-col items-center space-y-6 p-4 bg-cyan-700 rounded-t-2xl w-full">
            <h1 className="font-bold text-2xl uppercase">Bronze Plan</h1>
            <p className="font-normal text-lg uppercase">
              1,000 GHZ/S Speed Rate
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6 p-4">
            <p className="text-lg font-normal uppercase tracking-wide">
              Minimum Investment: $500
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Maximum Investment: $1,000
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              R.O.I: 15%
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Period: 23 Days
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Unlimited Withdrawals
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              Referral Bonus: 7% + $2
            </p>
            <p className="text-lg font-normal uppercase tracking-wide">
              24/7 Support: Yes
            </p>
          </div>
          <Link href="/sign-up">
            <Button
              className="bg-cyan-500 uppercase hover:bg-cyan-500/50"
              size="lg"
            >
              Invest Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
