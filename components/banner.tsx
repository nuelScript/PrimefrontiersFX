"use client";

import { cn } from "@/lib/utils";
import { Nunito } from "next/font/google";

interface Bannerprops {
  title: string;
  subtitle?: string;
  className: string;
}

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const Banner = ({ title, className, subtitle }: Bannerprops) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-[45vh] bg-cover bg-center bg-no-repeat bg-fixed",
        className,
        nunito.className
      )}
    >
      <div className="bg-white/25 dark:bg-gray-900 opacity-70 flex flex-col items-center justify-center w-full h-full space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center font-extrabold">
          {title}
        </h1>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium">
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default Banner;
