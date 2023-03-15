import React from "react";

const socialsItems = [
  {
    name: "Facebook",
    icon: "https://i.imgur.com/DnvLCr8.png",
    link: "https://www.facebook.com/officialbkp/",
  },
  {
    name: "Instagram",
    icon: "https://i.imgur.com/DPyeDF3.png",
    link: "https://www.instagram.com/officialbkp/",
  },
  {
    name: "Twitter",
    icon: "https://i.imgur.com/FNd8DuC.png",
    link: "https://mobile.twitter.com/Officialbkp",
  },
];

const Socials = () => {
  return (
    <section className="bg-black text-gold py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Socials</h2>
        <ul className="flex flex-wrap justify-center items-center gap-8">
          {socialsItems.map((item, index) => (
            <li key={index} className="group">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-20 h-16 p-4 rounded-full border-2 border-[gold] bg-[gold] hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`w-full h-auto object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 ${
                    item.name === "Twitter" ? " h-3/4" : ""
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Socials;
