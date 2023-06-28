import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import logo from "./images/logo.png";
import notif from './images/notif.svg';
import history from './images/list.svg';
import akun from './images/user.svg';


const Navbar = () => {
  return (
    <nav className="py-3 navbar-container shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-10">
            <img  src={logo} alt="Logo" className="h-[53px] w-[120px] " />
            <div className="relative">
              <input type="text" placeholder="Cari di sini ..." className="px-4 py-2 md:mr-2 mb-2 md:mb-0 bg-[#EEEEEE] text-black rounded-md focus:outline-none  w-[444px] border-none" />
              <span className="absolute top-3 right-4 text-gray-500 cursor-pointer">
                <AiOutlineSearch />
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">              
            <div className="flex items-center mr-[136px ]">
                <a href=""><img src={history} alt="" /></a>
                <a className="ml-[30px]" href=""><img src={notif} alt="" /></a>
                <a className="ml-[30px]" href=""><img src={akun} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;