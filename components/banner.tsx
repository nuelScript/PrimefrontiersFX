"use client";

import { cn } from "@/lib/utils";

interface Bannerprops {
  title: string;
  className: string;
}

const Banner = ({ title, className }: Bannerprops) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-[30vh] bg-cover bg-center bg-no-repeat bg-fixed",
        className
      )}
    >
      <div className="bg-black opacity-70 flex items-center justify-center w-full h-full">
        <p className="text-5xl text-center font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Banner;
