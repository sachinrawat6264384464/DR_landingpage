"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { professorData } from "@/data/professorData";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "Academic Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        purpose: "Academic Inquiry",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
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
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Contact & Academic Office Details
          </h2>
          <p className="text-slate-600 text-base">
            For research collaborations, student inquiries, speaking engagements, or academic matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-academic-navy text-white p-7 sm:p-8 rounded-2xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              
              <h3 className="font-serif text-2xl font-bold text-academic-gold">
                Academic Office Coordinates
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-academic-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Department & College</div>
                    <div className="text-slate-300 text-xs mt-0.5">
                      {professorData.department}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {professorData.institution}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-academic-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Office Location</div>
                    <div className="text-slate-300 text-xs mt-0.5">
                      {professorData.contactInfo.office}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {professorData.contactInfo.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-academic-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Email</div>
                    <a
                      href={`mailto:${professorData.contactInfo.email}`}
                      className="text-academic-gold hover:underline text-xs"
                    >
                      {professorData.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-academic-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Department Office Phone</div>
                    <div className="text-slate-300 text-xs">
                      {professorData.contactInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-academic-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Advising & Office Hours</div>
                    <div className="text-slate-300 text-xs mt-0.5">
                      {professorData.contactInfo.officeHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-md"
          >
            <h3 className="font-serif text-2xl font-bold text-academic-navy mb-6">
              Send an Academic Inquiry
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-xl text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out. Professor Sharma's academic desk will respond to your inquiry promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-academic-blue focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane.smith@university.edu"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-academic-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Inquiry Purpose
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-academic-blue focus:bg-white transition-all"
                    >
                      <option>Research Collaboration</option>
                      <option>PhD / Guidance Application</option>
                      <option>Course / Student Query</option>
                      <option>Keynote / Guest Lecture Invitation</option>
                      <option>General Academic Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Brief topic summary"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-academic-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Detailed Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-academic-blue focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-academic-navy hover:bg-academic-navy-light text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 text-academic-gold" />
                  <span>Send Academic Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
