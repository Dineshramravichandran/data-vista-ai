import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Analytics from "@/components/Analytics";
import DeveloperTools from "@/components/DeveloperTools";
import Innovation from "@/components/Innovation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Analytics />
      <DeveloperTools />
      <Innovation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
