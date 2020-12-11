import React from 'react';

import { withRouter } from 'react-router-dom'

import image_detec from '../../assets/icons/DTEC NK319.svg'
import image_render_powertrain from '../../assets/img/renders/POWERTRAIN NK319.png'
import image_render_chassi from '../../assets/img/renders/CHASSI NK319.png'
import image_render_direcao from '../../assets/img/renders/DIREÇÃO NK319.png'
import image_render_freio from '../../assets/img/renders/FREIO NK319.png'
import image_render_susp_dia from '../../assets/img/renders/SUSP DIA NK319.png'
import image_render_susp_tras from '../../assets/img/renders/SUSP TRAS NK319.png'

import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';
import Footer from '../../components/footer/footer';

function PaginaNK319() {
    const [{ color, display }, handleScroll] = useNavBar();
    
    var last_known_scroll_position = 0;
    var ticking = false;

    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll(last_known_scroll_position, true);
                ticking = false;
            });

            ticking = true;
        }
    });

    return(
        <body>
            <NavBar color={color} display={display} />

            <Section1
                Id="NK319-1"
                carName="NK319"
                colocacao="5° Lugar geral 2019"
                hashlinkBot="/PrototiposNK319#NK319-2"
            />
            <Section2 
                Id="NK319-2"
                p1="Sendo o terceiro carro fabricado, melhorou os índices de eficiência e autonomia da equipe e 
                conseguiu uma melhora significativa no desempenho em pista, em razão do projeto dinâmico mais 
                refinado, menores perdas mecânicas e soluções aerodinâmicas inovadoras."
                p2="Lançado em 31 de outubro de 2019, foi à competição cheio de expectativas pela surpreendente 
                segunda colocação no ano anterior. O grande empenho da equipe durante o ano levou ao primeiro 
                lugar na prova de Design, porém o protótipo enfrentou alguns imprevistos nas provas dinâmicas 
                e conquistou a quinta colocação geral."
                geral="5°"
                custos="5°"
                apresentacao="5°"
                design="1°"
                aceleracao="-"
                skid="-"
                autocross="5°"
                enduro="-"
                hashlinkTop="/PrototiposNK319#NK319-1"
                hashlinkBot="/PrototiposNK319#NK319-3"
            />
            <Section3 
                Id="NK319-3"
                detec={[<img src={image_detec} alt="Desenho Técnico do NK319" className="detec"></img>]}
                motor="2x WEG VE-M01"
                potencia="54 cv (39,7 kW)"
                torque="8,2 Nm (39,7 kW)"
                tempo="5,1 s"
                velocidade="99 km/h"
                consumo="216 Wh/km"
                autonomia="22 km"
                bitolaD="1170 mm"
                bitolaT="1150 mm"
                eixos="1150 mm"
                massa="279 kg"
                massaD="49,9%"
                hashlinkTop="/PrototiposNK319#NK319-2"
                hashlinkBot="/PrototiposNK319#NK319-4"
            />
            <Section4 
                Id="NK319-4"
                textEletronica="O projeto eletrônico teve dois objetivos principais no ano de 2019: sensoriamento
                abrangente do veículo, permitindo diagnóstico e validação dos diversos sistemas do
                carro; e aumento da autonomia através do melhor gerenciamento de energia, visando
                alcançar os 22 quilômetros da prova de Enduro."
                textControle="Em 2019 houve a implementação de frenagem regenerativa no veículo e foi investido
                tempo em pesquisas sobre Controle de Arrancada e Vetorização de Torque para
                aplicações futuras. Também foi aprimorada a estabilidade de comunicação do sistema
                de controle com os outros módulos."
                textTelemetria="Investiu-se em instrumentação e aquisição de dados, tornando possível medir
                deformação de peças estruturais, temperatura dos discos de freios, curso dos
                amortecedores, pressão nas linhas de freio, além de aceleração e velocidade angular
                do veículo. Esse processo ainda contou com o desenvolvimento de um datalogger para
                registro de todos os dados aferidos. Associado a isso, os sistemas de telemetria e
                interface foram aprimorados, garantindo que tanto a equipe nos boxes quanto o piloto
                conseguissem fazer uma análise instantânea das condições do veículo, auxiliando na
                definição de estratégias e acompanhamento dos sinais vitais. Houve substituição dos
                módulos de telemetria NRF para o Xbee, aumentando a eficiência e a taxa de
                transmissão, e reformulou-se a interface gráfica de visualização de dados em tempo
                real, podendo agora ser acessada livremente em computadores, tablets e celulares por
                quaisquer integrantes da equipe simultaneamente."
                textBaterias="A principal mudança no banco de baterias foi o acréscimo de mais um ramo de células
                em paralelo, a fim de aumentar a capacidade de carga e possibilitar a finalização da
                prova de Enduro juntamente com o novo pacote aerodinâmico e a frenagem
                regenerativa. O banco passou a ter 72 células e a configuração tornou-se 24s3p. Um
                dos destaques do projeto foi a diminuição do volume da estrutura em 10% em relação
                ao ano anterior, mesmo com o aumento da quantidade de células em 50%. Também, o
                isolamento elétrico foi otimizado e reduziu-se a quantidade de parafusos necessários
                para a montagem, contribuindo para a segurança, facilidade de manutenção e baixo
                peso."
                textBMS="O BMS – modular, baseado em master/slave e ampliável – foi otimizado, contando
                com filtros via software e um display touchscreen para controle de parâmetros e
                monitoração local em tempo real, auxiliando no monitoramento do carregamento e
                diagnóstico de manutenção do banco."
                textPowertrain={[
                    <div className="col">
                        <p className="text-mec" >
                            O foco base para a transmissão 2019 foi aumentar a confiabilidade e eficiência do
                            sistema, além de melhorar o dimensionamento de algumas peças consideradas
                            superdimensionadas. Falhas estruturais e de fabricação foram corrigidas, a fim de
                            reduzir vibrações e evitar desgaste acentuado de peças; também foi possível reduzir a
                            massa e a inércia rotacional dos componentes, tanto pela otimização estrutural,
                            quanto pela migração para o uso de juntas e semieixos de projeto próprio. Em
                            paralelo, deu-se início aos estudos dos efeitos da fadiga em componentes mecânicos,
                            visando alicerçar o desenvolvimento de uma metodologia de dimensionamento de
                            peças mais precisa e condizente com as aplicações dos protótipos da equipe.
                        </p>
                    </div>,
                    <div className="col">
                        <img src={image_render_powertrain} alt="Render Powertrain" className="img-fluid render-powertrain"></img>
                    </div>
                ]}
                textChassi={[
                    <div className="col">
                        <img src={image_render_chassi} alt="Render Chassi" className="img-fluid render-chassi"></img>
                    </div>,
                    <div className="col">
                        <p className="text-mec">
                            Entre os principais avanços do projeto em relação ao ano anterior se destaca o melhor
                            dimensionamento das juntas soldadas e parafusadas, realizado de acordo com normas
                            nacionais vigentes, garantindo maior confiabilidade ao veículo e criando as bases para
                            redução das dimensões das fixações em projetos futuros. Em relação ao chassi
                            propriamente, maior robustez e rigidez torcional foram alcançadas, de modo a
                            suportar e distribuir melhor as cargas impostas, permitindo maior controle da
                            distribuição de transferência lateral de carga. Além disso, o seu processo de fabricação
                            foi mais acurado, através do uso de um novo tipo de gabarito – planos cortados a laser
                            – aumentando a correspondência entre o projetado e o fabricado. Por último, foram
                            feitos ensaios, testes e aquisições de dados visando assegurar a qualidade da estrutura
                            e validar as simulações computacionais realizadas na fase inicial.
                        </p>
                    </div>
                ]}
                textAero="A nova meta da equipe de completar a prova de enduro mesmo com limitações de
                baterias e motores fez com que o pacote aerodinâmico fosse focado em proporcionar
                maior eficiência ao veículo. Com base nisso, a asa dianteira, a carenagem traseira e o
                bico foram desenvolvidos com o intuito exclusivo de diminuir a resistência
                aerodinâmica, o que resultou em uma redução final de 50% nos níveis de arrasto. Todo
                o projeto foi baseado no uso de CFD para o desenvolvimento e prototipagem e, de
                modo a avaliar de forma efetiva a eficiência do pacote aerodinâmico e seus impactos
                nas provas e pontuações finais, testes em túnel de vento e em pista foram realizados."
                textDirecao={[
                    <div className="col">
                        <p className="text-mec" >
                            A direção 2019 teve um foco maior no aumento da responsividade do sistema, a fim
                            de torná-lo mais direto. Para isso, reduziu-se a razão de esterçamento de 5:1 para
                            3,5:1 e desenvolveu-se um sistema de redução de folga da coluna, tornando o veículo
                            mais ágil em mudanças de trajetória. Ainda, conferiu-se ajustabilidade ao sistema
                            através de steering arms substituíveis e obteve-se uma redução de massa de 25%
                            através do redesenho dos componentes já existentes.
                        </p>
                    </div>,
                    <div className="col second-col">
                        <img src={image_render_direcao} alt="Render Direção" className="img-fluid render-direcao"></img>
                    </div>
                ]}
                textSuspensao={[
                    <div className="col first-col">
                        <img src={image_render_susp_dia} alt="Render Suspensao Diantera" className="img-fluid render-susp"></img>
                        <img src={image_render_susp_tras} alt="Render Suspensao Traseira" className="img-fluid render-susp"></img>
                    </div>,
                    <div className="col">
                        <p className="text-mec">
                            Em 2019 otimizou-se o projeto cinemático da suspensão, visando alcançar um ganho
                            de cambagem mais adequado; investiu-se novamente em ajustabilidade, com o
                            desenvolvimento de barras estabilizadoras do tipo faca giratória, consideradas mais
                            versáteis, e de camber plates, capazes de proporcionar diferentes ajustes de
                            cambagem; e reduziu-se a massa não-suspensa, através do emprego de alumínio
                            aeronáutico nas mangas de eixo e cubos de roda, contribuindo para a aderência dos
                            pneus mediante irregularidades da pista e para a redução da inércia rotacional do
                            veículo e das partes girantes.
                        </p>
                    </div>
                ]}
                textFreio={[
                    <div className="col">
                        <p className="text-mec">
                            O projeto do sistema de freios do NK-319 teve três focos principais: validação do
                            comportamento teórico do sistema, redução de massa de peças julgadas
                            superdimensionadas e análises mais precisas das cargas mecânicas e térmicas
                            impostas aos componentes. Sensores de pressão e temperatura foram empregados,
                            possibilitando avaliar as pressões nas linhas hidráulicas em diferentes condições de
                            frenagem e a necessidade de arrefecimento dos discos de freio, validando o projeto.
                            Por fim, através de otimizações topológicas, 23% da massa do sistema foi reduzida.
                        </p>
                    </div>,
                    <div className="col">
                        <img src={image_render_freio} alt="Render Freio" className="img-fluid render-freio"></img>
                    </div>
                ]}
                hashlinkTop="/PrototiposNK319#NK319-3"
            />
            <Footer />
        </body>
    );
}

export default withRouter(PaginaNK319);