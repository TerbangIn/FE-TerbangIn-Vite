import React from "react";
import { useEffect, useRef, useState } from "react";

const formatTime = (time) =>{
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes *60)

    if (minutes <= 10) minutes = '0' + minutes;
    if (seconds <= 10) seconds = '0' + seconds;
    return minutes + ':' + seconds
}

function Timer({seconds}){
    const [countdown, setCountdown] = useState(seconds)
    const timerId = useRef()

    useEffect(() =>{
        timerId.current = setInterval(() =>{
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current)
            Link="/"
            alert("Waktu habis")
            
        }
    }, [countdown])


    return(
        <>
            <div
                className=" w-[936px] h-[60px] mx-auto "
            >
                <div className="relative mx-auto">
                {/*content*/}
                <div className="border-0 h-[50px] mt-1 rounded-xl shadow-lg relative flex flex-col bg-[#FF0000] outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-center rounded-t mt-1">
                    <h1 className="justify-center items-center text-lg mt-2 text-white font-semibold">
                        Selesaikan dalam  {formatTime(countdown)}
                    </h1>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Timer;
        