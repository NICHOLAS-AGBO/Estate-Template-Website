import Icon from "@mdi/react";
import {mdiChevronDown, mdiImage} from "@mdi/js";
import {useEffect} from "react";

export default function Services(){
    return(
        <div className={"max-w-screen-lg mx-auto px-2 py-7"}>
            <div className={"flex justify-center flex-wrap justify-around gap-y-4"}>

                {/*ITEM 1*/}
                <a href={"#"} className={"bg-white hover:scale-105 transition-transform lg:w-[31%] sm:w-9/12 md:w-7/12 w-full shadow-md shadow-gray-400 px-3 py-5 rounded-lg flex justify-around items-center flex-wrap gap-2 gap-y-2"}>
                    <Icon path={mdiImage} size={5}/>

                    <div className={"lg:text-center text-center sm:text-left flex flex-col lg:items-center items-center sm:items-start gap-y-4 w-full sm:w-6/12 lg:w-auto"}>
                        <h3 className={"font-bold text-2xl"}>Buy a home</h3>
                    <p>
                        Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
                    </p>
                        <button className={"border w-44 border-primary rounded p-2 bg-white text-primary btn_items"}>Browse Homes</button>
                    </div>
                </a>


                {/*ITEM 2*/}
                <a href={"#"} className={"bg-white hover:scale-105 transition-transform lg:w-[31%] sm:w-9/12 md:w-7/12 w-full shadow-md shadow-gray-400 px-3 py-5 rounded-lg flex justify-around items-center flex-wrap gap-2 gap-y-2"}>
                    <Icon path={mdiImage} size={5}/>

                    <div className={"lg:text-center text-center sm:text-left flex flex-col lg:items-center items-center sm:items-start gap-y-4 w-full sm:w-6/12 lg:w-auto"}>
                        <h3 className={"font-bold text-2xl"}>Buy a home</h3>
                        <p>
                            Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
                        </p>
                        <button className={"border w-44 border-primary rounded p-2 bg-white text-primary btn_items"}>Browse Homes</button>
                    </div>
                </a>


                {/*ITEM 3*/}
                <a href={"#"} className={"bg-white hover:scale-105 transition-transform lg:w-[31%] sm:w-9/12 md:w-7/12 w-full shadow-md shadow-gray-400 px-3 py-5 rounded-lg flex justify-around items-center flex-wrap gap-2 gap-y-2"}>
                    <Icon path={mdiImage} size={5}/>

                    <div className={"lg:text-center text-center sm:text-left flex flex-col lg:items-center items-center sm:items-start gap-y-4 w-full sm:w-6/12 lg:w-auto"}>
                        <h3 className={"font-bold text-2xl"}>Buy a home</h3>
                        <p>
                            Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
                        </p>
                        <button className={"border w-44 border-primary rounded p-2 bg-white text-primary btn_items"}>Browse Homes</button>
                    </div>
                </a>


            </div>
        </div>
    );
}


export function Buttons(){

    const show = (e)=>{
        const cont = document.querySelector(e.currentTarget.getAttribute("data-target"));
        cont.classList.toggle("hidden");
    };



    return(
        <div className={"max-w-screen-xl mx-auto"}>
            <div className={"flex flex-wrap justify-around items-start"}>
                <div className={"w-full max-w-xs md:w-3/12 sm:w-5/12 px-3 lg:px-10"}>
                    <button onClick={show} data-target={".estate"} className={"flex flex-nowrap justify-around w-full focus:border-2 focus:border-primary p-4 rounded"}>
                        <span className={"hover:underline font-medium"}>Real Estate</span>
                        <Icon path={mdiChevronDown} size={1} className={"text-primary"} />
                    </button>

                    <div className={"w-full estate text-center py-2 hidden"}>
                        yuggugucuc
                    </div>

                </div>

                <div className={"w-full max-w-xs md:w-3/12 sm:w-5/12 px-3 lg:px-10 sm:border-t-0 sm:border-b-0 sm:border sm:border-2 sm:border-r-0 md:border-r-2"}>
                    <button onClick={show} data-target={".rentals"} className={"flex flex-nowrap justify-around w-full focus:border-2 focus:border-primary p-4 rounded"}>
                        <span className={"hover:underline font-medium"}>Rentals</span>
                        <Icon path={mdiChevronDown} size={1} className={"text-primary"} />
                    </button>

                    <div className={"w-full rentals text-center py-2 hidden"}>
                        yuggugucuc
                    </div>

                </div>


                <div className={"w-full max-w-xs md:w-3/12 sm:w-5/12 px-3 lg:px-10 md:border-t-0 md:border-l-0 md:border-b-0 md:border md:border-2"}>
                    <button onClick={show} data-target={".mortgage"} className={"flex flex-nowrap justify-around w-full focus:border-2 focus:border-primary p-4 rounded"}>
                        <span className={"hover:underline font-medium"}>Mortgage Rates</span>
                        <Icon path={mdiChevronDown} size={1} className={"text-primary"} />
                    </button>

                    <div className={"w-full mortgage text-center py-2 hidden"}>
                        yuggugucuc
                    </div>

                </div>


                <div className={"w-full max-w-xs md:w-3/12 sm:w-5/12 px-3 lg:px-10"}>
                    <button onClick={show} data-target={".browse"} className={"flex flex-nowrap justify-around w-full focus:border-2 focus:border-primary p-4 rounded"}>
                        <span className={"hover:underline font-medium"}>Browse Homes</span>
                        <Icon path={mdiChevronDown} size={1} className={"text-primary"} />
                    </button>

                    <div className={"w-full browse text-center py-2 hidden"}>
                        yuggugucuc
                    </div>
                </div>

            </div>
        </div>
    );
}