import React from 'react'

import '../styles/Section4.css'

import { HashLink } from 'react-router-hash-link';

import image_scroll_icon_black from '../../../assets/icons/scroll-icon-black.svg'

function Section4(props) {
    return (
        <div id={props.Id} className="container-fluid px-0 div4">
            <div className="row row-cols-1">
                <div className="col infos">
                    <p className="title">ELETRÔNICA</p>
                    <p className="text-elec">
                        {props.textEletronica}
                    </p>
                    <p className="subsistems">CONTROLE</p>
                    <p className="text-elec">
                        {props.textControle}
                    </p>
                    <p className="subsistems">TELEMETRIA & AQUISIÇÃO</p>
                    <p className="text-elec">
                        {props.textTelemetria}
                    </p>
                    <p className="subsistems">BANCO DE BATERIAS</p>
                    <p className="text-elec">
                        {props.textBaterias}
                    </p>
                    <p className="subsistems">BATTERY MONITORING SYSTEM (BMS)</p>
                    <p className="text-elec">
                        {props.textBMS}
                    </p>

                    <p className="title">MECÂNICA</p>
                    <p className="subsistems powertrain">POWERTRAIN</p>
                    <div className="powertrain2">
                        {props.textPowertrain}
                    </div>
                    <p className="subsistems chassi">CHASSI</p>
                    <div className="chassi2">
                        {props.textChassi}
                    </div>
                    <p className="subsistems aero">AERODINÂMICA</p>
                    <p className="text-mec aero2">
                        {props.textAero}
                    </p>
                    <p className="subsistems direcao">DIREÇÃO</p>
                    <div className="direcao2">
                        {props.textDirecao}
                    </div>
                    <p className="subsistems suspensao">SUSPENSÃO</p>
                    <div className="suspensao2">
                        {props.textSuspensao}
                    </div>
                    <p className="subsistems freio">FREIOS</p>
                    <div className="freio2">
                        {props.textFreio}
                    </div>
                </div>
            </div>

            <HashLink to={props.hashlinkTop}>
                <img src={image_scroll_icon_black} alt="scroll icon" className="scroll-top-icon"></img>
            </HashLink>
        </div>
    );
}

export default Section4;