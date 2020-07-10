import React from 'react'

import '../styles/subsistema.css'

function Subsistema(props) {
    return(
        <div className="row subsistemas">
            <h1>{props.subsistema}</h1>
            <div className="row row-cols-4 membros">
                {props.membros}
            </div>
        </div>
    );
}

export default Subsistema;