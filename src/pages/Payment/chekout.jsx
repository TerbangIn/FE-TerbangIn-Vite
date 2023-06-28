import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import SeatCustomer from "./seat";
import image from './images/Image.svg';
import Navbar from "./navbar";
import Modal from './modal';
import Submit from "./submit-success";
import Timer from "./timer";
import Axios from "axios";


function Checkout() {
    const url = "https://be-tiketku-production.up.railway.app/api/v1/passenger/"
    const [data, setdata] = useState({
        title: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
        country: "",
        identity_number: "",
        identity_number_of_country: "",
        expired_date: "",
    })


    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6b2RwbHVnaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NTI2MTk4fQ.iRVs6h7tqkC29USwhNUe2sB_B-w0KZ7rCFx_VfSDvrQ";
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            title: data.title,
            first_name: data.first_name,
            last_name: data.last_name,
            date_of_birth: data.date_of_birth,
            country: data.country,
            identity_number: data.identity_number,
            identity_number_of_country: data.identity_number_of_country,
            expired_date: data.expired_date,
        },{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => {
                console.log(res.data)
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setdata(newData)
        console.log(newData)
    }


    
    return (
        <div>
            <header className="border-none shadow-md ">
                <Navbar />
                <div className="flex flex-row space-x-2 ml-[260px] mt-[47px]">
                    <p className="text-xl font-bold">Isi Data Diri</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl" >Bayar</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl">Selesai</p>
                </div>
                {/* <Modal/> */}
                {/* <Submit/> */}
                <Timer seconds={900} />

            </header>
            <div className="flex flex-row ml-67 mt-4">
                <form onSubmit={(e) => submit(e)}>
                    <div className="">
                        <div className="data w-[518px] h-97 border-2 border-light-gray rounded mb-[34px]">
                            <h1 className="text-xl1 font-bold mt-[26px] mb-4 mx-4 ">Isi Data Pemesan</h1>
                            <h1 className="w-[486px] h-10 mx-3 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Pemesan</h1>
                            <div className="font-semibold align-middle ml-[26px]">
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Nama Lengkap
                                    </label>
                                    <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                    <div className="ml-63">
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" checked />
                                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Nama Keluarga
                                    </label>
                                    <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex-auto mb-3 ">
                                    <label htmlFor="number" className="font-bold block mb-1 text-purple1 ">
                                        Nomor Telepon
                                    </label>
                                    <InputText id="number" keyfilter="num" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md " />
                                </div>
                                <div className="flex-auto mb-3">
                                    <label htmlFor="alphanumeric" className="font-bold block mb-1 text-purple1 ">
                                        Email
                                    </label>
                                    <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="data w-[518px] border-2 border-light-gray rounded">
                            <h1 className="text-xl1 font-bold mt-6.5 mb-4 mx-4 mt-4">Isi Data Penumpang</h1>
                            <h1 className="w-[486px] h-10 mx-3 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang 1 - Adult</h1>
                            <div className="font-semibold align-middle ml-8">
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Title
                                    </label>
                                    <select onChange={(e) => handle(e)} id="title" value={data.title} placeholder="Select title" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md">
                                        <option id="Tn." value="Tn.">Tn.</option>
                                        <option id="Mr." value="Mr.">Mr.</option>
                                        <option id="Mrs." value="Mrs.">Mrs.</option>
                                    </select>
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Nama Lengkap
                                    </label>
                                    <input onChange={(e) => handle(e)} id="first_name" value={data.first_name} className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                    <div className="ml-63">
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" checked />
                                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Nama Keluarga
                                    </label>
                                    <input onChange={(e) => handle(e)} id="last_name" value={data.last_name} className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Tanggal Lahir
                                    </label>
                                    <input onChange={(e) => handle(e)} id="date_of_birth" value={data.date_of_birth} type="date" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex-auto mb-3">
                                    <label htmlFor="alphanumeric" className="font-bold block mb-1 text-purple1 ">
                                        Kewarganegaraan
                                    </label>
                                    <input onChange={(e) => handle(e)} id="country" value={data.country} className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex-auto mb-3 ">
                                    <label htmlFor="number" className="font-bold block mb-1 text-purple1 ">
                                        KTP/Paspor
                                    </label>
                                    <InputText onChange={(e) => handle(e)} id="identity_number" value={data.identity_number} keyfilter="num" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md " />
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Negara Penerbit
                                    </label>
                                    <select onChange={(e) => handle(e)} id="identity_number_of_country" value={data.identity_number_of_country} placeholder="Select country" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md">
                                        <option id="indonesia" value="indonesia">Indonesia</option>
                                        <option id="malaysia" value="malaysia">Malaysia</option>
                                    </select>
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Berlaku Sampai
                                    </label>
                                    <input onChange={(e) => handle(e)} id="expired_date" value={data.expired_date} type="date" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md mb-8" />
                                </div>
                            </div>
                            <h1 className="w-[486px] h-10 mx-3 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang 2 - Adult</h1>
                            <div className="font-semibold align-middle ml-8">

                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Title
                                    </label>
                                    <select onChange={(e) => handle(e)} id="title" value={data.title} placeholder="Select title" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md">
                                        <option id="Mr." value="Mr.">Mr.</option>
                                        <option id="Mrs." value="Mrs.">Mrs.</option>
                                        <option id="Tn." value="Tn.">Tn.</option>
                                    </select>
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Nama Lengkap
                                    </label>
                                    <input onChange={(e) => handle(e)} id="first_name" value={data.first_name} className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                    <div className="ml-63">
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" checked />
                                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Nama Keluarga
                                    </label>
                                    <input onChange={(e) => handle(e)} id="last_name" value={data.last_name} className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Tanggal Lahir
                                    </label>
                                    <input onChange={(e) => handle(e)} id="date_of_birth" value={data.date_of_birth} type="date" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex-auto mb-3">
                                    <label htmlFor="alphanumeric" className="font-bold block mb-1 text-purple1 ">
                                        Kewarganegaraan
                                    </label>
                                    <input onChange={(e) => handle(e)} id="country" value={data.country} className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex-auto mb-3 ">
                                    <label htmlFor="number" className="font-bold block mb-1 text-purple1 ">
                                        KTP/Paspor
                                    </label>
                                    <InputText onChange={(e) => handle(e)} id="identity_number" value={data.identity_number} keyfilter="num" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md " />
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Negara Penerbit
                                    </label>
                                    <select onChange={(e) => handle(e)} id="identity_number_of_country" value={data.identity_number_of_country} placeholder="Select country" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md">
                                        <option id="indonesia" value="indonesia">Indonesia</option>
                                        <option id="malaysia" value="malaysia">Malaysia</option>
                                    </select>
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-purple1 ">
                                        Berlaku Sampai
                                    </label>
                                    <input onChange={(e) => handle(e)} id="expired_date" value={data.expired_date} type="date" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <SeatCustomer />
                        </div>
                    </div>

                    <button className="ml-2 bg-[#7126b5] w-[500px] h-[62px] rounded-lg drop-shadow-lg text-white mb-[132px]" type="submit" >Submit</button>
                </form>
                <div>
                    <div className="ml-7">
                        <h1 className="text-lg font-bold">Detail Penerbangan</h1>
                        <div className="flex flex-row">
                            <div>
                                <h2 className="font-bold text-base '">07:00</h2>
                                <p className="text-sm -mt-2">3 Maret 2023</p>
                            </div>
                            <div className="ml-38">
                                <h1 className="text-purple1 text-xs">Keberangkatan</h1>
                            </div>
                        </div>
                        <h1 className="text-sm -mt-3">Soekarno Hatta - Terminal 1A Domestik</h1>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div className="ml-7">
                        <div className="flex flex-row">
                            <img src={image} alt="" />
                            <div className="ml-2">
                                <h1 className="text-sm font-bold">Jet Air - Economy</h1>
                                <h1 className="text-1sm font-bold -mt-2">JT - 203</h1>
                                <p className="font-bold text-1sm">Informasi:</p>
                                <p className="-mt-4 text-1sm">Baggage 20 kg</p>
                                <p className="text-1sm -mt-4">Cabin baggage 7 kg</p>
                                <p className="text-1sm -mt-4">In Flight Entertainment</p>
                            </div>
                        </div>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div >
                        <div className="mt-3 ml-7">
                            <div className="flex flex-row">
                                <div>
                                    <h2 className="font-bold text-base '">11:00</h2>
                                    <p className="text-sm -mt-2">3 Maret 2023</p>
                                </div>
                                <div className="ml-38">
                                    <h1 className="text-purple1 text-xs">Kedatangan</h1>
                                </div>
                            </div>
                            <h1 className="text-sm -mt-3">Melbourne International Airportk</h1>
                            <div className="border-b bg-light-gray border w-82"></div>
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
                                <h1 className="text-sm w-70">1 Baby</h1>
                                <h1 className="text-sm">IDR 0</h1>
                            </div>
                            <div className="flex flex-row">
                                <h1 className="text-sm w-60">Tax</h1>
                                <h1 className="text-sm ml-1">IDR 300.000</h1>
                            </div>
                        </div>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div className="ml-7 flex flex-row">
                        <h1 className="font-bold text-base w-48">Total</h1>
                        <h1 className="text-purple-900 font-bold  ml-[10px] text-lg">IDR 9.850.000</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Checkout;