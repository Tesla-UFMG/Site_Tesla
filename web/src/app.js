import React from 'react';

import Rotas from './rotas'
// import Footer from './components/footer/footer'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Rotas />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;