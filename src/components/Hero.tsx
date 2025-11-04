import { Button } from "@/components/ui/button";
import { Mail, Phone, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import uniteLogo from "@/assets/unite-logo.png";
import solarHero from "@/assets/solar-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${solarHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1.1)',
        }}
      />
      
      <div className="relative">
        {/* Yellow header bars */}
        <div className="flex items-center justify-between bg-secondary text-secondary-foreground">
          <div className="flex items-center gap-2 px-6 py-3 font-bold text-lg">
            <Mail className="h-5 w-5" />
            info@unitesolar.in
          </div>
          <img 
            src={uniteLogo} 
            alt="Unite Solar" 
            className="h-16 md:h-20 py-2"
          />
          <div className="flex items-center gap-2 px-6 py-3 font-bold text-lg">
            <Phone className="h-5 w-5" />
            +91 9667660773
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-6">
            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary leading-none tracking-tight">
              ZERO INVESTMENT<br />
              OWN YOUR SOLAR PLANT!
            </h1>

            {/* Industries badge */}
            <div className="inline-block bg-foreground text-secondary px-8 py-3 rounded-full">
              <p className="text-xl md:text-2xl font-bold uppercase">
                Industries - Mills
              </p>
            </div>

            {/* Subheadline */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-black text-foreground">
                NO MORE WORRIES!
              </h2>
              <p className="text-2xl md:text-4xl font-bold text-foreground">
                PAY POWER BILL AS EMI
              </p>
            </div>

            {/* Main grid with features */}
            <div className="grid lg:grid-cols-2 gap-8 items-start pt-8">
              {/* Left side - Feature badges */}
              <div className="space-y-4">
                <FeatureBadge 
                  number="30"
                  unit="YEARS"
                  title="PERFORMANCE GAURENTY"
                />
                <FeatureBadge 
                  number="12"
                  unit="YEARS"
                  title="PRODUCT WARRANTY"
                />
                <FeatureBadge 
                  number="5"
                  unit="YEARS"
                  title="AMC-INSURANCE-CLEANING"
                />
                <FeatureBadge 
                  number="5"
                  unit="YEARS"
                  title="RETURN ON INVESTMENT"
                />
                <FeatureBadge 
                  number="25"
                  unit="YEARS"
                  title="FREE POWER UP TO 90%"
                />
                <FeatureBadge 
                  number="5"
                  unit="YEARS"
                  title="DEDICATED SITE ENGINEER"
                />
                <FeatureBadge 
                  number="5"
                  unit="YEARS"
                  title="TOP 5 BRANDS IN INDIA"
                />
              </div>

              {/* Right side - ROI badges */}
              <div className="space-y-4">
                <div className="bg-secondary text-secondary-foreground px-8 py-6 rounded-lg font-bold shadow-lg">
                  <div className="text-3xl md:text-4xl">20% ROI FIRST</div>
                  <div className="text-3xl md:text-4xl">5 YEARS</div>
                </div>
                <div className="bg-secondary text-secondary-foreground px-8 py-6 rounded-lg font-bold shadow-lg">
                  <div className="text-3xl md:text-4xl">80% ROI</div>
                  <div className="text-3xl md:text-4xl">NEXT 25 YEARS</div>
                </div>
              </div>
            </div>

            {/* Promotions CTA */}
            <div className="pt-8">
              <Link to="/promotions">
                <Button size="lg" className="text-xl px-8 py-6 shadow-lg">
                  <Gift className="mr-2 h-6 w-6" />
                  View Special Offers & Promotions
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureBadgeProps {
  number: string;
  unit: string;
  title: string;
}

const FeatureBadge = ({ number, unit, title }: FeatureBadgeProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary flex flex-col items-center justify-center shadow-[0_8px_25px_hsl(45,100%,50%,0.4)]">
        <div className="text-3xl md:text-4xl font-black text-secondary-foreground leading-none">{number}</div>
        <div className="text-xs md:text-sm font-bold text-secondary-foreground leading-none mt-1">{unit}</div>
      </div>
      <div className="flex-1 bg-foreground text-secondary px-6 py-3 font-bold text-sm md:text-base uppercase shadow-lg clip-arrow">
        {title}
      </div>
    </div>
  );
};

export default Hero;
