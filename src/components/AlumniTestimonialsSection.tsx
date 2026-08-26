"use client";

import React from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import {
  Quote,
  Building2,
  MapPin,
  GraduationCap,
} from "lucide-react";

export default function AlumniTestimonialsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-academic-blue text-xs font-semibold uppercase tracking-wider border border-blue-200">
            <GraduationCap className="w-3.5 h-3.5 text-academic-blue" />
            Alumni & PG Mentorship Endorsements
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Reflections from Former MD Pathology PG Scholars
          </h2>
          <p className="text-slate-600 text-base">
            Testimonials from postgraduate advisees and resident doctors now serving as consultant pathologists and faculty members across leading healthcare institutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professorData.alumniTestimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="academic-card rounded-2xl p-7 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-academic-blue/50"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-academic-gold/60" />
                
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-academic-navy text-academic-gold font-serif font-bold text-sm flex items-center justify-center border-2 border-academic-gold shrink-0">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-academic-navy group-hover:text-academic-blue transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-500">
                      {item.degreeYear}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1 text-xs">
                  <div className="font-bold text-academic-blue flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-academic-blue shrink-0" />
                    <span>{item.currentRole}, {item.organization}</span>
                  </div>
                  <div className="text-slate-500 font-medium flex items-center gap-1.5 text-[11px]">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
