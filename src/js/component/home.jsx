import React from "react";


import Header from "./Header";
import Jumbotron from "./Jumbotron";
import TheFooter from "./TheFooter";
import CardContainer from "./CardContainer";
import TheCards from "./TheCards";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Header/>
			<div className="container">
				<Jumbotron/>
				<CardContainer/>
				
			</div>
			<TheFooter />
			
		</>
	);
};

export default Home;
