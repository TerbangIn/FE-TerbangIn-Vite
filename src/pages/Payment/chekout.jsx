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
import { useParams, Link,useLocation } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';




function Checkout() {
    const location = useLocation()
    const url = "https://be-tiketku-production.up.railway.app/api/v1/passenger"
    const url1 = "https://be-tiketku-production.up.railway.app/api/v1/seat/"
    const urlTransaction = `https://be-tiketku-production.up.railway.app/api/v1/transaksi`;
    const [totalHarga, setTotalHarga] = useState();
    const [flight, setFlight] = useState(); 
    const [isChecked, setIsChecked] = useState(false);
    const [dataStatus, setDataStatus] = useState("pending");
    const [timer, setTimer] = useState(true)
    const [selectedSeat, setSelectedSeats] = useState([]);
    const [transaction_id, setTransaction_id] = useState("")
    let passenger = location?.state?.passenger
    console.log(location?.state?.flight_id,location?.state?.passenger,transaction_id)
    const [data, setData] = useState([])
    const [child,setChild] = useState([])
    const [baby, setBaby] = useState([])
    const [adult, setAdult] = useState([])

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

    const getFlightById = async () => {
        await Axios.get(`https://be-tiketku-production.up.railway.app/api/v1/flight/${location?.state?.flight_id}`).then(res => {
            setFlight(res?.data?.data)
        })
    }

    const loopAdult = async () => {
        for (let i = 1; i <= passenger?.adult; i++){
            await setAdult([...adult,{
                title: "",
                first_name: "",
                last_name: "",
                date_of_birth: "",
                country: "",
                identity_number: "",
                identity_number_of_country: "",
                expired_date: "",
                category : "Adult"
            }])
        }
    }

    const loopBaby = async () => {
        for (let i = 1; i <= passenger?.baby; i++){
            await setBaby([...baby,{
                title: "",
                first_name: "",
                last_name: "",
                date_of_birth: "",
                country: "",
                identity_number: "",
                identity_number_of_country: "",
                expired_date: "",
                category: "Baby"
            }])
        }
    }
    
    const loopChild = async () =>{
        for (let i = 1; i <= passenger?.child; i++){
            await setChild([...child,{
                title: "",
                first_name: "",
                last_name: "",
                date_of_birth: "",
                country: "",
                identity_number: "",
                identity_number_of_country: "",
                expired_date: "",
                category : "Child"
            }])
        }
    }


    useEffect(() => {
        console.log("Child : " + passenger?.child)
        setTotalHarga((flight?.economy_class_price ? flight?.economy_class_price*(flight?.adult_price_percentage/100)*passenger?.adult : (flight?.business_class_price ? flight?.business_class_price*(flight?.adult_price_percentage/100)*passenger?.adult : (flight?.first_class_price ? flight?.first_class_price*(flight?.adult_price_percentage/100)*passenger?.adult : (flight?.premium_price ? flight?.premium_price*(flight?.adult_price_percentage/100) : 0)*passenger?.adult))) + ((flight?.economy_class_price ? flight?.economy_class_price*(flight?.baby_price_percentage/100)*passenger?.baby : (flight?.business_class_price ? flight?.business_class_price*(flight?.baby_price_percentage/100)*passenger?.baby : (flight?.first_class_price ? flight?.first_class_price*(flight?.baby_price_percentage/100)*passenger?.baby : (flight?.premium_price ? flight?.premium_price*(flight?.baby_price_percentage/100)*passenger?.baby : 0))))) + (flight?.economy_class_price ? flight?.economy_class_price*(flight?.child_price_percentage/100)*passenger?.child : (flight?.business_class_price ? flight?.business_class_price*(flight?.child_price_percentage/100)*passenger?.child : (flight?.first_class_price ? flight?.first_class_price*(flight?.child_price_percentage/100)*passenger?.child : (flight?.premium_price ? flight?.premium_price*(flight?.child_price_percentage/100)*passenger?.child : 0)))))
    },[flight])

    useEffect(() => {
        if(adult.length < passenger?.adult){
            loopAdult()
        }
    },[])
    useEffect(() => {
        if(child.length < passenger?.child){
            loopChild()
        }
    },[])
    useEffect(() => {
        if(baby.length < passenger?.baby){
            loopBaby()
        }
    },[])


    console.log(adult,child,baby)
    useEffect(() => {
        if(data.length < passenger?.jumlah){
            setData([...data,...adult,...child,...baby])
        }
    },[adult,child,baby])
    console.log(data)
    useEffect(() => {
        // getTransaction()
        getFlightById()
    }, [])
    
    console.log(data)
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

    const handleFormChange = (event, index) => {
        let newData = [...data];
        data[index][event.target.id] = event.target.value;
        setData(newData);
        console.log(newData)
    }


    const { id } = useParams

    if (!token) {
        return <Modal />;
    }
    console.log(totalHarga)
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

                {!token && <Modal />}
                {timer ? (
                    <Timer seconds={900} />
                ) : (
                    <Submit />
                )}

            </header>
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
                                    <h1 className="w-[486px] h-10 mx-3 bg-[#3c3c3c] text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang {index + 1} - {data?.category}</h1>
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
                                                    <input onClick={() => setIsChecked(!isChecked)} type="checkbox" value="" class="sr-only peer" id="check" />
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
                        
                    <Detail className=" md:display:none" flight={flight} passenger={location?.state?.passenger} setTotalHarga={setTotalHarga} />
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