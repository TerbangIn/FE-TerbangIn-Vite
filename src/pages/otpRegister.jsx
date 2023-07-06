import PinInput from 'react-pin-input';
import FormAction from "../components/formAction";
import { Button } from 'primereact/button';
import { useState } from 'react';
import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
import './otp.css'
import Logo from './logo.png'
import { Image } from 'primereact/image';
import { useEffect } from 'react';
import Header from '../components/header';
import 'primeicons/primeicons.css';
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from 'universal-cookie';
import { useNavigate, useLocation } from 'react-router-dom';

export default function OTPRegister() {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(60);
  const [emailHidden, setEmailHidden] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  let hideEmail = function (email) {
    if (emailHidden != null) {
      return email.replace(/(.{1})(.*)(?=@)/,
        function (gp1, gp2, gp3) {
          for (let i = 0; i < gp3.length; i++) {
            gp2 += "*";
          } return gp2;
        });
    }
  };

  const start =
    <div className="image ms-9">
      <Image src={Logo} alt="Image" width='20%' />
    </div>

  const resendOTP = async () => {
    await axios.post('https://be-tiketku-production.up.railway.app/api/v1/user/otp', {
      email: emailHidden
    }).then(res => {
      toast.success(`${res.status}, redirect in 3s...`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      setSeconds(60)
    })
  }

  const handleSubmit = async () => {
    await axios.post('https://be-tiketku-production.up.railway.app/api/v1/user/verify', {
      otp: otp,
      email: emailHidden
    }).then(res => {
      toast.success(`${res.data.message}, redirect in 3s...`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      navigate("/login")
    }).catch(error => {
      toast.error(`${error.response.data.message}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    })
  }

  // useEffect(() => {
  //   setEmailHidden(location?.state)
  //   console.log(emailHidden)
  //   console.log(hideEmail(emailHidden))
  // }, [emailHidden]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }
  //     if (seconds === 0) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [seconds]);

  const backButton = () => {
    navigate('/register')
  }
  useEffect(() => {
    if (location.state === null) {
      navigate('/register')
    }
    setEmailHidden(location?.state)
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds, emailHidden, location, navigate]);

  return (
    <div className='w-screen'>
      <div className='flex flex-col'>
        <div className="">
          <Menubar start={start} menuIcon={false} />
        </div>
        <div className='mt-6 mb-16 flex flex-col items-center justify-center'>
          <div className='text-left w-3/4 md:w-2/4 gap-10 flex items-center'>
            <Button type='button' className="" text label="" onClick={() => backButton()}>
              <i className='pi pi-arrow-left font-extrabold text-black' style={{ fontSize: '1.4rem' }}></i>
            </Button>
            <label className='text-3xl font-extrabold text-gray-900'>Masukkan OTP</label>
          </div>
          <div className='mt-10'>
            <h2>Ketik 6 digit kode yang dikirimkan ke <b>{hideEmail(emailHidden)}</b></h2>

            <PinInput
              length={6}
              initialValue=""
              secret={false}
              // secretDelay={100}
              onChange={(value, index) => { setOtp(value) }}
              type="numeric"
              inputMode="number"
              style={{ paddingTop: '44px', paddingBottom: '24px' }}
              inputStyle={{ border: '1px solid #D0D0D0', borderRadius: '16px', margin: '0 2px' }}
              // inputFocusStyle={{borderColor: 'blue'}}
              onComplete={(value, index) => { }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />

            {seconds > 0 ? (
              <h2 className='flex text-center'>
                Kirim ulang OTP dalam {seconds < 10 ? `${seconds}` : seconds} detik
              </h2>
            ) : (
              // ketika detik sudah 0
              <Button onClick={resendOTP} label="Kirim Ulang" text severity='danger' />
            )}
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-1/4'>
            <FormAction handleSubmit={handleSubmit} text="Simpan" />
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  )
}
