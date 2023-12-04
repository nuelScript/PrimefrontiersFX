import Banner from "@/components/banner";
import Base from "@/components/base";
import { Card, CardContent } from "@/components/ui/card";

const AboutMiningPage = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      <Banner
        title="About Mining"
        className="bg-[url(/images/kanchanara-fsSGgTBoX9Y-unsplash.jpg)]"
      />
      <div className="py-6 px-6 sm:px-10 md:px-14 lg:px-20 mx-auto">
        <Card className="w-full border-none bg-[#0b1118] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg rounded-2xl">
          <CardContent className="flex flex-col text-start space-y-12 py-8 px-6 sm:px-10 md:px-14 lg:px-20 font-normal leading-loose">
            <section className="space-y-4">
              <p className="font-bold tracking-wide">
                WHY IS MINING SO IMPORTANT?
              </p>
              <p>
                Cryptocurrency networks need computational power to run
                securely. The world&apos;s most powerful blockchains are
                supported by millions of computers around the world. Unlike
                paper money, Bitcoin and other cryptocurrencies are produced
                mathematically and held digitally. The people who voluntarily
                offer their computing power to secure these cryptocurrency
                networks are called miners.
              </p>
              <p>
                Cryptocurrencies don&apos;t have a central government or other
                so-called &apos;middlemen&apos; that decide about the future of
                the system. - They are in fact digital, borderless democracies
                in which miners vote with their computing power to reach order
                and consensus.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">
                HOW IS BITCOIN KEPT SECURE?
              </p>
              <p>
                The only way to not create money out of thin air or corrupt it,
                is to burn real energy. This is called Proof-Of-Work. Today,
                bitcoin is the most secure computer network on the planet and
                it&apos;s practically impossible to break it! The reason for
                that is hash power, the umbrella term used for the computing
                power that miners provide to the bitcoin network and similar
                cryptocurrency networks. Due to the rapid growth of the
                ecosystem, mining operations today are mostly running with
                specialized high-performance computers that function most
                efficiently set up in large data centers.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">
                WHAT ARE THE INCENTIVES FOR MINERS?
              </p>
              <p>
                It all comes down to trust: Miners keep the blockchains
                trustworthy and are rewarded for their efforts. As miners, we
                are processing and verifying the transactions of the
                cryptocurrency ecosystems and keeping their public transaction
                history (blockchains) maintained and secure. For this, the
                mining community is rewarded with the networks&apos; transaction
                fees and newly created coins. It&apos;s a win-win situation!
                When you start mining with us, you are getting your share of
                this reward.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">THE BIG VISION OF CRYPTO CURRENCY</p>
              <p>
                To keep the integrity (and values!) of all cryptocurrency
                ecosystems intact, miners keep the networks safe and its
                authority decentralized by keeping each other constantly in
                check. This allows both a healthy growth and a fair distribution
                of currency units to all crypto-citizens!
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
      <Base />
    </div>
  );
};

export default AboutMiningPage;
