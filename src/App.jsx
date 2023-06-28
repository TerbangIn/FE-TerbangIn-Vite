import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Authmiddleware from "./middleware/Authmiddleware";
import Register from "./pages/register";
import OTPRegister from "./pages/otpRegister";
import OTPResetPassword from "./pages/otpResetPassword";
import ResetPassword from "./pages/resetPassword";
import Riwayat from "./pages/Riwayat/Riwayat";
import Beranda from './pages/Beranda/Beranda';
import Chekout from './pages/Payment/chekout';
import Akun from './pages/Akun/Akun';
import Notifikasi from './pages/Notifikasi/Notifikasi';
import About from "./components/about/aboutUs";
import Payment from './pages/Payment/payment';
import Success from './pages/Payment/payment-success';
import TiketHabis from "./components/TiketHabis";
import BerandaLoading from "./components/BerandaLoading";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PencarianEmpty from "./components/PencarianEmpty";
import HasilPencarian from "./components/HasilPencarian";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path ="/" element={<Beranda />}/> */}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/otp-register" element={<OTPRegister />} />
          <Route path="/otp-reset-password" element={<OTPResetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password-baru" element={<ResetPassword />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/BerandaLoading" element={<BerandaLoading />} />
          <Route path="/TiketHabis" element={Authmiddleware(TiketHabis)} />
          <Route path="/PencarianEmpty" element={<PencarianEmpty />} />
          <Route path="/HasilPencarian" element={<HasilPencarian />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/akun" element={<Akun />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/about" element={<About />} />
          <Route path='/checkout' exact Component={Chekout} />
          <Route path='/payment' exact Component={Payment} />
          <Route path='/payment-success' exact Component={Success} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
