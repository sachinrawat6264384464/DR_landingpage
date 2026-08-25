"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { professorData, ResearchArea } from "@/data/professorData";
import ThreeDTiltCard from "@/components/ThreeDTiltCard";
import {
  BrainCircuit,
  Cpu,
  MessageSquareCode,
  ShieldCheck,
  Lock,
  Network,
  ArrowUpRight,
  X,
  FolderGit2,
} from "lucide-react";

export default function ResearchSection() {
  const [selectedResearch, setSelectedResearch] = useState<ResearchArea | null>(null);

  const getResearchIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-8 h-8 text-academic-blue" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-academic-blue" />;
      case "MessageSquareCode":
        return <MessageSquareCode className="w-8 h-8 text-academic-blue" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-academic-blue" />;
      case "Lock":
        return <Lock className="w-8 h-8 text-academic-blue" />;
      case "Network":
        return <Network className="w-8 h-8 text-academic-blue" />;
      default:
        return <BrainCircuit className="w-8 h-8 text-academic-blue" />;
    }
  };

  return (
    <section id="research" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-academic-blue text-xs font-semibold uppercase tracking-wider">
            Cutting-Edge Exploration
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Primary Research Areas & Initiatives
          </h2>
          <p className="text-slate-600 text-base">
            Exploring fundamental theoretical questions and high-impact domain applications in Artificial Intelligence, Security, and Quantum Systems.
          </p>
        </motion.div>

        {/* 6 Research Cards Grid with 3D Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professorData.researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedResearch(area)}
              className="h-full"
            >
              <ThreeDTiltCard maxTilt={10} className="h-full">
                <div className="academic-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer group relative overflow-hidden h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-academic-navy group-hover:border-academic-navy transition-all duration-300">
                        <span className="group-hover:brightness-200 transition-all">
                          {getResearchIcon(area.iconName)}
                        </span>
                      </div>
                      <motion.span
                        whileHover={{ x: 3, y: -3 }}
                        className="text-slate-400 group-hover:text-academic-blue transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-academic-navy group-hover:text-academic-blue transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {area.description}
                    </p>

                    {/* Key Topics Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {area.keyTopics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Meta Stats */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <FolderGit2 className="w-3.5 h-3.5 text-academic-blue" />
                      {area.activeProjects} Active Projects
                    </span>
                    <span className="text-academic-navy font-bold">
                      {area.grantTotal} Grants
                    </span>
                  </div>
                </div>
              </ThreeDTiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup with AnimatePresence */}
      <AnimatePresence>
        {selectedResearch && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setSelectedResearch(null)}
                className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                  {getResearchIcon(selectedResearch.iconName)}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-academic-navy">
                    {selectedResearch.title}
                  </h3>
                  <span className="text-xs text-academic-blue font-semibold">
                    Lab & Research Directive
                  </span>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {selectedResearch.description}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl space-y-3 border border-slate-200 mb-6">
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Core Research Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedResearch.keyTopics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-white border border-slate-200 text-academic-navy px-3 py-1 rounded-lg"
                    >
                      • {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                  <div className="text-xs text-slate-500 font-medium">Ongoing Projects</div>
                  <div className="font-serif text-xl font-bold text-academic-navy mt-0.5">
                    {selectedResearch.activeProjects} Research Initiatives
                  </div>
                </div>
                <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                  <div className="text-xs text-slate-500 font-medium">Sponsored Funding</div>
                  <div className="font-serif text-xl font-bold text-academic-blue mt-0.5">
                    {selectedResearch.grantTotal} Total
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedResearch(null)}
                  className="bg-academic-navy text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-academic-navy-light transition-colors"
                >
                  Close Window
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
