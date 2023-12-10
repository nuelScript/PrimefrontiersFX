import Link from "next/link";

const paymentMethods = ["Zelle", "Paypal", "Venmo", "Cashapp"];

const SelectPage = () => {
  return (
    <div className="flex flex-col lg:max-w-screen-xl w-full items-center space-y-6 lg:p-0 p-8">
      <h3 className="font-semibold uppercase text-lg">Select payment Method</h3>
      <div className="flex flex-col items-center space-y-4 w-full h-full">
        <Link
          href="/dashboard/deposits/crypto"
          className="h-8 w-full md:w-4/5 lg:w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 font-medium text-lg"
        >
          Crypto
        </Link>
        {paymentMethods.map((paymentMethod) => (
          <Link
            key={paymentMethod}
            href={`/dashboard/deposits/${paymentMethod}`}
            className="h-8 w-full md:w-4/5 lg:w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 font-medium text-lg"
          >
            {paymentMethod}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectPage;
