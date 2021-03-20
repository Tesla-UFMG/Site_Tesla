import React from 'react';

import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

import './styles/paginaSugestoes.css'

function PaginaSugestoes() {
    return (
        
        <div id="paginaSugestoes">
            <NavBar color={'preto'} display={'preto'} />

            <div id="tela-sugestoes">
                <h1>INFORMAR</h1>
                <h1 className="legenda">ERROS E SUGESTÕES</h1>
                <div className="line"></div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Seu nome:</label>
                        <input type="text" className="form-control" id="name" placeholder="Insira seu nome"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Seu e-mail:</label>
                        <input type="email" className="form-control" id="email" placeholder="Insira seu e-mail"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link da página em questão:</label>
                        <input type="text" className="form-control" id="link" placeholder="Insira a link da página"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="detalhes">Mais detalhes sobre o erro/sugestão:</label>
                        <textarea className="form-control" id="detalhes" rows="3" placeholder="Detalhe o erro ou sua sugestão"></textarea>
                    </div>
                    <button type="button" className="btn btn-dark">Enviar</button>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default PaginaSugestoes;