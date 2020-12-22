import React from 'react';

import "./styles/rollouts.css";

import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function PaginaRollouts() {
  return (
    <div id="rollouts-page">
      <NavBar color={'preto'} display={'preto'}/>

      <div className="body">
        <h1 className="title">ROLLOUTS</h1>
        <div className="line"></div>

        <p className="car-name">NK319</p>
        <p className="part">Parte 1:</p>
        <div className="embed">
          <iframe src="https://www.youtube.com/embed/rWRNxqqoXl4" title="Video 1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <p className="part">Parte 2:</p>
        <div className="embed">
          <iframe src="https://www.youtube.com/embed/rWRNxqqoXl4" title="Video 1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default PaginaRollouts;