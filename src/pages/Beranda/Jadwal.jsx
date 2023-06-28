import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "primereact/image";
import { Calendar } from 'primereact/calendar';
import { InputSwitch } from "primereact/inputswitch";
import ModalPassengers from "../../components/modal_beranda/ModalPassengers";
import ModalSeatClass from "../../components/modal_beranda/ModalSeatClass";
import ModalFlightFrom from "../../components/modal_beranda/ModalFlightFrom";
import ModalFlightTo from "../../components/modal_beranda/ModalFlightTo";
import { addLocale } from 'primereact/api';


import icon_pesawat from "../../assets/images/icon_pesawat.svg"
import icon_date from "../../assets/images/icon_date.svg"
import garis1 from "../../assets/images/garis.svg"
import garis_pendek1 from "../../assets/images/garis_pendek.svg"
import garis_pendek2 from "../../assets/images/garis_pendek2.svg"
import return1 from "../../assets/images/return.svg"
import airline_seat from "../../assets/images/airline-seat.svg"


const JadwalPenerbangan = (onFilterData) => {
    const { flightData } = useSelector((state) => state.FlightDestinationReducer);
    console.log(flightData)
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const [checked, setChecked] = useState(false);
    const [from, setFrom] = useState("Duesseldorf");
    const [to, setTo] = useState("Brazil");
    const [matchingFlights, setMatchingFlights] = useState([]);


    const handleDateClick = () => {
        setShowCalendar(!showCalendar); // Mengubah state showCalendar saat elemen diklik
    };
    const handleFromSelect = (value) => {
        setFrom(value);
    };

    const handleToSelect = (value) => {
        setTo(value);
    };

    const return1Handler = () => {
        setFrom(to);
        setTo(from);
    }

    const handleDate1Change = (e) => {
        setSelectedDate1(e.value)
        setShowCalendar(false);
    }

    const handleDate2Change = (e) => {
        if (selectedDate1 && e.value && e.value < selectedDate1) {
            setSelectedDate2(null);
        } else {
            setSelectedDate2(e.value);
        }
    }
    const dateOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    };

    const buttonHandler = () => {
        const filteredFlights = flightData.filter((flight) => {
            // Ubah kondisi sesuai dengan kriteria pencarian pengguna
            const isFromMatch = flight.source.city.toLowerCase() === from.toLowerCase();
            const isToMatch = flight.destination.country.toLowerCase() === to.toLowerCase();

            return isFromMatch && isToMatch;
        });

        setMatchingFlights(filteredFlights);

        if (filteredFlights.length > 0) {
            alert("Ada data penerbangan yang sesuai!");
        } else {
            alert("Tidak ada data penerbangan yang sesuai!");
        }

    }

    const handleFromChange = (value) => {
        setFrom(value);
    };

    const handleToChange = (value) => {
        setTo(value);
    };

    const handleFromBlur = (event) => {
        const value = event.target.value;
        setFrom(value);
    };

    const handleToBlur = (event) => {
        const value = event.target.value;
        setTo(value);
    };

    const handleToFocus = () => {
        setTo(from);
        setFrom("");
    };

    return (
        <>
            <div className="relative lg:max-w-screen-md rounded-lg shadow-lg mx-auto bg-white -mt-12">
            <div className="py-4 px-5">
                <p className="text-lg">Pilih Jadwal Penerbangan spesial di<span className=" text-primary2"> TerbangIn!</span></p>
                <div className="grid grid-cols-3 mt-3">
                    <div>
                        <div className="flex items-center">
                            <Image src={icon_pesawat} alt="icon_pesawat" className="w-4" />
                            <p className="text-primary1 text-xs md:text-base ml-2 mr-2 ">From</p>
                            <div >
                                <ModalFlightFrom
                                    value={from}
                                    onChange={handleFromChange}
                                    onSelect={handleFromSelect}
                                    onBlur={handleFromBlur}
                                />
                            </div>
                        </div>
                        <hr className="flex border-1 mx-[85px] w-60" />
                        <div className="">
                            <div className="flex items-center mx-10 mt-7">
                                <div className="text-base text-primary1 mx-10">Departure</div>
                                <div className="text-base text-primary1 mx-6">Return</div>
                                <div><InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} /></div>
                            </div>
                            <div className="flex items-center lg:mt-2 -mr-28">
                                <Image src={icon_date} alt="icon_date" className="w-4 md:w-6" />
                                <div className="text-base text-primary1 px-2">Date</div>
                                <Calendar value={selectedDate1} onChange={handleDate1Change} numberOfMonths={2} dateFormat="dd MM yy" className="w-56 h-7 px-3 " />
                                <Calendar value={selectedDate2} onChange={handleDate2Change} numberOfMonths={2} disabled={!checked} minDate={selectedDate1} dateFormat="dd MM yy" className="w-48 h-7 px-2 pr-2 mr-3" />
                            </div>
                            <div className="pt-1">
                                <hr className="flex border-1 mx-20 w-32" />
                                <hr className="border-1 mx-56 w-32" />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto"><Image src={return1} alt="return1" onClick={return1Handler} className="cursor-pointer w-4" /></div>
                    <div className="-ml-24 -mr-4">
                        <div className="flex items-center">
                            <Image src={icon_pesawat} alt="icon_pesawat" className="w-6 mr-2 ml-1 sm:w-4 lg:ml-4" />
                            <p className="text-primary1 text-xs md:text-base mr-2">To</p>
                            <div>
                                <ModalFlightTo
                                    value={to}
                                    onChange={handleToChange}
                                    onSelect={handleToSelect}
                                    onBlur={handleToBlur}
                                    onFocus={handleToFocus}
                                />
                            </div>
                        </div>
                        <hr className="flex border-1 mx-[93px] w-60" />
                        <div className="mx-4 -mr-10">
                            <div className="flex mx-6 mt-8">
                                <div className="text-base text-primary1 mx-10">Passengers</div>
                                <div className="text-base text-primary1 mx-5">Seat Class</div>
                            </div>
                            <div className="flex items-center mt-4">
                                <Image src={airline_seat} alt="airline_seat" className="w-4 sm:w-5 md:w-6" />
                                <div className="text-base text-primary1">To</div>
                                <ModalPassengers />
                                <ModalSeatClass />
                            </div>
                            <hr className="flex border-1 mx-16 w-28" />
                            <hr className="border-1 mx-[216px] w-[96px]" />
                        </div>

                    </div>
                </div>

            </div>
            <div className="bg-primary2 rounded-b-xl">
                <p className="text-center text-xs lg:text-base text-white font-bold cursor-pointer pt-2 pb-2 lg:pt-4 lg:pb-4" onClick={buttonHandler}>Cari Penerbangan</p>
            </div>
            </div>
        </>
       
    )
}

export default JadwalPenerbangan;