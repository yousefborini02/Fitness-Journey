import React, { useState, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineMenuUnfold } from "react-icons/ai";

const menuItems = [
  { id: "/", name: "Home", type: "route" },
  { id: "about", name: "About Us", type: "scroll" },
  { id: "plans", name: "Pricing Plans", type: "scroll" },
  { id: "/contactus", name: "Contact Us", type: "route" },
];

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
        {menuItems.map((item) =>
          item.type === "route" ? (
            <RouterLink
              key={item.id}
              to={item.id}
              className="hover:text-[#3CB347] transition-all cursor-pointer"
            >
              {item.name}
            </RouterLink>
          ) : (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#3CB347] transition-all cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          )
        )}
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
        {menuItems.map((item) =>
          item.type === "route" ? (
            <RouterLink
              key={item.id}
              to={item.id}
              className="hover:text-[#ff3939] transition-all cursor-pointer"
              onClick={() => setMenu(false)} // Close menu on item click
            >
              {item.name}
            </RouterLink>
          ) : (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#ff3939] transition-all cursor-pointer"
              onClick={() => setMenu(false)} // Close menu on item click
            >
              {item.name}
            </ScrollLink>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
