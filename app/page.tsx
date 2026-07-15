import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SmartDownloadHub from "@/components/SmartDownloadHub";
import FeatureBentoGrid from "@/components/FeatureBentoGrid";
import DocumentationPreview from "@/components/DocumentationPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14] text-slate-100 font-sans selection:bg-[#00f2fe]/30 selection:text-white">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <SmartDownloadHub />
        <FeatureBentoGrid />
        <DocumentationPreview />
      </main>
      <Footer />
    </div>
  );
}
