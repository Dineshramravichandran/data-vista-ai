import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Clock, Leaf, Users, Eye, Download } from "lucide-react";
import analyticsIcon from "@/assets/analytics-icon.jpg";

const Analytics = () => {
  // Mock data for charts
  const performanceData = [
    { name: 'Traditional', time: 240, color: '#ef4444' },
    { name: 'Smart Gateway', time: 5, color: '#22c55e' },
  ];

  const usageData = [
    { name: 'Jan', queries: 1200, users: 45 },
    { name: 'Feb', queries: 1800, users: 67 },
    { name: 'Mar', queries: 2400, users: 89 },
    { name: 'Apr', queries: 3200, users: 112 },
    { name: 'May', queries: 4100, users: 134 },
    { name: 'Jun', queries: 5300, users: 156 },
  ];

  const dataTypesData = [
    { name: 'Census', value: 35, color: '#3b82f6' },
    { name: 'Economic', value: 28, color: '#8b5cf6' },
    { name: 'Health', value: 20, color: '#06b6d4' },
    { name: 'Education', value: 17, color: '#10b981' },
  ];

  const impactMetrics = [
    {
      icon: Clock,
      title: "Time Saved",
      value: "95%",
      description: "Query processing time reduction",
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "CO₂ Reduced",
      value: "2.3T",
      description: "Carbon footprint reduction",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Active Users",
      value: "156",
      description: "Researchers using the platform",
      color: "text-primary"
    },
    {
      icon: Download,
      title: "Data Downloads",
      value: "5.3K",
      description: "Successful data extractions",
      color: "text-secondary"
    }
  ];

  return (
    <section id="analytics" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6">
            Real-time Analytics & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live dashboard showing performance improvements and usage patterns
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="group hover-lift bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-current/10 flex items-center justify-center ${metric.color}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className={`text-3xl font-bold font-poppins mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {metric.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Performance Comparison */}
          <Card className="chart-container hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-accent" />
                Performance Comparison
              </CardTitle>
              <Badge className="w-fit bg-success/10 text-success">95% Faster</Badge>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))' 
                    }} 
                  />
                  <Bar dataKey="time" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Data Types Distribution */}
          <Card className="chart-container hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Eye className="w-5 h-5 text-primary" />
                Data Types Access
              </CardTitle>
              <Badge className="w-fit bg-primary/10 text-primary">Multi-Domain</Badge>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dataTypesData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {dataTypesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Usage Trends */}
        <Card className="chart-container hover-lift mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Users className="w-5 h-5 text-secondary" />
              Platform Usage Growth
            </CardTitle>
            <Badge className="w-fit bg-secondary/10 text-secondary">Growing Fast</Badge>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))' 
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="queries" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--secondary))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--accent))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Analytics Highlight */}
        <Card className="p-8 hero-gradient border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold font-poppins text-white mb-4">
                Intelligent Data Insights
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Our AI-powered analytics engine provides real-time insights into data usage patterns, 
                helping optimize query performance and predict research trends.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-accent-light"></div>
                  <span>Predictive query optimization</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-secondary-light"></div>
                  <span>Usage pattern analysis</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-success-light"></div>
                  <span>Performance monitoring</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src={analyticsIcon} 
                alt="Analytics Visualization" 
                className="w-full max-w-md mx-auto rounded-lg opacity-90"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Analytics;