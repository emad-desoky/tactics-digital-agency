import { Linkedin, Instagram, Youtube, Facebook } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "https://www.facebook.com/share/16UcPPA2ze/",
      label: "Facebook",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/tacticsdigitalagencyegypt/?fbclid=PAQ0xDSwKXH2VleHRuA2FlbQIxMQABp-ysyKdtfnI1b4rOBllc_nFMSfHRA--2kUt54W15XLu2NviOczHYLVu-v1v5_aem_qLSF2TvvzHkbcXei1yeH4A",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/tacticsdigitalagency?igsh=MTM0NDVmYnlrbHpzMw==",
      label: "Instagram",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      href: "https://m.youtube.com/@TacticsDigitalAgency?fbclid=PAQ0xDSwKXH4FleHRuA2FlbQIxMAABp3xaz6mNcMzgbGo-BKdTRoLT5-6QTNtJpixpO31pQqzLvSMeo4RQ4efytnTL_aem_y-FZwFJeGKVIhop9G7Lx7Q",
      label: "YouTube",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      href: "https://www.tiktok.com/@tacticsdigitalagency",
      label: "TikTok",
    },
  ];

  const partners = [
    { name: "Google", logo: "/partner2.jpg" },
    { name: "Microsoft", logo: "/partner1.jpg" },
    { name: "Adobe", logo: "/partner3.jpg" },
    { name: "Meta", logo: "/nova6.png" },
  ];

  return (
    <div className="space-y-8">
      {/* Social Media Links */}
      <div className="text-center lg:text-left">
        <h4 className="text-lg font-medium text-gray-300 mb-4">Follow Us</h4>
        <div className="flex justify-center lg:justify-start space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-gray-800"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="text-center lg:text-left">
        <h4 className="text-lg font-medium text-gray-300 mb-4">Our Partners</h4>
        <div className="flex overflow-x-auto space-x-4 md:grid md:grid-cols-4 md:space-x-0 md:gap-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 md:flex-shrink">
              <img
                src={
                  partner.logo ||
                  "https://logowik.com/content/uploads/images/lorem-lorem7797.logowik.com.webp"
                }
                alt={`${partner.name} logo`}
                className="max-h-20 w-auto opacity-100 transition-opacity duration-300 rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
