import React from "react";
import PropTypes from "prop-types";

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

ShowList.defaultProps = {
  names: []
};

export default ShowList;
