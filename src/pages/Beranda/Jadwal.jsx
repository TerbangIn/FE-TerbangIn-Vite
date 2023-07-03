import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Image } from "primereact/image";
import { Calendar } from 'primereact/calendar';
import { InputSwitch } from "primereact/inputswitch";
import { List, Modal } from 'antd';
import ModalPassengers from "../../components/modal_beranda/ModalPassengers";
import ModalSeatClass from "../../components/modal_beranda/ModalSeatClass";
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"


import icon_pesawat from "../../assets/images/icon_pesawat.svg"
import icon_date from "../../assets/images/icon_date.svg"
import return1 from "../../assets/images/return.svg"
import airline_seat from "../../assets/images/airline-seat.svg"
import { Card } from "primereact/card";


const JadwalPenerbangan = () => {

    const counterAdult = useSelector(state => state.ModalPassengerReducer.counterAdult);
    const counterChild = useSelector(state => state.ModalPassengerReducer.counterChild);
    const counterBaby = useSelector(state => state.ModalPassengerReducer.counterBaby);


    const { flightData } = useSelector((state) => state.FlightDestinationReducer);
    console.log(flightData)
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const [seatClass, setSeatClass] = useState("");
    const [passenger, setPassenger] = useState("");
    const [checked, setChecked] = useState(false);
    let optionsFrom = flightData.map((data) => `${data?.source?.country}`);
    let optionsTo = flightData.map((data) => `${data.destination.country}`);

    const [selectedOptionFrom, setSelectedOptionFrom] = useState('Indonesia');
    const [selectedOptionTo, setSelectedOptionTo] = useState('Indonesia');

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    optionsFrom = removeDuplicates(optionsFrom)

    function removeDuplicatesTo(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    optionsTo = removeDuplicatesTo(optionsTo)

    const navigate = useNavigate()
    useEffect(() => {
        setPassenger({
            "jumlah": counterAdult + counterBaby + counterChild,
            "adult": counterAdult,
            "baby": counterBaby,
            "child": counterChild
        })
    }, [counterAdult, counterBaby, counterChild])
    console.log({
        selectedOptionFrom,
        selectedOptionTo,
        category: seatClass,
        date: selectedDate1,
        passenger: passenger
    })

    const dateString = selectedDate1;
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
    const convertedDate = `${year}-${month}-${day}`;

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

    const handleSeatClassChange = (value) => {
        const lowercaseSeatClass = value.toLowerCase();
        setSeatClass(lowercaseSeatClass);
    };

    const handleFromChange = (value) => {
        const lowerFlightFrom = value.toLowerCase();
        setSelectedOptionFrom(lowerFlightFrom);
    };

    const [isModalOpenFrom, setIsModalOpenFrom] = useState(false);
    const showModalFrom = () => {
        setIsModalOpenFrom(true);
    };

    const handleSelectionFrom = (selectedValue) => {
        setIsModalOpenFrom(false);
        setSelectedOptionFrom(selectedValue);
        onSelect(selectedValue);
    };

    const [isModalOpenTo, setIsModalOpenTo] = useState(false);
    const showModalTo = () => {
        setIsModalOpenTo(true);
    };

    const handleSelectionTo = (selectedValue) => {
        setIsModalOpenTo(false);
        setSelectedOptionTo(selectedValue);
        onSelect(selectedValue);
    };

    const return1Handler = () => {
        setSelectedOptionFrom(selectedOptionTo);
        setSelectedOptionTo(selectedOptionFrom);
    }

    const buttonHandler = async () => {
        if (selectedDate1 == null && passenger.jumlah == 0) {
            await toast.error('Silahkan pilih tanggal dan jumlah penumpang terlebih dahulu', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })

            setTimeout(() => {
                navigate('/')
            }, 1000);
        } else {
            navigate('/hasil-pencarian', {
                state: {
                    from : selectedOptionFrom,
                    to :selectedOptionTo,
                    category: seatClass,
                    date: selectedDate1,
                    passenger: passenger
                }
            });
        }
    }


    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Card className="relative flex flex-row md:mx-auto mx-8 -mt-4 md:w-1/2 lg:w-2/3 xl:w-2/3 lg:-mt-10 xl:-mt-14">
                <p className="text-lg font-bold lg:ml-4 xl:ml-4 md:-mt-0 -mt-3">Pilih Jadwal Penerbangan spesial di<span className=" text-primary2"> TerbangIn!</span></p>
                <div className="grid md:grid-cols-3 grid-cols mt-5">
                    <div>
                        <div className="flex items-center lg:ml-4 xl:ml-4">
                            <Image src={icon_pesawat} alt="icon_pesawat" className="lg:w-4 xl:w-4" />
                            <p className="text-primary1 text-base md:text-base ml-2 mr-2 lg:ml-2 xl:ml-2">From</p>
                            <div >
                                <div className="font-bold md:text-base cursor-pointer sm:ml-3 lg:ml-4" onClick={showModalFrom}>
                                    {selectedOptionFrom}
                                </div>
                                <Modal title="TerbangIn" open={isModalOpenFrom} onCancel={() => setIsModalOpenFrom(false)} footer={null}>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={optionsFrom}
                                        renderItem={(item, index) => (
                                            <List.Item onClick={() => handleSelectionFrom(item)} className={selectedOptionFrom === item ? 'selected' : ''}>
                                                <div className="text-md font-bold cursor-pointer">{item}</div>
                                            </List.Item>
                                        )}
                                    />
                                </Modal>
                            </div>
                        </div>
                        <hr className="flex md:ml-0 ml-[70px] border-1 lg:w-52 xl:w-60 w-44 lg:ml-[102px] xl:ml-[100px]" />
                        <div className="flex flex-col">
                            <div className="flex items-center mx-10 mt-7 gap-2">
                                <div className="text-base text-primary1 mx-10 lg:ml-16 xl:ml-14">Departure</div>
                                <div className="text-base text-primary1 lg:ml-7 lg:mr-12 xl:ml-20 xl:mr-16 ml-2">Return</div>
                                <div className="md:ml-0 "><InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} /></div>
                            </div>
                            <div className="flex items-center lg:mt-2 -mr-28 lg:ml-4 xl:ml-4 md:pb-0 md:gap-0 gap-2 pb-11">
                                <Image src={icon_date} alt="icon_date" className="w-4 md:w-6 xl:ml-1" />
                                <div className="text-base text-primary1 lg:ml-2 xl:px-1">Date</div>
                                <Calendar value={selectedDate1} onChange={handleDate1Change} numberOfMonths={2} dateFormat="dd MM yy" className="md:w-60 w-28 h-7 lg:mx-6 lg:w-32 xl:w-48 xl:ml-3 ml-0 mr-27 border-b outline-none" required />
                                <Calendar value={selectedDate2} onChange={handleDate2Change} numberOfMonths={2} disabled={!checked} minDate={selectedDate1} dateFormat="dd MM yy" className="md:w-60 w-28 -ml-24 lg:mx-1 lg:w-36 xl:w-60 h-7 xl:ml-3 xl:mr-3 border-b" />
                            </div>

                        </div>
                    </div>
                    <div className="md:mx-auto mx-36"><Image src={return1} alt="return1" onClick={return1Handler} className="cursor-pointer xl:w-4" /></div>
                    <div className="-ml-24 -mr-4">
                        <div className="flex items-center md:mt-0 mt-10">
                            <Image src={icon_pesawat} alt="icon_pesawat" className="w-6 mr-2 ml-24 sm:w-4 min-[1154px]:ml-2 max-[1279px]:2 lg:w-4 lg:mr-3 lg:ml-4 xl:mr-3" />
                            <p className="text-primary1 text-base md:text-base mr-2 lg:ml-2 xl:ml-2">To</p>
                            <div className="">
                                <div className="font-bold md:text-base cursor-pointer sm:ml-3 lg:ml-4" onClick={showModalTo}>
                                    {selectedOptionTo}
                                </div>
                                <Modal title="TerbangIn" open={isModalOpenTo} onCancel={() => setIsModalOpenTo(false)} footer={null}>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={optionsTo}
                                        renderItem={(item, index) => (
                                            <List.Item onClick={() => handleSelectionTo(item)} className={selectedOptionTo === item ? 'selected' : ''}>
                                                <div className="text-md font-bold cursor-pointer">{item}</div>
                                            </List.Item>
                                        )}
                                    />
                                </Modal>
                            </div>
                        </div>
                        <hr className="flex border-1 ml-38 lg:w-60 lg:ml-20 xl:w-60 w-44" />
                        <div className="mx-4 -mr-10 md:ml-5 ml-25">
                            <div className="flex mx-6 mt-8">
                                <div className="text-base text-primary1 min-[1154px]:ml-7 max-[1279px]:ml-7 xl:ml-11">Passengers</div>
                                <div className="text-base text-primary1 md:mx-18 mx-20">Seat Class</div>
                            </div>
                            <div className="flex items-center md:mt-4 mt-1">
                                <Image src={airline_seat} alt="airline_seat" className="w-7 md:w-6 min-[1154px]:-ml-2 max-[1279px]:-ml-2 xl:mr-2" />
                                <div className="text-base text-primary1">To</div>
                                <ModalPassengers className="border-b" value={passenger} setPassenger={setPassenger} />
                                <ModalSeatClass value={seatClass} onChange={handleSeatClassChange} />
                            </div>
                            <hr className="flex border-1 w-32 min-[1154px]:ml-[54px] max-[1279px]:ml-[54px] xl:ml-[67px] xl:w-28" />
                            <hr className="border-1 xl:ml-[14.3rem] lg: md:ml-56 ml-52 xl:w-20 lg:w-16 md:w-40 w-24 mb-5" />
                        </div>
                    </div>
                </div>
            </Card>
            <div className="relative bg-primary2 hover:bg-purple1 rounded-b-xl mx-auto lg:w-4/6 w-[327px] -mt-4 lg:-mt-4 xl:w-4/6 xl:-mt-4">
                <p className="text-center text-xs lg:text-base text-white font-bold cursor-pointer pt-2 pb-2 lg:pt-4 lg:pb-4 xl:py-3" onClick={buttonHandler}>Cari Penerbangan</p>
            </div>
        </>

    )
}

export default JadwalPenerbangan;