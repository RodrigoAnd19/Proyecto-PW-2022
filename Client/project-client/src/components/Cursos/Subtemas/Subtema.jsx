import { React, useState } from "react";
import './Subtema.css';
import flecha from '../../../assets/images/back-arrow.png';
import play from '../../../assets/images/play.png';

import { useSpeechSynthesis } from 'react-speech-kit';

// .droparea en vez de .document

const Subtema = () => {

    return (
        <body className="subtema-container">
            <div className="subtema-view">  

                <div className="container">
                    <img className="arrow-img" src={flecha} />
                    <h1 className="subtema-title">JavaScript</h1>
                </div>

                <p className="subtema-text" id="texto">JavaScript es el lenguaje de programación que debes usar para añadir características interactivas a tu sitio web, (por ejemplo, juegos, eventos que ocurren cuando los botones son presionados o los datos son introducidos en los formularios, efectos de estilo dinámicos, animación, y mucho más). Este artículo te ayudará a comenzar con este lenguaje extraordinario y te dará una idea de qué es posible hacer con él.</p>
                <p className="subtema-text" id="texto"> Puedes hacer casi cualquier cosa con JavaScript. Puedes empezar con pequeñas cosas como carruseles, galerías de imágenes, diseños fluctuantes, y respuestas a las pulsaciones de botones. Con más experiencia, serás capaz de crear juegos, animaciones 2D y gráficos 3D, aplicaciones integradas basadas en bases de datos ¡y mucho más! </p>

                <p className="subtema-text" id="texto">JavaScript por sí solo es bastante compacto aunque muy flexible, y los desarrolladores han escrito gran cantidad de herramientas encima del núcleo del lenguaje JavaScript, desbloqueando una gran cantidad de funcionalidad adicional con un mínimo esfuerzo.</p>
            </div>
        </body>
    );
}

export default Subtema;