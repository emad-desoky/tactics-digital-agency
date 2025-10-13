"use client";
import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

const services = [
  "Branding & Identity",
  "ADV‑Creative Development",
  "Content Marketing",
  "Creative Campaigns & Storytelling",
  "Graphic Design",
  "Photography & Visual Content",
  "Print Design & Collateral",
  "Reputation Management",
  "Search Engine Optimization (SEO)",
  "Social Media Marketing",
  "Social Media Creative Content",
  "Strategy & Consulting",
  "Video Production & Editing",
  "Web Development & UX/UI Design",
  "360 performance Media Buying",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    companyName: "",
    services: [],
    notes: "",
    website: "", // Honeypot field - should remain empty
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const formStartTime = useRef(Date.now());

  useEffect(() => {
    // Record when form was loaded
    formStartTime.current = Date.now();
  }, []);

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
      // Disposable email services
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
      return { valid: false, message: "Please enter a valid email address" };
    }

    if (isFakeOrDisposableEmail(email)) {
      return {
        valid: false,
        message: "Please use a valid business or personal email address",
      };
    }

    return { valid: true };
  };

  const validatePhone = (phone) => {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, "");

    // Must be between 10-15 digits
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return {
        valid: false,
        message: "Please enter a valid phone number (10-15 digits)",
      };
    }

    // Check for repeated digits (like 1111111111 or 0000000000)
    if (/^(\d)\1+$/.test(digitsOnly)) {
      return { valid: false, message: "Please enter a valid phone number" };
    }

    // Check for sequential digits (like 1234567890)
    const isSequential = digitsOnly.split("").every((digit, i, arr) => {
      if (i === 0) return true;
      return Number.parseInt(digit) === Number.parseInt(arr[i - 1]) + 1;
    });

    if (isSequential) {
      return { valid: false, message: "Please enter a valid phone number" };
    }

    return { valid: true };
  };

  const validateName = (name) => {
    // Name should be 2-50 characters, letters and spaces only
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!nameRegex.test(name)) {
      return {
        valid: false,
        message: "Please enter a valid name (letters only, 2-50 characters)",
      };
    }

    // Check for repeated characters (like "aaaa" or "bbbb")
    if (/(.)\1{3,}/.test(name)) {
      return { valid: false, message: "Please enter a valid name" };
    }

    return { valid: true };
  };

  const containsSuspiciousContent = (text) => {
    const suspiciousPatterns = [
      /https?:\/\//i, // URLs
      /<script/i, // Script tags
      /viagra|cialis|casino|lottery|crypto|bitcoin|forex|trading|investment|loan|credit|debt|insurance|pharmacy|pills|drugs|weight.?loss|male.?enhancement|enlargement|dating|hookup|sex|porn|xxx|adult|escort|massage|replica|rolex|gucci|louis.?vuitton|designer|handbag|sunglasses|watches|cheap|discount|free.?money|make.?money|work.?from.?home|business.?opportunity|mlm|multi.?level|pyramid|scheme|nigerian|prince|inheritance|lottery.?winner|congratulations|claim.?prize|click.?here|act.?now|limited.?time|urgent|verify.?account|suspended.?account|unusual.?activity|confirm.?identity|social.?security|bank.?account|paypal|western.?union|wire.?transfer|bitcoin|cryptocurrency|investment.?opportunity/i, // Extensive spam keywords
      /<[^>]*>/g, // HTML tags
      /\[url=/i, // BBCode
      /\b(test|fake|spam|dummy|example|sample)\b/i, // Test/fake words
    ];
    return suspiciousPatterns.some((pattern) => pattern.test(text));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else {
      const nameValidation = validateName(formData.name);
      if (!nameValidation.valid) {
        newErrors.name = nameValidation.message;
      }
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else {
      const phoneValidation = validatePhone(formData.mobile);
      if (!phoneValidation.valid) {
        newErrors.mobile = phoneValidation.message;
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailValidation = validateEmail(formData.email);
      if (!emailValidation.valid) {
        newErrors.email = emailValidation.message;
      }
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (
      formData.companyName.length < 2 ||
      formData.companyName.length > 100
    ) {
      newErrors.companyName =
        "Company name must be between 2 and 100 characters";
    } else if (containsSuspiciousContent(formData.companyName)) {
      newErrors.companyName = "Please enter a valid company name";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    if (formData.notes) {
      if (containsSuspiciousContent(formData.notes)) {
        newErrors.notes = "Your message contains invalid content";
      } else if (formData.notes.length < 10 || formData.notes.length > 5000) {
        newErrors.notes =
          "Notes must be between 10 and 5000 characters if provided";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.website) {
      // Silently fail for bots
      setFormData({
        name: "",
        mobile: "",
        email: "",
        companyName: "",
        services: [],
        notes: "",
        website: "",
      });
      return;
    }

    const timeTaken = Date.now() - formStartTime.current;
    if (timeTaken < 3000) {
      alert("Please take your time to fill out the form properly.");
      return;
    }

    if (!validateForm()) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: Date.now(),
        }),
      });

      if (response.ok) {
        alert(
          "Thank you! Your message has been sent successfully. We'll get back to you soon."
        );
        setFormData({
          name: "",
          mobile: "",
          email: "",
          companyName: "",
          services: [],
          notes: "",
          website: "",
        });
        setErrors({});
        formStartTime.current = Date.now();
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[rgb(22,22,23)] p-6 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Talk</h2>
          <p className="text-gray-400">We want to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            style={{ position: "absolute", left: "-9999px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                required
                className={`w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors ${
                  errors.name ? "border-2 border-red-500" : ""
                }`}
                placeholder="Name *"
                onChange={handleChange}
                value={formData.name}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                required
                className={`w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors ${
                  errors.mobile ? "border-2 border-red-500" : ""
                }`}
                placeholder="Mobile Number *"
                onChange={handleChange}
                value={formData.mobile}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="email"
                name="email"
                required
                className={`w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
                placeholder="E-mail *"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="companyName"
                required
                className={`w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors ${
                  errors.companyName ? "border-2 border-red-500" : ""
                }`}
                placeholder="Company Name *"
                onChange={handleChange}
                value={formData.companyName}
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          <div>
            <p className="text-gray-300 mb-4">
              Services you&apos;re interested in *
            </p>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 border border-gray-600 rounded-lg p-4 bg-[rgb(35,35,36)]">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-start space-x-3 cursor-pointer p-2 rounded-lg hover:bg-[rgb(45,45,46)] transition-colors"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 flex-shrink-0"
                    onChange={handleChange}
                    checked={formData.services.includes(service)}
                  />
                  <span className="text-gray-300 text-sm leading-relaxed break-words w-full">
                    {service}
                  </span>
                </label>
              ))}
            </div>
            {formData.services.length > 0 && (
              <p className="text-xs text-gray-400 mt-2">
                {formData.services.length} service
                {formData.services.length !== 1 ? "s" : ""} selected
              </p>
            )}
            {errors.services && (
              <p className="text-red-500 text-sm mt-1">{errors.services}</p>
            )}
          </div>

          <div>
            <textarea
              name="notes"
              rows="4"
              className={`w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors ${
                errors.notes ? "border-2 border-red-500" : ""
              }`}
              placeholder="Notes (optional, min 10 characters if provided)"
              onChange={handleChange}
              value={formData.notes}
            ></textarea>
            {errors.notes && (
              <p className="text-red-500 text-sm mt-1">{errors.notes}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-8 py-4 border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(43,43,43)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit"}
            <Send className="ml-2 h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
