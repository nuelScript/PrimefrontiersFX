import prismadb from "@/lib/prismadb";

export const getWithdrawals = (userId: string) => {
  const withdrawals = prismadb.withdrawal.findMany({
    where: {
      userId,
    },
  });

  return withdrawals;
};
