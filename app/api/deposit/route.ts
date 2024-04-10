import { auth, currentUser } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { sendDepositNotification } from "@/lib/depositNotification";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const user = await currentUser();

    const { firstName, lastName } =
      user?.firstName && user?.lastName
        ? user
        : { firstName: "", lastName: "" };

    const body = await req.json();

    const { amount, bitcoinEquivalent, currency, paymentMethod, wallet } = body;

    if (!userId) {
      return NextResponse.redirect("/sign-in");
    }

    if (!firstName) {
      return new NextResponse("First name is required", { status: 400 });
    }

    const transaction = await prismadb.deposit.create({
      data: {
        userId: userId,
        currency,
        firstName,
        lastName,
        amount,
        status: "pending",
        bitcoinEquivalent,
        paymentMethod,
        wallet,
      },
    });

    if (!transaction) {
      return new NextResponse("Transaction creation failed", { status: 400 });
    }

    await sendDepositNotification();

    if (!sendDepositNotification()) {
      return new NextResponse("Transaction creation failed", { status: 400 }); // Remove if code breaks
    }

    return new NextResponse("Transaction created successfully", {
      status: 200,
    });
  } catch (error) {
    console.log(`[DEPOSITS_POST]`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deposits = await prismadb.deposit.findMany({
      where: {
        userId: userId,
      },
    });
    return NextResponse.json(deposits);
  } catch (error) {
    console.log(`[DEPOSITS_GET]`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
