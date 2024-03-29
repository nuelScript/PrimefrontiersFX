import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Base = () => {
  return (
    <Card className="bottom-0 bg-[#f5f5f5] dark:bg-[#0b1118] max-w-full lg:max-w-screen-xl border-none rounded-2xl">
      <CardContent className="flex flex-col lg:flex-row text-start space-y-10 space-x-0 lg:space-y-0 lg:space-x-20 py-10 px-6 sm:px-10 md:px-14 lg:px-20 font-normal leading-loose">
        <section className="space-y-4 w-full">
          <p>
            You should seek advice from an independent and suitably licensed
            financial advisor and ensure that you have the risk appetite,
            relevant experience and knowledge before you decide to trade. Under
            no circumstances shall PrimeFrontiers FX have any liability to any
            person or entity for any direct, indirect, special, consequential or
            incidental damages whatsoever.
          </p>
          <p>
            Cryptocurrencies markets are unregulated services which are not
            governed by any specific European regulatory framework. Therefore
            when using our Cryptocurrencies Trading Service you will not benefit
            from the protections available to clients investment services.
            Trading by following and/or copying or replicating the trades of
            other traders involves a high level of risks, even when following
            and/or copying or replicating the top-performing traders.
          </p>
        </section>
        <div className="flex flex-col space-y-8 w-full">
          <div className="flex sm:flex-row flex-col w-full sm:justify-between sm:space-y-0 space-y-4">
            <div className="flex flex-col space-y-4 w-full">
              <h3 className="text-base font-bold">Top Instruments</h3>
              <div className="flex flex-col space-y-2">
                <Link href="https://www.apple.com/" target="_blank">
                  Apple
                </Link>
                <Link href="https://www.shibatoken.com/" target="_blank">
                  Shiba
                </Link>
                <Link href="https://bitcoin.org/" target="_blank">
                  Bitcoin
                </Link>
                <Link href="https://ethereum.org/" target="_blank">
                  Ethereum
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <h3 className="text-base font-bold">Learn More</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/sign-in">Avoid Scam</Link>
                <Link href="/sign-in">What is Leverage</Link>
                <Link href="/sign-in">Responsible Trading</Link>
                <Link href="/copy-trading">How Copy Trading Works</Link>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col w-full sm:justify-between sm:space-y-0 space-y-4">
            <div className="flex flex-col space-y-4 w-full">
              <h3 className="text-base font-bold">Privacy</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/cookie-policy">Cookie Policy</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/risk">General Risk Disclosure</Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <h3 className="text-base font-bold">About Us</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/about-us">About Us</Link>
                <Link href="/sign-in">Accessibility</Link>
                <Link href="/sign-in">Invite a Friend</Link>
                <Link href="/sign-in">Affiliate Program</Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Base;
