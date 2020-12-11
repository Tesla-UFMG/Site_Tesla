import React from 'react';

import './styles/paginaEquipe.css'

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';
import Footer from '../../components/footer/footer';

import { withRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

// import image_inicio from '../../assets/img/fotos/_MG_0002-Pano.jpg'
import image_scroll_icon_black from '../../assets/icons/scroll-icon-black.svg'

import Equipe from './components/equipe'
import Subsistema from './components/subsistema'
import Capitao from './components/capitao'
import Membro from './components/membro'

const dados = [
    {
        "equipe": "2020",
        "capitao": {
            "imagem": "https://docs.google.com/uc?id=11UTBbPsG0dY2fxPfOfxBFugmHquZKtBy",
            "sexo": "M",
            "nome": "Fulano de Tal" 
        },
        "subsistema": [
            {
                "nome": "Administração",
                "membros": [
                    {
                        "imagem": "https://static.wixstatic.com/media/d979eb_23bc3bead19d4b4aaabeb0e7e5c808e4~mv2_d_2976_3968_s_4_2.jpg/v1/crop/x_0,y_224,w_2976,h_2981/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01/_MG_0908.webp",
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": "https://static.wixstatic.com/media/d979eb_110f722593df4a3582ec8040eaee19c6~mv2_d_3049_4065_s_4_2.jpg/v1/crop/x_0,y_324,w_3049,h_3054/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01/_MG_0916.webp",
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": "https://static.wixstatic.com/media/d979eb_a0e947776e5c4f7c982af3f4e531ae00~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01/TESLED.webp",
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": "https://static.wixstatic.com/media/d979eb_14d4352f1b14413db8b5b58982121895~mv2_d_2806_4209_s_4_2.jpg/v1/crop/x_0,y_351,w_2806,h_2806/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01/_MG_0932.webp",
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": "https://static.wixstatic.com/media/d979eb_e2107e5dc5a242d5a52ef9a29ce57530~mv2_d_3005_4007_s_4_2.jpg/v1/crop/x_0,y_169,w_3005,h_3010/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01/_MG_0938.webp",
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                ]
            },
            {
                "nome": "Dinâmica",
                "membros": [
                    {
                        "imagem": "https://static.wixstatic.com/media/d979eb_a0e947776e5c4f7c982af3f4e531ae00~mv2.png/v1/crop/x_350,y_0,w_900,h_900/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01/TESLED.webp",
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": "https://static.wixstatic.com/media/d979eb_24926a1c77eb4b90a24a12866b69cbad~mv2_d_3016_4021_s_4_2.jpg/v1/crop/x_0,y_170,w_3016,h_3020/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01/_MG_0928.webp",
                        "nome": "Matheus Felicetti",
                        "cargo": "Vice-Capitão"
                    },
                    {
                        "imagem": "https://static.wixstatic.com/media/d979eb_a0e947776e5c4f7c982af3f4e531ae00~mv2.png/v1/crop/x_350,y_0,w_900,h_900/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01/TESLED.webp",
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
            
            <Footer />
        </div>
    );
}

export default withRouter(PaginaEquipe);