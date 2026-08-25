"use client";

import React, { useState, useEffect } from "react";
import { professorData } from "@/data/professorData";
import { Mail, Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Lab & Grants", href: "#lab-grants" },
    { name: "Publications", href: "#publications" },
    { name: "Teaching", href: "#teaching" },
    { name: "News & Media", href: "#news" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-sm"
          : "bg-white/90 backdrop-blur-md py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-academic-navy flex items-center justify-center text-academic-gold shadow-md transition-transform group-hover:scale-105">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-lg font-bold text-academic-navy tracking-tight leading-none">
                {professorData.name}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                {professorData.title}
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-slate-700 hover:text-academic-blue transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-academic-blue hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-academic-navy hover:bg-academic-navy-light text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-pill transition-all hover:scale-[1.02] active:scale-95"
            >
              <Mail className="w-4 h-4 text-academic-gold" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-academic-navy transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-academic-blue py-1 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-academic-navy text-white text-sm font-semibold px-4 py-3 rounded-lg shadow"
            >
              <Mail className="w-4 h-4 text-academic-gold" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
