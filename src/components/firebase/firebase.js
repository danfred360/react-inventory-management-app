import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const config = {
  apiKey: "AIzaSyDaP4D0lWgKisdEw_WY2JAO5trGawecbsU",
  authDomain: "space-inventory.firebaseapp.com",
  databaseURL: "https://space-inventory.firebaseio.com",
  projectId: "space-inventory",
  storageBucket: "space-inventory.appspot.com",
  messagingSenderId: "820626166355"
};

firebase.initializeApp(config);

//export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
