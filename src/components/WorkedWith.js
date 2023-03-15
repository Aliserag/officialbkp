import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const workedWithItems = [
  {
    name: "Universal Studios",
    icon: "https://i.imgur.com/zFJ9Xi0.png",
    link: "https://www.universalstudios.com/",
  },
  {
    name: "Paramount",
    icon: "https://i.imgur.com/Q22Gjbt.png",
    link: "https://www.paramount.com/",
  },
  {
    name: "Sony",
    icon: "https://i.imgur.com/wegEmRS.png",
    link: "https://www.sony.com/",
  },
  {
    name: "Playstation",
    icon: "https://i.imgur.com/SYHXzRD.png",
    link: "https://www.playstation.com/",
  },
  {
    name: "Warner Bros",
    icon: "https://i.imgur.com/VjiYkiL.png",
    link: "https://www.warnerbros.com/",
  },
  {
    name: "BBC",
    icon: "https://i.imgur.com/unOWcjr.png",
    link: "https://www.bbc.com/",
  },
  {
    name: "Global Village",
    icon: "https://i.imgur.com/mtI09P1.png",
    link: "https://www.globalvillage.ae/",
  },
];

const WorkedWith = () => {
  return (
    <section className="bg-white text-gold py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Worked With</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={600}
          className="carousel-container"
        >
          {workedWithItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-gold p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="max-w-32 max-h-32 object-contain"
                />
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default WorkedWith;
