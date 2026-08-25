"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Video,
  Camera,
  Maximize2,
  X,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Award,
} from "lucide-react";

export default function MediaGallerySection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
    caption: string;
    category: string;
    location: string;
  } | null>(null);

  const galleryItems = [
    {
      id: "lab",
      src: "/images/lab_computing_cluster.png",
      title: "AI-QIS Compute Cluster Laboratory",
      category: "Research Infrastructure",
      location: "GIT Tech City Campus",
      caption: "Dr. Arvind Sharma inspecting the 8x NVIDIA H100 Tensor Core server rig with PhD researchers and lab engineers.",
    },
    {
      id: "keynote",
      src: "/images/keynote_speech.png",
      title: "IJCAI Plenary Keynote Presentation",
      category: "Keynote Lecture",
      location: "Tokyo, Japan",
      caption: "Delivering opening plenary keynote on hybrid quantum neural architectures to over 2,500 global delegates.",
    },
    {
      id: "graduation",
      src: "/images/phd_graduation.png",
      title: "Doctoral Scholars Convocation & Mentorship",
      category: "Academic Convocation",
      location: "University Grand Hall",
      caption: "Celebrating Ph.D. graduation with advisees now taking up senior research roles at Google DeepMind and MIT CSAIL.",
    },
  ];

  return (
    <section id="media-gallery" className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
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
            <Camera className="w-3.5 h-3.5 text-academic-blue" />
            Media & Academic Gallery Spotlight
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-academic-navy">
            Featured Research Video & Photo Gallery
          </h2>
          <p className="text-slate-600 text-base">
            Moments from global keynote addresses, high-performance compute labs, and doctoral advising ceremonies.
          </p>
        </motion.div>

        {/* 2-Column Layout: Left Video Player | Right Photo Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Featured Video Spotlight (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-md flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  Keynote Video Spotlight
                </span>

                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  July 2024
                </span>
              </div>

              {/* Video Player Card Container */}
              <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 shadow-xl group">
                {/* Background Image / Poster */}
                <Image
                  src="/images/keynote_speech.png"
                  alt="IJCAI Keynote Speech Video Poster"
                  fill
                  className={`object-cover object-center transition-transform duration-700 group-hover:scale-105 ${
                    isVideoPlaying ? "opacity-30 blur-sm" : "opacity-90"
                  }`}
                />

                {/* Overlay Ambient Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                {/* Center Animated Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-10">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-academic-gold text-academic-navy flex items-center justify-center shadow-2xl hover:bg-white transition-all cursor-pointer border-4 border-white/20"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-academic-navy ml-1" />
                  </motion.button>
                  
                  <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                    {isVideoPlaying ? "Click to Pause" : "Click to Play Keynote (45 mins)"}
                  </span>
                </div>

                {/* Bottom Video Meta Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-200 z-10">
                  <span className="bg-black/70 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                    <Video className="w-3.5 h-3.5 text-academic-gold" />
                    IJCAI 2024 Tokyo Plenary
                  </span>

                  <span className="bg-blue-600/80 px-2.5 py-1 rounded-md font-bold text-white">
                    28.4K Views
                  </span>
                </div>
              </div>

              {/* Video Title & Details */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-academic-navy leading-snug">
                  Opening Plenary Address: "Quantum Machine Learning & Neural Primitives"
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Delivered live at IJCAI Tokyo Japan to an audience of over 2,500 computer scientists, exploring variational quantum circuits for deep transformer optimization.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5 text-academic-blue">
                <MapPin className="w-3.5 h-3.5 text-academic-blue" />
                Tokyo International Forum, Japan
              </span>

              <button
                onClick={() => alert("Opening full lecture recording and slides...")}
                className="text-academic-navy hover:text-academic-blue underline"
              >
                View Full Presentation Slides (PDF)
              </button>
            </div>
          </motion.div>

          {/* Right Column: Academic Photo Gallery Cards (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-4 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-serif text-xl font-bold text-academic-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-academic-blue" />
                Campus & Laboratory Photo Showcase
              </h3>
              <span className="text-xs text-slate-500 font-semibold">
                Click any photo to enlarge
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPhoto(item)}
                  className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-center gap-4"
                >
                  {/* Photo Thumbnail Container */}
                  <div className="relative w-28 sm:w-32 h-20 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-200">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-1.5 right-1.5 p-1 bg-black/60 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Caption & Location */}
                  <div className="space-y-1 pr-2">
                    <span className="text-[10px] font-extrabold uppercase text-academic-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-academic-navy group-hover:text-academic-blue transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs line-clamp-1 font-medium">
                      📍 {item.location} • {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery Info Box */}
            <div className="bg-academic-navy text-white p-4 sm:p-5 rounded-2xl shadow-md flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-academic-gold uppercase tracking-wider">
                  Academic Media Archives
                </div>
                <div className="text-xs text-slate-300">
                  High-res headshots, media dossier & keynote slides available for conference chairs.
                </div>
              </div>

              <button
                onClick={() => alert("Downloading Dr. Arvind Sharma's Media Kit & Press Pack (ZIP)...")}
                className="shrink-0 bg-academic-gold hover:bg-academic-gold-hover text-academic-navy text-xs font-bold px-3.5 py-2 rounded-xl shadow transition-transform hover:scale-105"
              >
                Media Kit (ZIP)
              </button>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Lightbox Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white rounded-full hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image View */}
              <div className="relative w-full aspect-video bg-slate-950">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Modal Caption Details */}
              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-academic-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {selectedPhoto.location}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-academic-navy">
                  {selectedPhoto.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedPhoto.caption}
                </p>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="bg-academic-navy text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-academic-blue transition-colors"
                  >
                    Close Image Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
