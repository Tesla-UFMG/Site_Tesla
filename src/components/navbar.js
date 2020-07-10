import React from 'react';

import './styles/navbar.css'

import { Link } from 'react-router-dom'

import image_logo_tesla from '../assets/img/logos/logo-fundo-preto.png'
import image_sandwich_icon from '../assets/icons/menu-sandwich.svg'

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-tesla">

                <Link className="navbar-brand" to="/">
                    <img className="logo-tesla" src={image_logo_tesla} alt="Fórmula Tesla Logo"/>
                </Link>
                <a className="nav-link navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </a>

                <div className="collapse navbar-collapse" id="navbarSite">

                    <ul className="navbar-nav mr-auto navbar-tesla-nav">

                        <li className="nav-item mx-3">
                            <Link className="nav-link nav-link-p-style" to="/Historia">história</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle nav-link-p-style" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                protótipos
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="/PrototiposNK319">NK319</Link>
                                <Link class="dropdown-item" to="/PrototiposNK218">NK218</Link>
                                <Link class="dropdown-item" to="/PrototiposKayran">Kayran</Link>
                            </div>
                        </li>

                        <li className="nav-item mx-3">
                            <Link className="nav-link nav-link-p-style" to="/Equipe">equipe</Link>
                        </li>

                        <li className="nav-item mx-3">
                            <a className="nav-link nav-link-p-style" href="#parceiros">parceiros</a>
                        </li>
                    </ul>
                </div> 

                <img src={image_sandwich_icon} alt="sandwich icon" id="sandwich-icon" className="ml-auto mr-3"></img> 
            </nav>
        );
    }
}

export default NavBar;