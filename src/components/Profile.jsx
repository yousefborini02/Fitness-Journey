import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, FaLock } from "react-icons/fa";
import Button from "../layouts/Button";

const slideInUp = {
  animationName: 'slideInUp',
  animationDuration: '1s',
  animationTimingFunction: 'ease-out',
};

const keyframes = `
  @keyframes slideInUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black">
      <Navbar />
      <style>{keyframes}</style>
      <div className="flex-grow flex flex-col items-center justify-center pt-20 md:pt-32 px-5">
        <div className="bg-[#222] mb-20 shadow-lg rounded-lg p-8 w-full max-w-3xl duration-500 hover:scale-105 " style={slideInUp}>
          <h2 className="text-4xl font-bold text-center mb-6 text-[#3CB347]">Profile</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaUser className="text-[#3CB347] text-2xl" />
              <input
                type="text"
                placeholder="Name"
                className="flex-grow p-3 border bg-[#333] border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB347] transition transform focus:scale-100"
              />
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#3CB347] text-2xl" />
              <input
                type="email"
                placeholder="Email"
                className="flex-grow p-3 border bg-[#333] border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB347] transition transform focus:scale-100"
              />
            </div>
            
            {/* <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#3CB347] text-2xl" />
              <input
                type="text"
                placeholder="Address"
                className="flex-grow p-3 border bg-[#333] border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB347] transition transform focus:scale-100"
              />
            </div> */}
            {/* <div className="flex items-center space-x-4">
              <FaCalendar className="text-[#3CB347] text-2xl" />
              <input
                type="date"
                className="flex-grow p-3 border bg-[#333] border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB347] transition transform focus:scale-100"
              />
            </div> */}
            <div className="flex items-center space-x-4">
              <FaLock className="text-[#3CB347] text-2xl" />
              <input
                type="password"
                placeholder="Password"
                className="flex-grow p-3 border bg-[#333] border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB347] transition transform focus:scale-100"
              />
            </div>
            <div className="flex items-center space-x-4">
              <FaLock className="text-[#3CB347] text-2xl" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-grow p-3 border bg-[#333] border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB347] transition transform focus:scale-100"
              />
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-[#3CB347] text-2xl" />
              <input
                type="tel"
                placeholder="Phone"
                className="flex-grow p-3 border bg-[#333] border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB347] transition transform focus:scale-100"
              />
            </div>
            <div className="flex justify-center mt-8">
              {/* <button className="bg-[#3CB347] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#2a8d32] transition transform hover:scale-105">
                Save Changes
              </button> */}
              <Button title="Save changes"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
