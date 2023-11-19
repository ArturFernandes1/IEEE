import './Local.css';
import ifpb from "../Assets/dsc_0153.jpg";
import { CheckIcon} from '@chakra-ui/icons'

function Local() {
    return (
        <div id="about-area">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <h3 class="main-title">
                            Sobre o IEEE
                            <hr></hr>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <img src={ifpb} class="img-fluid" alt=""></img>
                    </div>
                    <div class="col-md-6">
                        <h3 class="about-title">
                            Uma Organização Internacional
                        </h3>
                        <p>Instituto de Engenheiros Eletricistas e Eletrônicos – IEEE (pronunciado “I-três-E”), uma associação fundada em 1963 
                            nos Estados Unidos e dedicada ao avanço da inovação tecnológica 
                            e da excelência em benefício da humanidade.</p>
                        <p>Um dos objetivos do Ramo IEEE é contribuir para o desenvolvimento acadêmico e profissional dos discentes do IFPB, 
                            por meio de projetos de pesquisa e extensão orientados à eletricidade, 
                            robótica e computação, além de incentivar o protagonismo estudantil.</p>
                        
                        <ul id="about-list">
                            <li> Atividades do IEEE IFPB - Campus Campina Grande</li>
                            <li><CheckIcon color='blue.500'/> Inovações Tecnológicas</li>
                            <li><CheckIcon color='blue.500'/> Cursos e Eventos</li>
                            <li><CheckIcon color='blue.500'/> Projetos Internos</li>
                            <li><CheckIcon color='blue.500'/> Monitorias</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Local;