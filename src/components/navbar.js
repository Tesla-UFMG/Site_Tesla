import React from 'react';

import './styles/navbar.css'

import { Link } from 'react-router-dom'

import image_logo_tesla from '../assets/img/logos/logo-fundo-preto.png'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            change: false,
            width: false,
        }
    
        this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
    }
    

    toggleMenuIcon(x) {
        this.setState(prevState => ({ change: !prevState.change }));
        this.setState(prevState => ({ width: !prevState.width }));
    };
    
    render() {
        return (
            <nav className="navbar navbar-expand-md">
                <Link className="navbar-brand" to="/">
                    <img src={image_logo_tesla} className="img-fluid logo-tesla" alt="Logo Tesla"></img>
                </Link>

                <div className="collapse navbar-collapse" id="navbarSite">

                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item mx-3">
                            <Link className="nav-link nav-link-p-style" to="/Historia">história</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle nav-link-p-style" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                protótipos
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/PrototiposNK319">NK319</Link>
                                <Link className="dropdown-item" to="/PrototiposNK218">NK218</Link>
                                <Link className="dropdown-item" to="/PrototiposKayran">Kayran</Link>
                            </div>
                        </li>

                        <li className="nav-item mx-3">
                            <Link className="nav-link nav-link-p-style" to="/Equipe">equipe</Link>
                        </li>

                        <li className="nav-item mx-3">
                            <Link className="nav-link nav-link-p-style" to="/Patrocinadores">parceiros</Link>
                        </li>
                    </ul>
                </div>

                <div id={this.state.change ? 'change' : 'noChange'} className="menuIcon" onClick={this.toggleMenuIcon}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div id={this.state.width ? 'mySidenavOpen' : 'mySidenav'} class="sidenav">
                    <Link to="/">História</Link>
                    <Link to="/">Prototipos</Link>
                    <Link to="/">Equipe</Link>
                    <Link to="/">Parceiros</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">A Competição</Link>
                    <Link to="/">Galeria</Link>
                    <Link to="/">Rollouts</Link>
                </div>
    
            </nav>
        );
    }
}

export default Header;