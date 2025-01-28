'use client';
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Portfolio from "@/components/Portofolio";
import ProcessSection from "@/components/ProcessSection";
import RecognitionSection from "@/components/RecognitionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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

