import React, { useEffect, useRef, useState } from "react";
import Typed from "react";
import { init } from "ityped";

const HeroSection = () => {
  let loading = true;
  const startTyping = (textRef) => {
    loading = false;
    init(textRef, {
      backDelay: 1500,
      showCursor: true,
      strings: ["BTB", "BTC", "SAAS"],
    });
  };
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current && loading ? startTyping(textRef.current) : null;
  }, []);
  return (
    <div id="hero">
      <div className="container mx-auto text-center mb-20 mt-32 md:mb-32">
        <div className="space-y-3">
          <p className="text-logoGreen uppercase text-xs">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">Grow with data.</h1>
          <div className="md:text-2xl">
            Fast, flexible financing for{" "}
            <span className="text-logoGreen" ref={textRef}></span>
          </div>
          <p className="text-gray-500 max-w-md mx-auto px-5 m">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platforms.
          </p>
        </div>

        <button className="bg-logoGreen text-black rounded-md py-2 px-12 mt-10">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
