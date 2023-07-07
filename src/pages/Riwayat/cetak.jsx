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


export default class ComponentToPrint extends React.Component {

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
    penumpang = 1;

    render() {
        return (
            <>

                <Card className="md:w-2/3 sm:w-full mx-auto border-4 border-binar-purple my-12">
                        <div className="grid grid-cols-2 mx-2 mb-4">
                            <img alt="logo" src={logo} className="flex w-40"></img>
                            <div>
                                <div className="text-xl text-right font-bold text-binar-purple">E-Tiket</div>
                                <div className="text-sm text-right font-bold text-amber-400">Penerbangan Pergi</div>
                            </div>
                        </div>
                            <div className="text-xl font-bold text-binar-purple">Keberangkatan</div>
                        <Card className="p-0 button sm:mx-6 md:mx-auto border-2 justify-center border-binar-purple">
                            <div className="flex">
                                <div className="text-lg w-1/2 font-bold text-binar-purple">{this.props.data.tiket[0].flight.airline} - {this.props.data.tiket[0].flight.flight_number}</div>
                                <div className="text-lg w-1/2 text-right font-bold text-binar-purple">Kode Booking : {this.props.data.kode_booking}</div>
                            </div>
                            <Divider className="m-0"/>
                            <div class="flex gap-6">
                                <div class="flex-1">
                                    <div className="text-md font-semibold font-bold text-binar-purple"></div>
                                    <div className="text-md font-semibold">{this.getTanggal(this.props.data.tiket[0].flight.departure_date)}</div>
                                    <div className="text-md font-semibold">{this.props.data.tiket[0].flight.source.city} / {this.props.data.tiket[0].flight.source.country}</div>
                                    <div className="text-md font-semibold">Berangkat {this.getTimes(this.props.data.tiket[0].flight.departure_date)}</div>
                                </div>
                                <div class="shrink-0 w-32 my-auto">
                                    <div className="text-lg font-bold text-binar-purple text-center">{this.getClass((this.props.data.tiket[0].flight.economy_class_price),(this.props.data.tiket[0].flight.business_class_price),(this.props.data.tiket[0].flight.first_class_price),(this.props.data.tiket[0].flight.premium_price))}</div>
                                </div>
                                <div class="flex-1 text-right">
                                    {/* <div className="text-md font-semibold ps-4 justify-end font-bold text-binar-purple">IDR {Location?.state?.props?.data[0].total_price}</div> */}
                                    <div className="text-md font-semibold">{this.getTanggal(this.props.data.tiket[0].flight.arrival_date)}</div>
                                    <div className="text-md font-semibold">{this.props.data.tiket[0].flight.destination.city} / {this.props.data.tiket[0].flight.destination.country}</div>
                                    <div className="text-md font-semibold">Tiba {this.getTimes(this.props.data.tiket[0].flight.arrival_date)}</div>
                                </div>
                            </div>
                            <Divider className="m-0"/>
                            <div className="flex">
                                <div className="flex-1">
                                    <div className="text-md font-bold text-900">{this.props.data.tiket[0].flight.source.name} ({this.props.data.tiket[0].flight.source.code})</div>
                                </div>
                                <div className="shrink-0 my-auto w-32">
                                    <div className="text-md font-bold text-binar-purple text-center">Menuju</div>
                                </div>
                                <div className="flex-1">
                                    <div className="text-md font-bold text-900 text-end">{this.props.data.tiket[0].flight.destination.name} ({this.props.data.tiket[0].flight.destination.code})</div>
                                </div>
                            </div>
                            <Divider className="m-0"/>
                            <div className="text-md font-semibold">Note :
                            <div className="ms-2 text-sm font-light">
                                <li>Semua waktu  tertera adalah waktu bandara setempat</li>
                                <li>Mohon Lakukan Check-In Minimal 1 Jam Sebelum Waktu Keberangkatan</li>
                            </div>
                            </div>
                        </Card>
                        <div className="text-center my-4">
                        <table className="w-full">
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Nama</th>
                                <th>Jenis Tiket</th>
                                <th>Nomor Identitas</th>
                                <th>Fasilitas</th>
                            </tr>
                            {this.props.data.tiket.map(a=> (
                                <>
                                    <td className="text-sm font-semibold  text-binar-purple">{this.penumpang++}</td>
                                    <td className="text-sm font-semibold  text-binar-purple">{a.passenger.title}</td>
                                    <td className="text-sm font-semibold  text-binar-purple">{a.passenger.first_name}</td>
                                    <td className="text-sm font-semibold  text-binar-purple">{a.type_of_passenger}</td>
                                    <td className="text-sm font-semibold  text-binar-purple0">ID : {a.passenger.identity_number}</td>
                            <td>
                        <div className="text-base font-semibold text-900 text-center">{this.props.data.tiket[0].flight.information.map(e=> 
                                    (
                                        <h1 className="text-sm font-semibold  text-binar-purple">- {e.name}</h1>
                                    ))}</div>

                            </td>
                                </>
                            ))}
                            
                        </table>
                        </div>
                    </Card>
            </>
        )
    }
}
