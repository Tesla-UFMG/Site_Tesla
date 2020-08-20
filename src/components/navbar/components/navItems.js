import React from 'react';

import '../styles/navItems.css'

import { Link } from 'react-router-dom'

class NavItem extends React.Component {
    render() {
        return (
            <div id={this.props.idNavItem} className="collapse navbar-collapse" >
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
        );
    }
}

export default NavItem;