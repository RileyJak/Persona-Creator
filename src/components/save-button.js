import React, { Component } from "react";
import "../css/save-button.css";

class SaveButton extends Component {
  render() {
    return (
      <button
        className="SaveButton"
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default SaveButton;
