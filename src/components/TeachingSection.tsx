"use client";

import React from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import {
  BookOpen,
  Clock,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

export default function TeachingSection() {
  return (
    <section id="teaching" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-academic-blue text-xs font-semibold uppercase tracking-wider">
            Pedagogy & Curriculum
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Teaching & Student Advising
          </h2>
          <p className="text-slate-600 text-base">
            Fostering rigorous analytical thinking, algorithmic mastery, and hands-on scientific problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Courses */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-academic-navy flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-academic-blue" />
              Current & Past Courses Taught
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professorData.teaching.courses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="academic-card rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xl font-bold text-academic-navy">
                        {course.code}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                          course.level === "Undergraduate"
                            ? "bg-blue-100 text-blue-800"
                            : course.level === "Postgraduate"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-slate-800 leading-snug">
                      {course.name}
                    </h4>

                    <p className="text-slate-600 text-xs leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>{course.semester}</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-academic-blue" />
                      {course.students} Enrolled
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Philosophy & Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Teaching Philosophy Card */}
            <div className="bg-academic-navy text-white p-6 sm:p-7 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-academic-gold text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                Teaching Philosophy
              </div>

              <blockquote className="font-serif italic text-sm text-slate-200 leading-relaxed">
                "{professorData.teaching.philosophy}"
              </blockquote>

              <div className="mt-4 pt-4 border-t border-white/10 text-xs font-medium text-slate-400">
                — Dr. Arvind Sharma
              </div>
            </div>

            {/* Office Hours & Advising */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-serif text-lg font-bold text-academic-navy flex items-center gap-2">
                <Clock className="w-5 h-5 text-academic-blue" />
                Student Office Hours
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-800">Regular Advising Hours</div>
                  <div className="text-slate-600 font-medium mt-0.5">
                    {professorData.contactInfo.officeHours}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-academic-blue" />
                    Office Location
                  </div>
                  <div className="text-slate-600 font-medium mt-0.5">
                    {professorData.contactInfo.office}
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                * Students seeking thesis guidance or course assistance are encouraged to send an email inquiry in advance.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
