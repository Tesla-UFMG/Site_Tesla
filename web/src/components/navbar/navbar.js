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
        <p className="option" onClick={() => history.push('/historia')}>história</p>
        <div className="dropdown" onMouseEnter={() => setDropdownHover(true)} onMouseLeave={() => setDropdownHover(false)}>
          <p className="option dropdown-toggle">protótipos</p>
          {dropdownHover && (
            <div className="dropdown-menu-itens">
              <p className="dropdown-item" onClick={() => history.push('/prototipos-NK319')}>NK319</p>
              <p className="dropdown-item" onClick={() => history.push('/prototipos-NK218')}>NK218</p>
              <p className="dropdown-item" onClick={() => history.push('/prototipos-kyran')}>Kayran</p>
            </div>
          )}
        </div>
        <p className="option" onClick={() => history.push('/equipe')}>equipe</p>
        <p className="option" onClick={() => history.push('/patrocinadores')}>parceiros</p>
        <p className="option" onClick={() => history.push('/feed-blog')}>blog</p>
      </div>

      <div id={sandwichClicked ? 'change' : 'noChange'} className={"menuIcon " + props.color + ' ' + (props.pageInicial ? 'inicio' : 'naoInicio')} onClick={() => setSandwichClicked(!sandwichClicked)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div id={sandwichClicked ? 'mySidenavOpen' : 'mySidenav'} className="sidenav">
        <Link to="/historia">História</Link>
        <Link to="/prototipos-NK319">Prototipos</Link>
        <Link to="/equipe">Equipe</Link>
        <Link to="/patrocinadores">Parceiros</Link>
        <Link to="/feed-blog">Blog</Link>
        <Link to="/">A Competição</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/rollouts">Rollouts</Link>
        <Link to="/loja">Loja</Link>
      </div>
    </nav>
  )
}

export default Navbar;