import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DataVisualizations } from "@/components/DataVisualizations";
import { GlobalPerspective } from "@/components/GlobalPerspective";
import { BrainHealth } from "@/components/BrainHealth";
import { ListeningConnection } from "@/components/ListeningConnection";
import { PerspectiveToggle } from "@/components/PerspectiveToggle";
import { CallToAction } from "@/components/CallToAction";
import { OurStory } from "@/components/OurStory";
import { Citations } from "@/components/Citations";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Listen Up, Mom! | Mother-Daughter Hearing Health";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <DataVisualizations />
        <GlobalPerspective />
        <BrainHealth />
        <ListeningConnection />
        <PerspectiveToggle />
        <CallToAction />
        <OurStory />
        <Citations />
      </main>
      <Footer />
    </div>
  );
}
