import {Helmet} from "react-helmet";
import {useEffect} from "react";

export default function About(){

useEffect(()=>{
    const body = document.body;
    body.style.backgroundColor = "#fff"
});

    return(
        <>
            <Helmet>
                <title>About us</title>
            </Helmet>

<div className={"max-w-screen-md mx-auto py-14 px-4"}>
    <h1 className={"mb-14 text-center font-bold text-2xl font-serif"}>Zillow</h1>
    <p className={"mx-auto text-md"}>
        Zillow Group is reimagining real estate to make it easier to unlock life’s next chapter.
        <br/>
        <br/>
        As the most-visited real estate website in the United States, Zillow and its affiliates offer customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service. Zillow Home Loans, our affiliate lender, provides our customers with an easy option to get pre-approved and secure financing for their next home purchase.
        <br/>
        <br/>
        Zillow Group’s brands, affiliates and subsidiaries include Zillow, Zillow Premier Agent, Zillow Home Loans, Zillow Closing Services, Zillow Homes, Inc. Trulia, Out East, StreetEasy, HotPads, and ShowingTime.
        <br/>
        <br/>
        Visit our <a href={"#"} className={"underline text-primary"}>corporate site</a> and our <a href={"#"} className={"underline text-primary"}>media room</a> .
    </p>
</div>







        </>
    );
}