import React from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Outro from "./components/Hero/Outro.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FAQs from "./components/FAQ/faqs.jsx";
import PrizePool from "./components/Prize/PrizePool.jsx";
import Sponsors from "./components/Sponsors/Sponsors.jsx";
import Bonus from "./components/Bonus/Bonus.jsx"; // Import the new Bonus component
import Cards from "./components/Cards/Cards.jsx"; // Import the new Cards component
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PrizePool />
      <Timer />
      <About />
      <Cards /> {/* Use the new Cards component */}
      <Bonus />
      <Sponsors /> {/* Use the new Sponsors component */}
      <Outro />
      <FAQs />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
