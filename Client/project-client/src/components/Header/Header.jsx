import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.png';

import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const ocultar = () => {
        document.getElementById('header').style.display = 'none';
        document.getElementById('main').style.display = 'none';
    }

    const ocultarMain = () => {
        document.getElementById('main').style.display = 'none';
    }

    const execute = () => {
        const change_home = document.getElementById('home');
        const change_lgn = document.getElementById('lgn');
        const change_curse = document.getElementById('cursos');
        const change_tutores = document.getElementById('tutores');
        const change_faq = document.getElementById('faq');
        
        change_home.addEventListener('click', ocultarMain);
        change_home.addEventListener('click', () => navigate("/main"));

        // Para boton LOGIN.
        change_lgn.addEventListener('click', ocultar);
        change_lgn.addEventListener('click', () => navigate("/login"));

        // Para boton CURSOS.
        change_curse.addEventListener('click', ocultarMain);
        change_curse.addEventListener('click', () => navigate("/cursos"));

        // Para boton TUTORES.
        change_tutores.addEventListener('click', ocultarMain);
        change_tutores.addEventListener('click', () => navigate("/tutores"));

        // Para boton FAQ.
        change_faq.addEventListener('click', ocultarMain);
        change_faq.addEventListener('click', () => navigate("/faq"));
    }

    return(
        <header className='header' id='header'>
            <div className='div'>
                <figure className='image-container'>
                    <img className='image' src= {logo} alt = "Titulo de la pagina que es Hellen Keller Academy en braile" />
                </figure>

                <div className='buttons'>
                    <button className='specific-button' id='home' onMouseEnter={ execute } >
                        Inicio
                    </button>

                    <button className='specific-button' id='cursos' onMouseEnter={ execute }>
                        Cursos
                    </button>

                    <button className='specific-button' id='lgn' onMouseEnter={ execute } >
                        Log in
                    </button>

                    <button className='specific-button' id='tutores' onMouseEnter={ execute } >
                        Tutores
                    </button>

                    <button className='specific-button' id='faq' onMouseEnter={ execute }>
                        FAQ
                    </button>
                </div>
            </div>
        </header>
    );
}


export default Header;