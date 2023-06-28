import { useState , useEffect} from "react";
import axios from 'axios';
import 'primereact/resources/primereact.min.css';
import { RiLoginBoxLine } from "react-icons/ri";
import logo from '../assets/logo.png';
import { Button } from 'primereact/button';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import yellowlogo from '../assets/yellowlogo.png'
import chevron from '../assets/chevron.png'
import arrow from '../assets/arrow.png'
import koper from '../assets/koper.png'
import panahtermurah from '../assets/panahtermurah.png'
import { DataView } from 'primereact/dataview';
import Modal from "../components/Modal";
// import { Card } from 'primereact/card';
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

const HasilPencarian = () => {

  const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, []);

  const getData = async () => {
    await axios.get('https://be-tiketku-production.up.railway.app/api/v1/flight', {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ6b2RwbHVnaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NDQ3MTg2fQ.lLzO0u8BQF2WpwWDQiuQ7qGEBN-ak1mG-xQtMwUcCkk`
              }
          })
          .then(response => {
            console.log(response?.data?.data);
              setData(response?.data?.data);
          })
      }
  const [showMyModal, setShowMyModal] = useState(false)

  const itemtemplate = (dataTemplate) => {
    console.log(dataTemplate);
    return <><div className="ml-5 flex flex-col border-solid border-2 rounded-lg p-3">
    <div className="flex justify-between">
      <div className="flex">
        <img src={yellowlogo} alt="" className="w-6 h-6 mr-2" />
        <div>{dataTemplate.airline}</div>
      </div>
      <div>
        <img src={chevron} alt="" className="w-4 h-4" />
      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex p-3 w-1/2 justify-between">
        <div className="flex flex-col justify-between">
          <div className="font-bold">{dataTemplate.arrival_date.slice(14, 19)}</div>
          <div>{dataTemplate.destination.code}</div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="">4h 0m</div>
          <img src={arrow} alt=""/>
          <div>direct</div>
        </div>
      <div className="flex flex-col justify-between">
        <div className="font-bold">{dataTemplate.departure_date.slice(14, 19)}</div>
        <div>{dataTemplate.source.code}</div>
      </div>
    </div>
      <div className="flex items-center">
        <img src={koper} alt="" className="w-6 h-6" />
      </div>
      <div className="flex p-3">
        <div className="flex flex-col justify-between font-bold">
          <div>IDR {dataTemplate.economy_class_price}</div>
          <button className="border-solid border-2 rounded-lg">
            <div>Pilih</div>
          </button>
        </div>
      </div>
    </div>
  </div></>
  }
  const handleOnClose = () => setShowMyModal(false )


  // JSX

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
                <Card className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">SENIN</div>
                  <div>01/03/2023</div>
                </Card >
                <Card  className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">SELASA</div>
                  <div>02/03/2023</div>
                </Card >
                <Card  className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">RABU</div>
                  <div>03/03/2023</div>
                </Card >
                <Card  className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">KAMIS</div>
                  <div>04/03/2023</div>
                </Card >
                <Card  className="flex-1 flex flex-col items-center list-item text-sm text-center">
                  <div className="font-extrabold">JUMAT</div>
                  <div>05/03/2023</div>
                </Card >
                <Card className="flex-1 flex flex-col items-center Card -item text-sm text-center">
                  <div className="font-extrabold">SABTU</div>
                  <div>06/03/2023</div>
                </Card>
                <Card className="flex-1 flex flex-col items-center Card -item text-sm text-center">
                  <div className="font-extrabold">MINGGU</div>
                  <div>07/03/2023</div>
                </Card>
                <Card className="flex-1 flex flex-col items-center Card -item text-sm text-center">
                  <div className="font-extrabold">SENIN</div>
                  <div>07/03/2023</div>
                </Card>
              </ul>
            </div>
            <div className="py-1"></div>
          </div>
          {/* End of Tag Hari */}

          <hr />

          {/* Start of filter termurah */}
          <div className="flex justify-end py-4">
            <button onClick={() => setShowMyModal(true)} className="flex border-solid border-2 space-x-4 rounded-full custom-border-termurah p-1 custom-text-termurah">
              <div className="flex">
                <img src={ panahtermurah } alt="" />
                <div className="font-bold">Termurah</div>
              </div>
            </button>
            <Modal onClose={handleOnClose} visible={showMyModal} />
          </div>

          {/* Start of filter box */}
            <div className="flex items-start py-5">
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

                {/* Start of Cards */}
                <div className="flex flex-col w-full">
                  {/* card 1 */}
                <DataView value={data} itemTemplate={itemtemplate} className="card ps-4 lg:col-12"/>
                  
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HasilPencarian;
