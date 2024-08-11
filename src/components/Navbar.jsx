import React, { useState, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        isSticky ? "bg-black bg-opacity-80" : "bg-transparent"
      } flex flex-row justify-between md:px-32 px-5 p-5 gap-16 transition-all duration-300`}
    >
      <div className="flex items-center p-2">
        <RouterLink to="/">
          <h1 className="font-semibold text-2xl text-[#3CB347]">Fitness Journey</h1>
        </RouterLink>
      </div>

      <nav className="hidden md:flex items-center p-2 gap-5">
        <RouterLink
          to="/"
          className="hover:text-[#3CB347] transition-all cursor-pointer"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/gymcatalog"
          className="hover:text-[#3CB347] transition-all cursor-pointer"
        >
          Gyms
        </RouterLink>
        <RouterLink
          to="/contactus"
          className="hover:text-[#3CB347] transition-all cursor-pointer"
        >
          Contact
        </RouterLink>
        <RouterLink
          to="/profile"
          className="hover:text-[#3CB347] transition-all cursor-pointer"
        >
          <AiOutlineUser size={24} />
        </RouterLink>
        <RouterLink to="/login">
          <Button title="Logout" />
        </RouterLink>
      </nav>

      <div className="md:hidden flex items-center p-2" onClick={handleChange}>
        <AiOutlineMenuUnfold size={28} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <RouterLink
          to="/"
          className="hover:text-[#3CB347] transition-all cursor-pointer"
          onClick={() => setMenu(false)} // Close menu on item click
        >
          Home
        </RouterLink>
        <RouterLink
          to="/gymcatalog"
          className="hover:text-[#3CB347] transition-all cursor-pointer"
          onClick={() => setMenu(false)} // Close menu on item click
        >
          Gyms
        </RouterLink>
        <RouterLink
          to="/contactus"
          className="hover:text-[#3CB347] transition-all cursor-pointer"
          onClick={() => setMenu(false)} // Close menu on item click
        >
          Contact
        </RouterLink>
        <RouterLink
          to="/profile"
          className="hover:text-[#3CB347] transition-all cursor-pointer"
          onClick={() => setMenu(false)} // Close menu on item click
        >
          Profile
        </RouterLink>
        <RouterLink
          to="/login"
          onClick={() => setMenu(false)} // Close menu on item click
        >
          <Button title="Logout" />
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
