import React from 'react'

import { Switch, Route } from 'react-router-dom'

import PaginaInicial from './pages/inicio/paginaInicial'
import PaginaHistoria from './pages/historia/paginaHistoria'
import PaginaNK319 from './pages/carros/paginaNK319'
import PaginaNK218 from './pages/carros/paginaNK218'
import PaginaKayran from './pages/carros/paginaKayran'
import PaginaEquipe from './pages/equipe/paginaEquipe'
import PaginaPatrocinadores from './pages/patrocinadores/patrocinadores'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={PaginaInicial} />
            <Route exact path="/Historia" component={PaginaHistoria} />
            <Route exact path="/PrototiposNK319" component={PaginaNK319} />
            <Route exact path="/PrototiposNK218" component={PaginaNK218} />
            <Route exact path="/PrototiposKayran" component={PaginaKayran} />
            <Route exact path="/Equipe" component={PaginaEquipe} />
            <Route exact path="/Patrocinadores" component={PaginaPatrocinadores} />
        </Switch>
    )
}