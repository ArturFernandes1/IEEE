import React from "react"; 
import Navbar from "../NavBar";
import ComponenteWie from "../ComponenteWie";
import Footer from "../footer";



export default function WIE(){ 
    return( 
        <div className="App"> 
            <Navbar/>
            <ComponenteWie/>
            <Footer/>
              

        </div>
    )
}