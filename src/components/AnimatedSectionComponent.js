// AnimatedSection.js
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const AnimatedSection = ({ children, animationClass }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onEnterViewport = () => {
    setIsVisible(true);
  };

  const onExitViewport = () => {
    setIsVisible(false);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <section
        className={`${isVisible ? animationClass : ""}`}
      >
        {children}
      </section>
    </ScrollTrigger>
  );
};

export default AnimatedSection;
