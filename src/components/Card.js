import React from "react";

const Card=({id,name,email})=>{
    return(
        
        <div className="grow bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="Robot is Loading..." />
            <div className="tc">
              <h2>{name}</h2>
              <p>{email}</p>  
            </div>

        </div>
    )
}

export default Card;