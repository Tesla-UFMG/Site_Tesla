import React from 'react';

import NavBar from '../../components/navbar/navbar';
import useNavBar from '../../hooks/useNavBar';
import Footer from '../../components/footer/footer';

import { withRouter } from 'react-router-dom'

import './styles/paginaPrototipos.css'

function PaginaPrototipos() {
    const [handleScroll] = useNavBar();
    
    var last_known_scroll_position = 0;
    var ticking = false;

    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll(last_known_scroll_position, false);
                ticking = false;
            });

            ticking = true;
        }
    });

    return (
        <div id="paginaPrototipos">
            <NavBar color={'preto'} display={'preto'} />

            <br></br>
            <br></br>
            <br></br>

            <Footer />

        </div>
    );
}

export default withRouter(PaginaPrototipos);