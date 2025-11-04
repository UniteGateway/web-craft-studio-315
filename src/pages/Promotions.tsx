import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Zap, Sparkles, Gift, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Promotions = () => {
  const promotions = [
    {
      id: "festival-offer",
      title: "Festival Special Offer",
      description: "Celebrate this festive season with exclusive solar installation discounts",
      icon: Gift,
      badge: "Limited Time",
      link: "/promotions/festival-offer",
      color: "primary"
    },
    {
      id: "new-updates",
      title: "Latest Updates & Innovations",
      description: "Discover our newest solar technology and service enhancements",
      icon: TrendingUp,
      badge: "New",
      link: "/promotions/new-updates",
      color: "secondary"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Unite Solar Promotions - Exclusive Offers & Deals</title>
        <meta name="description" content="Explore exclusive solar installation offers, festival discounts, and latest updates from Unite Solar. Zero investment options available." />
        <meta name="keywords" content="solar promotions, festival offers, solar discounts, solar deals, unite solar offers" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary py-6 border-b-4 border-secondary">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity">
                <Zap className="h-8 w-8" />
                <span className="font-bold text-xl">Back to Home</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
                <Sparkles className="mr-2 h-5 w-5 inline" />
                Special Promotions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase">
                Unite Solar Promotions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Exclusive offers, festival deals, and the latest updates on solar solutions
              </p>
            </div>
          </div>
        </section>

        {/* Promotions Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {promotions.map((promo) => (
                <Card key={promo.id} className="hover:shadow-lg transition-shadow border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <promo.icon className="h-8 w-8 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {promo.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mt-4">{promo.title}</CardTitle>
                    <CardDescription className="text-base">
                      {promo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={promo.link}>
                      <Button className="w-full" size="lg">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 border-t-4 border-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-6 uppercase">
              100% Unsecured Loan @ 8.75% PA
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="tel:9667660773">
                <Button variant="secondary" size="lg" className="text-xl px-8">
                  Call: 9667660773
                </Button>
              </a>
              <a href="https://www.unitesolar.in" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="text-xl px-8">
                  Visit Website
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Promotions;
