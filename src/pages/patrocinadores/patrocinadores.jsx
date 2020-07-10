import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'


import Patrocinador from './components/patrocinador'
import Classificacao from './components/classificacao'

class PaginaPatrocinadores extends React.Component {
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <Classificacao nome="platina"></Classificacao>
                <Patrocinador logo = "C:\Site-Tesla\Site-Tesla\src\assets\img\logos" descricao = "O google é uma empresa ..."></Patrocinador>
                <hr></hr>
                <Classificacao nome="ouro"></Classificacao>
                <hr></hr>
                <Classificacao nome="prata"></Classificacao>
                <hr></hr>
                <Classificacao nome="bronze"></Classificacao>
                <hr></hr>
            </div>
        )
    }
}

export default withRouter(PaginaPatrocinadores);