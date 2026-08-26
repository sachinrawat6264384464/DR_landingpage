"use client";

import React from "react";
import { professorData } from "@/data/professorData";
import { GraduationCap, ArrowUp, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-academic-navy text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 - Professor Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-academic-gold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight">
                  {professorData.name}
                </h3>
                <p className="text-xs text-slate-300">
                  {professorData.title}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              {professorData.institution} — Dedicated to clinical pathology diagnostics, medical college academic governance, and healthcare infrastructure.
            </p>

            <div className="text-xs text-slate-400">
              {professorData.department} • Index Hospital & Medical College
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-academic-gold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-academic-gold transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-academic-gold transition-colors">
                  Executive Profile
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-academic-gold transition-colors">
                  Clinical & Academic Leadership
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-academic-gold transition-colors">
                  Publications (50+)
                </a>
              </li>
              <li>
                <a href="#teaching" className="hover:text-academic-gold transition-colors">
                  Medical Teaching & Courses
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-academic-gold transition-colors">
                  Honors & MCI Recognitions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 - Academic Profiles */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-academic-gold uppercase tracking-wider">
              Medical & Research Profiles
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={professorData.academicProfiles.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors border border-white/10"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-academic-gold" />
              </a>
              <a
                href={professorData.academicProfiles.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors border border-white/10"
              >
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3 text-academic-gold" />
              </a>
              <a
                href={professorData.academicProfiles.ieee}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors border border-white/10"
              >
                <span>PubMed</span>
                <ExternalLink className="w-3 h-3 text-academic-gold" />
              </a>
              <a
                href={professorData.academicProfiles.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors border border-white/10"
              >
                <span>ORCID</span>
                <ExternalLink className="w-3 h-3 text-academic-gold" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {professorData.name}. All rights reserved. | Index Medical College, Hospital & Research Centre
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-academic-gold hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg border border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
