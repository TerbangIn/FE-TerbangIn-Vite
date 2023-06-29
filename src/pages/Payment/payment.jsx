import React from "react";
import Accordion from "./accordion";
import image from './images/Image.svg';
import Navbar from "./navbar";



function Payment() {
    return (
        <>
            <header className="border-none shadow-md ">
                <Navbar />
                <div className="flex flex-row space-x-2 ml-[260px] mt-[47px]">
                    <p className="text-xl font-bold">Isi Data Diri</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl font-bold" >Bayar</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl">Selesai</p>
                </div>
                <div
                    className=" w-[936px] h-[50px] mx-auto "
                >
                    <div className="relative mx-auto">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-[#FF0000] outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-center rounded-t mt-1">
                                <h1 className="justify-center items-center text-lg text-white font-semibold">
                                    Selesaikan Pembayaran sampai 10 maret 2023 12:00
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-row mt-3">s
                <div>
                    <h1 className="text-1xl ml-[308px] font-bold mb-4">Isi Data Pembayaran</h1>
                    <Accordion />
                </div>
                <div>
                    <div className="ml-11">
                        <div>
                            <h1 className="text-lg font-bold">Booking Code:</h1>
                            <h1 className="text-purple-600 text-lg">6723y2GHK</h1>
                        </div>
                        <div className="flex flex-row">
                            <div>
                                <h2 className="font-bold text-base '">07:00</h2>
                                <p className="text-sm -mt-2">3 Maret 2023</p>
                            </div>
                            <div className="ml-[158px]">
                                <h1 className="text-[#4b1979] text-xs">Keberangkatan</h1>
                            </div>
                        </div>
                        <h1 className="text-sm -mt-3">Soekarno Hatta - Terminal 1A Domestik</h1>
                        <div className="border-b bg-[#8a8a8a] border w-[328px]"></div>
                    </div>
                    <div className="ml-7">
                        <div className="flex flex-row">
                            <img src={image} alt="" />
                            <div className="ml-2">
                                <h1 className="text-sm font-bold">Jet Air - Economy</h1>
                                <h1 className="text-[14px] font-bold -mt-2">JT - 203</h1>
                                <p className="font-bold text-[14px]">Informasi:</p>
                                <p className="-mt-4 text-[14px]">Baggage 20 kg</p>
                                <p className="text-[14px] -mt-4">Cabin baggage 7 kg</p>
                                <p className="text-[14px] -mt-4">In Flight Entertainment</p>
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
                            <h1 className="text-sm -mt-3">Melbourne International Airportk</h1>
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
                                <h1 className="text-sm w-[285px]">1 Baby</h1>
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
                        <h1 className="text-purple-900 font-bold  ml=[10px] text-lg">IDR 9.850.000</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment;