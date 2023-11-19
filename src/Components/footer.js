import logo from "../Assets/ieee-logo.png";

function Footer() {
    return (
        <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary " data-bs-theme="dark">
            <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div class="row">
                    <div class="col-lg-3 mb-3">
                        <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                            <img id="logo" src={logo}></img>
                        </a>
                        <ul class="list-unstyled small">
                            <li class="mb-2">Projetado e desenvolvido com carinho pelo Ramo Estudantil do Insituto Federal da Paraíba.</li>
                            <li class="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                            <li class="mb-2">Versão 1.0</li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="https://www.ifpb.edu.br/">Site Oficial IFPB</a></li>
                            <li class="mb-2"><a href="https://estudante.ifpb.edu.br/">Portal do Estudante</a></li>
                            <li class="mb-2"><a href="https://matrizdinamica-ifpb.netlify.app/course/1">Matriz de Engenharia</a></li>
                            <li class="mb-2"><a href="https://horarios.ifpb.edu.br/campina/">Horários IFPB</a></li>
                            <li class="mb-2"><a href="https://www.ieee.org/">Site Oficial IEEE</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Ferramentas</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="https://react.dev/">React</a></li>
                            <li class="mb-2"><a href="https://getbootstrap.com/">Bootstrap</a></li>
                            <li class="mb-2"><a href="https://chakra-ui.com/">ChakraUI</a></li>
                            <li class="mb-2"><a href="https://spring.io/">Spring Boot</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Desenvolvedores</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="https://github.com/heitorbrunini" target="_blank" rel="noopener">Heitor Brunini</a></li>
                            <li class="mb-2"><a href="https://github.com/EulerSobral" target="_blank" rel="noopener">Euler Sobral</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Redes Sociais</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="https://www.instagram.com/ieeeifpbcg/" target="_blank" rel="noopener">Instagram</a></li>
                            <li class="mb-2"><a href="https://www.facebook.com/ieeeifpbcg" target="_blank" rel="noopener">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
