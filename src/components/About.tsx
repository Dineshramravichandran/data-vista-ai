import { Card, CardContent } from "@/components/ui/card";
import { Clock, Lock, Wrench, Lightbulb } from "lucide-react";

const About = () => {
  const problems = [
    {
      icon: Clock,
      title: "Slow Analysis",
      description: "Hours of manual data processing and cleaning delays crucial insights"
    },
    {
      icon: Lock,
      title: "Privacy Risks", 
      description: "Complex data handling without built-in privacy safeguards"
    },
    {
      icon: Wrench,
      title: "Manual Cleaning",
      description: "Repetitive data preparation tasks consume valuable research time"
    }
  ];

  const solutions = [
    {
      icon: Lightbulb,
      title: "Metadata-Driven Engine",
      description: "Automatic variable mapping and relationship discovery powered by intelligent metadata processing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6">
            Transforming Government Data Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Breaking down barriers between researchers and India's vast microdata repositories
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-poppins text-destructive mb-6">
                Current Challenges
              </h3>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <Card key={index} className="border-destructive/20 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                          <problem.icon className="w-6 h-6 text-destructive" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {problem.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-poppins text-success mb-6">
                Our Solution
              </h3>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <Card key={index} className="border-success/20 hover-lift bg-success/5">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
                          <solution.icon className="w-8 h-8 text-success" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            {solution.title}
                          </h4>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Visual Illustration */}
              <div className="mt-8 p-8 rounded-lg subtle-gradient border">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-destructive/20 flex items-center justify-center">
                      <Clock className="w-8 h-8 text-destructive" />
                    </div>
                    <p className="text-sm font-medium text-foreground">Hours</p>
                    <p className="text-xs text-muted-foreground">Traditional</p>
                  </div>
                  
                  <div className="flex-1 h-px bg-primary relative">
                    <div className="absolute inset-0 bg-primary animate-pulse" />
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-success/20 flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-success" />
                    </div>
                    <p className="text-sm font-medium text-foreground">Seconds</p>
                    <p className="text-xs text-muted-foreground">Smart Gateway</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;