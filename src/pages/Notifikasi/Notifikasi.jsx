import React, { useState , useRef , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { setProducts } from '../../actions';
import Navbar from "../../components/Navbar";
import "../../index.css";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import bell from './Vector.png'
import { Card } from 'primereact/card'
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
         

function Notifikasi() {

    const dispatch = useDispatch();
    const [Adult, setAdult] = useState(0);
    const [Baby, setBaby] = useState(0);
    const [data, setData] = useState([]);


    return (
        <>
        <div>
            <Navbar></Navbar>
            <div className="col-12 body">
                <Card>
                    <div className="mx-auto lg:col-8 sm:col-10 justify-between">
                        <div className="text-md font-bold text-900 lg:pb-4 sm:pb-2">Notifikasi</div>
                        <div className="text-base font-bold flex justify-between text-900 align-center pe-6">
                            <div className="bg-binar-purple justify-content-start rounded-lg w-12">
                                <Button icon="pi pi-arrow-left" className="text-white " text label="Beranda"/>
                            </div>
                        </div>
                        <p className="m-0"></p>
                    </div>
                </Card>
                <div className="row justify-center">
                    <div className="flex sm:col-10 lg:col-8 mx-auto">
                        <div className="flex col-12 justify-start p-0 my-2">
                            <div className="col-1 p-0 align-end">
                                <img alt="logo" src={bell} className="flex w-5"></img>
                            </div>
                            <div className="col-11 p-0 my-auto">
                                <div className="flex col-12 justify-start p-0 my-2">
                                    <div className="col-8 p-0 align-end">
                                        <div className="text-base font-normal text-700">Promosi</div>
                                    </div>
                                    <div className="col-3 p-0 justify-end">
                                        <div className="text-base font-normal text-700 justify-items-end">10 Januari 2091</div>
                                    </div>
                                    <div className="col-1 p-0">
                                        <i className="pi pi-circle-fill" style={{ color: 'green' }}></i>
                                    </div>
                                </div>
                                <div className="text-base font-normal text-900">Dapatkan Potongan 50%</div>
                                <div className="text-base font-normal text-700">Syarat dan ketentuan berlaku</div>
                            </div>
                        </div>
                        
                   </div>
                </div>
            </div>
        </div>
        </>
  );
}

export default Notifikasi;
