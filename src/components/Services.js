import React from "react";

const services = [
  {
    title: "Kri8 Labs",
    url: "https://www.kri8labs.com/",
  },
  {
    title: "Kri8 Universe",
    url: "https://www.kri8.ca/",
  },
  {
    title: "ShopVid",
    url: "https://shopvid.io/",
  },
  {
    title: "Coal Harbour",
    url: "https://coalharbourproductions.com/",
  },
];

const Services = () => {
  return (
    <section className="bg-slate-800 text-gold py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card p-6 border-2 border-gold rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                efficitur felis eu orci ultrices, sit amet tempus sem dapibus.
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
