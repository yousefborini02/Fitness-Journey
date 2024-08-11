import React from "react";
import Button from "../layouts/Button";
import { AiTwotonePhone, AiOutlineMail, AiTwotoneHome } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsTwitterX } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <style>
        {`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideInUp {
            animation: slideInUp 1s ease-out;
          }
        `}
      </style>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-5xl bg-[#222] text-white rounded-lg shadow-lg p-8 transform transition-transform duration-500 hover:scale-105 animate-slideInUp">
          <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
            {/* Contact Form Section */}
            <form className="w-full lg:w-2/5 space-y-5 pt-10 lg:pt-0 animate-slideInUp ">
              <h1 className="text-4xl font-semibold text-[#3CB347] text-center">Send Message</h1>
              <div className="flex flex-col">
                <label htmlFor="userName" className="mb-1 text-lg">Your Name</label>
                <input
                  className="py-3 px-5 rounded-lg bg-[#333] text-gray-300 border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#3CB347] text-lg"
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userEmail" className="mb-1 text-lg">Your Email</label>
                <input
                  className="py-3 px-5 rounded-lg bg-[#333] text-gray-300 border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#3CB347] text-lg"
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userNumber" className="mb-1 text-lg">Your Number</label>
                <input
                  className="py-3 px-5 rounded-lg bg-[#333] text-gray-300 border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#3CB347] text-lg"
                  type="number"
                  name="userNumber"
                  id="userNumber"
                  placeholder="Enter your Number"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userMessage" className="mb-1 text-lg">Your Message</label>
                <textarea
                  className="py-3 px-5 rounded-lg bg-[#333] text-gray-300 border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#3CB347] text-lg"
                  name="userMessage"
                  id="userMessage"
                  rows="4"
                  placeholder="Enter your Message"
                ></textarea>
              </div>
              <div className="flex justify-center space-y-4 mt-6">
                <Button title="Send Message" />
                {/* <Button title="Start a call" href="tel:+962-787685016" /> */}
              </div>
            </form>

            {/* Contact Information Section */}
            <div className="w-full lg:w-2/5 mt-8 lg:mt-0 lg:ml-8 animate-slideInUp">
              <h1 className="text-4xl font-semibold text-[#3CB347] text-center lg:text-left">Contact At</h1>
              <div className="flex flex-col items-center lg:items-start mt-6">
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-20 h-20 border-2 border-[#444] rounded-full bg-[#333]">
                    <AiTwotonePhone size={40} color="#3CB347" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold">Phone Number</p>
                    <p className="text-lg">+962-787685016</p>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-20 h-20 border-2 border-[#444] rounded-full bg-[#333]">
                    <AiOutlineMail size={40} color="#3CB347" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold">Email</p>
                    <p className="text-lg">yousefborinii@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-20 h-20 border-2 border-[#444] rounded-full bg-[#333]">
                    <AiTwotoneHome size={40} color="#3CB347" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold">Address</p>
                    <p className="text-lg">Amman-Jordan</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram
                    size={40}
                    className="hover:text-[#e53961] cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook
                    size={40}
                    className="hover:text-[#4267B2] cursor-pointer"
                  />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX
                    size={40}
                    className="hover:text-[#3f4549] cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
