import React from 'react'

import '../styles/Section3.css'

import { HashLink } from 'react-router-hash-link';

import image_scroll_icon from '../../../assets/icons/scroll-icon.svg'

function Section3(props) {
    return (
        <div id={props.Id} className="container-fluid px-0 div3">
            <div className="row">

                <div className="col imagem-detec">
                    {props.detec}
                </div>

                <div className="col infos">
                    <div className="col">
                        <p className="title-spec">Motor</p>
                        <p className="spec">{props.motor}</p>
                        <p className="title-spec">Potência Máx.</p>
                        <p className="spec">{props.potencia}</p>
                        <p className="title-spec">Torque Máx.</p>
                        <p className="spec">{props.torque}</p>
                        <p className="title-spec">0 - 75 m</p>
                        <p className="spec">{props.tempo}</p>
                        <p className="title-spec">Velocidade Máx.</p>
                        <p className="spec">{props.velocidade}</p>
                        <p className="title-spec">Consumo</p>
                        <p className="spec">{props.consumo}</p>
                    </div>
                    <div className="col">
                        <p className="title-spec">Autonomia</p>
                        <p className="spec">{props.autonomia}</p>
                        <p className="title-spec">Bitola Diant.</p>
                        <p className="spec">{props.bitolaD}</p>
                        <p className="title-spec">Bitola Tras.</p>
                        <p className="spec">{props.bitolaT}</p>
                        <p className="title-spec">Entre-eixos</p>
                        <p className="spec">{props.eixos}</p>
                        <p className="title-spec">Massa</p>
                        <p className="spec">{props.massa}</p>
                        <p className="title-spec">Massa Diant</p>
                        <p className="spec">{props.massaD}</p>
                    </div>
                </div>

            </div>

            <HashLink to={props.hashlinkTop}>
                <img src={image_scroll_icon} alt="scroll icon" className="scroll-top-icon"></img>
            </HashLink>
            <HashLink to={props.hashlinkBot}>
                <img src={image_scroll_icon} alt="scroll icon" className="scroll-bot-icon"></img>
            </HashLink>
        </div>
    );
}

export default Section3;