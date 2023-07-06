import React, { useState, useRef, useEffect } from "react";
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
  const [search, setSearch] = useState(false);
  const [simpan, setSimpan] = useState(false);
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
    setSearch(false)
    setidPemesanan(searchText)
    setSimpan(true)
    setSearch(true)
  };
  const showFilter = () => {
    setVisibleFilter(true);
  };

  const hideFilter = () => {
    setVisibleFilter(false);
    setSearchText('');
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

  cariDataPemesanan(idPemesanan);

  const [dateRange, setDateRange] = useState(null);
  const [range, setRange] = useState([]);

  const handleDateRangeChange = (e) => {
    setDateRange(e.value);
  };

  const getDatesInRange = () => {
    if (dateRange) {
      const startDate = dateRange[0];
      const endDate = dateRange[1];

      const dates = [];
      const currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    }

    return [];
  };

  const formatDate = (date) => {
    if (date) {
      return date.toISOString().slice(0, 10);
    }
    return '';
  };
  function rangeDate() {
    const datetimeString = "2023-06-27T14:43:20.708Z";
    const dateString = datetimeString.slice(0, 10);
    getDatesInRange().map((date) => {
      const hasilPencarian = userData?.transaction?.map(pemesanan => {
        const datetimeString = pemesanan.createdAt;
        const dateString = datetimeString.slice(0, 10);
        if (dateString == formatDate(date)) {
          if (simpan == true) {
            Hasil.push(pemesanan);
          }
          return pemesanan
        }
      })

      return hasilPencarian
    })
  }

  return (
    <>
      <Navbar />
      <div className="pt-20 column-12 body">
        <Card>
          <div className="text-left mx-auto max-w-4xl">
            <div className="text-left mx-auto flex-auto ms-1">
              <div className="text-md font-bold text-900 lg:pb-4 sm:pb-2">Riwayat Pemesanan</div>
              <div className="text-base font-bold flex space-y-2 justify-between ">
                <button className="w-4/5 rounded-lg h-12 bg-binar-purple">
                  <Link to={'/beranda'} className="flex items-center font-semibold gap-2 ms-4 text-white">
                    <div className="pi pi-arrow-left"></div>
                    Beranda
                  </Link>
                </button>
                <Button className="h-8 button-search" type="button" label="Filter" icon="pi pi-filter" outlined rounded onClick={showFilter} />
                <Button onClick={showDialog} className="button-search h-8" rounded text >
                  <i className="pi pi-search" style={{ fontSize: '1.5rem' }}></i>
                </Button>
                <Dialog className="md:w-1/3 sm:w-full" visible={visibleFilter} onHide={hideFilter} header="Tanggal berapa anda melakukan transaksi" footer={<Button onClick={handleSearch} label="Simpan" />}>
                  <Calendar selectionMode="range" value={dateRange} onChange={handleDateRangeChange} inline showWeek className="w-full" />
                </Dialog>
                <Dialog className="md:w-1/3 sm:w-full" visible={visible} onHide={hideDialog} header="Cari Riwayat Pesananmu" footer={<Button onClick={handleSearch}>Cari</Button>}>
                  <InputText
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Masukkan Kode Booking dicari"
                    className="w-full"
                  />
                </Dialog>
              </div>
            </div>
          </div>
        </Card>
        <div>
          {rangeDate()}
        </div>
        {search == true ? (<CardRiwayat data={Hasil} />) : (<CardRiwayat data={userData.transaction} />)}
      </div>
    </>
  );
}

export default Riwayat;
