import React from 'react';

import './styles/navbar.css'

import { Link } from 'react-router-dom'

import NavItem from './components/navItems'

import image_logo_tesla from '../../assets/img/logos/logo-fundo-preto.png'

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

                <NavItem />

                <div id={this.state.change ? 'change' : 'noChange'} className="menuIcon" onClick={this.toggleMenuIcon}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div id={this.state.width ? 'mySidenavOpen' : 'mySidenav'} class="sidenav">
                    <Link to="/Historia">História</Link>
                    <Link to="/PrototiposNK319">Prototipos</Link>
                    <Link to="/Equipe">Equipe</Link>
                    <Link to="/Patrocinadores">Parceiros</Link>
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