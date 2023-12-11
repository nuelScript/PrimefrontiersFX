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
