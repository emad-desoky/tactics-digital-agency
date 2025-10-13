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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Allow various phone formats
    const phoneRegex = /^[\d\s\-+$$$$]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateName = (name) => {
    // Name should be 2-50 characters, letters and spaces only
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    return nameRegex.test(name);
  };

  const containsSuspiciousContent = (text) => {
    const suspiciousPatterns = [
      /https?:\/\//i, // URLs
      /<script/i, // Script tags
      /viagra|cialis|casino|lottery|crypto|bitcoin/i, // Common spam keywords
      /<[^>]*>/g, // HTML tags
      /\[url=/i, // BBCode
    ];
    return suspiciousPatterns.some((pattern) => pattern.test(text));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!validateName(formData.name)) {
      newErrors.name =
        "Please enter a valid name (letters only, 2-50 characters)";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!validatePhone(formData.mobile)) {
      newErrors.mobile = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (
      formData.companyName.length < 2 ||
      formData.companyName.length > 100
    ) {
      newErrors.companyName =
        "Company name must be between 2 and 100 characters";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    if (formData.notes && containsSuspiciousContent(formData.notes)) {
      newErrors.notes = "Your message contains invalid content";
    }

    if (
      formData.notes &&
      (formData.notes.length < 10 || formData.notes.length > 5000)
    ) {
      newErrors.notes =
        "Notes must be between 10 and 5000 characters if provided";
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
      console.log("[v0] Honeypot triggered - spam detected");
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
      console.log("[v0] Form submitted too quickly - spam detected");
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
