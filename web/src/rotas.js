import React from 'react'

import { Switch, Route } from 'react-router-dom'

import PaginaInicial from './pages/inicio/paginaInicial'
import PaginaHistoria from './pages/historia/paginaHistoria'
import PaginaNK319 from './pages/carros/paginaNK319'
import PaginaNK218 from './pages/carros/paginaNK218'
import PaginaKayran from './pages/carros/paginaKayran'
import PaginaEquipe from './pages/equipe/paginaEquipe'
import PaginaPatrocinadores from './pages/patrocinadores/patrocinadores'
import PaginaCadastro from './pages/forms/paginaCadastro'
import PaginaSenha from './pages/forms/paginaSenha'
import PaginaFimCadastro from './pages/forms/paginaFimCadastro'
import PaginaTexto from './pages/blog/texto/texto'
import PaginaFeed from './pages/blog/feed/feed'
import PaginaRollouts from './pages/rollouts/rollouts'
import PaginaLoja from './pages/loja/loja'
import PaginaGaleria from './pages/galeria/galeria'
import PaginaGaleriaAno from './pages/galeria/galeriaAno'
import PaginaCompeticao from './pages/competicao/paginaCompeticao'
import PaginaSugestoes from './pages/sugestoes/paginaSugestoes'
import PaginaPrototipos from './pages/prototipos/paginaPrototipos'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={PaginaInicial} />
            <Route exact path="/historia" component={PaginaHistoria} />
            <Route exact path="/prototipos-NK319" component={PaginaNK319} />
            <Route exact path="/prototipos-NK218" component={PaginaNK218} />
            <Route exact path="/prototipos-kayran" component={PaginaKayran} />
            <Route exact path="/equipe" component={PaginaEquipe} />
            <Route exact path="/patrocinadores" component={PaginaPatrocinadores} />
            <Route exact path="/cadastrar" component={PaginaCadastro} />
            <Route exact path="/cadastro-senha" component={PaginaSenha} />
            <Route exact path="/fim-cadastro" component={PaginaFimCadastro} />
            <Route exact path="/texto-blog" component={PaginaTexto} />
            <Route exact path="/feed-blog" component={PaginaFeed} />
            <Route exact path="/rollouts" component={PaginaRollouts} />
            <Route exact path="/loja" component={PaginaLoja} />
            <Route exact path="/galeria" component={PaginaGaleria} />
            <Route exact path="/competicao" component={PaginaCompeticao} />
            <Route exact path="/prototipos" component={PaginaPrototipos} />
            <Route exact path="/sugestoes" component={PaginaSugestoes} />
            <Route exact path="/galeria/:ano" component={PaginaGaleriaAno} />
        </Switch>
    )
}