"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import {
  Building2,
  MapPin,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Award,
  Download,
  ShieldCheck,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export default function TimelineSection() {
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = ["All", "Leadership", "Teaching"];

  const filteredTimeline = professorData.timeline.filter(
    (item) => filter === "All" || item.type === filter
  );

  const getRoleIcon = (type?: string) => {
    switch (type) {
      case "Leadership":
        return <Award className="w-5 h-5 text-academic-gold" />;
      case "Research":
        return <Sparkles className="w-5 h-5 text-academic-blue" />;
      default:
        return <GraduationCap className="w-5 h-5 text-academic-navy" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200">
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
            <Briefcase className="w-3.5 h-3.5 text-academic-blue" />
            Executive Leadership & Appointments
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Academic & Medical Leadership Appointments
          </h2>
          <p className="text-slate-600 text-base">
            Progressive healthcare administration, Vice Dean academic governance, and Department of Pathology leadership.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === opt
                  ? "bg-academic-navy text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {opt === "All" ? "All Leadership Roles" : `${opt} Roles`}
            </button>
          ))}
        </div>

        {/* Full-Width 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Timeline Track (8 cols) */}
          <div className="lg:col-span-8 relative border-l-2 border-academic-blue/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
            {filteredTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                
                {/* Timeline Node Badge Icon */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 rounded-full bg-white border-2 border-academic-navy group-hover:border-academic-blue group-hover:scale-110 transition-all shadow-md flex items-center justify-center">
                  {getRoleIcon(item.type)}
                </div>

                {/* Timeline Item Card */}
                <div className="academic-card rounded-2xl p-6 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-extrabold uppercase bg-blue-50 text-academic-blue px-3 py-1 rounded-full border border-blue-100">
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-academic-navy">
                      {item.role}
                    </h3>
                    <div className="text-xs font-bold text-academic-blue flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Key Responsibilities & Highlights:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-xs text-slate-700 font-medium bg-slate-50 p-2 rounded-lg border border-slate-100"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-academic-blue shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Career Impact & Side Panel (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6 sticky top-28"
          >
            
            {/* Download Full Executive Profile Box */}
            <div className="bg-academic-navy text-white p-6 rounded-2xl shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-2 text-academic-gold text-xs font-bold uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                Executive Credentials
              </div>

              <h3 className="font-serif text-xl font-bold text-white leading-snug">
                Official Executive Profile & Dossier
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive record of medical appointments, pathology research, equipment procurement, and Vice Dean academic administration.
              </p>

              <button
                onClick={() => alert("Downloading Dr. Pawan Bhambhani's Executive Profile Dossier (PDF)...")}
                className="w-full inline-flex items-center justify-center gap-2 bg-academic-gold hover:bg-academic-gold-hover text-academic-navy text-xs font-bold px-4 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Executive Profile (PDF)</span>
              </button>
            </div>

            {/* Career Impact Summary Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-serif text-lg font-bold text-academic-navy flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-academic-blue" />
                Professional Metrics Snapshot
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-medium">Medical Experience</span>
                  <span className="font-bold text-academic-navy font-mono text-sm">25+ Years</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-medium">Medical Publications</span>
                  <span className="font-bold text-academic-blue font-mono text-sm">50+ Papers</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-medium">MCI Election Rank</span>
                  <span className="font-bold text-academic-navy font-mono text-sm">3rd Rank</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-medium">PG Residency Guidance</span>
                  <span className="font-bold text-academic-navy font-mono text-sm">Recognized Guide</span>
                </div>
              </div>
            </div>

            {/* Medical Affiliations Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-serif text-base font-bold text-academic-navy flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-academic-blue" />
                Professional Medical Representation
              </h4>

              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2 p-2 bg-blue-50/50 rounded-lg text-academic-navy">
                  <span className="w-2 h-2 rounded-full bg-academic-blue shrink-0" />
                  MCI Membership Election — 3rd Ranked Candidate
                </li>
                <li className="flex items-center gap-2 p-2 bg-blue-50/50 rounded-lg text-academic-navy">
                  <span className="w-2 h-2 rounded-full bg-academic-blue shrink-0" />
                  Madhya Pradesh State IAPM Leadership (2023–2025)
                </li>
                <li className="flex items-center gap-2 p-2 bg-blue-50/50 rounded-lg text-academic-navy">
                  <span className="w-2 h-2 rounded-full bg-academic-blue shrink-0" />
                  Indian Association of Pathologists & Microbiologists (IAPM 2022–23)
                </li>
                <li className="flex items-center gap-2 p-2 bg-blue-50/50 rounded-lg text-academic-navy">
                  <span className="w-2 h-2 rounded-full bg-academic-blue shrink-0" />
                  Recognized PG Guide (DAVV Indore & MPMSU)
                </li>
              </ul>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
