import React, {useEffect, useState} from "react";
import TrafficLight  from "./TrafficLight";

//create your first component
const Home = () => {
	const [glowRed, setGlowRed]= useState(true);
	const [glowYellow,setGlowYellow]= useState(false);
	const [glowGreen,setGlowGreen]= useState(false);
	const handleClick = (color)=> {
		setGlowRed(color === "red");
    	setGlowYellow(color === "yellow");
    	setGlowGreen(color === "green");                     
	}
	const changeLightsAutomatically = ()=>{
		if(glowRed){
			handleClick("green")
		} else if(glowYellow){
			handleClick("red")
		}else if (glowGreen){
			handleClick("yellow")
		}

	}
	useEffect ( ()=> {
		const interval = setTimeout(changeLightsAutomatically, 10000);

		return ()=> clearInterval(interval);

	},[glowGreen, glowRed, glowYellow] )
	return (
		<div className="traffic-light-box">
			<TrafficLight handleClick={handleClick} color= "red" glow= {glowRed} />
			<TrafficLight handleClick={handleClick} color="yellow" glow= {glowYellow} />
			<TrafficLight handleClick={handleClick} color="green" glow={glowGreen} />
		</div>
	);
};

export default Home;
