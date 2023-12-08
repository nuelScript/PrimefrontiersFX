import prismadb from "@/lib/prismadb";

export const getDeposits = async (userId: string) => {
  const deposits = await prismadb.deposit.findMany({
    where: {
      userId,
    },
  });

  return deposits;
};
