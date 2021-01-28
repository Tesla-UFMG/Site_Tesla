import React, { useState } from 'react';

import './paginaInicial.css'

import NavBar from '../../components/navbar/navbar';
import FullPageScroll from '../../components/fullPageScroll/fullPageScroll';
import Footer from '../../components/footer/footer'

import { withRouter, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import image_lateral_scroll_circle_preenchida from '../../assets/icons/bolinha-preenchida.svg'
import image_lateral_scroll_circle_vazia from '../../assets/icons/bolinha-vazia.svg'
import image_scroll_icon from '../../assets/icons/scroll-icon.svg'
import image_scroll_icon_black from '../../assets/icons/scroll-icon-black.svg'

function PaginaInicial() {
    const [color, setColor] = useState('')
    const [display, setDisplay] = useState('')

    var windowHeight = window.innerHeight;

    function handleScroll(event) {
        var scroll_position = event.target.scrollTop;
        if (scroll_position < (windowHeight*3) - 50) {
            setColor('')
            setDisplay('')
        } else if (scroll_position >= (windowHeight*3) - 50 && scroll_position < (windowHeight*4) -50) {
            setColor('preto')
            setDisplay('preto')
        } else if (scroll_position >= (windowHeight*4) - 50) {
            setColor('')
            setDisplay('')
        }
    }

    return (
        <div id="page1">
            <NavBar pageInicial={true} color={color} display={display}/>

            <FullPageScroll onScroll={handleScroll}>
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
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-blog">
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
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-blog">
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
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-blog">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-parceiros">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                    </div>

                    <HashLink to="/#page1-prototipos">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-top-icon"></img>
                    </HashLink>
                    <HashLink to="/#page1-blog">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-bot-icon"></img>
                    </HashLink>
                </div>

                <div id="page1-blog" className="container-fluid px-0">
                    <div className="content">
                        <div className="top-row">
                            <h1 className="section-title">BLOG</h1>
                            <p className="section-paragraph">Veja as publicações mais recentes no mundo da mobilidade elétrica</p>
                            <Link to="/" className="section-button">Ver mais</Link>
                        </div>
                        
                        <div className="cards">
                            <div className="card">
                                <div className="img"></div>
                                <div>
                                    <p className="title">A História do carro elétrico</p>
                                    <p className="code">#CURIOS-01</p>
                                    <p className="read-time">Tempo de Leitura: 15 minutos</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img"></div>
                                <div>
                                    <p className="title">Introdução à aerodinamica veicular</p>
                                    <p className="code">#AERO-01</p>
                                    <p className="read-time">Tempo de Leitura: 15 minutos</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img"></div>
                                <div>
                                    <p className="title">História do carro elétrico</p>
                                    <p className="code">#EBASICS-02</p>
                                    <p className="read-time">Tempo de Leitura: 15 minutos</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img"></div>
                                <div>
                                    <p className="title">História do carro elétrico</p>
                                    <p className="code">#AERO-03</p>
                                    <p className="read-time">Tempo de Leitura: 15 minutos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <HashLink to="/#page1-equipe">
                        <img src={image_scroll_icon_black} alt="scroll icon" className="scroll-top-icon"></img>
                    </HashLink>
                    <HashLink to="/#page1-parceiros">
                        <img src={image_scroll_icon_black} alt="scroll icon" className="scroll-bot-icon"></img>
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
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-blog">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_vazia} alt="lateral scroll circle vazia"></img>
                        </HashLink>
                        <HashLink className="lateral-scroll-menu-item" to="/#page1-parceiros">
                            <img className="lateral-scroll-circle" src={image_lateral_scroll_circle_preenchida} alt="lateral scroll circle preenchida"></img>
                        </HashLink>
                    </div>

                    <HashLink to="/#page1-blog">
                        <img src={image_scroll_icon} alt="scroll icon" className="scroll-top-icon"></img>
                    </HashLink>
                </div>

                <div className="footer-div">
                    <Footer />
                </div>
            </FullPageScroll>
        </div>
    );
}

export default withRouter(PaginaInicial);