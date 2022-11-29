import React from "react";
import './Main.css';
import image from '../../assets/images/woman.png';

import { useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate();

    const ocultarMain = () => {
        document.getElementById('main').style.display = 'none';
    }

    const execute = () => {
        const change_curse = document.getElementById('cursos2');

        // Para boton CURSOS
        change_curse.addEventListener('click', ocultarMain);
        change_curse.addEventListener('click', () => navigate("/cursos"));
    }

    return (
        <body className="main-container" id="main" >
            <div className="main-view">
                <div className="important-div-x">
                    <div>
                        <h1 className="master"> Master </h1>
                        <h2 className="class"> Class </h2>
                    </div>

                    <button className="cursos-button" id="cursos2" onMouseEnter={ execute } tabIndex={1}>
                        Cursos
                    </button>
                    <p>
                        Navega a travez de nuestros cursos
                    </p>
                </div>

                <figure className="figure">
                    <img className="img" src={image} alt="Imagen de una mujer con discapacidad visual acompañada de un perro." />
                </figure>
            </div>
        </body>
    );
}

export default Main;
