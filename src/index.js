import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: "Carlinhos"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.username}</h1>
                <p>Change name:</p>
                <input type="text" value={this.state.username} onChange={this.handleChange} />
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));