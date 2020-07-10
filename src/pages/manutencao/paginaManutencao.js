import React from 'react';

import './styles/paginaManutencao.css'

import img_tesminions from '../../assets/img/fotos/Minions.svg'

class Manutencao extends React.Component {
    render() {
        return (
            <div id="manutencao" className="container-fluid px-0">
                <div className="row">
                    <img src={img_tesminions} className="img-fluid"></img>
                    <h1>Oops! Esta página está em construção!</h1>
                    <p>
                        Nossa equipe de Tesminions está trabalhando duro para 
                        aumentar o conteúdo desse site! Em breve teremos novidades!
                    </p>
                </div>
            </div>
        );  
    }
}

export default Manutencao;