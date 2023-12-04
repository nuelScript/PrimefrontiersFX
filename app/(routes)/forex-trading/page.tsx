import Banner from "@/components/banner";
import Base from "@/components/base";
import { Card, CardContent } from "@/components/ui/card";

const ForexTradingPage = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      <Banner
        title="Forex Trading"
        className="bg-[url(/images/jason-leung-SAYzxuS1O3M-unsplash.jpg)]"
        subtitle="Trade forex on the platform and enjoy reliable pricing and exceptional execution"
      />
      <div className="flex flex-col space-y-5 py-6 px-6 sm:px-10 md:px-14 lg:px-20 mx-auto">
        <Card className="w-full border-none bg-[#0b1118] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <CardContent className="flex flex-col text-start space-y-12 py-8 px-6 sm:px-10 md:px-14 lg:px-20 font-normal leading-relaxed">
            <section className="space-y-4">
              <p className="font-bold">What is Forex?</p>
              <p>
                Forex is short for foreign exchange. The forex market is a place
                where currencies are traded. It is the largest and most liquid
                financial market in the world with an average daily turnover of
                6.6 trillion U.S. dollars as of 2019. The basis of the forex
                market is the fluctuations of exchange rates. Forex traders
                speculate on the price fluctuations of currency pairs, making
                money on the difference between buying and selling prices.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">What is Margin?</p>
              <p>
                Margin is the amount of a trader&apos;s funds required to open a
                new position. Margin is estimated based on the size of your
                trade, which is measured in lots. A standard lot is 100,000
                units. We also provide mini lots (10,000 units), micro lots
                (1,000 units) and nano lots (100 units). The greater the lot,
                the bigger the margin amount. Margin allows you to trade with
                leverage, which, in turn, allows you to place trades larger than
                the amount of your trading capital. Leverage influences the
                margin amount too.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">What is Leverage?</p>
              <p>
                Leverage is the ability to trade positions larger than the
                amount of capital you possess. This mechanism allows traders to
                use extra funds from a broker in order to increase the size of
                their trades. For example, 1:100 leverage means that a trader
                who has deposited $1,000 into his or her account can trade with
                $100,000. Although leverage lets traders increase their trade
                size and, consequently, potential gains, it magnifies their
                potential losses putting their capital at risk.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">When is the forex market open?</p>
              <p>
                Due to different time zones, the international forex market is
                open 24 hours a day — from 5 p.m. Eastern Standard Time (EST) on
                Sunday to 4 p.m. EST on Friday, except holidays. Markets first
                open in Australasia, then in Europe and afterwards in North
                America. So, when the market closes in Australia, traders can
                have access to markets in other regions. The 24-hour
                availability of the forex market is what makes it so attractive
                to millions of traders.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
      <Base />
    </div>
  );
};

export default ForexTradingPage;
