import React from "react";

const SeccionesCard = ({title,background}) =>{
    //const card_bg = `background:url(${background}]) no-repeat center;`
    return(
        <div
            className="tc w-100"
        >
            <p>{title}</p>
        </div>
    )
}

export default SeccionesCard;
