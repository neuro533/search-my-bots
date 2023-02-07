import React from "react";

const SearchBox=(props)=>{
    return (
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-light-green"
            type="search"
            placeholder="Search Crazy Robots"
            onChange={props.searchChange}
            />

        </div>
    )
}



export default  SearchBox;