"use client";

interface Bannerprops {
  title: string;
}

const Banner = ({ title }: Bannerprops) => {
  return (
    <div className="flex items-center justify-center w-full h-[30vh] bg-[url(/images/julian-hochgesang-psGV5KhidlY-unsplash.jpg)] bg-cover bg-no-repeat bg-fixed">
      <div className="bg-black opacity-70 flex items-center justify-center w-full h-full">
        <p className="text-5xl text-center font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Banner;
