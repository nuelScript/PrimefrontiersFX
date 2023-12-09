import { auth, currentUser } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const user = await currentUser();

    const { firstName, lastName } =
      user?.firstName && user?.lastName
        ? user
        : { firstName: "", lastName: "" };

    const body = await req.json();

    const { amount, currency, paymentMethod, walletAddress, wallet } = body;

    if (!userId) {
      return NextResponse.redirect("/sign-in");
    }

    if (!firstName) {
      return new NextResponse("First name is required", { status: 400 });
    }

    const withdrawal = await prismadb.withdrawal.create({
      data: {
        userId: userId,
        currency,
        firstName,
        lastName,
        amount,
        paymentMethod,
        walletAddress,
        wallet,
      },
    });

    if (!withdrawal) {
      return new NextResponse("Withdrawal creation failed", { status: 400 });
    }

    return new NextResponse("Withdrawal created successfully", { status: 200 });
  } catch (error) {
    console.log(`[WITHDRAWALS_POST]`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
