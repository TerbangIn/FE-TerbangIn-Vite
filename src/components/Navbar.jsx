import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';;

import Logo from "../assets/logo (1).png"
import { Link } from "react-router-dom";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import fi_login from "../assets/images/fi_log-in.svg"

const CompNavbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [isToken, setIsToken] = useState(false);
    const cookies = new Cookies()
    const token = cookies.get("token")
    console.log(token)

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));

        if (token) {
            setIsToken(true)
        } else {
            setIsToken(false)
        }
    }, [token]);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );

    const buttonItem =
        <>
            <Link to={'/riwayat'}>
                <Button icon="pi pi-list" rounded text severity="secondary" aria-label="User" />
            </Link>
            <Link to={'/notifikasi'}>
                <Button icon="pi pi-bell" rounded text severity="secondary" aria-label="User" />
            </Link>
            <Link to={'/akun'}>
                <Button icon="pi pi-user" rounded text severity="secondary" aria-label="User" />
            </Link>
        </>
    const itemMobile =
        <>
            <Link to={'/riwayat'} className="flex text-black items-center">
                <Button icon="pi pi-list" rounded text severity="secondary" aria-label="User" />
                <p>Riwayat</p>
            </Link>
            <Link to={'/notifikasi'} className="flex text-black items-center">
                <Button icon="pi pi-bell" rounded text severity="secondary" aria-label="User" />
                <p>Notifikasi</p>
            </Link>
            <Link to={'/akun'} className="flex text-black items-center">
                <Button icon="pi pi-user" rounded text severity="secondary" aria-label="User" />
                <p>Akun</p>
            </Link>

        </>

    const logoItem =
        <Link to="/">
            <Image src={Logo} alt="Logo" width="200" />
        </Link>
    return (
        <>
            <Navbar className="fixed top-0 z-10 mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-2">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    {isToken
                        ?
                        <>
                            <div>{logoItem}</div>
                            <div className="hidden lg:block">{buttonItem}</div>
                        </>
                        :
                        <>
                            <div className="flex gap-6 items-center justify-between">
                                {logoItem}
                            </div>
                            <Link to={"/login"}>
                                <div className="flex items-center w-26 h-12 rounded-xl bg-primary2 hover:bg-purple1" >
                                    <Image src={fi_login} alt="login" className="mx-2 pl-1"/>
                                    <div className=" pr-4">Masuk</div>
                                </div>
                            </Link>
                        </>

                    }
                    {
                        isToken
                            ?
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-blue-500 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                            :
                            <></>
                    }
                </div>
                <MobileNav className={`${openNav ? "!h-[144px]" : "h-0"}`} open={openNav}>
                    <div className="container mx-auto">
                        <div className={`${openNav ? "flex" : "hidden"} flex-col items-center`}>{itemMobile}</div>
                    </div>
                </MobileNav>
            </Navbar>
        </>
    );
};

export default CompNavbar;