"use client";

import React from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import {
  Newspaper,
  Mic,
  ExternalLink,
  Calendar,
  MapPin,
  Sparkles,
  Award,
} from "lucide-react";

export default function NewsPressSection() {
  const getBadgeIcon = (category: string) => {
    switch (category) {
      case "Keynote Talk":
        return <Mic className="w-3.5 h-3.5 text-amber-600" />;
      case "Media Feature":
        return <Newspaper className="w-3.5 h-3.5 text-academic-blue" />;
      default:
        return <Award className="w-3.5 h-3.5 text-emerald-600" />;
    }
  };

  return (
    <section id="news" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Media & Global Engagement
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            News, Press Features & Keynote Talks
          </h2>
          <p className="text-slate-600 text-base">
            Coverage in international science media, invited plenary lectures, and global academic panels.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professorData.newsAndPress.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="academic-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all hover:border-academic-blue/50"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                    {getBadgeIcon(item.category)}
                    {item.category}
                  </span>

                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <div className="text-xs font-bold text-academic-blue uppercase tracking-wider">
                  {item.publisher}
                </div>

                <h3 className="font-serif text-xl font-bold text-academic-navy hover:text-academic-blue transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                {item.location ? (
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                ) : (
                  <span className="text-slate-400">Global Coverage</span>
                )}

                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-academic-blue font-bold hover:underline"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
