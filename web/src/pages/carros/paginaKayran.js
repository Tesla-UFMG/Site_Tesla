import React from 'react';

import { withRouter } from 'react-router-dom'

import image_Kayran_2 from '../../assets/img/fotos/section2.jpg'
import image_Kayran_3 from '../../assets/img/fotos/Kayran2.jpg'

import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'

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
                hashlinkBot="/PrototiposKayran#Kayran-2"
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
                hashlinkTop="/PrototiposKayran#Kayran-1"
                hashlinkBot="/PrototiposKayran#Kayran-3"
            />
            <Section3 
                Id="Kayran-3"
                detec={[
                    <div style={{display: "grid"}}>
                        <img src={image_Kayran_2} alt="detec" className="detec"></img>
                        <img src={image_Kayran_3} alt="detec" className="detec"></img>
                    </div>
                ]}
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
                hashlinkTop="/PrototiposKayran#Kayran-2"
            />
            <Footer />
        </body>
    );
}

export default withRouter(PaginaKayran);