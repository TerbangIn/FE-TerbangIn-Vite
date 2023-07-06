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
import Cetak from './cetak'
import { useNavigate } from "react-router";
         

const detailRiwayat = (props) => {
    const Navigate = useNavigate()

    function cetakTiket (){
        Navigate('/cetak', {state:{props}})
    }

    const getButtonCheckOut = (detail) => {
        switch (detail[0]) {
            case 'waiting':
                return (<Button label="Waiting" severity="help" raised className="w-full"/>)

            case 'failure':
                return (<Button label="Failure" severity="danger" raised className="w-full" disabled/>)

            case 'cancelled':
                return (<Button label="Cancelled" severity="secondary" raised className="w-full" disabled/>)

            case 'success':
                return (<Button label="Cetak Tiket" severity="success" raised className="w-full" onClick={cetakTiket}/>)

            default:
                return null;
        }
    };

    const getStatus = (detail) => {
        console.log(detail);
        if(detail[0] === 'waiting')  {
            return (<Tag rounded className="h-8 w-20 px-3 text-sm font-base" severity="help" value="Waiting"></Tag>);
        }else if(detail[0] == 'failure')  {
            return (<Tag rounded className="h-8 w-20 px-3 text-sm font-base" severity="danger" value="Failure"></Tag>)
        }else if(detail[0] == 'cancelled')  {
            return (<Tag rounded className="h-8 w-20 px-3 text-sm font-base" severity="secondary" value="Cancelled"></Tag>)
        }else if(detail[0] == 'success')  {
            return (<Tag rounded className="h-8 w-20 px-3 text-sm font-base" severity="success" value="Success"></Tag>)
        }
    };

    
    function getClassPrice(flight){
        const premium = (flight.premium_price)
        const first = (flight.first_class_price)
        const bussines = (flight.business_class_price)
        const economy = (flight.economy_class_price)
        if(economy != null)  {
            return economy
        }else if(bussines != null)  {
            return bussines
        }else if(first != null)  {
            return first
        }else if(premium != null)  {
            return premium
        }
      }

    function getHarga(tiket){
        let total = 0;
        for(let i = 0; i < tiket.length;i++){
            for(let j = 0; j < tiket[i].length ;j++){
                const priceClass = getClassPrice(tiket[i][j].flight)
                if(tiket[i][j].type_of_passenger == "Adult"){
                    let price = ((priceClass) * (tiket[i][j].flight.adult_price_percentage)/100)
                    total += price;
                }else if(tiket[i][j].type_of_passenger == "Child"){
                    let price = ((priceClass) * (tiket[i][j].flight.child_price_percentage)/100)
                    total += price;
                }else if(tiket[i][j].type_of_passenger == "Baby"){
                    let price = ((priceClass) * (tiket[i][j].flight.baby_price_percentage)/100)
                    total += price;
                }
            }
        }
        return total
      }
    function getHargaDetail(tiket){
        let totalAdult = 0;
        let totalChild = 0;
        let totalBaby = 0;
        let sumAdult = 0;
        let sumChild = 0;
        let sumBaby = 0;

        for(let i = 0; i < tiket.length;i++){
            for(let j = 0; j < tiket[i].length ;j++){
                const priceClass = getClassPrice(tiket[i][j].flight)
                if(tiket[i][j].type_of_passenger == "Adult"){
                    let price = ((priceClass) * (tiket[i][j].flight.adult_price_percentage)/100)
                    totalAdult += price;
                    sumAdult +=1
                }else if(tiket[i][j].type_of_passenger == "Child"){
                    let price = ((priceClass) * (tiket[i][j].flight.child_price_percentage)/100)
                    totalChild += price;
                    sumChild +=1
                }else if(tiket[i][j].type_of_passenger == "Baby"){
                    let price = ((priceClass) * (tiket[i][j].flight.baby_price_percentage)/100)
                    totalBaby += price;
                    sumBaby +=1
                }
            }
        }
        // return total
      }

    function getTimes(date){
        const jam = new Date(date).getHours()
        const menit = new Date(date).getMinutes()
        return <>{jam} : {menit}</>
    }

    function getTanggal(dateIn){
        const date = new Date(dateIn);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);

        return(formattedDate);
    }

    const getClass = (economy, bussiness, first, premium) => {
        if(economy != null)  {
            return 'Economy'
        }else if(bussiness != null)  {
            return 'Bussiness'
        }else if(first != null)  {
            return 'First'
        }else if(premium != null)  {
            return 'Premium'
        }
    }
    
   

    const detailList = (tiket) => {
        let hargaAdult = 0
        let hargaChild = 0
        let hargaBaby = 0
        let jumlahAdult = 0
        let jumlahChild = 0
        let jumlahBaby = 0
        
        for(let i = 0; i < tiket.length;i++){
            for (let j = 0; j < tiket[i].length ; j++){
                if (tiket[i][j].type_of_passenger == "Adult" && tiket.length > 0){
                    let flightHarga = 0
                    if(tiket[i][j].flight.economy_class_price != null){
                        flightHarga = tiket[i][j].flight.economy_class_price
                    }else if(tiket[i][j].flight.business_class_price != null){
                        flightHarga = tiket[i][j].flight.business_class_price
                    }else if(tiket[i][j].flight.first_class_price != null){
                        flightHarga = tiket[i][j].flight.first_class_price
                    }else if(tiket[i][j].flight.premium_price != null){
                        flightHarga = tiket[i][j].flight.premium_price
                    }
    
                    jumlahAdult += 1
                    hargaAdult += flightHarga * tiket[i][j].flight.adult_price_percentage /100
    
                }
                else if(tiket[i][j].type_of_passenger == "Child" && tiket.length > 0){
                    let flightHarga = 0
                    if(tiket[i][j].flight.economy_class_price != null){
                        flightHarga = tiket[i][j].flight.economy_class_price
                    }else if(tiket[i][j].flight.business_class_price != null){
                        flightHarga = tiket[i][j].flight.business_class_price
                    }else if(tiket[i][j].flight.first_class_price != null){
                        flightHarga = tiket[i][j].flight.first_class_price
                    }else if(tiket[i][j].flight.premium_price != null){
                        flightHarga = tiket[i][j].flight.premium_price
                    }
    
                    jumlahChild += 1
                    hargaChild += flightHarga * tiket[i][j].flight.child_price_percentage /100
                    
                }else if(tiket[i][j].type_of_passenger == "Baby" && tiket.length > 0){
                    let flightHarga = 0
                    if(tiket[i][j].flight.economy_class_price != null){
                        flightHarga = tiket[i][j].flight.economy_class_price
                    }else if(tiket[i][j].flight.business_class_price != null){
                        flightHarga = tiket[i][j].flight.business_class_price
                    }else if(tiket[i][j].flight.first_class_price != null){
                        flightHarga = tiket[i][j].flight.first_class_price
                    }else if(tiket[i][j].flight.premium_price != null){
                        flightHarga = tiket[i][j].flight.premium_price
                    }
    
                    jumlahBaby += 1
                    hargaBaby += flightHarga * tiket[i][j].flight.baby_price_percentage /100
                }
            }
        }
        return (
            <div className="text-base font-normal flex justify-between text-900">
                <div className="grid-cols-1">
                    {jumlahAdult != 0 ? (<>{jumlahAdult} Adult</>) : (<></>)}
                    {jumlahChild != 0 ? (<>{jumlahChild} Child</>) : (<></>)}
                    {jumlahBaby != 0 ? (<>{jumlahBaby} Baby</>) : (<></>)}
                </div>
                <div className="grid-cols-1">
                    {hargaAdult != 0 ? (Intl.NumberFormat ("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(hargaAdult)) : (<></>)}
                    {hargaChild != 0 ? (Intl.NumberFormat ("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(hargaChild)) : (<></>)}
                    {hargaBaby != 0 ? (Intl.NumberFormat ("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(hargaBaby)) : (<></>)}
                </div>
            </div>
        )
    }

    let i = 1
    return (
            <div className="sm:mx-6 md:mx-4 lg:mx-auto mx-6">
                <div className="lg:ps-8 mb-12">
                    <div className="text-base font-normal flex justify-between text-900">
                        <div className="text-md font-bold text-900">Detail Pesanan</div>
                        {getStatus(props.data.map(e => e.payment_status))}
                    </div>
                    <div>
                        <div className="flex justify-start">
                            <div className="text-lg font-light text-900">Booking Code : </div>
                            <div className="text-lg font-bold text-binar-purple">{props.data.map(e => e.kode_booking)}</div>
                        </div>
                        <div className="text-base font-bold flex justify-between text-900">
                            {getTimes(props.data.map(e => e.tiket[0].flight.departure_date))}
                            <div className="text-sm font-semibold justify-items-end text-binar-purple">Keberangkatan</div>
                        </div>
                        <div className="text-sm font-light text-900">{getTanggal(props.data.map(e => e.tiket[0].flight.departure_date))}</div>
                        <div className="text-sm font-semibold text-900">{props.data.map(e => e.tiket[0].flight.source.name)}</div>
                    </div>
                    <Divider className="m-2"/>
                    <div className="flex col-12 justify-start p-0">
                        <div className="my-auto col-1 p-0 align-end">
                            <img alt="logo" src={logoflower} className="flex w-8"></img>
                        </div>
                        <div className="mx-2 p-0">
                            <div className="text-base font-bold text-900">{props.data.map(e => e.tiket[0].flight.airline)} - {getClass((props.data.map(e => e.tiket[0].flight.economy_class_price)),(props.data.map(e => e.tiket[0].flight.business_class_price)),(props.data.map(e => e.tiket[0].flight.first_class_price)),(props.data.map(e => e.tiket[0].flight.premium_price)))}</div>
                            <div className="text-base font-bold text-900">{props.data.map(e => e.tiket[0].flight.source.code)}</div>
                            <div className="text-base font-bold text-900 pt-4">Informasi</div>
                            {props.data.map(e => e.tiket.map(a=> (
                                <>
                                    <h1 className="text-sm font-semibold  text-binar-purple">Penumpang {i++} : {a.passenger.first_name}</h1>
                                    <div className="text-sm font-medium text-700">ID : {a.passenger.identity_number}</div>
                                </>
                            )))}
                            <div className="text-base font-semibold text-900 pt-4">Fasilitas</div>
                            {props.data.map(e => e.tiket[0].flight.information.map(e=> 
                                (
                                    <h1 className="text-sm font-semibold  text-binar-purple">- {e.name}</h1>
                                )
                            ))}

                        </div>
                    </div>
                    <Divider className="m-2"/>
                    <div>
                        <div className="text-base font-bold flex justify-between text-900">
                            {getTimes(props.data.map(e => e.tiket[0].flight.arrival_date))}
                            <div className="text-sm font-semibold justify-items-end text-binar-purple">Kedatangan</div>
                        </div>
                        <div className="text-sm font-light text-900">{getTanggal(props.data.map(e => e.tiket[0].flight.arrival_date))}</div>
                        <div className="text-sm font-semibold text-900">{props.data.map(e => e.tiket[0].flight.destination.name)}</div>
                    </div>
                    <Divider className="m-2"/>
                    <div>
                        <div className="text-base font-bold text-900">Rincian Harga</div>
                        {detailList(props.data.map(e => e.tiket))}
                    </div>
                    <Divider className="m-2"/>
                    <div className="text-base font-normal flex justify-between text-900 pb-4">
                        <div className="text-md font-bold text-900">Total</div>
                        <div className="text-md font-bold justify-items-end text-binar-purple">{Intl.NumberFormat ("id-ID", {
                                style: "currency",
                                currency: "IDR"
                                }).format(getHarga(props.data.map(e => e.tiket)))}</div>
                    </div>
                    <div>
                    </div>
                    {getButtonCheckOut(props.data.map(e => e.payment_status))}
                    {/* <Button label="Cetak Tiket" raised className="w-full"/> */}
                </div>
            </div>
    )
}

export default detailRiwayat;