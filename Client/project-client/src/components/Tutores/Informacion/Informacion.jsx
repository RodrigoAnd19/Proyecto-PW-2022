import React from "react";
import './Informacion.css';
import btn_img from '../../../assets/images/Return.png';
import logo from '../../../assets/images/Logo-alt.png';
import documents from '../../../assets/images/documents.png';

import { useNavigate } from 'react-router-dom';

const Informacion = () => {

    const navigate = useNavigate();

    const ocultar = () => {
        document.getElementById('header').style.display = '';
    }

    const execute = () => {
        const change_info = document.getElementById('back');
        
        change_info.addEventListener('click', ocultar);
        change_info.addEventListener('click', () => navigate("/tutores") );
    }

    return (
    <body className="main-alt-cont">
        <div className="information-header">

            <button className="back-button" id="back" onMouseEnter={ execute }>
                <img className="imagenes" src={btn_img} alt="Imagen de flecha hacia atras que implica retornar a la pagina anterior."/>
            </button>

            <figure className="img-container">
                <img className="imagenes" src= {logo} alt="Logo de la pagina, que significa Hellen Keller Academy en braile."/>
            </figure>
        </div>

        <div className="information-data">
            <h1 className="tittle">
                Aplica para ser uno de nuestros Tutores
            </h1>
            <div className="user-data">

                <h3 className="info-tittle">
                    Adjunte su CV
                </h3>

                <button className="documents-button">
                    <img className="imagenes" src= {documents} alt=""/>
                    <p className="text"> Formatos permitidos: PDF. </p>
                </button>

                <input type="file" className="seleccionar-archivo"></input>
                <input type="submit" className="subir-archivo"></input>
                
                <h3>
                    Su perfil sera enviado para revisión
                </h3>

            </div>
        </div>
    </body>
    );
}

export default Informacion;
