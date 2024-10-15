import React from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Outro from "./components/Hero/Outro.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {
  Card,
  CardContent,
  CardHoverLayer,
  CardDescription,
} from "../src/components/ui/card.jsx";

import Hijacked from "./assets/Hijacked.mp4";
import Shipment from "./assets/Shipment.mp4";
import FiringRange from "./assets/FiringRange.mp4";
import Rust from "./assets/Rust.mp4";
import FAQs from "./components/FAQ/faqs.jsx";
import PrizePool from "./components/Prize/PrizePool.jsx";

import SIGKDD from "./assets/SIGKDD.png";

const App = () => {
  const missions = [
    {
      name: "HEALTHCARE",
      image: Hijacked,
      description:
        "Gear up and deploy cutting-edge solutions that can be game-changers in the medical field. Whether you're crafting AI-driven diagnostics or building advanced systems to improve patient care, this mission is about creating tech that saves lives.",
    },
    {
      name: "NLP",
      image: Rust,
      description:
        "Engage in Natural Language Processing, where words are your weapon. Just like calling out targets in COD, your models will understand, interpret, and respond with precision. Deploy algorithms that crack the language code and conquer communication.",
    },
    {
      name: "OPEN CV",
      image: Shipment,
      description:
        "Enter the battlefield of Computer Vision, where your AI sees the world like a UAV in COD. Train models to detect, track, and analyze with pinpoint accuracy. Your mission: ensure no object goes unseen, no detail missed.",
    },
    {
      name: "EDTECH",
      image: FiringRange,
      description:
        "Gear up for the EdTech track, where you'll revolutionize learning like a tactical strike in COD. Build tools that empower students and educators, ensuring knowledge is deployed swiftly and effectively. Education is your mission; innovation is your weapon.",
    },
  ];

  const sponsors = [
    { name: "ACM SIGKDD", image: SIGKDD }
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <PrizePool />
      <Timer />
      <About />

      <div className="px-12 py-6">
        <div className="flex justify-center items-center mb-8">
          <div
            className="text-6xl mt-2 text-white tracking-wider"
            style={{ fontFamily: "Black Ops One, sans-serif" }}
          >
            CHOOSE YOUR MISSION
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {missions.map((mission, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-2 border-amber-500 text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 relative"
              onMouseEnter={(e) => {
                const hoverLayer =
                  e.currentTarget.querySelector(".card-hover-layer");
                hoverLayer.classList.add("opacity-100");
                hoverLayer.style.height = "80%";
              }}
              onMouseLeave={(e) => {
                const hoverLayer =
                  e.currentTarget.querySelector(".card-hover-layer");
                hoverLayer.classList.remove("opacity-100");
                hoverLayer.style.height = "0";
              }}
            >
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    src={mission.image}
                    alt={mission.name}
                    style={{ width: "100%", height: "420px" }}
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-amber-500">
                    {mission.name}
                  </h3>
                </div>
              </CardContent>
              <CardHoverLayer className="card-hover-layer">
                <CardDescription>{mission.description}</CardDescription>
              </CardHoverLayer>
            </Card>
          ))}
        </div>
      </div>

      <div className="px-12 py-6 mb-8">
        <h2
          className="text-6xl mb-6 text-white text-center"
          style={{ fontFamily: "Black Ops One, sans-serif" }}
        >
          OUR SPONSORS
        </h2>
        <div className="slider">
          <div className="slide-track">
            <div className="slide"><img className="sponsor-img" src={SIGKDD} alt="Image 1" /></div>
            <div className="slide"><img className="sponsor-img" src={SIGKDD} alt="Image 2" /></div>
            <div className="slide"><img className="sponsor-img" src={SIGKDD} alt="Image 3" /></div>

            <div className="slide"><img className="sponsor-img" src={SIGKDD} alt="Image 1" /></div>
            <div className="slide"><img className="sponsor-img" src={SIGKDD} alt="Image 2" /></div>
            <div className="slide"><img className="sponsor-img" src={SIGKDD} alt="Image 3" /></div>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-amber-500 text-white overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-amber-500/50"
            >
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    style={{ width: "100%", height: "100px" }}
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-bold text-center text-amber-500">
                    {sponsor.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
      
      <Outro />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
