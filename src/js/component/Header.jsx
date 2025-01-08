import React from "react";

function Header (){

return(
    <div className="navbar">
        <h1 className="title">Start Bootstrap</h1>

        <h4 className="hyperlinks">
        <a href="#" className="home">Home</a> 
        <a href="#" className="about">About</a> 
        <a href="#" className="services">Services</a> 
        <a href="#" className="contact">Contact</a> 
        </h4>

    </div>
    );
}

export default Header