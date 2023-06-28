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


function AboutUs() {

    return (
        <div>
            
            <Card className="w-4/5 mx-auto my-auto">
            <Panel className="pb-2 rounded-lg" header="C7 BINAR ACADEMY BATCH 4" >
                <div className="text-2xl font-bold text-900">TEAM LINEUP</div>
                <div class="grid grid-cols-5 gap-4">
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                    <Card className="">
                        <div >
                            <Card>
                                <img alt="logo" src={person1} className="flex w-40 mx-auto"/>
                            </Card>
                            <div className="text-base font-bold text-binar-purple ">NAMA 1</div>
                            <div className="text-base font-bold text-amber-500">JOB ROLE</div>
                        </div>
                    </Card>
                </div>
                  </Panel>
            </Card>
        </div>
    )
}

export default AboutUs;