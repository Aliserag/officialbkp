const pressItems = [
  {
    image: "https://i.imgur.com/unOWcjr.png",
    title: "Article Title 1",
    link: "https://www.example.com/article1",
  },
  {
    image: "https://i.imgur.com/unOWcjr.png",
    title: "Article Title 2",
    link: "https://www.example.com/article2",
  },
  // Add more press items here
];

const Press = () => {
  return (
    <section className="bg-white text-gold py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Press</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <div
              key={index}
              className="press-card relative overflow-hidden rounded-lg border-2 border-gold transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <div className="press-card-overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 transition-opacity duration-300" />
              <div className="press-card-content absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
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

export default Press;
