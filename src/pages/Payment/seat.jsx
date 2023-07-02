import React, { useState, useEffect } from "react";
import axios from "axios";

const SeatCustomer = (props) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seat, setSeat] = useState([{
        id:"",
        status:""
    }]);

    const handleSeatSelect = (seat) => {
        if (selectedSeats.length < props.passenger.jumlah){
            if (selectedSeats.includes(seat)) {
                setSelectedSeats(selectedSeats.filter((s) => s !== seat));
                props.handleSeat(selectedSeats.filter((s) => s !== seat));
                } else {
                setSelectedSeats([...selectedSeats, seat]);
                props.handleSeat([...selectedSeats, seat]);
                // props.handleSeat(selectedSeats)
            }
        }else{
            if (selectedSeats.includes(seat)) {
                setSelectedSeats(selectedSeats.filter((s) => s !== seat));
                props.handleSeat(selectedSeats.filter((s) => s !== seat));
            }
        } 
        
    };

    console.log(props.passenger.jumlah)
    // console.log(selectedSeats)

    
    const url = `https://be-tiketku-production.up.railway.app/api/v1/flight/1`;
    
    const getSeat = async()=>{
        await axios.get(url).then(res=>{
            setSeat(res?.data?.data?.seat)
            console.log(res?.data?.data?.seat)
        })
    }
    
    useEffect(()=>{
        getSeat()
    },[])

    const postSeat = async()=>{
        await selectedSeats.map(data=>{
            Axios.put("https://be-tiketku-production.up.railway.app/api/v1/seat/", {
                seat: selectedSeats.seat_number
            },)
                .then(res => {
                    // Axios.put("https://be-tiketku-production.up.railway.app/api/v1/seat/",{
                    //     "passenger_id":res.data.id
                    // })
                    console.log(res.selectedSeats)
                })
                .catch((error) => {
                    console.error(error);
                })
        })
    }
    useEffect(() => {
        
    }, []);

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
            <div className="w-[518px]  border-2 border-[#8a8a8a] rounded mb-[34px] mt-[26px]" >
                <h1 className="text-[20px] font-bold mb-4 mt-[26px] ml-4">Pilih Kursi</h1>
                <div className="bg-[#73ca5c] w-[486px] h-10 rounded-sm ml-4" >
                    <h1 className="text-sm text-white text-center pt-[10px] w-96.5">Economy - 64 Seats Available</h1>
                </div>
                <div className="seat-picker ml-[90px]">
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
                    </div>
                    <div className="flex flex-1 space-x-[10px] ml-[110px] mb-[10px] ">
                        <div className="grid grid-rows-6 grid-flow-col gap-x-3 gap-y-2">
                            {seat?.map(data=>{
                                return( 
                                    <label className={`text-[#F2F2F2] seats ${data.status === "Available" ? "" :"selected"} ${selectedSeats.includes(data.id) ? "selected" : ""}`} >
                                        <input  type="checkbox" hidden value={data.id} checked={selectedSeats.includes(data.id)} onChange={() => handleSeatSelect(data.id)} disabled={data.status === "Available" ? false:true}/>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default SeatCustomer;
