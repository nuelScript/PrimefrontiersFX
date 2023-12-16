import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const ReferralPage = async () => {
  "use server";
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not logged in");
  }
  return (
    <Card className="flex flex-col items-center space-y-6 border-none md:max-w-screen-xl w-full">
      <CardHeader className="text-xl uppercase font-semibold">
        My Referrals
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4 md:max-w-screen-xl w-full h-40 rounded-2xl p-4">
        <div className="flex flex-col space-y-6 items-center dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 bg-neutral-200 rounded-2xl p-4">
          <h3 className="font-bold text-xl capitalize">Referral Link</h3>
          <Link
            href={` https://www.primefrontiers.com/sign-up?${userId}`}
            className="text-lg text-gray-950 dark:text-gray-500 "
          >
            https://www.primefrontiers.com/sign-up?{userId}
          </Link>
        </div>
        <div className="flex items-center justify-center w-fit capitalize dark:bg-neutral-900 hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50 bg-neutral-200 rounded-2xl p-8">
          No Referrals Yet
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralPage;
