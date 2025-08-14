import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Terminal, Download, BookOpen, Play, Copy } from "lucide-react";
import developerTools from "@/assets/developer-tools.jpg";

const DeveloperTools = () => {
  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/microdata/query",
      description: "Execute data queries with filters",
      params: ["dataset", "variables", "filters", "format"]
    },
    {
      method: "POST", 
      endpoint: "/api/v1/microdata/analyze",
      description: "Run AI-powered data analysis",
      params: ["query", "analysis_type", "suggestions"]
    },
    {
      method: "GET",
      endpoint: "/api/v1/metadata/variables",
      description: "Get available variables and metadata",
      params: ["dataset", "category", "search"]
    }
  ];

  const codeSnippets = {
    javascript: `// JavaScript SDK Example
import { MoSPIClient } from '@mospi/smart-gateway-sdk';

const client = new MoSPIClient({
  apiKey: 'your-api-key',
  endpoint: 'https://api.mospi.gov.in/smart-gateway'
});

// Query microdata
const result = await client.query({
  dataset: 'census-2021',
  variables: ['age', 'education', 'employment'],
  filters: { state: 'Maharashtra', age_range: [18, 65] },
  format: 'json'
});

console.log(result.data);`,
    
    python: `# Python SDK Example
from mospi_gateway import SmartGateway

# Initialize client
gateway = SmartGateway(
    api_key="your-api-key",
    endpoint="https://api.mospi.gov.in/smart-gateway"
)

# Query with AI suggestions
result = gateway.query_with_ai(
    dataset="census-2021",
    variables=["age", "education", "employment"],
    filters={"state": "Maharashtra", "age_range": [18, 65]},
    get_suggestions=True
)

print(result.data)
print(result.ai_suggestions)`,

    curl: `# cURL Example
curl -X POST "https://api.mospi.gov.in/smart-gateway/v1/microdata/query" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "dataset": "census-2021",
    "variables": ["age", "education", "employment"],
    "filters": {
      "state": "Maharashtra",
      "age_range": [18, 65]
    },
    "format": "json",
    "sandbox": true
  }'`
  };

  return (
    <section id="developer-tools" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6">
            Developer-Friendly Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive SDK, sandbox environment, and documentation for seamless integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Sandbox Interface */}
          <Card className="hover-lift border-2 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Terminal className="w-5 h-5 text-accent" />
                Interactive Sandbox
              </CardTitle>
              <Badge className="w-fit bg-accent/10 text-accent">Try Now</Badge>
            </CardHeader>
            <CardContent>
              <div className="bg-background border rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span className="text-sm text-muted-foreground ml-2">sandbox.mospi.gov.in</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-accent">POST /api/v1/microdata/query</div>
                  <div className="text-muted-foreground">// Test your queries safely</div>
                  <div className="text-primary">{"{ \"dataset\": \"census-sample\" }"}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-accent hover:bg-accent-light text-accent-foreground">
                  <Play className="w-4 h-4 mr-2" />
                  Run Query
                </Button>
                <Button variant="outline" size="sm">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Developer Image */}
          <Card className="overflow-hidden">
            <img 
              src={developerTools} 
              alt="Developer Tools Interface" 
              className="w-full h-full object-cover hover-scale"
            />
          </Card>
        </div>

        {/* API Documentation */}
        <Card className="mb-16 border-2 border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <BookOpen className="w-5 h-5 text-primary" />
              API Endpoints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-surface/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge 
                      className={`${
                        endpoint.method === 'GET' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono text-foreground">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-muted-foreground mb-3">{endpoint.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.params.map((param, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {param}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <Card className="border-2 border-secondary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Code className="w-5 h-5 text-secondary" />
              Code Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>
              
              {Object.entries(codeSnippets).map(([lang, code]) => (
                <TabsContent key={lang} value={lang}>
                  <div className="relative">
                    <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
                      <code className="text-foreground">{code}</code>
                    </pre>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="absolute top-2 right-2"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* SDK Downloads */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-poppins text-foreground mb-8">
            Download Official SDKs
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-warning hover:bg-warning-light text-warning-foreground">
              <Download className="w-4 h-4 mr-2" />
              JavaScript SDK
            </Button>
            <Button className="bg-success hover:bg-success-light text-success-foreground">
              <Download className="w-4 h-4 mr-2" />
              Python SDK
            </Button>
            <Button className="bg-accent hover:bg-accent-light text-accent-foreground">
              <Download className="w-4 h-4 mr-2" />
              R Package
            </Button>
            <Button variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Full Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;