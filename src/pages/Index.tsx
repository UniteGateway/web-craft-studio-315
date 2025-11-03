import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Unite Solar - Zero Investment Solar Plants for Industries & Rice Mills</title>
        <meta name="description" content="Own your solar plant with zero investment. Pay power bill as EMI. 30 years performance warranty, 12 years product warranty. No maintenance, no cleaning, no insurance for 5 years." />
        <meta name="keywords" content="solar energy, industrial solar, rice mill solar, zero investment solar, solar plant, solar power, renewable energy" />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <Contact />
        <Partners />
      </div>
    </>
  );
};

export default Index;
