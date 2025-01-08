import React from "react";

function Jumbotron(){

        return (
            <div className="jumbotron flex-column justify-content-center m-5">
                <h1 className="theWelcome">A Warm Welcome!</h1>
                <p className="mainText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="jumbotronButton btn btn-primary mb-5" type="submit">Call to Action</button>
            </div>
        );
}

export default Jumbotron