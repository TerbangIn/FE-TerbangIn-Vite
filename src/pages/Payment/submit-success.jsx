import React from "react";
import Success from "./payment-success";

function Submit(){
    return(
        <>
            <div
                className="lg:w-[936px] xl:w-[936px] md:w-[600px] sm:w-[490px] h-[60px] mx-auto mt-5 "
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
        