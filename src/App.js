import Header from "./components/Header";
import Section from "./components/Section";
import Services,{Buttons} from "./components/Services";
import Footer from "./components/Footer";


function App() {

  return (
<>
  <Header/>
  <Section/>
  <Services/>
  <div className={"px-3 md:px-7 py-7 bg-white mt-24"}>

    <Buttons/>
    <hr className={"my-5 w-11/12 mx-auto"}/>
    <Footer/>

  </div>
</>
  );
}

export default App;
