import './Local.css';
import img from "../Assets/Free Vector _ Internet communication.jpg";
import { CheckIcon} from '@chakra-ui/icons'

function Local() {
    return (
        <div id="about-area">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <h3 class="main-title">
                            Sobre a sociedade de APS do IEEE 
                            <hr></hr>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <img src={img} class="img-fluid" alt=""></img>
                    </div>
                    <div class="col-md-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet cursus libero. Praesent facilisis lobortis turpis id pharetra. Cras eu pretium purus. Mauris ac condimentum nisl, a sollicitudin felis. Donec scelerisque vitae mi at tincidunt. Donec faucibus posuere nibh feugiat hendrerit. Nunc facilisis est vel tortor consequat varius.</p>
                        <p>Fusce efficitur lacus vel fringilla aliquam. Nunc convallis sem non leo laoreet tempor. Morbi congue cursus lacus nec rhoncus. Nam id posuere purus. Quisque euismod, felis ac sollicitudin dignissim, felis elit suscipit risus, nec semper orci nisi sit amet justo. Morbi a justo vitae magna faucibus volutpat. Aliquam mauris diam, placerat et turpis ac, ultrices maximus augue. Nulla mauris tortor, tempor sit amet maximus eu, rhoncus sit amet turpis.</p>
                        
                        <ul id="about-list">
                            <li> Atividades da sociedade de APS do IEEE IFPB - Campus Campina Grande</li>
                            <li><CheckIcon color='blue.500'/> Lorem Ipsum</li>
                            <li><CheckIcon color='blue.500'/> Lorem Ipsum</li>
                            <li><CheckIcon color='blue.500'/> Lorem Ipsum</li>
                            <li><CheckIcon color='blue.500'/> Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Local;