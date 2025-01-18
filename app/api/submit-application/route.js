import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const position = formData.get("position");
  const message = formData.get("message");
  const cv = formData.get("cv");

  try {
    // Prepare email content
    const emailContent = `
      New Job Application:
      
      Name: ${fullName}
      Email: ${email}
      Position: ${position}
      Message: ${message}
    `;

    // Prepare email data
    const emailData = {
      to: "deskoemad@gmail.com",
      from: "noreply@yourdomain.com",
      subject: "New Job Application",
      text: emailContent,
    };

    // If there's a CV/image file, convert it to base64 and attach it
    if (cv) {
      const buffer = await cv.arrayBuffer();
      const base64File = Buffer.from(buffer).toString("base64");
      emailData.attachments = [
        {
          content: base64File,
          filename: cv.name,
          type: cv.type,
          disposition: "attachment",
        },
      ];
    }

    // Send email using a hypothetical email service API
    const response = await fetch("https://api.youremailservice.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EMAIL_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

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
