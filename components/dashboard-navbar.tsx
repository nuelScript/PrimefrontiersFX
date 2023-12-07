import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const DashboardNavbar = () => {
  return (
    <div
      className={cn(
        "w-full md:w-3/4 flex justify-between py-4 px-6 sm:px-8 sticky top-0 bg-white dark:bg-black z-10 shadow-sm mb-4",
        nunito.className
      )}
    >
      <div className="flex flex-1 items-center space-x-8">
        <Sheet>
          <SheetTrigger asChild>
            <div className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-white">
              <span className="inline-flex h-[2px] w-full transform bg-primary transition-all duration-300 ease-in-out group-hover:-translate-x-2 group-hover:bg-sky-700 dark:group-hover:bg-sky-300 group-active:bg-sky-300"></span>
              <span className="group-focus:inline-flex h-[2px] w-full -translate-x-3 transform bg-primary transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:bg-sky-700 dark:group-hover:bg-sky-300 group-active:bg-sky-300"></span>
              <span className="inline-flex h-[2px] w-full -translate-x-1 transform bg-primary transition-all duration-300 ease-in-out group-hover:-translate-x-3 group-hover:bg-sky-700 dark:group-hover:bg-sky-300 group-active:bg-sky-300"></span>
            </div>
          </SheetTrigger>
          <SheetContent side="left"></SheetContent>
        </Sheet>
        <Link href="/">
          <p className="text-base font-semibold">PrimefrontiersFX</p>
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonOuterIdentifier:
                "dark:text-white text-black font-semibold mr-2 sm:block hidden",
            },
          }}
        />
        <ModeToggle />
      </div>
    </div>
  );
};

export default DashboardNavbar;
