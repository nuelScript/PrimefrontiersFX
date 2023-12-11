"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-2">
      <h3 className="text-center text-4xl font-bold">FAQS</h3>
      <div className="flex w-full lg:flex-row lg:justify-between flex-col lg:space-x-16 lg:space-y-0 space-x-0 space-y-8">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className="border-b-0" value="item-1">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                What are the fees?
              </AccordionTrigger>
              <AccordionContent className="lg:text-base text-sm">
                We do not charge you any setup fee, each trader gets a set
                percentage of the profit they make, make sure you check this
                percentage before copying any trader.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className="border-b-0" value="item-1">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                Who are the trading experts?
              </AccordionTrigger>
              <AccordionContent className="lg:text-base text-sm">
                We carefully select expert applicants. We get to know them as a
                trader and examine their trading performance over a period of
                time. We also tend to look for expert who already have a
                following to further confirm their competence (social proof).
                You can also read about every expert on their individual
                performance pages.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-2">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                What is the recommended amount to start with?
              </AccordionTrigger>
              <AccordionContent className="lg:text-base text-sm">
                We suggest to have around $3000-$5000 in your account in BTC
                value due to exchanges minimum order requirements and so that
                you can at least cover the subscription cost every month.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
      <div className="flex lg:flex-row flex-col lg:space-x-16 lg:space-y-0 space-x-0 space-y-8">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className="border-b-0" value="item-1">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                How does Bitcoin mining work
              </AccordionTrigger>
              <AccordionContent className="lg:text-base text-sm">
                It&apos;s quick and very easy! As soon as we receive your
                payment your contract will be added to your profile, and you can
                immediately start mining. Depending on the blockchain algorithm
                you select and the associated mining service agreement you enter
                into, you can either mine native cryptocurrencies directly or
                allocate your hashpower to other cryptocurrencies (marked with
                AUTO), and even choose a specific allocation for them. For
                example: 60% LTC, 20% BTC and 20% DOGE. The first mining output
                is released after 48 hours, and then a daily mining output will
                follow.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-2">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                Are you mining for yourself?
              </AccordionTrigger>
              <AccordionContent className="lg:text-base text-sm">
                Besides the fact that we ourselves mine with the very same
                hardware that we offer to our clients, our capital is limited.
                We believe that Bitcoin and Altcoin mining is one of the best
                ways to receive Cryptocurrencies, however, we do not want to
                “put all our eggs in one basket”.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-3">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                Where is your mining farm located?
              </AccordionTrigger>
              <AccordionContent className="lg:text-base text-sm">
                For security reasons, we do not disclose the exact location of
                our mining farms. As of April 2015, we are operating several
                mining farms that are located in Europe, America and Asia.
                Electricity cost and availability of cooling are important, but
                not the only criteria. See our Datacenters page for more
                information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-4">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                What coins I mine with each algorithm?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 lg:text-base text-sm">
                <p>
                  You are able to mine Bitcoin and various altcoins directly via
                  our mining allocation page*. The availability of
                  cryptocurrencies you can mine depends on the contract you have
                  chosen.
                </p>
                <p>
                  You must allocate your hashpower in order to determine the
                  cryptocurrency received for your mining output. If no
                  allocation has been made, the mining output will default to
                  the following for the given blockchain algorithm:
                </p>
                <p>
                  SHA-256 contract - Bitcoin Ethash contract - Ethereum (*)
                  “PrimeFrontiers FX Advanced Allocation” (special feature): It
                  allows you to get mining outputs in many different coins even
                  if they are not mined directly by a certain algorithm. For
                  example, you can get mining outputs in BTC while mining with
                  an X11 algorithm! That is possible by mining the DASH coin
                  directly, which is then automatically swapped to BTC by our
                  algorithmic framework. The Allocation function is designed for
                  customers to receive delivery of their mining results in their
                  preferred cryptocurrency. We call it “mining BTC the smart
                  way”. The same technique is also used to get mining results in
                  LTC with a SHA-256 contract, etc.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-5">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                How do your ether contracts work?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 lg:text-base text-sm">
                <p>
                  When you purchase an Ether mining contract, you buy a share of
                  a GPU (“graphics processing unit“) to mine Ethereum. The
                  hashing algorithm used to mine Ether is called Ethash (or
                  Dagger-Hashimoto).
                </p>
                <p>
                  Ethash requires the so called DAG file in order to perform the
                  calculations. This file grows over time, which means that more
                  operations for each hashing operation need to be performed.
                  This means that the effective hashrate decreases a little each
                  time the DAG file grows.
                </p>
                <p>
                  This has to be considered when comparing the theoretical
                  output of your hashpower. Online calculators do not take this
                  into account.
                </p>
                <p>
                  Also, please keep in mind that some of our products have a
                  maintenance fee attached.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className="border-b-0" value="item-1">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                What are the expected returns?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 lg:text-base text-sm">
                <p>
                  Bitcoin and altcoin mining depends highly on the prices and
                  network difficulties of the Cryptocurrencies that you are
                  mining, which cannot be predicted. It would not “look right”
                  if we would provide data on the mining performance and sell
                  contracts at the same time. Therefore, we recommend all our
                  clients to do their own research and do their own performance
                  calculation.
                </p>
                <p>
                  For example, you might want to have a look at coinwarz.com.
                  Remember that some of our products have a daily maintenance
                  fee which must be deducted from the daily mining rewards.
                </p>
                <p>
                  Please note that the website is an independent source of
                  reference and not related to PrimeFrontiers FX in any manner.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-2">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                Which pools are you using for mining?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 lg:text-base text-sm">
                <p>
                  We do not publish a list of pools we are using. Our main
                  criteria for a good pool are: reliability, fee structure and
                  reject rate. Going forward we will solo-mine a few coins (and
                  pass the fee savings to our users!).
                </p>
                <p>
                  Our internal policy is: “be a good crypto citizen”. This
                  means, that we will at least use two different pools (in some
                  cases we use up to four) for each coin. This is to preserve
                  the decentralized nature of the crypto networks! If we become
                  aware that a pool is getting close to 50% share, we will
                  switch away from it and use a backup instead.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-3">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                Isn&apos;t buying hardware cheaper?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 lg:text-base text-sm">
                <p>
                  On the first glance one might think that buying miner X is
                  slightly cheaper than hosted mining. However, there are a
                  number of “hidden” costs related to purchasing and maintaining
                  a miner that change the economics significantly:
                </p>
                <p>
                  Shipping costs: few merchants will cover this, but in most
                  cases they will charge you extra.
                </p>
                <p>
                  Customs dues / VAT: if it is an international delivery you
                  will likely have to pay customs dues and VAT; generally this
                  has a huge impact on the total cost of your mining equipment.
                </p>
                <p>
                  Delivery time: when you pay for your device you have to wait
                  until the miner is packaged and shipped; if it is held up in
                  the customs this can take weeks. And during that time you
                  cannot mine at all (“opportunity costs”). You have to wait and
                  hope. And if the merchant has a stock shortage; it is you who
                  has to wait. With PrimeFrontiers FX you pay and get your
                  hashpower immediately online. No delays!
                </p>
                <p>
                  Costs for additional equipment: when buying miners from larger
                  retailers you often have to buy additional equipment like an
                  extra PSU that matches the electricity specs for your country,
                  control units and specific shelves to store them efficiently.
                  This adds up significantly to the overall price for hashpower.
                </p>
                <p>
                  Setting the system up: when the device finally arrived you
                  have to assemble and configure it. Beginners often
                  underestimate the amount of work and technical knowledge that
                  is needed to bring the device up and optimize its settings.
                  People that used the first ASICs spend days and weeks on it.
                  In monetary terms this costs you twice: (i) your time and (ii)
                  lost mining opportunity.
                </p>
                <p>
                  Maintenance: hardware failures, outages and crashes could lead
                  to downtimes between seconds and weeks. If your unit breaks
                  you have to return it and start from scratch (by the way:
                  check the guarantee time of your miner; it is often less than
                  a year). With PrimeFrontiers FX you have a guaranteed uptime
                  of 100%: in case one of your units fails another unit will be
                  switched over and start mining for you the very same second.
                </p>
                <p>
                  Electricity: having the machines at home not only brings heat
                  and noise, but also an increase of your electricity bill; an
                  important factor that many underestimate. Please do not get us
                  wrong: we do not want to discourage anyone from mining at
                  home! We are often asked about prices and realized that many
                  users do not know about all the hidden costs. If you compare
                  the true costs, you will notice that our prices are very
                  competitive. We want to provide you the best possible mining
                  experience, so that you can focus on mining your favorite
                  coins (and we take care of the rest).
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-4">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                What is the maintenance fee?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 lg:text-base text-sm">
                <p>
                  Some of our products have a maintenance fee attached. The
                  maintenance fee covers all costs related to mining including,
                  inter alia:
                </p>
                <ul className="leading-relaxed">
                  <li>Electricity Cost</li>
                  <li>Cooling</li>
                  <li>Maintenance Work</li>
                  <li>Hosting Services</li>
                </ul>
                <p>
                  The fee is fixed in USD but deducted from the daily mining
                  rewards in the natively mined coin on a daily basis.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-5">
              <AccordionTrigger className="hover:no-underline lg:text-base text-sm">
                How can I mine different coins at the same time?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 lg:text-base text-sm">
                <p>
                  PrimeFrontiers FX allows its clients to mine different types
                  of coins at the same time. You decide which coins you prefer
                  and you can allocate hashpower accordingly.
                </p>
                <p>
                  Each mining algorithm is set up with a default delivery
                  cryptocurrency. The PrimeFrontiers FX Advanced Auto-Allocation
                  (in short “AUTO”) will apply to all cryptocurrencies which
                  cannot be mined directly. In the user interface go to “Mining
                  Allocation” and choose the hashpower allocation that is best
                  for you. When you are done press “save allocation”.
                </p>
                <p>
                  Remember that the cryptocurrencies marked with (AUTO) are not
                  directly mined, as mentioned in the “What coins can I mine?”
                  section of this Customer Service page.
                </p>
                <p>
                  In order to get the mining output, please ensure to add your
                  wallet address(es) to your PrimeFrontiers FX profile. Find out
                  more details about how to add your wallet(s) in the next
                  section.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
