import { React, useState } from "react";
import { Image } from "primereact/image";
import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import rupiah from "../../formatter/rupiah";
import { Button } from "primereact/button";

import destination from "../../assets/images/jkt_bnk1.svg"

function Destinasi() {
    const { flightData } = useSelector((state) => state.FlightDestinationReducer)
    const [filter, setFilter] = useState('');
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

    function formatRupiah(price) {
        const million = Math.floor(price / 1000000); // Bagian jutaan
        const thousand = Math.floor((price % 1000000) / 1000); // Bagian ribuan

        let formattedPrice = '';

        if (million > 0) {
            formattedPrice += million + ' juta ';
        }

        if (thousand > 0) {
            formattedPrice += thousand + ' ribu ';
        }

        return formattedPrice.trim();
    }

    return (
        <div className="flex justify-center">
            <div className="container ml-20 sm:ml- lg:ml-48 xl:ml-56 2xl:ml-64">
                <div className="flex flex-row pt-10">
                    <p className="font-sans1 font-bold text-base">Destinasi Favorit</p>
                </div>
                <div className="flex mt-4 sm:mt-4 md:mt-4 lg:mt-4">
                    <div className="grid gap-4 sm:gap-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        <Button severity="help" onClick={() => { setFilter("") }} label="Semua" icon="pi pi-search" />
                        <Button severity="help" onClick={() => { setFilter("Asia") }} label="Asia" icon="pi pi-search" />
                        <Button severity="help" onClick={() => { setFilter("America") }} label="Amerika" icon="pi pi-search" />
                        <Button severity="help" onClick={() => { setFilter("Europe") }} label="Eropa" icon="pi pi-search" />
                        <Button severity="help" onClick={() => { setFilter("Africa") }} label="Afrika" icon="pi pi-search" />
                    </div>
                </div>
                <div className="w-4/5 xl:py-4 lg:py-4 md:py-8 sm:py-4 py-4">
                    <div className="grid gap-5 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {
                            filter == '' ?

                                flightData.map((flight, i) => (
                                    (
                                        <Card key={i} onClick={() => { console.log(formatRupiah(Math.floor(Math.random() * 9000000) + 1000000)) }} className="p button cursor-pointer hover:bg-neutral-100 hover:scale-105" >
                                            <div>
                                                <Image src={flight?.image} alt="img" width="200px" />
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
                                                <p className="text-lg"><span className="font-bold text-primary5">{rupiah(flight?.economy_class_price ? flight?.economy_class_price : flight?.first_class_price ? flight?.first_class_price : flight?.business_class_price ? flight?.business_class_price : flight?.premium_price)} </span></p>
                                            </div>
                                        </Card>
                                    )
                                ))
                                : (
                                    flightData.filter((data) => data.destination.continent == filter).map((flight, i) => {
                                        return (
                                            <Card key={i} onClick={() => { console.log("aaaa") }} className="p button cursor-pointer hover:bg-neutral-100 hover:scale-105" >
                                                <div>
                                                    <Image src={flight?.image} alt="img" width="200px" />
                                                </div>
                                                <div>
                                                    <p className="mt-2 font-semibold">{flight?.source?.country} <i className="pi pi-arrow-right" style={{ fontSize: '12px' }}></i> {flight?.destination?.country}</p>
                                                </div>
                                                <div>
                                                    <p className="text-button1 font-bold text-sm  text-purple-600">{flight.airline}</p>
                                                </div>
                                                <div>
                                                    <p>{date(flight.departure_date)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-lg"><span className="font-bold text-primary5">{rupiah(flight?.economy_class_price ? flight?.economy_class_price : flight?.first_class_price ? flight?.first_class_price : flight?.business_class_price ? flight?.business_class_price : flight?.premium_price)} </span></p>
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