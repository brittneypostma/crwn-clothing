import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5YKTKgb366ToAAkdjBupJerVXRIUyY7I",
  authDomain: "crwn-db-2aa35.firebaseapp.com",
  databaseURL: "https://crwn-db-2aa35.firebaseio.com",
  projectId: "crwn-db-2aa35",
  storageBucket: "",
  messagingSenderId: "879908284747",
  appId: "1:879908284747:web:05493f7488dae76e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
