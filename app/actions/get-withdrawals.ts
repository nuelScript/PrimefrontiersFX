"use server";

import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

const { userId } = auth();

if (!userId) {
  throw new Error("User is not logged in");
}

export const getWithdrawals = async () => {
  const withdrawals = await prismadb.withdrawal.findMany({
    where: { userId },
  });

  return withdrawals;
};
