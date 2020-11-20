import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles/paginaSenha.css";

import Forms from './components/forms';

function PaginaSenha() {
  const history = useHistory();

  return (
    <Forms className="cadastro-senha">
      <p className="title">Vamos proteger os seus dados!</p>
      <p className="text">Crie uma senha</p>

      <input type="password" placeholder="Senha"/>
      <input type="password" placeholder="Repetir senha"/>

      <div className="continuar-button" onClick={() => history.push("/fim-cadastro")}>CONTINUAR</div>

      <p className="voltar" onClick={() => history.push("/cadastrar")}>Voltar</p>
    </Forms>
  );
}

export default PaginaSenha;