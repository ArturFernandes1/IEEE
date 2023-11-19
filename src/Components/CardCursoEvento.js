import './CardCursoEvento.css' 

export default function CardCursoEvento(props){ 
    return( 
        <div className='container-CardCursoEvento container'> 
            <div className='row'> 
                <div className='cardCurso'> 
                    <img src={props.img1} className='img-CardCurso'/>  
                    <div  className='text-CardCurso'>
                        <p className='title-cardCurso'>Curso de IA</p> 
                        <p className='subtitle-cardCurso'>Setembro de 2023</p>
                        <p className='word-cardCurso'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscin. Integer quis ligula neque. Em dolor sit amet, consectetur adipiscin. Integer quis ligula neque. Etiam rutrum massa at nulla molestie, a tristique
                        </p> 
                        <a href='#' className='btn col-4 btn-primary'>Ver mais</a>
                    </div>
                </div> 
                <div className='cardCurso'> 
                    <img src={props.img2} className='img-CardCurso'/>  
                    <div  className='text-CardCurso'>
                        <p className='title-cardCurso'>Curso de IA</p> 
                        <p className='subtitle-cardCurso'>Setembro de 2023</p>
                        <p className='word-cardCurso'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscin. Integer quis ligula neque. Em dolor sit amet, consectetur adipiscin. Integer quis ligula neque. Etiam rutrum massa at nulla molestie, a tristique
                        </p> 
                        <a href='#' className='btn col-4 btn-primary'>Ver mais</a>
                    </div>
                </div> 
                <div className='cardCurso'> 
                    <img src={props.img3} className='img-CardCurso'/>  
                    <div  className='text-CardCurso'>
                        <p className='title-cardCurso'>Curso de IA</p> 
                        <p className='subtitle-cardCurso'>Setembro de 2023</p>
                        <p className='word-cardCurso'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscin. Integer quis ligula neque. Em dolor sit amet, consectetur adipiscin. Integer quis ligula neque. Etiam rutrum massa at nulla molestie, a tristique
                        </p> 
                        <a href='#' className='btn col-4 btn-primary'>Ver mais</a>
                    </div>
                </div> 
            </div>
        </div>
    )
}