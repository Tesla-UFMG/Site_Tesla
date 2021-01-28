import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import './styles/navbar.css'

import image_logo_tesla from '../../assets/img/logos/logo-fundo-preto.png';
import logo_tesla_preto from '../../assets/img/logos/Sem senoide preta.svg';

function Navbar(props) {
  const history = useHistory();

  const [sandwichClicked, setSandwichClicked] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);

  return (
    <nav className="navbar-tesla">
      <img src={props.color === 'preto' ? logo_tesla_preto : image_logo_tesla} alt="Logo do Tesla UFMG" className={"logo-tesla " + props.color} onClick={() => history.push('/')} />
      
      <div id={props.display} className="options">
        <p className="option" onClick={() => history.push('/Historia')}>história</p>
        <div className="dropdown" onMouseEnter={() => setDropdownHover(true)} onMouseLeave={() => setDropdownHover(false)}>
          <p className="option dropdown-toggle">protótipos</p>
          {dropdownHover && (
            <div className="dropdown-menu-itens">
              <p className="dropdown-item" onClick={() => history.push('/PrototiposNK319')}>NK319</p>
              <p className="dropdown-item" onClick={() => history.push('/PrototiposNK218')}>NK218</p>
              <p className="dropdown-item" onClick={() => history.push('/PrototiposKyran')}>Kayran</p>
            </div>
          )}
        </div>
        <p className="option" onClick={() => history.push('/Equipe')}>equipe</p>
        <p className="option" onClick={() => history.push('/Patrocinadores')}>parceiros</p>
        <p className="option" onClick={() => history.push('/feed-blog')}>blog</p>
      </div>

      <div id={sandwichClicked ? 'change' : 'noChange'} className={"menuIcon " + props.color + ' ' + (props.pageInicial ? 'inicio' : 'naoInicio')} onClick={() => setSandwichClicked(!sandwichClicked)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div id={sandwichClicked ? 'mySidenavOpen' : 'mySidenav'} className="sidenav">
        <Link to="/Historia">História</Link>
        <Link to="/PrototiposNK319">Prototipos</Link>
        <Link to="/Equipe">Equipe</Link>
        <Link to="/Patrocinadores">Parceiros</Link>
        <Link to="/feed-blog">Blog</Link>
        <Link to="/">A Competição</Link>
        <Link to="/">Galeria</Link>
        <Link to="/Rollouts">Rollouts</Link>
        <Link to="/Loja">Loja</Link>
      </div>
    </nav>
  )
}

export default Navbar;