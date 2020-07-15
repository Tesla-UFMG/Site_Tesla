import React from 'react'

import '../styles/bodyHistoria.css'

function BodyHistoria(props) {
    return(
        <div id={props.Id}>
            
            <div className="positions">
                <div className="row year">
                    <h1>{props.year}</h1>
                    <p className="capitao"><strong>{props.capitao}:</strong> {props.capitaoNome}</p>
                </div>

                <div className="row positions2">
                    <div className="col">
                        <p className="colocacao">{props.posicao1}</p>
                        <p>{props.prova1}</p>
                    </div>
                    <div className="col">
                        <p className="colocacao">{props.posicao2}</p>
                        <p>{props.prova2}</p>
                    </div>
                    <div className="col geral">
                        <p className="colocacao">{props.posicao3}</p>
                        <p>{props.prova3}</p>
                    </div>
                    <div className="col">
                        <p className="colocacao">{props.posicao4}</p>
                        <p>{props.prova4}</p>
                    </div>
                    <div className="col">
                        <p className="colocacao">{props.posicao5}</p>
                        <p>{props.prova5}</p>
                    </div>
                </div>
            </div>

            <div className="embed">
                {/* Link do video: Entrar no video no youtube > share > embed > copiar toda linha de código e colar nessa props */}
                {props.videoLink}
            </div>

            <div className="row legend">
                <p>
                    {props.legenda}
                </p>
            </div>

            <div className="corpo-textos">
                {props.textos}
            </div>
            
            <div className="row row-img">
                {props.imageEquipe}
            </div>
        </div>
    );
}

export default BodyHistoria;