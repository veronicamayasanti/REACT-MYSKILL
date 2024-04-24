import React  from 'react';
import ReactDOM from 'react-dom';

function Header(){
    return (
        <div>
            <h1>Tutorial ReactJS untuk Pemula</h1>
            <h2>Panduan step by step belajar ReactJS</h2>
        </div>
    );
};

ReactDOM.render(<Header/>, document.getElementById('root'));

export default Header;

