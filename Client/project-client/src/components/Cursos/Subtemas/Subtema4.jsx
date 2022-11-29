import { React, useState } from "react";
import './Subtema4.css';
import flecha from '../../../assets/images/back-arrow.png';

const Subtema = () => {

    return (
        <body className="subtema-container">
            <div className="subtema-view">  

                <div className="container">
                    <img className="arrow-img" src={flecha} />
                    <h1 className="subtema-title">Covid 19</h1>
                </div>

                <p className="subtema-text" id="texto">La enfermedad por coronavirus (COVID‑19) es una enfermedad infecciosa provocada por el virus SARS-CoV-2.
                La mayoría de las personas que padecen COVID‑19 sufren síntomas de intensidad leve a moderada y se recuperan sin necesidad de tratamientos especiales. Sin embargo, algunas personas desarrollan casos graves y necesitan atención médica.</p>

                <h3 className="subtema-text2" id="texto">¿Como se propaga?</h3>

                <p className="subtema-text" id="texto">El virus puede propagarse desde la boca o la nariz de una persona infectada en forma de pequeñas partículas líquidas que expulsa cuando tose, estornuda, habla, canta o respira. Estas partículas pueden ser desde pequeños aerosoles hasta gotitas respiratorias más grandes.
                Puedes contagiarte de COVID‑19 si respiras cerca de una persona infectada o si tocas una superficie contaminada y, seguidamente, te tocas los ojos, la nariz o la boca. El virus se propaga más fácilmente en espacios interiores o en aglomeraciones de personas.</p>
            </div>
        </body>
    );
}

export default Subtema;