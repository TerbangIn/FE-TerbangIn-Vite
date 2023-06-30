import React from "react";
import success from './images/illustration _Cart shopping list_.svg';
import Navbar from "./navbar";

function Success(){
    return(
        <>
            <header className="border-none shadow-md ">
                <Navbar />
                <div className="flex flex-row space-x-2 ml-[260px] mt-[47px]">
                    <p className="text-xl font-bold">Isi Data Diri</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl font-bold" >Bayar</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl font-bold">Selesai</p>
                </div>
                <div
                    className=" w-[936px] h-[60px] mx-auto "
                >
                    <div className="relative mx-auto">
                        {/*content*/}
                        <div className="border-0 rounded-xl shadow-lg relative h-[50px] mt-1 flex flex-col bg-[#73ca5c] outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-center rounded-t mt-1">
                                <h1 className="justify-center items-center mt-2 text-lg text-white font-semibold">
                                    Terimakasih atas pembayaran transaksi
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex justify-center items-center">
                <div className="mb-[200px]">
                    <img src={success} alt="" className="mt-[90px]" />
                    <div className="">
                        <h1 className="text-purple-600 text-sm mt-[18px] flex justify-center ">Selamat</h1>
                        <h1 className="text-sm flex justify-center ">Transaksi Pembayaran Tiket sukses!</h1>
                    </div>
                    <button className="w-[347px] h-12 text-white bg-purple-700 rounded-lg mt-[52px]">Terbitkan Tiket</button><br />
                    <button className="w-[347px] h-12 text-white bg-[#D0B7E6] rounded-lg mt-3">Cari Penerbangan Lain</button>
                </div>
            </div>
        </>
    )
}

export default Success;