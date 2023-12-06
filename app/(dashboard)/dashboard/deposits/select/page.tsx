import Link from "next/link";

const SelectPage = () => {
  return (
    <div className="flex flex-col md:max-w-screen-xl w-full items-center space-y-6">
      <h3 className="font-semibold uppercase text-lg">Select payment Method</h3>
      <div className="flex flex-col items-center space-y-4 w-full h-full">
        <Link
          href="/dashboard/deposits/crypto"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 font-medium text-lg"
        >
          Bitcoin
        </Link>
        <Link
          href="/dashboard/deposits"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 font-medium text-lg"
        >
          Zelle
        </Link>
        <Link
          href="/dashboard/deposits"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 font-medium text-lg"
        >
          Paypal
        </Link>
        <Link
          href="/dashboard/deposits"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 font-medium text-lg"
        >
          Venmo
        </Link>
        <Link
          href="/dashboard/deposits"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 font-medium text-lg"
        >
          CashApp
        </Link>
      </div>
    </div>
  );
};

export default SelectPage;
