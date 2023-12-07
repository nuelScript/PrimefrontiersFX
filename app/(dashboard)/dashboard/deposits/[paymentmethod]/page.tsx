import Link from "next/link";

const Paymentmethod = ({ params }: { params: { paymentmethod: string } }) => {
  return (
    <div className="flex flex-col items-center max-w-screen-lg w-full">
      <p className="font-semibold text-2xl text-primary">
        Pay via {params.paymentmethod}
      </p>
      <div className="flex justify-center h-10 w-full text-primary tracking-wide p-10">
        Please contact{" "}
        <Link
          href="mailto:info@primefrontiersFX.com"
          className="text-slate-700 mx-2 hover:underline"
        >
          info@primefrontiersFX.com
        </Link>
        {"  "}
        to make payment via {params.paymentmethod}
      </div>
    </div>
  );
};

export default Paymentmethod;
