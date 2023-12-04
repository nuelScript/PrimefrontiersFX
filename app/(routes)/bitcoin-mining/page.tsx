import Banner from "@/components/banner";
import Base from "@/components/base";
import { Card, CardContent } from "@/components/ui/card";

const BitcoinMiningPage = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      <Banner
        title="Bitcoin Mining"
        className="bg-[url(/images/kanchanara-fsSGgTBoX9Y-unsplash.jpg)]"
      />
      <div className="py-6 px-6 sm:px-10 md:px-14 lg:px-20 mx-auto">
        <Card className="w-full border-none bg-[#0b1118] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg rounded-2xl">
          <CardContent className="flex flex-col text-start space-y-12 py-8 px-6 sm:px-10 md:px-14 lg:px-20 font-normal leading-loose">
            <section className="space-y-4">
              <p>
                Bitcoin has a public ledger which is called the blockchain. The
                process of mining adds new transactions to this public ledger.
                Why? Well, Bitcoin users need this process because it means that
                every transaction is securely confirmed and verified while all
                the users making use of the Bitcoin network has full access to
                the blockchain - in other words, the Bitcoin ledger. Mining also
                helps the network figure out which transactions are fair and
                legit, eliminating any transactions that try to spend money a
                second time.
              </p>
              <p>
                So when someone “mines” Bitcoin they are in fact performing a
                service to all Bitcoin users because they ensure Bitcoin
                transactions are legitimate. During the process of mining people
                who mine Bitcoin will complete a new block which means that the
                miner gets a reward. In 2018 the return for completing a new
                block was 12.5 Bitcoin, but the reward gets lower with time.
              </p>
              <p>
                As you can imagine, mining requires a lot of hard work and
                patience - you do not get Bitcoin mining results quickly. So
                there&apos;s an obvious analogy with actual, physical mining of
                metals like gold. Hence using the word “mining” for the
                computational tasks that generate new Bitcoin.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">Choosing your mining equipment</p>
              <p>
                Mining Bitcoin involves very complex calculations which are very
                computationally intensive. So, choosing the right hardware kit
                when you mine Bitcoin is really essential. You need to think
                about a number of specific characteristics when you choose your
                Bitcoin mining kit.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">Hash rates</p>
              <p>
                Perhaps the key aspect of your mining kit choice is this: the
                hash rate that your mining hardware can sustain. Hash rate is
                basically the number of crypto calculations that your mining
                hardware can perform every second. It&apos;s easy to see why a
                higher hash rate will help you mine coins more quickly - simply
                because more calculations per second mean that you solve the
                crypto math required to mine a coin much more quickly. As a
                result you can quickly complete a block and get your reward for
                doing so.
              </p>
              <p>
                Hash functions work like this: whatever input you insert will
                always give you the same output. So to find a specific output
                you have to try as many random inputs as you can - as fast as
                you can. It makes mining competitive and the miner who can
                process more inputs than other miners will end up getting
                rewarded faster. So, again, if you can get hardware with a high
                hash rate you will have an advantage over other miners which
                means you get more rewards more quickly.
              </p>
              <p>
                The rate of measurements for hash rates is MH/sec, which is
                short for megahashes per second. You can also measure hash rates
                in terms of GH/sec and TH/sec, standing for giga- and terahashes
                per second respectively. Bitcoin mining hardware have hash rates
                which can range from a few hundred MH/sec all the way to 10
                TH/sec (or 10,000,000 MH/sec).
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">Cost of energy</p>
              <p>
                There are costs involved with mining Bitcoin, and it&apos;s not
                just the physical mining hardware you need to worry about. If
                you can afford powerful hardware you will quickly find you have
                another headache: the electricity cost associated with driving
                that hardware because powerful mining hardware consume a lot of
                power.
              </p>
              <p>
                When buying hardware you therefore need a close look at the
                electricity consumption of the kit - work it out in watts and
                then see how much it will cost you, so that you don&apos;t get a
                big surprise when you get your next electricity bill. If you
                don&apos;t you risk spending all your mining profits on
                electricity - or indeed face making a big loss.
              </p>
              <p>
                Hash rate alongside energy consumption is a good way to evaluate
                mining profits. Compare the hashes you can complete in an hour
                with the cost of electricity per hour (or per day). An easy way
                to do this is to divide the hash rate of your kit by the watts
                consumed. It&apos;ll give you a MH/s per watt rate which can
                guide you, alongside current electricity costs, to find whether
                your mining kit will produce a profit.
              </p>
              <p>
                Don&apos;t forget to include extra costs like the computer
                hardware that drives mining GPUs when you calculate profits -
                your PC will also consume power on top of the mining hardware
                that you have.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold">Bitcoin mining hardware options</p>
              <p>
                When Bitcoin was just released a wide variety of people paid
                attention as it was a unique idea that people found very
                liberal. In any case, Bitcoin was very revolutionary compared to
                the way transactions were processed before: by centralised
                banks. This self-governing network was outside the remit of
                financial institutions, tax authorities and other big
                organisations because it was completely decentralised.
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

export default BitcoinMiningPage;
