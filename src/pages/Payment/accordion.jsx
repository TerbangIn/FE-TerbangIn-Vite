import React from "react";
import paypal from './images/paypal logo.svg';
import amex from './images/amex logo.svg';
import master from './images/mastercard logo.svg';
import visa from './images/visa logo.svg';


function Accordion(){

    return(
        <>
            <div className="ml-[308px] space-y-4">
                <div
                    class=" w-[486px] bg-black rounded-md">
                    <h2 class="mb-0" id="headingTwo">
                    <button
                        class="group relative flex w-[486px] items-center rounded-md border-0 bg-black px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        Gopay
                        <span
                        class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h2>
                    <div
                    id="collapseTwo"
                    class="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingTwo"
                    data-te-parent="#accordionExample">
                    <div class="px-5 py-4">
                        <strong>This is the second item's accordion body.</strong> It is
                        hidden by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control
                        the overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just
                        about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                    </div>
                    </div>
                </div> 
                <div
                    class="rounded-md w-[486px] bg-black dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 class="accordion-header mb-0" id="headingThree">
                    <button
                        class="group relative flex w-full items-center rounded-md bg-black px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        Virtual Account
                        <span
                        class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h2>
                    <div
                    id="collapseThree"
                    class="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="headingThree"
                    data-te-parent="#accordionExample">
                    <div class="px-5 py-4">
                        <strong>This is the third item's accordion body.</strong> It is
                        hidden by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control
                        the overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just
                        about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div
                    class="rounded-t-lg dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 class="mb-0" id="headingOne">
                        <button
                            class="group relative flex w-[486px] items-center rounded-md border-0 bg-purple-700 px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-purple-700 [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Credit Card
                            <span
                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6">
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                    id="collapseOne"
                    class="!visible"
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="headingOne"
                    data-te-parent="#accordionExample">
                    <div class=" ">
                        <div className="flex flex-row ml-[177px] mt-7">
                            <img className="mr-4" src={master} alt="" />
                            <img className="mr-4" src={visa} alt="" />
                            <img className="mr-4" src={amex} alt="" />
                            <img className="" src={paypal} alt="" />
                        </div>
                        <div className="ml-[111px] mt-6">
                            <h1 className="text-sm ">Card number</h1>
                            <input className="border-b-2 w-[296px] border-light-gray  focus:outline-none" placeholder="4480 0000 0000 0000" />
                        </div>
                        <div className="ml-[111px] mt-6">
                            <h1 className="text-sm ">Card holder name</h1>
                            <input className="border-b-2 w-[296px] border-light-gray  focus:outline-none" placeholder="John Doe" />
                        </div>
                        <div className="flex flex-row">
                            <div className="ml-[111px] mt-6">
                                <h1 className="text-sm ">CVV</h1>
                                <input className="border-b-2 w-[132px] border-light-gray  focus:outline-none" placeholder="000" />
                            </div>
                            <div className="ml-8 mt-6">
                                <h1 className="text-sm ">Expiry Date</h1>
                                <input className="border-b-2 w-[132px] border-light-gray  focus:outline-none" placeholder="07/24" />
                            </div>
                        </div>
                        <button className="w-[500px] h-[62px] rounded-lg text-white mt-14 bg-purple-700">Bayar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion;