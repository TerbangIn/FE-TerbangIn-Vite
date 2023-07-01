import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import SeatCustomer from "./seat";
import image from './images/Image.svg';
// import Navbar from "./navbar";
import Navbar from "../../components/Navbar";
import Modal from './modal';
import Submit from "./submit-success";
import Timer from "./timer";
import Axios from "axios";
import Detail from "./detail";
import jwtDecode from "jwt-decode";
import { useParams, Link } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';




function Checkout() {
    const url = "https://be-tiketku-production.up.railway.app/api/v1/passenger/"
    const url1 = "https://be-tiketku-production.up.railway.app/api/v1/seat/"
    const urlTransaction = `https://be-tiketku-production.up.railway.app/api/v1/transaksi`;
    const [isChecked, setIsChecked] = useState(false);
    const [dataStatus, setDataStatus] = useState("pending");
    const [timer, setTimer] = useState(true)
    const [selectedSeat, setSelectedSeats] = useState([]);
    const [transaction_id, setTransaction_id] = useState("")
    const [data, setData] = useState([
        {
            title: "",
            first_name: "",
            last_name: "",
            date_of_birth: "",
            country: "",
            identity_number: "",
            identity_number_of_country: "",
            expired_date: ""
        },
    ])

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6b2RwbHVnaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg4MTI2MjQ0fQ.Gl40INc4zsM8YQZSAvpsD6THAhjT3vC4VMSd-7tjuK0";
    // cookies.get('token')
    const decode = jwtDecode(token)
    const cookies = new Cookies();
    const getTransaction = async () => {
        return await Axios.post(urlTransaction, {
            user_id: decode.id,
            total_price: 20000
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => {
            console.log(res.data);
            setTransaction_id(res?.data?.data?.id)
        })
    }

    useEffect(() => {
        getTransaction()
    }, [])

    function submit(e) {
        e.preventDefault();
        selectedSeat.map(data => {

        })
        data.map(data => {
            Axios.post(url, {
                title: data.title,
                first_name: data.first_name,
                last_name: data.last_name,
                date_of_birth: data.date_of_birth,
                country: data.country,
                identity_number: data.identity_number,
                identity_number_of_country: data.identity_number_of_country,
                expired_date: data.expired_date,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(resPassenger => {
                    selectedSeat.map(data => {
                        Axios.put(`https://be-tiketku-production.up.railway.app/api/v1/seat/${data}`, {
                            status: "Unavailable"
                        }, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        })
                            .then(resSeat => {
                                Axios.post("https://be-tiketku-production.up.railway.app/api/v1/tiket/", {
                                    transaction_id: transaction_id,
                                    type_of_class: "Economy Class",
                                    type_of_passenger: "Adult",
                                    price: 5000,
                                    seat_id: data,
                                    passenger_id: resPassenger?.data?.data?.id,
                                    flight_id: 1
                                }, {
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                    },
                                })
                                    .then(resTiket => {
                                        console.log(resTiket.data)
                                    })
                                    .catch(error => {
                                        console.log(error.message);
                                        console.log(resSeat?.data?.data?.id, resPassenger?.data?.data?.id);
                                    })

                            })
                            .catch((error) => {
                                console.error(error);
                            })
                    })

                })
                .catch((error) => {
                    console.error(error);
                })
            setTimer(!timer)
        })


    }


    const handleSeat = (data) => {
        setSelectedSeats(data)
    }
    console.log(selectedSeat)
    // function handle(e){
    //     const newData = {...data}
    //     newData[e.target.id] = e.target.value
    //     setData(newData)
    //     console.log(newData)
    // }

    const handleFormChange = (event, index) => {
        let newData = [...data];
        data[index][event.target.id] = event.target.value;
        setData(newData);
        console.log(newData)
    }

    const addFields = () => {
        let object = {
            title: "",
            first_name: "",
            last_name: "",
            date_of_birth: "",
            country: "",
            identity_number: "",
            identity_number_of_country: "",
            expired_date: "",
        }
        setData([...data, object])
    }
    const {id} =useParams

    if (!token) {
        return <Modal />;
    }

    return (
        <div>
 
            <header className="border-none shadow-md ">
                <Navbar />
                <div className="flex flex-row space-x-2 md:ml-[260px] mt-[47px]">
                    <p className="text-xl font-bold">Isi Data Diri</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl" >Bayar</p>
                    <p className="text-xl">&gt;</p>
                    <p className="text-xl">Selesai</p>
                </div>

                {!token && <Modal/>}
                {timer ? (
                <Timer seconds={900}/>
                ): (
                <Submit/>
                )}                

            </header>
            <button onClick={addFields}>add form</button>
            <div className="flex flex-row justify-center mt-4">
                <form onSubmit={(e) => submit(e)}>
                    <div className="items-center">
                        {/* <div className="data w-[518px] h-[498px] border-2 border-[#8a8a8a] rounded mb-[34px]">
                            <h1 className="text-[20px] font-bold mt-[26px] mb-4 mx-4 ">Isi Data Pemesan</h1>
                            <h1 className="w-[486px] h-10 mx-3 bg-[#3c3c3c] text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Pemesan</h1>
                            <div className="font-semibold align-middle ml-[26px]">
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-[#4b1979] ">
                                        Nama Lengkap
                                    </label>
                                    <input className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                    <div className="ml-[246px]">
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" checked />
                                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex-auto mb-3">
                                    <label className="font-bold block mb-1 text-[#4b1979] ">
                                        Nama Keluarga
                                    </label>
                                    <input className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex-auto mb-3 ">
                                    <label htmlFor="number" className="font-bold block mb-1 text-[#4b1979] ">
                                        Nomor Telepon
                                    </label>
                                    <InputText id="number" keyfilter="num" className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md " />
                                </div>
                                <div className="flex-auto mb-3">
                                    <label htmlFor="alphanumeric" className="font-bold block mb-1 text-[#4b1979] ">
                                        Email
                                    </label>
                                    <input className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                </div>
                            </div>
                        </div> */}
                        {data.map((data, index) => {
                            return (
                                <div key={index} className="data w-[518px] border-2 border-[#8a8a8a] rounded mt-2">
                                    <h1 className="text-[20px] font-bold mb-4 mx-4 mt-4">Isi Data Penumpang</h1>
                                    <h1 className="w-[486px] h-10 mx-3 bg-[#3c3c3c] text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang {index + 1} - Adult</h1>
                                    <div className="font-semibold align-middle ml-8">
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 mt-2 text-[#4b1979] ">
                                                Title
                                            </label>
                                            <select onChange={event => handleFormChange(event, index)} id="title" value={data.title} placeholder="Select title" className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md">
                                                <option id="Tn." value="Tn.">Tn.</option>
                                                <option id="Mr." value="Mr.">Mr.</option>
                                                <option id="Mrs." value="Mrs.">Mrs.</option>
                                            </select>
                                        </div>
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 text-[#4b1979] ">
                                                Nama Lengkap
                                            </label>
                                            <input onChange={event => handleFormChange(event, index)} id="first_name" value={data.first_name} className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                        </div>
                                        <div className="flex flex-row">
                                            <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                            <div className="ml-[246px]">
                                                <label class="relative inline-flex items-center cursor-pointer">
                                                    <input onClick={()=> setIsChecked(!isChecked)} type="checkbox" value="" class="sr-only peer" id="check"/>
                                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 border-2 border-purple-900  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                                </label>
                                            </div>
                                        </div>
                                        {isChecked && (
                                            <div className="flex-auto mb-3">
                                                <label className="font-bold block mb-1 text-[#4b1979] ">
                                                    Nama Keluarga
                                                </label>
                                                <input onChange={event => handleFormChange(event, index)} id="last_name" value={data.last_name} className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                            </div>
                                        )}
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 text-[#4b1979] ">
                                                Tanggal Lahir
                                            </label>
                                            <input onChange={event => handleFormChange(event, index)} id="date_of_birth" value={data.date_of_birth} type="date" className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                        </div>
                                        <div className="flex-auto mb-3">
                                            <label htmlFor="alphanumeric" className="font-bold block mb-1 text-[#4b1979] ">
                                                Kewarganegaraan
                                            </label>
                                            <input onChange={event => handleFormChange(event, index)} id="country" value={data.country} className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                        </div>
                                        <div className="flex-auto mb-3 ">
                                            <label htmlFor="number" className="font-bold block mb-1 text-[#4b1979] ">
                                                KTP/Paspor
                                            </label>
                                            <InputText onChange={event => handleFormChange(event, index)} id="identity_number" value={data.identity_number} keyfilter="num" className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md " />
                                        </div>
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 text-[#4b1979] ">
                                                Negara Penerbit
                                            </label>
                                            <select onChange={event => handleFormChange(event, index)} id="identity_number_of_country" value={data.identity_number_of_country} placeholder="Select country" className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md">
                                                <option id="indonesia" value="indonesia">Indonesia</option>
                                                <option id="malaysia" value="malaysia">Malaysia</option>
                                            </select>
                                        </div>
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 text-[#4b1979] ">
                                                Berlaku Sampai
                                            </label>
                                            <input onChange={event => handleFormChange(event, index)} id="expired_date" value={data.expired_date} type="date" className="w-[454px] h-10 ps-4 border border-gray-400 rounded-md mb-8" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div>
                            <SeatCustomer handleSeat={handleSeat} />
                        </div>
                    </div>

                    <button className="ml-2 bg-[#7126b5] w-[500px] h-[62px] rounded-lg drop-shadow-lg text-white mb-[132px]" type="submit" >Submit</button>
                </form>
                <div>
                    <Detail className=" md:display:none" />
                    {(
                        <Link to="/payment" >
                            <button className="bg-[#FF0000] w-[330px] h-[62px] ml-7 mt-3 rounded-xl text-white">Lanjut Bayar</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Checkout;