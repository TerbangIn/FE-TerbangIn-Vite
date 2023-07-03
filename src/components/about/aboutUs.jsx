import 'primeicons/primeicons.css'
import { Card } from 'primereact/card'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"
import { Panel } from "primereact/panel";
import './about.css'

import brahmasta from '../../assets/member/Brahmasta.png'
import fadhlan from '../../assets/member/Fadhlan.png'
import kenny from '../../assets/member/Kenny.png'
import miftakhul from '../../assets/member/Miftakhul.png'
import rafli from '../../assets/member/Rafli.png'
import shifly from '../../assets/member/Shifly.png'
import rio from '../../assets/member/Rio.png'
import sekar from '../../assets/member/Sekar.png'
import dheva from '../../assets/member/dheva.png'
import oryza from '../../assets/member/Oryza.png'



function AboutUs() {

    return (
        <div>
            <Card className="w-4/5 mx-auto my-auto">
                <Panel className="pb-2 rounded-lg" header="C7 BINAR ACADEMY BATCH 4">
                    <div className="text-2xl font-bold text-900">TEAM LINEUP</div>
                    <div className="grid grid-cols-4 gap-4">
                        <Card className="hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={kenny} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Kenny Linardi Lim</div>
                                <div className="text-sm text-binar-purple mb-6">Universitas Budi Luhur</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://www.instagram.com/kennylinrdy/"><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="https://github.com/kennylinardy"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/kenny-linardi-lim-b9a3b8219"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>
                        <Card className="hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={miftakhul} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Miftakhul Ulum Khasanah</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas Negeri Surabaya</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://www.instagram.com/__miifta/"><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="http://github.com/miftaa9"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/miftakhululumkhasanah"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>

                        <Card className="hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={oryza} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Oryza Amaliatuz Zahra</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas Bina Sarana Informatika</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://www.instagram.com/ory.az/"><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="https://github.com/OryzaAmaliatuzZahra"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/oryza-amaliatuz-zahra-89a934265/"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>
                        <Card className="hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={rafli} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Rafli Mardhian</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas Gunadarma</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://instagram.com/rafli_mardhian?igshid=MzRlODBiNWFlZA=="><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="https://github.com/raflimardhian"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/rafli-mardhian-01459a236/"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>
                        <Card className="hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={shifly} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Shifly Inner Beauty</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas Negeri Surabaya</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Frontend Developer</div>
                                <a href="https://instagram.com/inr.beauty_"><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="https://github.com/shifly063"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/shifly-inner-beauty-764920260/"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>
                        <Card className="hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={brahmasta} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Brahmasta Bagus Aryandra</div>
                                <div className="text-sm text-binar-purple mb-7">Institut Teknologi Telkom Purwokerto</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Fullstack Developer</div>
                                <a href="https://instagram.com/brahmastabagus?igshid=MzNlNGNkZWQ4Mg=="><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="https://github.com/Brahmastabagus"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://id.linkedin.com/in/brahmasta-bagus"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>

                            </div>
                        </Card>
                        <Card className="hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={fadhlan} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Muhammad Fadhlan Aqila</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas Gunadarma</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Fullstack Developer</div>
                                <a href="https://www.instagram.com/padhlanaqila/"><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="http://github.com/zodplugin"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/fadhlanaqilaa"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>
                        <Card className="hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={sekar} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Sekar Risma Aisyah</div>
                                <div className="text-sm text-binar-purple mb-7">Institut Pertanian Bogor</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Android Developer</div>
                                <a href="https://instagram.com/sekaar._?igshid=OGQ5ZDc2ODk2ZA=="><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="http://github.com/SekarAisyah"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/sekar-risma-aisyah-311a74218"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>
                        <Card className="text-center hover:scale-105">
                            <div className="text-center">
                                <img alt="logo" src={dheva} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Dheva Dayat Vito Indrajaka</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas Gadjah Mada</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Android Developer</div>
                                <a href="https://instagram.com/dheevvvv"><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="http://github.com/dheevvvv"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/dheevvvv"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>
                        <Card className="hover:scale-105">
                            <div className="text-center ">
                                <img alt="logo" src={rio} className="flex w-fit mx-auto mb-2" />
                                <div className="text-base font-bold text-binar-purple mb-3">Rio Griya Putra</div>
                                <div className="text-sm text-binar-purple mb-7">Universitas YARSI</div>
                                <div className="text-base font-bold text-amber-500 mb-3">Android Engineer</div>
                                <a href="https://instagram.com/riop4u"><i className="pi pi-instagram mr-2 hover:scale-105"></i></a>
                                <a href="https://github.com/Pucukio"><i className="pi pi-github mr-2 hover:scale-105"></i></a>
                                <a href="https://www.linkedin.com/in/rio-griya-putra/"><i className="pi pi-linkedin mr-2 hover:scale-105"></i></a>
                            </div>
                        </Card>
                    </div>
                </Panel>
            </Card>
        </div>
    )
}

export default AboutUs;