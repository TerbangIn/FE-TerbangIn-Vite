import React, { useEffect, useRef, useState } from "react";
import { InputText } from 'primereact/inputtext';
import SeatCustomer from "./seat";
// import Navbar from "./navbar";
import Navbar from "../../components/Navbar";
import Modal from './modal';
import Submit from "./submit-success";
import Timer from "./timer";
import Axios from "axios";
import Detail from "./detail";
import jwtDecode from "jwt-decode";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

function Checkout() {
    const location = useLocation()
    const nav = useNavigate()
    const url = "https://be-tiketku-production.up.railway.app/api/v1/passenger"
    const url1 = "https://be-tiketku-production.up.railway.app/api/v1/seat/"
    const urlTransaction = `https://be-tiketku-production.up.railway.app/api/v1/transaksi`;
    const [totalHarga, setTotalHarga] = useState();
    const [flight, setFlight] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [button, setButton] = useState(false);
    const [timer, setTimer] = useState(true)
    const [selectedSeat, setSelectedSeats] = useState([]);
    const [transaction_id, setTransaction_id] = useState("")
    let passenger = location?.state?.passenger
    console.log(location?.state?.flight_id, location?.state?.passenger, transaction_id)
    const [data, setData] = useState([])
    const [child, setChild] = useState([])
    const [baby, setBaby] = useState([])
    const [adult, setAdult] = useState([])
    const cookies = new Cookies();
    const token = cookies.get('token')
    const decode = jwtDecode(token)

    // console.log(token);

    // useEffect(() => {
    //     if (!token) {
    //         console.log(true);
    //         nav("/login")
    //     }
    // }, [])

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ6b2RwbHVnaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg4MTI2MjQ0fQ.Gl40INc4zsM8YQZSAvpsD6THAhjT3vC4VMSd-7tjuK0";
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
        for (let i = 1; i <= passenger?.adult; i++) {
            await setAdult([...adult, {
                title: "",
                first_name: "",
                last_name: "",
                date_of_birth: "",
                country: "",
                identity_number: "",
                identity_number_of_country: "",
                expired_date: "",
                category: "Adult"
            }])
        }
    }

    const loopBaby = async () => {
        for (let i = 1; i <= passenger?.baby; i++) {
            await setBaby([...baby, {
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

    const loopChild = async () => {
        for (let i = 1; i <= passenger?.child; i++) {
            await setChild([...child, {
                title: "",
                first_name: "",
                last_name: "",
                date_of_birth: "",
                country: "",
                identity_number: "",
                identity_number_of_country: "",
                expired_date: "",
                category: "Child"
            }])
        }
    }


    useEffect(() => {
        console.log("Child : " + passenger?.child)
        setTotalHarga((flight?.economy_class_price ? flight?.economy_class_price * (flight?.adult_price_percentage / 100) * passenger?.adult : (flight?.business_class_price ? flight?.business_class_price * (flight?.adult_price_percentage / 100) * passenger?.adult : (flight?.first_class_price ? flight?.first_class_price * (flight?.adult_price_percentage / 100) * passenger?.adult : (flight?.premium_price ? flight?.premium_price * (flight?.adult_price_percentage / 100) : 0) * passenger?.adult))) + ((flight?.economy_class_price ? flight?.economy_class_price * (flight?.baby_price_percentage / 100) * passenger?.baby : (flight?.business_class_price ? flight?.business_class_price * (flight?.baby_price_percentage / 100) * passenger?.baby : (flight?.first_class_price ? flight?.first_class_price * (flight?.baby_price_percentage / 100) * passenger?.baby : (flight?.premium_price ? flight?.premium_price * (flight?.baby_price_percentage / 100) * passenger?.baby : 0))))) + (flight?.economy_class_price ? flight?.economy_class_price * (flight?.child_price_percentage / 100) * passenger?.child : (flight?.business_class_price ? flight?.business_class_price * (flight?.child_price_percentage / 100) * passenger?.child : (flight?.first_class_price ? flight?.first_class_price * (flight?.child_price_percentage / 100) * passenger?.child : (flight?.premium_price ? flight?.premium_price * (flight?.child_price_percentage / 100) * passenger?.child : 0)))))
    }, [flight])

    useEffect(() => {
        if (adult.length < passenger?.adult) {
            loopAdult()
        }
    }, [adult])
    useEffect(() => {
        if (child.length < passenger?.child) {
            loopChild()
        }
    }, [child])
    useEffect(() => {
        if (baby.length < passenger?.baby) {
            loopBaby()
        }
    }, [baby])


    console.log(adult, child, baby)
    useEffect(() => {

        setTimeout(() => {
            if (data.length < passenger?.jumlah) {
                setData([...data, ...adult, ...child, ...baby])
            }
        }, 10)

    }, [adult, child, baby, passenger])
    console.log(data)
    useEffect(() => {
        getTransaction()
        getFlightById()
    }, [])

    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = (submit) => {
        toastBC.current.clear();
        submit && show();
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const confirm = () => {
        toastBC.current.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-col justify-center items-center gap-2" style={{ flex: '1' }}>
                    <div className="flex items-center gap-2">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '2rem' }}></i>
                        <div className="font-bold text-xl my-3">Are you sure?</div>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => submit(e)} type="submit" label="Confirm" className="p-button-success w-6rem" />
                        <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem" />
                    </div>
                </div>
            )
        });
    };

    function submit(e) {
        e.preventDefault();

        data.map((data, index) => {
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
                    Axios.put(`https://be-tiketku-production.up.railway.app/api/v1/seat/${selectedSeat[index]}`, {
                        status: "Unavailable"
                    }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                        .then(resSeat => {
                            Axios.post("https://be-tiketku-production.up.railway.app/api/v1/tiket/", {
                                transaction_id: transaction_id,
                                type_of_class: (flight?.economy_class_price ? "Economy Class" : flight?.business_class_price ? "Business Class" : flight?.first_class_price ? "First Class" : flight?.premium_price ? "Premium Class" : ""),
                                type_of_passenger: data?.category,
                                price: (data?.category === 'Adult' ? (flight?.economy_class_price ? flight?.economy_class_price * (flight?.adult_price_percentage / 100) * passenger?.adult : (flight?.business_class_price ? flight?.business_class_price * (flight?.adult_price_percentage / 100) * passenger?.adult : (flight?.first_class_price ? flight?.first_class_price * (flight?.adult_price_percentage / 100) * passenger?.adult : (flight?.premium_price ? flight?.premium_price * (flight?.adult_price_percentage / 100) : 0) * passenger?.adult))) : data?.category === 'Child' ? (flight?.economy_class_price ? flight?.economy_class_price * (flight?.child_price_percentage / 100) * passenger?.child : (flight?.business_class_price ? flight?.business_class_price * (flight?.child_price_percentage / 100) * passenger?.child : (flight?.first_class_price ? flight?.first_class_price * (flight?.child_price_percentage / 100) * passenger?.child : (flight?.premium_price ? flight?.premium_price * (flight?.child_price_percentage / 100) * passenger?.child : 0)))) : data?.category === 'Baby' ? ((flight?.economy_class_price ? flight?.economy_class_price * (flight?.baby_price_percentage / 100) * passenger?.baby : (flight?.business_class_price ? flight?.business_class_price * (flight?.baby_price_percentage / 100) * passenger?.baby : (flight?.first_class_price ? flight?.first_class_price * (flight?.baby_price_percentage / 100) * passenger?.baby : (flight?.premium_price ? flight?.premium_price * (flight?.baby_price_percentage / 100) * passenger?.baby : 0))))) : 0),
                                seat_id: selectedSeat[index],
                                passenger_id: resPassenger?.data?.data?.id,
                                flight_id: flight?.id
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
                                })

                        })
                        .catch((error) => {
                            console.error(error);
                        })
                    // })
                })
                .catch((error) => {
                    console.error(error);
                })
        })
        clear(true)
        setTimer(!timer)
        setButton(!button)
    }

    const handleSeat = (data) => {
        setSelectedSeats(data)
    }
    console.log(data)

    const handleFormChange = (event, index) => {
        let newData = [...data];
        data[index][event.target.id] = event.target.value;
        setData(newData);
        console.log(newData)
    }

    const handlePayment = async () => {
        await Axios.put(`https://be-tiketku-production.up.railway.app/api/v1/transaksi/${transaction_id}`, {
            total_price: totalHarga
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => {
            toast.success(`Transaksi Berhasil Silahkan Lanjut Pembayaran , redirect in 3s...`, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }).catch(error => {
            console.log(error);
            // toast.error(`${error.response}`, {
            //     position: "bottom-center",
            //     autoClose: 2000,
            //     hideProgressBar: true,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // })
        })

        await Axios.post(`https://be-tiketku-production.up.railway.app/api/v1/transaksi/payment/${transaction_id}`).then(res => {
            window.location.replace(`${res?.data?.link}`);

        }).catch(error => {
            toast.error(`${error.response.data.message}`, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        })
    }

    if (!token) {
        return <Modal />;
    }

    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Toast ref={toast} />
            <Toast ref={toastBC} position="bottom-center" />
            <header className="border-none shadow-md ">
                <Navbar />
                <div className="flex flex-row space-x-2 xl:ml-[260px] lg:ml-36 md:ml-20 sm:ml-10 mt-[47px]">
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
                <div>
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
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
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
                                <div key={index} className="data max-sm:ml-[83px] max-sm:w-[350px] sm:w-[518px] border-2 border-[#8a8a8a] rounded mt-2">
                                    <h1 className="text-[20px] font-bold mb-4 mx-4 mt-4">Isi Data Penumpang</h1>
                                    <h1 className="max-sm:w-[320px] sm:w-[486px] h-10 mx-3 bg-[#3c3c3c] text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang {index + 1} - {data?.category}</h1>
                                    <div className="font-semibold align-middle max-sm:ml-3 sm:ml-8">
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 mt-2 text-[#4b1979] ">
                                                Title
                                            </label>
                                            <select onChange={event => handleFormChange(event, index)} id="title" value={data.title} placeholder="Select title" className="max-sm:w-[320px] sm:w-[454px] h-10 ps-4 border border-gray-400 rounded-md">
                                                <option>Silahkan Dipilih Terlebih Dahulu</option>
                                                <option id="Tn." value="Tn." >Tn.</option>
                                                <option id="Mr." value="Mr." selected >Mr.</option>
                                                <option id="Mrs." value="Mrs.">Mrs.</option>
                                            </select>
                                        </div>
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 text-[#4b1979] ">
                                                Nama Lengkap
                                            </label>
                                            <input onChange={event => handleFormChange(event, index)} id="first_name" value={data.first_name} className="max-sm:w-[320px] sm:w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                        </div>
                                        <div className="flex flex-row">
                                            <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                            <div className="ml-[246px]">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input onClick={() => setIsChecked(!isChecked)} type="checkbox" value="" className="sr-only peer" id="check" />
                                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 border-2 border-purple-900  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                                </label>
                                            </div>
                                        </div>
                                        {isChecked && (
                                            <div className="flex-auto mb-3">
                                                <label className="font-bold block mb-1 text-[#4b1979] ">
                                                    Nama Keluarga
                                                </label>
                                                <input onChange={event => handleFormChange(event, index)} id="last_name" value={data.last_name} className="max-sm:w-[320px] sm:w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                            </div>
                                        )}
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 text-[#4b1979] ">
                                                Tanggal Lahir
                                            </label>
                                            <input onChange={event => handleFormChange(event, index)} id="date_of_birth" value={data.date_of_birth} type="date" className="max-sm:w-[320px] sm:w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                        </div>
                                        <div className="flex-auto mb-3">
                                            <label htmlFor="alphanumeric" className="font-bold block mb-1 text-[#4b1979] ">
                                                Kewarganegaraan
                                            </label>
                                            <input onChange={event => handleFormChange(event, index)} id="country" value={data.country} className="max-sm:w-[320px] sm:w-[454px] h-10 ps-4 border border-gray-400 rounded-md" />
                                        </div>
                                        <div className="flex-auto mb-3 ">
                                            <label htmlFor="number" className="font-bold block mb-1 text-[#4b1979] ">
                                                KTP/Paspor
                                            </label>
                                            <InputText onChange={event => handleFormChange(event, index)} id="identity_number" value={data.identity_number} keyfilter="num" className="max-sm:w-[320px] sm:w-[454px] h-10 ps-4 border border-gray-400 rounded-md " />
                                        </div>
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 text-[#4b1979] ">
                                                Negara Penerbit
                                            </label>
                                            <select onChange={event => handleFormChange(event, index)} id="identity_number_of_country" value={data.identity_number_of_country} placeholder="Select country" className="max-sm:w-[320px] sm:w-[454px] h-10 ps-4 border border-gray-400 rounded-md">
                                                <option id="indonesia" value="indonesia">Indonesia</option>
                                                <option id="malaysia" value="malaysia">Malaysia</option>
                                            </select>
                                        </div>
                                        <div className="flex-auto mb-3">
                                            <label className="font-bold block mb-1 text-[#4b1979] ">
                                                Berlaku Sampai
                                            </label>
                                            <input onChange={event => handleFormChange(event, index)} id="expired_date" value={data.expired_date} type="date" className="max-sm:w-[320px] sm:w-[454px] h-10 ps-4 border border-gray-400 rounded-md mb-8" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                        <div>
                            <SeatCustomer handleSeat={handleSeat} passenger={location?.state?.passenger} />
                        </div>
                    </div>
                    {button ? (
                        <button className="lg:hidden bg-[#FF0000] w-[500px] h-[62px] ml-2 mt-3 rounded-xl text-white mb-[132px]" onClick={handlePayment}>Lanjut Bayar</button>
                    ) : (
                        <button className="max-sm:w-[300px] max-sm:ml-7 sm:ml-2 bg-[#7126b5] sm:w-[500px] h-[62px] rounded-lg drop-shadow-lg text-white mb-[132px]" type="submit" onClick={confirm}>Submit</button>
                    )}
                </div>
                <div>

                    <Detail className=" md:display:none" flight={flight} passenger={location?.state?.passenger} setTotalHarga={setTotalHarga} />
                    {button && (

                        <button className="hidden lg:block bg-[#FF0000] w-[330px] h-[62px] ml-7 mt-3 rounded-xl text-white" onClick={handlePayment}>Lanjut Bayar</button>

                    )}
                </div>
            </div>
        </div>
    )
}


export default Checkout;