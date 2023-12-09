import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "manuelscript65@gmail.com",
      pass: "xzms vbwd ylzj hrhm ",
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: "manuelscript65@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse("Email sent successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Error sending mail", { status: 500 });
  }
}
