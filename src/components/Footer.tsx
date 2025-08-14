import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Database, Mail, Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "API Documentation", href: "#developer-tools" },
      { name: "Sandbox", href: "#developer-tools" },
      { name: "Pricing", href: "#contact" }
    ],
    resources: [
      { name: "Documentation", href: "#developer-tools" },
      { name: "Tutorials", href: "#analytics" },
      { name: "Research Papers", href: "#innovation" },
      { name: "Support", href: "#contact" }
    ],
    company: [
      { name: "About MoSPI", href: "https://mospi.gov.in" },
      { name: "Digital India", href: "https://digitalindia.gov.in" },
      { name: "Privacy Policy", href: "#contact" },
      { name: "Terms of Service", href: "#contact" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-muted border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Database className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-poppins text-foreground">
                  Smart API Gateway
                </h3>
                <p className="text-sm text-muted-foreground">MoSPI Microdata</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Revolutionary instant, secure access to government microdata with AI-driven analytics and privacy-by-default design.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter email"
                  className="text-sm"
                />
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                  onClick={() => {
                    // Add newsletter signup logic here
                    console.log("Newsletter signup");
                  }}
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Government</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Ministry of Statistics & Programme Implementation, Government of India. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-muted-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;