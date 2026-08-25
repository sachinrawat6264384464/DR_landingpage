import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import LabGrantsSection from "@/components/LabGrantsSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeachingSection from "@/components/TeachingSection";
import AchievementsSection from "@/components/AchievementsSection";
import TimelineSection from "@/components/TimelineSection";
import GuidanceSection from "@/components/GuidanceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 selection:bg-academic-navy selection:text-academic-gold">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <LabGrantsSection />
      <PublicationsSection />
      <TeachingSection />
      <AchievementsSection />
      <TimelineSection />
      <GuidanceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
