import React from "react";
import { Image } from "primereact/image";

import banner4 from "../../assets/images/img_banner.svg"

function Banner() {
    return (
        <>
            <div className="bg-gradient-to-r from-purple4 to-purple2 w-full h-10 mt-6 sm:h-20 md:h-20 lg:h-28 sm:mt-6 md:mt-6 lg:mt-12 xl:mt-16"></div>
            <div className="flex justify-center -mt-14 sm:-mt-24 md:-mt-30 lg:-mt-36">
                <Image src={banner4} alt="img_banner" className=" pl-4 pr-4 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-[1120px]" />
            </div>
        </>

    )
}

export default Banner;