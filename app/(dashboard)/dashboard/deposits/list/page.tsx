import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

const { userId } = auth();

if (!userId) {
  throw new Error("User is not logged in");
}

export const getDeposits = async () => {
  const deposits = await prismadb.deposit.findMany({
    where: { userId },
  });

  return deposits;
};

const DepositList = async () => {
  const deposits = await getDeposits();
  return (
    <div className="flex space-x-12 w-full max-w-screen-xl">
      <div className="flex flex-col space-y-4 w-full">
        <div className="flex justify-center">
          <Link href="/dashboard/deposits/crypto" passHref>
            <Button size="sm" className="p-4 capitalize">
              New Deposit
            </Button>
          </Link>
        </div>
        {deposits.map((deposit) => (
          <div
            key={deposit.id}
            className="flex justify-between items-center w-full p-8 group bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-xl"
          >
            <div className="flex flex-col space-y-4">
              <p className=" flex items-center font-medium text-sm">
                {deposit.currency === "usd" ? (
                  <DollarSign className="w-4 h-4 p-0" />
                ) : (
                  deposit.currency
                )}{" "}
                <span className="text-base">{deposit.amount}</span>
              </p>
              <p className="font-medium text-sm">{deposit.bitcoinEquivalent}</p>
              <p className="font-medium text-sm">{deposit.wallet} (Pending)</p>
            </div>
            <Link href="/" className="hover:text-neutral-500">
              Pay
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4 p-8 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-xl">
        <Image
          src="/images/kanchanara-fsSGgTBoX9Y-unsplash.jpg"
          alt="deposit_image"
          width={600}
          height={600}
        />
        <h3 className="font-bold text-4xl">Deposit</h3>
      </div>
    </div>
  );
};

export default DepositList;
