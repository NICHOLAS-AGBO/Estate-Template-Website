import {Helmet} from "react-helmet";
import {useCallback, useEffect, useState} from "react";

export default function API(){
    const [country,setCountry] = useState({result: [], limit: 0, max: 0});
    const [index,setIndex] = useState(10);

const url = "/countries.json";

const getCountry = (i)=>{
    fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setCountry({result: data, limit: i, max: data.length})
        }).catch(console.error);
}



const getResults = useCallback(()=>getCountry(index),[index]);


    return(
        <div className={"h-screen pt-5"}>
            <Helmet>
                <title>API | Using unsplash API</title>
            </Helmet>

            <h1 className={"text-7xl text-center font-bold"}>API Training</h1>
            <div className={"flex flex-col gap-y-3 items-center my-5"}>
                <b>LIMIT: {index}</b>
                <br/>
                <button className={"bg-green-700 text-white px-4 py-2"} onClick={()=>{
                    getResults();
                }}>Get API</button>
                <div>
                    <button disabled={index===country.max} className={"disabled:bg-gray-300 bg-red-500 text-white px-4 py-2 mr-3"}
                            onClick={()=>{
                                (index<(country.max-10))?
                                    setIndex(prevState => prevState+10)
                                    :
                                    setIndex(index);
                            }}>Add limit</button>

                    <button disabled={index===10} className={"disabled:bg-gray-300 bg-red-500 text-white px-4 py-2"}
                            onClick={()=>{
                                (index>=20)?
                                    setIndex(prevState => prevState-10)
                                    :
                                    setIndex(index);
                            }}
                    >Subtract limit</button>

                </div>
            </div>

            {
               (country.result!==null)&&
                country.result.map((c,i)=>{
                    if (i<country.limit){
                        return (
                            <div key={i} className={"flex gap-3 my-3"}>
                                {i+1}.<img src={c.flag} alt={c.name} width={30}/>
                                <b>{c.name}- {c.alpha2Code}</b>
                            </div>
                        )}
                })
            }
        </div>
    );
}