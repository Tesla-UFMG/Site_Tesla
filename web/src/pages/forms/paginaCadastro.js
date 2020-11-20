import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles/paginaCadastro.css";

import Forms from './components/forms';

function PaginaCadastro() {
  const history = useHistory();

  return (
    <Forms className="cadastro">
      <p className="title">Junte-se à comunidade!</p>
      <p className="text">Crie uma conta e obtenha acesso aos melhores artigos</p>

      <input type="text" placeholder="Nome"/>
      <input type="text" placeholder="Sobrenome"/>
      <input type="text" placeholder="E-mail"/>

      <div className="cadastrar-button" onClick={() => history.push("/cadastro-senha")}>CADASTRAR</div>

      <div className="go-login">
        <p>Já é membro?</p>
        <a href="/">Entrar</a>
      </div>
    </Forms>
  );
}

export default PaginaCadastro;