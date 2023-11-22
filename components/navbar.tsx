import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Sign In",
    href: "/sign-in",
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
    <div className="sticky top-0 w-full flex justify-between py-4 px-8 bg-transparent/20 z-10">
      <div className="flex flex-1 items-center space-x-8">
        <Sheet>
          <SheetTrigger asChild>
            <div className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-white">
              <span className="inline-flex h-[2px] w-full transform bg-primary transition-all duration-300 ease-in-out group-hover:-translate-x-2 group-hover:bg-sky-700 dark:group-hover:bg-sky-300 group-active:bg-sky-300"></span>
              <span className="group-focus:inline-flex h-[2px] w-full -translate-x-3 transform bg-primary transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:bg-sky-700 dark:group-hover:bg-sky-300 group-active:bg-sky-300"></span>
              <span className="inline-flex h-[2px] w-full -translate-x-1 transform bg-primary transition-all duration-300 ease-in-out group-hover:-translate-x-3 group-hover:bg-sky-700 dark:group-hover:bg-sky-300 group-active:bg-sky-300"></span>
            </div>
          </SheetTrigger>
        </Sheet>
        <Link href="/">
          <p className="text-base font-semibold">PrimefrontiersFX</p>
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <div className={cn("hover:text-sky-300 font-semibold")}>
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
