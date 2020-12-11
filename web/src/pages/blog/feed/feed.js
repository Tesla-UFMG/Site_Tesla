import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import "./styles/feed.css";

import NavBar from '../../../components/navbar/navbar';
import Footer from '../../../components/footer/footer';

import lupa_icon from '../../../assets/icons/lupa.svg';
import battery_icon from '../../../assets/icons/battery.svg';
import capa_text from '../../../assets/img/fotos/texto/porsche.png';

function PaginaFeed() {
  const history = useHistory();

  const [inputSearchActive, setInputSearchActive] = useState(false);
  const [optionSelected, setOptionSelected] = useState('todos');

  return (
    <div id="feed-page">
      <NavBar color={'preto'} display={'preto'}/>

      <div className="body">
        <div className="title">
          <p>BLOG</p>
        </div>

        <div className="content">

          <div className="options-row">
            <div>
              <input className={inputSearchActive ? 'active' : 'noActive'} type="text"/>
              <img src={lupa_icon} alt="Pesquisar" onClick={() => setInputSearchActive(true)}/>
            </div>
            <p className={"option " + (optionSelected === 'todos' ? 'selected' : 'notSelected')} onClick={() => setOptionSelected('todos')}>todos</p>
            <p className={"option " + (optionSelected === 'curiosidades' ? 'selected' : 'notSelected')} onClick={() => setOptionSelected('curiosidades')}>curiosidades</p>
            <p className={"option " + (optionSelected === 'tecnico' ? 'selected' : 'notSelected')} onClick={() => setOptionSelected('tecnico')}>técnico</p>
            <p className={"option " + (optionSelected === 'noticias' ? 'selected' : 'notSelected')} onClick={() => setOptionSelected('noticias')}>notícias</p>
            <p className={"option " + (optionSelected === 'videos' ? 'selected' : 'notSelected')} onClick={() => setOptionSelected('videos')}>vídeos</p>
          </div>

          <div className="texts-wrapper">
            <div className="text">
              <img className="imagem-capa" src={capa_text} alt="Imagem de capa"/>
              <div>
                <p className="text-title">A história do carro elétrico</p>
                <p className="autor">Marcus Vinícius</p>
                <p className="data">24 de Setembro, 2020</p>
                <p className="descricao">
                  Aqui você aprenderá sobre as fases da curva, força e aceleração laterais e momento de yaw. Este é um artigo do nível intermediário, o que significa que ele 
                  aborda conceitos de engenharia um pouco mais avançados, para você que busca um conhecimento mais profundo sobre o tema sem necessariamente um estudo tão aprofundado. Aproveite ;D
                </p>
                <p className="continuar" onClick={() => history.push('/texto-blog')}>Continuar lendo</p>

                <img className="type-text" src={battery_icon} alt="Bateria"/>
              </div>
            </div>
            <div className="text">
              <img className="imagem-capa" src={capa_text} alt="Imagem de capa"/>
              <div>
                <p className="text-title">A história do carro elétrico</p>
                <p className="autor">Marcus Vinícius</p>
                <p className="data">24 de Setembro, 2020</p>
                <p className="descricao">
                  Aqui você aprenderá sobre as fases da curva, força e aceleração laterais e momento de yaw. Este é um artigo do nível intermediário, o que significa que ele 
                  aborda conceitos de engenharia um pouco mais avançados, para você que busca um conhecimento mais profundo sobre o tema sem necessariamente um estudo tão aprofundado. Aproveite ;D
                </p>
                <p className="continuar" onClick={() => history.push('/texto-blog')}>Continuar lendo</p>

                <img className="type-text" src={battery_icon} alt="Bateria"/>
              </div>
            </div>
            <div className="text">
              <img className="imagem-capa" src={capa_text} alt="Imagem de capa"/>
              <div>
                <p className="text-title">A história do carro elétrico</p>
                <p className="autor">Marcus Vinícius</p>
                <p className="data">24 de Setembro, 2020</p>
                <p className="descricao">
                  Aqui você aprenderá sobre as fases da curva, força e aceleração laterais e momento de yaw. Este é um artigo do nível intermediário, o que significa que ele 
                  aborda conceitos de engenharia um pouco mais avançados, para você que busca um conhecimento mais profundo sobre o tema sem necessariamente um estudo tão aprofundado. Aproveite ;D
                </p>
                <p className="continuar" onClick={() => history.push('/texto-blog')}>Continuar lendo</p>

                <img className="type-text" src={battery_icon} alt="Bateria"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PaginaFeed;