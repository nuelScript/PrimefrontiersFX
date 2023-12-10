import { getWithdrawals } from "@/app/actions/get-withdrawals";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface WithdrawalProps {
  params: { userId: string };
}

const WithdrawalList = async ({ params }: WithdrawalProps) => {
  const withdrawals = await getWithdrawals(params.userId);
  return (
    <div className="flex flex-col items-center space-y-8 w-full max-w-screen-lg group lg:p-0 p-8">
      <Card className="flex flex-col items-center justify-center w-full p-8 border-none bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-100/50 dark:group-hover:bg-neutral-800/50">
        <CardContent className="text-center font-semibold capitalize text-sm w-full">
          {withdrawals
            ? withdrawals.map((withdrawal) => (
                <div
                  key={withdrawal.id}
                  className="flex justify-between items-center w-full group rounded-xl"
                >
                  <div className="flex flex-col space-y-2">
                    <span className="font-medium text-base text-start">
                      Time:
                    </span>
                    {new Date(withdrawal.createdAt).toLocaleString("en-GB")}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className=" flex items-center space-x-1 font-medium text-sm">
                      <span>Amount:</span>
                      <span className="uppercase">
                        {withdrawal.currency}
                      </span>{" "}
                      <span className="text-sm">{withdrawal.amount}</span>
                    </p>
                    <div className="flex space-x-1">
                      <span>Wallet:</span>
                      <p className="font-medium text-sm">{withdrawal.wallet}</p>
                    </div>
                  </div>
                </div>
              ))
            : "No withdrawals yet"}
        </CardContent>
      </Card>
      <Link href="/dashboard/withdrawals/new" passHref>
        <Button variant="default" className="uppercase">
          New Withdrawal Request
        </Button>
      </Link>
    </div>
  );
};

export default WithdrawalList;
