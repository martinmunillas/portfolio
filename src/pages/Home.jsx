import React from "react";

import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

import "../assets/styles/main.scss";

const Home = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
        <Header></Header>
      </div>

      <div className="About">
        <About></About>
      </div>
      <div className="work">
        <Work></Work>
      </div>
      <div className="contact">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
