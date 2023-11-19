import React from "react"; 
import Navbar from "../NavBar";
import ComponenteEvento from "../ComponenteEvento";
import CardEvento from "../CardEvento";  
import CardCursoEvento from "../CardCursoEvento"; 
import Footer from "../footer";
import imgCard from "../../Assets/upsb_IEEE 1.png" 
import imgCurso1 from "../../Assets/La inteligencia Artificial (IA) en la moda »【Blogdemoda_es】 1.png"
import imgCurso2 from "../../Assets/Photo by alerkiv on Unsplash 1.png" 
import imgCurso3 from "../../Assets/python-decubra-quais-sao-as-suas-funcoes-na-programacao 1.png"


export default function Eventos(){ 
    return( 
        <div className="App"> 
            <Navbar/> 
            <ComponenteEvento/>
            <CardEvento img={imgCard}/> 
            <CardCursoEvento img1={imgCurso1} img2={imgCurso2} img3={imgCurso3}/> 
            <Footer/>
        </div>
    )
}