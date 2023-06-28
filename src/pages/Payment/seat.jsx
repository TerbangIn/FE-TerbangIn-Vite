import React, { useState } from "react";

const SeatCustomer = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };


  const style = `
  .seat-picker {
    
  }
  

  .seat-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 18px;
  }
  
  .seats {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: lightgray ;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .selected {
    background-color: #73CA5C;
    color: white;
  }
  
`;

  return (
    <>
        <style>{style}</style>
        <div>
            <div className="w-[518px]  border-2 border-light-gray rounded mb-[34px] mt-[26px]" >
                <h1 className="text-xl1 font-bold mb-4 mt-[26px] ml-4">Pilih Kursi</h1>
                <div className="bg-green w-97 h-10 rounded-sm ml-4" >
                    <h1 className="text-sm text-white text-center pt-[10px] w-96.5">Economy - 64 Seats Available</h1>
                </div>
                <div className="seat-picker">
                    <div className="flex flex-row ml-[110px] mb-[18px] mt-2" >
                        <p className="mb-0 ml-2 mr-6" style={{ color: "#8A8A8A" }}>
                            A
                        </p>
                        <p className="mb-0 ml-2 mr-6" style={{ color: "#8A8A8A" }}>
                            B
                        </p>
                        <p className="mb-0 ml-2 mr-12" style={{ color: "#8A8A8A" }}>
                            C
                        </p>
                        <p className="mb-0 ml-2 mr-6" style={{ color: "#8A8A8A" }}>
                            D
                        </p>
                        <p className="mb-0 ml-1 mr-6" style={{ color: "#8A8A8A" }}>
                            E
                        </p>
                        <p className="mb-0 ml-2" style={{ color: "#8A8A8A" }}>
                            F
                        </p>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A1") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="A1" checked={selectedSeats.includes("A1")} onChange={() => handleSeatSelect("A1")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B1") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="B1" checked={selectedSeats.includes("B1")} onChange={() => handleSeatSelect("B1")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C1") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="C1" checked={selectedSeats.includes("C1")} onChange={() => handleSeatSelect("C1")} hidden disabled />X
                        </label>
                        <p className="bg-[#F2F2F2] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            1
                        </p>
                        <label
                            className={`text-[#F2F2F2] seats ${selectedSeats.includes("D1") ? "selected" : ""}`} style={{ cursor: selectedSeats.includes("D1") ? "not-allowed" : "pointer" }}
                        >
                            <input type="checkbox" value="D1" checked={selectedSeats.includes("D1")} onChange={() => handleSeatSelect("D1")} hidden disabled={selectedSeats.includes("D1")}/>
                            X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E1") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="E1" checked={selectedSeats.includes("E1")} onChange={() => handleSeatSelect("E1")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F1") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="F1" checked={selectedSeats.includes("F1")} onChange={() => handleSeatSelect("F1")} hidden disabled />X
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A2") ? "selected" : ""}`}>
                            <input type="checkbox" value="A2" checked={selectedSeats.includes("A2")} onChange={() => handleSeatSelect("A2")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B2") ? "selected" : ""}`}>
                            <input type="checkbox" value="B2" checked={selectedSeats.includes("B2")} onChange={() => handleSeatSelect("B2")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C2") ? "selected" : ""}`}>
                            <input type="checkbox" value="C2" checked={selectedSeats.includes("C2")} onChange={() => handleSeatSelect("C2")} hidden />
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            2
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D2") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="D2" checked={selectedSeats.includes("D2")} onChange={() => handleSeatSelect("D2")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E2") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="E2" checked={selectedSeats.includes("E2")} onChange={() => handleSeatSelect("E2")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F2") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="F2" checked={selectedSeats.includes("F2")} onChange={() => handleSeatSelect("F2")} hidden disabled />X
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A3") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="A3" checked={selectedSeats.includes("A3")} onChange={() => handleSeatSelect("A3")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B3") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="B3" checked={selectedSeats.includes("B3")} onChange={() => handleSeatSelect("B3")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C3") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="C3" checked={selectedSeats.includes("C3")} onChange={() => handleSeatSelect("C3")} hidden disabled />X
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            3
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D3") ? "selected" : ""}`}>
                            <input type="checkbox" value="D3" checked={selectedSeats.includes("D3")} onChange={() => handleSeatSelect("D3")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E3") ? "selected" : ""}`}>
                            <input type="checkbox" value="E3" checked={selectedSeats.includes("E3")} onChange={() => handleSeatSelect("E3")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F3") ? "selected" : ""}`}>
                            <input type="checkbox" value="F3" checked={selectedSeats.includes("F3")} onChange={() => handleSeatSelect("F3")} hidden />
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A4") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="A4" checked={selectedSeats.includes("A4")} onChange={() => handleSeatSelect("A4")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B4") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="B4" checked={selectedSeats.includes("B4")} onChange={() => handleSeatSelect("B4")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C4") ? "selected" : ""}`}>
                            <input type="checkbox" value="C4" checked={selectedSeats.includes("C4")} onChange={() => handleSeatSelect("C4")} hidden />
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            4
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D4") ? "selected" : ""}`}>
                            <input type="checkbox" value="D4" checked={selectedSeats.includes("D4")} onChange={() => handleSeatSelect("D4")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E4") ? "selected" : ""}`}>
                            <input type="checkbox" value="E4" checked={selectedSeats.includes("E4")} onChange={() => handleSeatSelect("E4")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F4") ? "selected" : ""}`}>
                            <input type="checkbox" value="F4" checked={selectedSeats.includes("F4")} onChange={() => handleSeatSelect("F4")} hidden />
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A5") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="A5" checked={selectedSeats.includes("A5")} onChange={() => handleSeatSelect("A5")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B5") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="B5" checked={selectedSeats.includes("B5")} onChange={() => handleSeatSelect("B5")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C5") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="C5" checked={selectedSeats.includes("C5")} onChange={() => handleSeatSelect("C5")} hidden disabled />X
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            5
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D5") ? "selected" : ""}`}>
                            <input type="checkbox" value="D5" checked={selectedSeats.includes("D5")} onChange={() => handleSeatSelect("D5")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E5") ? "selected" : ""}`}>
                            <input type="checkbox" value="E5" checked={selectedSeats.includes("E5")} onChange={() => handleSeatSelect("E5")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F5") ? "selected" : ""}`}>
                            <input type="checkbox" value="F5" checked={selectedSeats.includes("F5")} onChange={() => handleSeatSelect("F5")} hidden />
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A6") ? "selected" : ""}`}>
                            <input type="checkbox" value="A6" checked={selectedSeats.includes("A6")} onChange={() => handleSeatSelect("A6")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B6") ? "selected" : ""}`}>
                            <input type="checkbox" value="B6" checked={selectedSeats.includes("B6")} onChange={() => handleSeatSelect("B6")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C6") ? "selected" : ""}`}>
                            <input type="checkbox" value="C6" checked={selectedSeats.includes("C6")} onChange={() => handleSeatSelect("C6")} hidden />
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            6
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D6") ? "selected" : ""}`}>
                            <input type="checkbox" value="D6" checked={selectedSeats.includes("D6")} onChange={() => handleSeatSelect("D6")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E6") ? "selected" : ""}`}>
                            <input type="checkbox" value="E6" checked={selectedSeats.includes("E6")} onChange={() => handleSeatSelect("E6")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F6") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="F6" checked={selectedSeats.includes("F6")} onChange={() => handleSeatSelect("F6")} hidden disabled />X
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A7") ? "selected" : ""}`}>
                            <input type="checkbox" value="A7" checked={selectedSeats.includes("A7")} onChange={() => handleSeatSelect("A7")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B7") ? "selected" : ""}`}>
                            <input type="checkbox" value="B7" checked={selectedSeats.includes("B7")} onChange={() => handleSeatSelect("B7")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C7") ? "selected" : ""}`}>
                            <input type="checkbox" value="C7" checked={selectedSeats.includes("C7")} onChange={() => handleSeatSelect("C7")} hidden />
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            7
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D7") ? "selected" : ""}`}>
                            <input type="checkbox" value="D7" checked={selectedSeats.includes("D7")} onChange={() => handleSeatSelect("D7")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E7") ? "selected" : ""}`}>
                            <input type="checkbox" value="E7" checked={selectedSeats.includes("E7")} onChange={() => handleSeatSelect("E7")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F7") ? "selected" : ""}`}>
                            <input type="checkbox" value="F7" checked={selectedSeats.includes("F7")} onChange={() => handleSeatSelect("F7")} hidden />
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A8") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="A8" checked={selectedSeats.includes("A8")} onChange={() => handleSeatSelect("A8")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B8") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="B8" checked={selectedSeats.includes("B8")} onChange={() => handleSeatSelect("B8")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C8") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="C8" checked={selectedSeats.includes("C8")} onChange={() => handleSeatSelect("C8")} hidden disabled />X
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            8
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D8") ? "selected" : ""}`}>
                            <input type="checkbox" value="D8" checked={selectedSeats.includes("D8")} onChange={() => handleSeatSelect("D8")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E8") ? "selected" : ""}`}>
                            <input type="checkbox" value="E8" checked={selectedSeats.includes("E8")} onChange={() => handleSeatSelect("E8")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F8") ? "selected" : ""}`}>
                            <input type="checkbox" value="F8" checked={selectedSeats.includes("F8")} onChange={() => handleSeatSelect("F8")} hidden />
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A9") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="A9" checked={selectedSeats.includes("A9")} onChange={() => handleSeatSelect("A9")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B9") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="B9" checked={selectedSeats.includes("B9")} onChange={() => handleSeatSelect("B9")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C9") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="C9" checked={selectedSeats.includes("C9")} onChange={() => handleSeatSelect("C9")} hidden disabled />X
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 px-1 mb-0" style={{ color: "#8A8A8A" }}>
                            9
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D9") ? "selected" : ""}`}>
                            <input type="checkbox" value="D9" checked={selectedSeats.includes("D9")} onChange={() => handleSeatSelect("D9")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E9") ? "selected" : ""}`}>
                            <input type="checkbox" value="E9" checked={selectedSeats.includes("E9")} onChange={() => handleSeatSelect("E9")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F9") ? "selected" : ""}`}>
                            <input type="checkbox" value="F9" checked={selectedSeats.includes("F9")} onChange={() => handleSeatSelect("F9")} hidden />
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A10") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="A10" checked={selectedSeats.includes("A10")} onChange={() => handleSeatSelect("A10")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B10") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="B10" checked={selectedSeats.includes("B10")} onChange={() => handleSeatSelect("B10")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C10") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="C10" checked={selectedSeats.includes("C10")} onChange={() => handleSeatSelect("C10")} hidden disabled />X
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 mb-0" style={{ color: "#8A8A8A" }}>
                            10
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D1") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="D1" checked={selectedSeats.includes("D1")} onChange={() => handleSeatSelect("D1")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E1") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="E1" checked={selectedSeats.includes("E1")} onChange={() => handleSeatSelect("E1")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F1") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="F1" checked={selectedSeats.includes("F1")} onChange={() => handleSeatSelect("F1")} hidden disabled />X
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A11") ? "selected" : ""}`}>
                            <input type="checkbox" value="A11" checked={selectedSeats.includes("A11")} onChange={() => handleSeatSelect("A11")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B11") ? "selected" : ""}`}>
                            <input type="checkbox" value="B11" checked={selectedSeats.includes("B11")} onChange={() => handleSeatSelect("B11")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C11") ? "selected" : ""}`}>
                            <input type="checkbox" value="C11" checked={selectedSeats.includes("C11")} onChange={() => handleSeatSelect("C11")} hidden />
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 mb-0" style={{ color: "#8A8A8A" }}>
                            11
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D11") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="D11" checked={selectedSeats.includes("D11")} onChange={() => handleSeatSelect("D11")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E11") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="E11" checked={selectedSeats.includes("E11")} onChange={() => handleSeatSelect("E11")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("F11") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="F11" checked={selectedSeats.includes("F11")} onChange={() => handleSeatSelect("F11")} hidden disabled />X
                        </label>
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-27 mb-[10px]">
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("A12") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="A12" checked={selectedSeats.includes("A12")} onChange={() => handleSeatSelect("A12")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("B12") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="B12" checked={selectedSeats.includes("B12")} onChange={() => handleSeatSelect("B12")} hidden disabled />X
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("C12") ? "selected" : ""}`} style={{ cursor: "not-allowed" }}>
                            <input type="checkbox" value="C12" checked={selectedSeats.includes("C12")} onChange={() => handleSeatSelect("C12")} hidden disabled />X
                        </label>
                        <p className="bg-[#F2F2F2] ] flex items-center justify-center rounded-1 mb-0" style={{ color: "#8A8A8A" }}>
                            12
                        </p>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("D12") ? "selected" : ""}`}>
                            <input type="checkbox" value="D12" checked={selectedSeats.includes("D12")} onChange={() => handleSeatSelect("D12")} hidden />
                        </label>
                        <label className={`text-[#F2F2F2] seats ${selectedSeats.includes("E12") ? "selected" : ""}`}>
                            <input type="checkbox" value="E12" checked={selectedSeats.includes("E12")} onChange={() => handleSeatSelect("E12")} hidden />
                        </label>
                        <label className={` text-[#F2F2F2] seats ${selectedSeats.includes("F12") ? "selected" : ""}`}>
                            <input type="checkbox" value="F12" checked={selectedSeats.includes("F12")} onChange={() => handleSeatSelect("F12")} hidden />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default SeatCustomer;
