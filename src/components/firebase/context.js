import React, { Component } from "react";

import firebase, { auth } from "./firebase";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state
        // login
      };

    case "LOGOUT":
      return {
        ...state
        // login
      };
    default:
      console.log("Unhandeled action called to reducer.");
      return state;
  }
};

export class Provider extends Component {
  state = {
    user: null,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    // init database
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
