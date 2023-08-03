import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
