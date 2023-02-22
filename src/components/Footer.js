import {NavLink} from "react-router-dom";


export default function Footer(){
    const links = ["About","Research","Career","Health",
        "Advert","Fair housing guide"];


    return(
        <div className={"bg-white py-7 px-2"}>
        <div className={"max-w-screen-lg mx-auto text-md flex flex-wrap justify-center gap-3"}>
            {links.map((link,id)=>{
                return(
                    <span key={id}><NavLink to={"/"+link.toLowerCase().split(" ").join("-")}
                                            className={"hover:underline"}
                                            style={({isActive})=>({color: isActive?"red":""})}>{link}</NavLink></span>
                );
            })}
        </div></div>
    );
}