import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const workingHours = [
  { day: "Monday", hours: "6:00-23:00" },
  { day: "Tuesday", hours: "6:00-23:00" },
  { day: "Wednesday", hours: "6:00-23:00" },
  { day: "Thursday", hours: "6:00-23:00" },
  { day: "Friday", hours: "6:00-23:00" },
  { day: "Saturday", hours: "8:00-22:00" },
  { day: "Sunday", hours: "8:00-22:00" },
];

const GymDetails = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white pt-20 ">
        {/* Image Slider */}
        <div className="relative ">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={500}
            
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </div>
          </Carousel>
        </div>

        {/* Content Below Slider */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="container mx-auto px-4">
            {/* Gym Name and Ratings */}
            <div className="flex flex-col lg:items-start mb-8">
              <h1 className="text-4xl font-bold text-[#3CB347] mb-4 lg:mb-0 lg:mr-4">GYM NAME</h1>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-[#3CB347]">star</span>
                  <span className="text-white">user rating :</span>
                  <span className="bg-[#3CB347] text-white px-2 py-1 rounded">9.2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-[#3CB347]">chat_bubble_outline</span>
                  <span>Comments : 100</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#3CB347]">Working hours</h2>
              <div className="border-b border-gray-600 my-2"></div>
              {workingHours.map((day, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <span>{day.day}</span>
                  <span>{day.hours}</span>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#3CB347]">Contact Information</h2>
              <div className="mt-4 flex flex-col space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="material-icons text-green-500">phone</span>
                  <span>+96278768516</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="material-icons text-blue-500">facebook</span>
                  <span>Facebook</span>
                </div>
              </div>
            </div>

            {/* Comments and Ratings */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#3CB347]">Comments and Ratings (100)</h2>
              <div className="border-b border-gray-600 my-2"></div>
              <div className="flex space-x-8 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-[#3CB347]">star</span>
                  <span className="bg-[#3CB347] text-white px-2 py-1 rounded">9.2</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span>Equipment</span>
                    <span>9.2</span>
                  </div>
                  <div className="w-[200px] bg-gray-200 h-2 rounded">
                    <div className="bg-[#3CB347] h-2 rounded" style={{ width: "92%" }}></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Staff</span>
                    <span>9.2</span>
                  </div>
                  <div className="w-[200px] bg-gray-200 h-2 rounded">
                    <div className="bg-[#3CB347] h-2 rounded" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span>Equipment</span>
                    <span>9.2</span>
                  </div>
                  <div className="w-[200px] bg-gray-200 h-2 rounded">
                    <div className="bg-[#3CB347] h-2 rounded" style={{ width: "92%" }}></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Staff</span>
                    <span>9.2</span>
                  </div>
                  <div className="w-[200px] bg-gray-200 h-2 rounded">
                    <div className="bg-[#3CB347] h-2 rounded" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Leave your comment"
                  className="w-full py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3CB347] max-w-full text-lg"
                />
              </div>
              <div className="mt-4 flex space-x-2">
                <span className="material-icons text-[#3CB347]">star</span>
                <span className="material-icons text-[#3CB347]">star</span>
                <span className="material-icons text-[#3CB347]">star</span>
                <span className="material-icons text-[#3CB347]">star</span>
                <span className="material-icons text-[#3CB347]">star_half</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GymDetails;
