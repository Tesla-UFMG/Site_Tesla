import React from 'react';

import "../styles/imageCapa.css";

function ImageCapa(props) {
  return (
    <div id="img-capa">
      <img src={props.image} alt={props.imageDescription}/>
      <p className="legend">Fonte: {props.legend}</p>
    </div>
  );
}

export default ImageCapa;