import React from 'react';

import NavBar from './components/navbar/navbar'
import Rotas from './rotas'
import Footer from './components/footer/footer'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;