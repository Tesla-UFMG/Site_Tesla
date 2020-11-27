import React from 'react';

import "../styles/subtitle.css";

function Subtitle(props) {
  return (
    <p id={props.subtitle} className="subtitle">
      {props.number}. {props.subtitle}
    </p>
  );
}

export default Subtitle;