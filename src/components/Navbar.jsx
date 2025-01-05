import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold">Explore Nepal</h1>
        </div>

       {/* hamburger section  */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
     {/* Navbar section  */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="hover:text-yellow-500">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-yellow-500">
            About
          </NavLink>
          <NavLink to="/destinations" className="hover:text-yellow-500">
            Destinations
          </NavLink>
          <NavLink to="/contact" className="hover:text-yellow-500">
            Contact Us
          </NavLink>
        </div>
      </div>

    
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <NavLink
            to="/"
            className="block text-white hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-white hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/destinations"
            className="block text-white hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Destinations
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-white hover:text-yellow-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
