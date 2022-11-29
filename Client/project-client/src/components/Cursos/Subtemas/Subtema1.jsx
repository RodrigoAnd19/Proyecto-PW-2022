import { React, useState } from "react";
import './Subtema1.css';
import flecha from '../../../assets/images/back-arrow.png';

const Subtema = () => {

    return (
        <body className="subtema-container">
            <div className="subtema-view">  

                <div className="container">
                    <img className="arrow-img" src={flecha} />
                    <h1 className="subtema-title">Python</h1>
                </div>

                <p className="subtema-text" id="texto">Python es un lenguaje de programación multiplataforma y de código abierto que puede utilizarse tanto para desarrollo web, creación de software y procesamiento de datos, entre muchos otros propósitos. Esta versatilidad y facilidad para aprenderlo (es ampliamente considerado el lenguaje más sencillo de aprender) lo han convertido en el lenguaje de programación más popular del mundo, según el índice PYPL.

                Fue lanzado por primera vez en 1991 por Guido van Rossum y sigue siendo desarrollado hoy en día por la Python Software Foundation.</p>
                <p className="subtema-text2" id="texto"> ¿Por qué aprender este lenguaje? </p>

                <p className="subtema-text" id="texto">Desde la lógica del backend en una plataforma, hasta hacking ético, ciencia de datos e inteligencia artificial. Python está presente y es usado en muchas áreas de la tecnología. Conoce las expresiones regulares en Python.

                Hoy en día este lenguaje está siendo muy demandado por las grandes empresas y las startups. Además de existir muchas vacantes, los salarios pagados para los desarrolladores y las desarrolladoras de este lenguaje son muy altos.</p>
            </div>
        </body>
    );
}

export default Subtema;