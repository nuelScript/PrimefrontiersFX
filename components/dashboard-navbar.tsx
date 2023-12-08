import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import { Contact, Home, Mail, ShoppingBag } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
          <SheetContent side="left">
            <SheetClose></SheetClose>
            <ScrollArea className="h-full w-full px-4">
              <div className="flex flex-col space-y-4 pt-10">
                <Link
                  href="/dashboard"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Home className="w-5 h-5" /> <span>Home</span>
                </Link>
                <Link
                  href="/dashboard/deposits/list"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Contact className="w-5 h-5" />
                  <span>Deposits</span>
                </Link>
                <Link
                  href="/dashboard/referral"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Contact className="w-5 h-5" />
                  <span>My Referrals</span>
                </Link>
                <Link
                  href="/dashboard/withdrawals/list"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Mail className="w-5 h-5" />
                  <span>Withdrawals</span>
                </Link>
                <Link
                  href="/dashboard/deposits/buy"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Buy Crypto</span>
                </Link>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </SheetContent>
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
