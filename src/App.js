import Section from "./components/Section";
import Services,{Buttons} from "./components/Services";
import {Helmet} from "react-helmet";
import {useEffect} from "react";


function App() {

  return (
<>
{/*  <Helmet>
    <title>React Training</title>
  </Helmet>*/}
  <Section/>
  <Services/>
  <div className={"px-3 md:px-7 py-7 bg-white mt-24"}>
    <Buttons/>
    <hr className={"my-5 w-11/12 mx-auto"}/>
  </div>
</>
  );
}

export default App;
