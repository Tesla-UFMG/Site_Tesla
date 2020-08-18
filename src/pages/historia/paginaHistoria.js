import React from 'react';

import './styles/paginaHistoria.css'

import BodyHistoria from './components/bodyHistoria';

import { withRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import image_inicio from '../../assets/img/fotos/_MG_0002-Pano.jpg'
import image_equipe_2018 from '../../assets/img/fotos/section3.jpg'
import image_scroll_icon_black from '../../assets/icons/scroll-icon-black.svg'

class PaginaHistoria extends React.Component {
    render() {
        return (
            <div>
                <div id="inicio" className="container-fluid px-0">

                    <img src={image_inicio} alt="Imagem do NK319 na frente do Estadio Mineirão" className="img-fluid img-inicio"></img>
                    <div className="row content">
                        <div className="col page-title">
                            <h1>QUEM <br></ br> SOMOS?</h1>
                        </div>

                        <div className="col">
                            <p>
                                Somos uma equipe de competição da
                                Universidade Federal de Minas Gerais,
                                sediada em Belo Horizonte e composta por
                                alunos de graduação de diversas áreas da
                                Escola de Engenharia da UFMG.
                            </p>
                        </div>
                    </div>

                    <HashLink to="/Historia#conteudo">
                        <img src={image_scroll_icon_black} alt="scroll icon" className="scroll-bot-icon"></img>
                    </HashLink>
                </div>

                <div id="conteudo" className="container-fluid px-0">
                    <div className="row row-cols-1 content">
                        
                        <div id="intro-geral">
                            <div className="embed">
                                <iframe src="https://www.youtube.com/embed/rWRNxqqoXl4" title="Video 1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        
                            <div className="text">
                                <p>
                                    Nós projetamos e construímos carros elétricos de corrida para competir na categoria
                                    Fórmula SAE, que é uma competição sediada anualmente em Piracicaba-SP, reunindo
                                    equipes universitárias de todo o país. Nessa competição são avaliadas a performance
                                    de cada protótipo na pista, com provas de aceleração, curva, volta rápida e
                                    resistência, pilotadas pelos próprios integrantes; assim como as apresentações
                                    técnicas das equipes, que incluem projeto, custos, manufatura e marketing. Somado a
                                    todas essas etapas, todos os protótipos ainda precisam passar pela aprovação de
                                    rigorosas inspeções técnicas de segurança.
                                </p>
                                <p>
                                    Contamos com integrantes de diversos cursos: Engenharia Elétrica, Engenharia
                                    Mecânica, Controle e Automação, Engenharia Aeroespacial, Engenharia de Produção
                                    e Sistemas de Informação.
                                </p>
                            </div>

                            <div className="row title-img">
                                <h1 className="col">COMO <br></br>TUDO <br></br>COMEÇOU</h1>
                                <img src={image_inicio} className="img-fluid col" alt="Fundadores do Fórmula Tesla UFMG"></img>
                            </div>
                            
                            <div className="text">
                                <p>
                                    Nossa história começa em meados de 2016, com o fundador Abraão Guia, então
                                    aluno de Engenharia Elétrica, recrutando alguns de seus colegas de curso para
                                    iniciarem um projeto inovador na universidade: desenvolver um carro de corrida
                                    totalmente elétrico, com o intuito de estimular o desenvolvimento de tecnologia
                                    nacional e capacitar seus integrantes para o mercado de trabalho.
                                </p>
                                <p>
                                    Logo a equipe toma corpo com seu primeiro processo seletivo, em outubro, sendo
                                    composta por 26 alunos de graduação. Dá-se início aos estudos, esboços de projeto e
                                    conexões com equipes parceiras.
                                </p>
                            </div>
                        </div>
                        
                        <BodyHistoria
                            id= "Historia2017"
                            year= "2017"
                            capitao= "Capitão"
                            capitaoNome= "Abraão Guia"
                            posicao1= "8°"
                            prova1= "projeto"
                            posicao2= "10°"
                            prova2= "custos"
                            posicao3= "10°"
                            prova3= "geral"
                            posicao4= "4°"
                            prova4= "enduro"
                            posicao5= "10°"
                            prova5= "apresentação"
                            videoLink= {[<iframe src="https://www.youtube.com/embed/lPQjy78QGok" title="Video 2017" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>]}
                            legenda= "Em 2017 projetos ousados e alguns até mesmo inéditos no país começam a ganhar vida, enquanto um patrocínio salvador abraça a nossa causa."
                            textos= {[<div className="text">
                                        <p>
                                            O ano fica marcado pelo otimismo implacável dos integrantes e por muita energia para virar 
                                            noites na oficina terminando a fabricação do primeiro veículo. Surge, então, o primeiro 
                                            protótipo elétrico da UFMG: o Kayran. Porém, ele não surge por completo...
                                        </p>
                                        <p>
                                            Na véspera da competição, desembarcamos com o carro em Piracicaba e
                                            continuamos a terminar a montagem do banco de baterias, que não pôde ser
                                            finalizado a tempo; o furacão Irma havia atrasado em um mês o despacho das células,
                                            eliminando qualquer chance de terminarmos o banco naquele ano.
                                        </p>
                                        <p>
                                            Porém, todos tínhamos em mente que, depois de mais de um ano de dedicação e trabalho
                                            extenuante, não poderíamos nos entregar. Viramos a última noite mantendo a chama
                                            da esperança acesa, revezando soldadores, esmerilhadores e montadores. Mas não
                                            teve jeito...
                                        </p>
                                    </div>,
                                    <div className="text com-img">
                                        <div className="col">
                                            <img src={image_inicio} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>
                                        </div>
                                        <div className="col">
                                            <p>
                                                Chegamos no autódromo com um veículo incapaz de ligar, no ano da nossa estreia.
                                                Não havia mágica, sem a pontuação das provas dinâmicas, perdíamos metade dos
                                                pontos e só podíamos contar com as provas estáticas, com as quais não éramos
                                                familiarizados; nem das inspeções técnicas conseguimos participar. Conquistamos
                                                décimo lugar, dentre 15 competidores.
                                            </p>
                                        </div>
                                    </div>,
                                    <div className="text">
                                        <p>
                                            Estávamos tristes? Claro... nós quase chegamos lá, pensamos. Porém, percebemos
                                            com isso tudo uma coisa: tínhamos garra! Fomos uma das únicas equipes na história
                                            do país a conceber o seu primeiro protótipo dentro de um ano. E ainda tínhamos algo
                                            inédito na competição nacional – o emprego da motorização dupla traseira.
                                        </p>
                                        <p>
                                            E não era só, também fomos os únicos a desenvolver o nosso próprio sistema eletrônico de
                                            monitoramento de baterias (BMS). Mas, mais importante do que isso, nós criamos um
                                            time, uma família! Acreditávamos no nosso potencial, confiávamos uns nos outros e
                                            sabíamos que juntos, independentemente do resultado, iríamos crescer, como
                                            profissionais e como pessoas. O nosso saldo já era positivo. Criamos as bases de
                                            uma equipe sólida.
                                        </p>
                                    </div>]}
                            imageEquipe= {[<img src={image_inicio} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>]}
                        />
                        <BodyHistoria 
                            id= "Historia2018"
                            year= "2018"
                            capitao= "Capitã"
                            capitaoNome= "Ana Flávia Rangel"
                            posicao1= "3°"
                            prova1= "projeto"
                            posicao2= "2°"
                            prova2= "custos"
                            posicao3= "2°"
                            prova3= "geral"
                            posicao4= "2°"
                            prova4= "enduro"
                            posicao5= "2°"
                            prova5= "autocross"
                            videoLink= {[<iframe src="https://www.youtube.com/embed/s_YGnP0zI4s" title="Video 2018" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>]}
                            legenda= "Com a nova mentalidade de “um passo de cada vez”, conseguir a aprovação dos juízes nas inspeções técnicas de segurança passa a ser o principal objetivo."
                            textos= {[<div className="text">
                                        <p>
                                            Agora, com uma estruturação interna totalmente reorganizada, o Fórmula Tesla
                                            UFMG aperfeiçoa seus métodos de gerência, intensifica a capacitação de seus
                                            membros e estreita os laços com as equipes vizinhas.
                                        </p>
                                        <p>
                                            O protótipo Kayran finalmente anda em fevereiro e é aproveitado como veículo de
                                            testes para o aperfeiçoamento dos sistemas a serem utilizados no NK-218, o segundo
                                            protótipo, que já está sendo projetado para participar da competição 2018.
                                        </p>
                                    </div>,
                                    <div className="text com-img">
                                        <div className="col">
                                            <img src={image_inicio} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>
                                        </div>
                                        <div className="col">
                                            <p>
                                                Investimos pesado em análises estruturais e dinâmicas, tornamos os sistemas
                                                eletrônicos mais robustos e conseguimos uma redução de massa de 80 kg em relação
                                                ao primeiro protótipo. E, desta vez com um melhor planejamento, somos capazes de
                                                finalizar o novo veículo com tempo hábil para testes em pista.
                                            </p>
                                        </div>
                                    </div>,
                                    <div className="text">
                                        <p>
                                            O NK-218 desembarca em Piracicaba e, no teste de checagem na nossa chácara, um
                                            dos motores não funciona: “Como isso é possível?! Testamos o carro antes de o
                                            despacharmos!”. Identificamos que, de alguma forma, o encoder do motor esquerdo
                                            havia queimado durante a viagem. No último instante para pegarmos estrada para
                                            buscarmos um novo encoder, por sorte, uma equipe parceira, chamada UTForce e-
                                            Racing, num gesto grandioso, nos cede o seu encoder reserva.
                                        </p>
                                    </div>,
                                    <div className="row row-img">
                                        <img src={image_inicio} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>
                                    </div>,
                                    <div className="text">
                                        <p>
                                            Novamente no autódromo do ECPA, dessa vez conseguimos entrar direto para a
                                            inspeção elétrica – mais de três horas ininterruptas de apreensão, aguardando os
                                            juízes finalizarem a avaliação do veículo. Passamos de primeira, um feito quase
                                            inédito na história da competição. Logo depois, a inspeção mecânica – alguns poucos
                                            apontamentos, que exigem retorno para nova análise e aprovação. Corrigimos e
                                            também somos aprovados. Nosso principal objetivo acabava de ser cumprido,
                                            estávamos aptos para participar das provas dinâmicas!
                                        </p>
                                        <p>
                                            Porém, quando apontamos o carro na pista de aceleração e o posicionamos para a
                                            arrancada, somos barrados: nossos pneus slick estavam demasiadamente gastos
                                            para os critérios de segurança dos juízes de pista. E não tínhamos outro jogo melhor,
                                            utilizávamos pneus doados, já no fim de sua vida útil. Em razão disso, tivemos que
                                            competir com pneus de rua.
                                        </p>
                                        <p>
                                            Apesar dos contratempos, conseguimos participar de todas as provas e ser finalistas
                                            em projeto. E, para consolidar 2018 como um ótimo ano, conquistamos o 2º lugar
                                            geral. Era inacreditável o quão longe havíamos chegado em apenas dois anos de
                                            história.
                                        </p>
                                    </div>]}
                            imageEquipe= {[<img src={image_equipe_2018} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>]}
                        />
                        <BodyHistoria 
                            id= "Historia2019"
                            year= "2019"
                            capitao= "Capitão"
                            capitaoNome= "Pedro Henrique Gonçalves"
                            posicao1= "1°"
                            prova1= "projeto"
                            posicao2= "5°"
                            prova2= "custos"
                            posicao3= "5°"
                            prova3= "geral"
                            posicao4= "5°"
                            prova4= "enduro"
                            posicao5= "5°"
                            prova5= "autocross"
                            videoLink= {[<iframe src="https://www.youtube.com/embed/-MkqLh-w-Ew" title="Video 2019" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>]}
                            legenda= "2019 começa grande. Conseguimos um patrocínio financeiro de peso. Ousamos e iniciamos o desenvolvimento de sistemas que antes julgávamos impossíveis de serem feitos."
                            textos= {[<div className="text">
                                        <p>
                                            Novos componentes e logística de equipe são planejados e todo o protótipo é
                                            projetado na expectativa desse investimento. Porém, devido a mudanças ocorridas na
                                            empresa patrocinadora, o patrocínio é cancelado e nos vemos com um projeto
                                            financeiramente inviável em mãos.
                                        </p>
                                        <p>
                                            Sabendo do nosso potencial, iniciamos um novo projeto de baixo custo, mantendo a
                                            receita do ano anterior, com foco em otimizar ao máximo todos os sistemas. Adotamos
                                            frenagem regenerativa, desenvolvemos um pacote aerodinâmico pensado na
                                            diminuição do arrasto, otimizamos estruturalmente todos sistemas mecânicos para
                                            possibilitar um banco de baterias maior sem aumentar a massa total do veículo e
                                            aumentamos a precisão de fabricação. Assim, alcançamos maior eficiência e maior
                                            autonomia do protótipo. Além disso, finalmente adquirimos pneus de corrida novos,
                                            determinantes para um melhor desempenho dinâmico na competição.
                                        </p>
                                    </div>,
                                    <div className="text com-img">
                                        <div className="col">
                                            <p>
                                                Somos capazes de antecipar o início da fase de testes e, assim, focar em maiores
                                                validações. Testamos o veículo até a última semana e novamente vamos para Piracicaba.
                                            </p>
                                            <p>
                                                Passamos nas inspeções, conseguimos novamente estar entre os finalistas na prova
                                                de projeto, porém, dessa vez, temos problemas na prova de frenagem. E, no esforço
                                                para fazer o veículo ser aprovado no Brake Test, a elevada carga emocional dos
                                                membros acaba por interferir no trabalho, acarretando novos problemas mecânicos e
                                                também elétricos.
                                            </p>
                                        </div>
                                        <div className="col">
                                            <img src={image_inicio} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>
                                        </div>
                                    </div>,
                                    <div className="text">
                                        <p>
                                            As provas dinâmicas vão se passando enquanto continuamos parados nos boxes
                                            realizando a manutenção do veículo. Depois de duas provas já perdidas, quando
                                            estamos a dez minutos de se encerrar a prova de Autocross, terminamos o reparo,
                                            somos aprovados no teste de frenagem e corremos para a pista com o carro. Porém,
                                            entramos na prova logo quando começa a chover e não conseguimos fazer um bom
                                            tempo. Ao final da prova, levamos o carro em ritmo acelerado para as finais de projeto,
                                            que já haviam começado.
                                        </p>
                                    </div>,
                                    <div className="row row-img">
                                        <img src={image_inicio} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>
                                    </div>,
                                    <div className="text">
                                        <p>
                                            No dia seguinte, Enduro, a prova dinâmica mais temida. Havíamos testado
                                            suficientemente o carro em Belo Horizonte, porém, depois dos problemas que tivemos
                                            no dia anterior, não estávamos nada seguros. E nossa intuição estava certa... O carro
                                            parou na primeira volta. Mais precisamente, na primeira curva.
                                        </p>
                                        <p>
                                            Mas a cara de choro dos membros desapareceu rapidamente quando recebemos a
                                            notícia de que havíamos ganhado as finais de projeto. Tínhamos o melhor projeto de
                                            Fórmula SAE Elétrico do Brasil!
                                        </p>
                                        <p>
                                            Apesar de não termos conseguido mostrar o nosso potencial em pista, o nosso
                                            desempenho nas provas estáticas foi tão bom que nos colocou na 5ª colocação geral.
                                            Porém, voltamos com a sensação de que essa competição estava incompleta, de que
                                            ela ainda não havia acabado...
                                        </p>
                                    </div>]}
                            imageEquipe= {[<img src={image_inicio} className="img-fluid" alt="Membros do Tesla trabalhando no carro"></img>]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PaginaHistoria);