import React from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { Button } from 'primereact/button';
import { AiOutlineSearch } from 'react-icons/ai';
import './Navbar.css';
// import { Image } from "primereact/image";

import Logo from "../../assets/logo (1).png"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="py-3 navbar-container shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-10">
            {/* Logo and Search Bar */}
            <img src={Logo} alt="Logo" className="h-14" />
            <div className="relative">
              <input
                type="text"
                placeholder="Cari di sini ..."
                className="px-4 py-2 md:mr-2 mb-2 md:mb-0 bg-gray-200 text-white rounded-md focus:outline-none focus:bg-gray-700 search-bar"
              />
              <span className="absolute top-3 right-4 text-gray-500 cursor-pointer">
                <AiOutlineSearch />
              </span>
            </div>
          </div>
          {/* End of Logo and Search Bar */}

          {/* Button */}
          <div className="flex flex-col md:flex-row md:items-center">
            <Link
              to={"/login"}
              type="button"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 text-sm text-white rounded-md focus:outline-none button-custom"
            >
              <div className="flex items-center">
                <RiLoginBoxLine className="mr-2" />
                <span>Masuk</span>
              </div>
            </Link>
          </div>
          {/* End of Button */}
        </div>
      </div>
      {/* <hr /> */}
    </nav>
  );
};

export default Navbar;