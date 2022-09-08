import React from "react";

const SeccionesCard = ({title,bg}) =>{
    const card_bg = "url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center;";
    return(
        <div
            className="flex justify-center items-center h-50 ma3"
            style={{backgroundColor: "blue"}}
        >
            {title}
        </div>
    )
}

export default SeccionesCard;
