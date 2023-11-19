
import estudantes from "../Assets/estudantes.jpg"
import "../Components/ComponenteWie.css"



function ComponenteWie() {
    return (
       <div>
            <div className="conteudo">
                <div className="container1">
                    <h2 className="title">Sociedade WIE</h2>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio ac libero fermentum dapibus a a elit. Vivamus tristique, justo at bibendum feugiat, odio dolor dapibus massa, sed cursus quam neque nec elit. Phasellus at diam nec sapien luctus malesuada. Nulla facilisi. Integer malesuada ultrices massa, sed pellentesque turpis facilisis ac. Nullam bibendum lacinia dui, a tristique justo vehicula nec. Nulla facilisi. Vestibulum vel quam ut risus hendrerit pellentesque. Suspendisse convallis, justo sit amet ullamcorper tristique, odio justo aliquet augue, id cursus justo leo at urna. Sed tristique sollicitudin turpis, vel commodo ex. Aenean nec tortor lectus.</p>
        
                <div className="imagem">
                    <img src={estudantes} alt="Estudantes" />
                </div>

            
                </div>
                <div className="container2">
                    <h2>O Compromisso do WIE</h2>
                    <hr></hr>
                    <p><strong>Promover a diversidade: </strong>O WIE busca criar um ambiente inclusivo e diversificado na engenharia, reconhecendo que a diversidade de perspectivas e experiências é fundamental para a inovação e o progresso da engenharia.<br></br>
                    <strong>Incentivar jovens mulheres: </strong>O WIE trabalha para inspirar e orientar meninas e jovens mulheres a considerar carreiras na engenharia, fornecendo modelos e mentores que possam demonstrar que é possível ter sucesso na área.<br></br>
                    <strong> Oferecer suporte profissional: </strong>O WIE ajuda as mulheres engenheiras a desenvolver suas habilidades e avançar em suas carreiras por meio de redes, eventos, workshops e recursos educacionais.<br></br>
                    <strong>Construir comunidades: </strong> Grupos locais e capítulos do WIE muitas vezes promovem encontros, conferências e atividades para criar comunidades de apoio onde as mulheres engenheiras possam se conectar e compartilhar suas experiências.<br></br>
                    <strong>Advogar por mudanças: </strong> Além de apoiar as mulheres na engenharia, o WIE também se envolve em esforços para promover políticas e práticas que eliminem barreiras de gênero na indústria.</p>
                </div>
            </div>
       </div>
    
    );
}

export default ComponenteWie;