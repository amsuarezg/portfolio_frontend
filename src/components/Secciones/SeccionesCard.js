import React from "react";

const SeccionesCard = ({ title, bg, len }) =>{
    const card_h = (100/len)-7;
    const card_bg ='linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url('+require(`../../assets/${bg}`)+')';
    return(
        <div className="seccard_out ma3">
            <div
                className="flex f3 secdim justify-center items-center seccard pointer"
                style={{
                    backgroundImage: card_bg,
                    height: `${card_h}vh`,
                }}
            >
                {title}
            </div>
        </div>
    )
}

export default SeccionesCard;
