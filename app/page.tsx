'use client';
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Portfolio from "@/components/Portofolio";
import ProcessSection from "@/components/ProcessSection";
import RecognitionSection from "@/components/RecognitionSection";
import CTASection from "@/components/CTASection";

const App = () => {
  return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <HeroSection />
        <AboutSection />
        <Portfolio />
        <ProcessSection />
        <RecognitionSection />
        <CTASection />
      </main>
  );
}

export default App;

