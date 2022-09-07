import React from "react";
import SeccionesNav from "./SeccionesNav";
import SeccionesCardList from "./SeccionesCardList";

const Secciones = () => {
    return (
        <div className="flex flex-wrap justift-center">
            <SeccionesNav/>
            <SeccionesCardList/>
        </div>
    );
}

export default Secciones;
