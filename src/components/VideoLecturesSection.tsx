"use client";

import React from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import {
  Video,
  Play,
  Clock,
  Download,
  Star,
  BookOpen,
} from "lucide-react";

export default function VideoLecturesSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
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
            <Video className="w-3.5 h-3.5 text-academic-blue" />
            Open Courseware & Virtual Classroom
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Featured Video Lectures & Recorded Talks
          </h2>
          <p className="text-slate-600 text-base">
            High-definition recordings of core university lectures, mathematical proofs, and computational workshops.
          </p>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professorData.videoLectures.map((lec, idx) => (
            <motion.div
              key={lec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
            >
              <div className="space-y-4 p-6">
                {/* Mock Video Thumbnail Area */}
                <div className="relative aspect-video rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center border border-slate-200 shadow-inner group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-80" />
                  
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => alert(`Playing lecture: "${lec.title}"`)}
                    className="w-12 h-12 rounded-full bg-academic-gold text-academic-navy flex items-center justify-center shadow-lg relative z-10 hover:bg-white transition-all"
                  >
                    <Play className="w-5 h-5 fill-academic-navy ml-0.5" />
                  </motion.button>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white font-mono z-10">
                    <span className="bg-black/60 px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3 text-academic-gold" />
                      {lec.duration}
                    </span>
                    <span className="bg-blue-600/80 px-2 py-0.5 rounded font-bold">
                      {lec.views}
                    </span>
                  </div>
                </div>

                {/* Course Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase bg-blue-50 text-academic-blue px-2.5 py-1 rounded-md border border-blue-100">
                    {lec.courseCode}
                  </span>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {lec.rating}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-academic-navy leading-snug group-hover:text-academic-blue transition-colors">
                  {lec.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  <strong>Key Topics:</strong> {lec.topic}
                </p>
              </div>

              {/* Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <button
                  onClick={() => alert(`Downloading slides for ${lec.courseCode}...`)}
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-academic-navy bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-academic-blue" />
                  <span>Slides (PDF)</span>
                </button>

                <button
                  onClick={() => alert(`Opening lecture video in new tab...`)}
                  className="inline-flex items-center gap-1 text-academic-blue hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Watch Lecture</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
