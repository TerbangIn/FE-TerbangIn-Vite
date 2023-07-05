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
const CompNavbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [isToken, setIsToken] = useState(false);
    const cookies = new Cookies()
    const token = cookies.get("token")

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
            <Navbar className="fixed top-0 z-10 mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4">
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
                                <label className="relative block">
                                    <span className="sr-only">Search</span>
                                    <input className="placeholder:italic placeholder:text-slate-400 xl:block lg:block md:block hidden bg-white w-full border border-slate-300 rounded-md py-3 xl:pr-20 lg:pr-20 md:pr-20 pr-5 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                                    <span className="absolute inset-y-0 right-3 flex items-center pl-2 xl:flex lg:flex md:flex hidden">
                                        <MagnifyingGlassIcon className="w-5 h-5 text-slate-600" />
                                    </span>
                                </label>
                            </div>
                            <Link to={"/login"}>
                                <Button label="Masuk" severity="help" icon={<svg className="me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.3335 14.1663L12.5002 9.99967L8.3335 5.83301" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.5 10H2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                } iconPos="left" />
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