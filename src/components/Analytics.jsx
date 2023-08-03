import React from "react";
import laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div id="analytics " className="bg-white">
      <div className="container flex flex-col space-y-5 items-center justify-center text-black mx-auto my-16 py-16 px-5 md:flex-row">
        <img src={laptop} alt="" className="md:w-1/2" />
        <div className=" text-center md:w-1/2 md:text-left">
          <div className="space-y-3">
            <h5 className="text-logoGreen uppercase font-bold text-md md:text-2xl">
              DATA ANALYTICS DASHBOARD
            </h5>
            <h5 className="font-bold text-4xl">
              Manage Data Analytics Centrally
            </h5>
            <p className="text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
          </div>
          <button className="bg-logoGreen text-black rounded-md py-2 px-12 mt-10">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
