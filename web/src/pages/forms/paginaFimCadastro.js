import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles/paginaFimCadastro.css";

import Forms from './components/forms';

function FimCadastro() {
  const history = useHistory();

  return (
    <Forms className="fim-cadastro">
      <p className="title">Queremos te conhecer melhor...</p>
      <p className="text">Complete seu cadastro para desfrutar de todos os recursos do nosso blog!</p>

      <div className="finalizar-button" onClick={() => history.push('/')}>FINALIZAR CADASTRO</div>

      <div className="voltar-button" onClick={() => history.push('/')}>VOLTAR AO SITE</div>
    </Forms>
  );
}

export default FimCadastro;