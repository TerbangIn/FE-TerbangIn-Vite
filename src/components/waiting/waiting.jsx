import React from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { Button } from 'primereact/button';
import { AiOutlineSearch } from 'react-icons/ai';
import Navbar from "../Navbar";
import Wait from "./waiting.png"

const Waiting = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="w-full h-screen py-24 mx-auto">
            <div className="text-md text-center font-bold text-binar-purple"><i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i></div>
            <div className="text-md text-center font-bold text-binar-purple my-6">Menunggu Pembayaran Anda!</div>
            <img src={Wait} alt="Empty" className="mx-auto w-52 pb-6"/>
        </div>
        </>
    )
};

export default Waiting;