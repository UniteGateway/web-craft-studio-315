import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Gift, CheckCircle, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FestivalOffer = () => {
  const benefits = [
    "Extra 10% Festival Discount on Installation",
    "Free 2-Year Extended Maintenance",
    "Complimentary Energy Audit Worth ₹15,000",
    "Priority Installation Within 15 Days",
    "Free Solar Panel Cleaning Kit",
    "Zero Processing Fee on Loans"
  ];

  return (
    <>
      <Helmet>
        <title>Festival Special Offer - Unite Solar Promotions</title>
        <meta name="description" content="Exclusive festival offer on solar plant installation. Get extra discounts, extended warranty, and special benefits. Limited time offer from Unite Solar." />
        <meta name="keywords" content="festival solar offer, diwali solar discount, solar festival deal, unite solar promotion" />
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
        <section className="relative bg-gradient-to-br from-primary to-primary/80 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 text-lg px-6 py-3">
                <Gift className="mr-2 h-6 w-6 inline" />
                Limited Time Festival Offer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-6 uppercase">
                Festival Special Solar Offer
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                Celebrate the festive season with incredible savings on your solar plant installation
              </p>
              <div className="inline-block bg-secondary px-8 py-4 rounded-lg">
                <p className="text-3xl md:text-5xl font-black text-secondary-foreground">
                  Save Up to ₹2 Lakhs*
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase">
              Festival Offer Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg font-semibold">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-4 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-center uppercase">
                    What You Get
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                        30
                      </div>
                      <p className="text-lg font-semibold">Years Performance Warranty</p>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                        12
                      </div>
                      <p className="text-lg font-semibold">Years Product Warranty</p>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                        5
                      </div>
                      <p className="text-lg font-semibold">Years Free Maintenance, Cleaning & Insurance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-16 border-y-4 border-primary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-secondary-foreground mb-8 uppercase">
                Don't Miss This Festival Offer!
              </h2>
              <p className="text-xl text-secondary-foreground/80 mb-8">
                *Offer valid till stocks last. Terms & conditions apply.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="tel:9667660773" className="w-full md:w-auto">
                  <Button size="lg" className="w-full md:w-auto text-xl px-8 py-6">
                    <Phone className="mr-2 h-6 w-6" />
                    Call: 9667660773
                  </Button>
                </a>
                <a href="https://www.unitesolar.in" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                  <Button size="lg" variant="outline" className="w-full md:w-auto text-xl px-8 py-6">
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

export default FestivalOffer;
