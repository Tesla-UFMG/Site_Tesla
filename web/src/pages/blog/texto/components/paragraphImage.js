import React from 'react';

import "../styles/paragraphImage.css";

import Paragraph from './paragraph';

function ParagraphImage(props) {
  return (
    <div id="paragraph-with-image">
      <Paragraph 
        paragraph={props.paragraph}
      />
      <img src={props.image} alt={props.imageDescription}/>
    </div>
  );
}

export default ParagraphImage;