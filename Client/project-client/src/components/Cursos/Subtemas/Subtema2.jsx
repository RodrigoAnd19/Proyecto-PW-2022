import { React, useState } from "react";
import './Subtema2.css';
import flecha from '../../../assets/images/back-arrow.png';

const Subtema = () => {

    return (
        <body className="subtema-container">
            <div className="subtema-view">  

                <div className="container">
                    <img className="arrow-img" src={flecha} />
                    <h1 className="subtema-title">Maria DB</h1>
                </div>

                <p className="subtema-text" id="texto">MariaDB Server is one of the most popular open source relational databases. It’s made by the original developers of MySQL and guaranteed to stay open source. It is part of most cloud offerings and the default in most Linux distributions.</p>
                <p className="subtema-text" id="texto"> It is built upon the values of performance, stability, and openness, and MariaDB Foundation ensures contributions will be accepted on technical merit. Recent new functionality includes advanced clustering with Galera Cluster 4, compatibility features with Oracle Database and Temporal Data Tables, allowing one to query the data as it stood at any point in the past.</p>
            </div>
        </body>
    );
}

export default Subtema;