import React from 'react'

import '../styles/Section2.css'

import { HashLink } from 'react-router-hash-link';

import image_scroll_icon_black from '../../../assets/icons/scroll-icon-black.svg'

function Section2(props) {
    return (
        <div id={props.Id} className="container-fluid px-0 div1">
            <div className="row row-cols-2">
                <div className="col-6 paragraphs">
                    <p className="p1">
                        {props.p1}
                    </p>
                    <p className="p2">
                        {props.p2}
                    </p>
                </div>

                <div className="col-6 info">
                    <div className="geral">
                        <p className="geral-position">{props.geral}</p>
                        <p className="colocacoes">GERAL</p>
                    </div>
                
                    <div className="row">
                        <div className="col">
                            <p className="colocacoes">{props.custos}</p>
                            <p className="provas">custos</p>
                        </div>
                        
                        <div className="col">
                            <p className="colocacoes">{props.apresentacao}</p>
                            <p className="provas">apresentação</p>
                        </div>
                        
                        <div className="col">
                            <p className="colocacoes">{props.design}</p>
                            <p className="provas">design</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="colocacoes">{props.aceleracao}</p>
                            <p className="provas">aceleração</p>
                        </div>

                        <div className="col">
                            <p className="colocacoes">{props.skid}</p>
                            <p className="provas">skid pad</p>
                        </div>
                        
                        <div className="col">
                            <p className="colocacoes">{props.autocross}</p>
                            <p className="provas">autocross</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="colocacoes">{props.enduro}</p>
                            <p className="provas">enduro</p>
                        </div>
                    </div>
                </div>
            </div>

            <HashLink to={props.hashlinkTop}>
                <img src={image_scroll_icon_black} alt="scroll icon" className="scroll-top-icon"></img>
            </HashLink>
            <HashLink to={props.hashlinkBot}>
                <img src={image_scroll_icon_black} alt="scroll icon" className="scroll-bot-icon"></img>
            </HashLink>
        </div>
    );
}

export default Section2;