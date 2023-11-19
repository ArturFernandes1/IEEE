import React from "react"; 
import Navbar from "../NavBar";
import Carousel from "../Carousel";
import Local from "../Local";
import Sociedades from "../Sociedades";
import Dados from "../Dados";
import Afiliados from "../Afiliados";
import Apply from "../Apply";
import Contatar from "../Contatar"
import Footer from "../footer";

export default function Home(){ 
    return( 
        <div className="App"> 
            <Navbar/>
            <Carousel/>
            <Local/>
            <Sociedades/>
            <Dados/>
            <Afiliados/>
            <Apply/>
            <Contatar/>
            <Footer/>            
        </div>
    )

}