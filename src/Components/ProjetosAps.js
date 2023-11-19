import './ProjetosAps.css'  
import cincoG from "../Assets/5g.jpg" 
import seguranca from "../Assets/seguranca_informacao.jpg"
import web3 from "../Assets/web3.jpg" 
import infra from "../Assets/infraestrutura_redes.jpg"

export default function ProjetosAps(){ 
    return( 
        <div className='container'> 
            <div className='row'> 
                <div class="col-12">
                    <h3 class="main-title">
                        Projetos sendo pesquisados atualmente
                        <hr></hr>
                    </h3> 
                </div>  
                
                    <div className='col-md-3 col-3'> 
                        <div> 
                            <img className='img-projeto img-border' src={cincoG}/> 
                            <p className='p-projetosAps'>5G</p>
                        </div>
                    </div>  
                    <div className='col-md-3 col-3'> 
                        <div> 
                            <img className='img-projeto' src={web3}/> 
                            <p className='p-projetosAps p-projeto-small'>web 3.0</p>
                        </div>
                    </div>  
                    <div className='col-md-3 col-3'> 
                        <div> 
                            <img className='img-projeto img-border' src={seguranca}/> 
                            <p className='p-projetosAps'>segurança da informação</p>
                        </div>
                    </div>  
                    <div className='col-md-3 col-3'> 
                        <div> 
                            <img className='img-projeto img-border' src={infra}/> 
                            <p className='p-projetosAps '>infraestrutura</p>
                        </div>
                    </div>  
                
            </div> 
        </div>
    )
}