import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWeebly,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container mx-auto py-16 flex flex-col px-5 md:flex-row space-y-12 md:space-y-0">
        <div className="md:w-1/3 space-y-3">
          <h1 className="text-3xl font-bold text-logoGreen">REACT.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex space-x-3">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaGithub size={30} />
            <FaLinkedin size={30} />
            <FaWeebly size={30} />
          </div>
        </div>
        <div className="md:w-2/3 flex justify-around flex-wrap  md:flex-row md:space-y-0">
          <div className="w-1/2 md:w-auto">
            <h4 className="font-bold mb-3 text-logoGreen">Solutions</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="">
                Pricing
              </a>
              <a href="#" className="">
                Documentation
              </a>
              <a href="#" className="">
                Guides
              </a>
              <a href="#" className="">
                API Status
              </a>
            </div>
          </div>
          <div className="w-1/2 md:w-auto">
            <h4 className="font-bold mb-3 text-logoGreen">Company</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="">
                About
              </a>
              <a href="#" className="">
                Blog
              </a>
              <a href="#" className="">
                Jobs
              </a>
              <a href="#" className="">
                Press
              </a>
              <a href="#" className="">
                Careers
              </a>
            </div>
          </div>
          <div className="w-1/2 md:w-auto mt-5 md:mt-0">
            <h4 className="font-bold mb-3 text-logoGreen">Support</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="">
                Analytics
              </a>
              <a href="#" className="">
                Marketing
              </a>
              <a href="#" className="">
                Commerce
              </a>
              <a href="#" className="">
                Insights
              </a>
            </div>
          </div>
          <div className="w-1/2 md:w-auto mt-5 md:mt-0">
            <h4 className="font-bold mb-3 text-logoGreen">Legal</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="">
                Claim
              </a>
              <a href="#" className="">
                Policy
              </a>
              <a href="#" className="">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
