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
         

const detailRiwayat = (props) => {

    const getButtonCheckOut = (detail) => {
        switch (detail.status) {
            case 'ISSUED':
                return (<Button label="Cetak Tiket" raised className="w-12"/>)

            case 'UNPAID':
                return (<Button label="Lanjut Bayar" severity="danger" raised className="w-12"/>)

            case 'CANCELLED':
                return (<Button label="Cancelled" severity="secondary" raised className="w-12" disabled/>)

            default:
                return null;
        }
    };

    const getStatus = (detail) => {
        if(detail === 'Issued')  {
            return (<Tag rounded className="h-8 w-20 px-3 text-sm font-base" severity="success" value="Issued"></Tag>);
        }else if(detail == 'Unpaid')  {
            return (<Tag rounded className="h-8 w-20 px-3 text-sm font-base" severity="danger" value="Unpaid"></Tag>)
        }else if(detail == 'Cancelled')  {
            return 'First'
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
            const priceClass = getClassPrice(tiket[i].flight)
            if(tiket[i].type_of_passenger == "Adult"){
                let price = ((priceClass) * (tiket[i].flight.adult_price_percentage)/100)
                total += price;
            }
        }
        return total
      }

    // console.log(props.data.map(e => e.id));

    // console.log(props.data.map(e => e.status));

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
    
    return (
            <div className="col-12">
                <div className="ps-8 mb-12">
                    <div className="text-base font-normal flex justify-between text-900">
                        <div className="text-md font-bold text-900">Detail Pesanan</div>
                        {getStatus(props.data.map(e => e.status))}
                    </div>
                    <div>
                        <div className="text-lg font-light text-900">Booking Code : {props.data.map(e => e.kode_booking)}</div>
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
                                    <h1 className="text-sm font-semibold  text-binar-purple">Penumpang {a.passenger.id} : {a.passenger.first_name}</h1>
                                    <div className="text-sm font-semibold text-900">ID {a.passenger.identity_number}</div>
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
                        <div className="text-base font-normal flex justify-between text-900">
                            1 Adult
                            {/* <div className="text-sm font-normal justify-items-end">{(data?.map(trans => trans.total_price))}</div> */}
                        </div>
                    </div>
                    {/* <div>{listAmountBaby(filter.orders)}</div> */}
                    <Divider className="m-2"/>
                    <div className="text-base font-normal flex justify-between text-900 pb-4">
                        <div className="text-md font-bold text-900">Total</div>
                        <div className="text-md font-bold justify-items-end text-binar-purple">{getHarga(props.data.map(e => e.tiket))}</div>
                    </div>
                    <Button label="Lanjut Bayar" severity="danger" raised className="w-full"/>
                    {getButtonCheckOut(props.data.map(e => e.status))}
                </div>
            </div>
    )
}

export default detailRiwayat;