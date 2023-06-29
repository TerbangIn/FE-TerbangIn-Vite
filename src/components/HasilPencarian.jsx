import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import 'primereact/resources/primereact.min.css';
import { RiLoginBoxLine } from "react-icons/ri";
import logo from '../assets/logo.png';
import { Button } from 'primereact/button';
// import Link from "react"
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import yellowlogo from '../assets/yellowlogo.png'
import chevron from '../assets/chevron.png'
import arrow from '../assets/arrow.png'
import koper from '../assets/koper.png'
import panahtermurah from '../assets/panahtermurah.svg'
import { DataView } from 'primereact/dataview';
import Modal from "../components/Modal";
import Navbar from "./Navbar/Navbar";
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
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Divider } from "primereact/divider";

const HasilPencarian = () => {

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    await axios.get('https://be-tiketku-production.up.railway.app/api/v1/flight')
      .then(response => {
        // console.log(response?.data?.data);
        setDatas(response?.data?.data);
      })
  }
  const [showMyModal, setShowMyModal] = useState(false)

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  // const CardFlight = (dataTemplate) => {
  //   console.log(dataTemplate.id);
  //   return (
  //     <>
  //       <Accordion open={open === dataTemplate?.id} animate={customAnimation}>
  //         <AccordionHeader onClick={() => handleOpen(dataTemplate?.id)}>
  //           {/* <div className="flex justify-between">
  //             <div className="flex">
  //               <img src={yellowlogo} alt="" className="w-6 h-6 mr-2" />
  //               <div>{dataTemplate?.airline}</div>
  //             </div>
  //             <div>
  //               <img src={chevron} alt="" className="w-4 h-4" />
  //             </div>
  //           </div>
  //           <div className="flex justify-between">
  //             <div className="flex p-3 w-1/2 justify-between">
  //               <div className="flex flex-col justify-between">
  //                 <div className="font-bold">{dataTemplate?.arrival_date?.slice(14, 19)}</div>
  //                 <div>{dataTemplate?.destination?.code}</div>
  //               </div>
  //               <div className="flex flex-col justify-between items-center">
  //                 <div className="">4h 0m</div>
  //                 <img src={arrow} alt="" />
  //                 <div>direct</div>
  //               </div>
  //               <div className="flex flex-col justify-between">
  //                 <div className="font-bold">{dataTemplate?.departure_date?.slice(14, 19)}</div>
  //                 <div>{dataTemplate?.source?.code}</div>
  //               </div>
  //             </div>
  //             <div className="flex items-center">
  //               <img src={koper} alt="" className="w-6 h-6" />
  //             </div>
  //             <div className="flex p-3">
  //               <div className="flex flex-col justify-between font-bold">
  //                 <div>IDR {dataTemplate?.economy_class_price}</div>
  //                 <button className="border-solid border-2 rounded-lg">
  //                   <div>Pilih</div>
  //                 </button>
  //               </div>
  //             </div>
  //           </div> */}
  //           kkk
  //         </AccordionHeader>
  //         <AccordionBody>
  //           Jello
  //         </AccordionBody>
  //       </Accordion>
  //     </>
  //   )
  // }
  const handleOnClose = () => setShowMyModal(false)

  // console.log(datas);

  const formatDate = (data, tipe) => {
    // console.log(new Date("2023-06-27T17:40:57.207Z").getUTCHours());
    let format = ""
    switch (tipe) {
      case "hour":
        format = new Date(data).toLocaleString('id-ID', { hour: "2-digit" })
        break;
      case "minute":
        format = new Date(data).getUTCMinutes()
        break;
      case "second":
        format = new Date(data).getUTCSeconds()
        break;
      case "month":
        format = new Date(data).toLocaleString('id-ID', { month: "long" })
        break;
      case "day":
        format = new Date(data).getUTCDate()
        break;
      case "year":
        format = new Date(data).getUTCFullYear()
        break;

      default:
        format = ""
        break;
    }

    return format
  }

  const estimasi = (start, end) => {
    var startDate = new Date(start)
    var endDate = new Date(end)
    var timeDiff = endDate.getTime() - startDate.getTime()
    return `${Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h ${Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))}m`
  }


  return (
    <div>
      <div>
        <Navbar/>
        {/* <nav className="py-3 navbar-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-10">
                Logo and Search Bar
                <img src={logo} alt="Logo" className="h-14" />
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari di sini ..."
                    className="px-4 py-2 md:mr-2 mb-2 md:mb-9 b19gray-200 text-white rounded-md focus:outline-none focus:bg-gray-700 search-bar"
                  />
                  <span className="absolute top-3 right-4 text-gray-500 cursor-pointer">
                    <AiOutlineSearch />
                  </span>
                </div>
              </div>
              End of Logo and Search Bar

              Button
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
              End of Button
            </div>
          </div>
        </nav> */}

        {/* <hr /> */}

        <div className="flex justify-center md:mt-14 mt-8">
          <div className="w-full flex flex-col justify-center items-center">
            {/* Pilih Penerbangan */}
            <div className="md:w-[1000px] w-11/12">
              <h1 className="text-2xl font-bold md:mb-8 mb-5">Pilih Penerbangan</h1>
              {/* Tag Pencarian */}
              <div className="flex md:flex-row flex-col gap-2 my-4 mx-2">
                <a href="/beranda" className="tag bg-[#A06ECE] text-white rounded-lg py-1 flex items-center md:gap-4 gap-4 mx-5 md:mx-0 md:w-10/12 w-full ml-0 mr-80">
                  <div className="md:mr-0 mr-3"><FaArrowLeft className="w-4 h-8 md:mr-2 md:ml-0 ml-7" /></div>
                  <p className="md:pr-96 md:text-base text-[15px]"> JKT &gt; MLB - 2 Penumpang - Economy </p>
                </a>
                <a href="" className="tag justify-center flex items-center bg-custom-color-green text-white rounded-lg px-4 py-2 md:w-2/12 w-full">
                  Ubah Pencarian
                </a>
              </div>
              {/* End of Tag Pencarian */}

              {/* Tag Hari */}
              <div className="flex justify-center">
                <ul className="flex w-full snap-x snap-mandatory overflow-auto mx-auto no-scrollbar overflow-y-visible gap-3">
                  <Card className="shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] cursor-pointer py-2 group">
                    <div className="font-extrabold text-black group-hover:text-white">SENIN</div>
                    <div className="text-black group-hover:text-white">01/03/2023</div>
                  </Card >
                  <Card className="shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] cursor-pointer py-2 group">
                    <div className="font-extrabold text-black group-hover:text-white">SELASA</div>
                    <div className="text-black group-hover:text-white">02/03/2023</div>
                  </Card >
                  <Card className="shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] cursor-pointer py-2 group">
                    <div className="font-extrabold text-black group-hover:text-white">RABU</div>
                    <div className="text-black group-hover:text-white">03/03/2023</div>
                  </Card >
                  <Card className="shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] cursor-pointer py-2 group">
                    <div className="font-extrabold text-black group-hover:text-white">KAMIS</div>
                    <div className="text-black group-hover:text-white">04/03/2023</div>
                  </Card >
                  <Card className="shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] cursor-pointer py-2 group">
                    <div className="font-extrabold text-black group-hover:text-white">JUMAT</div>
                    <div className="text-black group-hover:text-white">05/03/2023</div>
                  </Card >
                  <Card className="shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] cursor-pointer py-2 group">
                    <div className="font-extrabold text-black group-hover:text-white">SABTU</div>
                    <div className="text-black group-hover:text-white">06/03/2023</div>
                  </Card>
                  <Card className="shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] cursor-pointer py-2 group">
                    <div className="font-extrabold text-black group-hover:text-white">MINGGU</div>
                    <div className="text-black group-hover:text-white">07/03/2023</div>
                  </Card>
                  <Card className="shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] cursor-pointer py-2 group">
                    <div className="font-extrabold text-black group-hover:text-white">SENIN</div>
                    <div className="text-black group-hover:text-white">07/03/2023</div>
                  </Card>
                </ul>
              </div>
              {/* End of Tag Hari */}

              {/* <hr /> */}

              {/* Start of filter termurah */}
              <div className="flex justify-end py-4">
                <button onClick={() => setShowMyModal(true)} className="flex border-solid border-2 space-x-4 rounded-full custom-border-termurah p-1 custom-text-termurah">
                  <div className="flex">
                    <img src={panahtermurah} alt="" />
                    <div className="font-bold">Termurah</div>
                  </div>
                </button>
                <Modal onClose={handleOnClose} visible={showMyModal} />
              </div>

              {/* Start of filter box */}
              <div className="flex flex-col md:flex-row w-full">
                <div className="md:w-[35%] w-full flex md:mb-0 mb-9">
                  <Card className="h-fit sticky top-40 w-[90%] p-4 shadow-xl shadow-gray-900/2 border-gray-950">
                    {/* Filter title */}
                    <div className="mb-2 flex ms-2">
                      <Typography variant="h6" color="blue-gray">
                        Filter
                      </Typography>
                    </div>

                    {/* Filter options */}
                    <List>
                      <ListItem>
                        <ListItemPrefix>
                          <CubeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Transit
                        <ChevronRightIcon className="icon-black h-5 w-5 ml-auto" />
                      </ListItem>
                      <hr className="border-t border-gray-300" />
                      <ListItem>
                        <ListItemPrefix>
                          <HeartIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Fasilitas
                        <ListItemSuffix>
                          <ChevronRightIcon className="icon-black h-5 w-5 ml-auto" />
                        </ListItemSuffix>
                      </ListItem>
                      <hr className="border-t border-gray-300" />
                      <ListItem>
                        <ListItemPrefix>
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
                  {datas?.map(data => {
                    return (
                      <Accordion className="mb-2 border-2 rounded-lg border-purple-400" multiple activeIndex={0}>
                        <AccordionTab className="w-full" header={
                          <div className="flex flex-col flex-1 shrink-0 md:text-base text-xs">
                            <div className="flex items-center gap-2">
                              <img src={yellowlogo} alt="" className="w-6 h-6" />
                              <div>{data?.airline}</div>
                            </div>
                            <div className="flex justify-between w-full">
                              <div className="flex items-center md:gap-3 gap-1 w-1/2">
                                <div className="flex flex-col gap-2">
                                  <div className="font-bold">{`${formatDate(data?.departure_date, "hour")}:${formatDate(data?.departure_date, "minute")}`}</div>
                                  <div>{data?.destination?.code}</div>
                                </div>
                                <div className="flex flex-col items-center mx-4">
                                  <div className="text-xs text-neutral-500">{estimasi(data?.departure_date, data?.arrival_date)}</div>
                                  <div className="flex items-center ">
                                    <div className="border-b-2 border-bg-black md:w-80 w-12 "></div>
                                    <div className="pi pi-angle-right -mx-2.5"></div>
                                  </div>
                                  {/* <img src={arrow} alt="arrow" className="w-full" /> */}
                                  <div className="text-xs text-neutral-500">Direct</div>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <div className="font-bold">{`${formatDate(data?.arrival_date, "hour")}:${formatDate(data?.arrival_date, "minute")}`}</div>
                                  <div>{data?.source?.code}</div>
                                </div>
                                {/* <div className="flex items-center"> */}
                                <img src={koper} alt="" className="w-6 h-6 md:ms-8 ms-4" />
                                {/* </div> */}
                              </div>
                              <div className="flex md:ml-11 ml-8 p-3">
                                <div className="flex flex-col font-bold gap-2">
                                  <div className="text-[#A06ECE]">IDR {data?.economy_class_price ? data?.economy_class_price : data?.first_class_price ? data?.first_class_price : data?.business_class_price ? data?.business_class_price : data?.premium_class}</div>
                                  <Button label="Pilih" severity="help" rounded></Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        }>
                          <div className="flex flex-col items-start md:text-base text-xs ">
                            <h4 className="text-[#A06ECE] font-bold">Detail Penerbangan</h4>
                            <div className="flex justify-between w-full">
                              <h1 className="font-bold">{`${formatDate(data?.departure_date, "hour")}:${formatDate(data?.departure_date, "minute")}`}</h1>
                              <h6 className="text-[#A06ECE] font-bold">Keberangkatan</h6>
                            </div>
                            <p>{formatDate(data?.departure_date, "day")} {formatDate(data?.departure_date, "month")} {formatDate(data?.departure_date, "year")}</p>
                            <p className="font-bold">{data?.source?.name}</p>
                            <Divider />
                            <div className="ms-8 text-left">
                              <h5 className="font-bold">{data?.airline}</h5>
                              <h5 className="font-bold">{data?.flight_number}</h5>
                            </div>
                            <div className="flex gap-2 justify-center">
                              <img src={yellowlogo} alt="" className="w-6 h-6 mt-2" />
                              <div className="flex flex-col items-start">

                                <h5 className="font-bold mt-2">Informasi:</h5>
                                {data?.information?.map(info => {
                                  return (
                                    <>
                                      <p>{info?.name}</p>
                                    </>
                                  )
                                })}
                              </div>
                            </div>
                            <Divider />
                            <div className="flex justify-between w-full">
                              <h1 className="font-bold">{`${formatDate(data?.arrival_date, "hour")}:${formatDate(data?.arrival_date, "minute")}`}</h1>
                              <h6 className="text-[#A06ECE] font-bold">Kedatangan</h6>
                            </div>
                            <p>{formatDate(data?.arrival_date, "day")} {formatDate(data?.arrival_date, "month")} {formatDate(data?.arrival_date, "year")}</p>
                            <p className="font-bold">{data?.destination?.name}</p>
                          </div>
                        </AccordionTab>
                      </Accordion>
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasilPencarian;