import React from "react";

const SeccionesCard = ({ title, bg, len }) =>{
    const card_h = 100/len;
    const card_bg ='linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url('+require(`../../assets/${bg}`)+')';
    return(
        <div
            className="flex f3 dim justify-center items-center ma3 seccard pointer"
            style={{
                backgroundImage: card_bg,
                height: `${card_h}%`,
            }}
        >
            {title}
        </div>
    )
}

export default SeccionesCard;
