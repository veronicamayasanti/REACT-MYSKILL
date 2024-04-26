import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.sender}</p>
                <p>{this.props.content}</p>
                <hr/>
            </div>
        )
    }
}

class ChatBox extends React.Component {
    render(){
        return (
            <div>
                <Message sender = "maya" content= "sudah belajar react?"/>
                <Message sender="santi" content="ini sedang belajar react?" />
                <Message sender="veronica" content="oke dehh selamat belajar react?" />
            </div>
        )
    }
}


ReactDOM.render(<ChatBox />, document.getElementById('root'));

export default ChatBox;