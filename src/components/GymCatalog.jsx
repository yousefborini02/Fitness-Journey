import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "../layouts/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const gyms = [
  { name: "Pro Gym", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Fitness Gym", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 3", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 4", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 5", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 6", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 7", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 8", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 9", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 10", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 11", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Gym 12", description: "Amman-Khalda", image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const GymCard = ({ gym }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
    className="bg-[#222] rounded-lg overflow-hidden shadow-lg p-4"
  >
    <img src={gym.image} alt={gym.name} className="h-40 w-full object-cover mb-4 rounded-t-lg" />
    <div className="flex items-center space-x-2 mb-4">
      <span className="bg-[#3CB347] text-white text-sm px-1.5 py-0.5 rounded animate-pulse">9.2</span>
      <h3 className="text-xl mb-2 text-white mt-2">{gym.name}</h3>
    </div>
    <p className="text-gray-300 mb-4">{gym.description}</p>
    <div className="flex justify-between">
      <p className="w-20 text-center text-[#3CB347] border-2 border-[#3CB347] rounded-md p-2">Open</p>
      <p className="text-gray-300">Closes at 10:00</p>
    </div>
    <div className="flex justify-center mt-5">
      <Link to="/gymdetails">  
      <Button title="View Details" />
      </Link>
    </div>
  </motion.div>
);

const GymCatalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const gymsPerPage = 6;

  const indexOfLastGym = currentPage * gymsPerPage;
  const indexOfFirstGym = indexOfLastGym - gymsPerPage;
  const currentGyms = gyms.slice(indexOfFirstGym, indexOfLastGym);

  const totalPages = Math.ceil(gyms.length / gymsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Define animation variants
  const rowVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  // Group gyms into rows of 3
  const rows = currentGyms.reduce((acc, gym, index) => {
    const rowIndex = Math.floor(index / 3);
    if (!acc[rowIndex]) acc[rowIndex] = [];
    acc[rowIndex].push(gym);
    return acc;
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-start gap-5 mb-8">
          <input
            type="text"
            placeholder="Search gyms..."
            className="w-full bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-[#3CB347] md:w-1/2 lg:w-1/3 px-4 py-2 border border-[#444] rounded-lg"
          />
          <select className="w-full focus:outline-none bg-[#222] focus:ring-2 focus:ring-[#3CB347] md:w-1/4 lg:w-1/6 px-4 py-2 border border-[#444] rounded-lg text-white">
            <option>Choose City</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <select className="w-full focus:outline-none bg-[#222] focus:ring-2 focus:ring-[#3CB347] md:w-1/4 lg:w-1/6 px-4 py-2 border border-[#444] rounded-lg text-white">
            <option>Choose Activity</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        {rows.length > 0 && (
          <div className="space-y-8">
            {rows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                custom={rowIndex % 2 === 0 ? "left" : "right"}
                transition={{ duration: 1, delay: rowIndex * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {row.map((gym, index) => (
                  <GymCard key={index} gym={gym} />
                ))}
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex justify-center items-center mt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 text-white bg-[#3CB347] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="mx-2 text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 text-white bg-[#3CB347] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GymCatalog;
