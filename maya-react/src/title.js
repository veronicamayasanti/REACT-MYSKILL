import React from "react";

class Title extends React.Component {
    constructor(){
        super();
        this.state = {
            title : "Ini adalah Title pertamaku",
            subTitle : "Ini adalah subtitle pertamaku"
        }
    }

    render(){
        return ( 
            <div>
                <h1> {this.state.title }</h1>
                <h3>{this.state.subTitle}</h3>
            </div>
        )
    }
}

export default Title;
