import { Banner } from "@/components/banner";
import Base from "@/components/base";
import { Card, CardContent } from "@/components/ui/card";

const StockTradingPage = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      <Banner
        title="Stocks Trading"
        className="bg-[url(/images/jason-leung-SAYzxuS1O3M-unsplash.jpg)]"
        subtitle="Stocks for Your Portfolio"
      />
      <div className="py-6 px-6 sm:px-10 md:px-14 lg:px-20 mx-auto">
        <Card className="w-full border-none bg-[#f5f5f5] dark:bg-[#0b1118] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <CardContent className="flex flex-col text-start space-y-12 py-8 px-6 sm:px-10 md:px-14 lg:px-20 font-normal leading-loose">
            <section className="space-y-4">
              <p className="font-bold">What is CFD?</p>
              <p>
                A CFD, or Contract for Difference, is a type of financial
                instrument that allows you to trade on the price movements of
                stocks, regardless of whether prices are rising or falling. The
                key advantage of a CFD is the opportunity to speculate on the
                price movements of an asset (upwards or downwards) without
                actually owning the underlying asset.
              </p>
              <p>
                Stock trading has been a popular financial pursuit since stocks
                were first introduced by the Dutch East India Company in the
                17th century. This is both an efficient and effective type of
                investment for both families and individuals.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">What Are Stocks?</p>
              <p>
                Stocks, also commonly referred to as equities or shares, are
                issued by a public corporation and put up for sale. Companies
                originally used stocks as a way of raising additional capital,
                and as a way to boost their business growth. When the company
                first puts these stocks up for sale, this is called the Initial
                Public Offering. Once this stage is complete, the shares
                themselves are then sold on the stock market, which is where any
                stock trading will occur.
              </p>
              <p>
                People occasionally confuse buying shares with physically owning
                a portion of that company as if this somehow gives them the
                right to walk into the company offices and begin exerting their
                ownership rights over computers or furniture. The law treats
                this type of corporation in a unique way; as it is treated as a
                legal person, the corporation, therefore, owns its own assets.
                This is referred to as the separation of ownership and control.
              </p>
              <p>
                The separation of these things is beneficial to both the
                shareholders and the corporation because it limits the liability
                for each party. For example, if a major shareholder were to go
                bankrupt, they cannot then sell assets belonging to the
                corporation to cover their debts and pay their creditors. This
                is the same in reverse; if a corporation you own shares in goes
                bankrupt and the judge orders them to sell all their assets,
                none of your own personal assets are at risk.
              </p>
              <p>
                One thing lies at the core of a stock&apos;s value: It entitles
                shareholders to a portion of the company profits.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">How Do I Trade Stocks?</p>
              <p>
                A stock market is where stocks are traded: where sellers and
                buyers come to agree on a price. Historically, stock exchanges
                existed in a physical location, and all transactions took place
                on the trading floor. One of the world&apos;s most famous stock
                markets is the London Stock Exchange (LSE).
              </p>
              <p>
                Yet as technology progresses, so does the stock market. Now we
                are seeing the rise of virtual stock exchanges that are made up
                of large computer networks will all trades performed
                electronically.
              </p>
              <p>
                A company&apos;s shares can be traded on the stock market only
                following its IPO, making this a secondary market. The large
                businesses listed on global stock exchanges do not trade stocks
                on a frequent basis. Stocks can only be purchased from an
                existing shareholder, not directly from the company. This rule
                also applies in reverse, so when selling your shares, they go to
                another investor, not back to the corporation.
              </p>
              <p>
                The reason traders choose to invest in stock is because the
                perceived value of a company can vary greatly over time. Money
                can be made or lost; it depends on whether the trader&apos;s
                perceptions of the stock value are in line with the market.
              </p>
              <p>
                Trying to predict the price movements of stocks in the short
                term is nearly impossible. Generally, stocks do tend to
                appreciate in value in the long term, so many investors choose
                to have a diverse portfolio of stocks that they intend to keep
                for a long time. Bigger companies pay dividends to their
                shareholders, which is a portion of the company&apos;s profits.
                The value of the share itself will not impact the dividend.
              </p>
              <p>
                In order to trade stocks, there must be a seller and a buyer; as
                not all traders have the same agenda, stocks are bought and sold
                at different times and for different reasons. Someone may sell
                their stock for profit, others sell it in order to cut losses,
                and some because they believe the value of the stock is about to
                change either way.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">Stock Trading Risk Assessment</p>
              <p>
                All forms of financial investment carry a level of risk, and
                stock trading is no different. Even traders with decades of
                experience cannot predict the correct price movements every
                single time.
              </p>
              <p>
                People use various strategies, but it is important to note that
                there is no such thing as a failsafe strategy. It is also
                advisable to limit the amount of money you invest in a single
                trade, as part of your own risk management.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
      <Base />
    </div>
  );
};

export default StockTradingPage;
