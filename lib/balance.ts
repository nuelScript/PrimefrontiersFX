"use server";

import prismadb from "./prismadb";
import { auth } from "@clerk/nextjs";

export async function fetchMiningBalance() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not logged in");
  }

  const miningDeposits = await prismadb.deposit.findMany({
    where: {
      userId,
      wallet: {
        contains: "mining",
      },
      status: "confirmed",
    },
    select: {
      amount: true,
    },
  });

  const miningWithdrawals = await prismadb.withdrawal.findMany({
    where: {
      userId,
      wallet: {
        contains: "mining",
      },
    },
    select: {
      amount: true,
    },
  });

  const miningBalance =
    miningDeposits.reduce(
      (acc, deposit) => acc + parseFloat(deposit.amount),
      0
    ) -
    miningWithdrawals.reduce(
      (acc, withdrawal) => acc + parseFloat(withdrawal.amount),
      0
    );

  return miningBalance.toFixed(2);
}

export async function fetchTradingBalance() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not logged in");
  }

  const tradingDeposits = await prismadb.deposit.findMany({
    where: {
      userId,
      wallet: {
        contains: "trading",
      },
      status: "confirmed",
    },
    select: {
      amount: true,
    },
  });

  const tradingWithdrawals = await prismadb.withdrawal.findMany({
    where: {
      userId,
      wallet: {
        contains: "trading",
      },
    },
    select: {
      amount: true,
    },
  });

  const tradingBalance =
    tradingDeposits.reduce(
      (acc, deposit) => acc + parseFloat(deposit.amount),
      0
    ) -
    tradingWithdrawals.reduce(
      (acc, withdrawal) => acc + parseFloat(withdrawal.amount),
      0
    );

  return tradingBalance.toFixed(2);
}
