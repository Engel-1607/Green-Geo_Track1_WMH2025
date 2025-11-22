import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Satellite, 
  TrendingDown, 
  Map, 
  MonitorDot,
  TreeDeciduous,
  AlertTriangle,
  Users,
  Building2,
  Lightbulb,
  Truck
} from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <TreeDeciduous className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">GreenGeo</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('challenge')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                The Challenge
              </button>
              <button 
                onClick={() => scrollToSection('solution')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Our Solution
              </button>
              <button 
                onClick={() => scrollToSection('partners')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Partners
              </button>
              <Button size="sm">Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/hero-forest.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background/80 z-0" />
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {APP_TITLE}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Using advanced satellite imagery from VIIRS, MODIS, and Sentinel-2 combined with QGIS mapping 
            to monitor and flag illegal logging, deforestation, and forest encroachment in Kenya's vital ecosystems, 
            especially the Mau Forest.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            onClick={() => scrollToSection('solution')}
          >
            View High-Threat Areas
          </Button>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-10 w-10 text-destructive" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  The Challenge We Face
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Kenya's forest ecosystems, particularly the Mau Forest Complex, face unprecedented threats 
                  that endanger biodiversity, water security, and climate stability across East Africa.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-destructive/20 bg-destructive/5">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-destructive mb-2">5,000+</div>
                      <div className="text-sm text-foreground">Hectares lost annually</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-destructive/20 bg-destructive/5">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-destructive mb-2">40%</div>
                      <div className="text-sm text-foreground">Forest cover decline</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-destructive/20">
                    <Truck className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Illegal Logging</h3>
                      <p className="text-sm text-muted-foreground">
                        Night-time operations evade traditional monitoring systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-destructive/20">
                    <TrendingDown className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Rapid Deforestation</h3>
                      <p className="text-sm text-muted-foreground">
                        Large-scale clearing for agriculture and settlements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-destructive/20">
                    <Users className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Human Encroachment</h3>
                      <p className="text-sm text-muted-foreground">
                        Unauthorized settlements expanding into protected areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-destructive/20">
                    <Map className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Inadequate Mapping</h3>
                      <p className="text-sm text-muted-foreground">
                        Outdated boundary data hampers enforcement efforts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/challenge-deforestation.jpg" 
                alt="Threatened Kenyan forest showing deforestation impact"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-destructive text-destructive-foreground p-6 rounded-lg shadow-xl">
                <TreeDeciduous className="h-12 w-12 mb-2 opacity-50" />
                <div className="text-2xl font-bold">Shrinking</div>
                <div className="text-sm">Forest Cover</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Geo-Intelligence Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced satellite technology and geospatial analysis provide real-time monitoring 
              and detection of forest threats across Kenya's protected ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Night Logging Detection */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Illegal Logging (Night)
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  VIIRS Datasets detect anomalous light patterns in protected forest areas, 
                  identifying night-time logging operations invisible to traditional monitoring.
                </p>
                <div className="text-xs font-mono text-primary bg-primary/5 p-2 rounded">
                  VIIRS DNB • Light Sensitivity
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Change Detection */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Satellite className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Illegal Logging (Change)
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  MODIS satellite imagery enables temporal change detection, tracking forest 
                  cover loss and identifying logging patterns over time.
                </p>
                <div className="text-xs font-mono text-primary bg-primary/5 p-2 rounded">
                  MODIS • Change Detection
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Deforestation Monitoring */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Deforestation/Encroachment
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sentinel-2 processed data provides high-resolution multispectral imagery 
                  for precise detection of deforestation and human encroachment.
                </p>
                <div className="text-xs font-mono text-primary bg-primary/5 p-2 rounded">
                  Sentinel-2 • 10m Resolution
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Boundary Mapping */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <MonitorDot className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Boundary Definition
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  QGIS mapping technology creates accurate, up-to-date forest cover boundaries 
                  for enforcement and conservation planning.
                </p>
                <div className="text-xs font-mono text-primary bg-primary/5 p-2 rounded">
                  QGIS • Geospatial Analysis
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We Serve: Empowering Forest Guardians
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partnering with government agencies and conservation organizations to protect 
              Kenya's vital forest ecosystems through data-driven intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Government Agencies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Government Agencies</h3>
              </div>
              
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Ministry of Environment & Forestry
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          National forest policy and conservation strategy
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <TreeDeciduous className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Kenya Wildlife Service (KWS)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Protected area management and enforcement
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          National Environment Management Authority (NEMA)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Environmental compliance and monitoring
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          United Nations Environment Programme (UNEP)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          International environmental coordination
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conservation Partners */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Conservation & Research Partners</h3>
              </div>
              
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <TreeDeciduous className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Conservation NGOs
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          On-ground conservation initiatives and community engagement
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Map className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          GIS & Mapping Companies
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Geospatial technology and data analysis expertise
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          United Nations Development Programme (UNDP)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Sustainable development and capacity building
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Satellite className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          EU Climate Fund
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Climate action financing and technical support
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <TreeDeciduous className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl text-foreground">GreenGeo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Protecting Kenya's forests through advanced geo-intelligence and satellite monitoring technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('challenge')}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  The Challenge
                </button>
                <button 
                  onClick={() => scrollToSection('solution')}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Solution
                </button>
                <button 
                  onClick={() => scrollToSection('partners')}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Partners
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                For partnership inquiries and data access, please reach out to our team.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GreenGeo. All rights reserved. Protecting Kenya's forests with technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
