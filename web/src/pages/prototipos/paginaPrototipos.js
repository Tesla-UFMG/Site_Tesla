import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

import './styles/paginaPrototipos.css'

import prototipo_2018 from '../../assets/img/fotos/prototipos/NK218.png';
import prototipo_2019 from '../../assets/img/fotos/prototipos/NK319.png';
import prototipo_2017 from '../../assets/img/fotos/prototipos/kayran.png';
import prototipo_2021 from '../../assets/img/fotos/prototipos/2021.png';

import clock from '../../assets/icons/clock.svg';
import engrenagem from '../../assets/icons/cogwheel.svg';
import raio from '../../assets/icons/flash.svg';
import arrow from '../../assets/icons/right-arrow.svg';

function PaginaPrototipos() {
    const history = useHistory();
    
    const years = [
        { year: '' },
        { year: '' },
        { year: '2017', car_name: 'Kayran', car_img: prototipo_2017, desc: 'Desenvolvido em 2017, foi o primeiro protótipo da equipe, colocando em prática o objetivo dos integrantes de desenvolver tecnologia nacional e transformar estudantes em profissionais capacitados.', link: '/prototipos-kayran'},
        { year: '2018', car_name: 'NK218', car_img: prototipo_2018, desc: 'Coroado com o segundo lugar geral da competição, o modelo conta com diversos prêmios na FSAE 2018.', link: '/prototipos-NK218'},
        { year: '2019', car_name: 'NK319', car_img: prototipo_2019, desc: 'O grande empenho da equipe durante o ano levou ao primeiro lugar na prova de projeto.', link: '/prototipos-NK319'},
        { year: '2020', car_name: 'NK420', car_img: prototipo_2021, desc: 'Carro em desenvolvimento.', link: '/prototipos-NK319'},
        { year: '2021' },
        { year: '2022' },
    ]

    const car_infos = [
        {},
        {},
        { relogio: '4,6s', engrenagem: '350km/h', raio: '25kW' },
        { relogio: '4,5s', engrenagem: '340km/h', raio: '24kW' },
        { relogio: '4,4s', engrenagem: '330km/h', raio: '23kW' },
        { relogio: '-', engrenagem: '-', raio: '-' },
    ]

    const [yearsIndex, setYearsIndex] = useState(4);

    return (
        <div id="pagina-prototipos">
            <NavBar color={'preto'} display={'preto'} />

            <div className="conteudo-prototipos">
                <h1 className="title">NOSSAS MÁQUINAS</h1>
                <div className="line"></div>

                <div className="years-wrapper">
                    <div className="arrows-wrapper">
                        <img src={arrow} alt="Seta para esquerda" onClick={() => yearsIndex > 2 && setYearsIndex(yearsIndex - 1)}/>
                        <img src={arrow} alt="Seta para direita"  onClick={() => yearsIndex < 5 && setYearsIndex(yearsIndex + 1)}/>
                    </div>
                    <div className="gradient left"></div>
                    {years.map((year, index) => {
                        if (index >= (yearsIndex - 2) && index <= (yearsIndex + 2))
                            return <p key={index} className={"year " + (index === yearsIndex && 'center')}>{year.year}</p>
                        else
                            return null
                    })}
                    <div className="gradient right"></div>
                </div>

                <div className="car-wrapper">
                    <div>
                        <div>
                            <p className="car-name">{years[yearsIndex].car_name}</p>
                            <div className="ver-mais" onClick={() => history.push(years[yearsIndex].link)}>VER MAIS</div>
                        </div>
                        <p className="description">
                            {years[yearsIndex].desc}
                        </p>
                    </div>
                    <img className="car-img" src={years[yearsIndex].car_img} alt="NK420"/>
                </div>

                <div className="info-cards">
                    <div className="card-info">
                        <img src={clock} alt="Relógio"/>
                        <div>
                            <p className="info">0-100 Km/h</p>
                            <p className="data">{car_infos[yearsIndex].relogio}</p>
                        </div>
                    </div>
                    <div className="card-info">
                        <img src={engrenagem} alt="Engrenagem"/>
                        <div>
                            <p className="info">Vel. Máx.</p>
                            <p className="data">{car_infos[yearsIndex].engrenagem}</p>
                        </div>
                    </div>
                    <div className="card-info">
                        <img src={raio} alt="Raio"/>
                        <div>
                            <p className="info">Potência</p>
                            <p className="data">{car_infos[yearsIndex].raio}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PaginaPrototipos;