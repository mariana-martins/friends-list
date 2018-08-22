import React from "react";
import ReactDOM from "react-dom";

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ricardo",
      friends: ["Maria Pereira", "Samuel Freitas", "Luiza Maciel"]
    };
  }

  render() {
    return (
      <div>
        <h3>
          Name:
          {this.state.name}
        </h3>
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {" "}
          {this.props.names.map(friend => (
            <li>{friend}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<FriendsContainer />, document.getElementById("root"));
