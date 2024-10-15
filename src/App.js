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

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import placeholder from "./assets/placeholder.svg";
import FAQs from "./components/FAQ/faqs.jsx";

const App = () => {
  const missions = [
    {
      name: "HEALTHCARE",
      image: img1,
      description: "Innovating healthcare solutions.",
    },
    {
      name: "NLP",
      image: img2,
      description: "Natural Language Processing advancements.",
    },
    {
      name: "OPEN CV",
      image: img3,
      description: "Computer vision technology.",
    },
    {
      name: "EDTECH",
      image: img4,
      description: "Education technology for the future.",
    },
  ];

  const sponsors = [
    { name: "Sponsor 1", image: placeholder },
    { name: "Sponsor 2", image: placeholder },
    { name: "Sponsor 3", image: placeholder },
    { name: "Sponsor 4", image: placeholder },
    { name: "Sponsor 5", image: placeholder },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <Timer />
      <About />

      <div className="px-12 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1
            className="text-6xl mt-2 font-bold text-white tracking-wider"
            style={{ fontFamily: "Black Ops One, sans-serif" }}
          >
            CHOOSE YOUR MISSION
          </h1>
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
                  <img
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
        <h2 className="text-4xl font-bold mb-6 text-amber-500">OUR SPONSORS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap -4">
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
        </div>
      </div>

      <Outro />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
