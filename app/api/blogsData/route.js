import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const formData = await req.formData();
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const position = formData.get("position");
  const message = formData.get("message");
  const cv = formData.get("cv");

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "deskoemad@gmail.com",
      subject: "New Job Application",
      text: `
        Name: ${fullName}
        Email: ${email}
        Position: ${position}
        Message: ${message}
      `,
      attachments: cv
        ? [
            {
              filename: cv.name,
              content: await cv.arrayBuffer(),
            },
          ]
        : [],
    });

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to submit application" },
      { status: 500 }
    );
  }
}
