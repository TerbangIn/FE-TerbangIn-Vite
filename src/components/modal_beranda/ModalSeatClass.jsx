import React from "react";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Image } from "primereact/image";

import Line from "../../assets/images/line_thin.svg"
import checklist from "../../assets/images/checklist.svg"
import save from "../../assets/images/Brand_button.svg"

function ModalSeatClass({onChange}) {
    const [visible, setVisible] = useState(false);
    const [selectedSeatClass, setSelectedSeatClass] = useState("Bussiness");
    const [savedSeatClass, setSavedSeatClass] = useState(null);

    const handleSeatClassClick = (seatClass) => {
        setSelectedSeatClass(seatClass);
        onChange(seatClass);
    };

    const handleSaveClick = () => {
        setSavedSeatClass(selectedSeatClass);
        setVisible(false);
    }

    return (
        <>
            <div className="font-bold mx-12 md:ml-14 ml-12" onClick={() => setVisible(true)} style={{ cursor: "pointer" }}>
                {savedSeatClass || selectedSeatClass}
            </div>
            <div className="card flex justify-content-center">
                <Dialog visible={visible} modal={false} style={{ width: '400px' }} onHide={() => setVisible(false)}>
                    <div className="flex flex-col">
                        <div className={`flex flex-row ${selectedSeatClass === 'Economy' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Economy')} style={{ cursor: "pointer" }}>
                            <div className="pr-3">
                                <p className="font-bold pt-2 ml-4 py-3">Economy</p>
                            </div>
                            {selectedSeatClass === 'Economy' && (
                                    <Image src={checklist} alt="checklist" className="absolute my-3 right-10"/>
                            )}
                        </div>
                        <Image src={Line} alt="line" />
                        <div className={`flex flex-row ${selectedSeatClass === 'Premium Economy' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Premium Economy')} style={{ cursor: "pointer" }}>
                            <div>
                                <p className="font-bold ml-4 pt-2 py-3">Premium Economy</p>
                            </div>
                            {selectedSeatClass === 'Premium Economy' && (
                                    <Image src={checklist} alt="checklist" className="absolute my-3 right-10"/>
                            )}
                        </div>
                        <Image src={Line} alt="line" />
                        <div className={`flex flex-row ${selectedSeatClass === 'Business' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Business')} style={{ cursor: "pointer" }}>
                            <div className="pr-1">
                                <p className="font-bold ml-4 pt-2 py-3">Business</p>
                            </div>
                            {selectedSeatClass === 'Business' && (
                                    <Image src={checklist} alt="checklist" className="absolute my-3 right-10"/>
                            )}
                        </div>
                        <Image src={Line} alt="line" />
                        <div className={`flex flex-row ${selectedSeatClass === 'First Class' ? 'selected  text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('First Class')} style={{ cursor: "pointer" }}>
                            <div>
                                <p className="font-bold ml-4 pt-2 py-3">First Class</p>
                            </div>
                            {selectedSeatClass === 'First Class' && (
                                <Image src={checklist} alt="checklist" className="absolute my-3 right-10"/>
                            )}
                        </div>
                        <Image src={Line} alt="line" className="mb-4" />
                    </div>
                    <Image src={save} alt="save" className="flex justify-end" style={{ cursor: "pointer" }} onClick={handleSaveClick} />
                </Dialog>
            </div>
        </>
    );
}

export default ModalSeatClass;