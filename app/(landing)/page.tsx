import LandingBanner from "@/components/landing-banner";
import TradingWidget from "@/components/trading-widget";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 h-full w-full">
      <LandingBanner />
      <TradingWidget />
    </div>
  );
}
