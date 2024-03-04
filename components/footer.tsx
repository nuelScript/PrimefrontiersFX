import { PFX } from "@/public/images";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex max-w-screen-xl w-full lg:flex-row flex-col lg:items-start items-center justify-between lg:space-y-0 space-y-8 p-2">
      <div className="flex flex-col space-y-4 lg:items-start items-center">
        <Image src={PFX} alt="logo" width={100} height={100} />
        <h3 className="text-xl font-semibold">PrimeFrontiers FX</h3>
        <div className="inline-flex items-center">
          <Mail className="w-4 h-4 mr-2" />{" "}
          <Link href="mailto:info@primefrontiersfx.com">
            info@primefrontiersfx.com
          </Link>
        </div>
      </div>
      <div className="text-xl font-semibold lg:text-start text-center space-y-4">
        <span>Quick Links</span>
        <div className="flex flex-col space-y-4 lg:items-start items-center text-base font-normal">
          <Link href="/contact">Contact Us</Link>
          <Link href="/dashboard">My Account</Link>
          <Link href="/sign-up">Create Account</Link>
        </div>
      </div>
    </div>
  );
};
