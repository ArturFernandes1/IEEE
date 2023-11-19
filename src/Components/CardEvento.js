import './CardEvento.css' 


export default function CardEvento(props){ 
    return( 
        <div className="content-cardEvento container"> 
            <div className="row">
                 <div className="card col-6 align-self-start">  
                    <h4 className="title-card"> 
                    IEEE Pre-University fará apresentação no Congresso de Seções de 2023 da TryEngineering
                    </h4> 
                    <p className='data-info'>ORGANIZAÇÃO • 05 MAY 2023</p>
                    <img className='img-card' src={props.img}/>   
                    <p className='text-cardEvento'> 
                    Marie Kondo é conhecida por fazer mágica quando se trata de organização. Em seu livro A Mágica da Arrumação ela passa alguns  ensinamentos para que os leitores adquiram práticas para uma vida mais organizada
                    </p> 
                    <a href='#' className='btn col-4 btn-primary'>Ver mais</a>
                 </div> 
                 <div className="card col-6 align-self-end">  
                 <h4 className="title-card"> 
                    IEEE Pre-University fará apresentação no Congresso de Seções de 2023 da TryEngineering
                    </h4> 
                    <p className='data-info'>ORGANIZAÇÃO • 05 MAY 2023</p>
                    <img className='img-card' src={props.img}/>
                    <p className='text-cardEvento'> 
                    Marie Kondo é conhecida por fazer mágica quando se trata de organização. Em seu livro A Mágica da Arrumação ela passa alguns  ensinamentos para que os leitores adquiram práticas para uma vida mais organizada
                    </p> 
                    <a href='#' className='btn col-4 btn-primary'>Ver mais</a>
                 </div> 
            </div>
        </div>
    )
}