import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

// @withAuth
export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  login = (email, password) => {
    this.props.auth.loginWithEmail(email, password);
  };

  render() {
    return (
      <Paper className="rounded elevation0">
        <h1>Sign In</h1>
        <TextField
          id="email"
          value={this.state.email}
          type="string"
          helperText="Email"
          margin="normal"
        />
        <TextField
          id="password"
          value={this.state.password}
          type="string"
          helperText="Password"
          margin="normal"
        />
      </Paper>
    );
  }
}
