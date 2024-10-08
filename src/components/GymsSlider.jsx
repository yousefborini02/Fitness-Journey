import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

// Custom Arrow Component
const CustomArrow = ({ className, style, onClick, direction }) => {
  const arrowPath = direction === "left"
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
        // color: "white",
        zIndex: 1,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={arrowPath} />
      </svg>
    </div>
  );
};

// GymCard Component
const GymCard = ({ gym }) => {
  return (
    <div className="px-2">
      <div className="relative flex flex-col rounded-xl bg-[#0000] text-gray-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="relative mx-4 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
          <img
            src={gym.image}
            alt={gym.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-l font-semibold text-[#3CB347]">{gym.name}</h5>
          <p className="text-base font-light text-white">
            {gym.description}
          </p>
        </div>
        <div className="p-6 pt-0 flex justify-center">
          <Link to="/gymdetails">
            <Button title="View Details" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// GymsSlider Component
const GymsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  const gyms = [
    {
      name: "Gym 1",
      description: "Description for Gym 1",
      image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Gym 2",
      description: "Description for Gym 2",
      image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Gym 3",
      description: "Description for Gym 3",
      image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Gym 4",
      description: "Description for Gym 4",
      image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Gym 5",
      description: "Description for Gym 5",
      image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    appendDots: dots => (
      <div
        style={{
          position: "relative",
          bottom: "10px",
          width: "100%",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <ul
          style={{
            margin: "0px",
            padding: "0px",
            display: "inline-block",
            listStyle: "none",
          }}
        >
          {dots.map((dot, index) => (
            <li
              key={index}
              style={{
                display: "inline-block",
                margin: "0 5px",
              }}
            >
              {React.cloneElement(dot, {
                style: {
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: activeIndex === index ? "#3CB347" : "white",
                  border: "1px solid white",
                },
                onClick: () => setActiveIndex(index),  // Update active index on click
              })}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          border: "1px solid white",
        }}
      />
    ),
    beforeChange: (current, next) => setActiveIndex(next),  // Update active index before slide change
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`bg-[#0000] h-[80vh] text-black relative transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      ref={ref}
    >
      <h1 className="text-4xl font-semibold text-center py-8 text-[#3CB347]">Gyms</h1>
      <div className="container mx-auto px-4 mb-8">
        <Slider {...settings} className="relative">
          {gyms.map((gym, index) => (
            <GymCard key={index} gym={gym} />
          ))}
        </Slider>
        <div className="flex justify-center mt-8">
          <Link to="/gymcatalog">
          <Button title="See all gyms" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GymsSlider;
