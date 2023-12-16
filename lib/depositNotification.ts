"use server";

import nodemailer from "nodemailer";
import prismadb from "./prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function sendDepositNotification() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.redirect("/sign-in");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.APP_PASSWORD,
    },
  });

  try {
    const latestDeposit = await prismadb.deposit.findFirst({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!latestDeposit) {
      console.error("No deposit found for the user");
      return;
    }

    const transactionDetails = {
      name:
        latestDeposit.firstName +
        (latestDeposit.lastName ? ` ${latestDeposit.lastName}` : ""),
      amount: latestDeposit.amount,
      currency: latestDeposit.currency,
      paymentMethod: latestDeposit.paymentMethod,
      wallet: latestDeposit.wallet,
      userId: latestDeposit.userId,
      bitcoinEquivalent: latestDeposit.bitcoinEquivalent,
      status: latestDeposit.status,
    };

    const transactionInfo = `
        Deposit Details:
        -----------------
        Name: ${transactionDetails.name}
        Amount: ${transactionDetails.amount}
        Currency: ${transactionDetails.currency}
        Payment Method: ${transactionDetails.paymentMethod}
        Wallet: ${transactionDetails.wallet}
        User Id: ${transactionDetails.userId}
        Bitcoin Equivalent: ${transactionDetails.bitcoinEquivalent}
        Status: ${transactionDetails.status}
      `;

    const mailOptions = {
      from: `Emmanuel Ibiang <manuelscript65@gmail.com>`,
      to: "Emmyokojie010@gmail.com",
      subject: "New Deposit Needs Confirmation",
      text: transactionInfo,
    };

    await transporter.sendMail(mailOptions);

    console.log("Notification email sent successfully");
  } catch (error) {
    console.error("Error sending notification email:", error);
  }
}
