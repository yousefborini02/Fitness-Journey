import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";

const PlansCard = (props) => {
  const features = {
    "1 Month Plan": [
      "30 visits",
      "Expires after 2 months",
      "Access to gym facilities during operational hours",
      "Use of advanced gym equipment",
      "Free group fitness classes",
    ],
    "3 Months Plan": [
      "90 visits",
      "Expires after 5 months",
      "Access to gym facilities during operational hours",
      "Use of advanced gym equipment",
      "Free group fitness classes",
      "2 free personal training sessions",
    ],
    "6 Months Plan": [
      "180 visits",
      "Expires after 8 months",
      "Access to gym facilities during operational hours",
      "Use of advanced gym equipment",
      "Free group fitness classes",
      "5 free personal training sessions",
      "Access to sauna and steam room",
    ],
  };

  return (
    <div className="flex flex-col bg-[#222] w-full md:w-1/3 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="font-semibold text-lg text-center text-white mb-4">
        {props.title}
      </h2>

      <div className="flex items-center justify-center">
        <MdOutlineAttachMoney className="text-white mr-1" size={24} />
        <h3 className="font-semibold text-lg text-green-500">{props.price}</h3>
      </div>

      <div className="flex flex-col flex-grow items-start mt-6 text-white">
        {features[props.title].map((feature, index) => (
          <div key={index} className="flex items-start mb-3">
            <AiFillCheckCircle className="mr-2 mt-0 text-green-500" size={25} />
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/payment">
          <Button title="Buy" />
        </Link>
      </div>
    </div>
  );
};

export default PlansCard;