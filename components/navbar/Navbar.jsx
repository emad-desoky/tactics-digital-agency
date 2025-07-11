"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Home,
  BookOpen,
  Briefcase,
  ImageIcon,
  Info,
  Menu,
  X,
  Linkedin,
} from "lucide-react";

const NavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "AboutUs", href: "/about-us", icon: Info },
  { name: "Blogs", href: "/blogs", icon: BookOpen },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Careers", href: "/careers", icon: Briefcase },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Start fading at 50px, completely faded by 150px
      const newOpacity = Math.max(0, 1 - scrollPosition / 150);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between items-center px-4 md:px-8 z-50 h-20 md:h-24 transition-all duration-300 ${
        isOpen ? "bg-black" : ""
      }`}
      style={{
        backgroundColor: isOpen ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0)",
      }}
    >
      {/* Logo - Fades on scroll */}
      <div
        className="flex items-center z-20 transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : scrollOpacity }}
      >
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={300} height={80} />
        </Link>
      </div>

      {/* Mobile Menu Icon - Fades on scroll */}
      <div
        className="md:hidden cursor-pointer z-20 transition-opacity duration-300"
        onClick={toggleNavbar}
        style={{ opacity: isOpen ? 1 : scrollOpacity }}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </div>

      {/* Nav Links */}
      <div
        className={`md:flex md:items-center md:space-x-6 text-white transition-all duration-300 ease-in-out ${
          isOpen
            ? "fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4 z-10"
            : "hidden md:flex"
        }`}
        style={{ opacity: isOpen ? 1 : scrollOpacity }}
      >
        {NavItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="rounded-md px-2 py-2 text-xl hover:bg-[rgb(255,228,0)] hover:text-black transition-colors duration-200 flex items-center space-x-6"
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="w-6 h-6" />
            <span>{item.name}</span>
          </Link>
        ))}

        {/* Social Media Icons for Mobile */}
        <div className="md:hidden flex space-x-4 mt-6">
          <Link
            href="https://www.facebook.com/share/16UcPPA2ze/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.instagram.com/tacticsdigitalagency?igsh=MTM0NDVmYnlrbHpzMw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/tacticsdigitalagencyegypt/?fbclid=PAQ0xDSwKXH2VleHRuA2FlbQIxMQABp-ysyKdtfnI1b4rOBllc_nFMSfHRA--2kUt54W15XLu2NviOczHYLVu-v1v5_aem_qLSF2TvvzHkbcXei1yeH4A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
          </Link>
          <Link
            href="https://m.youtube.com/@TacticsDigitalAgency?fbclid=PAQ0xDSwKXH4FleHRuA2FlbQIxMAABp3xaz6mNcMzgbGo-BKdTRoLT5-6QTNtJpixpO31pQqzLvSMeo4RQ4efytnTL_aem_y-FZwFJeGKVIhop9G7Lx7Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.tiktok.com/@tacticsdigitalagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Desktop Social Media Icons - Fades on scroll */}
      <div
        className="hidden md:flex items-center space-x-4 z-20 transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
      >
        <div className="flex space-x-4 text-white">
          <Link
            href="https://www.facebook.com/share/16UcPPA2ze/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.instagram.com/tacticsdigitalagency?igsh=MTM0NDVmYnlrbHpzMw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/tacticsdigitalagencyegypt/?fbclid=PAQ0xDSwKXH2VleHRuA2FlbQIxMQABp-ysyKdtfnI1b4rOBllc_nFMSfHRA--2kUt54W15XLu2NviOczHYLVu-v1v5_aem_qLSF2TvvzHkbcXei1yeH4A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
          </Link>
          <Link
            href="https://m.youtube.com/@TacticsDigitalAgency?fbclid=PAQ0xDSwKXH4FleHRuA2FlbQIxMAABp3xaz6mNcMzgbGo-BKdTRoLT5-6QTNtJpixpO31pQqzLvSMeo4RQ4efytnTL_aem_y-FZwFJeGKVIhop9G7Lx7Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.tiktok.com/@tacticsdigitalagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
