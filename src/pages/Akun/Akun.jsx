import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./Akun.css";
import "../../index.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "react-toastify/dist/ReactToastify.css"
import { Button } from "primereact/button";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useClickOutside } from "primereact/hooks";
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

function Akun() {
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);

  const accept = () => {
    toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
  }

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }
  const [pick, setPick] = useState("");
  const [filter, setfilter] = useState("");
  const overlayRef = useRef(null);
  const [form, setForm] = useState({
    first_name: "",
    phone_number: "",
    email: "",
  });
  const cookies = new Cookies()
  const token = cookies.get('token')
  const [userData, setUserData] = useState([]);

  const decode = jwt_decode(token);

  useClickOutside(overlayRef, () => {
    setVisible(false);
  });

  function pickDetailHandler(id) {
    setVisible(true);
    setPick(id);
  }
  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
  }
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://be-tiketku-production.up.railway.app/api/v1/user/${decode.id}`, {
          headers: {
            Authorization: `Bearer ${token}` // Menggunakan token dalam header permintaan
          }
        });
        setUserData(response?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [token]);

  const handleSubmit = async () => {
    // try{
    try {
      const response = await axios.put(
        `https://be-tiketku-production.up.railway.app/api/v1/user/${decode.id}`,
        {
          first_name: form.first_name,
          phone_number: form.phone_number,
          email: form.email,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXlhYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2NTYzMDg4fQ.zCE_OynwEoymILiP9N9OrGdCbPRZjxejG1h1lH1_qUU`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const navigate = useNavigate()

  const handleLogout = () => {
    cookies.remove('token');
    navigate("/login")
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="pt-20 mx-6">
          <Card>
            <div className="text-left mx-auto max-w-4xl">
              <div className="text-left mx-auto flex-auto">
                <div className="text-md font-bold lg:pb-4 sm:pb-2">Akun</div>
                <div className="text-base font-bold flex space-y-2 justify-between ">
                  <button className="w-full rounded-lg h-12 bg-binar-purple">
                    <Link to={'/riwayat'} className="flex items-center font-semibold gap-2 ms-4 text-white">
                      <div className="pi pi-arrow-left"></div>
                      Beranda
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </Card>
          <div className="body">
            <div className="text-left mt-6 sm:grid-cols-1 md:flex gap-2 mx-auto max-w-4xl">
              <div className="flex-1 md:w-16 sm:w-full md:mx-auto sm:mx-6">
                <Link to={'/akun'} className="flex items-center font-semibold gap-2 text-binar-purple" >
                  <div className="text-2xl text-binar-purple"><HiOutlinePencil /></div>
                  Ubah Profil
                </Link>
                <Divider className="w-10" />
                <Link
                  to={'/about'} className="flex items-center font-semibold gap-2 text-binar-purple">
                  <div className="text-2xl text-binar-purple"> <HiOutlineUserGroup /> </div>
                  About
                </Link>
                <Divider className="w-10" />
                <div
                  onClick={handleLogout} className="flex items-center font-semibold gap-2 text-binar-purple cursor-pointer">
                  <div className="text-2xl text-binar-purple"> <LuLogOut /> </div>
                  Keluar
                </div>
                <Divider className="w-10" />
              </div>
              <div className="flex-auto flex my-auto gap-2">
                <Card title="Ubah Data Profil" className="border shadow-none w-full md:mx-auto sm:mx-6">
                  <Panel header="Data Profil" className="pb-2 rounded-lg">
                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                      Nama Lengkap
                    </div>
                    <div className="col-12 flex-column justify-content-start pb-2">
                      <InputText
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md outline-none"
                        placeholder={userData.first_name}
                        type="text"
                        id="first_name"
                        value={form.first_name}
                        name="first_name"
                      />
                    </div>
                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                      Nomor Telepon
                    </div>
                    <div className="col-12 flex-column justify-content-start pb-2">
                      <InputText
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md outline-none"
                        type="text"
                        placeholder={userData.phone_number}
                        id="phone_number"
                        value={form.phone_number}
                        name="phone_number"
                      />
                    </div>
                    <div className="text-sm font-bold justify-items-end text-binar-purple">
                      Email
                    </div>
                    <div className="col-12 flex-column justify-content-start pb-2">
                      <InputText
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md outline-none"
                        type="text"
                        placeholder={userData.email}
                        id="email"
                        value={form.email}
                        name="email"
                      />
                    </div>
                  </Panel>
                  <Toast ref={toast} />
                  <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Anda Yakin Ingin Mengubahnya?"
                    header="Confirmation" icon="pi pi-exclamation-triangle" accept={handleSubmit} reject={reject} />
                  <div className="w-full text-center">
                    <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Simpan" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Akun;
