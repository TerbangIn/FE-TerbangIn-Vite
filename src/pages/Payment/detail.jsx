import React, { useEffect, useState } from "react";
import image from './images/Image.svg';
import axios from "axios";


function Detail({flight,passenger}){
    const url = `https://be-tiketku-production.up.railway.app/api/v1/flight/`;
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6b2RwbHVnaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3ODI2MDIyfQ.CWCHyHUTxhnYRRcCTnth-0XhKTfWMe3wmGjGl4Vx54U";

        axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then((response) => {
            setData(response.data);
            // console.log(response.data)
        })
        .catch((error) => {
            console.error(error);
        });
        
    }, []);


    return (
        <>  
            <div>
                <div className="ml-7">
                    <h1 className="text-lg font-bold">Detail Penerbangan</h1>
                    <div className="flex flex-row">
                        <div>
                            <h2 className="font-bold text-base '">{flight?.departure_date ? new Date(flight?.departure_date).toTimeString().slice(0,5) : "--:--"} WIB</h2>
                            <p className="text-sm mt-1">{flight?.departure_date ? new Date(flight?.departure_date).toDateString() : ""}</p>
                        </div>
                        <div className="ml-[158px]">
                            <h1 className="text-[#a06ece] text-xs font-bold">Keberangkatan</h1>
                        </div>
                    </div>
                    <h1 className="text-sm mt-1 font-semibold">{flight?.source?.name}</h1>
                    <div className="border-b bg-[#8a8a8a] border w-[328px]"></div>
                </div>
                <div className="ml-7">
                    <div className="flex flex-row">
                        <img src={image} alt="" />
                        <div className="ml-2">
                            <h1 className="text-sm font-bold">{flight?.airline}</h1>
                            <h1 className="text-[14px] font-bold mb-4">{flight?.flight_number}</h1>
                            <p className="font-bold text-[14px]">Informasi:</p>
                            {
                                flight?.information?.map((data) => {
                                    return (<p className="text-[14px] ">{data?.name}</p>)
                                })
                            }
                        </div>
                    </div>
                    <div className="border-b bg-[#8a8a8a] border w-[328px]"></div>
                </div>
                <div >
                    <div className="mt-3 ml-7">
                        <div className="flex flex-row">
                            <div>
                                <h2 className="font-bold text-base '">{new Date(flight?.arrival_date).toTimeString().slice(0,5)} WIB</h2>
                                <p className="text-sm ">{new Date(flight?.arrival_date).toDateString()}</p>
                            </div>
                            <div className="ml-[175px]">
                                <h1 className="text-[#a06ece] text-xs font-bold">Kedatangan</h1>
                            </div>
                        </div>
                        <h1 className="text-sm font-semibold">{flight?.destination?.name}</h1>
                        <hr className="bg-[#8a8a8a] " />
                    </div>
                </div>
                <div className="ml-7">
                    <h1 className="text-sm font-bold mt-3">Rincian Harga</h1>
                    <div>
                        {
                            (passenger?.adult > 0) ? 
                            <div className="flex flex-row justify-between">
                                <h1 className="text-sm w-56">{passenger?.adult} Adults</h1>
                                <h1 className="text-sm ml-2">{flight?.economy_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.economy_class_price*(flight?.adult_price_percentage/100)* passenger.adult) : (flight?.business_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.business_class_price*(flight?.adult_price_percentage/100)* passenger.adult ) : (flight?.first_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.first_class_price*(flight?.adult_price_percentage/100)* passenger.adult) : (flight?.premium_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.premium_price*(flight?.adult_price_percentage/100)* passenger.adult) : 0)))}</h1>
                            </div>  : ""
                        }
                        {
                            (passenger?.child > 0) ? 
                            <div className="flex flex-row justify-between">
                                <h1 className="text-sm w-56">{passenger?.child} Childs</h1>
                                <h1 className="text-sm ml-2">{flight?.economy_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.economy_class_price*(flight?.child_price_percentage/100)* passenger?.child) : (flight?.business_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.business_class_price*(flight?.child_price_percentage/100)*passenger?.child) : (flight?.first_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.first_class_price*(flight?.child_price_percentage/100)*passenger?.child) : (flight?.premium_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.premium_price*(flight?.child_price_percentage/100)*passenger?.child) : 0)))}</h1>
                            </div>  : ""
                        }
                        {
                            (passenger?.baby > 0) ? 
                            <div className="flex flex-row justify-between">
                                <h1 className="text-sm w-56">{passenger?.baby} Babys</h1>
                                <h1 className="text-sm ml-2">{flight?.economy_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.economy_class_price*(flight?.baby_price_percentage/100)*passenger?.baby) : (flight?.business_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.business_class_price*(flight?.baby_price_percentage/100)*passenger?.baby) : (flight?.first_class_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.first_class_price*(flight?.baby_price_percentage/100)*passenger?.baby) : (flight?.premium_price ? Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(flight?.premium_price*(flight?.baby_price_percentage/100)*passenger?.baby) : 0)))}</h1>
                            </div>  : ""
                        }
                        
                        
                    </div>
                    <div className=" border-[#8a8a8a] border-b-0 w-[328px]"></div>
                </div>
                <div className="ml-7 mt-2 flex flex-row justify-between">
                    <h1 className="font-bold text-base w-[200px]">Total</h1>
                    <h1 className="text-purple-900 font-bold  ml-[10px] text-lg">{Intl.NumberFormat ("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format((flight?.economy_class_price ? flight?.economy_class_price*(flight?.adult_price_percentage/100)*passenger?.adult : (flight?.business_class_price ? flight?.business_class_price*(flight?.adult_price_percentage/100)*passenger?.adult : (flight?.first_class_price ? flight?.first_class_price*(flight?.adult_price_percentage/100)*passenger?.adult : (flight?.premium_price ? flight?.premium_price*(flight?.adult_price_percentage/100) : 0)*passenger?.adult))) + ((flight?.economy_class_price ? flight?.economy_class_price*(flight?.baby_price_percentage/100)*passenger?.baby : (flight?.business_class_price ? flight?.business_class_price*(flight?.baby_price_percentage/100)*passenger?.baby : (flight?.first_class_price ? flight?.first_class_price*(flight?.baby_price_percentage/100)*passenger?.baby : (flight?.premium_price ? flight?.premium_price*(flight?.baby_price_percentage/100)*passenger?.baby : 0))))) + (flight?.economy_class_price ? flight?.economy_class_price*(flight?.child_price_percentage/100)*passenger?.child : (flight?.business_class_price ? flight?.business_class_price*(flight?.child_price_percentage/100)*passenger?.child : (flight?.first_class_price ? flight?.first_class_price*(flight?.child_price_percentage/100)*passenger?.child : (flight?.premium_price ? flight?.premium_price*(flight?.child_price_percentage/100)*passenger?.child : 0)))) )}</h1>
                </div>
            </div>
        </>
    )
}

export default Detail;