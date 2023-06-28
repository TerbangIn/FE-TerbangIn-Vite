import React, { useState , useRef , useEffect} from "react";
import "./Riwayat.css";
import "../../index.css";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import { Divider } from 'primereact/divider';
// import logoflower from './flower_logo.png'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";    
import { Tag } from 'primereact/tag';   
import EmptyLogo from './empty.png'                                
         

const riwayatKosong = () => {
    return (
            <>
            <div className="w-full h-80 py-24 mx-auto">
                <img src={EmptyLogo} alt="Empty" className="mx-auto w-52 pb-6"/>
                <div className="text-md ps-4 justify-end font-bold text-binar-purple">Oops! Riwayat pesanan kosong!</div>
                <div className="text-md ps-4 justify-end font-base">Anda belum melakukan pemesanan penerbangan</div>
            </div>
            </>
    )
}

export default riwayatKosong;