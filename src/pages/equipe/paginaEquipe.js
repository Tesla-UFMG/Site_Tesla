import React from 'react';

import './styles/paginaEquipe.css'

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';

import { withRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import image_inicio from '../../assets/img/fotos/_MG_0002-Pano.jpg'
import image_scroll_icon_black from '../../assets/icons/scroll-icon-black.svg'

import Equipe from './components/equipe'
import Subsistema from './components/subsistema'
import Capitao from './components/capitao'
import Membro from './components/membro'

const dados = [
    {
        "equipe": "2020",
        "capitao": {
            "imagem": image_inicio,
            "sexo": "M",
            "nome": "Fulano de Tal" 
        },
        "subsistema": [
            {
                "nome": "Administração",
                "membros": [
                    {
                        "imagem": image_inicio,
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": image_inicio,
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": image_inicio,
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": image_inicio,
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": image_inicio,
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                ]
            },
            {
                "nome": "Dinâmica",
                "membros": [
                    {
                        "imagem": image_inicio,
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": image_inicio,
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": image_inicio,
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                ]
            },
        ]
    }
]

function PaginaEquipe() {
    const [{ color, display }, handleScroll] = useNavBar();
    
    var last_known_scroll_position = 0;
    var ticking = false;

    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll(last_known_scroll_position, false);
                ticking = false;
            });

            ticking = true;
        }
    });

    return (
        <div id="pagina-equipe">
            <NavBar color={color} display={display} />

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

            {dados.map(equipe => {
                return (<Equipe Id={"Equipe" + equipe.equipe}
                    capitao={<Capitao imageCapitao={equipe.capitao.imagem} capitao={equipe.capitao.sexo} nomeCapitao={equipe.capitao.nome} />}
                    subsistemas={equipe.subsistema.map(subsistema => {
                        return (<Subsistema subsistema={subsistema.nome} 
                            membros={subsistema.membros.map(membro => {
                                return (<Membro 
                                    imagePath={membro.imagem}
                                    nome={membro.nome}
                                    cargo={membro.cargo}
                                />)
                            })}
                        />)
                    })}
                />)
            })}
            
        </div>
    );
}

export default withRouter(PaginaEquipe);