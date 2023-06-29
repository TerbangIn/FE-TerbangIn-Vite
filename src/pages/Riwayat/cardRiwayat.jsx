import React, { useState , useRef , useEffect} from "react";
// import { setProducts } from '../../actions';
import "./Riwayat.css";
import "../../index.css";
import 'primeicons/primeicons.css';
import DetailRiwayat from "./detailRiwayat";
import RiwayatKosong from "./riwayatKosong";
import { Card } from 'primereact/card'
import arrow from './arrow.png'
import { Divider } from 'primereact/divider';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "react-toastify/dist/ReactToastify.css"
import { Tag } from 'primereact/tag';
import { differenceInYears } from 'date-fns';

const cardRiwayat = (props) => {
    const [visiblefilter, setVisibleFilter] = useState(false);
    const [visible, setVisible] = useState(false);
    const [filter, setfilter] = useState([]);
    const [harga, setHarga] = useState(0);
    const showFilter = () => {
        setVisibleFilter(true);
    };

    // console.log(props.data.id);
    const pickDetailHandler = (id) => {
        setVisible(true);
        const data = (props?.data?.filter(e => {
            return e.id == id
          }));
        setfilter(data)
    };
    
    const uniqueMonths = [];

    function getDateAndTime(dateTime) {
        const Bulan = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember"
          ];
        const tanggal = new Date(dateTime).getMonth()
        const tahun = new Date(dateTime).getFullYear()
        const namaBulan = Bulan[tanggal];
        if (!uniqueMonths.includes(namaBulan)) {
            uniqueMonths.push(namaBulan);
            return (<>{namaBulan} {tahun}</>)
         }
      
    }
    
    function getTanggal(dateIn){
        const date = new Date(dateIn);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);

        return(formattedDate);
    }
    function getTimes(date){
        const jam = new Date(date).getHours()
        const menit = new Date(date).getMinutes()
        return <>{jam} : {menit}</>
    }
    function rangeTime(departureTime, arrivalTime){
        // console.log(departureTime[0]);
        // console.log(arrivalTime[0]);
        // const durationInMilliseconds = new Date(arrivalTime.getTime()) - new Date(departureTime.getTime());
        // const durationInMilliseconds = new Date(arrivalTime.getTime()) - new Date(departureTime.getTime());

        // const hours = Math.floor(durationInMilliseconds / (1000 * 60 * 60));
        // const minutes = Math.floor((durationInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        // const seconds = Math.floor((durationInMilliseconds % (1000 * 60)) / 1000);

        // console.log(`Lama waktu: ${hours} jam, ${minutes} menit, ${seconds} detik`);
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
    
    const getStatus = (detail) => {
        if(detail === 'Issued')  {
            return (<Tag rounded className="h-8 w-20 px-3 text-sm font-base" severity="success" value="Issued"></Tag>);
        }else if(detail == 'Unpaid')  {
            return (<Tag rounded className="h-8 w-20 px-3 text-sm font-base" severity="danger" value="Unpaid"></Tag>)
        }else if(detail == 'Cancelled')  {
            return 'First'
        }
    };
    function getHarga(tiket){
        let total = 0;
        for(let i = 0; i < tiket.length;i++){
            const priceClass = getClassPrice(tiket[i].flight)
            if(tiket[i].type_of_passenger == "Adult"){
                let price = ((priceClass) * (tiket[i].flight.adult_price_percentage)/100)
                total += price;
            }else if(tiket[i].type_of_passenger == "Child"){
                let price = ((priceClass) * (tiket[i].flight.child_price_percentage)/100)
                total += price;
            }else if(tiket[i].type_of_passenger == "Baby"){
                let price = ((priceClass) * (tiket[i].flight.baby_price_percentage)/100)
                total += price;
            }
        }
        return total
      }

    return (
        <>
        <div>
            {/* Tampilkan informasi riwayat pemesanan lainnya */}
                {props?.data?.length > 0 ? (
            <div className="text-left mt-6 grid md:grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl">
                <div>
                    {props?.data?.map(riwayat => (
                        <div key={riwayat.id} className="pb-4">
                            <div className="text-md font-bold text-900 pb-2">{getDateAndTime(riwayat.createdAt)}</div>
                            <Card className="p-0 button sm:mx-6 md:mx-auto justify-center hover:border-4 border-binar-purple"  onClick={() => pickDetailHandler(riwayat.id)}>
                                <div className="mx-4 mb-4">
                                    {getStatus(riwayat.status)}
                                </div>
                                <div className="flex">
                                    <div className="flex ms-4 gap-2">
                                    <i className="pi pi-map-marker my-auto"></i>
                                    <div className="align-items-center sm:align-items-center">
                                        <div className="text-md font-bold text-900">{riwayat.tiket[0].flight.source.name}</div>
                                        <div className="text-sm">{getTanggal(riwayat.tiket[0].flight.departure_date)}</div>
                                        <div className="text-xs">{getTimes(riwayat.tiket[0].flight.departure_date)}</div>
                                    </div>
                                    </div>
                                    <div className="shrink-0 my-auto w-32">
                                        {/* <div className="text-md font-bold text-900 pb-2">{rangeTime(props.data.map(e => e.tiket[0].flight.departure_date), props.data.map(e => e.tiket[0].flight.arrival_date))}</div> */}
                                        <img src={arrow} alt="arrow" className="w-24 mx-auto pe-4"/>
                                    </div>
                                    <div className="flex gap-2">
                                    <i className="pi pi-map-marker my-auto"></i>
                                    <div className="col-3 align-items-center sm:align-items-center">
                                        <div className="text-md font-bold text-900">{riwayat.tiket[0].flight.destination.name}</div>
                                        <div className="text-sm">{getTanggal(riwayat.tiket[0].flight.arrival_date)}</div>
                                        <div className="text-xs">{getTimes(riwayat.tiket[0].flight.arrival_date)}</div>
                                    </div>
                                    </div>
                                </div>
                                <Divider className="m-0"/>
                                <div class="flex mx-4 gap-2">
                                    <div class="flex-1">
                                        <div className="text-xs font-semibold text-900">Booking code :</div>
                                        <div className="text-xs">{riwayat.kode_booking}</div>
                                    </div>
                                    <div class="shrink-0 w-32 text-center">
                                        <div className="text-xs font-semibold text-900">Class :</div>
                                        <div className="text-xs">{getClass((riwayat.tiket.map(a=> a.flight.economy_class_price)),(riwayat.tiket.map(a=> a.flight.business_class_price)),(riwayat.tiket.map(a=> a.flight.first_class_price)),(riwayat.tiket.map(a=> a.flight.premium_price)))}</div>
                                    </div>
                                    <div class="flex-1 text-right">
                                        <div className="text-md ps-4 justify-end font-bold text-binar-purple">IDR {getHarga(riwayat.tiket)}</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <div>

                {visible && <DetailRiwayat data={filter}/>}
                </div>
            </div>
                ) : (
                    <RiwayatKosong/>
                )}
        </div>
        </>
    )
}

export default cardRiwayat;