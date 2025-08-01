import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Xq4S5sm5_8GKjGd2Vry3LxFfWL3bpfosd");

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, mobile, email, companyName, services, notes } = formData;

    // Validate required fields
    if (
      !name ||
      !mobile ||
      !email ||
      !companyName ||
      !services ||
      services.length === 0
    ) {
      return NextResponse.json(
        {
          message:
            "All fields are required and at least one service must be selected",
        },
        { status: 400 }
      );
    }

    // Prepare services list for email
    const servicesList = services.join(", ");

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #1a1a1a; color: white; padding: 30px; border-radius: 10px;">
          <h1 style="color: #ffe400; text-align: center; margin-bottom: 30px;">
            New Contact Form Submission - Tactics Digital Agency
          </h1>
          
          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #ffe400; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company Name:</strong> ${companyName}</p>
          </div>
          
          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #ffe400; margin-top: 0;">Services Requested</h2>
            <p style="line-height: 1.6;">${servicesList}</p>
          </div>
          
          ${
            notes
              ? `
          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px;">
            <h2 style="color: #ffe400; margin-top: 0;">Notes</h2>
            <p style="line-height: 1.6;">${notes.replace(/\n/g, "<br>")}</p>
          </div>
          `
              : ""
          }
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #444;">
            <p style="color: #888; font-size: 14px;">
              This inquiry was submitted through the Tactics Digital Agency contact form.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to company
    const { data, error } = await resend.emails.send({
      from: "contact@tacticsdigitalagency.net",
      to: "ask@tacticsdigitalagency.net",
      subject: `New Contact Form Submission - ${companyName}`,
      html: emailHtml,
      reply_to: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to client
    await resend.emails.send({
      from: "contact@tacticsdigitalagency.net",
      to: email,
      subject: "Thank You for Contacting Tactics Digital Agency",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; color: white; padding: 30px; border-radius: 10px;">
            <h1 style="color: #ffe400; text-align: center; margin-bottom: 30px;">
              Thank You for Your Inquiry!
            </h1>
            
            <p>Dear ${name},</p>
            
            <p>Thank you for reaching out to Tactics Digital Agency. We have received your inquiry regarding our services and appreciate your interest in working with us.</p>
            
            <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #ffe400; margin-top: 0;">What's Next?</h3>
              <ul style="line-height: 1.6;">
                <li>Our team will review your requirements</li>
                <li>We'll contact you within 24-48 hours</li>
                <li>We'll discuss how we can help achieve your goals</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our website at <a href="https://www.tacticsdigitalagency.net" style="color: #ffe400;">www.tacticsdigitalagency.net</a> to learn more about our services and recent work.</p>
            
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
      { message: "Contact form submitted successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
