import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import Logo from "../pages/logo.png"

function Navbar() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    const handleSearch = () => {
        // Lakukan aksi pencarian sesuai dengan nilai `value`
        console.log("Melakukan pencarian:", value);
    };

    const logoItem = 
                <div to="/" className="ms-24">
                    <Image src={Logo} alt="Logo" width="200"/>
                </div>

    const buttonItem = 
                <div className="card justify-end me-24">
                    <span className="p-input-icon-right">
                        <Link to={'/about'}>
                            <Button icon='pi pi-users' rounded text severity="secondary" aria-label="User"/>
                        </Link>
                        <Link to={'/riwayat'}>
                            <Button icon="pi pi-list" rounded text severity="secondary" aria-label="User" />
                        </Link>
                        <Link to={'/notifikasi'}>
                            <Button icon="pi pi-bell" rounded text severity="secondary" aria-label="User" />
                        </Link>
                        <Link to={'/akun'}>
                            <Button icon="pi pi-user" rounded text severity="secondary" aria-label="User" />
                        </Link>
                    </span>

                </div>

    return (
        <div className="card col-12">
            <Menubar className="" start={logoItem} end={buttonItem}/>
        </div>
    )
}

export default Navbar;