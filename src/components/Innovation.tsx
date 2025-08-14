import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Flag, 
  Layers, 
  Shield, 
  Sparkles, 
  Globe,
  Star,
  Zap
} from "lucide-react";

const Innovation = () => {
  const innovations = [
    {
      icon: Trophy,
      title: "First Metadata-Driven API",
      description: "Revolutionary approach to Indian government microdata access using intelligent metadata mapping",
      badge: "Industry First",
      color: "text-warning bg-warning/10"
    },
    {
      icon: Flag,
      title: "Digital India Alignment",
      description: "Fully compliant with Digital India data policies and government accessibility standards",
      badge: "Compliant",
      color: "text-success bg-success/10"
    },
    {
      icon: Layers,
      title: "Hybrid & Sandbox Modes",
      description: "Flexible architecture supporting both public visualizations and secure research environments",
      badge: "Flexible",
      color: "text-primary bg-primary/10"
    },
    {
      icon: Shield,
      title: "Privacy-Focused Architecture",
      description: "Built-in privacy safeguards ensuring public trust and regulatory compliance",
      badge: "Secure",
      color: "text-accent bg-accent/10"
    }
  ];

  const uniqueFeatures = [
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Machine learning recommendations for optimal variable combinations and research pathways"
    },
    {
      icon: Globe,
      title: "Cross-Ministry Blueprint",
      description: "Scalable architecture designed for implementation across multiple government departments"
    },
    {
      icon: Star,
      title: "Research Acceleration", 
      description: "Transform research timelines from months to minutes with intelligent automation"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant query execution with live data visualization and export capabilities"
    }
  ];

  return (
    <section id="innovation" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6">
            Innovation & Uniqueness
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of government data accessibility in India
          </p>
        </div>

        {/* Core Innovations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <Card key={index} className="group hover-lift border-2 hover:border-primary/20 transition-all duration-normal">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-lg ${innovation.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                    <innovation.icon className="w-7 h-7" />
                  </div>
                  <Badge className="bg-primary/10 text-primary">
                    {innovation.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-poppins text-foreground group-hover:text-primary transition-colors">
                  {innovation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {innovation.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Highlights */}
        <Card className="mb-16 primary-gradient p-8 border-primary/20">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold font-poppins mb-6">
              Transforming Government Data Access
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1st</div>
                <div className="text-white/90">Metadata-driven API in India</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-white/90">Faster than traditional methods</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/90">Privacy compliant</div>
              </div>
            </div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Setting new standards for government data platforms across India and establishing 
              a blueprint for modern, secure, and efficient public data access.
            </p>
          </div>
        </Card>

        {/* Unique Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uniqueFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover-lift bg-card/50 backdrop-blur-sm border-2 hover:border-accent/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold font-poppins text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 subtle-gradient border-success/20">
            <div className="flex items-center gap-4 text-success">
              <Star className="w-8 h-8" />
              <div className="text-left">
                <h4 className="text-xl font-bold font-poppins text-foreground">
                  Digital India Pioneer
                </h4>
                <p className="text-muted-foreground">
                  Leading the transformation of government data accessibility
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Innovation;