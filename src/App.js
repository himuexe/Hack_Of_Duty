import React from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Outro from "./components/Hero/Outro.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Timer />
      <About />
      <Outro />
    </div>
  );
};

export default App;
