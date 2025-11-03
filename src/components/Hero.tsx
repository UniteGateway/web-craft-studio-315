import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import uniteLogo from "@/assets/unite-logo.png";
import solarHero from "@/assets/solar-hero-bg.jpg";
import businessWoman from "@/assets/business-woman.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[hsl(200,60%,85%)] to-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${solarHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative container mx-auto px-4 py-8">
        <header className="mb-12">
          <img 
            src={uniteLogo} 
            alt="Unite Solar" 
            className="h-16 md:h-20"
          />
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight">
                ZERO INVESTMENT<br />
                OWN YOUR SOLAR PLANT!
              </h1>
              <div className="inline-block bg-secondary px-8 py-3 transform -skew-x-6">
                <p className="text-2xl md:text-3xl font-bold text-secondary-foreground skew-x-6">
                  Industries & Rice Mills
                </p>
              </div>
            </div>

            <div className="bg-primary/90 backdrop-blur-sm p-8 rounded-lg space-y-4 text-primary-foreground shadow-2xl">
              <p className="text-2xl font-bold">Pay Power Bill as EMI.</p>
              <p className="text-xl font-semibold">
                No Maintenance, No Cleaning,<br />
                No Insurance, No AMC<br />
                <span className="text-secondary text-3xl font-black">All 5 Years FREE!</span>
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-8 py-6 h-auto font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="mr-2 h-6 w-6" />
              Call Now: 9667660773
            </Button>
          </div>

          <div className="relative">
            <img 
              src={businessWoman} 
              alt="Professional Business Consultant" 
              className="absolute -top-20 -right-10 w-64 md:w-80 lg:w-96 z-10 drop-shadow-2xl"
            />
            <div className="grid grid-cols-1 gap-6 relative z-0">
              <FeatureBadge
                number="30"
                unit="Years"
                title="30 Years"
                description="Performance Warranty"
              />
              <FeatureBadge 
                number="12"
                unit="Years"
                title="12 Years"
                description="Product Warranty"
              />
              <FeatureBadge 
                number="10"
                unit="Years"
                title="Toy Maintenance,"
                description="No Cleaning, No Insurance, No AMC"
              />
              <FeatureBadge 
                number="80"
                unit="%"
                suffix="FREE"
                title="100% Maintenance,"
                description="Insurance Cleaning Free 5"
              />
              <FeatureBadge 
                icon="📈"
                title="Helps 80%"
                description="Fuel Savings During 30 FRS"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureBadgeProps {
  number?: string;
  unit?: string;
  suffix?: string;
  icon?: string;
  title: string;
  description: string;
}

const FeatureBadge = ({ number, unit, suffix, icon, title, description }: FeatureBadgeProps) => {
  return (
    <div className="flex items-center gap-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex-shrink-0">
        {icon ? (
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-[hsl(30,100%,60%)] flex items-center justify-center text-4xl shadow-lg">
            {icon}
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-[hsl(30,100%,60%)] flex flex-col items-center justify-center text-white shadow-lg">
            <div className="text-3xl font-black leading-none">{number}</div>
            <div className="text-sm font-bold leading-none mt-1">{unit}</div>
            {suffix && <div className="text-xs font-bold mt-1">{suffix}</div>}
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="bg-primary text-primary-foreground px-4 py-3 rounded-lg">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm font-semibold opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
