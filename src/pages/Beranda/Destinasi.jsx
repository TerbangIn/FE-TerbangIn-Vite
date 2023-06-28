import {React, useState} from "react";
import { Image } from "primereact/image";
import { useSelector} from "react-redux";
import { Card } from "primereact/card";
import rupiah from "../../formatter/rupiah";
import { Button } from "primereact/button";


function Destinasi() {
    const { flightData } = useSelector((state) => state.FlightDestinationReducer)
    const [filter,setFilter ] = useState('');
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
    console.log(filter)

    const date = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    return (
        <div className="flex justify-center">
            <div className="container ml-20 sm:ml- lg:ml-48">
                <div className="flex flex-row pt-10">
                    <p className="font-sans1 font-bold text-base">Destinasi Favorit</p>
                </div>
                <div className="flex mt-4 sm:mt-4 md:mt-4 lg:mt-4">
                    
                    <div className="grid gap-4 sm:gap-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        <Button onClick={() => {setFilter("")}} label="Semua" icon="pi pi-search" />
                        <Button onClick={() => {setFilter("Asia")}}  label="Asia" icon="pi pi-search" />
                        <Button onClick={() => {setFilter("America")}}  label="Amerika" icon="pi pi-search" />
                        <Button onClick={() => {setFilter("Europe")}}  label="Eropa" icon="pi pi-search" />
                        <Button onClick={() => {setFilter("Africa")}}  label="Afrika" icon="pi pi-search" />
                    </div>
                
                    {/* <Image src={button_all} alt="button_all" onClick={buttonHandler} className="w-32 cursor-pointer" />
                    <Image src={button_asia} alt="button_asia" className="pl-4 w-32 cursor-pointer" />
                    <Image src={button_amerika} alt="button_amerika" className="pl-4 w-40 cursor-pointer" />
                    <Image src={button_australia} alt="button_australia" className="pl-4 w-40 cursor-pointer" />
                    <Image src={button_eropa} alt="button_eropa" className="pl-4 w-32 cursor-pointer" />
                    <Image src={button_afrika} alt="button_afrika" className="pl-4 w-32 cursor-pointer" /> */}

                </div>
                <div className="w-4/5 xl:py-4 lg:py-4 md:py-8 sm:py-4 py-4">
                    <div className="grid gap-4 sm:gap-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        { 
                            filter == '' ? 
                            
                                flightData.map((flight,i) => (
                                // eslint-disable-next-line react/jsx-key
                                 (
                                    <Card key={i} onClick={() => {console.log("aaaa")}} className="p button cursor-pointer" >
                                    <div>
                                        <Image src={flight.image} alt="img"/>
                                    </div>
                                    <div>
                                        <p className="mt-2 font-semibold">{flight?.source?.city} <i className="pi pi-arrow-right" style={{ fontSize: '12px' }}></i> {flight?.destination?.city}</p>
                                    </div>
                                    <div>
                                        <p className="text-button1 font-bold text-sm  text-purple-600">{flight.airline}</p>
                                    </div>
                                    <div>
                                        <p>{date(flight.departure_date)}</p>
                                    </div>
                                    <div>
                                        <p className="text-lg"><span className="font-bold text-primary5">{rupiah(flight.economy_class_price ? flight.economy_class_price : flight.first_class_price)} </span></p>
                                    </div>
                                </Card>
                                )
                                ))
                            : (
                                flightData.filter((data) =>  data.destination.continent == filter).map((flight,i) => {
                                    return (
                                        <Card key={i} onClick={() => {console.log("aaaa")}} className="p button cursor-pointer" >
                                    <div>
                                        <Image src={flight.image} alt="img"/>
                                    </div>
                                    <div>
                                        <p className="mt-2 font-semibold">{flight?.source?.city} <i className="pi pi-arrow-right" style={{ fontSize: '12px' }}></i> {flight?.destination?.city}</p>
                                    </div>
                                    <div>
                                        <p className="text-button1 font-bold text-sm  text-purple-600">{flight.airline}</p>
                                    </div>
                                    <div>
                                        <p>{date(flight.departure_date)}</p>
                                    </div>
                                    <div>
                                        <p className="text-lg"><span className="font-bold text-primary5">{rupiah(flight.economy_class_price ? flight.economy_class_price : flight.first_class_price)} </span></p>
                                    </div>
                                </Card>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Destinasi;