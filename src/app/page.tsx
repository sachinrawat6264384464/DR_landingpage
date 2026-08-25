import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import InteractiveDemoWidget from "@/components/InteractiveDemoWidget";
import LabGrantsSection from "@/components/LabGrantsSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeachingSection from "@/components/TeachingSection";
import VideoLecturesSection from "@/components/VideoLecturesSection";
import NewsPressSection from "@/components/NewsPressSection";
import AchievementsSection from "@/components/AchievementsSection";
import TimelineSection from "@/components/TimelineSection";
import GuidanceSection from "@/components/GuidanceSection";
import AlumniTestimonialsSection from "@/components/AlumniTestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 selection:bg-academic-navy selection:text-academic-gold">
      <Navbar />
      <HeroSection />
      <AboutSection />
      
      {/* Research & Interactive AI/Quantum Simulator */}
      <ResearchSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <InteractiveDemoWidget />
      </div>

      <LabGrantsSection />
      <PublicationsSection />
      
      {/* Teaching & Recorded Video Lectures */}
      <TeachingSection />
      <VideoLecturesSection />

      {/* Media Coverage & Global News */}
      <NewsPressSection />

      <AchievementsSection />
      <TimelineSection />
      
      {/* Scholars & Alumni Mentorship Reviews */}
      <GuidanceSection />
      <AlumniTestimonialsSection />

      <ContactSection />
      <Footer />
    </main>
  );
}
