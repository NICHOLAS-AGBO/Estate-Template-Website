import Icon from "@mdi/react";
import {mdiClose, mdiMenu} from "@mdi/js";
import logo from "../logo.svg";
import {useState} from "react";
import {NavLink} from "react-router-dom";


export default function Header(){
    // const links = ["home","about","contact"];

    const [toggle,setToggle] = useState(false);

    return(
        <>
            <header>
                {/*BIGGER SCREEN*/}
                <div className={"hidden md:block w-full bg-white text-black py-3 px-8 shadow"}>

                    <div className={"flex justify-between items-center"}>

                        {/*SECTION FIRST LINK*/}
                        <div>
                            <nav>
                                <ul className={"flex flex-nowrap gap-4"}>
                                    <li><a href={"/about"} className={"hover:text-primary"}>About</a></li>
                                    <li><a href={"#"} className={"hover:text-primary"}>Link2</a></li>
                                    <li><a href={"#"} className={"hover:text-primary"}>Link3</a></li>
                                    <li><a href={"#"} className={"hover:text-primary"}>Link4</a></li>
                                    <li><a href={"#"} className={"hover:text-primary"}>Link5</a></li>
                                </ul>
                            </nav>
                        </div>

                        {/*SECTION LOGO*/}
                        <div><NavLink to={"/"}>
                            <img src={logo} width={100} alt={"react logo"}/>
                        </NavLink></div>

                        {/*SECTION SECOND LINK*/}
                        <div>
                            <nav>
                                <ul className={"flex flex-nowrap gap-4"}>
                                    <li><a href={"/about"} className={"hover:text-primary"}>About</a></li>
                                    <li><a href={"#"} className={"hover:text-primary"}>Link2</a></li>
                                    <li><a href={"#"} className={"hover:text-primary"}>Link3</a></li>
                                    <li><a href={"#"} className={"hover:text-primary"}>Link4</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>

                </div>

                {/*SMALLER SCREEN*/}
                <div className={"w-full bg-white text-black md:hidden py-3 px-5"}>
                    <div className={"flex justify-between flex-nowrap"}>
                        <div><button onClick={()=>setToggle(true)}><Icon path={mdiMenu} size={1}/></button></div>
                        <div><img src={logo} alt={"react logo"} width={100}/> </div>
                        <div><a href={"#"}>Sign in</a></div>
                    </div>
                </div>


            {/*SECTION Sidebar*/}

                {
                    (toggle)&&
                        <div className={"md:hidden fixed z-30 min-h-screen p-5 min-w-full top-0 bg-white"}>

                            <div className={"flex flex-nowrap items-center w-full border-b-2 border-primary mb-3 pb-2"}>
                                <div className={"w-max"}><button onClick={()=>setToggle(false)}><Icon path={mdiClose} size={1}/></button></div>
                                <div className={"w-7/12 flex-grow"}>
                                    <img src={logo} alt={"react logo"} className={"block mx-auto"} width={50}/>
                                </div>
                            </div>

                            <div>
                                <nav>
                                    <ul className={"flex flex-col gap-y-7"}>
                                        <li><a href={"/about"}>About</a></li>
                                        <li><a href={"#"}>Link2</a></li>
                                        <li><a href={"#"}>Link3</a></li>
                                        <li><a href={"#"}>Link4</a></li>
                                        <li><a href={"#"}>Link5</a></li>
                                        <li><a href={"#"}>Link6</a></li>
                                    </ul>
                                </nav>
                            </div>


                        </div>
                }
            </header>

        </>
    );
}
