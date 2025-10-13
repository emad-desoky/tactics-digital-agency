import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Xq4S5sm5_8GKjGd2Vry3LxFfWL3bpfosd");

const submissionTracker = new Map();
const emailPhoneTracker = new Map(); // Track unique emails and phones

setInterval(() => {
  const oneHourAgo = Date.now() - 3600000;
  for (const [key, data] of submissionTracker.entries()) {
    if (data.timestamp < oneHourAgo) {
      submissionTracker.delete(key);
    }
  }

  // Clean up email/phone tracker (keep for 24 hours to prevent duplicate submissions)
  const oneDayAgo = Date.now() - 86400000;
  for (const [key, timestamp] of emailPhoneTracker.entries()) {
    if (timestamp < oneDayAgo) {
      emailPhoneTracker.delete(key);
    }
  }
}, 3600000);

const isFakeOrDisposableEmail = (email) => {
  const fakeAndDisposableDomains = [
    // Common fake/test domains
    "test.com",
    "example.com",
    "sample.com",
    "demo.com",
    "fake.com",
    "testing.com",
    "temp.com",
    "dummy.com",
    "invalid.com",
    "localhost",
    // Disposable email services (extensive list)
    "10minutemail.com",
    "guerrillamail.com",
    "mailinator.com",
    "tempmail.com",
    "throwaway.email",
    "yopmail.com",
    "maildrop.cc",
    "getnada.com",
    "trashmail.com",
    "sharklasers.com",
    "guerrillamail.info",
    "grr.la",
    "guerrillamail.biz",
    "guerrillamail.de",
    "spam4.me",
    "mailnesia.com",
    "temp-mail.org",
    "mohmal.com",
    "emailondeck.com",
    "fakeinbox.com",
    "mytemp.email",
    "dispostable.com",
    "throwawaymail.com",
    "mintemail.com",
    "mailcatch.com",
    "emailfake.com",
    "spamgourmet.com",
    "incognitomail.org",
    "anonymousemail.me",
    "deadaddress.com",
    "emailtemporanea.com",
    "jetable.org",
    "mailexpire.com",
    "mailforspam.com",
    "mailfreeonline.com",
    "mailmoat.com",
    "mailnull.com",
    "meltmail.com",
    "mintemail.com",
    "mytrashmail.com",
    "no-spam.ws",
    "nospam.ze.tc",
    "nospamfor.us",
    "nowmymail.com",
    "objectmail.com",
    "obobbo.com",
    "oneoffemail.com",
    "onewaymail.com",
    "pookmail.com",
    "proxymail.eu",
    "put2.net",
    "qq.com",
    "quickinbox.com",
    "rcpt.at",
    "recode.me",
    "recursor.net",
    "rtrtr.com",
    "safe-mail.net",
    "safetymail.info",
    "sandelf.de",
    "saynotospams.com",
    "selfdestructingmail.com",
    "sendspamhere.com",
    "shiftmail.com",
    "skeefmail.com",
    "slaskpost.se",
    "slopsbox.com",
    "smellfear.com",
    "snakemail.com",
    "sneakemail.com",
    "sofimail.com",
    "sofort-mail.de",
    "sogetthis.com",
    "soodonims.com",
    "spam.la",
    "spamavert.com",
    "spambob.com",
    "spambog.com",
    "spambog.de",
    "spambox.us",
    "spamcannon.com",
    "spamcannon.net",
    "spamcon.org",
    "spamcorptastic.com",
    "spamcowboy.com",
    "spamday.com",
    "spamex.com",
    "spamfree24.com",
    "spamfree24.de",
    "spamfree24.eu",
    "spamfree24.info",
    "spamfree24.net",
    "spamfree24.org",
    "spamgourmet.com",
    "spamgourmet.net",
    "spamgourmet.org",
    "spamherelots.com",
    "spamhereplease.com",
    "spamhole.com",
    "spamify.com",
    "spaminator.de",
    "spamkill.info",
    "spaml.com",
    "spaml.de",
    "spammotel.com",
    "spamobox.com",
    "spamoff.de",
    "spamslicer.com",
    "spamspot.com",
    "spamthis.co.uk",
    "spamthisplease.com",
    "spamtrail.com",
    "speed.1s.fr",
    "supergreatmail.com",
    "supermailer.jp",
    "suremail.info",
    "teewars.org",
    "teleworm.com",
    "teleworm.us",
    "temp-mail.com",
    "temp-mail.de",
    "temp-mail.org",
    "temp-mail.ru",
    "tempalias.com",
    "tempe-mail.com",
    "tempemail.biz",
    "tempemail.com",
    "tempemail.net",
    "tempinbox.co.uk",
    "tempinbox.com",
    "tempmail.eu",
    "tempmail.it",
    "tempmail2.com",
    "tempmaildemo.com",
    "tempmailer.com",
    "tempmailer.de",
    "tempomail.fr",
    "temporarily.de",
    "temporarioemail.com.br",
    "temporaryemail.net",
    "temporaryemail.us",
    "temporaryforwarding.com",
    "temporaryinbox.com",
    "temporarymailaddress.com",
    "tempthe.net",
    "thankyou2010.com",
    "thc.st",
    "thelimestones.com",
    "thisisnotmyrealemail.com",
    "thismail.net",
    "throwawayemailaddress.com",
    "tilien.com",
    "tittbit.in",
    "tizi.com",
    "tmailinator.com",
    "toomail.biz",
    "topranklist.de",
    "tradermail.info",
    "trash-amil.com",
    "trash-mail.at",
    "trash-mail.com",
    "trash-mail.de",
    "trash2009.com",
    "trashemail.de",
    "trashmail.at",
    "trashmail.com",
    "trashmail.de",
    "trashmail.me",
    "trashmail.net",
    "trashmail.org",
    "trashmail.ws",
    "trashmailer.com",
    "trashymail.com",
    "trashymail.net",
    "trialmail.de",
    "trillianpro.com",
    "twinmail.de",
    "tyldd.com",
    "uggsrock.com",
    "umail.net",
    "uroid.com",
    "us.af",
    "venompen.com",
    "veryrealemail.com",
    "viditag.com",
    "viewcastmedia.com",
    "viewcastmedia.net",
    "viewcastmedia.org",
    "webm4il.info",
    "wegwerfadresse.de",
    "wegwerfemail.de",
    "wegwerfmail.de",
    "wegwerfmail.net",
    "wegwerfmail.org",
    "wetrainbayarea.com",
    "wetrainbayarea.org",
    "wh4f.org",
    "whyspam.me",
    "willselfdestruct.com",
    "winemaven.info",
    "wronghead.com",
    "wuzup.net",
    "wuzupmail.net",
    "www.e4ward.com",
    "www.gishpuppy.com",
    "www.mailinator.com",
    "wwwnew.eu",
    "x.ip6.li",
    "xagloo.com",
    "xemaps.com",
    "xents.com",
    "xmaily.com",
    "xoxy.net",
    "yapped.net",
    "yep.it",
    "yogamaven.com",
    "yopmail.com",
    "yopmail.fr",
    "yopmail.net",
    "yourdomain.com",
    "ypmail.webarnak.fr.eu.org",
    "yuurok.com",
    "zehnminuten.de",
    "zehnminutenmail.de",
    "zippymail.info",
    "zoaxe.com",
    "zoemail.net",
    "zomg.info",
  ];

  const emailDomain = email.toLowerCase().split("@")[1];
  return fakeAndDisposableDomains.includes(emailDomain);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  if (isFakeOrDisposableEmail(email)) {
    return false;
  }

  return true;
};

const validatePhone = (phone) => {
  const digitsOnly = phone.replace(/\D/g, "");

  // Must be between 10-15 digits
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return false;
  }

  // Check for repeated digits (like 1111111111)
  if (/^(\d)\1+$/.test(digitsOnly)) {
    return false;
  }

  // Check for sequential digits (like 1234567890)
  const isSequential = digitsOnly.split("").every((digit, i, arr) => {
    if (i === 0) return true;
    return Number.parseInt(digit) === Number.parseInt(arr[i - 1]) + 1;
  });

  if (isSequential) {
    return false;
  }

  return true;
};

const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  if (!nameRegex.test(name)) {
    return false;
  }

  // Check for repeated characters
  if (/(.)\1{3,}/.test(name)) {
    return false;
  }

  return true;
};

const containsSuspiciousContent = (text) => {
  const suspiciousPatterns = [
    /https?:\/\//i,
    /<script/i,
    /viagra|cialis|casino|lottery|crypto|bitcoin|forex|trading|investment|loan|credit|debt|insurance|pharmacy|pills|drugs|weight.?loss|male.?enhancement|enlargement|dating|hookup|sex|porn|xxx|adult|escort|massage|replica|rolex|gucci|louis.?vuitton|designer|handbag|sunglasses|watches|cheap|discount|free.?money|make.?money|work.?from.?home|business.?opportunity|mlm|multi.?level|pyramid|scheme|nigerian|prince|inheritance|lottery.?winner|congratulations|claim.?prize|click.?here|act.?now|limited.?time|urgent|verify.?account|suspended.?account|unusual.?activity|confirm.?identity|social.?security|bank.?account|paypal|western.?union|wire.?transfer|bitcoin|cryptocurrency|investment.?opportunity/i,
    /<[^>]*>/g,
    /\[url=/i,
    /\b(test|fake|spam|dummy|example|sample)\b/i,
  ];
  return suspiciousPatterns.some((pattern) => pattern.test(text));
};

const checkRateLimit = (email, ip) => {
  const key = `${email}-${ip}`;
  const now = Date.now();
  const oneHourAgo = now - 3600000;

  if (submissionTracker.has(key)) {
    const data = submissionTracker.get(key);
    data.submissions = data.submissions.filter((time) => time > oneHourAgo);

    if (data.submissions.length >= 3) {
      return false;
    }

    data.submissions.push(now);
    submissionTracker.set(key, data);
  } else {
    submissionTracker.set(key, {
      submissions: [now],
      timestamp: now,
    });
  }

  return true;
};

const checkDuplicateSubmission = (email, phone) => {
  const emailKey = `email:${email.toLowerCase()}`;
  const phoneKey = `phone:${phone.replace(/\D/g, "")}`;

  if (emailPhoneTracker.has(emailKey)) {
    return { isDuplicate: true, type: "email" };
  }

  if (emailPhoneTracker.has(phoneKey)) {
    return { isDuplicate: true, type: "phone" };
  }

  return { isDuplicate: false };
};

const recordSubmission = (email, phone) => {
  const now = Date.now();
  const emailKey = `email:${email.toLowerCase()}`;
  const phoneKey = `phone:${phone.replace(/\D/g, "")}`;

  emailPhoneTracker.set(emailKey, now);
  emailPhoneTracker.set(phoneKey, now);
};

export async function POST(request) {
  try {
    const formData = await request.json();
    const {
      name,
      mobile,
      email,
      companyName,
      services,
      notes,
      website,
      submittedAt,
    } = formData;

    if (website) {
      return NextResponse.json(
        { message: "Contact form submitted successfully" },
        { status: 200 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const duplicateCheck = checkDuplicateSubmission(email, mobile);
    if (duplicateCheck.isDuplicate) {
      return NextResponse.json(
        {
          message: `This ${duplicateCheck.type} has already been used to submit a contact form. Please use a different ${duplicateCheck.type}.`,
        },
        { status: 400 }
      );
    }

    if (!checkRateLimit(email, ip)) {
      return NextResponse.json(
        { message: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    if (
      !name ||
      !mobile ||
      !email ||
      !companyName ||
      !services ||
      services.length === 0
    ) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Please use a valid business or personal email address" },
        { status: 400 }
      );
    }

    if (!validatePhone(mobile)) {
      return NextResponse.json(
        { message: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    if (!validateName(name)) {
      return NextResponse.json(
        { message: "Please enter a valid name" },
        { status: 400 }
      );
    }

    if (companyName.length < 2 || companyName.length > 100) {
      return NextResponse.json(
        { message: "Company name must be between 2 and 100 characters" },
        { status: 400 }
      );
    }

    if (containsSuspiciousContent(companyName)) {
      return NextResponse.json(
        { message: "Please enter a valid company name" },
        { status: 400 }
      );
    }

    if (notes) {
      if (notes.length < 10 || notes.length > 5000) {
        return NextResponse.json(
          { message: "Notes must be between 10 and 5000 characters" },
          { status: 400 }
        );
      }

      if (containsSuspiciousContent(notes)) {
        return NextResponse.json(
          { message: "Your message contains invalid content" },
          { status: 400 }
        );
      }
    }

    if (
      containsSuspiciousContent(name) ||
      containsSuspiciousContent(companyName) ||
      (notes && containsSuspiciousContent(notes))
    ) {
      return NextResponse.json(
        { message: "Your submission contains invalid content" },
        { status: 400 }
      );
    }

    recordSubmission(email, mobile);

    const servicesList = services.join(", ");

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
