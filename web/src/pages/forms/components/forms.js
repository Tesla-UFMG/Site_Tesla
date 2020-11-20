import React from 'react';

import "../styles/forms.css";

import logo_branca from '../../../assets/img/logos/logo-branca.svg';

function Form(props) {
  return (
    <div id="forms" className={props.className}>
      <img className="logo" src={logo_branca} alt="Logo Tesla UFMG"/>

      <div className="forms-area">
        {props.children}
      </div>
    </div>
  );
}

export default Form;