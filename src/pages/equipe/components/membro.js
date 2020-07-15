import React from 'react'

import '../styles/membro.css'

function Membro(props) {
    return(
        <div className="col">
            <img src={props.imagePath} className="img-fluid" alt="membro"></img>
            <p className="nome">{props.nome}</p>
            <p className="cargo">{props.cargo}</p>
        </div>
    );
}

export default Membro;