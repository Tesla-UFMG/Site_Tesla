import React from 'react';

import "../styles/topicos.css";

function Topicos(props) {
  return (
    <div id="topicos" className="topicos">
      {props.topicos.map((topico, index) => {
        return <a key={index} href={"#" + topico}>{index + 1}. {topico}</a>
      }) }
    </div>
  );
}

export default Topicos;