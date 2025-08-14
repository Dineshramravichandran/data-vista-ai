import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Database, ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Analytics", href: "#analytics" },
    { name: "Developer Tools", href: "#developer-tools" },
    { name: "Innovation", href: "#innovation" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-glow-primary transition-all duration-300">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                Smart API Gateway
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                MoSPI Microdata Platform
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="outline"
              size="sm"
              className="border-border hover:border-primary/30 hover:bg-primary/5 text-foreground"
              onClick={() => window.open('#', '_blank')}
            >
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-glow-primary transition-all duration-300 group"
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="border-border">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 pt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold text-foreground">Smart API Gateway</h2>
                      <p className="text-xs text-muted-foreground">MoSPI Microdata</p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('#', '_blank')}
                    >
                      Login
                    </Button>
                    <Button 
                      className="w-full justify-start bg-gradient-to-r from-primary to-secondary text-white"
                      onClick={() => scrollToSection('#contact')}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;