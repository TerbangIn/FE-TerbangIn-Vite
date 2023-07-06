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
import BerandaLogin from './pages/Beranda/BerandaLogin';
import Checkout from './pages/Payment/checkout';
import Akun from './pages/Akun/Akun';
import Notifikasi from './pages/Notifikasi/Notifikasi';
import About from "./components/about/aboutUs";
import Waiting from "./components/waiting/waiting";
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-register" element={<OTPRegister />} />
          <Route path="/otp-reset-password" element={<OTPResetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password-baru" element={<ResetPassword />} />
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda" element={<BerandaLogin />} />
          <Route path="/BerandaLoading" element={<BerandaLoading />} />
          <Route path="/TiketHabis" element={<TiketHabis />} />
          <Route path="/PencarianEmpty" element={<PencarianEmpty />} />
          <Route path="/hasil-pencarian" element={<HasilPencarian />} />
          <Route path="/riwayat" element={<Authmiddleware><Riwayat/></Authmiddleware>} />
          <Route path="/akun" element={<Authmiddleware><Akun/></Authmiddleware>} />
          <Route path="/notifikasi" element={<Authmiddleware><Notifikasi/></Authmiddleware>} />
          <Route path="/about" element={<About />} />
          <Route path="/waiting" element={<Authmiddleware><Waiting/></Authmiddleware>} />
          <Route path='/checkout' element={<Authmiddleware><Checkout/></Authmiddleware>} />
          <Route path='/payment' element={<Authmiddleware><Payment/></Authmiddleware>} />
          <Route path='/payment-success' element={<Authmiddleware><Success/></Authmiddleware>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
