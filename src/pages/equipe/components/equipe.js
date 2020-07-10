import React from 'react'

import '../styles/equipe.css'

function Equipe(props) {
    return(
        <div id={props.Id} className="row">
            {props.capitao}

            {props.subsistemas}
            
        </div>
    );
}

export default Equipe;