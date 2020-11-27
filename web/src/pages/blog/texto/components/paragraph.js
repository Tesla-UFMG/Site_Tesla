import React from 'react';

import "../styles/paragraph.css";

function Paragraph(props) {
  const editText = []

  function renderParagraph(text) {
    const numberStrongs = (text.match(/#/g) || []).length;

    const pre_strong = text.substring(0, text.indexOf("*"));
    const strong = <strong>{text.substring(text.indexOf("*") + 1, text.indexOf("#"))}</strong>;
    const pos_strong = text.substring(text.indexOf("#") + 1);

    editText.push(pre_strong);
    editText.push(strong);

    if (numberStrongs > 1) {
      renderParagraph(pos_strong);
    } else {
      editText.push(pos_strong);
    }

    return <p className="paragraph">{editText.map(text => {return text})}</p>
  }

  return (
    <p id="paragraph">
      {renderParagraph(props.paragraph)}
    </p>
  );
}

export default Paragraph;