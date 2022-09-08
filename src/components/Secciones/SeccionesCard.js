import React from "react";

const SeccionesCard = ({title,bg}) =>{
    return(
        <div
            className="flex justify-center items-center h-50 ma3"
            style={{
                backgroundImage: 'url('+require('../../assets/3.jpg')+')',
                backgroundPositionY: 'center',
                backgroundSize: '100%'
            }}
        >
            {title}
        </div>
    )
}

export default SeccionesCard;
