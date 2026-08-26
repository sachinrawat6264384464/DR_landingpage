"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import {
  FlaskConical,
  Cpu,
  Zap,
  Shield,
  Server,
  Landmark,
  CheckCircle2,
  Clock,
  Users,
} from "lucide-react";

export default function LabGrantsSection() {
  const [grantCategory, setGrantCategory] = useState<string>("All");

  const categories = ["All", "Federal Government", "Industry Sponsored", "International Collaboration"];

  const filteredGrants = professorData.labInfo.grants.filter(
    (g) => grantCategory === "All" || g.category === grantCategory
  );

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-academic-blue" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-600" />;
      case "Shield":
        return <Shield className="w-6 h-6 text-teal-600" />;
      case "Server":
        return <Server className="w-6 h-6 text-indigo-600" />;
      default:
        return <Cpu className="w-6 h-6 text-academic-blue" />;
    }
  };

  return (
    <section id="lab-grants" className="py-20 bg-slate-50 border-b border-slate-200">
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
            <FlaskConical className="w-3.5 h-3.5 text-academic-blue" />
            Diagnostic Facilities & Infrastructure
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            {professorData.labInfo.name}
          </h2>
          <p className="text-slate-600 text-base">
            {professorData.labInfo.tagline}
          </p>
        </motion.div>

        {/* Lab Overview Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-academic-navy text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-2">
              <span className="text-xs text-academic-gold font-bold uppercase tracking-wider">
                Departmental Leadership
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                {professorData.labInfo.director}
              </h3>
              <p className="text-xs text-slate-300">
                {professorData.labInfo.location}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-academic-gold font-bold uppercase tracking-wider">
                Diagnostic Staff & PG Residents
              </span>
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-academic-gold" />
                {professorData.labInfo.teamSize}
              </h3>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-academic-gold font-bold uppercase tracking-wider">
                Institutional Healthcare Infrastructure
              </span>
              <h3 className="font-serif text-2xl font-bold text-academic-gold flex items-center gap-2">
                <Landmark className="w-6 h-6 text-academic-gold" />
                {professorData.labInfo.totalFunding}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Lab Facilities Grid */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl font-bold text-academic-navy"
          >
            Diagnostic Pathology & Laboratory Facilities
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professorData.labInfo.facilities.map((fac, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="academic-card rounded-xl p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
                      {getFacilityIcon(fac.iconName)}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-academic-navy">
                      {fac.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pt-1">
                    {fac.description}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-mono text-slate-700 font-medium">
                  ⚡ <strong className="text-academic-navy">Specs:</strong> {fac.specs}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sponsored Grants Table Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-academic-navy">
                Institutional Projects & Infrastructure Grants
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Institutional grants and funding for medical diagnostic suites, pathology research, and healthcare infrastructure.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGrantCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    grantCategory === cat
                      ? "bg-academic-navy text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grants Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                  <th className="p-3.5">Project Title</th>
                  <th className="p-3.5">Sponsoring Agency</th>
                  <th className="p-3.5">Role</th>
                  <th className="p-3.5">Period</th>
                  <th className="p-3.5">Grant Value</th>
                  <th className="p-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredGrants.map((grant) => (
                  <tr
                    key={grant.id}
                    className="hover:bg-blue-50/50 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-academic-navy max-w-xs">
                      {grant.projectTitle}
                    </td>
                    <td className="p-3.5 font-semibold text-slate-700">
                      {grant.agency}
                    </td>
                    <td className="p-3.5 font-medium text-slate-600">
                      {grant.role}
                    </td>
                    <td className="p-3.5 font-mono text-slate-500">
                      {grant.period}
                    </td>
                    <td className="p-3.5 font-bold text-academic-blue">
                      {grant.amount}
                    </td>
                    <td className="p-3.5 text-center">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${
                          grant.status === "Active"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {grant.status === "Active" ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Clock className="w-3 h-3 text-slate-400" />
                        )}
                        {grant.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
