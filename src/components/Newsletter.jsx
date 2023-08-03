import React from "react";

const Newsletter = () => {
  return (
    <div id="newsletter">
      <div className="container my-16 flex flex-col items-center mx-auto justify-between space-y-5 text-white px-5 md: md:flex-row md:my-20">
        <div className="mx-auto text-center md:w-2/3 md:text-left">
          <h2 className="font-bold text-3xl mb-3 md:text-4xl max-w-lg">
            Want tips & tricks to optimize your flow?
          </h2>
          <h5 className="">Sign up to our newsletter and stay up to date.</h5>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2 md:items-start">
          <div className="flex mx-auto flex-col items-center justify-center md:flex-row md:space-x-2 md:mx-0">
            <input
              type="email"
              className="rounded-lg py-2 px-6 text-black focus:outline-none md:w-[60%] lg:w-auto"
              placeholder="Enter your email"
            />
            <button className="bg-logoGreen text-black rounded-md py-2 px-6 mt-3 md:mt-0 md:px-4">
              Notify Me
            </button>
          </div>

          <p className="flex flex-col space-y-2 text-center items-center justify-center mt-5 md:items-left xl:flex-row lg:space-y-0">
            <span>We care bout the protection of your data.</span>
            <a href="#" className="text-logoGreen pl-1">
              Read our Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
