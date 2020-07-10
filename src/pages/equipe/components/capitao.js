import React from 'react'

import '../styles/capitao.css'

function Capitao(props) {
    return(
        <div className="row capitao">
            <img src={`${props.imageCapitao}`} className="img-fluid"></img>
            <div>
                <h1>{props.capitao}</h1>
                <h2>{props.nomeCapitao}</h2>
            </div>
        </div>
    );
}

export default Capitao;