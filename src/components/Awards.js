import React from "react";
const awardsItems = [
  {
    title: "Award 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/award1",
  },
  {
    title: "Award 2",
    description:
      "Curabitur ullamcorper nisi id dui tincidunt, a lacinia purus bibendum.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/award2",
  },
  {
    title: "Award 3",
    description:
      "Integer bibendum justo at risus lacinia, sed hendrerit quam consequat.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/award3",
  },
  {
    title: "Award 4",
    description: "Vestibulum at ex lacinia, tincidunt mi in, posuere erat.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/award4",
  },
  {
    title: "Award 5",
    description: "Fusce vel dui auctor, viverra est id, vestibulum urna.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/award5",
  },
];
const Awards = () => {
  return (
    <section className="bg-white text-gold py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsItems.map((item, index) => (
            <div
              key={index}
              className="award-card relative overflow-hidden rounded-lg border-2 border-gold transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <div className="award-card-overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 transition-opacity duration-300" />
              <div className="award-card-content absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-bold hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
