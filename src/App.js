import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,popular,Drama,Romance,Comedy} from './urls'
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url = {popular} title='Popular On Netflix'/>
     <RowPost url = {Romance} title='Romance' isSmall/>
     <RowPost url = {action} title='Action' isSmall/>
     <RowPost url = {Drama} title='Horror' isSmall/>
     <RowPost url = {Comedy} title='Comedy' isSmall/>
     {/* <Footer/> */}

    </div>
  );
}

export default App;
