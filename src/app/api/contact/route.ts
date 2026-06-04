import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `📩 ${name} sent you a message`,

  html: `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 650px;
      margin: auto;
      padding: 24px;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      background: #ffffff;
    ">

      <h2 style="
        margin: 0 0 20px;
        color: #111827;
      ">
        New Message
      </h2>

      <p style="margin-bottom: 24px; color: #4b5563;">
        Someone reached out through your website.
      </p>

      <div style="
        background: #f8fafc;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 20px;
      ">
        <p><strong>Name</strong><br/>${name}</p>

        <p><strong>Email</strong><br/>${email}</p>
      </div>

      <p style="
        margin-bottom: 10px;
        font-weight: 600;
      ">
        Message
      </p>

      <div style="
        background: #f8fafc;
        padding: 16px;
        border-radius: 8px;
        border-left: 4px solid #dc2626;
        white-space: pre-wrap;
      ">
        ${message}
      </div>

    </div>
  `,
});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}