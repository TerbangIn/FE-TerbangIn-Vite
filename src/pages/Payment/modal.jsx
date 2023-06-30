import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
        <>
          <div
            className=" w-[936px] h-[60px] mx-auto "
          >
            <div className="relative mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-[#FF0000] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center rounded-t mt-1">
                  <div className="mr-[277px] ml-[287px]">
                    <h3 className="text-lg text-white font-semibold">
                      Anda harus login terlebih dahulu!
                    </h3>
                  </div>
                  <div className="border-2 border-white rounded-full w-[29px] h-[29px] ">
                    <button
                      className="ml-auto  bg-transparent border-0 text-white float-right text-md leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="h-6 w-6 text-lg block mr-[2px]">
                        X
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 -z-40 bg-black"></div>
        </>
    </>
  );
}