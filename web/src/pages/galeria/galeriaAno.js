import React from 'react';
import { useParams } from 'react-router-dom';

import "./styles/galeriaAno.css";

import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function PaginaGaleriaAno() {
  const { ano } = useParams();

  return (
    <div id="galeriaAno-page">
      <NavBar color={'preto'} display={'preto'}/>

      <div className="body">
        <h1 className="title">{ano}</h1>
        <div className="line"></div>

        <div className="fotos">
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
          <div className="foto"></div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default PaginaGaleriaAno;