import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4 md:sticky md:top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-lg font-semibold"></a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            className="text-white cursor-pointer"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="text-white cursor-pointer"
            to="techStack"
            smooth={true}
            duration={500}
          >
            What i Use
          </Link>
          <Link
            className="text-white cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Responsive Navigation Links (Mobile) */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 bg-white border border-gray-300 p-4">
            <Link
              className="cursor-pointer border-b-2"
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className=" cursor-pointer border-b-2"
              to="techStack"
              smooth={true}
              duration={500}
            >
              What i Use
            </Link>
            <Link
              className=" cursor-pointer border-b-2"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
