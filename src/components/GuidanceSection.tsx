"use client";

import React from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import { Building } from "lucide-react";

export default function GuidanceSection() {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-academic-blue text-xs font-semibold uppercase tracking-wider">
            Mentorship & Advisory
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Students & Research Guidance
          </h2>
          <p className="text-slate-600 text-base">
            Inspiring and supervising Ph.D. candidates, Master's researchers, and capstone engineering teams.
          </p>
        </motion.div>

        {/* Scholars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professorData.students.map((student, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="academic-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-academic-navy">
                    {student.name}
                  </span>
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                      student.status === "Graduated"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {student.degree} • {student.status}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-500">
                  Year of Completion: {student.year}
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-xs font-medium text-slate-700 leading-relaxed italic">
                    "{student.thesisTitle}"
                  </p>
                </div>
              </div>

              {student.currentRole && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-academic-blue">
                  <Building className="w-4 h-4 text-academic-blue shrink-0" />
                  <span>Now: {student.currentRole}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
