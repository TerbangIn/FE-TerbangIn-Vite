import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setProducts } from '../../actions';
import Navbar from "../../components/Navbar";
import "../../index.css";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { LuArrowLeft } from "react-icons/lu";
import { HiOutlinePencil } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { ToastContainer, toast } from "react-toastify";
import "./Akun.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useClickOutside } from "primereact/hooks";

function Akun() {
  const dispatch = useDispatch();
  const [Adult, setAdult] = useState(0);
  const [Baby, setBaby] = useState(0);
  const [data, setData] = useState([]);
  const [Nama, setNama] = useState("");
  const [Telp, setTelp] = useState("");
  const [Email, setEmail] = useState("");
  const [pick, setPick] = useState("");
  const [visible, setVisible] = useState(false);
  const [filter, setfilter] = useState("");
  const overlayRef = useRef(null);
  const [form, setForm] = useState({
    first_name: "",
    phone_number: "",
    email: "",
  });

  useClickOutside(overlayRef, () => {
    setVisible(false);
  });

  function pickDetailHandler(id) {
    setVisible(true);
    setPick(id);
  }

  const pickMenu = () => {
    if ((pick = "ubah")) {
      return (
        <Card title="Ubah Data Profil" className="border shadow-none">
          <Panel header="Data Profil">
            <div className="text-sm font-bold justify-items-end text-binar-darkPurple">
              Nama Lengkap
            </div>
            <div className="col-12 flex-column justify-content-start pb-2">
              <InputText
                onChange={handleChange}
                className="ml-4 pl-4 border border-gray-300 rounded-md py-2 focus:border-main-purple outline-none"
                type="text"
                id="first_name"
                value={form.first_name}
                name="first_name"
              />
            </div>
            <div className="text-sm font-bold justify-items-end text-binar-darkPurple">
              Nomor Telepon
            </div>
            <div className="col-12 flex-column justify-content-start pb-2">
              <InputText
                onChange={handleChange}
                className="ml-4 pl-4 border border-gray-300 rounded-md py-2 focus:border-main-purple outline-none"
                type="text"
                placeholder="+6213486777"
                id="phone_number"
                value={form.phone_number}
                name="phone_number"
              />
            </div>
            <div className="text-sm font-bold justify-items-end text-binar-darkPurple">
              Email
            </div>
            <div className="col-12 flex-column justify-content-start pb-2">
              <InputText
                onChange={handleChange}
                className="ml-4 pl-4 border border-gray-300 rounded-md py-2 focus:border-main-purple outline-none"
                type="text"
                placeholder="JohnDoe@gmail.com"
                id="email"
                value={form.email}
                name="email"
              />
            </div>
          </Panel>
        </Card>
      );
    } else if (pick === "keluar") {
      return logout;
    }
  };

  const handleSubmit = async () => {
    // try{
    await axios.put(
      "https://be-tiketku-production.up.railway.app/api/v1/user/2",
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
    if (response.status === 200) {
      toast.success(response.data.message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    // }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="col-12 body">
          <Card>
            <div className="mx-auto lg:col-8 sm:col-10 justify-between">
              <div className="text-md font-bold text-900 lg:pb-4 sm:pb-2">
                Notifikasi
              </div>
              <div className="text-base font-bold flex justify-between text-900 align-center pe-6">
                <div className="bg-binar-purple justify-content-start rounded-lg w-12">
                  <div className="">
                    <Link
                      href="/notifikasi"
                      className=" flex gap-5 md:justify-start items-center bg-third-purple p-3 md:ml-auto rounded-xl text-white hover:bg-main-purple md:pr-100 duration-75"
                    >
                      <LuArrowLeft /> Beranda
                    </Link>
                  </div>
                </div>
              </div>
              <p className="m-0"></p>
            </div>
          </Card>
          <div className="justify-center">
            <div className="flex sm:col-10 lg:col-8 mx-auto">
              <div className="flex col-12 justify-start p-0 my-2">
                <div className="col-4 p-0 align-end">
                  <Link
                    href="/profile"
                    className="flex items-center font-semibold gap-2 text-binar-purple"
                  >
                    <div className="text-2xl text-binar-purple">
                      <HiOutlinePencil />
                    </div>
                    Ubah Profil
                  </Link>
                  <Divider className="w-10"/>
                  <Link
                    href="/profile"
                    className="flex items-center font-semibold gap-2 text-binar-purple"
                  >
                    <div className="text-2xl text-binar-purple">
                      <LuLogOut />
                    </div>
                    Keluar
                  </Link>
                  <Divider className="w-10"/>
                </div>
                <div className="col-6 p-0 my-auto">
                  <Card title="Ubah Data Profil" className="border shadow-none">
                  <Panel header="Data Profil" className="pb-4">
                    <div className="text-sm font-bold justify-items-end text-binar-darkPurple">
                      Nama Lengkap
                    </div>
                    <div className="col-12 flex-column justify-content-start pb-2">
                      <InputText
                        onChange={handleChange}
                        className="w-12 border border-gray-300 rounded-md outline-none"
                        placeholder="Agus"
                        type="text"
                        id="first_name"
                        value={form.first_name}
                        name="first_name"
                      />
                    </div>
                    <div className="text-sm font-bold justify-items-end text-binar-darkPurple">
                      Nomor Telepon
                    </div>
                    <div className="col-12 flex-column justify-content-start pb-2">
                      <InputText
                        onChange={handleChange}
                        className="w-12 border border-gray-300 rounded-md outline-none"
                        type="text"
                        placeholder="081222987654"
                        id="phone_number"
                        value={form.phone_number}
                        name="phone_number"
                      />
                    </div>
                    <div className="text-sm font-bold justify-items-end text-binar-darkPurple">
                      Email
                    </div>
                    <div className="col-12 flex-column justify-content-start pb-2">
                      <InputText
                        onChange={handleChange}
                        className="w-12 border border-gray-300 rounded-md outline-none"
                        type="text"
                        placeholder="JohnDoe@gmail.com"
                        id="email"
                        value={form.email}
                        name="email"
                      />
                    </div>
                  </Panel>
                  <Button
                    onClick={handleSubmit}
                    className="bg-binar-purple hover:bg-main-purple px-8 rounded-lg text-white"
                  >
                    Simpan
                  </Button>
                </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Akun;
