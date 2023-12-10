import Banner from "@/components/banner";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner
        className="bg-[url(/images/kanchanara-9pCV2MB65y8-unsplash.jpg)] bg-center"
        title="About Us"
      />
      <div className="py-6">
        <Card className="w-full border-none bg-[#f5f5f5] dark:bg-[#0b1118] max-w-full lg:max-w-screen-xl">
          <CardContent className="flex flex-col text-start py-8 px-6 space-y-8 sm:px-10 md:px-14 lg:px-20 font-normal leading-loose">
            <section className="space-y-6">
              <p>
                At PrimeFrontiersFx, we embark on a financial journey where
                innovation meets reliability, shaping the future of forex
                trading. Established in 2019, we proudly hold a license from the
                United States of America, a testament to our commitment to
                transparency and adherence to the highest standards.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">Our Vision</p>
              <p>Empowering Dreams, Fueling Success</p>
              <p>
                PrimeFrontiersFx was born out of a vision to redefine the forex
                landscape. We believe in empowering individuals from all walks
                of life to take control of their financial destinies. In an
                ever-evolving global market, we stand as your reliable partner,
                providing a secure platform for intelligent investment
                decisions.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">Our Commitment</p>
              <p>Transparency, Integrity, Excellence</p>
              <p>
                What sets PrimeFrontiersFx apart is our unwavering commitment to
                transparency and integrity. We operate with the understanding
                that our clients&apos; success is our success. Every trade,
                every decision is made with precision and care, guided by a
                commitment to excellence.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">Licensed and Trusted</p>
              <p>Your Financial Security, Our Top Priority</p>
              <p>
                Licensed by the United States of America in 2019, we adhere to
                stringent regulations to ensure the safety and security of your
                investments. Your trust is the foundation of our success, and we
                take every measure to safeguard your financial future.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">Innovation in Trading</p>
              <p>Where Technology Meets Opportunity</p>
              <p>
                In the fast-paced world of forex, staying ahead is key.
                PrimeFrontiersFx embraces cutting-edge technology to provide you
                with a seamless trading experience. Our platform is designed for
                both seasoned traders and newcomers, ensuring everyone can
                navigate the financial markets with confidence.
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">Join PrimeFrontiersFx</p>
              <p>Your Journey Starts Here</p>
              <p>
                Whether you&apos;re an experienced trader or just beginning your
                investment journey, PrimeFrontiersFx invites you to join a
                community where opportunities abound. Your success story is
                waiting to unfold, and we are here to support every step of the
                way.
              </p>
            </section>
            <section className="text-center font-bold text-lg sm:text-xl md:text-3xl tracking-wide">
              At PrimeFrontiersFx, we don&apos;t just trade. We transform
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
