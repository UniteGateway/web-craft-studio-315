const Partners = () => {
  const partners = [
    { name: "INDUSTRIAL SOLAR", logo: "INDUSTRIAL\nSOLAR" },
    { name: "TATA WAAREE", logo: "TATA\nWAAREE" },
    { name: "WAAREE VIKRAM", logo: "WAAREE\nVIKRAM" },
    { name: "SATVIK", logo: "SATVIK" },
  ];

  return (
    <section className="bg-white py-12 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-primary font-black text-xl md:text-2xl whitespace-pre-line leading-tight">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
