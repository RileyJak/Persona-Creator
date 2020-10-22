import React, { Component } from "react";
import "../css/menubutton.css";

class MenuButton extends Component {
  render() {
    return (
      <button
        className="roundButton"
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default MenuButton;
