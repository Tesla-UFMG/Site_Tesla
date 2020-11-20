import React, { useState } from 'react';

import '../styles/navItems.css'

import { Link } from 'react-router-dom'

function NavItem(props) {
    const [dropdownClicked, setDropdownClicked] = useState(false);

    return (
        <div id={props.idNavItem} className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">

                <li className="nav-item mx-3">
                    <Link className="nav-link nav-link-p-style" to="/Historia">história</Link>
                </li>

                <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle nav-link-p-style" onClick={() => setDropdownClicked(!dropdownClicked)}>
                        protótipos
                    </p>
                    {dropdownClicked && (
                        <div className="dropdown-menu-itens">
                            <Link className="dropdown-item" to="/PrototiposNK319">NK319</Link>
                            <Link className="dropdown-item" to="/PrototiposNK218">NK218</Link>
                            <Link className="dropdown-item" to="/PrototiposKayran">Kayran</Link>
                        </div>
                    )}
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

export default NavItem;