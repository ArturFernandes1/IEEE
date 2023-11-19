import "./Contatar.css"

function Contatar() {

    return (
        <>
            <div id="news-area">
                <div class="container">
                    <div class="col-md-12">
                        <h3 class="main-title">Fique por dentro das novidades</h3>
                    <hr></hr>
                    </div>
                    <p>Assine nossa lista de e-mails, e receba nossos conteúdos sobre desenvolvimento de software</p>
                    
                    <form>
                        <input type="text" class="form-control" id="email-input" name="email" placeholder="Seu melhor e-mail"></input>
                        <input type="submit" id="news-btn" value="Inscrever"></input>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Contatar;