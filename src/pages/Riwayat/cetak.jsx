import "./Riwayat.css";
import "../../index.css";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import { Divider } from 'primereact/divider';
import logoflower from './flower_logo.png'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";    
import { Tag } from 'primereact/tag';                               
import { useLocation } from "react-router";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { setProducts } from '../../actions';
import Navbar from "../../components/Navbar";
import "../../index.css";
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Link } from "react-router-dom";

const Cetak = (props) => {
    const Location = useLocation()
    console.log(Location?.state?.props?.data[0]);

    function getTimes(date){
        const jam = new Date(date).getHours()
        const menit = new Date(date).getMinutes()
        return <>{jam} : {menit}</>
    }

    function getTanggal(dateIn){
        const date = new Date(dateIn);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);

        return(formattedDate);
    }

    const getClass = (economy, bussiness, first, premium) => {
        if(economy != null)  {
            return 'Economy'
        }else if(bussiness != null)  {
            return 'Bussiness'
        }else if(first != null)  {
            return 'First'
        }else if(premium != null)  {
            return 'Premium'
        }
    }
    return (
        <div>
                <Navbar />
                <Card>
                    <div className="pt-20 text-left mx-auto max-w-4xl">
                        <div className="text-left mx-auto flex-auto">
                            <div className="text-md font-bold text-900 lg:pb-4 sm:pb-2">Cetak Tiket</div>
                            <div className="text-base font-bold flex space-y-2 justify-between ">
                                <button className="w-full rounded-lg h-12 bg-binar-purple">
                                    <Link to={'/riwayat'} className="flex items-center font-semibold gap-2 ms-4 text-white">
                                        <div className="pi pi-arrow-left"></div>
                                        Riwayat
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                    <Card className="md:w-1/3 sm:w-full mx-auto border-4 border-binar-purple my-4">
                        <div className="text-md text-center justify-end font-bold text-binar-purple">Cetak Tiket</div>
                        <div className="text-md text-center justify-end font-base">Nikmati Perjalanan Anda!</div>
                        <Card className="p-0 button sm:mx-6 md:mx-auto border-2 justify-center border-binar-purple">
                            <div className="flex">
                                <div className="flex-1">
                                <div className="align-items-center align-items-center text-center">
                                    <div className="text-md font-bold text-900">{Location?.state?.props?.data[0].tiket[0].flight.source.name}</div>
                                    <div className="text-md">{getTanggal(Location?.state?.props?.data[0].tiket[0].flight.departure_date)}</div>
                                    <div className="text-md">{getTimes(Location?.state?.props?.data[0].tiket[0].flight.departure_date)}</div>
                                </div>
                                </div>
                                <div className="shrink-0 my-auto w-8">
                                    <div className="text-md font-bold text-binar-purple">to</div>
                                </div>
                                <div className="flex-1">
                                <div className="col-3 align-items-center align-items-center text-center">
                                    <div className="text-md font-bold text-900">{Location?.state?.props?.data[0].tiket[0].flight.destination.name}</div>
                                    <div className="text-md">{getTanggal(Location?.state?.props?.data[0].tiket[0].flight.arrival_date)}</div>
                                    <div className="text-md">{getTimes(Location?.state?.props?.data[0].tiket[0].flight.arrival_date)}</div>
                                </div>
                                </div>
                            </div>
                            <Divider className="m-0"/>
                            <div class="flex mx-4">
                                <div class="flex-1">
                                    <div className="text-xs font-semibold text-900">Class :</div>
                                    <div className="text-xs">{getClass((Location?.state?.props?.data[0].tiket[0].flight.economy_class_price),(Location?.state?.props?.data[0].tiket[0].flight.business_class_price),(Location?.state?.props?.data[0].tiket[0].flight.first_class_price),(Location?.state?.props?.data[0].tiket[0].flight.premium_price))}</div>
                                </div>
                                <div class="shrink-0 w-32 text-center">
                                    <div className="text-xs font-semibold text-900">Booking code :</div>
                                    <div className="text-md font-bold text-binar-purple">{Location?.state?.props?.data[0].kode_booking}</div>
                                </div>
                                <div class="flex-1 text-right">
                                    <div className="text-md ps-4 justify-end font-bold text-binar-purple">IDR {Location?.state?.props?.data[0].total_price}</div>
                                </div>
                            </div>
                        </Card>
                    <div className="text-center my-4">
                        <h1 className="text-sm font-semibold  text-binar-purple">Penumpang : {Location?.state?.props?.data[0].tiket[0].passenger.first_name}</h1>
                        <div className="text-sm font-medium text-700">ID : {Location?.state?.props?.data[0].tiket[0].passenger.identity_number}</div>
                    </div>
                    <div className="text-base font-semibold text-900 pt-4 text-center">Fasilitas</div>
                    <div className="text-base font-semibold text-900 pt-4 text-center">{Location?.state?.props?.data[0].tiket[0].flight.information.map(e=> 
                                (
                                    <h1 className="text-sm font-semibold  text-binar-purple">- {e.name}</h1>
                                ))}</div>
                    </Card>
                    <div className="text-left mt-6 grid sm:grid-cols-1 md:grid-cols-2 sm:mx-4 xs:mx-12 md:mx-auto max-w-4xl">
                <div>
                </div>
                <div>

                </div>
            </div>
            </div>
    )
}

export default Cetak;