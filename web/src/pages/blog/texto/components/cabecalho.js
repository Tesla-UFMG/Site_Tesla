import React from 'react';

import "../styles/cabecalho.css";

function Cabecalho(props) {
  return (
    <div id="cabecalho">
      <p className="code">{props.code}</p>
      <p className="title">{props.title}</p>
      
      <p className="date-autor">{props.date} por {props.author}</p>
      <p className="read-time">Tempo de leitura: {props.readTime}</p>
    </div>
  );
}

export default Cabecalho;