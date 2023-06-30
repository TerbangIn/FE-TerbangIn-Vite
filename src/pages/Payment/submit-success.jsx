import React from "react";
import Success from "./payment-success";

function Submit(){
    return(
        <>
            <div
                className=" w-[936px] h-[60px] mx-auto "
            >
                <div className="relative mx-auto">
                {/*content*/}
                <div className="border-0 mt-1  rounded-xl shadow-lg relative flex flex-col bg-[#73CA5C] outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-center rounded-t mt-1">
                    <h1 className="justify-center items-center text-lg text-white font-semibold mt-2">
                        Data Anda berhasil tersimpan!
                    </h1>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Submit;
        