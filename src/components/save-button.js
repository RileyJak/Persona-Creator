import React, { Component } from "react";
import "../css/save-button.css";

class SaveButton extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
    }
    return (
      <button
        className="SaveButton"
        onClick={handleClick}
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default SaveButton;
