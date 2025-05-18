import React from "react";
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    // {
    //   icon: <Github className="w-5 h-5" />,
    //   href: "https://github.com",
    //   label: "GitHub",
    // },
    // {
    //   icon: <Twitter className="w-5 h-5" />,
    //   href: "https://twitter.com",
    //   label: "Twitter",
    // },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/tacticsdigitalagencyegypt/?fbclid=PAQ0xDSwKXH2VleHRuA2FlbQIxMQABp-ysyKdtfnI1b4rOBllc_nFMSfHRA--2kUt54W15XLu2NviOczHYLVu-v1v5_aem_qLSF2TvvzHkbcXei1yeH4A",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/tacticsdigitalagency?igsh=MTM0NDVmYnlrbHpzMw==",
      label: "Instagram",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://m.youtube.com/@TacticsDigitalAgency?fbclid=PAQ0xDSwKXH4FleHRuA2FlbQIxMAABp3xaz6mNcMzgbGo-BKdTRoLT5-6QTNtJpixpO31pQqzLvSMeo4RQ4efytnTL_aem_y-FZwFJeGKVIhop9G7Lx7Q",
      label: "YouTube",
    },
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
