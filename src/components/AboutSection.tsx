"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import ThreeDTiltCard from "@/components/ThreeDTiltCard";
import {
  User,
  Heart,
  CheckCircle2,
  GraduationCap,
  FileText,
  Users,
  Trophy,
  Globe,
} from "lucide-react";

export default function AboutSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-academic-navy" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-academic-navy" />;
      case "Users":
        return <Users className="w-6 h-6 text-academic-navy" />;
      case "Trophy":
        return <Trophy className="w-6 h-6 text-academic-navy" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-academic-navy" />;
      default:
        return <GraduationCap className="w-6 h-6 text-academic-navy" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 3-Column Layout matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Headline, Bio & Signature */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Category Label with Blue Underline Accent */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-academic-blue tracking-wider uppercase">
                  EXECUTIVE PROFILE
                </span>
                <div className="w-8 h-[2px] bg-academic-blue" />
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2942] leading-[1.15]">
                Senior Medical <span className="text-[#1E3A8A] font-serif">Administrator.</span>
                <br />
                Academic <span className="text-[#1E3A8A] font-serif">Leader.</span>
              </h2>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>{professorData.about.bioParagraph1}</p>
                <p>{professorData.about.bioParagraph2}</p>
              </div>
            </div>

            {/* Signature & Name Line */}
            <div className="pt-2 space-y-1">
              <svg
                width="140"
                height="40"
                viewBox="0 0 200 60"
                className="text-[#0F2942]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 40 C 20 10, 40 10, 45 35 C 50 50, 60 20, 70 30 C 80 40, 90 15, 100 25 C 110 35, 125 10, 140 30 C 150 40, 170 15, 190 25" />
              </svg>
              <div>
                <div className="font-bold text-sm text-[#0F2942]">
                  {professorData.name}
                </div>
                <div className="text-xs font-semibold text-[#1E3A8A]">
                  {professorData.title}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle Column: Professor Portrait 3D Tilt Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex"
          >
            <ThreeDTiltCard maxTilt={12} className="w-full flex">
              <div className="relative w-full rounded-3xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-xl aspect-[4/5] min-h-[380px]">
                <Image
                  src="/images/professor_portrait.png"
                  alt={professorData.name}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ThreeDTiltCard>
          </motion.div>

          {/* Right Column: Cards for Areas of Expertise & Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col justify-between space-y-4"
          >
            {/* Card 1: Areas of Expertise */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 flex-1 transition-all hover:shadow-md">
              <div className="flex items-center gap-2.5 text-[#0F2942]">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#1E3A8A]">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#0F2942]">
                  Areas of Expertise
                </h3>
              </div>

              <ul className="space-y-2 text-xs">
                {professorData.about.expertise.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] shrink-0 fill-blue-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Core Values */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 flex-1 transition-all hover:shadow-md">
              <div className="flex items-center gap-2.5 text-[#0F2942]">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#1E3A8A]">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#0F2942]">
                  Core Leadership Values
                </h3>
              </div>

              <ul className="space-y-2 text-xs">
                {professorData.about.coreValues.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] shrink-0 fill-blue-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Stats Strip Banner with Framer Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {professorData.heroStats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 ${
                  idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  {getIcon(stat.icon)}
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2942] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-600 leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Education & Experience Timeline Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Education Left Timeline */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#0F2942]">
              Academic Qualifications
            </h3>

            <div className="relative border-l-2 border-[#1E3A8A] ml-2 pl-6 space-y-6">
              {professorData.about.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#1E3A8A] border-2 border-white shadow-sm" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#0F2942]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#1E3A8A] shrink-0">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Right Timeline */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#0F2942]">
              Current Appointments
            </h3>

            <div className="relative border-l-2 border-[#1E3A8A] ml-2 pl-6 space-y-6">
              {professorData.about.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#1E3A8A] border-2 border-white shadow-sm" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#0F2942]">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {exp.institution}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#1E3A8A] shrink-0">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
