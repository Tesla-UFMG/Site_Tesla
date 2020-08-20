import React from 'react';

import Rotas from './rotas'
import Footer from './components/footer/footer'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;