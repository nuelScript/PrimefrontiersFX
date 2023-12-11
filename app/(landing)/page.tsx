import CustomerSupport from "@/components/customer-support";
import Experience from "@/components/experience";
import FAQ from "@/components/faq";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import LandingBanner from "@/components/landing-banner";
import Offer from "@/components/offer";
import TradingWidget from "@/components/trading-widget";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 h-full w-full p-2">
      <LandingBanner />
      <TradingWidget />
      <Offer />
      <CustomerSupport />
      <FAQ />
      <Feature />
      <Experience />
      <Footer />
    </div>
  );
}
