

export default function Footer(){
    const links = ["About","Research","Career","Health",
        "Advert","Fair housing guide"];


    return(
        <div className={"max-w-screen-lg mx-auto text-md flex flex-wrap justify-center gap-3"}>
            {links.map((link,id)=>{
                return(
                    <span key={id}><a href={"#"} className={"hover:underline"}>{link}</a></span>
                );
            })}
        </div>
    );
}