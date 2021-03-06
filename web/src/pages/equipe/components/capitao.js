import React from 'react'

import '../styles/capitao.css'

function Capitao(props) {
    return(
        <div className="row capitao">
            <img src={`${props.imageCapitao}`} className="img-fluid" alt="Capitao"></img>
            <div>
                <h1>{props.capitao === 'M' ? "Capitão" : "Capitã"}</h1>
                <h2>{props.nomeCapitao}</h2>
            </div>
        </div>
    );
}

export default Capitao;

// `${props.imageCapitao}`