"use client";
import { useState } from "react";
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
        });
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
                placeholder="Name *"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
                placeholder="Mobile Number *"
                onChange={handleChange}
                value={formData.mobile}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
                placeholder="E-mail *"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <input
                type="text"
                name="companyName"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
                placeholder="Company Name *"
                onChange={handleChange}
                value={formData.companyName}
              />
            </div>
          </div>

          <div>
            <p className="text-gray-300 mb-4">
              Services you&apos;re interested in *
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-h-60 overflow-y-auto">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    className="w-5 h-5 rounded text-[rgb(43,43,43)] focus:ring-[rgb(43,43,43)]"
                    onChange={handleChange}
                    checked={formData.services.includes(service)}
                  />
                  <span className="text-gray-300 text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <textarea
              name="notes"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)] focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
              placeholder="Notes"
              onChange={handleChange}
              value={formData.notes}
            ></textarea>
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
