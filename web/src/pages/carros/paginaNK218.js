import React from 'react';

import { withRouter } from 'react-router-dom'

import image_detec from '../../assets/img/fotos/DTEC NK218.jpg'

import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';
import Footer from '../../components/footer/footer';

function PaginaNK218() {
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
        <body style={{right: "0px"}}>
            <NavBar color={color} display={display} />

            <Section1
                Id="NK218-1"
                carName="NK218"
                colocacao="2° Lugar geral 2018"
                hashlinkBot="/PrototiposNK218#NK218-2"
            />
            <Section2 
                Id="NK218-2"
                p1="O NK-218 é o nosso 2º protótipo​, fabricado no ano de 2018 e lançado em 9 de
                novembro. Foi o primeiro carro da equipe a conseguir realizar as provas dinâmicas, e
                não decepcionou."
                p2="Era um veículo de alta confiabilidade eletrônica e bom
                comportamento dinâmico, apresentando um limite de aderência de fácil exploração.
                Coroado com o segundo lugar geral da competição, o modelo conta com diversos
                prêmios na FSAE 2018."
                geral="2°"
                custos="2°"
                apresentacao="10°"
                design="3°"
                aceleracao="10°"
                skid="3°"
                autocross="2°"
                enduro="2°"
                hashlinkTop="/PrototiposNK218#NK218-1"
                hashlinkBot="/PrototiposNK218#NK218-3"
            />
            <Section3 
                Id="NK218-3"
                detec={[<img src={image_detec} alt="detec" className="detec"></img>]}
                motor="WEG VE-M01"
                potencia="54 cv"
                torque="8,2 kgf.m"
                tempo="4,6 s"
                velocidade="99 km/h"
                consumo="244 Wh/km"
                autonomia="13 km"
                bitolaD="1150 mm"
                bitolaT="1150 mm"
                eixos="1150 mm"
                massa="267 kg"
                massaD="49,9%"
                hashlinkTop="/PrototiposNK218#NK218-2"
                hashlinkBot="/PrototiposNK218#NK218-4"
            />
            <Section4 
                Id="NK218-4"
                textEletronica="O foco na otimização das soluções de 2017 em conjunto com o aprimoramento da
                segurança e da organização foram os pontos chaves do projeto eletrônico de 2018,
                que resultaram num ganho significativo de confiabilidade. Houve implementação de
                watchdog na ECU, para resguardar o carro de travamento de código; comunicação
                isolada com o inversor e filtragem de dados por superamostragem."
                textControle="No sistema de controle, foram feitas algumas alterações tendo em vista atender o uso
                automotivo: a comunicação com o inversor passou a ser feita em protocolo CAN,
                reduzindo ruídos, e adotaram-se conectores automotivos, com fixação feita em pontos
                estratégicos e reforçada em pontos críticos. Tais providências conferiram boa
                confiabilidade quanto à integridade do sinal sob efeito de vibração intensa, evitando
                mal contato e perdas de conexão. Os cabos foram envoltos por malha náutica,
                protegendo-os contra possíveis agentes cortantes do ambiente, melhorando a rigidez
                mecânica e mantendo-os unidos e organizados."
                textTelemetria="Desenvolveu-se um sistema de telemetria capaz de se comunicar com os outros
                módulos do veículo por CAN, seguindo a filosofia geral de projeto, de modo que era
                possível transmitir em tempo real as informações de velocidade do veículo e das
                quatro rodas separadamente; temperatura dos motores, inversores e acumulador;
                corrente dos motores e acumulador; carga, tensão, temperatura e corrente das
                baterias; além de estado e erros do BMS, ECU e inversores aos boxes. Ademais, foi
                implementado conjuntamente um sistema de datalog local com o uso de cartão SD e
                microcontrolador, responsável, também, por exibir dados vitais do carro ao piloto por
                meio do painel no cockpit."
                textBaterias="O projeto do banco de baterias do NK-218 se propôs a tornar o veículo mais
                competitivo, com a definição de parâmetros mais precisos mediante análises
                computacionais e uma estratégia voltada para a performance. Também visou melhorar
                a segurança dos operadores e das células, assim como otimizar e facilitar a construção
                e a montagem. A configuração usada consistiu em 24 células em série (divididas em 2
                packs de 12 células) e 2 ramos em paralelo; a capacidade total de carga foi de 3168
                Wh. Ainda, tendo em vista suprir a necessidade de refrigeração, coolers foram
                adotados para arrefecimento forçado do banco."
                textBMS="No BMS 2018, a nova disposição dos sensores e dos módulos responsáveis por fazer as
                medições contribuiu para uma maior precisão de leitura, que, juntamente ao uso do
                protocolo ISOSPI e à implementação de watchdogs, assegurou a confiabilidade do
                sistema. Por fim, a estimativa de carga e o balanceamento de células foram feitos com
                algoritmos mais adequados à aplicação, proporcionando resultados mais precisos e um
                melhor desempenho das baterias."
                textPowertrain={[
                    <p className="text-mec" >
                        Após novas análises em 2018, com simulações que levaram em consideração o novo
                        grip e massa do veículo, manteve-se a redução de 9:1 em dois estágios, que se mostrou adequada mais uma vez por razões de custo e empacotamento. Com o
                        objetivo de reduzir a massa do sistema e otimizá-lo como um todo, novas geometrias
                        de peça foram desenhadas e um estudo de fadiga iniciado. Também, com o
                        desenvolvimento de tensionadores e a aquisição de um novo e mais adequado
                        rolamento para conexão, foi possível melhorar o tensionamento e o alinhamento das
                        correntes, resultando num sistema mais eficiente.
                    </p>,
                ]}
                textChassi={[
                    <p className="text-mec">
                        Em 2018, dimensionou-se uma carroceria mais enxuta, cerca de 10% mais leve, e fez-se uso de um modelo matemático para estimar um valor de rigidez torcional
                        apropriado. Com estudos mais aprofundados via método dos elementos finitos, foi
                        possível simular o valor de rigidez à torção e analisar os níveis de tensão sofridos
                        durante a operação do veículo. Realizaram-se, então, diversos testes e aquisições de
                        dados no intuito de validar as análises computacionais e assegurar o bom desempenho
                        da estrutura.
                    </p>
                ]}
                textAero="O projeto aerodinâmico do NK-218 foi feito em fluidodinâmica computacional e a sua
                validação realizada através de ensaios em túnel de vento e testes em pista. As análises
                de CFD foram feitas em Star CCM+ utilizando-se diversos modelos de turbulência, um
                para cada etapa de desenvolvimento, possibilitando uma análise mais ampla do
                comportamento do escoamento ao redor do veículo. As análises para determinar a
                rigidez da carenagem foram feitas nos softwares Ansys e Abaqus."
                textDirecao={[
                    <p className="text-mec" >
                        O projeto de direção do protótipo 2018 foi feito com dois objetivos principais: otimizar
                        a geometria de esterçamento, para garantir uma melhor utilização dos pneus, e
                        reduzir as folgas do sistema, para menor tempo de resposta e evitar desgaste
                        prematuro e sobrecarga de peças. Para o cumprimento do primeiro objetivo, foram
                        utilizados dados fornecidos pelo Milliken Research Associate através do TTC (Tire Test
                        Consortium) para obter os valores ótimos de slip angle para cada pneu na condição
                        para a qual o sistema foi projetado. Já na realização do segundo objetivo, focou-se em
                        garantir que a junta universal da coluna de direção trabalhasse da maneira adequada e
                        que todos os componentes fossem bem fixados no chassi.
                    </p>,
                ]}
                textSuspensao={[
                    <p className="text-mec">
                        Desenvolvido juntamente com o sistema de direção, o projeto de suspensão de 2018
                        teve por principal meta otimizar o uso dos pneus em relação ao primeiro protótipo e
                        conferir ajustabilidade ao sistema. Isso foi concretizado através de simulações
                        cinemáticas mais acuradas, mediante utilização de dados do TTC e do software Adams
                        Car, que resultaram na elaboração de uma geometria de suspensão mais adequada à
                        finalidade do protótipo. Além disso, a realização de revalvulação nos amortecedores
                        também conferiu aos pneus melhor interação com a pista. Por fim, o ganho em
                        ajustabilidade deveu-se ao desenvolvimento de barras estabilizadoras ajustáveis, que
                        aumentaram significativamente as possibilidades de setups dinâmicos.
                    </p>
                ]}
                textFreio={[
                    <p className="text-mec">
                        O projeto de freio do NK-218 teve o objetivo de garantir uma desaceleração eficaz ao
                        veículo levando em consideração uma boa ergonomia de pilotagem, visando potência,
                        precisão e conforto no acionamento. Assim como os sistemas de suspensão e direção
                        desse ano, a modelagem do sistema de freios foi realizada com o auxílio de dados de
                        pneu do FSAE TTC. Além disso, o pedal box, estrutura que compreende os pedais,
                        cilindros mestres e balance bar, foi projetado analisando-se parâmetros anatômicos,
                        como força do piloto, tamanho do pé e comprimento das pernas, para o adequado dimensionamento da alavanca de pedal.
                    </p>,
                ]}
                hashlinkTop="/PrototiposNK218#NK218-3"
            />
            <Footer />
        </body>
    );
}

export default withRouter(PaginaNK218);