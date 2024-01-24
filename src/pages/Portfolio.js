import React from "react";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Work,
  ContactMe,
  Footer,
} from "@/components/index";
    
const Portfolio = () => {
  return (
    <div className="flex flex-col w-flex h-fit mx-auto ">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Portfolio;
