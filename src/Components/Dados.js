import "./Dados.css"  
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function Dados() {
    return (
        <div id="data-area">
            <div class="container">
                <div class="row">
                    <div className="col-md-3 text-center">
                        <div>
                            <CircularProgress
                                isIndeterminate
                                color='blue.400'
                                thickness='4px'
                                value={30}
                                size='200px'
                            >
                                <CircularProgressLabel color='blue.200'>+1.100</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                        <p className="mt-2">Ramos estudantis</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <div>
                            <CircularProgress
                                isIndeterminate
                                color='blue.400'
                                thickness='4px'
                                value={30}
                                size='200px'
                            >
                                <CircularProgressLabel color='blue.200'>+400 K</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                        <p className="mt-2">Membros</p>
                    </div> <div className="col-md-3 text-center">
                        <div>
                            <CircularProgress
                                isIndeterminate
                                color='blue.400'
                                thickness='4px'
                                value={30}
                                size='200px'
                            >
                                <CircularProgressLabel color='blue.200'>21</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                        <p className="mt-2">Membros no IFPB</p>
                    </div> <div className="col-md-3 text-center">
                        <div>
                            <CircularProgress
                                isIndeterminate
                                color='blue.400'
                                thickness='4px'
                                value={30}
                                size='200px'
                            >
                                <CircularProgressLabel color='blue.200'>+800 K</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                        <p className="mt-2">Cafézinhos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dados;