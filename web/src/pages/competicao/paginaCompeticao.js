import React from 'react';

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';
import Footer from '../../components/footer/footer';

import image_scroll_icon from '../../assets/icons/scroll-icon.svg'
import oficina_noite from '../../assets/img/fotos/historia/oficina-meia-noite.jpg'

import { withRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import './styles/paginaCompeticao.css'

function PaginaCompeticao() {
    const [{ color, display }, handleScroll] = useNavBar();
    
    var last_known_scroll_position = 0;
    var ticking = false;

    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll(last_known_scroll_position, false);
                ticking = false;
            });

            ticking = true;
        }
    });

    return (
        <div id="paginaCompeticao">
            <NavBar color={color} display={display} />

            <div id="inicio" className="container-fluid px-0">

                <div className="content">
                    <h1 className="section-title">A COMPETIÇÃO</h1>
                </div>

                <HashLink to="/#page1-prototipos">
                    <img src={image_scroll_icon} alt="scroll icon" className="scroll-bot-icon"></img>
                </HashLink>
            </div>


            <div id="conteudo" className="container-fluid px-0">

                <div className="row row-cols-1 content">
                    
                    <div className="text com-img">
                        <div className="col">
                            <img src={oficina_noite} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>
                        </div>
                        <div className="col">
                        <h1 className="section-title">O que é?</h1>
                        <p>
                            A competição.........
                        </p>
                        <p>
                            Criada em 2004.......
                        </p>
                        </div>
                    </div>

                </div>

            </div>

            <div id="conteudo" className="container-fluid px-0">

                <div className="row row-cols-1 content">
                    
                    <div className="text">
                        <div className="col">
                            <p>
                                Criada em 2004.......
                            </p>
                        </div>
                        <div className="col">
                            <h1 className="section-title">O que é?</h1>
                            <p>
                                A competição.........
                            </p>
                        </div>
                    
                    </div>

                </div>

            <div id="conteudo" className="container-fluid px-0">
                    
                    <div className="text-left">
                        <h1 className="section-title">O que é?</h1>
                        <p>
                            A competição.........
                        </p>
                        <p>
                            Criada em 2004.......
                        </p>

                </div>

            </div>
            </div>

            

            <br></br>

            <Footer />

        </div>
    );
}

export default withRouter(PaginaCompeticao);