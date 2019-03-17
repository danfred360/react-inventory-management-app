import React, { Component } from "react";
import { firestore } from "../firebase/firebase";

export class Dashboard extends Component {
  render() {
    //const { user } = this.props.user;
    // firestore.collection("spaces").where({user.userid}, "==", "CA")
    // .onSnapshot(function(snapshot) {
    //     snapshot.docChanges().forEach(function(change) {
    //         if (change.type === "added") {
    //             console.log("New city: ", change.doc.data());
    //         }
    //         if (change.type === "modified") {
    //             console.log("Modified city: ", change.doc.data());
    //         }
    //         if (change.type === "removed") {
    //             console.log("Removed city: ", change.doc.data());
    //         }
    //     });
    // });
    return <React.Fragment />;
  }
}

export default Dashboard;
