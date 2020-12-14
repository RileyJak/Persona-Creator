import React, { Component } from "react";
import { Link } from "react-router-dom";
import { provider, auth } from "../data/firebase";
import "../css/menu.css";

class Menu extends Component {
	render() {
		var visibility = "hide";

		if (this.props.menuVisibility) {
			visibility = "show";
		}

		const signOut = async () => {
			try {
				await auth.signOut();
			} catch (error) {
				console.error(error);
			}
		};

		return (
			<div
				id="flyoutMenu"
				onMouseDown={this.props.handleMouseDown}
				className={visibility}
			>
				<Link to="/home">
					<h2 className="nav">Home</h2>
				</Link>

				<Link to="/saved">
					<h2 className="nav">Saved</h2>
				</Link>

				<Link to="/settings">
					<h2 className="nav">Settings</h2>
				</Link>

				<Link to="/">
					<h2 onClick={signOut} className="nav">
						Logout
					</h2>
				</Link>
			</div>
		);
	}
}
export default Menu;
