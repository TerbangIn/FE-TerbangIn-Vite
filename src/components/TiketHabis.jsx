import React from "react";
import 'primereact/resources/primereact.min.css';
import { RiLoginBoxLine } from "react-icons/ri";
import logo from '../assets/logo.png';
import { Button } from 'primereact/button';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import emptyImage from '../assets/empty.png';
import './Index.css';

const PencarianEmpty = () => {
  return (
    <div>
      <div>
        <nav className="py-3 navbar-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-10">
                {/* Logo and Search Bar */}
                <img src={logo} alt="Logo" className="h-14" />
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
                <Button
                  type="button"
                  className="bg-gray-800 hover:bg-gray-700 px-4 py-2 text-sm text-white rounded-md focus:outline-none button-custom"
                >
                  <div className="flex items-center">
                    <RiLoginBoxLine className="mr-2" />
                    <span>Masuk</span>
                  </div>
                </Button>
              </div>
              {/* End of Button */}
            </div>
          </div>
        </nav>
        
        <hr />
        
        <div className="flex flex-col justify-center items-left mx-60 py-5">
          {/* Pilih Penerbangan */}
          <div>
            <h1 className="text-2xl font-bold">Pilih Penerbangan</h1>
            {/* Tag Pencarian */}
            <div className="flex px-3 py-7 space-x-2">
              <p className="tag bg-custom-color-purple text-white rounded-lg px-4 py-2 flex items-center w-3/4">
                <FaArrowLeft className="w-4 h-4 mr-2" />
                JKT &gt; MLB - 2 Penumpang - Economy
              </p>
              <p className="tag text-center bg-custom-color-green text-white rounded-lg px-4 py-2 w-1/4">
                Ubah Pencarian
              </p>
            </div>
            {/* End of Tag Pencarian */}

            {/* Tag Hari */}
            <div className="flex justify-center">
              <ul className="flex w-full">
                <li className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">SENIN</div>
                  <div>01/03/2023</div>
                </li>
                <li className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">SELASA</div>
                  <div>02/03/2023</div>
                </li>
                <li className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">RABU</div>
                  <div>03/03/2023</div>
                </li>
                <li className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">KAMIS</div>
                  <div>04/03/2023</div>
                </li>
                <li className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">JUMAT</div>
                  <div>05/03/2023</div>
                </li>
                <li className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">SABTU</div>
                  <div>06/03/2023</div>
                </li>
                <li className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">MINGGU</div>
                  <div>07/03/2023</div>
                </li>
                <li className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">SENIN</div>
                  <div>07/03/2023</div>
                </li>
              </ul>
            </div>
            <div className="py-1"></div>
          </div>
          {/* End of Tag Hari */}
        </div>

        <hr />

        {/* Start of Tiket Habis! */}
        <div className="flex flex-col justify-center items-center pt-40">
          <img src={emptyImage} alt="Empty" className="mx-auto" style={{ width: '15%', height: 'auto' }} />
        </div>
        <div className="flex flex-col justify-center items-center pt-5">
          <p className="font-bold">Maaf, Tiket terjual habis!</p>
          <p className="font-bold color-custom">Coba cari perjalanan lainnya!</p>
        </div>
        {/* End of Tiket Habis! */}
      </div>
    </div>
  );
};

export default PencarianEmpty;
