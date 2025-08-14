import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Filter, 
  Brain, 
  Shield, 
  Users, 
  Eye, 
  TestTube, 
  Database,
  TrendingUp,
  Share2
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Query Engine",
      description: "Generate tables, charts, and export JSON/CSV outputs in real-time with lightning-fast processing",
      tag: "Performance",
      gradient: "bg-accent/10 text-accent"
    },
    {
      icon: Filter,
      title: "Advanced Filtering",
      description: "Multi-variable filters powered by intelligent metadata mapping for precise data selection",
      tag: "Precision",
      gradient: "bg-primary/10 text-primary"
    },
    {
      icon: Brain,
      title: "AI Suggestions", 
      description: "Smart recommendations for relevant variables and relationships based on your research context",
      tag: "Intelligence",
      gradient: "bg-secondary/10 text-secondary"
    },
    {
      icon: Shield,
      title: "Privacy-by-Default",
      description: "Automated data suppression and aggregation ensuring compliance with privacy regulations",
      tag: "Security",
      gradient: "bg-success/10 text-success"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Flexible access control for public users, researchers, developers, and administrators",
      tag: "Access",
      gradient: "bg-warning/10 text-warning"
    },
    {
      icon: Eye,
      title: "Hybrid Mode",
      description: "Public visualizations with secure raw data access for authorized users",
      tag: "Flexibility",
      gradient: "bg-destructive/10 text-destructive"
    },
    {
      icon: TestTube,
      title: "Sandbox Mode",
      description: "Test and validate queries safely in isolated environment before live execution",
      tag: "Safety",
      gradient: "bg-accent/10 text-accent"
    },
    {
      icon: Database,
      title: "Automated Ingestion",
      description: "Structured database ingestion eliminates manual data cleaning and preparation",
      tag: "Automation",
      gradient: "bg-primary/10 text-primary"
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Blueprint design applicable across multiple ministry portals and government systems",
      tag: "Scalability",
      gradient: "bg-secondary/10 text-secondary"
    },
    {
      icon: Share2,
      title: "Export & Share",
      description: "Download analysis outputs or share interactive visualizations with stakeholders",
      tag: "Collaboration",
      gradient: "bg-success/10 text-success"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6">
            Comprehensive Feature Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything researchers need for efficient, secure, and intelligent microdata analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover-lift border-2 hover:border-primary/20 transition-all duration-normal">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-normal`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-poppins text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-8 subtle-gradient border-primary/20">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins text-foreground mb-3">
                  AI-Powered Intelligence
                </h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Our advanced AI engine understands research patterns and suggests optimal data combinations, 
                  making complex analysis accessible to researchers at all levels.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary">Pattern Recognition</Badge>
                  <Badge className="bg-primary/10 text-primary">Auto-Suggestions</Badge>
                  <Badge className="bg-primary/10 text-primary">Context Aware</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 data-gradient border-accent/20">
            <div className="text-center text-white">
              <Shield className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold font-poppins mb-3">
                Privacy Guaranteed
              </h3>
              <p className="text-white/90 mb-4">
                Built-in privacy protection ensures sensitive data never leaves the secure environment
              </p>
              <div className="text-sm text-white/70">
                ✓ Automated Suppression<br/>
                ✓ Secure Aggregation<br/>
                ✓ Compliance Ready
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;