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
  Award,
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
            Scholarly Research & Publications
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Research Publications & Papers (50+)
          </h2>
          <p className="text-slate-600 text-base">
            Author/co-author of 50+ publications (15 International & 35 National) in peer-reviewed pathology, diagnostics, and medical education journals.
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
                  Total Papers
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-academic-gold">
                  50+
                </div>
                <div className="text-[10px] text-slate-400">Medical Publications</div>
              </div>

              <div className="space-y-1 pl-4 sm:pl-0">
                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-academic-gold" />
                  International
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  15+
                </div>
                <div className="text-[10px] text-slate-400">Int. Peer-Reviewed</div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-academic-gold" />
                  National
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  35+
                </div>
                <div className="text-[10px] text-slate-400">National Journals</div>
              </div>

              <div className="space-y-1 pl-4 sm:pl-0">
                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-academic-gold" />
                  MCI Election
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  3rd Rank
                </div>
                <div className="text-[10px] text-slate-400">MCI Representation</div>
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
                PubMed
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={professorData.academicProfiles.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all border border-white/15 shadow-sm"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                ORCID
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Toolbar: Search & Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          
          {/* Real-Time Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search paper title, authors, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-academic-blue focus:ring-1 focus:ring-academic-blue transition-all"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeTab === cat
                      ? "bg-academic-navy text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:border-academic-blue shadow-xs cursor-pointer"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y === "All" ? "All Years" : `Year ${y}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPubs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
              <div className="text-sm font-bold text-slate-700">No matching publications found</div>
              <div className="text-xs text-slate-500">Try adjusting your search keywords or filters</div>
            </div>
          ) : (
            filteredPubs.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="academic-card rounded-2xl p-6 transition-all hover:border-academic-blue/50"
              >
                <div className="space-y-3">
                  
                  {/* Top Bar: Type Pill & Citations Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold uppercase bg-blue-50 text-academic-blue px-3 py-1 rounded-full border border-blue-100">
                      {pub.type} • {pub.year}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {pub.citations} Citations
                      </span>

                      <button
                        onClick={() => handleCopyCitation(pub)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-academic-navy bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors"
                        title="Copy Citation String"
                      >
                        {copiedId === pub.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Cite</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-academic-navy leading-snug hover:text-academic-blue transition-colors">
                    {pub.title}
                  </h3>

                  {/* Authors & Venue */}
                  <div className="space-y-1 text-xs">
                    <p className="text-slate-700 font-semibold">
                      Authors:{" "}
                      {pub.authors.map((author, aIdx) => (
                        <span
                          key={aIdx}
                          className={
                            author.includes("Dr. Pawan Bhambhani")
                              ? "text-academic-navy font-bold underline"
                              : "text-slate-600"
                          }
                        >
                          {author}
                          {aIdx < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                    <p className="text-slate-500 font-medium italic">
                      {pub.venue} ({pub.year}) • DOI: {pub.doi}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pub.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Abstract Toggle */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1 font-bold text-academic-blue hover:underline"
                    >
                      <span>{expandedAbstract === pub.id ? "Hide Abstract" : "View Abstract"}</span>
                      {expandedAbstract === pub.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-academic-navy hover:text-academic-blue hover:underline"
                    >
                      <span>Full Paper PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Expanded Abstract Drawer */}
                  <AnimatePresence>
                    {expandedAbstract === pub.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 text-xs text-slate-700 leading-relaxed font-normal overflow-hidden"
                      >
                        <strong className="text-academic-navy font-bold block mb-1">
                          Abstract Summary:
                        </strong>
                        {pub.abstract}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
