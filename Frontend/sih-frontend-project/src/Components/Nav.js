import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/home" className="text-white hover:underline">
        Home
      </NavLink>
      <NavLink to="#" className="text-white hover:underline">
        Services
      </NavLink>
      <NavLink to="#" className="text-white hover:underline">
        About
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        {/* <div></div> */}
        {/* <div className="hidden w-full justify-between md:flex"> */}
        <div className="hidden w-full justify-evenly md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
