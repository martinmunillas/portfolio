import React from "react";
import { Box } from "@quaantum/components";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Background from "../components/Background";

const Home: React.FC = () => {
  return (
    <Box>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
