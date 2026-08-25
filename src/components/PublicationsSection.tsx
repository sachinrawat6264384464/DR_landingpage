"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { professorData, Publication } from "@/data/professorData";
import {
  BookOpen,
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Bookmark,
  Award,
  Quote,
  Copy,
  Check,
  Star,
  Layers,
} from "lucide-react";

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [expandedAbstract, setExpandedAbstract] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["All", "Journal", "Conference", "Book Chapter"];
  const yearOptions = ["All", "2024", "2023", "2022", "2021"];

  const filteredPubs = professorData.publications.filter((pub) => {
    const matchesTab = activeTab === "All" || pub.type === activeTab;
    const matchesYear = selectedYear === "All" || pub.year.toString() === selectedYear;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesYear && matchesSearch;
  });

  const toggleAbstract = (id: string) => {
    setExpandedAbstract(expandedAbstract === id ? null : id);
  };

  const handleCopyCitation = (pub: Publication) => {
    if (typeof window !== "undefined") {
      const text = pub.title + " - " + pub.venue;
      navigator.clipboard.writeText(text);
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="publications" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-academic-blue text-xs font-semibold uppercase tracking-wider border border-blue-200">
            <BookOpen className="w-3.5 h-3.5 text-academic-blue" />
            Scholarly Impact & Research Library
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Selected Research Publications
          </h2>
          <p className="text-slate-600 text-base">
            Peer-reviewed papers published in top-tier international journals and leading ACM/IEEE conferences.
          </p>
        </motion.div>

        {/* Bibliometric Impact Dashboard Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-academic-navy text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Metrics Snapshot */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 divide-x sm:divide-x-0 divide-white/10">
              <div className="space-y-1">
                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-academic-gold" />
                  Citations
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-academic-gold">
                  {professorData.academicProfiles.citations}+
                </div>
                <div className="text-[10px] text-slate-400">Google Scholar</div>
              </div>

              <div className="space-y-1 pl-4 sm:pl-0">
                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-academic-gold" />
                  h-index
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {professorData.academicProfiles.hIndex}
                </div>
                <div className="text-[10px] text-slate-400">Bibliometric Score</div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-academic-gold" />
                  i10-index
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {professorData.academicProfiles.i10Index}
                </div>
                <div className="text-[10px] text-slate-400">10+ Citation Papers</div>
              </div>

              <div className="space-y-1 pl-4 sm:pl-0">
                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-academic-gold" />
                  Total Papers
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  75+
                </div>
                <div className="text-[10px] text-slate-400">IEEE / ACM / Springer</div>
              </div>
            </div>

            {/* Right Academic Profile Badges */}
            <div className="lg:col-span-5 flex flex-wrap gap-2.5 justify-start lg:justify-end">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={professorData.academicProfiles.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all border border-white/15 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-academic-gold" />
                Google Scholar
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={professorData.academicProfiles.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all border border-white/15 shadow-sm"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                ResearchGate
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={professorData.academicProfiles.ieee}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all border border-white/15 shadow-sm"
              >
                <ExternalLink className="w-4 h-4 text-blue-300" />
                IEEE Xplore
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={professorData.academicProfiles.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all border border-white/15 shadow-sm"
              >
                <Bookmark className="w-4 h-4 text-emerald-400" />
                ORCID
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Filter Bar, Year Selector & Search Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/70 p-1.5 rounded-xl w-full md:w-auto">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-academic-navy text-white shadow-sm"
                    : "text-slate-700 hover:text-academic-navy hover:bg-white/50"
                }`}
              >
                {tab === "All" ? "All Papers" : tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Year Selector Dropdown */}
            <div className="relative shrink-0">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-white border border-slate-200 text-slate-800 text-xs font-bold rounded-xl px-3.5 py-2 focus:outline-none focus:border-academic-blue cursor-pointer shadow-xs"
              >
                <option value="All">All Years</option>
                {yearOptions.filter(y => y !== "All").map((y) => (
                  <option key={y} value={y}>Year {y}</option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, author, topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-academic-blue transition-all shadow-xs"
              />
            </div>
          </div>
        </motion.div>

        {/* Redesigned Publications List */}
        <div className="space-y-4">
          {filteredPubs.length > 0 ? (
            filteredPubs.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="academic-card rounded-2xl p-6 transition-all border border-slate-200/90 hover:border-academic-blue/50 hover:shadow-xl space-y-4"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left Paper Details */}
                  <div className="space-y-2.5 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider ${
                          pub.type === "Journal"
                            ? "bg-blue-100 text-blue-900 border border-blue-200"
                            : pub.type === "Conference"
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-200"
                            : "bg-amber-100 text-amber-900 border border-amber-200"
                        }`}
                      >
                        {pub.type} • {pub.year}
                      </span>

                      <span className="text-xs font-extrabold text-academic-blue bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-blue-100">
                        <Star className="w-3 h-3 text-academic-gold fill-academic-gold" />
                        {pub.citations} Citations
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-academic-navy leading-snug hover:text-academic-blue transition-colors cursor-pointer">
                      {pub.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-700">
                      Authors:{" "}
                      {pub.authors.map((author, i) => (
                        <span key={i}>
                          <span
                            className={
                              author.includes("Dr. Arvind Sharma")
                                ? "font-bold text-academic-navy bg-blue-50/80 px-1.5 py-0.5 rounded"
                                : "text-slate-600"
                            }
                          >
                            {author}
                          </span>
                          {i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>

                    <p className="text-xs font-bold text-academic-blue italic flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-academic-blue" />
                      {pub.venue}
                    </p>

                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pub.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column Actions & Buttons */}
                  <div className="flex flex-wrap lg:flex-col items-center lg:items-end justify-between gap-2.5 shrink-0 pt-2 lg:pt-0">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-academic-navy hover:text-academic-blue bg-slate-50 hover:bg-blue-50 border border-slate-200 px-3.5 py-2 rounded-xl transition-all shadow-xs"
                    >
                      <span>DOI Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleCopyCitation(pub)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-academic-navy bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-xl transition-all shadow-xs"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Citation</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-academic-blue hover:underline py-1"
                    >
                      <span>{expandedAbstract === pub.id ? "Hide Abstract" : "Read Abstract"}</span>
                      {expandedAbstract === pub.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                </div>

                {/* Abstract Collapsible Drawer with AnimatePresence */}
                <AnimatePresence>
                  {expandedAbstract === pub.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50 p-5 rounded-xl text-xs text-slate-700 leading-relaxed space-y-2">
                        <div className="font-bold text-academic-navy flex items-center gap-2">
                          <Quote className="w-4 h-4 text-academic-blue" />
                          Paper Abstract & Summary:
                        </div>
                        <p className="text-slate-600">{pub.abstract}</p>
                        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                          <span>DOI: {pub.doi}</span>
                          <span className="text-academic-navy font-bold">Peer Reviewed Document</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm font-medium">
                No publications found matching your search or filter criteria.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
