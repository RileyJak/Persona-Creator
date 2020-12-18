import React, { useState, useEffect } from "react";
import { auth } from "../data/firebase";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Saved from "../pages/saved";
import UserSettings from "../pages/user-settings";
import Welcome from "../pages/welcome";
import Footer from "./footer";
import "../css/main.css";

function AuthRoute(props) {
	const { isAuth, children, ...routeProps } = props;
	return (
		<Route {...routeProps}>{isAuth ? children : <Redirect to="/" />}</Route>
	);
}
function App() {
	const [user, setUser] = useState(null);
	const isAuth = user !== null;

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((currentUser) => {
			setUser(currentUser);
		});
		return unsubscribe;
	}, []);

	const [name, setName] = useState();
	const [role, setRole] = useState();
	const [company, setCompany] = useState();

	const onNameChange = (event) => {
		setName(event.target.value);
	};

	const onRoleChange = (event) => {
		setCompany(event.target.value);
	};
	const onCompanyChange = (event) => {
		setRole(event.target.value);
	};

	return (
		<>
			<BrowserRouter>
				<Switch>
					<AuthRoute path="/home" isAuth={isAuth}>
						<Home user={user} />
					</AuthRoute>

					<Route path="/register">
						<Register user={user}/>
					</Route>

					<Route path="/saved">
						<Saved user={user} />
					</Route>

					<Route path="/settings">
						<UserSettings
							setName={setName}
							setRole={setRole}
							setCompnay={setCompany}
							name={name}
							role={role}
							company={company}
						/>
					</Route>

					<Route path="/" exact>
						<Welcome
							setName={setName}
							setRole={setRole}
							setCompnay={setCompany}
							name={name}
							role={role}
							company={company}
						/>
					</Route>
				</Switch>
			</BrowserRouter>

			<Footer />
		</>
	);
}

export default App;
