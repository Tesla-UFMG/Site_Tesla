import React from 'react';

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';
import Footer from '../../components/footer/footer';

import { withRouter } from 'react-router-dom'

import './styles/paginaSugestoes.css'

function PaginaSugestoes() {
    const [handleScroll] = useNavBar();
    
    var last_known_scroll_position = 0;
    var ticking = false;

    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                //handleScroll(last_known_scroll_position, false);
                ticking = false;
            });

            ticking = true;
        }
    });

    return (
        
        <div id="paginaSugestoes">
            <NavBar color={'preto'} display={'preto'} />

            <div id="tela">
                <div className="a">
                    <h1>INFORMAR</h1>
                    <h1 className="legenda">ERROS E SUGESTÕES</h1>
                    <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Seu nome:</label>
                        <input type="text" class="form-control" id="formGroupExampleInput"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Seu e-mail:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Link da página em questão:</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Mais detalhes sobre o erro/sugestão:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-dark">Enviar</button>
                </form>

                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>

            <Footer />

        </div>
    );
}

export default withRouter(PaginaSugestoes);