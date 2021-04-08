import React, { useEffect, useState } from 'react'

import "./components/patrocinadores-page.css";

import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

import Manutencao from '../manutencao/paginaManutencao';

// import Patrocinador from './components/patrocinador';
// import Classificacao from './components/classificacao';

import listSponsors from '../../services/listSponsors';

function PaginaPatrocinadores() {
    const [sponsors, setSponsors] = useState([])

    useEffect(() => {
        listSponsors().then(res => {
            if (res.status === 200) {
                setSponsors(res.data)
            }
        })
    }, [])

    return(
        <div id="patrocinador-page">
            <NavBar color='preto' display='preto' />

            <Manutencao />

            {/* <div id="conteudo-patrocinador">
                <div className="body">
                    <Classificacao nome="Platina" />
                    {sponsors.map(sponsor => {
                        if (sponsor.type === 'platina') {
                            return <Patrocinador logo={sponsor.logo} descricao={sponsor.description}/>
                        }
                    })}
                    <hr></hr>
                    <Classificacao nome="Ouro" />
                    {sponsors.map(sponsor => {
                        if (sponsor.type === 'gold') {
                            return <Patrocinador logo={sponsor.logo} descricao={sponsor.description}/>
                        }
                    })}
                    <hr></hr>
                    <Classificacao nome="Prata" />
                    {sponsors.map(sponsor => {
                        if (sponsor.type === 'silver') {
                            return <Patrocinador logo={sponsor.logo} descricao={sponsor.description}/>
                        }
                    })}
                    <hr></hr>
                    <Classificacao nome="Bronze" />
                    {sponsors.map(sponsor => {
                        if (sponsor.type === 'bronze') {
                            return <Patrocinador logo={sponsor.logo} descricao={sponsor.description}/>
                        }
                    })}
                </div>
            </div> */}

            <Footer />
        </div>
    )
}

export default PaginaPatrocinadores;