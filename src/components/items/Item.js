import React, { Component } from "react";

export class Item extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <h1>Item {id}</h1>
      </React.Fragment>
    );
  }
}

export default Item;
