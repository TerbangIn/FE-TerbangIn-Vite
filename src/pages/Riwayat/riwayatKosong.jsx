import "./Riwayat.css";
import "../../index.css";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import EmptyLogo from './empty.png'                                
         

const riwayatKosong = () => {
    return (
            <>
            <div className="w-full h-screen py-24 mx-auto">
                <img src={EmptyLogo} alt="Empty" className="mx-auto w-52 pb-6"/>
                <div className="text-md text-center font-bold text-binar-purple">Oops! Riwayat pesanan kosong!</div>
                <div className="text-md text-center font-base">Anda belum melakukan pemesanan penerbangan</div>
            </div>
            </>
    )
}

export default riwayatKosong;