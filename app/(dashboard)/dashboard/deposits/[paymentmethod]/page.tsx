import Link from "next/link";

const Paymentmethod = ({ params }: { params: { paymentmethod: string } }) => {
  return (
    <div className="flex flex-col items-center max-w-screen-lg w-full">
      <p className="font-semibold text-2xl text-primary">
        Pay via {params.paymentmethod}
      </p>
      <div className="h-16 w-full text-primary tracking-wide p-10 text-center">
        <span> Please contact </span>
        <Link
          href="mailto:info@primefrontiersFX.com"
          className="text-slate-700 hover:underline"
        >
          info@primefrontiersFX.com
        </Link>
        <span>
          {"  "}
          to make payment via {params.paymentmethod}
        </span>
      </div>
    </div>
  );
};

export default Paymentmethod;
