import React from 'react';

import "../styles/image.css";

function FullImage(props) {
  return (
    <div id="image">
      <img id="image" src={props.image} alt={props.imageDescription}/>
      <p className="legend">Fonte: {props.legend}</p>
    </div>
  );
}

export default FullImage;