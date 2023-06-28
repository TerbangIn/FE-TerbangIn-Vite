import React, { useState , useRef , useEffect} from "react";
// import { setProducts } from '../../actions';
import Navbar from "../../components/Navbar";
import CardRiwayat from "./cardRiwayat";
import Top from "./top";
import "./Riwayat.css";
import "../../index.css";
import axios from "axios"
import Cookies from 'universal-cookie';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
         

function Riwayat() {

    const cookies = new Cookies()
    const token = cookies.get('token')

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get('https://be-tiketku-production.up.railway.app/api/v1/user/1', { 
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
    
    return (
        <>
        <Navbar></Navbar>
        <div className="column-12 body">
            <Top></Top>
                <CardRiwayat data={userData} />
                
        </div>
        </>
  );
}

export default Riwayat;
