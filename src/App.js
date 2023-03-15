// App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import Services from "./components/Services";
import WorkedWith from "./components/WorkedWith";
import Socials from "./components/Socials";
import Press from "./components/Press";
import Awards from "./components/Awards";
import AnimatedSection from "./components/AnimatedSectionComponent.js";

import "animate.css/animate.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroVideo />
      <div className="bg-slate-800 pt-10 pb-10">
        <AnimatedSection animationClass="animate__animated animate__fadeInLeft">
          <Services />
        </AnimatedSection>
      </div>
      <AnimatedSection animationClass="animate__animated animate__fadeInRight">
        <WorkedWith />
      </AnimatedSection>
      <AnimatedSection animationClass="animate__animated animate__fadeInUp">
        <Socials />
      </AnimatedSection>
      <AnimatedSection animationClass="animate__animated animate__fadeInUp">
        <Press />
      </AnimatedSection>
      <AnimatedSection animationClass="animate__animated animate__fadeInUp">
        <Awards />
      </AnimatedSection>
    </div>
  );
}

export default App;
