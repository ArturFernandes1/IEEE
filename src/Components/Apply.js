import "./Apply.css";
import ifpb from "../Assets/dsc_0153.jpg";

function Apply() {

    return (


        <div class="card text-bg-dark" id="card-content">

            <div class="container">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={ifpb} class="img-fluid ifpb" alt=""></img>
                        </div>
                        <div class="col-md-6">
                            <div class="card bg-transparent" id="card-apply" >
                                <div class="card-body">
                                    
                                    <h6 class="my-text card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p class="my-text card-text">Some quick example text to build on the card title and make up 
                                    the bulk of the card's content.</p>
                                    <button type="button" class="btn btn-outline-info btn-lg">Juntar-se</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    );

}

export default Apply;