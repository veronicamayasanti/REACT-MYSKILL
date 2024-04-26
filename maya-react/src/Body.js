import React from "react";

class Body extends React.Component {
    constructor() {
        super(); 
        this.state = {
            body : "ini adalah isi body pertamaku",
            subBody : "ini adalah subBody pertamaku"
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.body}</p>
                <p>{this.state.subBody}</p>
            </div>
        )
    }
}

export default Body;