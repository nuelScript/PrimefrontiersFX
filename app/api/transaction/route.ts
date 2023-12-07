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
    const { amount, bitcoinEquivalent, currency, paymentMethod, service } =
      body;
    if (!userId) {
      return NextResponse.redirect("/sign-in");
    }
    if (!firstName) {
      return new NextResponse("First name is required", { status: 400 });
    }
    if (!lastName) {
      return new NextResponse("Last name is required", { status: 400 });
    }
    const transaction = await prismadb.transactions.create({
      data: {
        userId: userId,
        currency,
        firstName,
        lastName,
        amount,
        bitcoinEquivalent,
        paymentMethod,
        service,
      },
    });
    if (!transaction) {
      return new NextResponse("Transaction creation failed", { status: 400 });
    }
    return new NextResponse("Transaction created successfully", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Transaction creation failed", { status: 400 });
  }
}
