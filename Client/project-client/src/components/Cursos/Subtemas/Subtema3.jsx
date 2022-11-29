import { React, useState } from "react";
import './Subtema3.css';
import flecha from '../../../assets/images/back-arrow.png';

const Subtema = () => {

    return (
        <body className="subtema-container">
            <div className="subtema-view">  

                <div className="container">
                    <img className="arrow-img" src={flecha} />
                    <h1 className="subtema-title">Mongo DB</h1>
                </div>

                <p className="subtema-text" id="texto">JDentro de las bases de datos NoSQL, probablemente una de las más famosas sea MongoDB. Con un concepto muy diferente al de las bases de datos relacionales, se está convirtiendo en una interesante alternativa.

                Pero cuándo uno se inicia en MongoDB se puede sentir perdido. No tenemos tablas, no tenemos registros y lo que es más importante, no tenemos SQL. Aun así, MongoDB es una seria candidata para almacenar los datos de nuestras aplicaciones.

                A lo largo de una serie de artículos vamos a explicar como funciona esta base de datos NoSQL, qué podemos hacer con ella, y cómo podemos hacerlo. Empezamos.</p>
                <p className="subtema-text2" id="texto"> ¿Qué es MongoDB?</p>

                <p className="subtema-text" id="texto">En un artículo anterior ya hablamos sobre MongoDB. Recordemos. MongoDB es una base de datos orientada a documentos. Esto quiere decir que en lugar de guardar los datos en registros, guarda los datos en documentos. Estos documentos son almacenados en BSON, que es una representación binaria de JSON.
                Una de las diferencias más importantes con respecto a las bases de datos relacionales, es que no es necesario seguir un esquema. Los documentos de una misma colección - concepto similar a una tabla de una base de datos relacional -, pueden tener esquemas diferentes.</p>
            </div>
        </body>
    );
}

export default Subtema;