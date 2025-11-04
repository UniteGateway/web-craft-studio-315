import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Gift, TrendingUp, Sparkles, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import uniteLogo from "@/assets/unite-logo.png";

const Promotions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const allPromotions = [
    {
      id: "festival-offer",
      title: "Festival Special Offer",
      description: "Save up to ₹2 Lakhs with exclusive festive discounts",
      icon: Gift,
      badge: "Hot Deal",
      link: "/promotions/festival-offer",
      image: "🎁"
    },
    {
      id: "new-updates",
      title: "Latest Innovations",
      description: "Next-gen solar panels with 22% efficiency",
      icon: TrendingUp,
      badge: "New",
      link: "/promotions/new-updates",
      image: "⚡"
    },
    {
      id: "summer-special",
      title: "Summer Special",
      description: "Beat the heat with solar energy savings",
      icon: Sparkles,
      badge: "Limited",
      link: "/promotions/festival-offer",
      image: "☀️"
    },
    {
      id: "warranty-upgrade",
      title: "Extended Warranty",
      description: "30 years performance warranty included",
      icon: Gift,
      badge: "Premium",
      link: "/promotions/new-updates",
      image: "🛡️"
    },
    {
      id: "zero-investment",
      title: "Zero Investment Plan",
      description: "Start saving with no upfront costs",
      icon: TrendingUp,
      badge: "Popular",
      link: "/promotions/festival-offer",
      image: "💰"
    },
    {
      id: "monsoon-offer",
      title: "Monsoon Offer",
      description: "Special installation benefits this season",
      icon: Sparkles,
      badge: "Seasonal",
      link: "/promotions/new-updates",
      image: "🌧️"
    },
    {
      id: "referral-bonus",
      title: "Referral Rewards",
      description: "Earn rewards for every successful referral",
      icon: Gift,
      badge: "Bonus",
      link: "/promotions/festival-offer",
      image: "🎯"
    },
    {
      id: "commercial-deal",
      title: "Commercial Package",
      description: "Special rates for businesses",
      icon: TrendingUp,
      badge: "B2B",
      link: "/promotions/new-updates",
      image: "🏢"
    },
    {
      id: "maintenance-free",
      title: "5 Years Free Maintenance",
      description: "Complete peace of mind package",
      icon: Sparkles,
      badge: "Premium",
      link: "/promotions/festival-offer",
      image: "🔧"
    },
    {
      id: "smart-monitoring",
      title: "Smart Monitoring System",
      description: "AI-powered real-time tracking",
      icon: Gift,
      badge: "Tech",
      link: "/promotions/new-updates",
      image: "📱"
    }
  ];

  const totalPages = Math.ceil(allPromotions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPromotions = allPromotions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Helmet>
        <title>Unite Solar Promotions - Exclusive Offers & Deals</title>
        <meta name="description" content="Explore exclusive solar installation offers, festival discounts, and latest updates from Unite Solar. Zero investment options available." />
        <meta name="keywords" content="solar promotions, festival offers, solar discounts, solar deals, unite solar offers" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Header with Logo and Connect Us */}
        <header className="bg-primary py-4 border-b-4 border-secondary sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src={uniteLogo} alt="Unite Solar" className="h-12 md:h-16" />
              </Link>
              <div className="flex items-center gap-4">
                <a 
                  href="https://wa.me/919667660773" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="hidden md:inline">Connect Us</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-lg px-6 py-3">
                <Sparkles className="mr-2 h-6 w-6 inline" />
                Special Promotions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase">
                Unite Solar Promotions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Exclusive offers, festival deals, and the latest updates on solar solutions
              </p>
              <div className="inline-block bg-secondary px-6 py-3 rounded-lg">
                <p className="text-2xl md:text-3xl font-black text-secondary-foreground">
                  100% Unsecured Loan @ 8.75%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {currentPromotions.map((promo) => (
                <Link key={promo.id} to={promo.link}>
                  <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary cursor-pointer h-full">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{promo.image}</div>
                        <Badge variant="secondary" className="mb-3">
                          {promo.badge}
                        </Badge>
                        <h3 className="text-lg font-black mb-2 uppercase">{promo.title}</h3>
                        <p className="text-sm text-muted-foreground">{promo.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className="w-10"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary border-t-4 border-secondary">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* About */}
              <div>
                <h3 className="text-primary-foreground font-black text-xl mb-4 uppercase">About Unite Solar</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Leading provider of sustainable solar energy solutions with 100% unsecured financing options.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-primary-foreground font-black text-xl mb-4 uppercase">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">Home</Link></li>
                  <li><Link to="/promotions" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">Promotions</Link></li>
                  <li><a href="https://www.unitesolar.in" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">About Us</a></li>
                  <li><a href="https://www.unitesolar.in/contact" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">Contact</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-primary-foreground font-black text-xl mb-4 uppercase">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                    <Phone className="h-4 w-4" />
                    <a href="tel:9667660773">9667660773</a>
                  </li>
                  <li className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@unitesolar.in">info@unitesolar.in</a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-primary-foreground font-black text-xl mb-4 uppercase">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                    <Facebook className="h-5 w-5 text-primary-foreground" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                    <Twitter className="h-5 w-5 text-primary-foreground" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                    <Instagram className="h-5 w-5 text-primary-foreground" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                    <Linkedin className="h-5 w-5 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-primary-foreground/60 text-sm">
                © 2025 Unite Solar. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Promotions;
