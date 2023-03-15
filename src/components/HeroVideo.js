import React from "react";

const HeroVideo = () => {
  return (
    <div className=" h-screen">
      <video
        className=" w-full h-full object-cover"
        src="https://www.officialbkp.com/image/catalog/pages/home/officialbkp-bkreative-productions.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default HeroVideo;
