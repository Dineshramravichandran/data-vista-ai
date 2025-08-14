import { Button } from "@/components/ui/button";
import { ArrowDown, Database, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '-4s' }} />
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="Smart API Gateway Data Visualization" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight">
            Smart API Gateway
            <span className="block text-accent-light">MoSPI Microdata</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto font-inter">
            Revolutionary instant, secure access to government microdata with 
            <span className="text-accent-light font-semibold"> AI-driven analytics</span> and 
            <span className="text-secondary-light font-semibold"> privacy-by-default</span> design
          </p>

          {/* Features Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-white/80">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent-light" />
              <span className="font-medium">Real-time Querying</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-secondary-light" />
              <span className="font-medium">AI Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success-light" />
              <span className="font-medium">Privacy-First</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground hover-lift"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover-lift"
              onClick={() => {
                const element = document.querySelector('#developer-tools');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Demo
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;