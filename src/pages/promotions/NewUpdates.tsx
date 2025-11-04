import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, TrendingUp, Zap, Shield, Sparkles, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NewUpdates = () => {
  const updates = [
    {
      title: "Next-Gen Solar Panels",
      description: "Introducing high-efficiency monocrystalline panels with 22% efficiency rating",
      icon: Zap,
      date: "November 2025"
    },
    {
      title: "Advanced Monitoring System",
      description: "Real-time performance tracking via mobile app with AI-powered insights",
      icon: TrendingUp,
      date: "October 2025"
    },
    {
      title: "Enhanced Warranty Program",
      description: "Extended coverage with comprehensive maintenance packages",
      icon: Shield,
      date: "September 2025"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Latest Updates & Innovations - Unite Solar</title>
        <meta name="description" content="Discover the latest solar technology innovations and service updates from Unite Solar. Stay informed about new features and enhancements." />
        <meta name="keywords" content="solar innovations, solar updates, new solar technology, unite solar news" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary py-6 border-b-4 border-secondary">
          <div className="container mx-auto px-4">
            <Link to="/promotions" className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-6 w-6" />
              <span className="font-bold text-lg">Back to Promotions</span>
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary/20 to-primary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="default" className="mb-6 text-lg px-6 py-3">
                <Sparkles className="mr-2 h-6 w-6 inline" />
                What's New
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase">
                Latest Updates & Innovations
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Stay ahead with our cutting-edge solar technology and service enhancements
              </p>
            </div>
          </div>
        </section>

        {/* Updates Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {updates.map((update, index) => (
                <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                        <update.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <CardTitle className="text-2xl">{update.title}</CardTitle>
                          <Badge variant="secondary">{update.date}</Badge>
                        </div>
                        <p className="text-lg text-muted-foreground">{update.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase">
                Our Commitment to Innovation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
                    <p className="text-muted-foreground">
                      We constantly upgrade our technology and services to provide you with the best solar solutions in the industry.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Customer-Centric Updates</h3>
                    <p className="text-muted-foreground">
                      Every enhancement is designed with your needs in mind, ensuring maximum efficiency and savings.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      All new products and services undergo rigorous testing before deployment to ensure reliability.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Future-Ready Solutions</h3>
                    <p className="text-muted-foreground">
                      Stay ahead with technology that's built for tomorrow's energy challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 border-t-4 border-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-8 uppercase">
                Experience the Latest in Solar Technology
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Contact us today to learn more about our latest innovations
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="tel:9667660773" className="w-full md:w-auto">
                  <Button size="lg" variant="secondary" className="w-full md:w-auto text-xl px-8 py-6">
                    <Phone className="mr-2 h-6 w-6" />
                    Call: 9667660773
                  </Button>
                </a>
                <a href="https://www.unitesolar.in" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                  <Button size="lg" variant="secondary" className="w-full md:w-auto text-xl px-8 py-6">
                    <Globe className="mr-2 h-6 w-6" />
                    Visit Website
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewUpdates;
