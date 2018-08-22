import React from "react";
import ReactDOM from "react-dom";

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ricardo",
      friends: ["Maria Pereira", "Samuel Freitas", "Luiza Maciel"]
    };

    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(friend) {
    this.setState(state => ({
      friends: state.friends.concat([friend])
    }));
  }

  render() {
    return (
      <div>
        <h3>
          Name:
          {this.state.name}
        </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}

class ShowList extends React.Component {
  render() {
    const friend = this.props.names;
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {friend.map(friend => (
            <li key={friend.toString()}>{friend}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: " "
    };

    this.updateNewFriend = this.updateNewFriend.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }

  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    });
  }

  handleAddNew() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ""
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}>Add New Friend</button>
      </div>
    );
  }
}

ReactDOM.render(<FriendsContainer />, document.getElementById("root"));
