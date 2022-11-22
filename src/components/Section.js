import Icon from "@mdi/react";
import {mdiMagnify} from "@mdi/js";


export default function Section(){

    return(
        <section>
            <div className={"flex justify-center items-center bg-home h-[60vh] flex-col"}>


            <h3 className={"text-center text-3xl text-white drop-shadow font-semibold"}>Find it, own it and tour it</h3>
            <form className={"relative mt-3 max-w-md md:w-full w-[70%]"}>
                <input type={"search"} name={"search"}
                       placeholder={"Search for items ...."}
                       className={"block py-2 pl-2 pr-9  w-full rounded-lg"}/>

                <button className={"absolute z-10 top-1 right-2 text-gray-500"}>
                    <Icon path={mdiMagnify} size={"32px"}/></button>

            </form>

            </div>
        </section>

    );
}