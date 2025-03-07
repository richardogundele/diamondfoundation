
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Richie Diamond Foundation";
  }, []);

  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <NavBar />
      <Hero />
      <About />
      <Collections />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
