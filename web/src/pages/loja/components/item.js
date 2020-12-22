import React from 'react';

import "../styles/item.css";

function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="Produto"/>

      <div>
        <p className="name">{props.name}</p>

        <div>
          <div>
            <p className="tamanho">Tam.: {props.tamanho}</p>
            <p className="quantidade">Qtd.: {props.quantidade}</p>
          </div>
          
          <p className="value">R$ {props.valor}</p>
        </div>
      </div>
    </div>
  )
}

export default Item;