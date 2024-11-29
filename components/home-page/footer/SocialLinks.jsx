import React from "react";
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com",
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
