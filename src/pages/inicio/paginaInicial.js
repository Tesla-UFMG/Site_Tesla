import React from 'react';

import './paginaInicial.css'

import { withRouter, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import image_lateral_scroll_circle_preenchida from '../../assets/icons/bolinha-preenchida.svg'
import image_lateral_scroll_circle_vazia from '../../assets/icons/bolinha-vazia.svg'
import image_scroll_icon from '../../assets/icons/scroll-icon.svg'

class PaginaInicial extends React.Component {
    render() {
        return (
            <div>
                <div id="page1-historia" className="container-fluid px-0">
                    <div className="col-6 content">
                        <h1 className="section-title">Bem-Vindos!</h1>
                        <p className="section-paragraph">Já conhece nossa equipe?</p>
                        <Link to="/Historia" className="section-button">Conte-me mais</Link>
                    </div>

                    <div className="lateral-scroll-menu">
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-historia">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_preenchida} alt="lateral scroll circle preenchida"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-prototipos">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-equipe">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-parceiros">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                    </div>

                    <HashLink to="/#page1-prototipos">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-bot-icon"></img>
                    </HashLink>
                </div>

                <div id="page1-prototipos" className="container-fluid px-0">
                    <div className="row content">
                        <div className="col">
                            <h1 className="section-title">AS MÁQUINAS</h1>
                        </div>
                        <div className="col">
                            <p className="section-paragraph">Explore nossos protótipos e siaba a <br></br> história por tras de cada um deles!</p>
                            <Link to="/PrototiposNK319" className="section-button">Conheça</Link>
                        </div>
                    </div>

                    <div className="lateral-scroll-menu">
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-historia">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-prototipos">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_preenchida} alt="lateral scroll circle preenchida"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-equipe">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-parceiros">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                    </div>

                    <HashLink to="/#page1-historia">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-top-icon"></img>
                    </HashLink>
                    <HashLink to="/#page1-equipe">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-bot-icon"></img>
                    </HashLink>
                </div>

                <div id="page1-equipe" className="container-fluid px-0">
                    <div className="col-6 content">
                        <h1 className="section-title">A EQUIPE</h1>
                        <p className="section-paragraph">Conheça as mentes <br></br> por trás desse projeto</p>
                        <Link to="/" className="section-button">Saiba mais</Link>
                    </div>

                    <div className="lateral-scroll-menu">
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-historia">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-prototipos">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-equipe">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_preenchida} alt="lateral scroll circle preenchida"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-parceiros">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                    </div>

                    <HashLink to="/#page1-prototipos">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-top-icon"></img>
                    </HashLink>
                    <HashLink to="/#page1-parceiros">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-bot-icon"></img>
                    </HashLink>
                </div>

                <div id="page1-parceiros" className="container-fluid px-0">
                    <div className="col-6 content">
                        <h1 className="section-title">PARCEIROS</h1>
                        <p className="section-paragraph">Veja quais são as empresas que <br></br> ajudam a equipe a alcançar os <br></br> ótimos resultados</p>
                        <div className="buttons">
                            <Link to="/" className="section-button">Patrocinadores</Link>
                            <Link to="/" className="section-button b2">Quero ajudar</Link>
                        </div>
                    </div>

                    <div className="lateral-scroll-menu">
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-historia">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-prototipos">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-equipe">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-parceiros">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_preenchida} alt="lateral scroll circle preenchida"></img>
                        </HashLink>
                    </div>

                    <HashLink to="/#page1-equipe">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-top-icon"></img>
                    </HashLink>
                </div>
            </div>
        );
    }
}

export default withRouter(PaginaInicial);