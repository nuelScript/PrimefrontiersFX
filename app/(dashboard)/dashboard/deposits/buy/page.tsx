import Link from "next/link";

const BuyCryptopage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 max-w-screen-lg w-full">
      <h3 className="text-3xl font-bold uppercase">Buy Crypto</h3>
      <p className="dark:text-neutral-600 text-sm font-medium">
        Buy bitcoin, ethereum, and other crypto currencies for account funding
        from third parties
      </p>
      <div className="flex flex-col items-center space-y-4 w-full">
        <Link
          href="https://coinbase.com/"
          passHref
          target="_blank"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 font-medium text-lg"
        >
          <p className="text-center w-full">Coinbase</p>
        </Link>
        <Link
          href="https://moonpay.com/"
          passHref
          target="_blank"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 font-medium text-lg"
        >
          <p className="text-center w-full">Moonpay</p>
        </Link>
        <Link
          href="https://bitcoin.com/"
          passHref
          target="_blank"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 font-medium text-lg"
        >
          <p className="text-center w-full">Bitcoin.com</p>
        </Link>
        <Link
          href="https://bitcoin.co.uk"
          passHref
          target="_blank"
          className="h-8 w-3/5 flex items-center p-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 font-medium text-lg"
        >
          <p className="text-center w-full">Bitcoin.co.uk</p>
        </Link>
      </div>
    </div>
  );
};

export default BuyCryptopage;
