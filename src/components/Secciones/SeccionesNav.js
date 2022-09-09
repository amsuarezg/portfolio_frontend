import React from "react";

const SeccionesNav = () => {
    return(
        <div>
            <div className="tc pa3 flex flex-column items-center ml4 secnav">
                <p className="secnavlink mt3 mb3">INICIO</p>
                <p className="secnavlink mt3 mb3">FOTOGRAFÍA</p>
                <p className="secnavlink mt3 mb3">VIDEO</p>
                <p className="secnavlink mt3 mb3">CINEFECTOS</p>
                <p className="secnavlink mt3 mb3">PROYECTOS <br/> EN DESARROLLO</p>
                <p className="secnavlink mt3 mb3">SOBRE MATEO</p>
                <p className="secnavlink mt3 mb3">CONTACTO</p>
            </div>
        </div>
    )
}

export default SeccionesNav;
