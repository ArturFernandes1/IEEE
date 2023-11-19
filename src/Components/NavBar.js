import React from "react"; 
import { Link } from "react-router-dom";
import logo from "../Assets/ieee-logo.png";
import "./NavBar.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary  border-bottom border-bottom-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img id="logo" src={logo}></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/ramo">O Ramo</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/eventos">Eventos</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sociedades
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/socieadadeComp">Sociedade de Computação</Link></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><Link class="dropdown-item" to="/WIE">WIE</Link></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><Link class="dropdown-item" to="/socieadadeComp">COMSOC</Link></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><Link class="dropdown-item" to="/aps">APS</Link></li>

                            </ul>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        IEEE - IFPB Campus Campina Grande
                    </span>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
