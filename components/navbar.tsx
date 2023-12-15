import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart,
  Coins,
  Contact,
  Folder,
  Home,
  Lock,
  Mail,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const routes = [
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Sign In",
    href: "/dashboard",
  },
  {
    label: "Sign Up",
    href: "/sign-up",
  },
];
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  return (
    <div
      className={cn(
        "sticky top-0 w-full flex justify-between py-4 px-8 bg-white dark:bg-black z-10",
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
            <ScrollArea className="h-full w-full px-4">
              <div className="flex flex-col space-y-4 pt-10">
                <Link
                  href="/"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Home className="w-5 h-5" /> <span>Home</span>
                </Link>
                <Link
                  href="/dashboard"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Contact className="w-5 h-5" />
                  <span>Sign In</span>
                </Link>
                <Link
                  href="/sign-up"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Contact className="w-5 h-5" />
                  <span>Sign Up</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                </Link>
                <Link
                  href="/about-us"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Contact className="w-5 h-5" />
                  <span>About Us</span>
                </Link>
                <Link
                  href="/cookie-policy"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Lock className="w-5 h-5" />
                  <span>Cookie Policy</span>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Lock className="w-5 h-5" />
                  <span>Privacy Policy</span>
                </Link>
                <Link
                  href="/terms"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Folder className="w-5 h-5" />
                  <span>Terms of Service</span>
                </Link>
                <Link
                  href="/forex-trading"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <BarChart className="w-5 h-5" />
                  <span>Forex Trading</span>
                </Link>
                <Link
                  href="/stocks-trading"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <BarChart className="w-5 h-5" />
                  <span>Stocks Trading</span>
                </Link>
                <Link
                  href="/crypto-trading"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Coins className="w-5 h-5" />
                  <span>Crypto Trading</span>
                </Link>
                <Link
                  href="/options-trading"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Coins className="w-5 h-5" />
                  <span>Options Trading</span>
                </Link>
                <Link
                  href="/about-mining"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Coins className="w-5 h-5" />
                  <span>About Mining</span>
                </Link>
                <Link
                  href="/bitcoin-mining"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Coins className="w-5 h-5" />
                  <span>Bitcoin Mining</span>
                </Link>
                <Link
                  href="/dodgecoin-mining"
                  className="flex space-x-4 flex-1 items-center hover:bg-neutral-100/50 bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 rounded-xl p-4"
                >
                  <Coins className="w-5 h-5" />
                  <span>Dodgecoin Mining</span>
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
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <div
              className={cn(
                "dark:hover:text-sky-400 hover:text-sky-500 font-semibold lg:block hidden"
              )}
            >
              {route.label}
            </div>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
