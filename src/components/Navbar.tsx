"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { professorData } from "@/data/professorData";
import { Mail, Menu, X, GraduationCap, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3.5 sm:py-4 shadow-md border-b border-slate-200/80"
          : "bg-white/90 backdrop-blur-md py-5 sm:py-6 border-b border-slate-100"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Professor Title */}
          <a href="#home" className="flex items-center gap-3.5 group shrink-0">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-academic-navy flex items-center justify-center text-academic-gold shadow-md border border-white/10 group-hover:bg-academic-blue transition-colors"
            >
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
            
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-academic-navy tracking-tight leading-tight group-hover:text-academic-blue transition-colors">
                {professorData.name}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">
                {professorData.title}
              </div>
            </div>
          </a>

          {/* Desktop Framer Motion Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-3.5 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-academic-navy transition-colors rounded-xl"
              >
                <span className="relative z-10">{link.name}</span>

                {/* Animated Hover Capsule */}
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="navbar-hover-capsule"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-blue-50/80 rounded-xl border border-blue-100/80 -z-0"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Contact Me CTA Button with Framer Motion */}
          <div className="hidden lg:flex items-center shrink-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-academic-navy hover:bg-academic-blue text-white text-xs sm:text-sm font-bold px-5 py-2.5 sm:py-3 rounded-xl shadow-md transition-colors border border-white/10"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Mail className="w-4 h-4 text-academic-gold" />
              </motion.div>
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5 text-academic-gold" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-academic-navy bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

        </div>
      </div>

      {/* Framer Motion Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-8 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-academic-blue py-2.5 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-academic-navy text-white text-sm font-bold px-5 py-3.5 rounded-xl shadow-md"
              >
                <Mail className="w-4 h-4 text-academic-gold" />
                <span>Contact Me</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
