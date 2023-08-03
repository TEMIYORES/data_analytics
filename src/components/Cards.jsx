import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div id="cards" className="bg-white text-black">
      <div className="container flex flex-col md:space-x-6 py-32 mx-auto md:flex-row px-5">
        <div className="w-[90%] mx-auto md:w-1/3 rounded-lg hover:scale-95 duration-100">
          <div className=" relative flex flex-col bg-white drop-shadow-lg text-center justify-center items-center p-8 lg:p-16">
            <img src={single} alt="" className="h-12 absolute -top-8" />
            <h3 className="text-2xl font-bold">Single User</h3>
            <h2 className="text-3xl font-bold my-6 lg:text-5xl">$149</h2>
            <div className="flex flex-col w-[100%]">
              <span className="border-b border-b-gray-200 py-4">
                500 GB Storage
              </span>
              <span className="border-b border-b-gray-200 py-4">
                1 Granted User
              </span>
              <span className="border-b border-b-gray-200 py-4">
                Send up to 2 GB
              </span>
            </div>
            <button className="bg-logoGreen text-black font-bold rounded-md py-2 px-12 mt-10">
              Start Trial
            </button>
          </div>
        </div>
        <div className="my-24 w-[90%] mx-auto md:w-1/3 md:my-0">
          <div className=" relative flex flex-col bg-gray-100 drop-shadow-lg hover:scale-95 duration-100 text-center justify-center items-center p-8 lg:py-20">
            <img src={double} alt="" className="h-12 absolute -top-8" />
            <h3 className="text-2xl font-bold">Double User</h3>
            <h2 className="text-3xl font-bold my-6 lg:text-5xl">$199</h2>
            <div className="flex flex-col w-[100%]">
              <span className="border-b border-b-gray-200 py-4">
                500 GB Storage
              </span>
              <span className="border-b border-b-gray-200 py-4">
                1 Granted User
              </span>
              <span className="border-b border-b-gray-200 py-4">
                Send up to 2 GB
              </span>
            </div>
            <button className="bg-black text-logoGreen font-bold rounded-md py-2 px-12 mt-10">
              Start Trial
            </button>
          </div>
        </div>
        <div className=" w-[90%] mx-auto md:w-1/3">
          <div className=" relative flex flex-col bg-white drop-shadow-lg hover:scale-95 duration-100 text-center justify-center items-center p-8 lg:p-16">
            <img src={triple} alt="" className="h-12 absolute -top-8" />
            <h3 className="text-2xl font-bold">Third User</h3>
            <h2 className="text-3xl font-bold my-6 lg:text-5xl">$200</h2>
            <div className="flex flex-col w-[100%]">
              <span className="border-b border-b-gray-200 py-4">
                500 GB Storage
              </span>
              <span className="border-b border-b-gray-200 py-4">
                1 Granted User
              </span>
              <span className="border-b border-b-gray-200 py-4">
                Send up to 2 GB
              </span>
            </div>
            <button className="bg-logoGreen text-black font-bold rounded-md py-2 px-12 mt-10">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
