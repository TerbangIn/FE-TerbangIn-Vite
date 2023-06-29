import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Card } from 'primereact/card'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Link } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Panel } from "primereact/panel";
import { InputText } from 'primereact/inputtext';
import person1 from './person1.png'
import './about.css'

import brahmasta from '../../assets/member/Brahmasta.jpg'
import fadhlan from '../../assets/member/Fadhlan.jpg'
import kenny from '../../assets/member/Kenny.jpg'
import miftakhul from '../../assets/member/Miftakhul.jpg'
import shifly from '../../assets/member/Shifly.jpg'
import rio from '../../assets/member/Rio.jpg'


function AboutUs() {

    return (
        <div>

            <Card className="w-4/5 mx-auto my-auto">
                <Panel className="pb-2 rounded-lg" header="C7 BINAR ACADEMY BATCH 4">
                    <div className="text-2xl font-bold text-900">TEAM LINEUP</div>
                    <div class="grid grid-cols-5 gap-4">
                        <Card className="">
                            <div className="text-center">
                                <Card>
                                    <img alt="logo" src={kenny} className="flex w-40" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple mb-9">Kenny Linardi Lim</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas Budi Luhur</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://www.instagram.com/kennylinrdy/"><i className="pi pi-instagram mr-2"></i></a>
                                <a href="https://github.com/kennylinardy"><i className="pi pi-github mr-2"></i></a>
                                <a href="https://www.linkedin.com/in/kenny-linardi-lim-b9a3b8219"><i className="pi pi-linkedin mr-2"></i></a>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="text-center">
                                <Card>
                                    <img alt="logo" src={miftakhul} className="flex w-40 mx-auto " />
                                </Card>
                                <div className="text-base font-bold text-binar-purple mb-3">Miftakhul Ulum Khasanah</div>
                                <div className="text-sm text-binar-purple mb-2">Universitas Negeri Surabaya</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://www.instagram.com/__miifta/"><i className="pi pi-instagram mr-2"></i></a>
                                <a href="http://github.com/miftaa9"><i className="pi pi-github mr-2"></i></a>
                                <a href="https://www.linkedin.com/in/miftakhululumkhasanah"><i className="pi pi-linkedin mr-2"></i></a>
                            </div>
                        </Card>

                        <Card className="">
                            <div className="text-center">
                                <Card>
                                    <img alt="logo" src={person1} className="flex w-40 mx-auto" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple mb-3">Oryza Amaliatuz Zahra</div>
                                <div className="text-sm text-binar-purple mb-2">Universitas Bina Sarana Informatika</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://www.instagram.com/kennylinrdy/"><i className="pi pi-instagram mr-2"></i></a>
                                <a href="https://github.com/kennylinardy"><i className="pi pi-github mr-2"></i></a>
                                <a href="https://www.linkedin.com/in/kenny-linardi-lim-b9a3b8219"><i className="pi pi-linkedin mr-2"></i></a>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="text-center">
                                <Card>
                                    <img alt="logo" src={person1} className="flex w-40 mx-auto" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple mb-3">Rafli Mardhian</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://www.instagram.com/kennylinrdy/"><i className="pi pi-instagram mr-2"></i></a>
                                <a href="https://github.com/kennylinardy"><i className="pi pi-github mr-2"></i></a>
                                <a href="https://www.linkedin.com/in/kenny-linardi-lim-b9a3b8219"><i className="pi pi-linkedin mr-2"></i></a>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="text-center">
                                <Card>
                                    <img alt="logo" src={shifly} className="flex w-40 mx-auto" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple mb-9">Shifly Inner Beauty</div>
                                <div className="text-sm text-binar-purple mb-2">Universitas Negeri Surabaya</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://instagram.com/inr.beauty_"><i className="pi pi-instagram mr-2"></i></a>
                                <a href="https://github.com/shifly063"><i className="pi pi-github mr-2"></i></a>
                                <a href="https://www.linkedin.com/in/shifly-inner-beauty-764920260/"><i className="pi pi-linkedin mr-2"></i></a>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="text-center">
                                <Card>
                                    <img alt="logo" src={brahmasta} className="flex w-40 mx-auto" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple mb-3">Brahmasta Bagus Aryandra</div>
                                <div className="text-sm text-binar-purple mb-2">Institut Teknologi Telkom Purwokerto</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Backend Developer</div>
                                <a href="https://instagram.com/brahmastabagus?igshid=MzNlNGNkZWQ4Mg=="><i className="pi pi-instagram mr-2"></i></a>
                                <a href="https://github.com/Brahmastabagus"><i className="pi pi-github mr-2"></i></a>
                                <a href="https://id.linkedin.com/in/brahmasta-bagus"><i className="pi pi-linkedin mr-2"></i></a>

                            </div>
                        </Card>
                        <Card className="">
                            <div className="text-center">
                                <Card>
                                    <img alt="logo" src={fadhlan} className="flex w-40 mx-auto" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple mb-3">Muhammad Fadhlan Aqila</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas Gunadarma</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Backend Developer</div>
                                <a href="https://www.instagram.com/padhlanaqila/"><i className="pi pi-instagram mr-2"></i></a>
                                <a href="http://github.com/zodplugin"><i className="pi pi-github mr-2"></i></a>
                                <a href="https://www.linkedin.com/in/fadhlanaqilaa"><i className="pi pi-linkedin mr-2"></i></a>
                            </div>
                        </Card>
                        <Card className="">
                            <div >
                                <Card>
                                    <img alt="logo" src={person1} className="flex w-40 mx-auto" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                                <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                            </div>
                        </Card>
                        <Card className="">
                            <div >
                                <Card>
                                    <img alt="logo" src={person1} className="flex w-40 mx-auto" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                                <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="text-center">
                                <Card>
                                    <img alt="logo" src={rio} className="flex w-40 mx-auto" />
                                </Card>
                                <div className="text-base font-bold text-binar-purple mb-5">Rio Griya Putra</div>
                                <div className="text-sm text-binar-purple mb-10">Universitas YARSI</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Android Developer</div>
                                <a href="https://instagram.com/riop4u"><i className="pi pi-instagram mr-2"></i></a>
                                <a href="https://github.com/Pucukio"><i className="pi pi-github mr-2"></i></a>
                                <a href="https://www.linkedin.com/in/rio-griya-putra/"><i className="pi pi-linkedin mr-2"></i></a>
                            </div>
                        </Card>
                    </div>
                </Panel>
            </Card>
        </div>
    )
}

export default AboutUs;