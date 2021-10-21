import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "./styles/galeriaAno.css";

import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

// import listPhotosByYear from '../../services/listPhotosByYear';

import { fotos_2017, fotos_2018, fotos_2019 } from '../../provider/galeriaProvider';

function PaginaGaleriaAno() {
  const { ano } = useParams();

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    // listPhotosByYear(ano).then(res => {
    //   console.log(res)
    //   if (res.status === 200) {
    //     setPhotos(res.data)
    //   }
    // })
    if (ano === '2017') {
      setPhotos(fotos_2017)
    } else if (ano === '2018') {
      setPhotos(fotos_2018)
    } else if (ano === '2019') {
      setPhotos(fotos_2019)
    }
  }, [ano])

  return (
    <div id="galeriaAno-page">
      <NavBar color={'preto'} display={'preto'}/>

      <div id="conteudo-galeriaAno">
        <div className="body">
          <h1 className="title">{ano}</h1>
          <div className="line"></div>

          {photos.length > 0 
            ? <div className="fotos">
                {photos.map((photo, index) => {
                  return <div key={index} className="foto">
                    <img src={photo.img} alt={'Foto ' + index + ' de ' + ano}/>
                  </div>
                })}
              </div>
            : <div className="fotos">
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
          }

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PaginaGaleriaAno;