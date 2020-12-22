import React from 'react';

import "../styles/produto.css";

function Produto(props) {
  return (
    <div className="produto">
      <div>
        <img src={props.image} alt="Produto"/>
        <div className="plus-icon">
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
      </div>

      {props.desconto
        ? <div>
            <p className="name">{props.name}</p>

            <p className="old-value"><s>{props.oldValue}</s></p>
            <div>
              <p className="valor">{props.value}</p>
              <p className="desconto">{props.percentage}</p>
            </div>
          </div>
        : <div>
            <p className="name">{props.name}</p>

            <p className="valor">{props.value}</p>
          </div>
      }
    </div>
  )
}

export default Produto;