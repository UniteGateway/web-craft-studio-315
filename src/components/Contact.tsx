import { Phone, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-secondary-foreground">
          <a 
            href="tel:9667660773" 
            className="flex items-center gap-3 text-2xl md:text-4xl font-bold hover:scale-105 transition-transform"
          >
            <Phone className="h-8 w-8 md:h-10 md:w-10" />
            9667660773
          </a>
          <span className="hidden md:block text-4xl font-light">|</span>
          <a 
            href="https://www.unitesolar.in" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-2xl md:text-4xl font-bold hover:scale-105 transition-transform"
          >
            <Globe className="h-8 w-8 md:h-10 md:w-10" />
            www.unitesolar.in
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
