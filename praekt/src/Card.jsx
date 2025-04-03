import React from "react";

function Card({id,name,image}) {
    return(
        <div className="prods">
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}
export default Card