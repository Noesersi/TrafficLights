import React from "react";

const TrafficLight = ({color, glow, handleClick}) => {
    
    return (
        <div
        onClick={() => handleClick(color)}
        className={"light"+(glow === true ? " glow": "")}
        style={{backgroundColor: color}}
        >
        </div>
    );
}

export default TrafficLight;