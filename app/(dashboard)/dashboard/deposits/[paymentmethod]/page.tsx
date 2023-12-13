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
          className="dark:text-amber-500 text-slate-800 hover:underline hover:text-opacity-50"
        >
          info@primefrontiersFX.com
        </Link>{" "}
        or text{" "}
        <Link
          href="tel:+13185750040"
          className="dark:text-amber-500 text-slate-800 hover:underline hover:text-opacity-50"
        >
          +1(318)575-0040
        </Link>{" "}
        on WhatsApp
        <span>
          {"  "}
          to make payment via {params.paymentmethod}
        </span>
      </div>
    </div>
  );
};

export default Paymentmethod;
