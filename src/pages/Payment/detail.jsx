import React, { useEffect, useState } from "react";
import image from './images/Image.svg';
import axios from "axios";


function Detail(){
    const url = `https://be-tiketku-production.up.railway.app/api/v1/flight`;
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
                            <h2 className="font-bold text-base '">07:00</h2>
                            <p className="text-sm -mt-2">3 Maret 2023</p>
                        </div>
                        <div className="ml-[158px]">
                            <h1 className="text-[#4b1979] text-xs">Keberangkatan</h1>
                        </div>
                    </div>
                    <h1 className="text-sm -mt-3">{data?.data?.[0].source?.name}</h1>
                    <div className="border-b bg-[#8a8a8a] border w-[328px]"></div>
                </div>
                <div className="ml-7">
                    <div className="flex flex-row">
                        <img src={image} alt="" />
                        <div className="ml-2">
                            <h1 className="text-sm font-bold">{data?.data?.[0].airline}</h1>
                            <h1 className="text-[14px] font-bold -mt-2">JT - 203</h1>
                            <p className="font-bold text-[14px]">Informasi:</p>
                            <p  className="-mt-4 text-[14px]">{data?.data?.[0].information?.[0].name}</p>
                            <p className="text-[14px] -mt-4">{data?.data?.[0].information?.[1].name}</p>
                            <p className="text-[14px] -mt-4">{data?.data?.[0].information?.[2].name}</p>
                        </div>
                    </div>
                    <div className="border-b bg-[#8a8a8a] border w-[328px]"></div>
                </div>
                <div >
                    <div className="mt-3 ml-7">
                        <div className="flex flex-row">
                            <div>
                                <h2 className="font-bold text-base '">11:00</h2>
                                <p className="text-sm -mt-2">3 Maret 2023</p>
                            </div>
                            <div className="ml-[158px]">
                                <h1 className="text-[#4b1979] text-xs">Kedatangan</h1>
                            </div>
                        </div>
                        <h1 className="text-sm -mt-3">{data?.data?.[0].destination?.name}</h1>
                        <div className="border-b bg-[#8a8a8a] border w-[328px]"></div>
                    </div>
                </div>
                <div className="ml-7">
                    <h1 className="text-sm font-bold">Rincian Harga</h1>
                    <div>
                        <div className="flex flex-row">
                            <h1 className="text-sm w-56">2 Adults</h1>
                            <h1 className="text-sm ml-2">IDR 9.550.000</h1>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-sm w-[]">1 Baby</h1>
                            <h1 className="text-sm">IDR 0</h1>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-sm w-60">Tax</h1>
                            <h1 className="text-sm ml-1">IDR 300.000</h1>
                        </div>
                    </div>
                    <div className="border-b bg-[#8a8a8a] border w-[328px]"></div>
                </div>
                <div className="ml-7 flex flex-row">
                    <h1 className="font-bold text-base w-48">Total</h1>
                    <h1 className="text-purple-900 font-bold  ml-[10px] text-lg">IDR 9.850.000</h1>
                </div>
            </div>
        </>
    )
}

export default Detail;