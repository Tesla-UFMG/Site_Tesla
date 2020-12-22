import React, { useState } from 'react';

import "./styles/loja.css";

import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Produto from './components/produto';

import shop_cart from '../../assets/icons/shop-cart.svg';
import camisa from '../../assets/img/fotos/camisa-loja.png';
import Item from './components/item';

function PaginaLoja() {
  const [option, setOption] = useState('todos');
  const [cartOpen, setCartOpen] = useState(false);

  function renderCart() {
    return (
      <div className="cart">
        <div className="items">
          <Item image={camisa} name="Linda brusinha" tamanho="P" quantidade="1" valor="40,00" />
          <Item image={camisa} name="Linda brusinha" tamanho="P" quantidade="1" valor="40,00" />
        </div>

        <div className="frete">
          <p className="text">Frete</p>
          <p className="valor-frete">R$ 9,00</p>
        </div>

        <div className="total">
          <p className="text">Total</p>
          <p className="valor-total">R$ 89,00</p>
        </div>

        <div className="finalizar-button">FINALIZAR PEDIDO</div>
      </div>
    )
  }

  return (
    <div id="loja-page">
      <NavBar color={'preto'} display={'preto'}/>

      <div className="body">
        <h1 className="title">LOJA</h1>

        <div className="line">
          <p className={"options " + (option === 'todos' && 'selected')} onClick={() => setOption('todos')}>todos</p>
          <p className={"options " + (option === 'roupas' && 'selected')} onClick={() => setOption('roupas')}>roupas</p>
          <p className={"options " + (option === 'acessorios' && 'selected')} onClick={() => setOption('acessorios')}>acessórios</p>
          <p className={"options " + (option === 'colecionaveis' && 'selected')} onClick={() => setOption('colecionaveis')}>colecionáveis</p>
          <img src={shop_cart} alt="Carrinho de compras" className="shop-cart" onClick={() => setCartOpen(!cartOpen)}/>
          {cartOpen && renderCart()}
        </div>

        <div className="produtos">
          <Produto image={camisa} name="Linda brusinha" value="R$ 40,00" desconto={true} oldValue="R$ 25,00" percentage="+ 15%" />
          <Produto image={camisa} name="Linda brusinha" value="R$ 40,00" />
          <Produto image={camisa} name="Linda brusinha" value="R$ 40,00" />
          <Produto image={camisa} name="Linda brusinha" value="R$ 40,00" />
          <Produto image={camisa} name="Linda brusinha" value="R$ 40,00" />
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default PaginaLoja;