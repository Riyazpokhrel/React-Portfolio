// src/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <nav className="flex flex-wrap justify-between items-center p-6">
        <div className="text-2xl font-bold">RIYAZ</div>
        <ul className="hidden md:flex flex-wrap space-x-6 mt-4 md:mt-0">
          <li>
            <Link to="#home" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="#services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="#project" className="hover:text-gray-400">
              Our Project
            </Link>
          </li>
          <li>
            <Link to="#about" className="hover:text-gray-400">
              About us
            </Link>
          </li>
        </ul>
        <button className="border border-white px-4 py-2 mt-4 md:mt-0 hover:bg-white hover:text-[#1b1b38] transition">
          Contact us
        </button>
      </nav>
      <header className="flex flex-col-reverse md:flex-row justify-between items-center px-6 py-16">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            Build Your Awesome Platform
          </h1>
          <p className="mt-4 text-gray-300">
            Riyaz studio is a digital studio that offers several services such
            as UI/UX Design and Frontend to developers. We will provide the best
            service for those of you who use our services.
          </p>

          <Link
            to="#services"
            className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Our Services
          </Link>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/src/Images/image.png"
            alt="Hero"
            className="rounded-lg shadow-lg w-full md:w-auto h-[400px]"
          />
        </div>
      </header>
      {/* Mobile Menu */}
      <div className="md:hidden block text-center mt-4">
        <ul className="flex flex-col space-y-4">
          <li>
            <Link to="#home" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="#services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="#project" className="hover:text-gray-400">
              Our Project
            </Link>
          </li>
          <li>
            <Link to="#about" className="hover:text-gray-400">
              About us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
