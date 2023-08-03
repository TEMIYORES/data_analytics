import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  return (
    <nav id="nav" className="">
      <div className="container flex justify-between items-center mx-auto p-5">
        <h1 className="text-3xl font-bold text-logoGreen">REACT.</h1>
        <div className="space-x-4 hidden md:flex">
          <a
            href="#"
            onClick={() => setActive("home")}
            className={
              active == "home"
                ? "cursor-pointer duration-75 hover:text-logoGreen active"
                : "cursor-pointer duration-75 hover:text-logoGreen"
            }
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setActive("company")}
            className={
              active == "company"
                ? "cursor-pointer duration-75 hover:text-logoGreen active"
                : "cursor-pointer duration-75 hover:text-logoGreen"
            }
          >
            Company
          </a>
          <a
            href="#"
            onClick={() => setActive("resources")}
            className={
              active == "resources"
                ? "cursor-pointer duration-75 hover:text-logoGreen active"
                : "cursor-pointer duration-75 hover:text-logoGreen"
            }
          >
            Resources
          </a>
          <a
            href="#"
            onClick={() => setActive("about")}
            className={
              active == "about"
                ? "cursor-pointer duration-75 hover:text-logoGreen active"
                : "cursor-pointer duration-75 hover:text-logoGreen"
            }
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setActive("contact")}
            className={
              active == "contact"
                ? "cursor-pointer duration-75 hover:text-logoGreen active"
                : "cursor-pointer duration-75 hover:text-logoGreen"
            }
          >
            Contact
          </a>
        </div>
        <button
          className={
            toggle ? "open hamburger md:hidden" : "hamburger md:hidden"
          }
          onClick={() => setToggle(!toggle)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div
          className={
            toggle
              ? "fixed top-0 h-full w-[60%] sm:w-[40%] border-r bg-bgBlack border-r-gray-900 space-y-5 flex flex-col uppercase md:hidden ease-in-out duration-500"
              : "fixed top-0 h-full w-[0%] border-r border-r-gray-900 space-y-5 flex flex-col uppercase md:hidden left-[-100%] ease-in-out duration-500"
          }
        >
          <a href="#" className="text-3xl font-bold text-logoGreen my-5">
            REACT.
          </a>
          <a href="#" className="pb-5 border-b border-b-gray-900">
            Home
          </a>
          <a href="#" className="pb-5 border-b border-b-gray-900">
            Company
          </a>
          <a href="#" className="pb-5 border-b border-b-gray-900">
            Resources
          </a>
          <a href="#" className="pb-5 border-b border-b-gray-900">
            About
          </a>
          <a href="#" className="pb-5 border-b border-b-gray-900">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
