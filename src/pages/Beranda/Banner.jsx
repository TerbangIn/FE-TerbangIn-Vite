import React from "react";
import { Image } from "primereact/image";
import banner4 from "../../assets/images/img_banner.svg"

function Banner() {
    return (
        <div className="pt-24">
            <div className="bg-gradient-to-r from-purple4 to-purple2 w-full h-10 mt-6 sm:h-20 md:h-20 lg:h-28 sm:mt-6 md:mt-6 lg:mt-12 xl:mt-16"></div>
            <div className="flex justify-center -mt-14 sm:-mt-24 md:-mt-30 lg:-mt-36">
                <Image src={banner4} alt="img_banner" className=" pl-4 flex items-center pr-4 sm:w-12/12 sm:mx-auto md:w-11/12 md:mx-auto lg:w-11/12 lg:mx-auto xl:max-w-screen-xl xl:mx-auto 2xl:max-w-screen-xl 2xl:mx-auto" />
            </div>
        </div>
    )
}

export default Banner;