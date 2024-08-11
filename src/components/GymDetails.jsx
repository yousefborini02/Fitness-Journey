import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const workingHours = [
  { day: "Monday", hours: "6:00-23:00" },
  { day: "Tuesday", hours: "6:00-23:00" },
  { day: "Wednesday", hours: "6:00-23:00" },
  { day: "Thursday", hours: "6:00-23:00" },
  { day: "Friday", hours: "6:00-23:00" },
  { day: "Saturday", hours: "8:00-22:00" },
  { day: "Sunday", hours: "8:00-22:00" },
];

// Custom Arrow Component
const CustomArrow = ({ className, style, onClick, direction }) => {
  const arrowPath =
    direction === "left"
      ? "M15.75 19.5L8.25 12l7.5-7.5"
      : "M8.25 4.5L15.75 12l-7.5 7.5";

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 1,
        fontSize: "24px",
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        ...(direction === "left" ? { left: "-30px" } : { right: "-30px" }),
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={arrowPath} stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
};

const GymDetails = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="bg-black text-white pt-20">
        {/* Image Slider */}
        <div className="relative mx-4 lg:mx-16">
          <Slider {...settings}>
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                <img
                  src={`https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt={`image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Content Below Slider */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="container mx-auto px-4">
            {/* Gym Name and Ratings */}
            <div className="flex flex-col lg:items-start mb-8">
              <h1 className="text-4xl font-bold text-[#3CB347] mb-4 lg:mb-0 lg:mr-4 transition-transform duration-500 ease-in-out transform hover:scale-105">GYM NAME</h1>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex items-center space-x-2 animate-pulse">
                  <i className="fas fa-star text-[#3CB347]"></i>
                  <span className="text-white">user rating :</span>
                  <span className="bg-[#3CB347] text-white px-2 py-1 rounded">9.2</span>
                </div>
                <div className="flex items-center space-x-2 animate-pulse">
                  <i className="fas fa-comment-dots text-[#3CB347]"></i>
                  <span>Comments : 100</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#3CB347]">Working hours</h2>
              <div className="border-b border-gray-600 my-2"></div>
              {workingHours.map((day, index) => (
                <div key={index} className="flex justify-between mb-2 animate-fadeIn">
                  <span>{day.day}</span>
                  <span>{day.hours}</span>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#3CB347]">Contact Information</h2>
              <div className="mt-4 flex flex-col space-y-2">
                <div className="flex items-center space-x-4 animate-fadeIn">
                  <i className="fas fa-phone text-green-500"></i>
                  <span>+96278768516</span>
                </div>
                <div className="flex items-center space-x-4 animate-fadeIn">
                  <i className="fab fa-facebook text-blue-500"></i>
                  <span>Facebook</span>
                </div>
              </div>
            </div>

            {/* Comments and Ratings */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#3CB347]">Comments and Ratings (100)</h2>
              <div className="border-b border-gray-600 my-2"></div>
              <div className="flex flex-col lg:flex-row lg:space-x-8 mb-4 animate-fadeIn">
                <div className="flex flex-col space-y-2 lg:w-1/2">
                  {['Equipment', 'Environment'].map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{category}</span>
                        <span>9.2</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className="bg-[#3CB347] h-full rounded"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Leave your comment"
                  className="w-full h-14 py-3 px-5 rounded-lg hover:shadow-md transition-all bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#3CB347] text-lg"
                />
                <div className="flex space-x-2 mt-4">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="material-icons text-[#3CB347]">
                      {index < 4 ? 'star' : 'star_half'}
                    </span>
                  ))}
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#3CB347]">Gym Location</h2>
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.408876060918!2d35.89929291513542!3d31.953949881225993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f88ee11cf23%3A0x57bfcd7e42a7685!2sAmman%2C%20Jordan!5e0!3m2!1sen!2s!4v1691505168046!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* <div className="mb-8">
                <label htmlFor="rating" className="font-bold text-[#3CB347]">Rate Us:</label>
                <select
                  id="rating"
                  name="rating"
                  className="ml-2 py-1 px-3 bg-[#222] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB347]"
                >
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>

              <div className="flex justify-center">
                <button className="bg-[#3CB347] text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all">
                  Submit
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GymDetails;
