import React from 'react';
import ReactDOM from 'react-dom';


class Change extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "judul ini akan berubah",
            subTitle: "perhatikan baik baik jangan sampai kedipkan matamu"
        }
    }

    ChangeTitle = () => {
        this.setState({
            title: "maya developer sedang belajar ReactJS"
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.title}</h1>
                <h3>{this.state.subTitle}</h3>
                <button onClick={this.ChangeTitle}>klik aku yaa</button>
            </div>
        )
    }
}

ReactDOM.render(<Change />, document.getElementById('root'));

export default Change;