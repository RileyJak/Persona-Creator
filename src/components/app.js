import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/log-in";
import Register from "../pages/register";
import Saved from "../pages/saved";
import UserSettings from "../pages/user-settings";
import Welcome from "../pages/welcome";
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/saved">
            <Saved />
          </Route>

          <Route path="/settings">
            <UserSettings />
          </Route>

          <Route path="/" exact>
            <Welcome />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
