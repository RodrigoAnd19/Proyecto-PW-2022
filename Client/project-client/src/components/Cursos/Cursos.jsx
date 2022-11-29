import React from "react";
import './Cursos.css';
import Lupa from '../../assets/images/lupa.png';
import { useNavigate } from 'react-router-dom';

// .droparea en vez de .document

const Cursos = () => {

    const navigate = useNavigate();

    return (
        <body className="cursos-container">
            <div className="tutores-view">

                <div className="curse-list">
                    <ul>
                        <li className="topic"><a href="#">PROGRAMACIÓN WEB</a>
                            <ul className="sub-topic">
                                <li><a href="#" onClick={ () => navigate("/sub") }>JavaScript</a></li>
                                <li><a href="#">Python</a></li>
                            </ul>
                        </li>
                        <li className="topic"><a href="#">ADMIN. DE BASE DE DATOS</a>
                            <ul className="sub-topic">
                                <li><a href="#">Maria DB</a></li>
                                <li><a href="#">Mongo DB</a></li>
                            </ul>
                        </li>
                        <li className="topic"><a href="#">CALCULO 3</a>
                            <ul className="sub-topic">
                                <li><a href="#">Series de Taylor</a></li>
                                <li><a href="#">Congetura de Collatse</a></li>
                            </ul>
                        </li>
                        <li className="topic"><a href="#">Medicina</a>
                            <ul className="sub-topic">
                                <li><a href="#">Covid 19</a></li>
                                <li><a href="#">Ebola</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <img className="lupa-img" src={ Lupa } />
                <input className="search" placeholder="Buscar">
                    
                </input>

            </div>
        </body>
    );
}

export default Cursos;