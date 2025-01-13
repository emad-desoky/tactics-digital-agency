"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Home,
  BookOpen,
  Briefcase,
  ImageIcon,
  Info,
  Menu,
  X,
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

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-4 md:px-24 z-50 bg-[rgb(0,0,0,0)] h-20 md:h-24">
      {/* Logo */}
      <div className="flex items-center z-10">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={400} height={80} />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer z-10" onClick={toggleNavbar}>
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </div>

      {/* Nav Links */}
      <ul
        className={`md:flex md:items-center md:space-x-6 text-white transition-all duration-300 ease-in-out ${
          isOpen
            ? "absolute top-full left-0 w-full p-4 bg-black bg-opacity-90 flex flex-col space-y-4"
            : "hidden"
        }`}
      >
        {NavItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="rounded-md px-2 py-2 text-xl  hover:bg-[rgb(255,228,0)] hover:text-black transition-colors duration-200 flex items-center space-x-6"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-4 text-white">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
        </Link>
        <Link
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-4 h-4 cursor-pointer text-[rgb(255,228,0)] transition-colors duration-200" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
