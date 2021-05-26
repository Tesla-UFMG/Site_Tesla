import React from 'react';

import { withRouter } from 'react-router-dom'

import image_Kayran_2 from '../../assets/img/fotos/section2.jpg'
import image_Kayran_3 from '../../assets/img/fotos/Kayran2.jpg'

import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4Kayran'

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';
import Footer from '../../components/footer/footer';

function PaginaKayran() {
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
                Id="Kayran-1"
                carName="Kayran"
                colocacao="10° Lugar geral 2017"
                hashlinkBot="/prototipos-Kayran#Kayran-2"
            />
            <Section2 
                Id="Kayran-2"
                p1="Desenvolvido em 2017, foi o primeiro protótipo da equipe, colocando em prática o
                objetivo dos integrantes de desenvolver tecnologia nacional e transformar estudantes
                em profissionais capacitados. Embora pesado e de grandes dimensões, por possuir
                estrutura e componentes robustos, o Kayran era bastante confiável mecanicamente."
                p2="Foi pioneiro na competição FSAE Brasil ao utilizar a motorização dupla e o BMS de
                fabricação própria e, mesmo sem ter conseguido realizar as provas dinâmicas,
                alcançou décimo lugar na classificação geral."
                geral="10°"
                custos="10°"
                apresentacao="10°"
                design="8°"
                aceleracao="-"
                skid="-"
                autocross="-"
                enduro="-"
                hashlinkTop="/prototipos-Kayran#Kayran-1"
                hashlinkBot="/prototipos-Kayran#Kayran-3"
            />
            <Section3 
                Id="Kayran-3"
                detec={[
                    <div style={{display: "grid"}}>
                        <img src={image_Kayran_2} alt="detec" className="detec"></img>
                        <img src={image_Kayran_3} alt="detec" className="detec"></img>
                    </div>
                ]}
                motor="WEG VE-M01"
                potencia="54 cv"
                torque="8,2 kgf.m"
                tempo="8 segundos"
                velocidade="87 km/h"
                consumo="264 Wh/km"
                autonomia="24 km"
                bitolaD="1270 mm"
                bitolaT="1270 mm"
                eixos="1550 mm"
                massa="349 kg"
                massaD="49,9%"
                hashlinkTop="/prototipos-Kayran#Kayran-2"
            />
            <Section4
                Id="Kayran-4"
                textEletronica="O projeto eletrônico de 2017 consistiu em desenvolver um sistema de controle do conjunto trativo, sistema de gerenciamento de bateria e sistemas de segurança. Teve como funções processar a demanda de torque para cada roda; comandar os inversores e, por consequência, os motores; desenvolver os sistemas de segurança; fazer o sensoriamento dos pedais, volante e velocidade das rodas; gerenciar e proteger as baterias; entre outras funções. "
                textControle="A plataforma de microcontroladores selecionada foi a PIC® da Microchip, usada em todas as placas do carro, por questões de manutenção e troca de conhecimento entre os subsistemas; e a comunicação com os inversores feita com protocolo serial RS-485, utilizando par trançado e sinal diferencial. A ECU foi totalmente desenvolvida pela equipe, reduzindo custos e tornando o sistema mais adequado às necessidades do veículo. Ao mesmo tempo, por centralizar o tratamento de dados e ser capaz de se comunicar usando diferentes padrões de comunicação, o sistema tornou possível comandar outros tipos de inversores e drivers, permitindo seu uso em aplicações diversas. "
                textBaterias="O projeto do banco de baterias de 2017 foi conduzido com foco em proporcionar autonomia suficiente para o veículo completar a prova de Enduro (22 km) e em fornecer a corrente necessária para que a força trativa ultrapassasse ligeiramente o limite de aderência dos pneus, a fim de otimizar a aceleração do protótipo. Utilizaram-se células de LiFePO4 da A123 Systems, com capacidade de 20 Ah, na configuração 24s4p. "
                textBMS="Visando confiabilidade, total controle sobre o projeto e redução de custos, o BMS, sistema responsável por garantir o aproveitamento ótimo da energia e reduzir os riscos de danos às células, também foi totalmente desenvolvido pela equipe. Com foco na versatilidade e na fácil manutenção, o design foi pensado de maneira modular, de forma que o centro de tratamento de dados se conectasse a módulos de aquisição, permitindo sua aplicação em bancos de baterias de uma ampla gama de tecnologias e uma vasta possibilidade de configurações de células. A manutenção também era simples, uma vez que os módulos podiam ser facilmente substituídos. Além disso, o projeto apresentou alta competitividade de mercado, já que possuía as diversas funcionalidades de equivalentes comerciais a um custo reduzido. "
                textPowertrain={[
                    <div className="col">
                        <p className="text-mec" >
                        O powertrain 2017 contou com dupla motorização traseira independente com utilização de diferencial eletrônico. Foi elaborado com motores WEG e transmissão com foco na eficiência e bom empacotamento. Utilizou relação de redução de 9:1, para maior potencial de aceleração e, principalmente, para fazer com que o ponto de operação mais frequente na prova de Enduro também fosse o ponto de maior eficiência do motor. O sistema contou com dois estágios de redução, sendo composto por um redutor de engrenagens planetárias na saída do motor associado a um sistema pinhão, corrente e coroa. Por fim, semieixos homocinéticos foram empregados para transmitir o torque das coroas para as rodas.
                        </p>
                    </div>,
                ]}
                textChassi={[
                    <div className="col">
                        <p className="text-mec">
                        As principais demandas consideradas na escolha do tipo de chassi foram rigidez estrutural, facilidade de fabricação, peso e custo. O material selecionado foi o aço baixo carbono (SAE 1020), devido ao baixo custo e boa soldabilidade. Também, valorizaram-se escolhas de projeto que resultassem em alta rigidez torcional, o que foi posto em prática com a adoção de tubos de seção quadrada em determinadas regiões do veículo. Durante o processo de fabricação, utilizaram-se gabaritos de MDF, de elevado custo-benefício, a fim de garantir os ângulos e distâncias corretas da estrutura e permitir sua soldagem com mínima deformação.
                        </p>
                    </div>
                ]}
                textAero="Por não possuir pacote aerodinâmico, o foco do projeto da carenagem foi obter o menor arrasto aerodinâmico possível. Além disso, deu-se importância à facilidade de fabricação, à qualidade de acabamento e ao baixo custo. Foram realizadas simulações CFD no programa Ansys para a otimização da geometria do bico. Também foram desenvolvidos sidepods com o objetivo de direcionar o fluxo de ar para os motores e acumulador, melhorando o arrefecimento."
                textDirecao={[
                    <div className="col">
                        <p className="text-mec" >
                        O sistema de direção do protótipo Kayran foi projetado de forma a conciliar desempenho e ergonomia. Adotou-se uma razão de esterçamento de 5:1 e um volante de grande diâmetro, resultando em uma direção mais leve e ergonômica. Também foram empregados geometria Ackermann e acionamento do tipo pinhão-cremalheira de dentes retos.
                        </p>
                    </div>,
                ]}
                textSuspensao={[
                    <div className="col">
                        <p className="text-mec">
                        Visando maximizar o contato dos pneus com o solo, adotou-se uma suspensão do tipo duplo A, que proporciona ótima estabilidade e controle, além de grande ajustabilidade. Utilizando-se configuração pullrod na dianteira e pushrod na traseira, foi possível alcançar ótimo empacotamento e bom aproveitamento do curso do coilover.
                        </p>
                    </div>
                ]}
                textFreio={[
                    <div className="col">
                        <p className="text-mec">
                        Com foco na segurança do piloto e boa performance de frenagem, o protótipo 2017 foi equipado com freios a disco nas quatro rodas e pinças flutuantes, contando com duas linhas hidráulicas, divididas em dianteira e traseira. Os discos foram cortados a laser em aço SAE 1045 e o pedal de freio, cortado a água em alumínio. 
                        </p>
                    </div>,
                ]}
                hashlinkTop="/PrototiposNK319#NK319-3"
            />
            <Footer />
        </body>
    );
}

export default withRouter(PaginaKayran);