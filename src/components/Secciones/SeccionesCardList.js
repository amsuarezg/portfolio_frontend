import React from "react";
import SeccionesCard from "./SeccionesCard";
import {secciones} from "./SeccionesList";

const SeccionesCardList = () => {
    return(
        <div className="pa3">
            {
                secciones.map((seccion,i) =>{
                    return <SeccionesCard key={i} title={seccion.title} />
                })
            }
        </div>
    );
}

export default SeccionesCardList;
