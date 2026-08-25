"use client";

import React from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import { Trophy, Sparkles } from "lucide-react";

export default function AchievementsSection() {
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Award":
        return "bg-amber-100 text-amber-900 border-amber-200";
      case "Fellowship":
        return "bg-purple-100 text-purple-900 border-purple-200";
      case "Grant":
        return "bg-emerald-100 text-emerald-900 border-emerald-200";
      default:
        return "bg-blue-100 text-blue-900 border-blue-200";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Honors & Global Distinction
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Awards, Grants & Fellowships
          </h2>
          <p className="text-slate-600 text-base">
            Recognizing excellence in teaching innovation, impactful research discoveries, and professional leadership.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professorData.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="academic-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-academic-gold">
                    {item.year}
                  </span>
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${getCategoryBadge(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-academic-navy group-hover:text-academic-blue transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-academic-blue">
                  {item.organization}
                </p>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-700">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Academic Honor
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
