import estudantes from "../Assets/estudantes.jpg"
import estudantes2 from "../Assets/estudantes2.jpg"
import estudantes3 from "../Assets/estudantes3.jpg"
import "./Carousel.css";
function Carousel() {
    return (
        <>
            <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img src={estudantes} class="d-block w-100" alt="..."></img>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Faça parte do ramo.</h1>
                                <p class="opacity-75">Clique em saiba mais para se volutariar para as atividades do Ramo Estudantil.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Saiba Mais</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item active carousel-item-start">
                        <img src={estudantes2} class="d-block w-100" alt="..."></img>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Eventos do IEEE.</h1>
                                <p class="opacity-75">Acompanhe os eventos que estão programados para serem feitos pelo ramo.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Saiba Mais</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-item-next carousel-item-start">
                        <img src={estudantes3} class="d-block w-100" alt="..."></img>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Cursos e Materiais</h1>
                                <p class="opacity-75">Experimente os cursos e materiais disponibilizados pelo IEEE.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Saiba Mais</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;