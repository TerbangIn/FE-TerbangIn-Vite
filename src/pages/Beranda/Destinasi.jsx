import {React} from "react";
import { Image } from "primereact/image";
import { useSelector} from "react-redux";


import button_all from "../../assets/images/button.svg"
import button_asia from "../../assets/images/button_asia.svg"
import button_amerika from "../../assets/images/button_amerika.svg"
import button_australia from "../../assets/images/button_australia.svg"
import button_eropa from "../../assets/images/button_eropa.svg"
import button_afrika from "../../assets/images/button_afrika.svg"


function Destinasi() {
    const { flightData } = useSelector((state) => state.FlightDestinationReducer)
    console.log(flightData)
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const date = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
    const buttonHandler = () => {
        console.log("Aku melakukan pencarian")
    }

    return (
        <div className="flex justify-center">
            <div className="container ml-20 sm:ml- lg:ml-48">
                <div className="flex flex-row pt-10">
                    <p className="font-sans1 font-bold text-base">Destinasi Favorit</p>
                </div>
                <div className="flex items-center mt-4 sm:mt-4 md:mt-4 lg:mt-4">
                    <Image src={button_all} alt="button_all" onClick={buttonHandler} className="w-32 cursor-pointer" />
                    <Image src={button_asia} alt="button_asia" className="pl-4 w-32 cursor-pointer" />
                    <Image src={button_amerika} alt="button_amerika" className="pl-4 w-40 cursor-pointer" />
                    <Image src={button_australia} alt="button_australia" className="pl-4 w-40 cursor-pointer" />
                    <Image src={button_eropa} alt="button_eropa" className="pl-4 w-32 cursor-pointer" />
                    <Image src={button_afrika} alt="button_afrika" className="pl-4 w-32 cursor-pointer" />

                </div>
                <div className="w-4/5 xl:py-4 lg:py-4 md:py-8 sm:py-4 py-4">
                    <div className="grid gap-4 sm:gap-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {flightData.map((flight) => (
                            <div className="flex flex-col border-2 rounded-md w-52 h-56 cursor-pointer px-2 lg:mt-3">
                                <div>
                                    <Image src={flight.image} alt="img"/>
                                </div>
                                <div>
                                    {/* <p className="font-bold">{flight.source.city} <i className="pi pi-arrow-right" style={{ fontSize: '12px' }}></i> {flight.destination.country}</p> */}
                                </div>
                                <div>
                                    <p className="text-button1">{flight.airline}</p>
                                </div>
                                <div>
                                    <p>{date(flight.departure_date)}</p>
                                </div>
                                <div>
                                    <p>Mulai dari <span className="text-primary5">IDR {flight.economy_class_price}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Destinasi;