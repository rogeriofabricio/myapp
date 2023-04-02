import React from "react";
import '../styles/body.css';


function Body(props) {
    return (
        <div className="body">
            <span>{props.value}</span>
        </div>
    )
}

export default Body