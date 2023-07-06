import React from "react";
import 'primereact/resources/primereact.min.css';
import { RiLoginBoxLine } from "react-icons/ri";
import logo from '../assets/logo.png';
import { Button } from 'primereact/button';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import termurah from '../assets/termurah.png'
import notfound from '../assets/notfound.png'
import './Index.css';
import {
  CurrencyDollarIcon,
  HeartIcon,
  CubeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  ListItemPrefix,
} from "@material-tailwind/react";

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
              <p href="/beranda" className="tag text-center bg-custom-color-green text-white rounded-lg px-4 py-2 w-1/4">
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

          <hr />

          {/* Start of filter termurah */}
          <div className="flex justify-end py-4">
            {/* <Button> */}
              <img src={termurah} alt="Termurah" style={{ width: '10%', height: 'auto' }} />
            {/* </Button> */}
          </div>

          {/* Start of filter box */}
            <div className="flex items-start  py-5">
                <div className="w-100% flex rounded-xxxl">
                    <Card className="h-auto w-auto max-w-full p-4 shadow-xl shadow-gray-900/2 border-gray-950">
                    {/* Filter title */}
                    <div className="mb-2 p-4">
                        <Typography variant="h6" color="blue-gray">
                        Filter
                        </Typography>
                    </div>

                    {/* Filter options */}
                    <List>
                        <ListItem>
                        <ListItemPrefix className="my-3 py-3">
                            <CubeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Transit
                        <ChevronRightIcon className="icon-black h-5 w-5 ml-auto" />
                        </ListItem>
                        <hr className="border-t border-gray-300" />
                        <ListItem>
                        <ListItemPrefix className="my-3 py-3">
                            <HeartIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Fasilitas
                        <ListItemSuffix>
                            <ChevronRightIcon className="icon-black h-5 w-5 ml-auto" />
                        </ListItemSuffix>
                        </ListItem>
                        <hr className="border-t border-gray-300" />
                        <ListItem>
                        <ListItemPrefix className="my-3 py-3">
                            <CurrencyDollarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Harga
                        <ListItemSuffix>
                            <ChevronRightIcon className="icon-black h-5 w-5 ml-auto" />
                        </ListItemSuffix>
                        </ListItem>
                    </List>
                    </Card>
                </div>
                <div className="flex w-full justify-center items-center py-5">
                  <img src={ notfound } alt="Loading" style={{ width: '30%', height: 'auto' }}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PencarianEmpty;
