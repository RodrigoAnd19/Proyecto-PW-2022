import React from "react";
import './Tutores.css';
import Image from '../../assets/images/tutor.png';

import { useNavigate } from 'react-router-dom';

const Tutores = () => {

    const navigate = useNavigate();

    const ocultar = () => {
        document.getElementById('header').style.display = 'none';
    }

    const execute = () => {
        const change_tutores = document.getElementById('aplica');
        
        change_tutores.addEventListener('click', ocultar);
        change_tutores.addEventListener('click', () => navigate("/info") );
    }

    return (
        <body className="tutores-container" >
            <div className="tutores-view">
                <figure className="figure">
                    <img className="img" src={ Image } />
                </figure>

                <div className="important-div">
                    <div>
                        <h1 className="question"> ¿Quieres ser un </h1>
                        <h2 className="tutor"> TUTOR? </h2>
                    </div>
                    <button className="aplica-button" id="aplica" onMouseEnter={ execute } >
                        Aplica
                    </button>
                    <p>
                        ¡Envianos tu perfil!
                    </p>
                </div>
            </div>
        </body>
    );
}

export default Tutores;