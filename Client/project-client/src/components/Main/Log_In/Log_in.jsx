import React from "react";
import './Log_in.css';
import btn_img from '../../../assets/images/Return.png';
import btn_img_hover from '../../../assets/images/back-hover.png';
import logo from '../../../assets/images/Logo-alt.png';

import { useNavigate } from 'react-router-dom';

const Log_In = () => {

    const navigate = useNavigate();

    const ocultar = () => {
        document.getElementById('header').style.display = '';
    }

    const execute = () => {
        const change_lgn = document.getElementById('back');
        
        change_lgn.addEventListener('click', ocultar);
        change_lgn.addEventListener('click', () => navigate("/main") );
    }

    return (
    <body className="main-alt-cont">
        <div className="log_in-header">
        
            <button className="back-button" id="back" onMouseEnter={ execute }>
                <img className="imagenes" src={btn_img} alt="Imagen de flecha hacia atras que implica retornar a la pagina anterior."/>
            </button>

            <figure className="img-container">
                <img className="imagenes" src= {logo} alt="Logo de la pagina, que significa Hellen Keller Academy en braile."/>
            </figure>
        </div>

        <div className="log_in-data">
            <h1 className="tittle">
                Log In
            </h1>
            <div className="user-data">
                <h3 className="info-tittle">
                    Usuario
                </h3>

                <input className="place-holder-info" placeholder="Ingrese su usuario">

                </input>

                <h3 className="info-tittle">
                    Contraseña
                </h3>

                <input className="place-holder-info" type="password" placeholder="Ingrese su contraseña">

                </input>

                <button className="log_in-button">
                    Log In
                </button>
                
                <a>¿Olvidaste tu usuario o contraseña?</a>
            </div>
        </div>
    </body>
    );
}

export default Log_In;
