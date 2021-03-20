import React from 'react'

import './styles/footer.css'

import { Link } from 'react-router-dom'

import logo_footer from '../../assets/img/logos/Logo p fundo preto.svg'

function Footer() {
    return(
        <footer className="container-fluid px-0 footer">

            <div className="container-fluid text-center text-md-left info">

                <div className="row">

                    <div className="col-md-4 mt-md-0 mt-3 col-imagem">
                        <img src={logo_footer} alt="Logo Tesla" className="col img-fluid"></img>
                    </div>

                    <div className="col-md-4 opcoes">
                        <div className="col mb-md-0 mb-3 paths">

                            <div>
                                <h5 className="text-uppercase">Explorar</h5>

                                <ul className="list-unstyled c1">
                                    <li>
                                        <Link to="/historia">História</Link>
                                    </li>
                                    <li>
                                        <Link to="/prototipos-NK319">Protótipos</Link>
                                    </li>
                                    <li>
                                        <Link to="/equipe">Equipe</Link>
                                    </li>
                                    <li>
                                        <Link to="/patrocinadores">Parceiros</Link>
                                    </li>
                                    <li>
                                        <Link to="/sugestoes">Sugestões</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="list-unstyled c2">
                                    <li>
                                        <Link to="/feed-blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Competição</Link>
                                    </li>
                                    <li>
                                        <Link to="/galeria">Galeria</Link>
                                    </li>
                                    <li>
                                        <Link to="/rollouts">Rollouts</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col mb-md-0 mb-3 social">

                            <h5 className="text-uppercase">Social</h5>

                            <ul className="list-unstyled c3">
                                <li>
                                    <Link to="/">Facebook</Link>
                                </li>
                                <li>
                                    <Link to="/">Instagram</Link>
                                </li>
                                <li>
                                    <Link to="/">Youtube</Link>
                                </li>
                                <li>
                                    <Link to="/">Contato</Link>
                                </li>
                                <li>
                                    <Link to="/">#GoTesla</Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-md-4 info-name">
                        <h4>FÓRMULA TESLA UFMG</h4>
                        <p>Av. Pres. Antônio Carlos 6627 CPH <br></br> Pampulha, Belo Horizonte - MG</p>
                    </div>

                </div>

            </div>

            <div className="footer-copyright text-center py-2">© 2020 Copyright:
                <Link to="/"> Fórmula tesla UFMG</Link>
            </div>

        </footer>
    );
}

export default Footer;