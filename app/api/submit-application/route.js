import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Xq4S5sm5_8GKjGd2Vry3LxFfWL3bpfosd");

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const position = formData.get("position");
    const message = formData.get("message");
    const cvFile = formData.get("cv");

    // Validate required fields
    if (!fullName || !email || !position || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #1a1a1a; color: white; padding: 30px; border-radius: 10px;">
          <h1 style="color: #ffe400; text-align: center; margin-bottom: 30px;">
            New Job Application - Tactics Digital Agency
          </h1>
          
          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #ffe400; margin-top: 0;">Applicant Information</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Position Applied For:</strong> ${position}</p>
          </div>
          
          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px;">
            <h2 style="color: #ffe400; margin-top: 0;">Message</h2>
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          ${
            cvFile
              ? `
          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h2 style="color: #ffe400; margin-top: 0;">CV Attachment</h2>
            <p>CV file attached: ${cvFile.name}</p>
          </div>
          `
              : ""
          }
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #444;">
            <p style="color: #888; font-size: 14px;">
              This application was submitted through the Tactics Digital Agency careers page.
            </p>
          </div>
        </div>
      </div>
    `;

    // Prepare email data
    const emailData = {
      from: "careers@tacticsdigitalagency.net",
      to: "careers@tacticsdigitalagency.net",
      subject: `New Job Application: ${position} - ${fullName}`,
      html: emailHtml,
      reply_to: email,
    };

    // Add CV attachment if provided
    if (cvFile) {
      const cvBuffer = await cvFile.arrayBuffer();
      emailData.attachments = [
        {
          filename: cvFile.name,
          content: Buffer.from(cvBuffer),
        },
      ];
    }

    // Send email
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to applicant
    await resend.emails.send({
      from: "careers@tacticsdigitalagency.net",
      to: email,
      subject: "Application Received - Tactics Digital Agency",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; color: white; padding: 30px; border-radius: 10px;">
            <h1 style="color: #ffe400; text-align: center; margin-bottom: 30px;">
              Thank You for Your Application!
            </h1>
            
            <p>Dear ${fullName},</p>
            
            <p>Thank you for your interest in the <strong>${position}</strong> position at Tactics Digital Agency.</p>
            
            <p>We have received your application and our team will review it carefully. If your qualifications match our requirements, we will contact you within the next few days to discuss the next steps.</p>
            
            <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #ffe400; margin-top: 0;">What's Next?</h3>
              <ul style="line-height: 1.6;">
                <li>Our HR team will review your application</li>
                <li>If selected, you'll receive an email for the next round</li>
                <li>We'll keep you updated throughout the process</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our website at <a href="https://www.tacticsdigitalagency.net" style="color: #ffe400;">www.tacticsdigitalagency.net</a> to learn more about our work and culture.</p>
            
            <p>Best regards,<br>
            <strong>The Tactics Digital Agency Team</strong></p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #444;">
              <p style="color: #888; font-size: 14px;">
                Tactics Digital Agency<br>
                Building Digital Excellence
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Application submitted successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
