"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import { BookOpen, User, Star, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background Floating Glow Accents */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Pill Badge with subtle pulse animation */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-[#EBF3FE] border border-[#D0E1FD] text-[#1E3A8A] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Star className="w-3.5 h-3.5 fill-[#1E3A8A] text-[#1E3A8A]" />
              </motion.div>
              <span>{professorData.badgeText}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#0F2942]"
            >
              {professorData.headlinePrefix}
              <span className="text-[#1E3A8A] font-serif">{professorData.headlineHighlight1}</span>
              <br />
              {professorData.headlineMiddle}
              <span className="text-[#1E3A8A] font-serif">{professorData.headlineHighlight2}</span>
            </motion.h1>

            {/* Short Intro Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal"
            >
              {professorData.shortIntro}
            </motion.p>

            {/* Professor Quick Bio Snippet */}
            <motion.div variants={itemVariants} className="pt-2 pb-1 space-y-1">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2942]">
                {professorData.name}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#1E3A8A]">
                {professorData.title}, {professorData.department}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                {professorData.institution}
              </p>
            </motion.div>

            {/* Action Buttons with Spring Hover Effects */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                href="#publications"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-sm font-semibold px-6 py-3.5 rounded-lg shadow-md transition-all hover:shadow-lg"
              >
                <BookOpen className="w-4 h-4 text-academic-gold" />
                <span>View Publications</span>
                <ArrowRight className="w-4 h-4 text-academic-gold" />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border-2 border-[#0F2942] text-[#0F2942] text-sm font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-all"
              >
                <User className="w-4 h-4 text-[#0F2942]" />
                <span>Know More About Me</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Professor Photo Container with Gentle Floating Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-blue-50/80 to-slate-100 p-2 border border-slate-200/80 shadow-2xl"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-200">
                <Image
                  src="/images/professor_portrait.png"
                  alt={professorData.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
