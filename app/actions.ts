import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
const { userId } = auth();

if (!userId) {
  throw new Error("User is not logged in");
}

export const getDeposits = async () => {
  "use server";
  const deposits = await prismadb.deposit.findMany({
    where: { userId },
  });

  return deposits;
};

export const getWithdrawals = async () => {
  "use server";
  const withdrawals = await prismadb.withdrawal.findMany({
    where: { userId },
  });

  return withdrawals;
};
