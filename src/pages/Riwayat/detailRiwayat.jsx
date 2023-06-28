import React, { useState , useRef , useEffect} from "react";
import "./Riwayat.css";
import "../../index.css";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import { Divider } from 'primereact/divider';
import logoflower from './flower_logo.png'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";    
import { Tag } from 'primereact/tag';                                   
         

const detailRiwayat = () => {
    return (
            <div className="col-12">
                <div className="ps-8">
                    <div className="text-base font-normal flex justify-between text-900">
                        <div className="text-md font-bold text-900">Detail Pesanan</div>
                        <Tag rounded className="h-8 px-3 text-sm font-base" severity="danger" value="Unpaid"></Tag>
                        {/* {getStatus(filter.status)} */}
                    </div>
                    <div>
                        <div className="text-lg font-light text-900">Booking Code : </div>
                        <div className="text-base font-bold flex justify-between text-900">
                            {/* {getTime(filter.tiket.map(tik => tik.flight.departure_date))} */}
                            <div className="text-sm font-semibold justify-items-end text-binar-purple">Keberangkatan</div>
                        </div>
                        {/* <div className="text-sm font-light text-900">{getTanggal(filter.tiket.map(tik => tik.flight.departure_date))}</div>
                        <div className="text-sm font-semibold text-900">{filter.tiket.map(tik => tik.flight.source.name)}</div> */}
                    </div>
                    <Divider className="m-2"/>
                    <div className="flex col-12 justify-start p-0">
                        <div className="my-auto col-1 p-0 align-end">
                            <img alt="logo" src={logoflower} className="flex"></img>
                        </div>
                        <div className="mx-auto col-10 p-0">
                            {/* <div className="text-base font-bold text-900">{filter.tiket.map(tik => tik.flight.airline)} - {getClassDetail(filter.tiket.map(tik => tik.flight))}</div>
                            <div className="text-base font-bold text-900">{filter.airplane_code}</div>
                            <div className="text-base font-bold text-900 pt-4">Informasi</div>
                            <h1 className="text-sm font-semibold  text-binar-purple">Penumpang : {filter.tiket.map(tik => tik.passenger.first_name)}</h1>
                            <div className="text-sm font-semibold text-900">ID {filter.tiket.map(tik => tik.passenger.identity_number)}</div> */}
                        </div>
                    </div>
                    <Divider className="m-2"/>
                    <div>
                        <div className="text-base font-bold flex justify-between text-900">
                            {/* {getTime(filter.tiket.map(tik => tik.flight.arrival_date))} */}
                            <div className="text-sm font-semibold justify-items-end text-binar-purple">Kedatangan</div>
                        </div>
                        {/* <div className="text-sm font-light text-900">{getTanggal(filter.tiket.map(tik => tik.flight.arrival_date))}</div>
                        <div className="text-sm font-semibold text-900">{filter.tiket.map(tik => tik.flight.destination.name)}</div> */}
                    </div>
                    <Divider className="m-2"/>
                    <div>
                        <div className="text-base font-bold text-900">Rincian Harga</div>
                        <div className="text-base font-normal flex justify-between text-900">
                            1 Adult
                            {/* <div className="text-sm font-normal justify-items-end">{(data?.transaction?.map(trans => trans.total_price))}</div> */}
                        </div>
                    </div>
                    {/* <div>{listAmountBaby(filter.orders)}</div> */}
                    <Divider className="m-2"/>
                    <div className="text-base font-normal flex justify-between text-900 pb-4">
                        <div className="text-md font-bold text-900">Total</div>
                        {/* <div className="text-md font-bold justify-items-end text-binar-purple">{(data?.transaction?.map(trans => trans.total_price))}</div> */}
                    </div>
                    <Button label="Lanjut Bayar" severity="danger" raised className="w-full"/>
                    {/* {getButtonCheckOut(filter)} */}
                </div>
            </div>
    )
}

export default detailRiwayat;