import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { auth } from "./components/firebase/firebase";
// import { Provider } from "./components/firebase/context";
// import { config } from "./components/firebase/firebase";
// import { FirebaseProvider, Auth } from "react-firebase-context";

import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/pages/About";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Item from "./components/items/Item";
import NotFound from "./components/pages/NotFound.js";
class App extends Component {
  privateRoute = ({ component: Component, ...rest }) => {
    const { isLoggedIn, user } = this.state;
    return (
      <Route
        {...rest}
        render={props =>
          this.isLoggedIn ? (
            <Dashboard {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin"
              }}
            />
          )
        }
      />
    );
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/item/:id" component={Item} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
