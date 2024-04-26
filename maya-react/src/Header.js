import React  from 'react';
import ReactDOM from 'react-dom';

function Header(){
    const myStyle = {
        color: "white",
        backgroundColor: "blue",
        padding: "10",
        fontFamily: "Sans-Serif"
    };
    return (
        <div>
            <h1 style={myStyle}>Tutorial ReactJS untuk Pemula</h1>
            <h2 style={{backgroundColor: "pink"}}>Panduan step by step belajar ReactJS</h2>
        </div>
    );
};

ReactDOM.render(<Header/>, document.getElementById('root'));

export default Header;

