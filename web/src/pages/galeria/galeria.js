import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles/galeria.css";

import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function PaginaGaleria() {
  const history = useHistory();

  const loadPageGaleriaAno = (ano) => {
    history.push({
      pathname: `/galeria/${ano}`,
      state: { ano }
    });
  };

  return (
      <div id="galeria-page">
        <NavBar color={'preto'} display={'preto'}/>

        <div id="conteudo-galeria">
          <div className="body">
            <h1 className="title">GALERIA</h1>
            <div className="line"></div>

            <div className="year y-2020 image-row" onClick={() => loadPageGaleriaAno('2020')} >
              <p>2020</p>
            </div>
            <div className="image-row">
              <div className="image-column">
                <div className="year y-2017" onClick={() => loadPageGaleriaAno('2017')} >
                  <p>2017</p>
                </div>
                <div className="year y-2019" onClick={() => loadPageGaleriaAno('2019')} >
                  <p>2019</p>
                </div>
              </div>
              <div className="year y-2018" onClick={() => loadPageGaleriaAno('2018')} >
                <p>2018</p>
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </div>
  )
}

export default PaginaGaleria;