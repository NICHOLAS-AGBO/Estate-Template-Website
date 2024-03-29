import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/output.css';
import {BrowserRouter as Router, Outlet, Route, Routes} from "react-router-dom";
import About from "./routes/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FairHousing from "./routes/FairHousing";
import NotFound from "./routes/NotFound";
import API from "./routes/API";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Header/>
          <Routes>
              <Route path={"/"} element={<App/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/fair-housing-guide"} element={<FairHousing/>}/>
              <Route path={"/api/"} element={<API/>} caseSensitive/>
              <Route path={"*"} element={<NotFound/>}/>
          </Routes>
          <Outlet/>
          <Footer/>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
