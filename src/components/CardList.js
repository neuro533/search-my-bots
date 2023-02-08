import React from "react";
import Card from "./Card";
// import robots from "./robots";


const CardList=(props)=>{
    

    return(
        <div>
            {
            props.sendingRobotsToSearch.map((element,i)=>{
            return <Card key={i} id={props.sendingRobotsToSearch[i].id} name={props.sendingRobotsToSearch[i].name} email={props.sendingRobotsToSearch[i].email}  />
            
            })
        }
        </div>

    )
}

export default CardList;