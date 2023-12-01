"use client";

import { cn } from "@/lib/utils";

interface Bannerprops {
  title: string;
  subtitle?: string;
  className: string;
}

const Banner = ({ title, className, subtitle }: Bannerprops) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-[40vh] bg-cover bg-center bg-no-repeat bg-fixed",
        className
      )}
    >
      <div className="bg-black opacity-70 flex flex-col items-center justify-center w-full h-full space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold">
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
