import React from 'react';

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';
import Footer from '../../components/footer/footer';

import image_scroll_icon from '../../assets/icons/scroll-icon.svg'
import logo_sae from '../../assets/img/fotos/competicao/logo-sae.png';
import equipe from '../../assets/img/fotos/competicao/IMG_9757.png';

import { HashLink } from 'react-router-hash-link';

import './styles/paginaCompeticao.css'

function PaginaCompeticao() {
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
        <div id="pagina-competicao">
            <NavBar color={color} display={display} />

            <div id="inicio" className="container-fluid px-0">

                <div className="content">
                    <h1 className="section-title">A COMPETIÇÃO</h1>
                </div>

                <HashLink to="/competicao#conteudo">
                    <img src={image_scroll_icon} alt="scroll icon" className="scroll-bot-icon"></img>
                </HashLink>
            </div>


            <div id="conteudo" className="content-body">
                <div className="row row-cols-1 content">

                    <div className="row-oque-e">
                        <div>
                            <img src={logo_sae} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>
                        </div>
                        <div>
                            <p className="title">O que é?</p>
                            <p className="text">
                                A competição Fórmula SAE BRASIL, assim como as outras provas promovidas pela entidade SAE Brasil, tem como objetivo propiciar aos estudantes 
                                de Engenharia a oportunidade de aplicar na prática os conhecimentos adquiridos em sala de aula, desenvolvendo um projeto completo e construindo 
                                um carro tipo Fórmula. Os trabalhos são realizados em grupo. 
                                <br/><br/>
                                Criada em 2004, a Fórmula SAE BRASIL está a caminho da sua 17ª edição. Em 2019 reuniu 
                                70 equipes inscritas, número que cresce significativamente a cada ano. As equipes melhor classificadas ganham o direito de representar o Brasil em 
                                duas competições internacionais realizadas nos EUA
                            </p>
                        </div>
                    </div>

                    <div className="row-evento">
                        <p className="title">O evento</p>
                        <p className="text">
                            Durante três dias de evento, os carros passam por provas estáticas e dinâmicas, avaliando a performance de cada projeto na pista, assim como as apresentações 
                            técnicas das equipes, que incluem projeto, custo, e uma apresentação de marketing. Meses antes da competição, os estudantes enviam para o comitê organizador 
                            relatórios de custos, estrutura, atenuador de impacto e projeto. Os relatórios são avaliados por engenheiros especialistas, e já valem como a primeira parte 
                            da avaliação dos protótipos. Já durante a competição, nas provas estáticas, as equipes devem demonstrar mais detalhadamente se o carro apresentado no projeto 
                            equivale ao apresentado no evento. As provas dinâmicas são realizadas no terceiro dia do evento. Todas as provas são pontuadas de maneiras diferentes, de forma 
                            a garantir que o melhor conjunto de projeto e carro vença a competição.
                        </p>
                    </div>

                    <img src={equipe} alt="Equipe na competição" className="equipe-evento"/>

                    <div className="row-historico-participar">
                        <div className="historico">
                            <p className="title">Histórico</p>
                            <p className="text">
                                A competição teve início nos Estados Unidos em 1981, alavancada pela carência de engenheiros especializados em veículos de alta performance. Foi impulsionada 
                                pelas três grandes montadoras Americanas, General Motors, Ford e Chrysler, que viram nessa competição uma oportunidade única de garimpar novos engenheiros 
                                para suas equipes. Esse apoio se fortaleceu com o tempo e as empresas ficaram plenamente satisfeitas com os estudantes que eram contratados. Com o passar dos 
                                anos, diversas empresas se uniram às "Três Grandes" e, além de contratar alunos, ainda desenvolveram produtos específicos para a Fórmula SAE. No Brasil a 1ª 
                                competição da Fórmula SAE ocorreu no ano de 2004. Atualmente a competição acontece na Austrália, Itália, Inglaterra, Alemanha, Brasil e Estados Unidos, onde 
                                são reunidas as melhores equipes de cada país.
                            </p>
                        </div>

                        <div className="participar">
                        <p className="title">Por que participar?</p>
                        <p className="text">
                            A competição, além de divertida e desafiadora, é uma oportunidade de crescimento. Os trabalhos são realizados em grupo com intuito de estimular e desenvolver o 
                            trabalho em equipe. Além disso, propiciam aos estudantes de Engenharia a oportunidade de aplicar na prática os conhecimentos adquiridos de forma teórica, desenvolvendo 
                            um projeto completo e construindo um carro tipo Fórmula. Os estudantes também ganham visibilidade por parte das grandes empresas e oportunidade de reconhecimento. 
                            Os alunos que se destacam, podem acabar contratados pelas grandes montadoras que apoiam a competição.
                        </p>
                        </div>
                    </div>

                    <h1 className="section-title">PROVAS ESTÁTICAS</h1>

                    <div className="row-provas">
                        <div className="prova design">
                            <p className="prova-title">Projeto (design)</p>
                            <p className="prova-description">
                                Envolve a submissão antecipada de documentos que descrevem os principais critérios de projeto do carro e uma apresentação técnica detalhada dos projetos na competição.
                            </p>
                            <p className="prova-points">150 pts</p>
                        </div>

                        <div className="prova custos">
                            <p className="prova-title">Custos</p>
                            <p className="prova-description">
                            Requer a submissão de um relatório detalhando o custo total de fabricação do carro e uma apresentação na competição.
                            </p>
                            <p className="prova-points">50 pts</p>
                        </div>
                    </div>

                    <div className="row-apresentacao prova">
                        <p className="prova-title">Apresentação</p>
                        <p className="prova-description">
                            Envolve uma apresentação de negócios para um painel de executivos, detalhando como o carro se enquadra melhor às demandas do mercado amador de corridas.
                        </p>
                        <p className="prova-points">75 pts</p>
                    </div>

                    <div className="row-inspecao prova">
                        <p className="prova-title">Inspeção técnica</p>
                        <p className="prova-description">
                            Consiste em 4 testes: conformidade com as regras do regulamento; teste de chuva, em que um spray de água é jogado por 2 minutos sobre o veículo ligado para testar falhas 
                            de isolamento; teste de frenagem, para assegurar que todas as rodas tenham força de frenagem suficiente para travar; e teste de inclinação lateral, para conferir se o 
                            veículo é estável em altas acelerações laterais e garantir que não haja vazamento de fluidos. Tais testes visam assegurar que o veículo é seguro não apenas para o piloto, 
                            mas também para os espectadores. Nenhum ponto é alocado nessa etapa, porém, se houver qualquer falha, o veículo não é autorizado a correr.
                        </p>
                        <p className="prova-points">X pts</p>
                    </div>

                    <h1 className="section-title">PROVAS DINÂMICAS</h1>

                    <div className="row-provas">
                        <div className="prova aceleracao">
                            <p className="prova-title">Aceleração</p>
                            <p className="prova-description">
                                Arrancada de 0-75m em linha reta para avaliar a aceleração longitudinal do veículo
                            </p>
                            <p className="prova-points">100 pts</p>
                        </div>

                        <div className="prova skidpad">
                            <p className="prova-title">Skidpad</p>
                            <p className="prova-description">
                                Um percurso em 8, para avaliar a capacidade de curvas em raio constante.
                            </p>
                            <p className="prova-points">75 pts</p>
                        </div>
                    </div>

                    <div className="row-provas">
                        <div className="prova autocross">
                            <p className="prova-title">Autocross</p>
                            <p className="prova-description">
                                Uma prova de volta rápida, num circuito de autocross (apertado e com penalidade para batidas em cones), para testar a manobrabilidade e a capacidade dinâmica geral do veículo.
                            </p>
                            <p className="prova-points">125 pts</p>
                        </div>

                        <div className="prova enduro">
                            <p className="prova-title">Enduro</p>
                            <p className="prova-description">
                            O evento principal, com 22 km do circuito de autocross e troca de pilotos no meio da prova, como teste da confiabilidade e resistência dos veículos (e muitas vezes dos pilotos!).
                            </p>
                            <p className="prova-points">275 pts</p>
                        </div>
                    </div>

                    <div className="row-provas one-prova">
                        <div className="prova eficiencia">
                            <p className="prova-title">Eficiência</p>
                            <p className="prova-description">
                                Uma pontuação para eficiência energética é determinada a partir do gasto energético durante a prova de enduro, recompensando projetos que são rápidos e, ao mesmo tempo, eficientes.
                            </p>
                            <p className="prova-points">100 pts</p>
                        </div>
                    </div>

                    <h1 className="section-title">VÍDEO</h1>

                    <p className="video-text">
                        Se interessou e quer sentir na pele a emoção de uma competição? Confira nosso vídeo da 15ª Edição da competição
                    </p>

                    <div className="embed">
                        <iframe src="https://www.youtube.com/embed/rWRNxqqoXl4" title="Video 1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PaginaCompeticao;