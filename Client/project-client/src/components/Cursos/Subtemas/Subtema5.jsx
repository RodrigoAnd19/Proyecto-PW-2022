import { React, useState } from "react";
import './Subtema5.css';
import flecha from '../../../assets/images/back-arrow.png';

const Subtema = () => {

    return (
        <body className="subtema-container">
            <div className="subtema-view">  

                <div className="container">
                    <img className="arrow-img" src={flecha} />
                    <h1 className="subtema-title">Ebola</h1>
                </div>

                <p className="subtema-text" id="texto">La enfermedad por el virus del Ébola es una enfermedad infecciosa grave que se propaga entre humanos por transmisión de persona a persona. La infección se produce por contacto directo o indirecto con la sangre u otros líquidos o secreciones corporales (heces, orina, saliva, semen) de personas infectadas, solo cuando éstas presentan síntomas. El virus del Ébola no se transmite a través del aire. Aunque la enfermedad suele tener una letalidad alta, en el actual brote de Ébola la tasa se ubica entre el 55% y 60%.</p>

                <p className="subtema-text" id="texto">Desde que se detectó por primera vez en 1976 en una aldea cercana al río Ébola, en la República Democrática del Congo (antigua Zaire), los brotes de Ébola se han registrado en distintas zonas de África.</p>
            </div>
        </body>
    );
}

export default Subtema;