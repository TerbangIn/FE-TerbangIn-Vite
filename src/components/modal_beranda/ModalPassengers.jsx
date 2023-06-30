import React from "react";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Image } from "primereact/image";

import icon_adult from "../../assets/images/icon_adult.svg"
import icon_child from "../../assets/images/icon_child.svg"
import icon_baby from "../../assets/images/icon_baby.svg"
import line from "../../assets/images/line_thin.svg"
import save from "../../assets/images/Brand_button.svg"

import { useSelector, useDispatch } from 'react-redux';


import button_minus from "../../assets/images/minus.svg"
import button_plus from "../../assets/images/plus.svg"

const ModalPassengers = (props) => {
    const [visible, setVisible] = useState(false);
    const counterAdult = useSelector(state => state.ModalPassengerReducer.counterAdult);
    const counterChild = useSelector(state => state.ModalPassengerReducer.counterChild);
    const counterBaby = useSelector(state => state.ModalPassengerReducer.counterBaby);
    const counterAmount = useSelector(state => state.ModalPassengerReducer.counterAmount)
    const showCounterChild = useSelector(state => state.ModalPassengerReducer.showCounterChild);
    const showCounterAdult = useSelector(state => state.ModalPassengerReducer.showCounterAdult);
    const showCounterBaby = useSelector(state => state.ModalPassengerReducer.counterBaby);


    const dispatch = useDispatch();

    const plusAdultHandler = () => {
        dispatch({ type: 'plusAdult' })

    };
    const minusAdultHandler = () => {
        dispatch({ type: 'minusAdult' })
    };
    const plusChildHandler = () => {
        dispatch({ type: 'plusChild' })

    };
    const minusChildHandler = () => {
        dispatch({ type: 'minusChild' })
    };
    const plusBabyHandler = () => {
        dispatch({ type: 'plusBaby' })

    };
    const minusBabyHandler = () => {
        dispatch({ type: 'minusBaby' })
    };
    const amountPassengersHandler = () => {
        dispatch({ type: 'amountPassengers' });
        setVisible(false)
    };

    return (
        <>
           <div className="font-bold text-xs md:text-base pl-2 md:pl-5 xl:ml-2" onClick={() => setVisible(true)} style={{ cursor: "pointer" }}>
            {counterAmount}
            </div>
            

            <div className="card flex justify-content-center">
                <Dialog visible={visible} modal={false} style={{ width: '420px' }} onHide={() => setVisible(false)}>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="flex flex-col pr-3">
                                <div className="flex">
                                    <Image src={icon_adult} alt="icon_adult" />
                                    <p className="pl-3">Dewasa</p>
                                </div>
                                <div>
                                    <p className="-mt-1 pl-4 pb-3 text-primary1">(12 tahun keatas)</p>
                                </div>
                            </div>
                            <div className="flex items-center ml-20">
                                <Image src={button_minus} alt="button_minus" onClick={minusAdultHandler} className="mr-4" />
                                {showCounterAdult && (<div>{counterAdult}</div>)}
                                <Image src={button_plus} alt="button_plus" onClick={plusAdultHandler} className="ml-4" />
                            </div>
                        </div>
                        <Image src={line} alt="line" className="-mt-1 pb-2" />
                        <div className="flex flex-row">
                            <div className="flex flex-col mr-2">
                                <div className="flex">
                                    <Image src={icon_child} alt="icon_child" className="pt-2" />
                                    <p className="pl-3">Anak</p>
                                </div>
                                <div>
                                    <p className="-mt-1 pl-6 pb-3 text-primary1">(2-11 tahun)</p>
                                </div>
                            </div>
                            <div className="flex items-center ml-28">

                                <Image src={button_minus} alt="button_minus" onClick={minusChildHandler} className="mr-4" />
                                {showCounterChild && (<div>{counterChild}</div>)}
                                <Image src={button_plus} alt="button_plus" onClick={plusChildHandler} className="ml-4" />

                            </div>
                        </div>
                        <Image src={line} alt="line" className="-mt-1 pb-2" />
                        <div className="flex flex-row">
                            <div className="flex flex-col mr-8">
                                <div className="flex">
                                    <Image src={icon_baby} alt="icon_baby" className="pt-2" />
                                    <p className="pl-3">Bayi</p>
                                </div>
                                <div>
                                    <p className="-mt-1 pl-6 text-primary1 pb-1">(Dibawah 2 tahun)</p>
                                </div>
                            </div>
                            <div className="flex items-center ml-12">
                                <Image src={button_minus} alt="button_minus" onClick={minusBabyHandler} className="mr-4" />
                                {showCounterBaby && (<div>{counterBaby}</div>)}
                                <Image src={button_plus} alt="button_plus" onClick={plusBabyHandler} className="ml-4" />
                            </div>
                        </div>
                        <Image src={line} alt="line" className="mb-4" />
                    </div>
                   
                    <Image src={save} alt="save" onClick={amountPassengersHandler} className="flex justify-end cursor-pointer"/>
                </Dialog>
            </div>

        </>
    )

}


    


export default ModalPassengers;