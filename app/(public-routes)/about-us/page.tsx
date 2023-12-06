import Banner from "@/components/banner";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner
        className="bg-[url(/images/kanchanara-9pCV2MB65y8-unsplash.jpg)] bg-center"
        title="About Us"
      />
      <div className="py-6 px-20">
        <Card className="w-full border-none bg-[#f5f5f5] dark:bg-[#0b1118] max-w-full lg:max-w-screen-xl">
          <CardContent className="flex flex-col text-start py-5 px-20 font-normal leading-relaxed">
            <p>
              At PrimeFrontiersFx, we embark on a financial journey where
              innovation meets reliability, shaping the future of forex trading.
              Established in 2019, we proudly hold a license from the United
              States of America, a testament to our commitment to transparency
              and adherence to the highest standards.
            </p>
            <p></p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
