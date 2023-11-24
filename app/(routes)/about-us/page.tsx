import Banner from "@/components/banner";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <Banner
        className="bg-[url(/images/kanchanara-9pCV2MB65y8-unsplash.jpg)] bg-center"
        title="About Us"
      />
      <div className="py-6 px-20">
        <Card className="w-full border-none bg-[#0b1118]">
          <CardContent className="flex flex-col text-start py-5 px-20 font-semibold leading-relaxed">
            <section>
              At PrimeFrontiersFx, we embark on a financial journey where
              innovation meets reliability, shaping the future of forex trading.
              Established in 2019, we proudly hold a license from the United
              States of America, a testament to our commitment to transparency
              and adherence to the highest standards.
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
