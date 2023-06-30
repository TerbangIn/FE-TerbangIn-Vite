import React from "react";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { useSelector } from "react-redux";

import icon_x from "../../assets/images/icon_x.svg"

function ModalFlightFrom({ value, onSelect }) {
    const [visible, setVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchData, setSearchData] = useState([]);
    const { flightData } = useSelector((state) => state.FlightDestinationReducer)
    const options = flightData.map((data) => `${data?.source?.city} (${data?.source?.code})`);

   
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchValue(searchTerm);
        const filtered = options.filter(option => {
            if (option.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true
                
            }
            return false
        });
        setSearchData(filtered)
    };

    const handleSelection = (selectedValue) => {
        onSelect(selectedValue);
        setSearchValue("");
        setVisible(false);
    };

    const handleHapus = () => {
        setSearchData([]);
    }

    return (
        <>
            <div className="font-bold text-xs md:text-base cursor-pointer sm:ml-3 lg:ml-4" onClick={() => setVisible(true)}>
                {value}
            </div>

            <div className="card flex justify-content-center">
                <Dialog
                    header={
                        <span className="p-input-icon-left">
                            <i className="pi pi-search cursor-pointer" onClick={handleSearch} />
                            <InputText
                                placeholder="Search"
                                value={searchValue}
                                onChange={handleSearch}
                                className="w-96"
                            />
                        </span>
                    }
                    visible={visible}
                    modal={false}
                    style={{ width: '50vw' }}
                    onHide={() => setVisible(false)}
                >
                    <div className="flex flex-col">
                        <div>
                            <p className="pb-4 font-bold">
                                Pencarian Terkini{" "}
                                <span
                                    className="text-red-600 pl-96 pb-4 cursor-pointer"
                                    onClick={handleHapus}
                                >
                                    Hapus
                                </span>
                            </p>
                        </div>
                        {searchData.map((search, index) => (
                            <React.Fragment key={index}>
                                <div className="flex items-center">
                                    <p
                                        className="pl-2 cursor-pointer"
                                        onClick={() => handleSelection(search)}
                                    >
                                        {search}
                                    </p>
                                    <div className="flex ml-auto mr-6">
                                        <Image
                                            src={icon_x}
                                            alt="Remove"
                                            onClick={handleHapus}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <Divider style={{ margin: '8px 0' }} />
                            </React.Fragment>
                        ))}
                    </div>
                </Dialog>
            </div>
        </>
    );
}


export default ModalFlightFrom;