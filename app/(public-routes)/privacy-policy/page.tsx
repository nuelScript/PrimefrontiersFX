import { Banner } from "@/components/banner";
import Base from "@/components/base";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col items-center space-y-20">
      <Banner
        title="Privacy Policy"
        className="bg-[url(/images/shubham-s-web3-L6q_LdO52wo-unsplash.jpg)]"
      />
      <div className="py-6 px-6 sm:px-10 md:px-14 lg:px-20 mx-auto">
        <Card className="w-full border-none bg-[#f5f5f5] dark:bg-[#0b1118] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <CardContent className="flex flex-col text-start space-y-12 py-8 px-6 sm:px-10 md:px-14 lg:px-20 font-normal leading-loose">
            <section className="space-y-6">
              <p className="font-bold">PrimeFrontiers FX uses cookies to:</p>
              <ul className="space-y-4 pl-3 list-disc">
                <li>
                  Optimize your trading experience, including remembering your
                  preferences, location, preferred language, browser and other
                  details.
                </li>
                <li>Authenticate your identity for security purposes.</li>
                <li>Analyze and track the use of our services.</li>
                <li>
                  Adjust our platform according to your trading habits and our
                  regulatory requirements.
                </li>
              </ul>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">WHAT ARE COOKIES?</p>
              <p>
                Cookies are tiny pieces of data that are sent to your computer
                by a website and stored on your computer. Cookies are
                non-executable and cannot be used to install malware. They allow
                websites to recognize visitors when they return and include
                basic information about them that is checked and updated every
                time you visit the website. For more information see:{" "}
                <Link
                  href="http://www.allaboutcookies.org/"
                  className="hover:underline hover:text-gray-500"
                >
                  http://www.allaboutcookies.org/
                </Link>
              </p>
            </section>
            <section className="space-y-4">
              <p className="font-bold tracking-wide">MANAGING COOKIES</p>
              <p>
                At Prime Frontiers FX, we respect your right to privacy and are
                therefore happy to provide you with tools to manage the cookies
                you receive from our web services. Some cookies are essential to
                the performance of our platform (you cannot opt out from these
                cookies if you wish to use our platform). Below you will find a
                list of some of the third party cookies used by PrimeFrontiers
                FX. For those users who would prefer not to receive
                non-essential cookies, we have provided an “opt out” option for
                you to select.
              </p>
              <p>
                Your browser may also allow you to block the storage of cookies
                on your computer; please refer to your browser&apos;s “Help”
                menu or website for more information. If you use our web
                services without blocking cookies you are actually consenting to
                the cookies.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
      <Base />
    </div>
  );
};

export default PrivacyPolicyPage;
