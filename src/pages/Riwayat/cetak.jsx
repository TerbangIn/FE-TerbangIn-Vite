import "./Riwayat.css";
import "../../index.css";
import 'primeicons/primeicons.css';
import { Divider } from 'primereact/divider';
import logo from '../../assets/logo (1).png'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useLocation } from "react-router";
import React from "react";
import Navbar from "../../components/Navbar";
import "../../index.css";
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Link } from "react-router-dom";

// const Cetak = (props) => {



//     const Location = useLocation()
//     console.log(this.props.data);

// }
export default class ComponentToPrint extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    getTimes(date) {
        const jam = new Date(date).getHours()
        const menit = new Date(date).getMinutes()
        return <>{jam} : {menit}</>
    }

    getTanggal(dateIn) {
        const date = new Date(dateIn);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);

        return (formattedDate);
    }

    getClass = (economy, bussiness, first, premium) => {
        if (economy != null) {
            return 'Economy'
        } else if (bussiness != null) {
            return 'Bussiness'
        } else if (first != null) {
            return 'First'
        } else if (premium != null) {
            return 'Premium'
        }
    }

    render() {
        return (
            <>
                <Card className="w-8/12 mx-auto border-4 border-binar-purple my-4">
                    <div className="grid grid-cols-2 mx-2 mb-4">
                        <img alt="logo" src={logo} className="flex w-40 text-center"></img>
                        <div >
                            <div className="text-md text-end font-bold text-binar-purple">Cetak Tiket</div>
                            <div className="text-md text-end font-base">Nikmati Perjalanan Anda!</div>
                        </div>
                    </div>
                    <Card className="p-0 button sm:mx-6 md:mx-auto border-2 justify-center border-binar-purple">
                        <div className="flex">
                            <div className="flex-1">
                                <div className="align-items-center align-items-center text-center">
                                    <div className="text-md font-bold text-900">{this.props.data.tiket[0].flight.source.name}</div>
                                    <div className="text-md">{this.getTanggal(this.props.data.tiket[0].flight.departure_date)}</div>
                                    <div className="text-md">{this.getTimes(this.props.data.tiket[0].flight.departure_date)}</div>
                                </div>
                            </div>
                            <div className="shrink-0 my-auto w-8">
                                <div className="text-md font-bold text-binar-purple text-center">to</div>
                            </div>
                            <div className="flex-1">
                                <div className="col-3 align-items-center align-items-center text-center">
                                    <div className="text-md font-bold text-900">{this.props.data.tiket[0].flight.destination.name}</div>
                                    <div className="text-md mt-8">{this.getTanggal(this.props.data.tiket[0].flight.arrival_date)}</div>
                                    <div className="text-md">{this.getTimes(this.props.data.tiket[0].flight.arrival_date)}</div>
                                </div>
                            </div>
                        </div>
                        <Divider className="m-0" />
                        <div className="flex mx-4">
                            <div className="flex-1">
                                <div className="text-xs font-semibold text-900">Class :</div>
                                <div className="text-xs">{this.getClass((this.props.data.tiket[0].flight.economy_class_price), (this.props.data.tiket[0].flight.business_class_price), (this.props.data.tiket[0].flight.first_class_price), (this.props.data.tiket[0].flight.premium_price))}</div>
                            </div>
                            <div className="shrink-0 w-32 text-center">
                                <div className="text-xs font-semibold text-900">Booking code :</div>
                                <div className="text-md font-bold text-binar-purple">{this.props.data.kode_booking}</div>
                            </div>
                            <div className="flex-1 text-right">
                                <div className="text-md ps-4 justify-end font-bold text-binar-purple">IDR {this.props.data.total_price}</div>
                            </div>
                        </div>
                    </Card>
                    <div className="text-center my-4">
                        <h1 className="text-sm font-semibold  text-binar-purple">Penumpang : {this.props.data.tiket[0].passenger.first_name}</h1>
                        <div className="text-sm font-medium text-700">ID : {this.props.data.tiket[0].passenger.identity_number}</div>
                    </div>
                    <div className="text-base font-semibold text-900 pt-4 text-center">Fasilitas</div>
                    <div className="text-base font-semibold text-900 text-center">{this.props.data.id}</div>
                </Card>

                <div>

                </div>
            </>
        )
    }
}

// export default Cetak;