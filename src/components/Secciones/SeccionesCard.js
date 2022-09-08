import React from "react";

const SeccionesCard = ({ title, bg, len }) =>{
    const card_h = 100/len;
    return(
        <div
            className="flex justify-center items-center ma3 seccard"
            style={{
                backgroundImage: 'url('+require(`../../assets/${bg}`)+')',
                height: `${card_h}%`,
            }}
        >
            {title}
        </div>
    )
}

export default SeccionesCard;
