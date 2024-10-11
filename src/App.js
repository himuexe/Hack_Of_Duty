import React from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Timer from "./components/Timer/Timer.jsx";  

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Timer />  
      <About />
    </div>
  );
};

export default App;