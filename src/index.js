import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: "Carlinhos"
        }
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.username}</h1>
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));