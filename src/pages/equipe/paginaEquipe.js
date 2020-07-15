import React from 'react';

import './styles/paginaEquipe.css'

import { withRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import image_inicio from '../../assets/img/fotos/_MG_0002-Pano.jpg'
import image_scroll_icon_black from '../../assets/icons/scroll-icon-black.svg'

import Equipe from './components/equipe'
import Subsistema from './components/subsistema'
import Capitao from './components/capitao'
import Membro from './components/membro'

class PaginaEquipe extends React.Component {
    render() {
        return (
            <div id="pagina-equipe">
                <div id="inicio-equipe" className="container-fluid px-0">
                    <div className="content">
                        <h1 className="section-title">Conheça os Membros</h1>
                        <p className="section-paragraph">
                            Conheça os alunos que fazem esse projeto acontecer, 
                            distribuídos em 5 Sistemas, a equipe atualmente conta com 44 membros. 
                            Clique na foto para e-mail pessoal.
                        </p>
                    </div>

                    <HashLink to="/equipe#video">
                        <img src={image_scroll_icon_black} alt="scroll icon" className="scroll-bot-icon"></img>
                    </HashLink>
                </div>

                <div id="video" className="row">
                    <div className="embed">
                        <iframe src="https://www.youtube.com/embed/BWegfyI_eoY" title="Video Equipe" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <HashLink to="/equipe#Equipe2020">
                        <img src={image_scroll_icon_black} alt="scroll icon" className="scroll-bot-icon"></img>
                    </HashLink>
                </div>
                
                <Equipe 
                    Id= "Equipe2020"
                    capitao= {[
                        <Capitao
                            imageCapitao= {image_inicio}
                            capitao= "Capitão"
                            nomeCapitao= "Fulano de Tal"
                        />
                    ]}
                    subsistemas= {[
                        <Subsistema 
                            subsistema= "Administração"
                            membros= {[
                                <Membro 
                                    imagePath= {image_inicio}
                                    nome= "Matheus Felicetti"
                                    cargo= "Vice-Capitão"
                                />,
                                <Membro 
                                    imagePath= {image_inicio}
                                    nome= "Matheus Felicetti"
                                    cargo= "Vice-Capitão"
                                />,
                                <Membro 
                                    imagePath= {image_inicio}
                                    nome= "Matheus Felicetti"
                                    cargo= "Vice-Capitão"
                                />,
                                <Membro 
                                    imagePath= {image_inicio}
                                    nome= "Matheus Felicetti"
                                    cargo= "Vice-Capitão"
                                />,
                                <Membro 
                                    imagePath= {image_inicio}
                                    nome= "Matheus Felicetti"
                                    cargo= "Vice-Capitão"
                                />
                            ]}
                        />,
                        <Subsistema 
                            subsistema= "Dinâmica"
                            membros= {[
                                <Membro 
                                    imagePath= {image_inicio}
                                    nome= "Matheus Felicetti"
                                    cargo= "Vice-Capitão"
                                />,
                                <Membro 
                                    imagePath= {image_inicio}
                                    nome= "Matheus Felicetti"
                                    cargo= "Vice-Capitão"
                                />,
                                <Membro 
                                    imagePath= {image_inicio}
                                    nome= "Matheus Felicetti"
                                    cargo= "Vice-Capitão"
                                />
                            ]}
                        />
                    ]}
                />

            </div>
        );
    }
}

export default withRouter(PaginaEquipe);