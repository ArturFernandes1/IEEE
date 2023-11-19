import React from "react"; 
import Navbar from "../NavBar";  
import ContentAps from "../ContentAPS" 
import ComponenteEvento from "../ComponenteEvento";
import ProjetosAps from "../ProjetosAps";
import Afiliados from "../Afiliados";
import Contatar from "../Contatar";
import Footer from "../footer";

export default function APS(){ 
    return( 
        <div className="app"> 
            <Navbar/>  
            <ComponenteEvento/>
            <ContentAps/>
            <ProjetosAps/>
            <Afiliados/> 
            <Contatar/> 
            <Footer/>
        </div> 
    )
}