import React, { useState , useRef , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { setProducts } from '../../actions';
import Navbar from "../../components/Navbar";
import axios from "axios"
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode'
import "../../index.css";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import bell from './Vector.png'
import Empty from './empty.png'
import { Card } from 'primereact/card'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";     
import { Link } from "react-router-dom";
import { Dialog } from 'primereact/dialog';                                
         

function Notifikasi() {

    const cookies = new Cookies()
    const token = cookies.get('token')

    const [userData, setUserData] = useState([]);
    // console.log(token);

    const decode = jwt_decode(token);
    // console.log(decode.id);
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`https://be-tiketku-production.up.railway.app/api/v1/user/${decode.id}`, { 
              headers: {
                Authorization: `Bearer ${token}` // Menggunakan token dalam header permintaan
              }
            });
            setUserData(response.data.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchUserData();
      }, [token]);

    function getTanggal(dateIn){
        const date = new Date(dateIn);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);

        return(formattedDate);
    }

    function getTimes(date){
        const jam = new Date(date).getHours()
        const menit = new Date(date).getMinutes()
        return <>{jam}:{menit}</>
    }

    return (
        <>
        <div>
            <Navbar></Navbar>
            <Card>
                <div className="text-left mx-auto max-w-4xl">
                    <div className="text-left mx-auto flex-auto">
                        <div className="text-md font-bold text-900 lg:pb-4 sm:pb-2">Notifikasi</div>
                        <div className="text-base font-bold flex space-y-2 justify-between ">
                            <button className="w-full rounded-lg h-12 bg-binar-purple">
                                <Link to={'/riwayat'} className="flex items-center font-semibold gap-2 ms-4 text-white">
                                    <div className="pi pi-arrow-left"></div>
                                    Beranda
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
            {userData?.notification?.length > 0 ? (
                <div className="body">
                    {userData?.notification.map(notif => (
                        <div className="text-left mt-6 flex gap-2 mx-auto max-w-4xl">
                            <div class="flex-none my-auto">
                                <img alt="logo" src={bell} className="flex w-5"></img>
                            </div>
                            <div class="flex-auto w-80">
                                <div className="text-md font-base opacity-75">{notif.tag}</div>
                                <div className="text-base font-normal text-900">{notif.title}</div>
                                <div className="text-base font-normal text-700">{notif.desc}</div>
                            </div>
                            <div class="flex-16 flex my-auto gap-2">
                                <div className="text-sm font-normal opacity-50 justify-items-end">{getTanggal(notif.updatedAt)}, {getTimes(notif.updatedAt)}</div>
                                <i className="pi pi-circle-fill my-auto" style={{ color: 'green' }}></i>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
            <div className="w-full h-80 py-24">
                <img src={Empty} alt="Empty" className="mx-auto w-52 pb-6"/>
                <div className="text-md ps-4 justify-end font-bold text-binar-purple">Notifikasi Kosong</div>
                <div className="text-md ps-4 justify-end font-base">Kamu belum mendapatkan pemberitahuan apapun</div>
            </div>
        )}
        </div>
        </>
  );
}

export default Notifikasi;
