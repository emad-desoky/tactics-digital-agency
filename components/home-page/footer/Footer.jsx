"use client";

import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import CompanyInfo from "./CompanyInfo";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/201095059730", "_blank");
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
          {/* Left Side - Logo, Social Links, and Partners */}
          <div className="space-y-8">
            <Logo />
            <SocialLinks />
          </div>

          {/* Right Side - Contact Info and Locations */}
          <div>
            <CompanyInfo />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "About", href: "/about-us" },
                { name: "Blogs", href: "/blogs" },
                { name: "Gallery", href: "/gallery" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TACTICS® Digital Agency. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Developed by Nova Development</span>
              <button
                onClick={handleWhatsAppClick}
                className="text-green-500 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform"
                aria-label="Contact on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
