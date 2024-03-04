import { Banner } from "@/components/banner";
import Base from "@/components/base";
import { Card, CardContent } from "@/components/ui/card";

const CryptoTradingPage = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      <Banner
        title="Crypto Trading"
        className="bg-[url(/images/jason-leung-SAYzxuS1O3M-unsplash.jpg)]"
        subtitle="Trade Top Cryptocurrencies"
      />
      <div className="py-6 px-6 sm:px-10 md:px-14 lg:px-20 mx-auto">
        <Card className="w-full border-none bg-[#f5f5f5] dark:bg-[#0b1118] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <CardContent className="flex flex-col text-start space-y-12 py-8 px-6 sm:px-10 md:px-14 lg:px-20 font-normal leading-loose">
            <section className="space-y-4">
              <p className="font-bold tracking-wide">
                Build Your Cryptocurrency Trading Portfolio with PrimeFrontiers
                FX
              </p>
              <p>
                Prime Frontiers FX is excited to announce the launch of our new
                cryptocurrency trading platform. Now you can start trading
                Bitcoin, Ethereum and many more cryptocurrencies quickly, easily
                and safely from wherever you are, in just seconds. You get great
                margin trading leverage and short sell options with fast
                deposits and withdrawals. Our support team is available 24/7/365
                to help get you trading on our CySEC-regulated platform with a
                trading volume of US $11 billion monthly.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">What is Crypto currency?</p>
              <p>
                Cryptocurrency like bitcoin is a virtual currency traded
                peer-to-peer on a blockchain, independent of centralized
                authorities like banks and governments. Cryptocurrencies are
                entirely virtual, so they are not backed by physical commodities
                and have no intrinsic value.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">How Do Cryptocurrencies Work?</p>
              <p>
                Primarily, cryptocurrencies rely on blockchain technology to
                complete a transaction via an intricate P2P network. Once a
                transfer request is entered into the network, it is validated by
                the network and added to a pool of other transactions to create
                a block of data for the ledger, which is then entered into the
                existing blockchain. Once the block is successfully added to the
                chain, the transaction is approved and completed.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">
                Are There Investment Opportunities with Cryptocurrencies?
              </p>
              <p>
                Absolutely. Cryptocurrencies have become established investment
                commodities among major financial institutions and have even
                been adopted by countries such as Australia and Japan. As with
                any investment though, there are risks linked to market
                movements, high volatility and economics.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
      <Base />
    </div>
  );
};

export default CryptoTradingPage;
