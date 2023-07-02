import React from "react";
import Accordion from "./accordion";
import image from './images/Image.svg';
import Navbar from "./navbar";
import Detail from "./detail";


function Payment() {
    return (
        <>
            <header className="border-none shadow-md ">
                <Navbar />
                <div className="flex flex-row space-x-2 xl:ml-[260px] lg:ml-36 md:ml-20 sm:ml-10 mt-[47px]">
                    <p className="text-xl font-bold">Isi Data Diri</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl font-bold" >Bayar</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl">Selesai</p>
                </div>
                <div
                    className="lg:w-[936px] xl:w-[936px] md:w-[600px] sm:w-[500px] h-[60px] mx-auto mt-5 "
                >
                    <div className="relative mx-auto">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg h-[50px] relative mt-2 flex flex-col bg-[#FF0000] outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-center rounded-t mt-1">
                                <h1 className="justify-center items-center mt-2 text-lg text-white font-semibold">
                                    Selesaikan Pembayaran sampai 10 maret 2023 12:00
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-row justify-center mt-3 mb-10">
                <div>
                    <h1 className="text-[20px] font-bold mb-4">Isi Data Pembayaran</h1>
                    <Accordion />
                </div>
                <Detail/>
            </div>
        </>
    )
}

export default Payment;