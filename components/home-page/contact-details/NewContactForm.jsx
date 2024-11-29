"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    yearsInBusiness: "",
    website: "",
    businessSize: "",
    budget: "",
    message: "",
    services: {
      websiteDevelopment: false,
      branding: false,
      photography: false,
      socialMedia: false,
      animation: false,
      videoProduction: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto  bg-[rgb(22,22,23)] p-6 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Lets Talk</h2>
          <p className="text-gray-400">We want to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="fullName"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]   focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
                placeholder="Full Name *"
                onChange={handleChange}
                value={formData.fullName}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]   focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
                placeholder="Email *"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]   focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
                placeholder="Phone *"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div>
              <input
                type="text"
                name="businessName"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]   focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
                placeholder="Business Name *"
                onChange={handleChange}
                value={formData.businessName}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <select
              name="yearsInBusiness"
              required
              className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]  focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
              onChange={handleChange}
              value={formData.yearsInBusiness}
            >
              <option value="">Years in Business *</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
            <input
              type="text"
              name="website"
              required
              className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]  focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
              placeholder="Current Instagram/Website *"
              onChange={handleChange}
              value={formData.website}
            />
          </div>

          <div>
            <p className="text-gray-300 mb-4">Im interested in help with *</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="websiteDevelopment"
                  className="w-5 h-5 rounded  text-[rgb(43,43,43)] focus:ring-[rgb(43,43,43)]"
                  onChange={handleChange}
                  checked={formData.services.websiteDevelopment}
                />
                <span className="text-gray-300">Website Development</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="branding"
                  className="w-5 h-5 rounded  text-[rgb(43,43,43)] focus:ring-[rgb(43,43,43)]"
                  onChange={handleChange}
                  checked={formData.services.branding}
                />
                <span className="text-gray-300">Branding & Design</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="photography"
                  className="w-5 h-5 rounded  text-[rgb(43,43,43)] focus:ring-[rgb(43,43,43)]"
                  onChange={handleChange}
                  checked={formData.services.photography}
                />
                <span className="text-gray-300">Commercial Photography</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="socialMedia"
                  className="w-5 h-5 rounded  text-[rgb(43,43,43)] focus:ring-[rgb(43,43,43)]"
                  onChange={handleChange}
                  checked={formData.services.socialMedia}
                />
                <span className="text-gray-300">Social Media Management</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="animation"
                  className="w-5 h-5 rounded  text-[rgb(43,43,43)] focus:ring-[rgb(43,43,43)]"
                  onChange={handleChange}
                  checked={formData.services.animation}
                />
                <span className="text-gray-300">3D, VFX and CGI</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="videoProduction"
                  className="w-5 h-5 rounded  text-[rgb(43,43,43)] focus:ring-[rgb(43,43,43)]"
                  onChange={handleChange}
                  checked={formData.services.videoProduction}
                />
                <span className="text-gray-300">
                  Commercial Video Production
                </span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <select
              name="businessSize"
              required
              className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]   focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
              onChange={handleChange}
              value={formData.businessSize}
            >
              <option value="">Business Size *</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201+">201+ employees</option>
            </select>
            <select
              name="budget"
              required
              className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]   focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
              onChange={handleChange}
              value={formData.budget}
            >
              <option value="">Budget *</option>
              <option value="<5k">Less than $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k+">$25,000+</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-[rgb(40,40,41)]   focus:border-[rgb(43,43,43)] focus:ring-2 focus:ring-[rgb(43,43,43)] outline-none transition-colors"
              placeholder="Message *"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>

          <p className="text-sm text-gray-400">
            If you are applying for a position, your application will not be
            considered if you use this form.
          </p>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-8 py-4  border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(43,43,43)] transition-colors"
          >
            Submit <Send className="ml-2 h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
