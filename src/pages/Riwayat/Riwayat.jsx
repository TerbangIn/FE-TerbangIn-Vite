import React, { useState , useRef , useEffect} from "react";
// import { setProducts } from '../../actions';
import Navbar from "../../components/Navbar";
import CardRiwayat from "./cardRiwayat";
import "./Riwayat.css";
import "../../index.css";
import axios from "axios"
import Cookies from 'universal-cookie';
import 'primeicons/primeicons.css';
import "./Riwayat.css";
import "../../index.css";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Card } from 'primereact/card'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Link } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import jwt_decode from 'jwt-decode'

         

function Riwayat() {

    const cookies = new Cookies()
    const token = cookies.get('token')
    const decode = jwt_decode(token);

    const [userData, setUserData] = useState([]);
    const [searching, setSearching] = useState([]);
    const [search, setSearch] = useState([]);
    const [visible, setVisible] = useState(false);
    const [visibleFilter, setVisibleFilter] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [dates, setDates] = useState(null);
    const [idPemesanan, setidPemesanan] = useState('');

    const showDialog = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
        setSearchText('');
    };

    const handleSearch = () => {
        console.log(`Mencari: ${searchText}`);
        setidPemesanan(searchText)
    };
    const showFilter = () => {
        setVisibleFilter(true);
    };

    const hideFilter = () => {
        setVisibleFilter(false);
        setSearchText('');
    };

    const handleFilter = () => {
        console.log(`Mencari: ${searchText}`);
    };

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

      const Hasil = [];
      function cariDataPemesanan(kode) {
        const hasilPencarian = userData?.transaction?.map(pemesanan => {
          if (pemesanan.kode_booking === kode) {
            Hasil.push(pemesanan);
            return pemesanan
          }
        });
        return hasilPencarian
      }
      
      console.log(Hasil);
      const hasilPencarian = cariDataPemesanan(idPemesanan);

      if (hasilPencarian) {
        console.log(hasilPencarian);
        console.log(hasilPencarian[0]);
      } else {
        console.log('Data tidak ditemukan');
      }
      // console.log(userData.transaction.map(e=> e.tiket.map(a=> a.flight.first_class_price)))

    return (
        <>
        <Navbar></Navbar>
        <div className="column-12 body">

        <Card>
            <div className="text-left mx-auto max-w-4xl">
                <div className="text-left mx-auto flex-auto">
                    <div className="text-md font-bold text-900 lg:pb-4 sm:pb-2">Riwayat Pemesanan</div>
                    <div className="text-base font-bold flex space-y-2 justify-between ">
                        <button className="w-4/5 rounded-lg h-12 bg-binar-purple">
                            <Link to={'/riwayat'} className="flex items-center font-semibold gap-2 ms-4 text-white">
                                <div className="pi pi-arrow-left"></div>
                                Beranda
                            </Link>
                        </button>
                        <Button className="h-8 button-search" type="button" label="Filter" icon="pi pi-filter" outlined rounded onClick={showFilter} />
                        {/* <OverlayPanel ref={op}>
                            <div>
                                <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" inline showWeek />
                            </div>
                            <div className="text-end lg:py-4">
                                <Button type="submit" label="Simpan" />
                            </div>
                        </OverlayPanel> */}
                        <Button onClick={showDialog} className="button-search h-8" rounded text >
                            <i className="pi pi-search" style={{ fontSize: '1.5rem' }}></i>
                        </Button>
                        <Dialog visible={visibleFilter} onHide={hideFilter} header="Tanggal berapa anda melakukan transaksi" footer={<Button type="submit" label="Simpan" />}>
                                <Calendar className="w-full" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" inline showWeek />
                        </Dialog>
                        <Dialog visible={visible} onHide={hideDialog} header="Cari Riwayat Pesananmu" footer={<button onClick={handleSearch}>Cari</button>}>
                            <InputText
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Masukkan kata kunci pencarian"
                            />
                        </Dialog>
                    </div>
                </div>
            </div>
        </Card>
        {/* <CardRiwayat data={userData.transaction} /> */}
        {hasilPencarian !== undefined || hasilPencarian !== null ? (
          <CardRiwayat data={Hasil} />
        ) : (<CardRiwayat data={userData.transaction}/>)}
        </div>
      </>
  );
}

export default Riwayat;
