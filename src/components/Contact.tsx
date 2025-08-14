import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, Bell } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '', newsletter: false });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "smartgateway@mospi.gov.in",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-11-2338-6000",
      color: "text-success"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Ministry of Statistics & PI, Sardar Patel Bhawan, New Delhi",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to revolutionize your data research? Contact us to learn more about the Smart API Gateway
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-primary/10 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Send className="w-5 h-5 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@domain.com"
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your research needs or questions..."
                    rows={5}
                    required
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                  />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Subscribe to updates about Smart API Gateway
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground hover-lift"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover-lift border-2 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${info.color.replace('text-', 'bg-')}/10 flex items-center justify-center`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="p-6 data-gradient border-accent/20">
              <div className="text-center text-white">
                <Bell className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold font-poppins mb-3">
                  Stay Updated
                </h3>
                <p className="text-white/90 mb-6">
                  Get the latest updates on Smart API Gateway features, datasets, and research opportunities
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                    Subscribe
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Info */}
            <Card className="p-6 subtle-gradient border-success/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Research Support
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>24/7 API support for researchers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Training sessions for new users</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Custom integration assistance</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;