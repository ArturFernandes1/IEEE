import profile1 from "../Assets/profile1.jpg"
import profile2 from "../Assets/profile2.jpg"
import profile3 from "../Assets/profile3.jpg"
import profile4 from "../Assets/profile4.jpg"

function Afiliados(){

    return(
      <div id="team-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h3 class="main-title">Nosso time</h3>
              <hr></hr>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={profile1} class="card-img-top" alt="Imagem de Perfil 1"></img>
                <div class="card-body">
                  <h5 class="card-title">Jhon Doe</h5>
                  <p class="card-text">Software Developer</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={profile2} class="card-img-top" alt="Imagem de Perfil 2"></img>
                <div class="card-body">
                  <h5 class="card-title">Maria Mariana</h5>
                  <p class="card-text">SEO Consultant</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={profile3} class="card-img-top" alt="Imagem de Perfil 3"></img>
                <div class="card-body">
                  <h5 class="card-title">Paul Baker</h5>
                  <p class="card-text">Project Manager</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={profile4} class="card-img-top" alt="Imagem de Perfil 4"></img>
                <div class="card-body">
                  <h5 class="card-title">Karina Katarina</h5>
                  <p class="card-text">UX/UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Afiliados;