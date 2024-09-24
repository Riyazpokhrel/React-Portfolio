import React from "react";

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center flex-grow px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
          Get in Touch with Us
        </h1>
        <p className="mt-4 max-w-xl text-gray-300">
          We're here to provide you with the best service. Reach out to us for
          any inquiries or support.
        </p>
        <button className="mt-10 px-8 py-3 sm:px-10 sm:py-4 bg-blue-600 text-white rounded-full text-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
          Contact Us
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to to-black text-white py-8 border-t border-gray-700">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6 lg:mb-0">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              {/* Placeholder for Logo */}
              <span className="text-xl font-bold text-black">R</span>
            </div>
            <span className="ml-4 text-xl font-bold">Riyaz Studio</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6 lg:mb-0">
            <a href="#" className="hover:underline mb-2 lg:mb-0">
              Support
            </a>
            <a href="#" className="hover:underline mb-2 lg:mb-0">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 Riyaz Studio, All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
