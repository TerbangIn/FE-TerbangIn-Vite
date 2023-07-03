import { useState, useEffect } from "react";
import axios from 'axios';
import 'primereact/resources/primereact.min.css';
import { Button } from 'primereact/button';
// import Link from "react"
import { FaArrowLeft } from 'react-icons/fa';
import yellowlogo from '../assets/yellowlogo.png'
import koper from '../assets/koper.png'
import panahtermurah from '../assets/panahtermurah.svg'
import Modal from "../components/Modal";
// import Navbar from "./Navbar/Navbar";
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
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";

import Line from "../assets/images/line_thin.svg"
import checklist from "../assets/images/checklist.svg"
import save from "../assets/images/Brand_button.svg"
import { useLocation, useNavigate } from "react-router";
import Navbar from "./Navbar";

const HasilPencarian = () => {
  const location = useLocation()
  const [filters, setFilters] = useState({})
  const [dater, setDater] = useState("")

  useEffect(() => {
    setFilters({
      from: location?.state?.from,
      to: location?.state?.to,
      category: location?.state?.category,
      date: location?.state?.date
    });
  }, [location])
  console.log(filters, location?.state?.passenger);

  const [filterDate, setFilterDate] = useState([
    {
      id: 1,
      name: "SENIN",
      date: "06/26/2023",
      selected: new Date("06/26/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    },
    {
      id: 2,
      name: "SELASA",
      date: "06/27/2023",
      selected: new Date("06/27/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    },
    {
      id: 3,
      name: "RABU",
      date: "06/28/2023",
      selected: new Date("06/28/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    },
    {
      id: 4,
      name: "KAMIS",
      date: "06/29/2023",
      selected: new Date("06/29/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    },
    {
      id: 5,
      name: "JUMAT",
      date: "06/30/2023",
      selected: new Date("06/30/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    },
    {
      id: 6,
      name: "SABTU",
      date: "07/01/2023",
      selected: new Date("07/01/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    },
    {
      id: 7,
      name: "MINGGU",
      date: "07/02/2023",
      selected: new Date("07/02/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    },
    {
      id: 8,
      name: "SENIN",
      date: "07/03/2023",
      selected: new Date("07/03/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    },
    {
      id: 9,
      name: "SELASA",
      date: "07/04/2023",
      selected: new Date("07/04/2023").toDateString() === new Date(location?.state?.date).toDateString() ? true
        : false
    }
  ])

  const [datas, setDatas] = useState([]);

  const getData = async () => {
    await axios.post('https://be-tiketku-production.up.railway.app/api/v1/flight/filter', {
      from: filters.from,
      to: filters.to,
      category: filters.category,
      date : filters.date,
  }).then( res => {
      setDatas(res?.data?.data)
  })
}

  useEffect(() => {
    getData()
  }, [filters]);

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(dater)

  // console.log(datas);
  // console.log(filters);
  const [selectedSeatClass, setSelectedSeatClass] = useState("Harga-Termurah");
  const [savedSeatClass, setSavedSeatClass] = useState(null);

  const handleSeatClassClick = (seatClass) => {
    setSelectedSeatClass(seatClass);
  };

  const handleSaveClick = () => {
    setSavedSeatClass(selectedSeatClass);
  }

  const formatDate = (data, tipe) => {
    // console.log(new Date("2023-06-27T17:40:57.207Z").getUTCHours());
    let format = ""
    switch (tipe) {
      case "hour":
        format = new Date(data).toLocaleString('id-ID', { hour: "2-digit" })
        break;
      case "minute":
        format = new Date(data).toTimeString().slice(3,5)
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

  const handleDate = (date, id) => {
    setFilterDate(prevData => {
      return prevData.map(option => {
        if (option.id === id) {
          return { ...option, selected: true }
        }
        return { ...option, selected: false }
      });
    })

    setSelected(date)

  }

  const navigate = useNavigate()

  const handlePilih = (id) => {
    navigate('/checkout', {
      state: {
        flight_id: id,
        passenger: location?.state?.passenger
      }
    });
  }

  return (
    <div>
      <Navbar />
      {
        filters?.date !== undefined ?
          (
            <div className="flex justify-center md:mt-14 mt-8">
              <div className="w-full flex flex-col justify-center items-center">
                {/* Pilih Penerbangan */}
                <div className="md:w-[1000px] w-11/12">
                  <h1 className="text-2xl font-bold md:mb-8 mb-5">Pilih Penerbangan</h1>
                  {/* Tag Pencarian */}
                  <div className="flex md:flex-row flex-col gap-2 my-4 mx-2">
                    <a href="/beranda" className="tag bg-[#A06ECE] text-white rounded-lg py-1 flex items-center md:gap-4 gap-4 mx-5 md:mx-0 md:w-10/12 w-full ml-0 mr-80">
                      <div className="md:mr-0 mr-3"><FaArrowLeft className="w-4 h-8 md:mr-2 md:ml-0 ml-7" /></div>
                      <p className="md:pr-96 md:text-base text-[15px]"> {location?.state?.from} &gt; {location?.state?.to} - {location?.state?.passenger.jumlah} Penumpang - Economy </p>
                    </a>
                    <a href="" className="tag justify-center flex items-center bg-custom-color-green text-white rounded-lg px-4 py-2 md:w-2/12 w-full">
                      Ubah Pencarian
                    </a>
                  </div>
                  {/* End of Tag Pencarian */}

                  {/* Tag Hari */}
                  <div className="flex justify-center">
                    <div className="flex w-full snap-x snap-mandatory overflow-auto mx-auto no-scrollbar overflow-y-visible gap-3">
                      {filterDate.map(data => {
                        return (
                          <div className={`shrink-0 w-32 flex flex-col items-center text-sm text-center snap-always snap-center hover:bg-[#A06ECE] ${data.selected ? "bg-[#A06ECE]" : ""}   cursor-pointer py-2 rounded-xl group`} onClick={() => handleDate(data.date, data.id)} key={data.id}>
                            <div className={`font-extrabold text-black group-hover:text-white ${data.selected ? "text-white" : ""}`}>{data.name}</div>
                            <div className={`text-black group-hover:text-white ${data.selected ? "text-white" : ""}`}>{data.date}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  {/* End of Tag Hari */}

                  {/* Start of filter termurah */}
                  <div className="flex justify-end py-4">
                    <button onClick={() => setVisible(true)} className="flex border-solid border-2 space-x-4 rounded-full custom-border-termurah p-1 custom-text-termurah">
                      <div className="flex">
                        <img src={panahtermurah} alt="" />
                        <div className="font-bold">Termurah</div>
                      </div>
                    </button>
                    <Dialog visible={visible} modal={false} style={{ width: '400px' }} onHide={() => setVisible(false)}>
                      <div className="flex flex-col">
                        <div className={`flex flex-row ${selectedSeatClass === 'Harga-Termurah' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Harga-Termurah')} style={{ cursor: "pointer" }}>
                          <div className="pr-3">
                            <p className="font-bold pt-2 ml-4 py-3">Harga - Termurah</p>
                          </div>
                          {selectedSeatClass === 'Harga-Termurah' && (
                            <Image src={checklist} alt="checklist" className="absolute my-3 right-10" />
                          )}
                        </div>
                        <Image src={Line} alt="line" />
                        <div className={`flex flex-row ${selectedSeatClass === 'Awal' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Awal')} style={{ cursor: "pointer" }}>
                          <div>
                            <p className="font-bold ml-4 pt-2 py-3">Keberangkatan - Paling Awal</p>
                          </div>
                          {selectedSeatClass === 'Awal' && (
                            <Image src={checklist} alt="checklist" className="absolute my-3 right-10" />
                          )}
                        </div>
                        <Image src={Line} alt="line" />
                        <div className={`flex flex-row ${selectedSeatClass === 'Akhir' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Akhir')} style={{ cursor: "pointer" }}>
                          <div className="pr-1">
                            <p className="font-bold ml-4 pt-2 py-3">Keberangkatan - Paling Akhir</p>
                          </div>
                          {selectedSeatClass === 'Akhir' && (
                            <Image src={checklist} alt="checklist" className="absolute my-3 right-10" />
                          )}
                        </div>
                        <Image src={Line} alt="line" />
                      </div>
                      <Image src={save} alt="save" className="flex justify-end" style={{ cursor: "pointer" }} onClick={handleSaveClick} />
                    </Dialog>
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
                      {
                        selected == ""
                          ?
                          datas?.map(data => {
                            return (
                              <Accordion className="mb-2 border-2 rounded-lg border-purple-400" multiple activeIndex={0} key={data?.id} >
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
                                          <Button label="Pilih" severity="help" rounded onClick={() => { handlePilih(data?.id) }}></Button>
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
                          })
                          :
                          datas?.filter(data => {
                            return new Date(data?.departure_date).toDateString() === new Date(selected).toDateString()
                          }).map(data => {
                            return (
                              <Accordion className="mb-2 border-2 rounded-lg border-purple-400" multiple activeIndex={0} key={data?.id} >
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
                                          <Button label="Pilih" severity="help" rounded onClick={handlePilih}></Button>
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
                          })
                      }

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )

          : (<>Loading</>)
      }
      {/* <Navbar/> */}

    </div>
  );
};

export default HasilPencarian;