import React from "react";
import SeccionesNav from "./SeccionesNav";
import SeccionesCardList from "./SeccionesCardList";
import "../../styles/Secciones.css";

const Secciones = () => {
    return (
        <div className="flex justift-center">
            <SeccionesNav/>
            <SeccionesCardList/>
        </div>
    );
}

export default Secciones;
