import React from "react";
import './FAQ.css';

const FAQ = () => {

    return(
        <body className="faq-container">
            <div className="faq-view">
                <h1 className="faq-tittle"> FAQ </h1>
                
                <h3 className="faq-subtittle">¿Quiénes somos?</h3>
                <p className="faq-text">Somos un equipo que busca ayudar a las personas con discapacidad visual a facilitarles su aprendizaje y su vida como estudiantes, por ello hemos creado esta página que ofrece una mejor experiencia de usuario y también más accesible para este grupo de individuos. Nuestro trabajo viene desde un lugar de empatía, ya que comprendemos lo difícil que es encontrar un buen y fácil lugar donde consumir información util para su dia a dia o ya sea por puro interes.</p>
                
                <h3 className="faq-subtittle">¿Cómo usar correctamente la página?</h3>
                <p className="faq-text">La navegación en HK acádemy se realiza a través del teclado, pero para realizarla de manera debida debemos de refrescar un "contador" de navegación, esto se realiza haciendo clic con el mouse en cualquier parte de la página, esto para que puedas navegar desde las disponibilidades primarias que hemos preparado para nuestros usuarios. Así que, cada vez que cambies de página, por favor haz clic para que empieces dónde te hemos indicado. Gracias 😄</p>
            </div>
        </body>
    );
}

export default FAQ;